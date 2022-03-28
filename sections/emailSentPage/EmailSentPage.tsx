import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import DarkMobileLogo from 'assets/logo/small_primary_dashed_logo.svg';
import Emoji from 'components/emoji/Emoji';

const EmailSentPage = () => {
	const counterForResendEmail = useRef(0);
	const [tooManyCall, setTooManyCall] = useState(false);
	const [resendTimer, setResendTimer] = useState(5);
	const [resendEmail, setResendEmail] = useState(true);
	const emailRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setResendTimer((resendTimer) => resendTimer - 1);
		}, 1000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// handle login submit of for magic email
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// check counter for resend email
		// if counter is less than 3, then resend email
		// else, show error message saying too many requests
		// try again after sometime
		if (counterForResendEmail.current <= 3) {
			if (emailRef.current) {
				//* call api
				emailRef.current.value = '';
			}
			counterForResendEmail.current += 1;
		} else {
			setTooManyCall(true);
		}
	};

	// show resend button
	// don't show resend button when form is visible
	const showResendEmail = () => {
		if (resendTimer > 0) {
			return (
				<button
					className='w-max mt-6 py-3 px-6 bg-primary opacity-60 text-center text-white rounded cursor-not-allowed'
					disabled
				>{`Resend Email in ${resendTimer} sec`}</button>
			);
		} else {
			return (
				<button
					className='w-max mt-6 py-3 px-6 bg-primary text-center text-white rounded'
					onClick={() => setResendEmail(false)}
				>
					Resend Email
				</button>
			);
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
						<DarkMobileLogo className='scale-125' />
						<p className='text-primary text-2xl'>Drozee</p>
					</a>
				</Link>
			</div>
			<section className='w-full h-full flex justify-center items-center'>
				{!tooManyCall ? (
					<div className='flex flex-col justify-center items-start gap-1 relative bottom-5'>
						<h1 className='mb-4 text-4xl text-secondary font-semibold'>
							Welcome to Drozee!
							<Emoji symbol='&#128075;' label='waving hand emoji' />
						</h1>
						<p className='text-primary text-lg'>
							Please check your inbox for login link.
						</p>
						<p className='text-primary text-lg'>
							{"If you don't see an email, please check span folder."}
						</p>
						{!resendEmail && (
							<form className='w-full mt-2' onSubmit={handleSubmit}>
								<label className='w-full text-primary'>
									Email
									<input
										type='email'
										className='w-full mt-3 border-[1px] border-light rounded py-2 px-4 text-base outline-none focus:border-primary'
										placeholder='Enter your email'
										ref={emailRef}
									/>
								</label>
								<button
									type='submit'
									className='w-full mt-6 py-3 px-4 bg-primary text-center text-white rounded'
								>
									Resend an magic email
								</button>
							</form>
						)}
						{resendEmail && showResendEmail()}
					</div>
				) : (
					<div className='flex flex-col justify-center items-start gap-1 relative bottom-5'>
						<h2 className='mb-4 text-3xl text-primary font-semibold'>
							We are extremely sorry, for this experience
						</h2>
						<p className='text-base text-primary'>
							Please try again after some time.
						</p>
						<Link href='/' passHref>
							<a
								className='mt-2 text-secondary text-base py-1 border-b-[1px] border-secondary'
								title='Go back to landing page'
								aria-label='Go back to landing page'
							>
								Go back home
							</a>
						</Link>
					</div>
				)}
			</section>
		</section>
	);
};

export default EmailSentPage;
