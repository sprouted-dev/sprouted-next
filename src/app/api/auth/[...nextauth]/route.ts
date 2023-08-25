import NextAuth, { type NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Coinbase from "next-auth/providers/coinbase";

const {
  COINBASE_CLIENT_ID,
  COINBASE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
    }),
    Coinbase({
      clientId: COINBASE_CLIENT_ID,
      clientSecret: COINBASE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
