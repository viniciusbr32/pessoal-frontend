import { Input } from "@/components/ui/input";

import { Edit2Icon, Plus, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "../layout/dashboard-layout";
import { useCategories } from "@/api/http/get-categories";
import { useCreateCategorie } from "@/hooks/useCreateCategorie";

import { Badge } from "@/components/ui/badge";
import { ModalCount } from "../components/modal-count-delete";
import { useState } from "react";
import { ModalDeleteCategorie } from "../components/modal-delete-categorie";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteCategorie } from "@/hooks/useDeleteCategorie";

export function Categories() {
	const [open, setOpen] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [selectCategoryCount, setSelectedCategoryCount] = useState(0);
	const [idCategoria, setIdCategoria] = useState("");

	const mutation = useCreateCategorie();

	const token = localStorage.getItem("authToken") as string;
	const { data } = useCategories(token);
	const queryClient = useQueryClient();

	const handleCreateCategorie = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const name = formData.get("categorie") as string;

		if (!name) {
			return;
		}

		mutation.mutate(
			{ name },
			{
				onSuccess: () => {
					queryClient.invalidateQueries();
				},
			},
		);
	};

	const handleDeleteClick = (category: {
		id: string;
		_count: { posts: number };
	}) => {
		if (category._count.posts >= 1) {
			setSelectedCategoryCount(category._count.posts);
			setOpen(true);
			return;
		}
		setOpenModalDelete(true);
		setIdCategoria(category.id);
	};

	const { mutate: deleteCategorie } = useDeleteCategorie();

	const DeleteCategorie = (id: string) => {
		deleteCategorie(id, {
			onSuccess: () => {
				queryClient.invalidateQueries();
				setOpenModalDelete(false);
			},
		});
	};
	return (
		<DashboardLayout>
			<h1 className="mb-6 text-3xl font-bold text-center">
				Gerenciar Categorias
			</h1>

			<div className="container mx-auto space-y-6">
				<form onSubmit={handleCreateCategorie}>
					<div className="flex items-center gap-3">
						<Input
							placeholder="Nova categoria"
							name="categorie"
							className="bg-zinc-800 border-zinc-700 text-zinc-100"
						/>
						<Button className="text-white bg-purple-600 hover:bg-purple-700">
							<Plus /> Adicionar Categoria
						</Button>
					</div>
				</form>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
					{data?.map((category) => (
						<Card key={category.id} className="bg-zinc-900 border-zinc-800">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									<span className="text-zinc-100">{category.name}</span>
									<Badge
										variant="secondary"
										className="bg-zinc-800 text-zinc-300"
									>
										{category._count.posts} posts
									</Badge>
								</CardTitle>
							</CardHeader>
							<CardFooter className="flex justify-end space-x-2">
								<Button
									variant="ghost"
									size="sm"
									className="text-zinc-400 hover:text-zinc-100"
								>
									<Edit2Icon className="w-4 h-4" />
								</Button>
								<Button
									variant="ghost"
									size="sm"
									className="text-zinc-400 hover:text-zinc-100"
									onClick={() => handleDeleteClick(category)}
								>
									<Trash2Icon className="w-4 h-4" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
			<ModalCount
				open={open}
				onOpenChange={() => setOpen(false)}
				count={selectCategoryCount}
			/>

			<ModalDeleteCategorie
				open={openModalDelete}
				onOpenChange={() => setOpenModalDelete(false)}
				id={idCategoria}
				removeCategorie={DeleteCategorie}
			/>
		</DashboardLayout>
	);
}
