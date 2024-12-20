import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useBlogAuth } from "@/context/providers/BlogAuthProvider";
import {
	FileTextIcon,
	LogOutIcon,
	PlusCircleIcon,
	Podcast,
	TagIcon,
	UserIcon,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const { userDetails, logout } = useBlogAuth();

	const menuItems = [
		{ icon: UserIcon, label: "Dashboard", href: "/dashboard" },
		{ icon: FileTextIcon, label: "Posts", href: "/dashboard/posts" },
		{ icon: PlusCircleIcon, label: "Novo Post", href: "/dashboard/new-post" },
		{ icon: TagIcon, label: "Categorias", href: "/dashboard/categories" },
		{ icon: Podcast, label: "Blog", href: "/" },
	];

	const handleLogoutUser = () => {
		logout();
		navigate("/login");
	};

	return (
		<div className="flex h-screen bg-zinc-950 text-zinc-100">
			<aside className="w-64 p-4 border-r bg-zinc-900 border-zinc-800">
				<div className="flex items-center mb-6 space-x-2">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold">{userDetails?.name}</p>
						<p className="text-xs text-zinc-400">{userDetails?.role}</p>
					</div>
				</div>
				<nav className="space-y-2">
					{menuItems.map((item) => (
						<Link key={item.href} to={item.href}>
							<Button
								variant="ghost"
								className={`w-full justify-start ${
									pathname === item.href
										? "bg-zinc-800 text-purple-400"
										: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
								}`}
							>
								<item.icon className="w-4 h-4 mr-2" />
								{item.label}
							</Button>
						</Link>
					))}
				</nav>
				<div className="pt-4 mt-auto ">
					<Button
						onClick={handleLogoutUser}
						variant="ghost"
						className="justify-start w-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
					>
						<LogOutIcon className="w-4 h-4 mr-2" />
						Sair
					</Button>
				</div>
			</aside>
			<main className="flex-1 overflow-auto">
				<div className="container px-4 py-8 mx-auto">{children}</div>
			</main>
		</div>
	);
}
