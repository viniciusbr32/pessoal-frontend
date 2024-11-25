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

export async function fetchPosts(): Promise<Post[]> {
	const response = await api.get("/post");
	return response.data;
}

export const usePosts = () => {
	return useQuery<Post[], Error>({
		queryKey: ["posts"],
		queryFn: fetchPosts,
	});
};
