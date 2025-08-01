import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

import { ModelInfoSchema, ModelListSchema } from "../data/model/zod-model";
const appRouter = t.router({
  model: t.router({
    getModelInfo: publicProcedure.input(z.object({
      modelKey: z.string().optional(),
    })).output(ModelInfoSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getModelList: publicProcedure.output(ModelListSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

