import { Badge } from "@/components/ui/badge";
import bannerImage from "../../assets/placeholder.svg";
import { Comments } from "../../components/layout/comment";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { usePostsDetails } from "@/api/http/get-post-details";
import { Link, useParams } from "react-router-dom";
import { FormatData } from "@/lib/date";
import { FormComment } from "@/components/layout/form-comment";
import { useUserDetails } from "@/api/http/get-me";
import { Button } from "@/components/ui/button";

export function PostDetails() {
	const { id } = useParams<{ id: string }>();

	const idString = String(id);

	const { data } = usePostsDetails(idString);

	const token = localStorage.getItem("authToken") as string;

	const { data: userDetails } = useUserDetails(token);

	if (!userDetails) {
		return;
	}

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
							<p className="text-sm font-medium text-zinc-200">
								{data.user.name}
							</p>
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

					{data.comments && data.comments.length > 0 ? (
						data.comments.map((comment) => (
							<Comments
								key={comment.id}
								user={comment.user.name}
								content={comment.content}
								date={comment.created_at}
							/>
						))
					) : (
						<p className="text-sm capitalize text-zinc-400">
							Este post ainda está sem comentários. 📝 Seja você o primeiro a
							comentar!
						</p>
					)}
				</section>

				<section className="max-w-3xl mx-auto my-8">
					<h3 className="mb-4 text-xl font-bold">Deixe um comentário</h3>
					{token && (
						<FormComment
							name={userDetails.name}
							post_id={data.id}
							user_id={userDetails.id}
						/>
					)}
					{!token && (
						<div className="space-y-2">
							<p className="text-sm text-zinc-400">
								Você precisa estar logado para fazer um comentario
							</p>
							<Button asChild variant="secondary">
								<Link to="/login">Fazer login</Link>
							</Button>
						</div>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}
