import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { Toaster } from "sonner";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
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
	</StrictMode>,
);
