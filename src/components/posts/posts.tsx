import { PostCard } from "./post-card";
import { RecentPost } from "./recents-post";

export function Posts() {
	return (
		<section className="mb-12 w-full">
			<div className=" container mx-auto">
				<h2 className="text-3xl font-bold mb-6">Posts em Destaque</h2>
				<div className="  grid grid-cols-1  md:grid-cols-3 gap-6 py-8">
					<PostCard />
					<PostCard />
					<PostCard />
				</div>

				<h2 className="text-3xl font-bold mb-6">Posts Recentes</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
					<RecentPost />
					<RecentPost />
					<RecentPost />
				</div>
			</div>
		</section>
	);
}
