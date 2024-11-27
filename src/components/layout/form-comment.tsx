import { useCreateComment } from "@/hooks/useCreateComment";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface CommentProps {
	name: string | undefined;
	post_id: string;
	user_id: string;
}

export function FormComment({ name, post_id, user_id }: CommentProps) {
	const [content, setContent] = useState("");
	const queryClient = useQueryClient();

	const mutation = useCreateComment();

	const handleCreateComment = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!content) {
			return;
		}

		mutation.mutate(
			{ content, post_id, user_id },
			{
				onSuccess: () => {
					setContent("");
					queryClient.invalidateQueries();
				},
			},
		);
	};

	return (
		<form onSubmit={handleCreateComment} className="space-y-4">
			<Input
				value={name}
				disabled
				placeholder={name}
				className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500"
			/>
			<Textarea
				placeholder="Seu comentário"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				name="content"
				id="content"
				rows={4}
				className="w-full px-3 py-2 text-sm rounded-md bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
			/>
			<Button
				className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
				disabled={mutation.isPending}
			>
				{mutation.isPending ? "Carregando" : "Enviar Comentário"}
			</Button>
		</form>
	);
}
