import Link from 'next/link';

import CareerHeroSVG from 'assets/sections/careerHero/career_hero.svg';

const HeroSection = () => {
	return (
		<section className='w-full'>
			<div className='lg:pl-20 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
				<div className='order-2 w-full px-10 lg:px-0 lg:order-1 lg:w-[50%] flex flex-col justify-center items-start gap-8 lg:gap-10'>
					<h1 className='max-w-[590px] text-3xl lg:text-5xl font-serif lg:leading-snug'>
						Careers at Drozee
					</h1>
					<h4 className='max-w-[560px] text-sm lg:text-base'>
						Our goal is to change the way of learning by offering free
						nanodegrees recognized by the industry!
					</h4>
					<div className='w-full mt-4 lg:mt-10'>
						<Link href='/career/#job_openings' passHref>
							<a
								className='py-4 px-6 bg-secondary text-white text-base font-medium rounded-lg tracking-wide'
								title='See open positions'
								aria-label='See open positions'
							>
								See open positions
							</a>
						</Link>
					</div>
				</div>
				<div className='order-1 py-14 relative ml-auto w-5/6 lg:order-2 lg:ml-0 lg:w-[50%] lg:py-28 flex justify-center items-center'>
					<div className='w-full h-full bg-primary rounded-tl-[100px] rounded-br-[100px] absolute z-0 top-0 right-0' />
					<div className='w-full relative top-6 -left-14 md:left-6 xl:left-10'>
						<CareerHeroSVG className='scale-75 md:scale-90 lg:scale-100' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
