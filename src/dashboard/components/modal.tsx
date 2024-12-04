import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ModalCountProps {
	type: "edit" | "delete" | "warning";
	count: number;
	onConfirm?: () => void;
	open: boolean;
	onOpenChange?: () => void;
	inputValue?: string;
	onInputChange?: (value: string) => void;
}

export function Modal({
	open,
	onOpenChange,
	count,
	type,
	onConfirm,
	inputValue,
	onInputChange,
}: ModalCountProps) {
	const messages = {
		warning: `Essa Categoria está atrelada a ${count} posts, Não pode ser removida.`,
		delete: "Você tem certeza que deseja excluir esta categoria?",
		edit: "Digite o novo nome da categoria",
	};

	const title = {
		warning: "Deletar Categoria",
		delete: "Deletar Categoria",
		edit: "Editar Categoria",
	};

	const buttonTitle = {
		delete: "Deletar",
		warning: "Fechar",
		edit: "Editar",
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogOverlay className="fixed inset-0 z-50 shadow-none bg-none" />
			<DialogContent className="sm:max-w-[425px]  shadow-none">
				<DialogHeader>
					<DialogTitle>{title[type] || null}</DialogTitle>
					<DialogDescription>{messages[type] || null}</DialogDescription>
				</DialogHeader>
				{type === "edit" && (
					<div className="mt-4">
						<Input
							onChange={(e) => onInputChange?.(e.target.value)}
							value={inputValue}
							placeholder={messages.edit}
							className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
						/>
					</div>
				)}
				<DialogFooter>
					<Button
						type="submit"
						onClick={type === "warning" ? onOpenChange : onConfirm}
						variant={type === "delete" ? "destructive" : "secondary"}
					>
						{buttonTitle[type] || null}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
