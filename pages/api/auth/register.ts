import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
import { hash } from 'bcrypt';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method forbidden' });
    return;
  }

  try {
    // Check if the user already exists
    let user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    // User already exists
    if (user) {
      return res.status(401).json({ message: 'User already exists' });
    }

    // User does not exist begin creating new user
    hash(req.body.password, 10, async (err, hash) => {
      const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: new Date(req.body.dob),
        email: req.body.email,
        phone: req.body.phone,
        password: hash,
        avatar: null,
      };
      // create new user
      await prisma.user.create({ data: newUser });
      res.status(200).json({ message: `${newUser.email} registered!` });
    });
  } catch {
    res.status(500).json({ message: 'Fatal Error' });
  }
}

export default handler;
