import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
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

      // create json payload
      const claims = {
        userId: user.id,
      };
      // sign the payload and create the jwt
      const jwt = sign(claims, 'SECRET', { expiresIn: '1h' });

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', jwt, {
          maxAge: 3600,
          httpOnly: true,
          sameSite: 'strict',
          secure: false,
          path: '/',
        })
      );
      res.json({ authToken: jwt });
    }
  );
}
