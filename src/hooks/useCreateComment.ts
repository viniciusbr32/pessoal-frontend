import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

interface CommentData {
	post_id: string;
	user_id: string;
	content: string;
}

export function useCreateComment() {
	const mutation = useMutation({
		mutationFn: async (commentData: CommentData) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.post("/comment", commentData, {
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
			toast.success("Comentario criado com sucesso");
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return mutation;
}
