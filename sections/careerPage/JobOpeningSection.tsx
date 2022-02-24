const JobOpeningSection = () => {
	return (
		<section
			className='overflow-hidden relative pt-10 pb-56 px-2 lg:pt-36 lg:pb-96 lg:px-8'
			id='job_openings'
		>
			<h2 className='max-w-xl mx-auto text-center text-4xl lg:text-6xl font-bold text-primary'>
				Job Openings
			</h2>
			<p className='max-w-2xl mx-auto mt-4 text-base lg:text-lg text-center'>
				Explore our open roles for working totally remote.
			</p>
			<div className='px-6 lg:px-20'>
				{/* Product Related Jobs */}
				<div className='mt-10 flex flex-col justify-start items-start gap-5'>
					<h3 className='text-base lg:text-2xl text-secondary font-bold'>
						Product
					</h3>
					<div className='w-full'>
						{/* Single Job Format */}
						<div className='flex justify-between items-center'>
							<h4 className='text-sm lg:text-lg font-medium text-primary'>
								Chief Learning Officer
							</h4>
							<p className='hidden md:block text-lg text-primary'>Remote</p>
							<button className='py-2 px-3 md:px-6 text-sm lg:text-base rounded-xl lg:rounded bg-primary text-white font-semibold cursor-pointer'>
								View More
							</button>
						</div>
					</div>
				</div>
			</div>

			<svg
				className='absolute bottom-0 left-0 right-0 -z-[1]'
				width='1437'
				height='255'
				viewBox='0 0 1437 255'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_611_637)'>
					<path
						d='M-21 160.769C74.8629 133.991 296.462 109.446 415.955 225.481C565.321 370.524 822.023 270.511 926.477 185.315C1041.52 91.4862 1187.31 -26.6721 1437 51.4282'
						stroke='#292953'
						strokeWidth='3'
					/>
					<path
						d='M-39.2148 79.1313C7.572 145.845 194.281 329.617 488.432 222.09C681.696 151.441 874.517 163.451 1001.88 202.44C1129.24 241.428 1447.73 242.12 1483.45 84.553'
						stroke='#5645BA'
						strokeWidth='3'
					/>
				</g>
				<defs>
					<clipPath id='clip0_611_637'>
						<rect width='1437' height='255' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</section>
	);
};

export default JobOpeningSection;
