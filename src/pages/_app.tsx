import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@/features/news/apisSlice";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApiProvider api={apiSlice}>
			<Component {...pageProps} />
		</ApiProvider>
	);
}
