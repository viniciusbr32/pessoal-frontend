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
	comments: Comment[];
}

export interface Comment {
	content: string;
	created_at: string;
	user: {
		name: string;
	};
}

export async function fetchPostsDetails(id: string): Promise<Post> {
	const response = await api.get(`/post/${id}`);
	return response.data;
}

export const usePostsDetails = (id: string) => {
	return useQuery<Post, Error>({
		queryKey: ["posts-details"],
		queryFn: () => fetchPostsDetails(id),
		enabled: !!id,
	});
};
