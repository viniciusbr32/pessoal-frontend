import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import bannerImg from "../../assets/placeholder.svg";
import { Badge } from "../ui/badge";

export function RecentPost() {
	return (
		<Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
			<div className="flex flex-col md:flex-row">
				<img
					src={bannerImg}
					alt="banner"
					className="w-full md:w-1/3 h-48 md:h-auto object-cover"
				/>
				<div className="flex-1">
					<CardHeader>
						<div className="flex justify-between items-start">
							<div>
								<CardTitle className="text-zinc-100">
									Como Iniciar uma Startup de Sucesso
								</CardTitle>
								<CardDescription className="text-zinc-400">
									Negócios
								</CardDescription>
							</div>
							<Badge className="bg-zinc-800 text-zinc-300">Negócios</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-4">
							<div className="flex items-center gap-3">
								<p className="text-sm font-medium text-zinc-200">Pedro Alves</p>
								<p className="text-sm text-zinc-400">22 Mar 2024</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							variant="link"
							className="text-zinc-400 hover:text-zinc-100"
						>
							Ler mais <ChevronRightIcon className="ml-2 h-4 w-4" />
						</Button>
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}
