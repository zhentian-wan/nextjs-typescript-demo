// _app.tsx enable user to customize the settings
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
