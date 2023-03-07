import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import DarkMonitorLogo from 'assets/logo/big_primary_dashed_logo.svg';
import LightMonitorLogo from 'assets/logo/big_white_dashed_logo.svg';
import LightMobileLogo from 'assets/logo/small_white_dashed_logo.svg';

const Navbar = () => {
	const navbarRef = useRef<HTMLElement>(null);
	const [menu, showMenu] = useState(false);
	const [navbarScrolled, setNavbarScrolled] = useState(false);

	// Hamberger menu click handler
	// Change css classes
	const onMobileMenuClick = () => {
		const prevMenuState = menu;
		showMenu(!prevMenuState);
	};

	useEffect(() => {
		// Changes navbar styles from normal to glassmorphic
		window.onscroll = () => {
			if (document.documentElement.scrollTop > 50) {
				if (navbarRef && navbarRef.current) {
					setNavbarScrolled(true);
				}
			} else {
				setNavbarScrolled(false);
			}
		};
	}, []);

	return (
		<nav
			className='w-full fixed top-0 left-0 right-0 min-h-[8vh] z-50'
			ref={navbarRef}
		>
			{/* Desktop Navbar */}
			<div
				className={`hidden xl:py-6 xl:px-20 xl:flex xl:justify-between xl:items-center ${navbarScrolled ? 'backdrop-blur-3xl bg-black bg-opacity-20' : null
					} transition-all duration-200`}
			>
				<div className='w-max'>
					<Link href='/' title='Home'
						aria-label='Home'
						className='flex justify-center items-center gap-3'>
						{navbarScrolled ? (
							<LightMonitorLogo aria-label='Logo' />
						) : (
							<DarkMonitorLogo aria-label='Logo' />
						)}
						<p
							className={`text-xl font-medium ${navbarScrolled ? 'text-white' : 'text-primary'
								}`}
						>
							Drozee
						</p>
					</Link>
				</div>
				<ul className='flex justify-center items-center gap-12'>
					<li>
						<div
							title='Products'
							aria-label='Products'
							className='flex justify-center items-center gap-2 text-white cursor-pointer group relative'
						>
							<p>Products</p>
							<svg
								width='9'
								height='5'
								viewBox='0 0 9 5'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 1L4.5 4L8 1'
									stroke='white'
									strokeWidth='1.5'
									strokeLinecap='round'
								/>
							</svg>
							<ul className='hidden group-hover:block w-max absolute top-6 left-0 z-10 bg-white text-black rounded-lg py-4 px-8 shadow-md'>
								<li className='pb-2'>
									<Link href='/dashboard' title='Folio'
										aria-label='Folio'
										className='hover:text-secondary'>
										Folio
									</Link>
								</li>
								<li className='pb-2'>
									<Link href='/dashboard' title='Learn Track'
										aria-label='Learn Track'
										className='hover:text-secondary'>
										LearnTrack
									</Link>
								</li>
								<li className='pb-2'>
									<Link href='/dashboard' title='Learn Path'
										aria-label='Learn Path'
										className='hover:text-secondary'>
										LearnPath
									</Link>
								</li>
								<li>
									<Link href='/dashboard' title='StepDegree'
										aria-label='StepDegree'
										className='hover:text-secondary'>
										StepDegree
									</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<Link href='/about-us' className='text-white' title='About us' aria-label='About us'>
							About us
						</Link>
					</li>
					<li>
						<Link href='/partners' className='text-white' title='Partners' aria-label='Partners'>
							Partners
						</Link>
					</li>
					<li>
						<Link href='/alpha-access' className='bg-primary-light text-primary py-3 px-7 rounded-3xl font-semibold text-base hover:text-secondary'
							title='Alpha Access'
							aria-label='Alpha Access'>
							Alpha Access
						</Link>
					</li>
				</ul>
			</div>
			{/* Mobile Navbar */}
			<div
				className={`w-full py-4 px-4 flex justify-between items-center relative xl:hidden ${menu ? 'bg-primary' : 'backdrop-blur-3xl bg-black bg-opacity-20'
					}`}
			>
				<div className='w-max'>
					<Link href='/' title='Home'
						aria-label='Home'
						className='flex justify-center items-center gap-3'>
						<LightMobileLogo aria-label='Logo' />
					</Link>
				</div>
				<ul
					className={`${menu ? 'right-0' : '-right-full'
						} absolute top-14 w-full min-h-[calc(100vh-7vh)] flex flex-col justify-center items-center gap-12 bg-primary transition-right`}
				>
					<li>
						<div
							title='Products'
							aria-label='Products'
							className='flex flex-col justify-center items-center gap-2 text-white cursor-pointer group relative'
						>
							<div className='flex justify-center items-center gap-2'>
								<p>Products</p>
								<svg
									width='9'
									height='5'
									viewBox='0 0 9 5'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 1L4.5 4L8 1'
										stroke='white'
										strokeWidth='1.5'
										strokeLinecap='round'
									/>
								</svg>
							</div>
							<ul className='hidden group-hover:flex flex-col justify-center items-center w-max py-4 px-8'>
								<li className='py-1'>
									<Link href='/dashboard' title='Folio'
										aria-label='Folio'
										className='hover:text-secondary'>
										Folio
									</Link>
								</li>
								<li className='py-1'>
									<Link href='/dashboard' title='Learn Track'
										aria-label='Learn Track'
										className='hover:text-secondary'>
										LearnTrack
									</Link>
								</li>
								<li className='py-1'>
									<Link href='/dashboard' title='Learn Path'
										aria-label='Learn Path'
										className='hover:text-secondary'>
										LearnPath
									</Link>
								</li>
								<li className='py-1'>
									<Link href='/dashboard' title='StepDegree'
										aria-label='StepDegree'
										className='hover:text-secondary'>
										StepDegree
									</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<Link href='/about-us' className='text-white' title='Know us' aria-label='Know us'>
							About us
						</Link>
					</li>
					<li>
						<Link href='/partners' className='text-white' title='Partners' aria-label='Partners'>
							Partners
						</Link>
					</li>
					<li>
						<Link href='/alpha-access' className='bg-primary-light text-primary py-3 px-7 rounded-3xl font-semibold text-base hover:text-secondary'
							title='Alpha Access'
							aria-label='Alpha Access'>
							Alpha Access
						</Link>
					</li>
				</ul>
				<button
					className='mr-2 flex flex-col justify-center items-center gap-[5px]'
					onClick={onMobileMenuClick}
					aria-label='Menu'
				>
					<span
						className={`inline-block w-8 h-[2px] bg-white transition-all duration-200 ${menu ? 'rotate-45 translate-y-2' : null
							} `}
					></span>
					<span
						className={`inline-block w-8 h-[2px] bg-white transition-all duration-200 ${menu ? 'opacity-0' : null
							} `}
					></span>
					<span
						className={`inline-block w-8 h-[2px] bg-white transition-all duration-200 ${menu ? '-rotate-45 -translate-y-2' : null
							} `}
					></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
