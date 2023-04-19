import Link from "next/link";
import { useRouter } from "next/router";

// icons
import { useClerk } from "@clerk/nextjs";
import DarkLogo from "assets/logo/small_primary_dashed_logo.svg";
import DashboardLogo from "assets/sections/dashboard/navbar_icon_dashboard.svg";
import JobsLogo from "assets/sections/dashboard/navbar_icon_folio.svg";
// import LearnPathLogo from 'assets/sections/dashboard/navbar_icon_learnpath.svg';
import CareerLogo from "assets/sections/dashboard/navbar_icon_learntrack.svg";
import LogoutIcon from "assets/sections/dashboard/navbar_icon_logout.svg";
import SettingsLogo from "assets/sections/dashboard/navbar_icon_settings.svg";
// import StepDegreeLogo from 'assets/sections/dashboard/navbar_icon_stepdegree.svg';

interface DashboardLayoutProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

const DashboardLayout = ({ children, rightSidebar }: DashboardLayoutProps) => {
  const router = useRouter();
  const { signOut } = useClerk();

  const signOutHandler = async () => {
    await signOut();
    router.push("/");
  };

  const navbarLinksCSSClasses =
    "px-6 py-2 flex justify-start items-center gap-4 hover:bg-primary rounded transition-all duration-200 text-base hover:text-white stroke-1 stroke-muted-primary hover:stroke-white";

  return (
    <main className="relative grid min-h-screen w-full grid-cols-dashboard-layout gap-4 bg-dashboard-light">
      {/* Left Navbar for features main page */}
      <nav className="sticky top-0 col-span-1 flex max-h-screen min-h-screen w-max max-w-sm flex-col items-start justify-between gap-10 border-r border-black px-4 py-10">
        <Link
          href="/"
          className="flex items-center justify-start gap-4 px-6 py-2"
          title="Go back to home page"
          aria-label="Go back to home page"
        >
          <DarkLogo />
          <p className="text-xl font-normal text-primary">Drozee</p>
        </Link>

        <ul className="flex min-h-[70%] w-full flex-col items-center justify-start gap-8">
          <li className="w-full text-muted-primary">
            <Link
              href="/dashboard"
              className={`${navbarLinksCSSClasses} ${
                router.pathname === "/dashboard" &&
                "bg-primary stroke-white text-white"
              }`}
              title="Dashboard"
              aria-label="Dashboard"
            >
              <DashboardLogo />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="w-full text-muted-primary hover:text-secondary">
            <Link
              href="/dashboard/career"
              className={`${navbarLinksCSSClasses} ${
                router.pathname === "/dashboard/career" &&
                "bg-primary stroke-white text-white"
              }`}
              title="Career"
              aria-label="Career"
            >
              <CareerLogo />
              <p>Career</p>
            </Link>
          </li>
          {/* <li className='w-full text-muted-primary hover:text-secondary'>
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
					</li> */}
          <li className="w-full text-muted-primary hover:text-secondary">
            <Link
              href="/dashboard/jobs"
              className={`${navbarLinksCSSClasses} ${
                router.pathname === "/dashboard/jobs" &&
                "bg-primary stroke-white text-white"
              }`}
              title="Jobs"
              aria-label="Jobs"
            >
              <JobsLogo />
              <p>Jobs</p>
            </Link>
          </li>
          <li className="w-full text-muted-primary hover:text-secondary">
            <Link
              href="/dashboard/settings"
              className={`${navbarLinksCSSClasses} stroke-[0.05] hover:fill-white ${
                router.pathname === "/dashboard/settings" &&
                "bg-primary fill-white stroke-white text-white"
              }`}
              title="Settings"
              aria-label="Settings"
            >
              <SettingsLogo />
              <p>Settings</p>
            </Link>
          </li>
        </ul>

        <button
          className="group flex w-full items-center justify-start gap-4 rounded px-6 py-2 text-muted-primary transition-all duration-200 hover:bg-primary"
          title="Logout"
          aria-label="Logout"
          onClick={() => signOutHandler()}
        >
          <LogoutIcon className="fill-muted-primary group-hover:fill-white" />
          <p className="text-sm font-normal text-muted-primary group-hover:text-white">
            Log Out
          </p>
        </button>
      </nav>

      {/* main content in dashboard */}
      {/* this is scrollable */}
      <div className="col-span-1 w-full">{children}</div>

      {/* Right sidebar for tips and stats */}
      <aside className="sticky top-0  col-span-1 max-h-screen w-max max-w-sm border-l border-black px-4 py-10">
        {/* user details on top of right sidebar */}

        {/* dynamically pass different components to show on the right side */}
        {rightSidebar}
      </aside>
    </main>
  );
};

export default DashboardLayout;
