import Emoji from 'components/emoji/Emoji';

import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

const DetailsSection = () => {
	return (
		<section className='py-20 px-10 md:px-24'>
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
			<div className='mt-28 md:mt-40 flex flex-col gap-20 xl:gap-40'>
				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-0'>
					<div className='min-w-[330px] min-h-[265px] md:min-w-[450px] md:min-h-[362px] relative'>
						<div className='w-full h-[90%] bg-primary rounded-tr-[50px] rounded-br-[50px]  md:rounded-tr-3xl md:rounded-br-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center relative -top-12'>
							<FirstSVG />
						</div>
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							Become a better version of yourself,
							<span className='text-support-1'> Everyday!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							Follow AI Guided learning Recommendation, compare 1000s of
							courses. Learn only those skills that are required! Follow tips &
							sugesions to stand ahead of rat race.
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>Fun Part: </span>We
							We don’t own a single paid course. Ours will be free. God promise.{' '}
							<Emoji symbol='&#128526;' label='smiling face with sunglasses' />
						</p>
					</div>
				</div>
				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-0'>
					<div className='ml-auto xl:ml-0 xl:order-2 min-w-[330px] min-h-[265px] md:min-w-[450px] md:min-h-[362px] relative'>
						<div className='w-full h-[90%] bg-primary rounded-tl-[50px] rounded-bl-[50px] md:rounded-tl-3xl md:rounded-bl-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center relative -top-12'>
							<SecondSVG />
						</div>
					</div>
					<div className='xl:order-1 max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							Let us sort everything for you,
							<span className='text-support-2'> Important One!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							CV, Portfolio, Academics documents & your skill certificates.
							Everything will be at one place, Seriously that paper file system
							is outdated and corporate trust us.
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>Bonus: </span>
							We’ll reward you for your activities with points or vouchers.{' '}
							<Emoji symbol='&#127881;' label='celebration, party hat' />
						</p>
					</div>
				</div>
				<div className='flex flex-col xl:flex-row justify-between items-start gap-10 xl:gap-0'>
					<div className='min-w-[330px] min-h-[265px] md:min-w-[450px] md:min-h-[362px] relative'>
						<div className='w-full h-[90%] bg-primary rounded-tr-[50px] rounded-br-[50px]  md:rounded-tr-3xl md:rounded-br-3xl absolute bottom-0 left-0 -z-[1]'></div>
						<div className='w-full h-full flex justify-center items-center relative -top-12'>
							<ThirdSVG />
						</div>
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-2xl md:text-3xl xl:text-5xl font-serif xl:leading-tight'>
							Something should be surprise,
							<span className='text-support-3'> Signup Now!</span>
						</h3>
						<p className='text-sm md:text-lg xl:text-xl'>
							Our team of good product designers & developers are working day &
							night to introduce new features. Jobs, Interships & many more
							coming soon.
						</p>
						<p className='text-sm md:text-lg xl:text-xl'>
							<span className='text-secondary font-medium'>Secret: </span>
							We’re too excited so typed random features and now we have to work
							on random features.{' '}
							<Emoji
								symbol='&#128517;'
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
