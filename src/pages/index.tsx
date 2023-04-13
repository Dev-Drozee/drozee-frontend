import type { NextPage } from 'next';
import Head from 'next/head';

// Layout Components
import Navbar from 'sections/navbar/Navbar';
import Footer from 'sections/footer/Footer';

// Section Components
import HeroSection from 'sections/landingPage/HeroSection';
import DetailsSection from 'sections/landingPage/DetailsSection';
import BenefitsSection from 'sections/landingPage/BenefitsSection';
import NewsletterSection from 'sections/landingPage/NewsletterSection';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Amp up learning potential via synergizing credentials. Now manage, Compare & showcase your whole learning journey at one place. Save time & money.'
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
