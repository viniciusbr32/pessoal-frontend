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
import type { Post } from "@/api/http/get-post";
import { FormatData } from "@/lib/date";

interface DataProps {
	data: Post;
}

export function PostCard({ data }: DataProps) {
	return (
		<div className="rounded-md">
			<Card>
				<img
					src={bannerImg}
					alt="banner"
					className="object-cover w-full h-48 rounded-t-md"
				/>
				<CardHeader>
					<CardTitle>{data.title}</CardTitle>
					<div className="flex items-center gap-3">
						{data.categories.map((category) => (
							<CardDescription key={category.category.id}>
								{category.category.name}
							</CardDescription>
						))}
					</div>
				</CardHeader>
				<CardContent>
					<p>{FormatData(data.created_at)}</p>
				</CardContent>
				<CardFooter>
					<Button variant="link" className="text-zinc-400 hover:text-zinc-100">
						Ler mais <ChevronRightIcon className="w-4 h-4 ml-2" />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
