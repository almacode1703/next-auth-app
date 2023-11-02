import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    connectMongo();
  } catch (error) {
    console.log("Error Connecting MongoDB....");
    console.log(error);
  }

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({
        error: "Don't have form data",
      });
    }
    const { username, email, password } = req.body;

    // Check if duplicate users
    const checkExisting = await Users.findOne({ email });

    if (checkExisting)  {
        return res.status(422).json({ message: "user already exist...!" }); 
    }
    

    // hash password
    await Users.create({ username, email, password: await hash(password, 12) })
    .then(result => { 
        console.log(result) 
        res.status(201).json({user : result})
    })
    .catch(error =>{
        console.log(error)
        res.status(404).json(error)
    })
}
    else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST accepted" });
  }
}
