import type { ReactNode } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DropMenuPRops {
	isOpen: boolean;
	onOpen: (open: boolean) => void;
	logout: () => void;
	children: ReactNode;
}

export function DropMenu({ isOpen, onOpen, children, logout }: DropMenuPRops) {
	return (
		<DropdownMenu onOpenChange={onOpen} open={isOpen} modal={false}>
			<DropdownMenuTrigger>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuItem>Config</DropdownMenuItem>
				<DropdownMenuItem>Favoritos</DropdownMenuItem>
				<DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
