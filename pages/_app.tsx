import "../styles/global.css";
import { AppProps } from "next/app";
import "react-alice-carousel/lib/alice-carousel.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
