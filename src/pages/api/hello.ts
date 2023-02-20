// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Response(
    JSON.stringify({
      name: process.env.NEXT_RUNTIME,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
