import { store } from "@/redux_toolkit/store";
import "@/styles/globals.css";
import "@/styles/slider.css";
import { Providers } from "../redux_toolkit/provider";

export default function App({ Component, pageProps }) {
  return (
    <Providers store={store}>
      <Component {...pageProps} />
    </Providers>
  );
}
