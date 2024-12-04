import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface Category {
	category: {
		id: string;
		name: string;
	};
}

export interface Post {
	id: string;
	title: string;
	content: string;
	published: boolean;
	created_at: string;
	update_at: string;
	userId: string;
	categories: Category[];
	user: {
		name: string;
	};
}

export async function fetchAllPosts(token: string): Promise<Post[]> {
	const response = await api.get("/allposts", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useAllPosts = (token: string) => {
	return useQuery<Post[], Error>({
		queryKey: ["all-posts"],
		queryFn: () => fetchAllPosts(token),
		enabled: !!token,
	});
};
