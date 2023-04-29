import { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    const { body, method } = req;
    if (method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
          });
    };
    const userAgent = req.headers["user-agent"];
    const reqIp = req.headers["x-forwarded-for"];
    const geo = req.headers['x-vercel-ip-country'];
    try {
        const userExists = await prisma.user.findUnique({
            where: {
                id:id
            }
        })
        if (userExists) {
            try {
                const Feedback = await prisma.feedback.create({
                    data:{
                        body: req.body.body,
                        email: req.body.email,
                        rating:req.body.rating,
                        userId:id,
                        ipAddress: reqIp,
                        userAgent:userAgent,
                        geo:geo
                    }
                }) 
                if (Feedback) {
                    return res.status(200).json({
                        ok:true,
                        data:Feedback,
                        error:null
                    });
                } else {
                    return res.status(400).json({
                        ok:false,
                        data:null,
                        error:"Something went wrong on our side :("
                    })
                }
            } catch (error) {
                console.error(error);
                res.status(400).json({
                    ok:false,
                    data:null,
                    error:error
                })
            }
        } 
        else {
            return res.json({
                ok:false,
                data:null,
                HeyFeedbackError:"Wrong User ID"
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            ok:false,
            HeyFeedbackError:"Wrong User ID"
        })
    }
 }