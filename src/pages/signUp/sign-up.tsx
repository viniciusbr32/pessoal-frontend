import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignUp() {
	return (
		<div className="flex items-center justify-center min-h-screen p-4 bg-zinc-950">
			<Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center text-zinc-100">
						Criar uma conta
					</CardTitle>
					<CardDescription className="text-center text-zinc-400">
						Registre-se para começar a usar nossa plataforma
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email" className="text-zinc-300">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@exemplo.com"
							className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password" className="text-zinc-300">
							Senha
						</Label>
						<Input
							id="password"
							type="password"
							className="bg-zinc-800 border-zinc-700 text-zinc-100"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="confirmationPassword" className="text-zinc-300">
							Confirmar senha
						</Label>
						<Input
							id="confirmationPassword"
							type="password"
							className="bg-zinc-800 border-zinc-700 text-zinc-100"
						/>
					</div>
					<Button className="w-full text-white bg-purple-600 hover:bg-purple-700">
						Registrar
					</Button>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-zinc-700" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="px-2 bg-zinc-900 text-zinc-500">
								Ou registre com
							</span>
						</div>
					</div>
					<Button
						variant="outline"
						className="w-full bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border-zinc-700"
					>
						<span className="ml-2">Google</span>
					</Button>
				</CardContent>
				<CardFooter className="flex flex-col space-y-2">
					<Link
						to="/"
						className="text-sm text-purple-400 hover:text-purple-300"
					>
						Esqueceu sua senha?
					</Link>
					<p className="text-sm text-zinc-400">
						Já tem uma conta?{" "}
						<Link to="/login" className="text-purple-400 hover:text-purple-300">
							Faça-login
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
