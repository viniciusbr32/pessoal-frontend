import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

interface CategorieData {
	name: string;
}

export function useEditCategorie(id: string) {
	const mutation = useMutation({
		mutationFn: async (categorieData: CategorieData) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.put(
					`/categorie/update/${id}`,
					categorieData,
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
			toast.success("Categoria Editada com sucesso");
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return mutation;
}
