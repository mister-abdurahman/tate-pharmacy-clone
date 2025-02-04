import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";
import { createUser, getUser } from "./data-service";
import getEnvVariable from "./getEnv";

interface sessionType {
  session: {
    user: {
      UserId: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
  user: string;
}
interface signinType {
  user: { UserId: string; email: string; name: string };
  account: string;
  profile: string;
}

const authConfig: any = {
  providers: [
    Google({
      clientId: getEnvVariable("AUTH_GOOGLE_ID"),
      clientSecret: getEnvVariable("AUTH_GOOGLE_SECRET"),
    }),
  ],
  callbacks: {
    authorized({ auth, request }: { auth: { user: string }; request: any }) {
      console.log("auth", auth);
      return !!auth?.user; //!! converts condition to a boolean.
    },
    async signIn({ user, account, profile }: signinType) {
      try {
        const UserExists = await getUser(user.email);
        if (!UserExists) {
          await createUser({
            email: user.email,
            firstName: user.name.split(" ").at(0),
            lastName: user.name.split(" ").at(1),
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }: sessionType) {
      const User = await getUser(session?.user?.email);
      session.user.UserId = User.id;
      session.user.firstName = User.firstName;
      session.user.lastName = User.lastName;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    // signOut: "/logout"
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
