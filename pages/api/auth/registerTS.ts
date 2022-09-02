import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userData = {
    ...req.body,
    dob: new Date(req.body.dob)
  }

  try{
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email
      }
    });
  
    if(user) {
      return res.status(400).json({message: `${userData.email} already exists`})
    }

    await prisma.user.create({
      data: userData
    })

  } catch(err){
    console.log(err.message)
    return res.status(500).json({message: err.message})
  }

  res.status(201).json({message: "Successfull"});
}

export default handler;