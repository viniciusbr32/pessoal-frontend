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

interface ModalCountProps {
	count: number;
	open: boolean;
	onOpenChange: () => void;
}

export function ModalCountDelete({
	count,
	open,
	onOpenChange,
}: ModalCountProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogOverlay className="fixed inset-0 z-50 shadow-none bg-none" />
			<DialogContent className="sm:max-w-[425px]  shadow-none">
				<DialogHeader>
					<DialogTitle>Deletar Categoria</DialogTitle>
					<DialogDescription>
						Essa Categoria está atrelado a {count} posts, Não pode ser removida
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button type="submit" onClick={onOpenChange}>
						Fechar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
