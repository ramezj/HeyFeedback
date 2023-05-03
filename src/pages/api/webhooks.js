import { getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    // Webhooks to accept payments.
    const prisma = new PrismaClient();
  }
  