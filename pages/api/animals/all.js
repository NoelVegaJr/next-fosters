import connectDB from '../../../utils/db'
export default async function handler(req, res) {
  console.log("fetching animals api")
  console.log(req.body)
  let animals;
  try {
    const client = await connectDB();
    animals = await client.db().collection('animals').find({}).toArray()
    client.close()
  } catch(error) {
    client.close()
    res.status(500)
  }

  res.json(animals)
  return
}