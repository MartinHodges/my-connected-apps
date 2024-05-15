export const dynamic = "force-dynamic";

import type { NextApiRequest, NextApiResponse } from 'next'
 
type Fish = {
  type: string,
  id: string
}

type ResponseData = {
  fishes: [Fish]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  switch (req.method) {
    case "GET":
      const response = await fetch(
        `${process.env.API_URL}/api/v1/fishes`,
        {
        cache: "no-store"
        })
    
      if (!response.ok) {
          throw new Error('Failed to fetch fishes')
      }
    
      var fishes = await response.json();
    
      console.log(fishes)
    
      res.status(200).json({fishes: fishes})
    
    case "PUT":
    case "POST":
    case "DELETE":
      console.log("Method not yet implemented: ", req.method)
      res.status(405).end("Method not yet implemented")
  }
}