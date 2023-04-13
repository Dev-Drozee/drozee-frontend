import Head from 'next/head';

import LoginPage from 'sections/loginPage/LoginPage';

const Index = () => {
	return (
		<>
			<Head>
				<title>Welcome to Drozee!</title>
			</Head>
			<main>
				<LoginPage />
			</main>
		</>
	);
};

export default Index;
