import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

import { PostDetails } from "./pages/post-details/post-details";
import { SignIn } from "./pages/signIn/sign-in";
import { SignUp } from "./pages/signUp/sign-up";

import { CreatePost } from "./dashboard/post/create-post";

import { PageDashboard } from "./dashboard/page";
import { Categories } from "./dashboard/categories/categories";
import { BlogAuthProvider } from "./context/providers/BlogAuthProvider";

export function App() {
	return (
		<Router>
			<BlogAuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<PostDetails />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/dashboard" element={<PageDashboard />} />
					<Route path="/dashboard/new-post" element={<CreatePost />} />
					<Route path="/dashboard/categories" element={<Categories />} />
				</Routes>
			</BlogAuthProvider>
		</Router>
	);
}
