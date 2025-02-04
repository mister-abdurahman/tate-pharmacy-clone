// import { isUserAuthenticated } from "@/services/apiAuth";
// import { AuthContext } from "@/store/authStore";
// import { AuthDialog } from "@/ui/Auth/AuthDialog";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Session } from "@supabase/supabase-js";
import { signIn, signOut, useSession } from "next-auth/react";
import { auth } from "@/app/_lib/auth";
// import { auth } from "@/app/api/auth/[...nextauth]/route";

interface ExtendedSession extends Session {
  user_id: string;
}

async function AuthUISwitch() {
  const session: any = await auth();
  // const { data: session }: any = useSession();
  // console.log(session);

  if (session?.user)
    return (
      <a>
        <Link href={`/profile`}>View Profile</Link>
        {/* <Link href={`/profile/${session?.user?.user_id}`}>View Profile</Link> */}
      </a>
    );
  else
    return (
      <a>
        <Link href={`/profile`}>Log In</Link>
      </a>
    );
}

export default AuthUISwitch;
