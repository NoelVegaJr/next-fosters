import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  try {
    await prisma.animal.create({ data: req.body });
    res.status(201).json({ message: 'animal created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'something went wrong' });
  }
}
