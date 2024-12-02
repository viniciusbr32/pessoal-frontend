import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style: {
						backgroundColor: "#F1f1f1",
						color: "#131313",
						borderColor: "rgba(255,255,255, 0.5)",
					},
				}}
			/>
			<App />
		</QueryClientProvider>
	</StrictMode>,
);
