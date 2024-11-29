import { MongoClient, ServerApiVersion } from "mongodb";

let db
export const connectDB =async () => {
  if(db) return db;
  try {
    const uri = `mongodb+srv://suitetrack:l2PnToJ8rwDAHxXo@cluster0.i5to1lc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    const client = new MongoClient(uri, {
      serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("suiteTrack");
    return db
  } catch (error) {
    console.log(error);
  }
}