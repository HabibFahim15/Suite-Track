import { connectDB } from "../../../lib/connectDB.js";
import bcrypt from 'bcrypt'
export const POST = async (request) => {

  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const exist = await userCollection.findOne({email: newUser.email});
    if(exist){
      return Response.json({messege: "User Already Exist"}, {status: 400});
    }
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const resp = await userCollection.insertOne({...newUser, password: hashedPassword});


    return  Response.json({messege: "User Created"}, {status: 200});
  } catch (error) {
    return  Response.json({messege: "Something went wrong",error}, {status: 500});
  }

}