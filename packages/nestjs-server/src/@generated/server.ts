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
    })).output(courseConfigSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

