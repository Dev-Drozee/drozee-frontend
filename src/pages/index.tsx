import type { NextPage } from "next";
import Head from "next/head";

// Layout Components
import Footer from "sections/footer/Footer";
import Navbar from "sections/navbar/Navbar";

// Section Components
import BenefitsSection from "sections/landingPage/BenefitsSection";
import DetailsSection from "sections/landingPage/DetailsSection";
import HeroSection from "sections/landingPage/HeroSection";
import NewsletterSection from "sections/landingPage/NewsletterSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Amp up learning potential via synergizing credentials. Now manage, Compare & showcase your whole learning journey at one place. Save time & money."
        />
        <title>Drozee</title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <DetailsSection />
        <BenefitsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
