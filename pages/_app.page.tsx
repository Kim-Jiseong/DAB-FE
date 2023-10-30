import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { light } from "styles/DDS";
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={light}>
        <GlobalStyle>
          <Header />
          <Component {...pageProps} />
        </GlobalStyle>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
