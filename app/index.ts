import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
}
main();

// future scope ->
// make supabase connection pool to make it more efficient and scalable
// remove orm and use raw sql queries
