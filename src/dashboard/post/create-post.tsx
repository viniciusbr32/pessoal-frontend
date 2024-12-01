import { Label } from "@/components/ui/label";
import { DashboardLayout } from "../layout/dashboard-layout";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { useCategories } from "@/api/http/get-categories";
import type { FormEvent } from "react";
import { type PostData, useCreatePost } from "@/hooks/useCreatePost";
import { useUserDetails } from "@/api/http/get-me";

export function CreatePost() {
	const mutation = useCreatePost();
	const { control, handleSubmit } = useForm<
		PostData & { categorie_id: string }
	>();

	const token = localStorage.getItem("authToken") as string;
	const { data } = useCategories(token);
	const { data: userDetails } = useUserDetails(token);

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline"],
			["image", "link"],
			[{ list: "ordered" }, { list: "bullet" }],
			["clean"],
		],
	};

	if (!userDetails) return null;

	// Função de submit
	const onSubmit = (data: PostData & { categorie_id: string }) => {
		mutation.mutate({
			title: data.title,
			content: data.content,
			categorie: [data.categorie_id],
			user_id: userDetails.id,
			published: true,
		});
	};

	const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(onSubmit)();
	};

	return (
		<DashboardLayout>
			<h1 className="mb-6 text-3xl font-bold">Criar Novo Post</h1>
			<div className="grid grid-cols-2 gap-6">
				<form className="space-y-6" onSubmit={handleCreatePost}>
					<div className="space-y-2">
						<Label htmlFor="title">Título</Label>
						<Controller
							name="title"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<Input {...field} placeholder="Digite o título do post" />
							)}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="category">Categoria</Label>
						<Controller
							name="categorie_id"
							control={control}
							defaultValue=""
							render={({ field }) => {
								return (
									<Select
										value={field.value}
										onValueChange={(value) => field.onChange(value)}
									>
										<SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
											<SelectValue placeholder="Selecione uma categoria" />
										</SelectTrigger>
										<SelectContent className="bg-zinc-900 border-zinc-700">
											{data?.map((category) => (
												<SelectItem value={category.id} key={category.id}>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								);
							}}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="content">Conteúdo</Label>
						<Controller
							name="content"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<ReactQuill {...field} theme="snow" modules={modules} />
							)}
						/>
					</div>

					<div className="flex justify-end w-full">
						<Button
							type="submit"
							className="text-white bg-purple-600 hover:bg-purple-700"
							size="lg"
						>
							Publicar
						</Button>
					</div>
				</form>
			</div>
		</DashboardLayout>
	);
}
