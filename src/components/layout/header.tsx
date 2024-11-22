import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Header() {
	return (
		<header className="w-full py-8 ">
			<div className="container flex items-center justify-between px-2 mx-auto ">
				<div className="flex items-center gap-2 ">
					<button
						type="submit"
						className="p-2 transition-all duration-200 rounded-sm cursor-pointer hover:bg-zinc-800"
					>
						<Menu size={30} />
					</button>

					<h1 className="text-2xl font-bold">Conexões Infinitas</h1>
				</div>

				<div className="flex gap-2 align-center">
					<Input
						placeholder="Pesquisar"
						className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 "
					/>
					<Button className="px-6" variant={"secondary"}>
						Entrar
					</Button>
				</div>
			</div>
		</header>
	);
}
