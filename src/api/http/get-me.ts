import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface MeProps {
	name: string;
}

export async function fetchPostsDetails(token: string): Promise<MeProps> {
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
		queryFn: () => fetchPostsDetails(token),
		enabled: !!token,
	});
};
