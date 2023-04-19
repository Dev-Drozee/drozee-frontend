import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import DarkMobileLogo from "assets/logo/small_primary_dashed_logo.svg";
import Emoji from "components/emoji/Emoji";

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
        emailRef.current.value = "";
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
          className="mt-6 w-max cursor-not-allowed rounded bg-primary px-6 py-3 text-center text-white opacity-60"
          disabled
        >{`Resend Email in ${resendTimer} sec`}</button>
      );
    } else {
      return (
        <button
          className="mt-6 w-max rounded bg-primary px-6 py-3 text-center text-white"
          onClick={() => setResendEmail(false)}
        >
          Resend Email
        </button>
      );
    }
  };

  return (
    <section className="flex h-screen w-full">
      <div className="absolute left-10 top-8 z-10 w-max">
        <Link
          href="/"
          className="flex items-center justify-start gap-3"
          title="Go back home"
          aria-label="Go back home"
        >
          <DarkMobileLogo className="scale-125" />
          <p className="text-2xl text-primary">Drozee</p>
        </Link>
      </div>
      <section className="flex h-full w-full items-center justify-center">
        {!tooManyCall ? (
          <div className="relative bottom-5 flex flex-col items-start justify-center gap-1">
            <h1 className="mb-4 text-4xl font-semibold text-secondary">
              Welcome to Drozee!
              <Emoji symbol="&#128075;" label="waving hand emoji" />
            </h1>
            <p className="text-lg text-primary">
              Please check your inbox for login link.
            </p>
            <p className="text-lg text-primary">
              {"If you don't see an email, please check span folder."}
            </p>
            {!resendEmail && (
              <form className="mt-2 w-full" onSubmit={handleSubmit}>
                <label className="w-full text-primary">
                  Email
                  <input
                    type="email"
                    className="border-light mt-3 w-full rounded border-[1px] px-4 py-2 text-base outline-none focus:border-primary"
                    placeholder="Enter your email"
                    ref={emailRef}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded bg-primary px-4 py-3 text-center text-white"
                >
                  Resend an magic email
                </button>
              </form>
            )}
            {resendEmail && showResendEmail()}
          </div>
        ) : (
          <div className="relative bottom-5 flex flex-col items-start justify-center gap-1">
            <h2 className="mb-4 text-3xl font-semibold text-primary">
              We are extremely sorry, for this experience
            </h2>
            <p className="text-base text-primary">
              Please try again after some time.
            </p>
            <Link
              href="/"
              className="mt-2 border-b-[1px] border-secondary py-1 text-base text-secondary"
              title="Go back to landing page"
              aria-label="Go back to landing page"
            >
              Go back home
            </Link>
          </div>
        )}
      </section>
    </section>
  );
};

export default EmailSentPage;
