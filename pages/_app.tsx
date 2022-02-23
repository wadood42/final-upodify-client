import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import ThemeProvider from "../components/ThemeProvider";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ThemeProvider>
	);
}

export default MyApp;
