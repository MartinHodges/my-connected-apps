export const dynamic = "force-dynamic";

import type { NextApiRequest, NextApiResponse } from 'next'
 
type FishTank = {
  name: string,
  id: string
}

type ResponseData = {
  fishTanks: [FishTank]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  switch (req.method) {
    case "GET":
      const response = await fetch(
        `${process.env.API_URL}/api/v1/fish-tanks`,
        {
        cache: "no-store"
        })
    
      if (!response.ok) {
          throw new Error('Failed to fetch fish tanks')
      }
    
      var fishTanks = await response.json();
    
      console.log(fishTanks)
    
      res.status(200).json({fishTanks: fishTanks})
    
    case "PUT":
    case "POST":
    case "DELETE":
      console.log("Method not yet implemented: ", req.method)
      res.status(405).end("Method not yet implemented")
  }
}