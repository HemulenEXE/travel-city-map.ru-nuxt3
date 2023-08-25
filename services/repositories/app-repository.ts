import { useNuxtApp } from '#imports'

export default {
  fetchCategory: async () => {
    const { $http } = useNuxtApp()
    const { data } = await $http.get('/api/category')
    return data.value
  },
  fetchSubCategory: async () => {
    const { $http } = useNuxtApp()
    const { data } = await $http.get('/api/category/subcategory')
    return data.value
  },
  fetchChronologyRoute: async (params: object) => {
    const response = await fetch('https://49f4-95-174-102-182.ngrok-free.app/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    return response
  }
}
