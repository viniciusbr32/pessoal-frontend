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
	open: boolean;
	onOpenChange: () => void;
	onConfirm: () => void;
}

export function ModalDeletePost({
	open,
	onOpenChange,
	onConfirm,
}: ModalCountProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogOverlay className="fixed inset-0 z-50 shadow-none bg-none" />
			<DialogContent className="sm:max-w-[425px]  shadow-none">
				<DialogHeader>
					<DialogTitle>Deletar Post</DialogTitle>
					<DialogDescription>
						Você tem certeza que deseja excluir este Post?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button type="submit" variant="destructive" onClick={onConfirm}>
						Deletar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
