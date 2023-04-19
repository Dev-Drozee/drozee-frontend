import { useRef, useState } from "react";
import axios from "utils/axiosInstance";

const AlphaAccessPage = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const institutionRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      nameRef &&
      nameRef.current &&
      emailRef &&
      emailRef.current &&
      institutionRef &&
      institutionRef.current
    ) {
      await axios({
        method: "POST",
        url: "alpha_access",
        headers: {
          "content-type": "application/json",
        },
        data: {
          name: nameRef.current.value,
          email: emailRef.current.value,
          institution: institutionRef.current.value,
        },
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
      nameRef.current.value = "";
      emailRef.current.value = "";
      institutionRef.current.value = "";
    }
  };

  return (
    <section className="min-h-screen w-full pt-24 lg:pt-0">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0 lg:pl-20">
        <div className="flex w-full flex-col items-start justify-center gap-8 px-10 lg:w-[45%] lg:gap-10 lg:px-0">
          <h1 className="max-w-[590px] font-serif text-3xl lg:text-5xl lg:leading-snug">
            Apply for Early Access
          </h1>
          <div className="flex max-w-[590px] flex-wrap items-center justify-start gap-4">
            <span className="rounded bg-primary-light px-3 py-1 text-base font-medium tracking-wide text-secondary">
              Founding User Badge
            </span>
            <span className="rounded bg-primary-light px-3 py-1 text-base font-medium tracking-wide text-secondary">
              Exclusive perks
            </span>
            <span className="rounded bg-primary-light px-3 py-1 text-base font-medium tracking-wide text-secondary">
              Premium Access
            </span>
            <span className="rounded bg-primary-light px-3 py-1 text-base font-medium tracking-wide text-secondary">
              More Surprises for Alpha Users
            </span>
          </div>
        </div>
        <div className="ld:py-20 ml-auto flex w-full items-center justify-center py-10 md:rounded-br-[100px] md:rounded-tl-[100px] lg:ml-0 lg:py-28 xl:w-3/6 xl:bg-primary">
          <form className="px-14" onSubmit={(event) => onSubmitHandler(event)}>
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white px-12 py-10 shadow-[rgba(0,0,0,0.25)] md:shadow-lg xl:shadow-2xl">
              <h2 className="mb-4 text-center font-serif text-2xl font-normal">
                Please fill this form
              </h2>
              <div className="flex w-full min-w-[310px] flex-col items-start justify-start gap-4">
                <label className="w-full">
                  <p className="mb-2 text-base font-normal text-black">Name</p>
                  <input
                    type="text"
                    required
                    ref={nameRef}
                    placeholder="Enter your name"
                    className="w-full rounded-md bg-primary-light px-3 py-2 text-secondary focus:outline-secondary"
                  />
                </label>
                <label className="w-full">
                  <p className="mb-2 text-base font-normal text-black">Email</p>
                  <input
                    type="email"
                    required
                    ref={emailRef}
                    placeholder="Enter your email"
                    className="w-full rounded-md bg-primary-light px-3 py-2 text-secondary focus:outline-secondary"
                  />
                </label>
                <label className="w-full">
                  <p className="mb-2 text-base font-normal text-black">
                    Institution/University
                  </p>
                  <input
                    type="text"
                    ref={institutionRef}
                    required
                    placeholder="Enter your institution/university"
                    className="w-full rounded-md bg-primary-light px-3 py-2 text-secondary focus:outline-secondary"
                  />
                </label>
              </div>
              <p className="text-xs font-light">
                by clicking “submit” I agree for{" "}
                <span className="text-secondary">privacy policy</span>
              </p>
              <button
                type="submit"
                className="mx-auto w-max rounded-3xl bg-support-1 px-8 py-2 text-base font-medium text-black"
                aria-label="Submit"
              >
                {isSubmited ? "Submited" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AlphaAccessPage;
