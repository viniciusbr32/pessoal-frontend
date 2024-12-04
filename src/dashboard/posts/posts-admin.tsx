import { Button } from "@/components/ui/button";
import { DashboardLayout } from "../layout/dashboard-layout";
import { Link } from "react-router-dom";
import { useAllPosts } from "@/api/http/get-allPosts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import { FormatData } from "@/lib/date";
import { Badge } from "@/components/ui/badge";
import { EditIcon, TrashIcon } from "lucide-react";
import { ModalDeletePost } from "./modal-delete-post";
import { useState } from "react";
import type { Post } from "@/api/http/get-post";
import { useDeletePost } from "@/hooks/useDeletePost";
import { useQueryClient } from "@tanstack/react-query";

export function PostsAdmin() {
	const [open, setOpen] = useState(false);
	const [idPost, setIdPost] = useState("");

	const { mutate: DeleteCategorie } = useDeletePost();
	const queryClient = useQueryClient();

	const token = localStorage.getItem("authToken") as string;
	const { data } = useAllPosts(token);

	const getStatusColor = (status: boolean) => {
		switch (status) {
			case true:
				return "bg-green-500";
			case false:
				return "bg-yellow-500";
			default:
				return "bg-gray-500";
		}
	};

	const handleDeletePost = (post: Post) => {
		setIdPost(post.id);
		setOpen(true);
	};

	const handleConfirm = () => {
		if (!idPost) {
			console.log("Não tem id");
		}

		DeleteCategorie(idPost, {
			onSuccess: () => {
				queryClient.invalidateQueries();
				setOpen(false);
			},
		});
	};

	return (
		<DashboardLayout>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-3xl font-bold">Gerenciar Posts</h1>
				<Button
					asChild
					className="text-white bg-purple-600 hover:bg-purple-700"
				>
					<Link to="/dashboard/new-post">Novo Post</Link>
				</Button>
			</div>
			<div className="grid gap-6">
				{data?.map((post) => (
					<Card key={post.id} className="bg-zinc-900 border-zinc-800">
						<CardHeader>
							<div className="flex items-start justify-between">
								<div>
									<CardTitle className="text-xl text-zinc-100">
										{post.title}
									</CardTitle>
									<p className="text-sm text-zinc-400">
										{FormatData(post.created_at)}
									</p>
								</div>
								<Badge
									className={`${getStatusColor(post.published)} text-zinc-900`}
								>
									{post.published === true ? "Publicado" : "Rascunho"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex items-center gap-1">
								{post.categories.map((categorie) => (
									<Badge
										key={categorie.category.id}
										variant="outline"
										className="bg-zinc-800 text-zinc-300 border-zinc-700"
									>
										{categorie.category.name}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<div className="flex items-center space-x-2">
								<Avatar className="w-8 h-8">
									<AvatarImage
										className="rounded-full"
										src={`https://i.pravatar.cc/32?u=${post.id}`}
										alt={post.user.name}
									/>
									<AvatarFallback>
										{post.user.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<span className="text-sm capitalize text-zinc-400">
									{post.user.name}
								</span>
							</div>
							<div className="flex space-x-2">
								<Button
									variant="ghost"
									size="sm"
									className="text-zinc-400 hover:text-zinc-100"
								>
									<EditIcon className="w-4 h-4" />
								</Button>

								<Button
									variant="ghost"
									size="sm"
									className="text-zinc-400 hover:text-zinc-100"
									onClick={() => handleDeletePost(post)}
								>
									<TrashIcon className="w-4 h-4" />
								</Button>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
			<ModalDeletePost
				open={open}
				onOpenChange={() => setOpen(false)}
				onConfirm={handleConfirm}
			/>
		</DashboardLayout>
	);
}
