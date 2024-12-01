import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface MeProps {
	name: string;
	id: string;
	role: string;
}

export async function fetchUserDetails(token: string): Promise<MeProps> {
	const response = await api.get("/me", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useUserDetails = (token: string) => {
	return useQuery<MeProps, Error>({
		queryKey: ["user-details"],
		queryFn: () => fetchUserDetails(token),
		enabled: !!token,
	});
};
