import { usePosts } from "@/api/http/get-post";
import { PostCard } from "./post-card";
import { RecentPost } from "./recents-post";

export function Posts() {
	const { data: posts, isLoading } = usePosts();

	return (
		<section className="w-full mb-12">
			<div className="container mx-auto ">
				<h2 className="mb-6 text-3xl font-bold">Posts em Destaque</h2>
				<div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-3">
					{isLoading && <p>Carregando</p>}
					{posts?.map((post) => (
						<PostCard data={post} key={post.id} />
					))}

					{posts?.length === 0 && <p>Não existe postagens em destaque</p>}
				</div>

				<h2 className="mb-6 text-3xl font-bold">Posts Recentes</h2>

				<div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
					<RecentPost />
					<RecentPost />
					<RecentPost />
				</div>
			</div>
		</section>
	);
}
