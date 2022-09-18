import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
import cookie from 'cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("logging out'");
  try {
    await prisma.session.delete({
      where: {
        id: req.cookies.session,
      },
    });
  } catch {}

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('session', '', {
      expires: new Date(0),
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      path: '/',
    })
  );

  res.json({ message: 'logged out' });
}
