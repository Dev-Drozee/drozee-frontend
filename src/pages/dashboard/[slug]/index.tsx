import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DashboardLayout from 'layout/DashboardLayout';

const DashboardPages: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Head>
				<title>{slug?.toString()}</title>
			</Head>
			<DashboardLayout rightSidebar={<div>Right Side bar</div>}>
				<div>{slug?.toString()}</div>
			</DashboardLayout>
		</>
	);
};

export default DashboardPages;
