import { makeStore, wrapper } from "@/redux_toolkit/store";
import "@/styles/globals.css";
import "@/styles/slider.css";
import { Providers } from "../redux_toolkit/provider";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
