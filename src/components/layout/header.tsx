import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";

import { useUserDetails } from "@/api/http/get-me";

import { DropMenu } from "./drop-menu";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const token = localStorage.getItem("authToken") as string;
	const navigate = useNavigate();

	const { data } = useUserDetails(token);

	const myToggleMenu = () => {
		setIsMenuOpen(true);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const userLogout = () => {
		localStorage.removeItem("authToken");
		navigate("/login");
	};

	return (
		<header className="w-full py-8 ">
			<div className="container flex items-center justify-between mx-auto ">
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

					{data && (
						<div className="flex items-center w-full gap-2 ">
							<span className="text-sm text-zinc-400 ">Olá, {data.name}</span>
							<div className="relative">
								<DropMenu
									onOpen={closeMenu}
									isOpen={isMenuOpen}
									logout={userLogout}
								>
									<Avatar>
										<AvatarImage
											src="https://github.com/shadcn.png"
											alt="@shadcn"
											className="cursor-pointer"
											onClick={myToggleMenu}
										/>

										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</DropMenu>
							</div>
						</div>
					)}

					{!data && (
						<Button asChild className="px-6" variant={"secondary"}>
							<Link to="/login">Entrar</Link>
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
