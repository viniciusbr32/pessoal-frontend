import { Input } from "@/components/ui/input";
import { DashboardLayout } from "./layout/dashboard-layout";
import { Edit2Icon, Plus, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Categories() {
	const mockCategories = [
		{
			id: 1,
			name: "Desenvolvimento Web",
			count: 15,
		},
		{
			id: 2,
			name: "NODEJS",
			count: 15,
		},
		{
			id: 3,
			name: "Back-end",
			count: 15,
		},

		{
			id: 4,
			name: "Back-end",
			count: 15,
		},
	];

	return (
		<DashboardLayout>
			<h1 className="mb-6 text-3xl font-bold text-center">
				Gerenciar Categorias
			</h1>

			<div className="container mx-auto space-y-6">
				<div className="flex items-center gap-3">
					<Input
						placeholder="Nova categoria"
						className="bg-zinc-800 border-zinc-700 text-zinc-100"
					/>
					<Button className="text-white bg-purple-600 hover:bg-purple-700">
						<Plus /> Adicionar Categoria
					</Button>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{mockCategories.map((category) => (
						<Card key={category.id} className="bg-zinc-900 border-zinc-800">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									<span className="text-zinc-100">{category.name}</span>
									<Badge className="text-xs bg-zinc-800 text-zinc-300">
										{category.count} posts
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
								>
									<Trash2Icon className="w-4 h-4" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</DashboardLayout>
	);
}
