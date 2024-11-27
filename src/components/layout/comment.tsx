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
}

export function Comments({ date, content, user }: CommentProps) {
	return (
		<Card className="bg-zinc-900 border-zinc-800">
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
