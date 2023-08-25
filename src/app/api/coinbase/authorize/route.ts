import { redirect } from "next/navigation";

const {
  COINBASE_CLIENT_ID,
  COINBASE_REDIRECT_URL,
  COINBASE_SCOPES,
  COINBASE_AUTH_URL,
} = process.env;

export async function GET() {
  const redirectUrl = `${COINBASE_AUTH_URL}?response_type=code&client_id=${COINBASE_CLIENT_ID}&redirect_uri=${COINBASE_REDIRECT_URL}&scope=${COINBASE_SCOPES}`;

  return redirect(redirectUrl);
}
