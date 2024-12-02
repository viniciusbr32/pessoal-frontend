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

interface ModalDeletProps {
	open: boolean;
	onOpenChange: () => void;
	id: string;
	removeCategorie: (id: string) => void;
}

export function ModalDeleteCategorie({
	open,
	onOpenChange,
	id,
	removeCategorie,
}: ModalDeletProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogOverlay className="fixed inset-0 z-50 shadow-none bg-none" />
			<DialogContent className="sm:max-w-[425px]  shadow-none">
				<DialogHeader>
					<DialogTitle>Deletar Categoria</DialogTitle>
					<DialogDescription>
						Tem Certeza que deseja remover ? Essa ação não pode ser desfeita
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button type="submit" onClick={() => removeCategorie(id)}>
						Deletar Categoria
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
