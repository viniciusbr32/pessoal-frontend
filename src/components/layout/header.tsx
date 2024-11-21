import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Header() {
	return (
		<header className="w-full  py-8">
			<div className="flex items-center justify-between max-w-[1080px] mx-auto px-2 ">
				<div className="flex items-center gap-2">
					<button
						type="submit"
						className="p-2 hover:bg-zinc-800 transition-all duration-200 cursor-pointer rounded-sm"
					>
						<Menu />
					</button>

					<h1 className="text-2xl font-bold">Conexões Infinitas</h1>
				</div>

				<div className="flex align-center gap-2">
					<Input
						placeholder="Pesquisar"
						className="bg-zinc-900  border-zinc-700 text-zinc-100 placeholder-zinc-500 "
					/>
					<Button className="px-6" variant={"secondary"}>
						Entrar
					</Button>
				</div>
			</div>
		</header>
	);
}
