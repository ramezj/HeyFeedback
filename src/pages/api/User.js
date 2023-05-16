import { getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]'
import { prisma } from './utils/db'

export default async function handler(req, res) {
    // Retreive User data.
    const session = await getServerSession(req, res, authOptions);
    if (session) {
        const userFeedbacks = await prisma.feedback.findMany({
            where: {
                userId: session.user.id
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        const userInfo = await prisma.user.findUnique({
            where:{ 
                id: session.user.id
            }
        })
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