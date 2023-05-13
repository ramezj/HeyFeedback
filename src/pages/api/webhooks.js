import { prisma } from './utils/db'

export default async function handler(req, res) {
    // Webhooks to accept payments.
    const { body, method } = req;
    if(method !== "POST") {
      return res.status(405).json({
        message:"Method Not Allowed"
      })
    }
    if(req.body.alert_name == "subscription_created") {
      try {
        const user = await prisma.user.update({
          where: {
            id:req.body.passthrough
          },
          data: {
            isSubscribed:true
          }
        })
        if(!user) {
          res.status(404).json({
            ok:false,
            data: "user not found"
          })
        }
        return res.status(200).json({
          ok:true,
          data:user
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          ok:false,
          data:error
        })
      }
    }
  }
  