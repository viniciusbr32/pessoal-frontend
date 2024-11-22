import { Header } from "./components/layout/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Footer } from "./components/layout/footer";
import { PostDetails } from "./pages/post-details/post-details";

export function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details" element={<PostDetails />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}
