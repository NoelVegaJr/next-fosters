import {MongoClient} from 'mongodb';

export default async function connectDB() {
  const client = await MongoClient.connect('mongodb+srv://noel:Spring120894@fosters.duamo.mongodb.net/fosters?retryWrites=true&w=majority');

  return client
}