import Link from 'next/link';

import Logo from 'assets/logo/big_primary_dashed_logo.svg';
import UnderDevelopmentSVG from 'assets/sections/underDevelopment/under_development.svg';

const UnderDevelopment = () => {
	return (
		<section className='w-full min-h-screen relative flex justify-center items-center'>
			<div className='absolute top-8 left-[10%] flex justify-center items-center gap-2 xl:gap-4'>
				<Logo className='scale-75 xl:scale-100' />
				<p className='text-md xl:text-2xl font-medium text-primary'>Drozee</p>
			</div>

			<div className='flex justify-between items-center gap-12'>
				<div className='flex-1'>
					<h2 className='text-xl xl:text-5xl font-semibold text-primary'>
						Page
					</h2>
					<h2 className='mb-10 text-xl xl:text-5xl font-semibold text-primary'>
						Underconstruction
					</h2>
					<Link href='/' passHref>
						<a
							title='Go back home'
							aria-label='Go back home'
							className='py-3 px-4 text-base md:py-4 md:px-6 md:text-lg text-white bg-primary rounded'
						>
							Go back home
						</a>
					</Link>
				</div>

				<div className='hidden xl:block flex-1'>
					<UnderDevelopmentSVG />
				</div>
			</div>
		</section>
	);
};

export default UnderDevelopment;
