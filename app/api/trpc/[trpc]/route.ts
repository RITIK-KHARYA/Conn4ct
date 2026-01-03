import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/lib/trpc/router";
import { createTRPCContext } from "@/lib/trpc/context";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ headers: req.headers }),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
    responseMeta({ type, errors }) {
      // Cache successful GET requests for 1 minute
      if (type === "query" && errors.length === 0) {
        return {
          headers: {
            "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
          },
        };
      }
      return {};
    },
  });

export { handler as GET, handler as POST };

