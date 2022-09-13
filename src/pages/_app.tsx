import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Body from "../components/Body";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="system">
            <Toaster position="top-left" reverseOrder={false} />
            <Body>
                <Component {...pageProps} />
            </Body>
        </ThemeProvider>
    );
}

export default MyApp;
