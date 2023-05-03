import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const authOptions = {
  // Prisma DB
  adapter: PrismaAdapter(prisma),
  // Google Provider
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // Token Callback
  callbacks: {
    async session ({session, token, user}) {
        session.accessToken = token
        session.user.id = user.id
        return session
    }
  },
  // JWT Token.
  secret:process.env.SECRET
}

export default NextAuth(authOptions)