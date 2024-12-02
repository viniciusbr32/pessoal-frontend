import { useUserDetails } from "@/api/http/get-me";
import { useLoginUser } from "@/hooks/useLoginUser";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserDetails {
	name: string;
	id: string;
	role: string;
}

interface UserLogin {
	email: string;
	password: string;
}

interface UserContextData {
	userDetails: UserDetails | undefined;
	logout: () => void;
	login: (user: UserLogin) => void;
}

const BlogAuthContext = createContext<UserContextData | undefined>(undefined);

export function BlogAuthProvider({ children }: { children: React.ReactNode }) {
	const [userDetails, setUserDetails] = useState<UserDetails | undefined>(
		undefined,
	);
	const token = localStorage.getItem("authToken") as string;
	const { data } = useUserDetails(token);
	const { mutate: userLogin } = useLoginUser("/session");
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			setUserDetails(data);
		}
	}, [data]);

	const logout = () => {
		localStorage.removeItem("authToken");
		setUserDetails(undefined);
	};

	const login = (user: UserLogin) => {
		userLogin(user, {
			onSuccess: (data) => {
				setUserDetails(data);
				localStorage.setItem("authToken", data.token);
				navigate("/");
			},
			onError: (error) => {
				console.error("Erro no login", error);
				// Trate o erro como achar necessário
			},
		});
	};

	return (
		<BlogAuthContext.Provider value={{ userDetails, logout, login }}>
			{children}
		</BlogAuthContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBlogAuth = () => {
	const context = useContext(BlogAuthContext);
	if (context === undefined) {
		throw new Error("useBlogAuth must be used within a BlogAuthProvider");
	}
	return context;
};
