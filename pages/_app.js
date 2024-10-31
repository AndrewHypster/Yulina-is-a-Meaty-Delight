"use client";

import { persistor, wrapper } from "@/redux_toolkit/store";
import "@/styles/globals.css";
import "@/styles/slider.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default wrapper.withRedux(App);
