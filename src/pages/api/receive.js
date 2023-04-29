import { NextRequest } from 'next/server'

export const config = { 
    runtime: 'edge'
}

export default async function handler(req) {
   const currentLocation = req.geo;
   return Response.json(currentLocation);
}