const JobOpeningSection = () => {
  return (
    <section
      className="relative overflow-hidden px-2 pb-56 pt-10 lg:px-8 lg:pb-96 lg:pt-36"
      id="job_openings"
    >
      <h2 className="mx-auto max-w-xl text-center text-4xl font-bold text-primary lg:text-6xl">
        Job Openings
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base lg:text-lg">
        Explore our open roles for working totally remote.
      </p>
      <div className="px-6 lg:px-20">
        {/* Product Related Jobs */}
        <div className="mt-10 flex flex-col items-start justify-start gap-5">
          <h3 className="text-base font-bold text-secondary lg:text-2xl">
            Product
          </h3>
          <div className="w-full">
            {/* Single Job Format */}
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-primary lg:text-lg">
                Chief Learning Officer
              </h4>
              <p className="hidden text-lg text-primary md:block">Remote</p>
              <button className="cursor-pointer rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white md:px-6 lg:rounded lg:text-base">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0 -z-[1]"
        width="1437"
        height="255"
        viewBox="0 0 1437 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_611_637)">
          <path
            d="M-21 160.769C74.8629 133.991 296.462 109.446 415.955 225.481C565.321 370.524 822.023 270.511 926.477 185.315C1041.52 91.4862 1187.31 -26.6721 1437 51.4282"
            stroke="#292953"
            strokeWidth="3"
          />
          <path
            d="M-39.2148 79.1313C7.572 145.845 194.281 329.617 488.432 222.09C681.696 151.441 874.517 163.451 1001.88 202.44C1129.24 241.428 1447.73 242.12 1483.45 84.553"
            stroke="#5645BA"
            strokeWidth="3"
          />
        </g>
        <defs>
          <clipPath id="clip0_611_637">
            <rect width="1437" height="255" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default JobOpeningSection;
