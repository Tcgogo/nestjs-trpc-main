import { useMutation, useQuery } from '@pinia/colada'
import { client } from '@/trpc'

export const useModelStore = defineStore(
  // 唯一ID
  'model',
  () => {
    const modelList = ref<Omit<Model.Info, 'menu'>[]>([])

    const modelData = ref<Model.Info>()

    const currentModel = ref('')

    async function apiGetModelData(modelKey: string) {
      const mutation = await useMutation({
        key: ['model'],
        mutation: (key: string) => client.model.getModelInfo.query({
          modelKey: key,
        }),
      })

      const data = await mutation.mutateAsync(modelKey)

      modelData.value = data
    }

    async function apiGetModelList() {
      const query = await useQuery({
        key: ['modelList', currentModel.value],
        query: () => client.model.getModelList.query(),
        enabled: false,
      })

      const { data } = await query.refetch()

      modelList.value = data || []

      if (!currentModel.value) {
        currentModel.value = modelList.value[0]?.model || ''
      }
    }

    return {
      modelList,
      modelData,
      currentModel,
      apiGetModelData,
      apiGetModelList,
    }
  },
)
