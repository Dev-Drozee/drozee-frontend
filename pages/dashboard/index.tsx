import type { NextPage } from 'next';
import Head from 'next/head';

import DashboardLayout from 'layout/DashboardLayout';
import UnderDevelopment from 'sections/underDevelopment/UnderDevelopment';

const Dashboard: NextPage = () => {
	// return <UnderDevelopment />;
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<DashboardLayout rightSidebar={<div>Right Side bar</div>}>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
					necessitatibus!
				</div>
			</DashboardLayout>
		</>
	);
};

export default Dashboard;
