import { notification } from 'antd'
import { QueryClient } from 'react-query'

function queryErrorHandler(error) {
  notification.error({ message: "Notification Error", description: error?.message })
}

function querySuccessHandler(res) {
  notification.success({ message: "Notification Success", description: res?.message })
}
// https://jsonplaceholder.typicode.com/posts
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // 15 minutes
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      retry: 2,
    },
    mutations: {
      onError: queryErrorHandler,
      onSuccess: querySuccessHandler,
    },
  },
})
