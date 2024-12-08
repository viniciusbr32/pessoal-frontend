import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

import { PostDetails } from "./pages/post-details/post-details";
import { SignIn } from "./pages/signIn/sign-in";
import { SignUp } from "./pages/signUp/sign-up";

import { CreatePost } from "./dashboard/post/create-post";

import { PageDashboard } from "./dashboard/page";
import { Categories } from "./dashboard/categories/categories";
import { BlogAuthProvider } from "./context/providers/BlogAuthProvider";

import { PostsAdmin } from "./dashboard/posts/posts-admin";
import { ProtectedRoute } from "./routes/protected";

export function App() {
	return (
		<Router>
			<BlogAuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<PostDetails />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />

					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<PageDashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/dashboard/new-post"
						element={
							<ProtectedRoute>
								<CreatePost />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/dashboard/categories"
						element={
							<ProtectedRoute>
								<Categories />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/dashboard/posts"
						element={
							<ProtectedRoute>
								<PostsAdmin />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BlogAuthProvider>
		</Router>
	);
}
