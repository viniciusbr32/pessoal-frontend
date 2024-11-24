import { Badge } from "@/components/ui/badge";
import bannerImage from "../../assets/placeholder.svg";
import { Comments } from "../../components/layout/comment";
import { post } from "@/constants/posts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function PostDetails() {
	return (
		<>
			<Header />
			<main className="container px-4 py-8 mx-auto">
				<article className="max-w-3xl mx-auto">
					<h1 className="mb-4 text-4xl font-bold">
						O Futuro da Inteligência Artificial
					</h1>
					<div className="flex items-center mb-6 space-x-4">
						<div>
							<p className="text-sm font-medium text-zinc-200">Ana Silva</p>
							<p className="text-sm text-zinc-400">25 Mar 2024</p>
						</div>
						<Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
							Técnologia
						</Badge>
					</div>
					<img
						src={bannerImage}
						alt="banner"
						className="object-cover w-full h-64 mb-6 rounded-lg"
					/>
					<div
						className="prose max-w-none"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: post.content }}
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
