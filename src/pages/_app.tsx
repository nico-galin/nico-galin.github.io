import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "@next/font/google";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

const App: AppType = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
      <Component {...pageProps} className={font.className} />
    </AnimateSharedLayout>
  );
};

export default App;
