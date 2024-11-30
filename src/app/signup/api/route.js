import { NextResponse } from "next/server.js";
import { connectDB } from "../../../lib/connectDB.js";
import bcrypt from 'bcrypt'
export const POST = async (request) => {

  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const exist = await userCollection.findOne({email: newUser.email});
    if(exist){
      return NextResponse.json({messege: "User Already Exist"}, {status: 400});
    }
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const resp = await userCollection.insertOne({...newUser, password: hashedPassword});


    return  NextResponse.json({messege: "User Created"}, {status: 200});
  } catch (error) {
    return  NextResponse.json({messege: "Something went wrong",error}, {status: 500});
  }

}