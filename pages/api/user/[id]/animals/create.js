import connectDB from '../../../../../utils/db'
export default async function handler(req, res) {
  console.log(req.body)

  try {
    const client = await connectDB();
    await client.db().collection('animals').insertOne(req.body)
    client.close()
  } catch(error) {
    client.close()
    console.log(error);
    res.status(500)
  }

  res.json({message: "img upload api"})
  return
}