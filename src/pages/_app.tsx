import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Body from "../components/Body";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="system">
            <Body>
                <Component {...pageProps} />
            </Body>
        </ThemeProvider>
    );
}

export default MyApp;
