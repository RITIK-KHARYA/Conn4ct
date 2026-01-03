import { db } from "@/lib/db";

export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    db,
    headers: opts.headers,
    // Add user/session here when authentication is implemented
    // Example: 
    // const session = await auth.api.getSession({ headers: opts.headers });
    // return { db, headers: opts.headers, user: session?.user };
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

