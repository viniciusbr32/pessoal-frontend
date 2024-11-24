import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface UserData {
	email: string;
	password: string;
}

export function useLoginUser(endpoint: string) {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async (userData: UserData) => {
			try {
				const response = await api.post(endpoint, userData);
				localStorage.setItem("authToken", response.data.token);
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					console.log("Erro ao logar usuario", error.response?.data.error);
					throw new Error(error.response?.data.error);
				}
				throw new Error("Erro desconhecido");
			}
		},
		onSuccess: () => {
			toast.success("Usuario Logado com sucesso");
			navigate("/");
		},
		onError: (error: Error) => {
			console.log("Erro ao logar usuario", error.message);
		},
	});
	return mutation;
}
