import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../utils/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let id = req.query.id as string;
  console.log(id);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error finding user' });
  }
};

export default handler;
