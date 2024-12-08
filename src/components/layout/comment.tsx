import { FormatData } from "@/lib/date";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

interface CommentProps {
	date: string;
	content: string;
	user: string;
	id: string;
}

export function Comments({ date, content, user, id }: CommentProps) {
	return (
		<Card className="bg-zinc-900 border-zinc-800" key={id}>
			<CardHeader>
				<div className="flex items-start justify-between">
					<div className="flex items-center space-x-2">
						<div>
							<CardTitle className="text-sm font-medium capitalize text-zinc-200">
								{user}
							</CardTitle>
							<CardDescription className="text-xs text-zinc-400">
								{FormatData(date)}
							</CardDescription>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-zinc-300">{content}</p>
			</CardContent>
		</Card>
	);
}
