import { getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    const prisma = new PrismaClient();
    if (session) {
        console.log(session);
        const userFeedbacks = await prisma.feedback.findMany({
            where: {
                userId: session.user.id
            }
        })
        console.log(userFeedbacks);
        res.status(200).json({
            ok:true,
            data:userFeedbacks
        })
    } else {
        res.status(401).json({
            ok:false,
            session:null
        })
    }
  }
  