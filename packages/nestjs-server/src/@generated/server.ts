import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

import { ModelInfoSchema, ModelListSchema } from "../data/model/zod-model";
import { getShopListInput, getShopListOutput, shopCreateInput } from "../app/tables/shop/dto/zod";
const appRouter = t.router({
  model: t.router({
    getModelInfo: publicProcedure.input(z.object({
      modelKey: z.string().optional(),
    })).output(ModelInfoSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getModelList: publicProcedure.output(ModelListSchema).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  tablesShop: t.router({
    index: publicProcedure.input(getShopListInput).output(getShopListOutput).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    create: publicProcedure.input(shopCreateInput).output(z.any()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

