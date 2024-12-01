import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface CategoriesProps {
	name: string;
	id: string;
	_count: {
		posts: number;
	};
}

export async function fetchCategories(
	token: string,
): Promise<CategoriesProps[]> {
	const response = await api.get("/categorie", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useCategories = (token: string) => {
	return useQuery<CategoriesProps[], Error>({
		queryKey: ["categories"],
		queryFn: () => fetchCategories(token),
		enabled: !!token,
	});
};
