import { ObjectId } from "mongodb";
import connectDB from "../../../utils/db";


export default async  function getAnimal(req, res) {
  const id = req.query.id
  console.log()
  let animal = {};
  try {
    const client = await connectDB();
    animal = await client.db().collection('animals').findOne({_id: ObjectId(id)});
    client.close();
  } catch {
    res.status(404).json({message: "Animal not found"});
  }
  res.json(animal);
};