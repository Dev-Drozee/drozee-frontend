import { useAuth } from '@clerk/nextjs';
import Head from 'next/head';
import { useRouter } from 'next/router';

import LoginPage from 'sections/loginPage/LoginPage';

export default function Index() {
	const router = useRouter();
	const { isSignedIn } = useAuth();

	if (isSignedIn) {
		router.replace('/dashboard');
	}

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
