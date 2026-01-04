import { db } from "@/lib/db";
import type { Context } from "@/types/trpc";

export async function createTRPCContext(opts: {
  headers: Headers;
}): Promise<Context> {
  return {
    db,
    headers: opts.headers,
    // Add user/session here when authentication is implemented
    // Example:
    // const session = await auth.api.getSession({ headers: opts.headers });
    // return { db, headers: opts.headers, user: session?.user };
  };
}
