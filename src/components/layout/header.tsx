import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

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

					<Link to="/">
						<h1 className="text-2xl font-bold">Conexões Infinitas</h1>
					</Link>
				</div>

				<div className="flex gap-2 align-center">
					<Input
						placeholder="Pesquisar"
						className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 "
					/>
					<Button asChild className="px-6" variant={"secondary"}>
						<Link to="/login">Entrar</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
