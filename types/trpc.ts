import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type * as schema from "@/lib/db/schema";

export interface Context {
  db: NodePgDatabase<typeof schema>;
  headers: Headers;
  // Add user/session here when authentication is implemented
  // user?: User;
}

export type { AppRouter } from "@/lib/trpc/router";
