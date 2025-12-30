# Fixing DATABASE_URL Connection String

## The Problem
Your Supabase password contains special characters (like `@`, `#`, `$`, etc.) that need to be **URL-encoded** in the connection string.

## Solution

### Option 1: Use Supabase Connection Pooler (Recommended)
Supabase provides a connection pooler URL that's easier to use. In your Supabase dashboard:
1. Go to **Settings** → **Database**
2. Find the **Connection string** section
3. Select **Connection pooling** mode
4. Copy the **URI** format (starts with `postgresql://`)

This URL already has the password properly encoded.

### Option 2: URL-encode Your Password Manually
If your password is `my@pass#123`, you need to encode it:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `/` → `%2F`
- `:` → `%3A`
- `?` → `%3F`
- `=` → `%3D`

**Example:**
- Password: `my@pass#123`
- Encoded: `my%40pass%23123`
- Full URL: `postgresql://postgres:my%40pass%23123@db.xxxxx.supabase.co:5432/postgres`

### Option 3: Use Node.js to Encode
Run this in Node.js to encode your password:
```javascript
encodeURIComponent('your-password-here')
```

## Verify Your Connection String Format
The format should be:
```
postgresql://[username]:[encoded-password]@[host]:[port]/[database]
```

For Supabase:
```
postgresql://postgres:[ENCODED-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

