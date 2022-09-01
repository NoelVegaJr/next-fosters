import connectDB from "../../../utils/db"

const handler = async (req, res) => {
  const {id} = req.query;
  let user;
  try {
    const client = await connectDB();
    user = await client.db().collection('users').findOne({username: id})
    client.close()
  } catch(error) {
    client.close()
    console.log(error)
  }

  const {password, ...rest} = user;

  res.json({...rest});
}

export default handler;