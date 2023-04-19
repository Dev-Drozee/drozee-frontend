import type { NextPage } from "next";
import Head from "next/head";

// Layout Components
import Footer from "sections/footer/Footer";
import Navbar from "sections/navbar/Navbar";

import AlphaAccessPage from "sections/alphaAccessPage/AlphaAccessPage";

const AlphaAccess: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alpha Access</title>
      </Head>

      <Navbar />
      <main>
        <AlphaAccessPage />
      </main>
      <Footer />
    </>
  );
};

export default AlphaAccess;
