import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "@next/font/google";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

//const font = Montserrat({ subsets: ["latin"] });

const App: AppType = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#DB931E" />

      <meta property="og:image" content="%PUBLIC_URL%/site_preview.png" />

      <meta
        property="og:description"
        content="Nico Galin's personal website."
      />

      <meta property="og:title" content="Nico Galin" />

      <meta name="description" content="Nico Galin's personal website." />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
};

export default App;
