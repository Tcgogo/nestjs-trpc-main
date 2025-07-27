import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  model: t.router({
    getModelConfig: publicProcedure.input(z.object({
      modelKey: z.string(),
    })).output(z.object({
      model: z.string(),
      name: z.string(),
      menu: z.tuple([z.object({
        key: z.string(),
        name: z.string(),
        menuType: z.string(),
        moduleType: z.string(),
        customConfig: z.object({
          path: z.string(),
        }),
      }), z.object({
        key: z.string(),
        name: z.string(),
        menuType: z.string(),
        moduleType: z.string(),
        customConfig: z.object({
          path: z.string(),
        }),
      }), z.object({
        key: z.string(),
        name: z.string(),
        menuType: z.string(),
        moduleType: z.string(),
        customConfig: z.object({
          path: z.string(),
        }),
      })]),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

