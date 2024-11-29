import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

import { PostDetails } from "./pages/post-details/post-details";
import { SignIn } from "./pages/signIn/sign-in";
import { SignUp } from "./pages/signUp/sign-up";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreatePost } from "./dashboard/create-post";
import { Categories } from "./dashboard/categories";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<PostDetails />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/dashboard/new-post" element={<CreatePost />} />
					<Route path="/dashboard/categories" element={<Categories />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}
