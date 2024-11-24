import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface UserData {
	name: string;
	email: string;
	password: string;
}

export function useCreateUser(endpoint: string) {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async (userData: UserData) => {
			try {
				const response = await api.post(endpoint, userData);
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					console.log("Erro ao criar usuario", error.response?.data.error);
					throw new Error(error.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess: () => {
			toast.success("Usuario criado com sucesso");

			navigate("/login");
		},
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
	return mutation;
}
