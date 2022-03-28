import Link from 'next/link';

// icons
import DarkLogo from 'assets/logo/small_primary_dashed_logo.svg';
import DashboardLogo from 'assets/sections/dashboard/navbar_icon_dashboard.svg';
import LearnTrackLogo from 'assets/sections/dashboard/navbar_icon_learntrack.svg';
import LearnPathLogo from 'assets/sections/dashboard/navbar_icon_learnpath.svg';
import StepDegreeLogo from 'assets/sections/dashboard/navbar_icon_stepdegree.svg';
import FolioLogo from 'assets/sections/dashboard/navbar_icon_folio.svg';
import SettingsLogo from 'assets/sections/dashboard/navbar_icon_settings.svg';
import LogoutIcon from 'assets/sections/dashboard/navbar_icon_logout.svg';

interface DashboardLayoutProps {
	children: React.ReactNode;
	rightSidebar?: React.ReactNode;
}

const DashboardLayout = ({ children, rightSidebar }: DashboardLayoutProps) => {
	return (
		<main className='w-full min-h-screen bg-dashboard-light relative grid grid-cols-dashboard-layout gap-4'>
			{/* Left Navbar for features main page */}
			<nav className='w-max max-w-sm max-h-screen py-10 px-10 col-span-1 flex flex-col justify-between items-start gap-20 sticky top-0'>
				<Link href='/' passHref>
					<a
						className='flex justify-start items-center gap-4'
						title='Go back to home page'
						aria-label='Go back to home page'
					>
						<DarkLogo />
						<p className='text-xl text-primary font-normal'>Drozee</p>
					</a>
				</Link>

				<ul className='w-full flex flex-col justify-center items-center gap-8'>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<DashboardLogo />
								<p className='text-base'>Dashboard</p>
							</a>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<LearnTrackLogo />
								<p className='text-base'>LearnTrack</p>
							</a>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<LearnPathLogo />
								<p className='text-base'>LearnPath</p>
							</a>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<StepDegreeLogo />
								<p className='text-base'>StepDegree</p>
							</a>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<FolioLogo />
								<p className='text-base'>Folio</p>
							</a>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/overview' passHref>
							<a className='flex justify-start items-center gap-4'>
								<SettingsLogo />
								<p className='text-base'>Settings</p>
							</a>
						</Link>
					</li>
				</ul>

				<button className='px-6 py-2 flex justify-start items-center gap-4 text-muted-primary hover:bg-primary rounded group'>
					<LogoutIcon className='fill-muted-primary group-hover:fill-white' />
					<p className='text-sm text-muted-primary font-normal group-hover:text-white'>
						Log Out
					</p>
				</button>
			</nav>

			{/* main content in dashboard */}
			{/* this is scrollable */}
			<div className='w-full col-span-1'>{children}</div>

			{/* Right sidebar for tips and stats */}
			<aside className='w-max max-w-sm  max-h-screen col-span-1 py-10 px-4 sticky top-0'>
				{/* user details on top of right sidebar */}
				<div className='w-[370px] h-full'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					sequi consequuntur deleniti perferendis laborum, in commodi ab ullam
					neque explicabo!
				</div>
				{/* dynamically pass different components to show on the right side */}
				{rightSidebar}
			</aside>
		</main>
	);
};

export default DashboardLayout;
