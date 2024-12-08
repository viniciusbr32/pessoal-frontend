import { useBlogAuth } from "@/context/providers/BlogAuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
	children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const navigate = useNavigate();
	const { userDetails } = useBlogAuth();

	useEffect(() => {
		if (!userDetails || userDetails?.role === "user") {
			navigate("/");
		}
	}, [navigate, userDetails]);

	return userDetails?.role !== "user" ? children : null;
}
