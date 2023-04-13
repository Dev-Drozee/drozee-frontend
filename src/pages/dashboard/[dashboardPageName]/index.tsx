import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import DashboardLayout from 'layout/DashboardLayout';

const DashboardPages: NextPage = () => {
	const router = useRouter();
	const { DashboardPageName } = router.query;

	return (
		<>
			<Head>
				<title>{DashboardPageName?.toString()}</title>
			</Head>
			<DashboardLayout rightSidebar={<div>Right Side bar</div>}>
				<div>{DashboardPageName?.toString()}</div>
			</DashboardLayout>
		</>
	);
};

export default DashboardPages;
