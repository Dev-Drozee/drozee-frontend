import Emoji from 'components/emoji/Emoji';

import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

const DetailsSection = () => {
	return (
		<section className='py-20 px-10 md:px-24 relative'>
			<h2 className='max-w-xs md:max-w-xl mx-auto text-center text-lg md:text-3xl font-bold font-serif'>
				Join to become part of fastest growing community
				<div className='inline-block w-max relative ml-4'>
					<h2 className='text-white relative z-[1]'>why?</h2>
					<svg
						className='absolute -top-4 md:-top-2 -left-4 w-[75px] md:w-[114px]'
						width='114'
						height='82'
						viewBox='0 0 114 82'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='14.4314'
							y1='25.7087'
							x2='77.7087'
							y2='16.5686'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
						<line
							x1='39.1988'
							y1='47.2043'
							x2='78.0453'
							y2='16.7153'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
						<line
							x1='39.4694'
							y1='47.4093'
							x2='97.4141'
							y2='31.5444'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
					</svg>
				</div>
			</h2>
			<div className='mt-20 xl:mt-40 flex flex-col items-center gap-20 xl:gap-40'>
				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-14'>
					<div className='w-full md:w-[450px] md:min-h-[362px] relative left-0 right-0'>
						<div className='w-full h-full bg-primary md:h-[90%] md:rounded-tr-3xl md:rounded-br-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center md:relative md:-top-12'>
							<FirstSVG className='scale-90 lg:scale-100' />
						</div>
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							Become a better version of yourself,
							<span className='text-support-1'> Everyday!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							Tend towards the AI-backed recommendations for acing your
							preferred choice of skillsets. Explore and compare the best from
							over 1000s of courses. Personalised tips and suggestions exist,
							for steering you through your learning journey.
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>Fun Part: </span>We
							Interestingly, all of it is cost-free and we swear by it.{' '}
							<Emoji symbol='&#129303;' label='smiling face with sunglasses' />
						</p>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-14'>
					<div className='ml-auto xl:ml-0 xl:order-2 w-full md:w-[450px] md:min-h-[362px] relative left-0 right-0'>
						<div className='w-full h-full bg-primary md:h-[90%] md:rounded-tl-3xl md:rounded-bl-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center md:relative md:-top-12'>
							<SecondSVG className='scale-90 lg:scale-100' />
						</div>
					</div>
					<div className='xl:order-1 max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							Centralise and integrate your resources and
							<span className='text-support-2'> credentials!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							You can now declutter your folders and systematise the approach to
							storing, of your academic credentials, all at one dais. Be it- CV,
							Portfolios or Skill certificates!
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>P.S.: </span>
							Bonus points and rewards awaits on completion of some activities.{' '}
							<Emoji symbol='&#128175;' label='celebration, party hat' />
						</p>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-14'>
					<div className='w-full md:w-[450px] md:min-h-[362px] relative left-0 right-0'>
						<div className='w-full h-full bg-primary md:h-[90%] md:rounded-tr-3xl md:rounded-br-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center md:relative md:-top-12'>
							<ThirdSVG className='scale-90 lg:scale-100' />
						</div>
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							There’s definitely still more to come,
							<span className='text-support-3'> Signup Now!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							Our team of product designers and developers hustled enough to
							introduce constructive features. However, we do have some exciting
							new features on the horizon as well! Jobs, internships and much
							more are yet to come…
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>Secret: </span>
							So, take time by the forelock and start enrolling!{' '}
							<Emoji
								symbol='&#9996;'
								label='smiling face with open mouth and cold sweat emoji'
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
