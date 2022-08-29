import connectDB from '../../../utils/db';
import {hashPassword} from '../../../utils/auth';

async function handler(req, res) {

  if(req.method !== 'POST') {
    res.status(405).json({message: "Method forbidden"});
    return;
  }

  const client = await connectDB();

  const user = await client.db().collection('users').findOne({email: req.body.email})

  if(user) {
    client.close()
    res.status(422).json({message: `The user ${req.body.email} already exists!`})
    return;
  }

  const hashedPassword = await hashPassword(req.body.password);
  const newUser = {
    ...req.body,
    password: hashedPassword
  }
  console.log(newUser)
  await client.db().collection('users').insertOne(newUser);

  res.status(200).json({message: `${newUser.email} registered!`});
  return
}

export default handler;