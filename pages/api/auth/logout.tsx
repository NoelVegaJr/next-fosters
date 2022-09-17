import { NextApiRequest, NextApiResponse } from 'next';
import { NextRouter } from 'next/router';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("logging out'");
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth', '', {
      expires: new Date(0),
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      path: '/',
    })
  );

  res.json({ message: 'logged out' });
}
