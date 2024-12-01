import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { toast } from "sonner";

export interface PostData {
	title: string;
	content: string;
	categorie: string[];
	user_id: string;
	published: boolean;
}
export function useCreatePost() {
	const mutation = useMutation({
		mutationFn: async (postData: PostData) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.post("/post", postData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					throw new Error(error.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess: () => {
			toast.success("Post criado com sucesso");
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return mutation;
}
