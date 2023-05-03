import { getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    // Retreive User data.
    const session = await getServerSession(req, res, authOptions);
    const prisma = new PrismaClient();
    if (session) {
        console.log(session);
        const userFeedbacks = await prisma.feedback.findMany({
            where: {
                userId: session.user.id
            }
        })
        const userInfo = await prisma.user.findUnique({
            where:{ 
                id: session.user.id
            }
        })
        console.log(userInfo);
        res.status(200).json({
            ok:true,
            data:userFeedbacks,
            user:userInfo
        })
    } else {
        res.status(401).json({
            ok:false,
            session:null
        })
    }
  }