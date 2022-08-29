import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/User";

const newUser = async (req, res) => {
  const {username, email} = req.body;
  console.log(email)
  try {
    await connectMongo();

    if(await User.findOne({username})){
      return res.status(401).json({usernameExists: true})
    }

    if(await User.findOne({email})){
     
      console.log("found", email)
      return res.status(401).json({emailExists: true})
    }

    await User.create(req.body);
    res.status(201).send({message: "New user created"});
  } catch(error) {
    console.log(error);
    res.status(401).send({message: "Fatal error"});
  }
}

export default newUser;