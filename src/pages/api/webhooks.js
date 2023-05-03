import { getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    // Webhooks to accept payments.
    const prisma = new PrismaClient();
    const { body, method } = req;
    if(method !== "POST") {
      return res.status(405).json({
        message:"Method Not Allowed"
      })
    }
    if(req.body.alert_name == "subscription_created") {
      // Upgrade user's payment status
      try {
        const updateUser = await prisma.user.update({
          where: {
            id:req.body.passthrough
          },
          data:{
            isSubscribed:true,
            subscription_id: req.body.subscription_id,
            subscription_update_url:req.body.update_url,
            subscription_cancel_url:req.body.cancel_url,
          }
        });
        if(updateUser) {
          return res.status(200).json({
            ok:true,
            message:'Subscribed Successfully.'
          })
        } else {
          return res.status(400).json({
            ok:false,
            message:"Couldn't Subscribe User"
          })
        }
      } catch (error) {
        return res.status(404).json({
          ok:false,
          message:'Something went completely wrong',
          error:error
        })
      }
    }
  }
  