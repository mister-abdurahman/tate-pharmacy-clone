"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Session, User } from "next-auth";

export interface bookingDataType {
  startDate: string | undefined;
  endDate: string | undefined;
  numNights: number;
  cabinPrice: number;
  cabinId: number;
}

interface userType extends User {
  guestId?: string;
}
export interface sessionType extends Session {
  user?: userType | undefined;
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/profile",
  });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
