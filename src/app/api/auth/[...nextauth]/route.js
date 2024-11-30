import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        try {
          // Connect to the database
          const db = await connectDB();
          const currentUser = await db.collection('users').findOne({ email });
          if (!currentUser) {
            return null;
          }

          // Compare the passwords
          const passwordMatched = bcrypt.compareSync(password, currentUser.password);
          if (!passwordMatched) {
            return null;
          }

          return currentUser;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null; // Return null if an error occurs
        }
      }
    })
  ],
  callbacks: {},
  pages: {
    signIn: "/signin",
  }
});

export { handler as GET, handler as POST };
