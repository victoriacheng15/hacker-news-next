import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@/features/news/apisSlice";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApiProvider api={apiSlice}>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</ApiProvider>
	);
}
