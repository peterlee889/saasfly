import { getCurrentUser as getNextAuthUser } from "./nextauth";

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export { authOptions } from "./nextauth";
export { auth } from "./nextauth";

export async function getCurrentUser() {
  return await getNextAuthUser();
}
