import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

import bannerImg from "../../assets/placeholder.svg";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

export function PostCard() {
	return (
		<div className="rounded-md">
			<Card>
				<img
					src={bannerImg}
					alt="banner"
					className="w-full h-48 object-cover rounded-t-md"
				/>
				<CardHeader>
					<CardTitle>O Futuro da Inteligência Artificial</CardTitle>
					<CardDescription>Tecnologia</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Ana Silva • 25 Mar 2024</p>
				</CardContent>
				<CardFooter>
					<Button variant="link" className="text-zinc-400 hover:text-zinc-100">
						Ler mais <ChevronRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
