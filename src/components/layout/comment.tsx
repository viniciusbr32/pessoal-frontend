import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export function Comments() {
	return (
		<Card className="bg-zinc-900 border-zinc-800">
			<CardHeader>
				<div className="flex items-start justify-between">
					<div className="flex items-center space-x-2">
						<div>
							<CardTitle className="text-sm font-medium text-zinc-200">
								Carlos Mendes
							</CardTitle>
							<CardDescription className="text-xs text-zinc-400">
								26 Mar 2024
							</CardDescription>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-zinc-300">
					Artigo muito esclarecedor! Mal posso esperar para ver como a IA vai
					transformar nossas vidas nos próximos anos.
				</p>
			</CardContent>
		</Card>
	);
}
