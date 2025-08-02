import { defineQuery, useMutation, useQueryCache } from '@pinia/colada'
import { client } from '@/trpc'

export const useModelStore = defineStore(
  // 唯一ID
  'model',
  () => {
    const modelList = ref<Omit<Model.Info, 'menu'>[]>([])

    const modelData = ref<Model.Info>()

    const currentModel = ref('')

    const queryCache = useQueryCache()

    const ApiModelDataMutation = useMutation({
      key: () => ['model', currentModel.value],
      mutation: () => client.model.getModelInfo.query({
        modelKey: currentModel.value,
      }),
      onSuccess: (data) => {
        currentModel.value = data.model || ''
        modelData.value = data
      },
      onError: (error) => {
        console.log('%c [ error ]-19', 'font-size:13px; background:#336699; color:#fff;', error)
      },
    })

    const useModelListMutation = defineQuery(() => {
      const queryKey = ['modelList']
      const { mutate: mutateFn, ...mutation } = useMutation({
        mutation: () => client.model.getModelList.query(),
        onSuccess: (data) => {
          modelList.value = data
          queryCache.setQueryData(queryKey, data)
        },
        onError: (error) => {
          console.log('%c [ error ]-19', 'font-size:13px; background:#336699; color:#fff;', error)
        },
      })

      async function cacheMutate(refresh = false) {
        const cacheData = queryCache.getQueryData(queryKey)
        if (!refresh && cacheData) {
          return cacheData
        }

        return await mutateFn()
      }

      return {
        ...mutation,
        mutate: cacheMutate,
      }
    })

    const ApiModelListMutation = useModelListMutation()

    return {
      modelList,
      modelData,
      currentModel,
      ApiModelDataMutation,
      ApiModelListMutation,
    }
  },
)
