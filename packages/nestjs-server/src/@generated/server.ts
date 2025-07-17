import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  healthRouter: t.router({
    getUser: publicProcedure.input(z.object({
      name: z.string(),
      age2: z.number(),
      breed: z.enum(['Labrador', 'Corgi', 'Beagle', 'Golden Retriver']),
    })).output(z.object({
      name: z.string(),
      age2: z.number(),
      breed: z.enum(['Labrador', 'Corgi', 'Beagle', 'Golden Retriver']),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  modelServiceRouter: t.router({
    getModelConfig: publicProcedure.input(z.object({
      modelKey: z.string(),
    })).output(z.object({
      model: z.literal("dashboard"),
      name: z.literal("\u7535\u5546\u7CFB\u7EDF"),
      menu: z.tuple([z.object({
        key: z.literal("product"),
        name: z.literal("\u5546\u54C1"),
        menuType: z.literal("module"),
        moduleType: z.literal("custom"),
        customConfig: z.object({
          path: z.literal("/todo")
        })
      }), z.object({
        key: z.literal("order"),
        name: z.literal("\u8BA2\u5355"),
        menuType: z.literal("module"),
        moduleType: z.literal("custom"),
        customConfig: z.object({
          path: z.literal("/todo")
        })
      }), z.object({
        key: z.literal("client"),
        name: z.literal("\u5BA2\u6237\u7BA1\u7406"),
        menuType: z.literal("module"),
        moduleType: z.literal("custom"),
        customConfig: z.object({
          path: z.literal("/todo")
        })
      })])
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

