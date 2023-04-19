import { useRef, useState } from "react";
import axios from "utils/axiosInstance";

const NewsletterSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef && emailRef.current) {
      await axios({
        method: "POST",
        url: "newsletter",
        headers: {
          "content-type": "application/json",
        },
        data: {
          email: emailRef.current.value,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setIsSubscribed(true);
            setInterval(() => {
              setIsSubscribed(false);
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // Reset Form
      emailRef.current.value = "";
    }
  };

  return (
    <section className="relative overflow-hidden px-8 pb-36 pt-36 lg:pb-52">
      <h2 className="text-center font-serif text-lg font-bold md:text-xl xl:text-3xl">
        Subscribe to your newsletter & get latest updates!
      </h2>
      <form
        className="relative z-[1] mt-14 flex items-center justify-center"
        onSubmit={(event) => onSubmitHandler(event)}
      >
        <input
          type="email"
          required
          ref={emailRef}
          placeholder="Enter your email"
          className="w-60 rounded-l-md bg-primary-light px-4 py-3 text-base focus:outline-none md:w-72 md:px-6 md:py-4 md:text-lg"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className={`text-white ${
            isSubscribed ? "bg-support-1" : "bg-primary"
          } rounded-r-md px-4 py-3 text-base hover:cursor-pointer md:px-6 md:py-4 md:text-lg`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </form>
      {/* <svg
				className='min-w-full absolute -bottom-28 md:-bottom-14 xl:-bottom-8 left-0 right-0'
				width='1440'
				height='277'
				viewBox='0 0 1440 277'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M-7.78516 136.769C88.0777 109.991 309.677 85.4458 429.17 201.481C578.536 346.524 835.238 246.511 939.692 161.315C1054.73 67.4862 1200.53 -50.6721 1450.21 27.4282'
					stroke='#292953'
					strokeWidth='3'
				/>
				<path
					d='M-26 55.1313C20.7868 121.845 207.496 305.617 501.646 198.09C694.911 127.441 887.732 139.451 1015.09 178.44C1142.46 217.428 1460.95 218.12 1496.66 60.553'
					stroke='#5645BA'
					strokeWidth='3'
				/>
			</svg> */}
    </section>
  );
};

export default NewsletterSection;
