import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {  
  providers: [
    GithubProvider({
      // @ts-ignore
      clientId: process.env.GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
      authorization: "https://github.com/login/oauth/authorize?scope=read:user+user:email"
    }),
  ],
}

export default NextAuth(authOptions);
