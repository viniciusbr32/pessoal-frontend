import { Badge } from "@/components/ui/badge";
import bannerImage from "../../assets/placeholder.svg";
import { Comments } from "../../components/layout/comment";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { usePostsDetails } from "@/api/http/get-post-details";
import { useParams } from "react-router-dom";
import { FormatData } from "@/lib/date";

export function PostDetails() {
	const { id } = useParams<{ id: string }>();

	const idString = String(id);

	const { data } = usePostsDetails(idString);

	if (!data) {
		return;
	}

	return (
		<>
			<Header />
			<main className="container px-4 py-8 mx-auto">
				<article className="max-w-3xl mx-auto">
					<h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
					<div className="flex items-center mb-6 space-x-4">
						<div>
							<p className="text-sm font-medium text-zinc-200">Ana Silva</p>
							<p className="text-sm text-zinc-400">
								{FormatData(data.created_at)}
							</p>
						</div>
						{data.categories.map((category) => (
							<Badge
								key={category.category.id}
								variant="secondary"
								className="bg-zinc-800 text-zinc-300"
							>
								{category.category.name}
							</Badge>
						))}
					</div>
					<img
						src={bannerImage}
						alt="banner"
						className="object-cover w-full h-64 mb-6 rounded-lg"
					/>
					<div
						className="prose max-w-none"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: data.content }}
					/>
				</article>

				<div className="my-8 bg-zinc-800" />
				<section className="max-w-3xl mx-auto space-y-3">
					<h2 className="mb-4 text-2xl font-bold">Comentários</h2>
					<Comments />
					<Comments />
				</section>
			</main>
			<Footer />
		</>
	);
}
