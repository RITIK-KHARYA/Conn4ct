import "dotenv/config";
import { Pool } from "pg";

async function testConnection() {
  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is not set in .env file");
    process.exit(1);
  }

  console.log("🔍 Testing database connection...");
  // Mask password but show structure
  const masked = process.env.DATABASE_URL.replace(/:([^:@]+)@/, ":****@");
  console.log("📍 Connection string:", masked);
  
  // Check for common issues
  const url = new URL(process.env.DATABASE_URL);
  console.log("   Username:", url.username);
  console.log("   Host:", url.hostname);
  console.log("   Port:", url.port || "5432 (default)");
  console.log("   Database:", url.pathname.slice(1));
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 10000, // 10 second timeout
    query_timeout: 10000,
  });

  try {
    const result = await pool.query("SELECT NOW() as current_time, current_database() as database");
    console.log("✅ Connection successful!");
    console.log("   Database:", result.rows[0].database);
    console.log("   Server time:", result.rows[0].current_time);
    await pool.end();
    process.exit(0);
  } catch (error: unknown) {
    console.error("❌ Connection failed:");
    const err = error as { message?: string; code?: string };
    console.error("   Error:", err.message);
    if (err.code === "28P01") {
      console.error("\n💡 This is an authentication error. Please check:");
      console.error("   1. Username in your DATABASE_URL");
      console.error("   2. Password in your DATABASE_URL (URL-encode special characters)");
      console.error("   3. Database server is running");
    }
    await pool.end();
    process.exit(1);
  }
}

testConnection();

