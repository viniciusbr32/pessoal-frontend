import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useDeletePost() {
	const mutation = useMutation({
		mutationFn: async (id: string) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.delete(
					`/post/${id}`,

					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					throw new Error(error.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess: () => {
			toast.success("Postagem Deletada com sucesso");
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return mutation;
}
