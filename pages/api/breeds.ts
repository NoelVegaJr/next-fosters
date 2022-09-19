import prisma from '../../utils/db';

export default async function handler(req, res) {
  const breeds = await prisma.breed.findMany();
  res.json(breeds);
}
