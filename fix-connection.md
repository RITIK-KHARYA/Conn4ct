# Quick Fix for Supabase Connection

## The Problem
Your password contains `@` which breaks the connection string parsing. The connection string shows `postgres:****@2005@db...` which is malformed.

## Solution: Use Transaction Pooler Connection String

1. **Go to Supabase Dashboard**
   - Navigate to: **Settings** → **Database**
   - Scroll to **Connection string** section

2. **Select "Transaction pooler"** (not Direct connection)

3. **Select "URI" format** (not JDBC or other formats)

4. **Copy the connection string** - it will look like:
   ```
   postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
   ```
   Note: Port is **6543** (not 5432)

5. **Update your `.env` file**:
   ```env
   DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
   ```

6. **If the password still has special characters**, you may need to URL-encode it:
   - `@` → `%40`
   - `#` → `%23`
   - `$` → `%24`

## Alternative: Fix Direct Connection Password

If you want to use Direct connection, encode your password:

1. Get your raw password from Supabase
2. Encode it using Node.js:
   ```bash
   node -e "console.log(encodeURIComponent('YOUR-RAW-PASSWORD'))"
   ```
3. Replace the password in your connection string with the encoded version

## Test the Connection

After updating `.env`, test with:
```bash
npx tsx test-connection.ts
```

Then try:
```bash
npx drizzle-kit push
```

