import Link from 'next/link';
import Image from 'next/image';

import { useState, useRef } from 'react';
import axios from 'utils/axiosInstance';

import DashboardImg from 'public/dashboard_demo.png';

const HeroSection = () => {
	const [isSubmited, setIsSubmited] = useState(false);
	const emailRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (emailRef && emailRef.current) {
			await axios({
				method: 'POST',
				url: 'waitlist',
				headers: {
					'content-type': 'application/json'
				},
				data: {
					email: emailRef.current.value
				}
			})
				.then((res) => {
					if (res.status === 200) {
						setIsSubmited(true);
						setInterval(() => {
							setIsSubmited(false);
						}, 2000);
					}
				})
				.catch((err) => {
					console.log(err);
				});
			// Reset Form
			emailRef.current.value = '';
		}
	};

	return (
		<section className='w-full'>
			<div className='lg:pl-20 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
				<div className='order-2 w-full px-10 lg:px-0 lg:order-1 lg:w-[45%] flex flex-col justify-center items-start gap-8 lg:gap-10'>
					<h1 className='max-w-[590px] text-3xl lg:text-5xl font-serif lg:leading-snug'>
						Amp up learning potential via
						<span className='text-secondary'> synergizing credentials</span>
					</h1>
					<h2 className='max-w-[560px] text-sm lg:text-base'>
						Now manage, Compare & showcase your whole learning journey at one
						place. Save time & money.
					</h2>
					<div className='w-full mt-4 lg:mt-10'>
						<form
							className='w-full max-w-sm flex justify-start items-center'
							onSubmit={(event) => onSubmitHandler(event)}
						>
							<input
								className='w-full py-3 px-6 text-xs lg:text-base rounded-l-md bg-primary-light focus:outline-none'
								type='email'
								required
								ref={emailRef}
								placeholder='Add your email in waitlist'
							/>
							<button
								type='submit'
								aria-label='Join beta accses'
								className={`py-3 lg:py-4 px-6 rounded-r-md text-white ${
									isSubmited ? 'bg-support-1' : 'bg-primary'
								}  hover:cursor-pointer`}
							>
								<svg
									width='32'
									height='16'
									viewBox='0 0 32 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM31.7071 8.7071C32.0976 8.31658 32.0976 7.68341 31.7071 7.29289L25.3431 0.92893C24.9526 0.538406 24.3195 0.538406 23.9289 0.92893C23.5384 1.31945 23.5384 1.95262 23.9289 2.34314L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.7071ZM1 9L31 9L31 7L1 7L1 9Z'
										fill='white'
									/>
								</svg>
							</button>
						</form>
						<p className='mt-4 text-xs'>
							Don’t worry, we won’t charge our alpha users. Free forever{' '}
							<Link href='/alpha-access' passHref>
								<a
									className='text-secondary'
									title='Join alpha Program'
									aria-label='Join alpha Program'
								>
									join now.
								</a>
							</Link>
						</p>
					</div>
				</div>
				<div className='order-1 py-20 relative ml-auto w-5/6 lg:order-2 lg:ml-0 lg:w-[55%] lg:py-28 flex justify-center items-center'>
					<div className='w-[90%] h-full bg-primary rounded-tl-[100px] rounded-br-[100px] absolute z-0 top-0 right-0' />
					<div className='w-full relative top-6'>
						<Image
							src={DashboardImg}
							alt='Dashboard Demo'
							width={745}
							height={543}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
