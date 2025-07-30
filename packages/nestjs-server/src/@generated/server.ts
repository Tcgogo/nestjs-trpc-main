import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

import { modelSchema } from "../data/model/zod-model";
const appRouter = t.router({
  model: t.router({
    getModelConfig: publicProcedure.input(z.object({
      modelKey: z.string(),
    })).output(modelSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

