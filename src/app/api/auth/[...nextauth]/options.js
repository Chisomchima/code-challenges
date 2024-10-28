import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { request } from "../../../../utils/request";

const credentialsProviderOptions = {
  name: "Login",
  id: "login",
  async authorize(credentials) {
    if (credentials?.email === '' || credentials?.password === '') {
      return null;
    }
    const { email, password } = credentials;
    try {
      const json = await request("POST", `/auth/login`, {
        data: { email, password },
      });
      return json;
    } catch (err) {
      console.error("Authorization error:", err);
      return err
    }
  },
};

export const authOptions = {
  providers: [CredentialsProvider(credentialsProviderOptions)],
  callbacks: {
    async jwt({ token, user }) {
      console.log({user, token})

      if (user) {
        token.access = user?.content?.token?.token;
      }
      await Promise.resolve();
      return {user, token};
    },
    async session({ session, token }) {
      // console.log({session, token})
      // session.token = token.access;
      // await Promise.resolve();
      return {session, token};
    },
  },

  pages: {
    signIn: "/login",
  },
};

export function auth(...args) {
  return getServerSession(...args, authOptions);
}
