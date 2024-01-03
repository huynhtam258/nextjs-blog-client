import { sendRequest } from "@/utils/api"

export const getPosts = async () => {
  return await sendRequest<any>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/post`,
    method: "GET",
  }) as any
}

export const getPostDetail = async (id: string) => {
  return await sendRequest<any>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`,
    method: "GET",
  }) as any
}