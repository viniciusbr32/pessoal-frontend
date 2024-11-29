import { Label } from "@/components/ui/label";
import { DashboardLayout } from "./layout/dashboard-layout";
import { Input } from "@/components/ui/input";

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

export function CreatePost() {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }], // Tamanhos de cabeçalho
			["bold", "italic", "underline"], // Estilos de texto
			["image", "link"], // Botões de imagem e link
			[{ list: "ordered" }, { list: "bullet" }], // Listas
			["clean"], // Limpar formatação
		],
	};

	return (
		<DashboardLayout>
			<h1 className="mb-6 text-3xl font-bold">Criar Novo Post</h1>
			<div className="grid grid-cols-2 gap-6">
				<form className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="title">Título</Label>
						<Input
							id="title"
							placeholder="Digite o título do post"
							className="bg-zinc-800 border-zinc-700 text-zinc-100"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="category">Categoria</Label>
						<Select>
							<SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
								<SelectValue placeholder="Selecione uma categoria" />
							</SelectTrigger>
							<SelectContent className="bg-zinc-900 border-zinc-700">
								<SelectItem value="tech">Tecnologia</SelectItem>
								<SelectItem value="lifestyle">Estilo de Vida</SelectItem>
								<SelectItem value="travel">Viagens</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<ReactQuill theme="snow" modules={modules} />
					</div>

					<div className="flex justify-end w-full">
						<Button
							className="text-white bg-purple-600 hover:bg-purple-700"
							size="lg"
						>
							Publicar
						</Button>
					</div>
				</form>
				<h1>Teste</h1>
			</div>
		</DashboardLayout>
	);
}
