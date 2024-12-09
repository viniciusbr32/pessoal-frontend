import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";

import { DropMenu } from "./drop-menu";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useBlogAuth } from "@/context/providers/BlogAuthProvider";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const { userDetails, logout } = useBlogAuth();

	const myToggleMenu = () => {
		setIsMenuOpen(true);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const userLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<header className="w-full py-8 ">
			<div className="container flex items-center justify-between mx-auto p-2">
				<div className="flex items-center gap-2 ">
					<Link to="/">
						<h1 className="md:text-2xl capitalize font-bold">
							Conexões Infinitas
						</h1>
					</Link>
				</div>

				<div className="flex gap-2 align-center">
					<Input
						placeholder="Pesquisar"
						className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 "
					/>

					{userDetails && (
						<div className="flex items-center w-full gap-2 ">
							<span className="text-sm capitalize text-zinc-400">
								{userDetails?.name}
							</span>
							<div className="relative">
								<DropMenu
									onOpen={closeMenu}
									isOpen={isMenuOpen}
									logout={userLogout}
									role={userDetails?.role}
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

					{!userDetails && (
						<Button asChild className="px-6" variant={"secondary"}>
							<Link to="/login">Entrar</Link>
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
