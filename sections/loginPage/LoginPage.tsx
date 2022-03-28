import Link from 'next/link';
import { useRef } from 'react';

import LightMobileLogo from 'assets/logo/small_white_dashed_logo.svg';
import LoginPageSvg from 'assets/sections/login/login_page.svg';

const LoginPage = () => {
	const emailRef = useRef<HTMLInputElement>(null);

	// handle login submit of for magic email
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (emailRef.current) {
			// emailRef.current.value;
		}
	};

	return (
		<section className='w-full h-screen flex'>
			<div className='w-max absolute top-8 left-10 z-10'>
				<Link href='/' passHref>
					<a
						className='flex justify-start items-center gap-3'
						title='Go back home'
						aria-label='Go back home'
					>
						<LightMobileLogo className='scale-125' />
						<p className='text-white text-2xl'>Drozee</p>
					</a>
				</Link>
			</div>
			<section className='w-2/3 bg-primary-dark flex justify-center items-center'>
				<div className='w-max'>
					<LoginPageSvg />
				</div>
			</section>
			<section className='w-1/3 bg-white flex justify-center items-center'>
				<div className='w-max max-w-sm flex flex-col justify-start items-start gap-6'>
					<h1 className='text-2xl text-secondary font-semibold'>
						Welcome to Drozee!
					</h1>
					<p className='text-primary'>
						Please login to your account. Enter your email below and we will
						send you an email. No need to register. We will handle the rest.
					</p>
					<form className='w-full'>
						<label className='w-full text-primary'>
							Email
							<input
								type='email'
								className='w-full mt-2 border-[1px] border-light rounded py-2 px-4 text-base outline-none focus:border-primary'
								placeholder='Enter your email'
								required
							/>
						</label>
						<button
							type='submit'
							className='w-full mt-4 py-3 px-4 bg-primary text-center text-white rounded'
						>
							Send an magic email
						</button>
					</form>
				</div>
			</section>
		</section>
	);
};

export default LoginPage;
