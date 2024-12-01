import type { ReactNode } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

interface DropMenuPRops {
	isOpen: boolean;
	onOpen: (open: boolean) => void;
	logout: () => void;
	children: ReactNode;
	role: string;
}

export function DropMenu({
	isOpen,
	onOpen,
	children,
	logout,
	role,
}: DropMenuPRops) {
	return (
		<DropdownMenu onOpenChange={onOpen} open={isOpen} modal={false}>
			<DropdownMenuTrigger>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuItem>Config</DropdownMenuItem>
				<DropdownMenuItem>Favoritos</DropdownMenuItem>
				{role === "admin" && (
					<Link to="/dashboard">
						<DropdownMenuItem>Dashboard</DropdownMenuItem>
					</Link>
				)}
				<DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
