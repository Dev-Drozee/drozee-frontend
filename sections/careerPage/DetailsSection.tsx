import Image from 'next/image';

import LoveEachOtherImg from 'public/career_love_each_other.png';
import SolveProblemImg from 'public/career_solve_problem.png';
import CareerLearnAndGrowImg from 'public/career_learn_and_grow.png';

const DetailsSection = () => {
	return (
		<section className='py-20 px-10 md:px-30 relative'>
			<h2 className='max-w-xl mx-auto text-center text-3xl md:text-6xl font-bold text-primary'>
				Our values
			</h2>
			<p className='max-w-2xl mx-auto mt-4 text-base md:text-lg text-center'>
				{
					"Our values are the underpinning for all that we do at Drozee — we believe that a great product is going to solve people's problem."
				}
			</p>
			<div className='mt-20 flex flex-col items-center gap-20 xl:gap-40'>
				<div className='flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20'>
					<div className='order-2 xl:order-1 max-w-lg flex flex-col gap-5'>
						<h3 className='text-4xl xl:text-6xl font-serif text-secondary xl:leading-tight'>
							Love
							<br className='hidden xl:block' /> each other
						</h3>
						<p className='text-primary text-sm md:text-lg'>
							We find people who add to our culture, not just fit in. We look
							beyond alma maters and the in-crowd for people with diverse
							backgrounds, unique experiences and new perspectives that will
							move us forward.
						</p>
					</div>
					<div className='order-1 xl:order-2 min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden'>
							<Image
								src={LoveEachOtherImg}
								width={450}
								height={362}
								alt='Love each other'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[20%] -left-[20%] -z-[1] scale-50 md:scale-75 xl:scale-100'
							width='217'
							height='180'
							viewBox='0 0 217 180'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M215.192 21.2535L121.669 177.846L1.93562 2.00005L215.192 21.2535Z'
								stroke='#5645BA'
								strokeWidth='3.06'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20'>
					<div className='order-2 max-w-lg flex flex-col gap-5'>
						<h3 className='text-4xl xl:text-6xl font-serif text-secondary xl:leading-tight'>
							Solve
							<br className='hidden xl:block' /> problems
						</h3>
						<p className='text-primary text-sm md:text-lg'>
							Our goal at Drozee is to help people who have potential to work
							but no one gave them the opportunity.
						</p>
					</div>
					<div className='order-1 min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full md:rounded-tr-3xl md:rounded-br-3xl overflow-hidden'>
							<Image
								src={SolveProblemImg}
								width={450}
								height={362}
								alt='Solve Problems'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[15%] -right-[15%] -z-[1] scale-50 md:scale-75 xl:scale-100'
							width='199'
							height='199'
							viewBox='0 0 199 199'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.875 99.9096C1.875 46.0457 45.5381 2.37842 99.402 2.37842C153.266 2.37842 196.929 46.0457 196.929 99.9096C196.929 153.773 153.266 197.42 99.402 197.42C45.5381 197.42 1.875 153.773 1.875 99.9096Z'
								stroke='#5645BA'
								strokeWidth='3.06'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20'>
					<div className='order-2 xl:order-1 max-w-lg flex flex-col gap-5'>
						<h3 className='text-4xl xl:text-6xl font-serif text-secondary xl:leading-tight'>
							Learn
							<br className='hidden xl:block' /> and grow
						</h3>
						<p className='text-primary text-sm md:text-lg'>
							We help each other on learning process so that we are growing
							together as team and as individuals.
						</p>
					</div>
					<div className='order-1 xl:order-2 min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden'>
							<Image
								src={CareerLearnAndGrowImg}
								width={450}
								height={362}
								alt='Learn and grow'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[20%] -left-[20%] xl:-bottom-[15%] xl:-left-[15%] -z-[1] scale-50 md:scale-75 xl:scale-100'
							width='247'
							height='247'
							viewBox='0 0 247 247'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='-0.709827'
								y='70.5595'
								width='190.868'
								height='190.868'
								rx='9.47'
								transform='rotate(-21.9733 -0.709827 70.5595)'
								stroke='#5645BA'
								strokeWidth='3.06'
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
