import React from "react";
import type { AppProps } from "next/app";
import "../css/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
