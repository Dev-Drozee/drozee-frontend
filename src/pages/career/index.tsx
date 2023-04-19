import Head from "next/head";

import Footer from "sections/footer/Footer";
import Navbar from "sections/navbar/Navbar";

import DetailsSection from "sections/careerPage/DetailsSection";
import HeroSection from "sections/careerPage/HeroSection";
import JobOpeningSection from "sections/careerPage/JobOpeningSection";

const Index = () => {
  return (
    <>
      <Head>
        <title>Career at Drozee</title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <DetailsSection />
        <JobOpeningSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
