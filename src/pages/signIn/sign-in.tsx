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
import { useBlogAuth } from "@/context/providers/BlogAuthProvider";

import { Link } from "react-router-dom";

export function SignIn() {
	const { login } = useBlogAuth();

	const handleSubmitLoginUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		if (!email || !password) {
			return;
		}

		login({ email, password });
	};

	return (
		<div className="flex items-center justify-center min-h-screen p-4 bg-zinc-950">
			<form onSubmit={handleSubmitLoginUser} className="w-full max-w-md ">
				<Card className="bg-zinc-900 border-zinc-800">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold text-center text-zinc-100">
							Entrar
						</CardTitle>
						<CardDescription className="text-center text-zinc-400">
							Faça login na sua conta para continuar
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
								name="email"
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
								name="password"
								className="bg-zinc-800 border-zinc-700 text-zinc-100"
							/>
						</div>
						<Button className="w-full text-white bg-purple-600 hover:bg-purple-700">
							Entrar
						</Button>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t border-zinc-700" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="px-2 bg-zinc-900 text-zinc-500">
									Ou continue com
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
							Não tem uma conta?{" "}
							<Link
								to="/register"
								className="text-purple-400 hover:text-purple-300"
							>
								Registre-se
							</Link>
						</p>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
