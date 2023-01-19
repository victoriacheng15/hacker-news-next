import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
