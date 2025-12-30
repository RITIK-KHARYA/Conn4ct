# Supabase Connection Guide for Drizzle

## Connection Types in Supabase

Supabase provides 3 connection methods:

### 1. **Direct Connection** (Port 5432)
- Direct connection to PostgreSQL
- **Use case**: Local development, migrations (drizzle-kit)
- **Limitation**: May timeout or have connection limits
- **Format**: `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### 2. **Transaction Pooler** (Port 6543)
- Connection pooler optimized for transactions
- **Use case**: Serverless functions, high concurrency
- **Format**: `postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres`

### 3. **Session Pooler** (Port 6543)
- Connection pooler that maintains sessions
- **Use case**: Applications needing session state
- **Format**: `postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true`

## For Drizzle Kit (Migrations)

**Recommended**: Use **Direct Connection** for `drizzle-kit push` and migrations.

However, if you're getting timeout errors:
1. Try using the **Transaction Pooler** connection string
2. Make sure your password is URL-encoded
3. Check if your network/firewall allows connections to Supabase

## How to Get Your Connection String

1. Go to Supabase Dashboard → **Settings** → **Database**
2. Scroll to **Connection string** section
3. For migrations, try:
   - **Direct connection** first (URI format)
   - If that times out, use **Transaction pooler** (URI format)
4. Copy the connection string
5. Make sure to URL-encode any special characters in the password

## Password Encoding

If your password contains special characters, encode them:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`

Or use Node.js:
```bash
node -e "console.log(encodeURIComponent('YOUR-PASSWORD'))"
```

