import { supabase } from "@/app/_lib/supabase";
import { IProfile } from "@/app/_lib/types";

export async function createUser(newUser: any) {
  const { data, error } = await supabase
    .from("user_profiles")
    .insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function getUser(email: string) {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no user in the sign in callback
  return data;
}

export async function getProfileById(id: string) {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data as IProfile;
  } catch (error) {
    console.error(error);
    return error;
  }
}
