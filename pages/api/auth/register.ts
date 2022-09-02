import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../../utils/auth';

const prisma = new PrismaClient();

interface User {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method forbidden' });
    return;
  }

  let registration = req.body as User;
  try {
    let user: User = await prisma.user.findUnique({
      where: {
        email: registration.email,
      },
    });

    if (user) {
      return res.status(401).json({ message: 'User already exists' });
    }
    const hashedPassword = (await hashPassword(
      registration.password
    )) as string;

    const newRegisteredUser = {
      ...registration,
      dob: new Date(registration.dob),
      password: hashedPassword,
      avatar: null,
    };
    console.log(newRegisteredUser);

    await prisma.user.create({ data: newRegisteredUser });
    res.status(200).json({ message: `${newRegisteredUser.email} registered!` });
  } catch {
    res.status(500).json({ message: 'Fatal Error' });
  }
}

export default handler;
