import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
const {
  COINBASE_CLIENT_ID,
  COINBASE_REDIRECT_URL,
  COINBASE_CLIENT_SECRET,
  COINBASE_TOKEN_URL,
} = process.env;

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return new Response("No code found", { status: 400 });
  }

  const resp = await fetch(
    `${COINBASE_TOKEN_URL}?grant_type=authorization_code&code=${code}&client_id=${COINBASE_CLIENT_ID}&client_secret=${COINBASE_CLIENT_SECRET}&redirect_uri=${COINBASE_REDIRECT_URL}`,
    { method: "POST" }
  );

  const { access_token, refresh_token, expires_in } = await resp.json();

  redirect(
    `http://localhost:3000/bags?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}&state=${state}`
  );
}
