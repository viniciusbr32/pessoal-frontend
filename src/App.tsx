import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

import { PostDetails } from "./pages/post-details/post-details";
import { SignIn } from "./pages/signIn/sign-in";
import { SignUp } from "./pages/signUp/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details" element={<PostDetails />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}
