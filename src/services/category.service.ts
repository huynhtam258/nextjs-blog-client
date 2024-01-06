import { sendRequest } from "@/utils/api"

export const getCategories = async () => {
	return await sendRequest<any>({
		url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`,
		method: "GET",
	}) as any
}