import { sendRequest } from "@/utils/api"

export const getPosts = async (params: any) => {
  return await sendRequest<any>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/post`,
    method: "GET",
    queryParams: {
      search: params.search,
      page: params.page || 1,
      items_per_page: 10
    }
  }) as any
}

export const getPostDetail = async (id: string) => {
  return await sendRequest<any>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`,
    method: "GET",
  }) as any
}