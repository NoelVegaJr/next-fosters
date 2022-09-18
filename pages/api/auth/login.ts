import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
import { compare } from 'bcrypt';
import cookie from 'cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const user = await prisma.user.findFirst({
    where: { email: req.body.email },
  });

  if (!user) {
    return res.status(401).json({ message: 'Incorrect email/password' });
  }

  compare(
    req.body.password,
    user.password,
    async (err: Error, same: Boolean) => {
      if (err || !same) {
        return res.status(401).json({ message: 'Incorrect email/password' });
      }
      // User exists and password matches
      const date = new Date();
      date.setDate(date.getDate() + 1);

      // create session
      try {
        await prisma.session.delete({
          where: {
            userId: user.id,
          },
        });
      } catch {}
      const session = await prisma.session.create({
        data: { userId: user.id, expires: date },
      });

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('session', session.id, {
          expires: date,
          httpOnly: true,
          sameSite: 'strict',
          secure: false,
          path: '/',
        })
      );
      res.json(session);
    }
  );
}
