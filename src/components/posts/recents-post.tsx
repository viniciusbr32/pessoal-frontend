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
		<Card className="overflow-hidden bg-zinc-900 border-zinc-800">
			<div className="flex flex-col md:flex-row">
				<img
					src={bannerImg}
					alt="banner"
					className="object-cover w-full h-48 md:w-1/3 md:h-auto"
				/>
				<div className="flex-1">
					<CardHeader>
						<div className="flex items-start justify-between">
							<div>
								<CardTitle className="text-zinc-100">
									Como Iniciar uma Startup de Sucesso
								</CardTitle>
								<CardDescription className="text-zinc-400">
									Negócios
								</CardDescription>
							</div>
							<Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
								Negócios
							</Badge>
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
							Ler mais <ChevronRightIcon className="w-4 h-4 ml-2" />
						</Button>
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}
