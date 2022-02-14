import FreeForeverSVG from 'assets/sections/benefits/free_forever.svg';
import ExclusiveAccessSVG from 'assets/sections/benefits/exclusive_access.svg';
import VIPTreatmentSVG from 'assets/sections/benefits/vip_treatment.svg';
import SupriseSVG from 'assets/sections/benefits/suprise.svg';

const BenefitsSection = () => {
	return (
		<section className='pt-20 pb-24 px-10 bg-primary-light'>
			<h2 className='max-w-xs md:max-w-xl mx-auto text-center text-lg md:text-3xl font-bold font-serif'>
				Join at alpha phase and get exclusive
				<div className='inline-block w-max relative ml-4'>
					<h2 className='text-white relative z-[1]'>benefits</h2>
					<svg
						className='absolute -top-4 md:-top-2 -left-4 w-[104px] md:w-[158px]'
						width='158'
						height='82'
						viewBox='0 0 158 82'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='15.6226'
							y1='29.5984'
							x2='110.951'
							y2='15.3772'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
						<line
							x1='15'
							y1='-15'
							x2='88.1345'
							y2='-15'
							transform='matrix(0.86615 -0.499784 0.635993 0.771695 43 69.5449)'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
						<line
							x1='45.6025'
							y1='49.241'
							x2='140.241'
							y2='29.3975'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
					</svg>
				</div>
			</h2>
			<div className='mt-16 mx-auto max-w-4xl flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-8 lg:gap-0'>
				<div className='flex-1 flex justify-evenly items-center'>
					<div className='flex-1 flex flex-col justify-center items-center gap-4'>
						<FreeForeverSVG className='min-h-[33px]' />
						<p>Free Forever</p>
					</div>
					<div className='flex-1 flex flex-col justify-center items-center gap-4'>
						<ExclusiveAccessSVG />
						<p>Exclusive Access</p>
					</div>
				</div>
				<div className='flex-1 flex justify-evenly items-center'>
					<div className='flex-1 flex flex-col justify-center items-center gap-4'>
						<VIPTreatmentSVG />
						<p>VIP Treatment</p>
					</div>
					<div className='flex-1 flex flex-col justify-center items-center gap-4'>
						<SupriseSVG />
						<p>{"That's Suprise"}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
