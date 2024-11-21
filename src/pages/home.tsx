import { Posts } from "@/components/posts/posts";

export function Home() {
	return (
		<main>
			<section className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden flex items-center justify-center flex-col px-2 text-center relative">
				<div className="absolute inset-0 bg-black opacity-50 " />
				<h2 className="text-4xl font-bold mb-2 z-10">
					Bem-vindo ao Conexões Infinitas
				</h2>
				<p className="text-xl z-10">
					Explorando as fronteiras da tecnologia e inovação
				</p>
			</section>
			<section className="px-4 py-8 mx-auto container">
				<Posts />
			</section>
		</main>
	);
}
