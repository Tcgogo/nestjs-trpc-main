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
      name: z.literal('bilibili'),
      desc: z.literal('bilibili\u7BA1\u7406\u7CFB\u7EDF'),
      homePage: z.object({
        path: z.literal('/todo'),
        query: z.object({
          menuKey: z.literal(''),
        }),
      }),
      menu: z.tuple([z.object({
        key: z.literal('traffic'),
        name: z.literal('\u6D41\u91CF\u7BA1\u7406'),
        menuType: z.literal('module'),
        moduleType: z.literal('sider'),
        sideConfig: z.object({
          menu: z.tuple([z.object({
            key: z.literal('student'),
            name: z.literal('\u5B66\u5458\u6D41\u91CF'),
            menuType: z.literal('module'),
            moduleType: z.literal('custom'),
            customConfig: z.object({
              path: z.literal('/todo'),
            }),
          })]),
        }),
      })]),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getModelConfig2: publicProcedure.input(z.object({
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
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getModelConfig3: publicProcedure.input(z.object({
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

