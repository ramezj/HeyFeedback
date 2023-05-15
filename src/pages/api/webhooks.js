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
            isSubscribed:true,
            subscription_id: req.body.subscription_id,
            subscription_update_url:req.body.update_url,
            subscription_cancel_url:req.body.cancel_url,
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
    if (req.body.alert_name == "subscription_cancelled") {
      console.log(req.body);
    }
  }
  