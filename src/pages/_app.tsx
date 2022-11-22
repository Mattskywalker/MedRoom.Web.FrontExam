import "styles/index.css";
import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "service/queryClient";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default MyApp;
