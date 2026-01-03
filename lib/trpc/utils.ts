export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Browser should use relative path
    return "";
  }
  
  // SSR should use absolute URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Fallback to localhost for development
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

