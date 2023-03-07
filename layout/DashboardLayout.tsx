import Link from 'next/link';
import { useRouter } from 'next/router';

// icons
import DarkLogo from 'assets/logo/small_primary_dashed_logo.svg';
import DashboardLogo from 'assets/sections/dashboard/navbar_icon_dashboard.svg';
import FolioLogo from 'assets/sections/dashboard/navbar_icon_folio.svg';
import LearnPathLogo from 'assets/sections/dashboard/navbar_icon_learnpath.svg';
import LearnTrackLogo from 'assets/sections/dashboard/navbar_icon_learntrack.svg';
import LogoutIcon from 'assets/sections/dashboard/navbar_icon_logout.svg';
import SettingsLogo from 'assets/sections/dashboard/navbar_icon_settings.svg';
import StepDegreeLogo from 'assets/sections/dashboard/navbar_icon_stepdegree.svg';

interface DashboardLayoutProps {
	children: React.ReactNode;
	rightSidebar?: React.ReactNode;
}

const DashboardLayout = ({ children, rightSidebar }: DashboardLayoutProps) => {
	const router = useRouter();

	const navbarLinksCSSClasses =
		'px-6 py-2 flex justify-start items-center gap-4 hover:bg-primary rounded transition-all duration-200 text-base hover:text-white stroke-1 stroke-muted-primary hover:stroke-white';

	return (
		<main className='w-full min-h-screen bg-dashboard-light relative grid grid-cols-dashboard-layout gap-4'>
			{/* Left Navbar for features main page */}
			<nav className='w-max max-w-sm min-h-screen max-h-screen py-10 px-4 col-span-1 flex flex-col items-start gap-20 sticky top-0 border-r border-black'>
				<Link href='/' className='px-6 py-2 flex justify-start items-center gap-4' title='Go back to home page'
					aria-label='Go back to home page'>
					<DarkLogo />
					<p className='text-xl text-primary font-normal'>Drozee</p>
				</Link>

				<ul className='w-full flex flex-col justify-center items-center gap-8'>
					<li className='w-full text-muted-primary'>
						<Link href='/dashboard' className={`${navbarLinksCSSClasses} ${router.pathname === '/dashboard' &&
							'bg-primary text-white stroke-white'
							}`}
							title='Dashboard'
							aria-label='Dashboard'>
							<DashboardLogo />
							<p>Dashboard</p>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/learntrack' className={`${navbarLinksCSSClasses} ${router.pathname === '/dashboard/learntrack' &&
							'bg-primary text-white stroke-white'
							}`}
							title='Learn Track'
							aria-label='Learn Track'>
							<LearnTrackLogo />
							<p>LearnTrack</p>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/learnpath' className={`${navbarLinksCSSClasses} ${router.pathname === '/dashboard/learnpath' &&
							'bg-primary text-white stroke-white'
							}`}
							title='Learn Path'
							aria-label='Learn Path'>
							<LearnPathLogo />
							<p>LearnPath</p>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/stepdegree' className={`${navbarLinksCSSClasses} ${router.pathname === '/dashboard/stepdegree' &&
							'bg-primary text-white stroke-white'
							}`}
							title='StepDegree'
							aria-label='StepDegree'>
							<StepDegreeLogo />
							<p>StepDegree</p>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/folio' className={`${navbarLinksCSSClasses} ${router.pathname === '/dashboard/folio' &&
							'bg-primary text-white stroke-white'
							}`}
							title='Folio'
							aria-label='Folio'>
							<FolioLogo />
							<p>Folio</p>
						</Link>
					</li>
					<li className='w-full text-muted-primary hover:text-secondary'>
						<Link href='/dashboard/settings' className={`${navbarLinksCSSClasses} stroke-[0.05] hover:fill-white ${router.pathname === '/dashboard/settings' &&
							'bg-primary text-white stroke-white'
							}`}
							title='Settings'
							aria-label='Settings'>
							<SettingsLogo />
							<p>Settings</p>
						</Link>
					</li>
				</ul>

				<button
					className='px-6 py-2 w-full flex justify-start items-center gap-4 text-muted-primary hover:bg-primary rounded group transition-all duration-200'
					title='Logout'
					aria-label='Logout'
				>
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
			<aside className='w-max max-w-sm  max-h-screen col-span-1 py-10 px-4 sticky top-0 border-l border-black'>
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
