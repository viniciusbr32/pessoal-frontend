import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CommentProps {
	name: string | undefined;
	post_id: string;
	user_id: string;
}

export function FormComment({ name }: CommentProps) {
	return (
		<div className="space-y-4">
			<Input
				value={name}
				disabled
				placeholder={name}
				className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500"
			/>
			<Textarea
				placeholder="Seu comentário"
				rows={4}
				className="w-full px-3 py-2 text-sm rounded-md bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
			/>
			<Button className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
				Enviar Comentário
			</Button>
		</div>
	);
}
