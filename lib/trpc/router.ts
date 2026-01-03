import { router, publicProcedure } from "./init";
import { z } from "zod";
import { mediaTable } from "@/lib/db/schema";
import { TRPCError } from "@trpc/server";
import { eq, asc } from "drizzle-orm";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.name ?? "world"}!`,
      };
    }),

  media: router({
    upload: publicProcedure
      .input(
        z.object({
          postId: z.number(),
          url: z.string().url(),
          type: z.enum(["image", "video"]),
          order: z.number().default(0),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const [media] = await ctx.db
          .insert(mediaTable)
          .values({
            postId: input.postId,
            url: input.url,
            type: input.type,
            order: input.order,
          })
          .returning();

        return media;
      }),

    getByPost: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ input, ctx }) => {
        const media = await ctx.db
          .select()
          .from(mediaTable)
          .where(eq(mediaTable.postId, input.postId))
          .orderBy(asc(mediaTable.order));

        return media;
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const [deleted] = await ctx.db
          .delete(mediaTable)
          .where(eq(mediaTable.id, input.id))
          .returning();

        if (!deleted) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Media not found",
          });
        }

        return deleted;
      }),
  }),
});

export type AppRouter = typeof appRouter;
