import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Posts } from "@/components/posts/posts";

export function Home() {
	return (
		<>
			<Header />
			<main>
				<section className="relative flex flex-col items-center justify-center h-64 px-2 overflow-hidden text-center bg-gradient-to-r from-blue-600 to-purple-600">
					<div className="absolute inset-0 bg-black opacity-50 " />
					<h2 className="z-10 mb-2 text-4xl font-bold">
						Bem-vindo ao Conexões Infinitas
					</h2>
					<p className="z-10 text-xl">
						Explorando as fronteiras da tecnologia e inovação
					</p>
				</section>
				<section className="container px-4 py-8 mx-auto">
					<Posts />
				</section>
			</main>
			<Footer />
		</>
	);
}
