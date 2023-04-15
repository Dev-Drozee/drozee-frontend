import type { NextPage } from 'next';
import Head from 'next/head';

import { useUser } from '@clerk/nextjs';
import DashboardLayout from 'layout/DashboardLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard: NextPage = () => {
	const router = useRouter();
	const { isLoaded, isSignedIn, user } = useUser()

	useEffect(() => {
		if (isLoaded && !isSignedIn) {
			router.replace('/login');
		}
	}, [isLoaded, isSignedIn, router])

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<DashboardLayout rightSidebar={<div>Right Side bar</div>}>
				<div className='text-justify'>
					<h2>Welcome, {user?.firstName}</h2>
				</div>
			</DashboardLayout>
		</>
	);
};

export default Dashboard;
