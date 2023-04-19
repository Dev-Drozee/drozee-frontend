import Link from "next/link";

import Logo from "assets/logo/big_primary_dashed_logo.svg";
import UnderDevelopmentSVG from "assets/sections/underDevelopment/under_development.svg";

const UnderDevelopment = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute left-[10%] top-8 flex items-center justify-center gap-2 xl:gap-4">
        <Logo className="scale-75 xl:scale-100" />
        <p className="text-md font-medium text-primary xl:text-2xl">Drozee</p>
      </div>

      <div className="flex items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-primary xl:text-5xl">
            Page
          </h2>
          <h2 className="mb-10 text-xl font-semibold text-primary xl:text-5xl">
            Underconstruction
          </h2>
          <Link
            href="/"
            title="Go back home"
            aria-label="Go back home"
            className="rounded bg-primary px-4 py-3 text-base text-white md:px-6 md:py-4 md:text-lg"
          >
            Go back home
          </Link>
        </div>

        <div className="hidden flex-1 xl:block">
          <UnderDevelopmentSVG />
        </div>
      </div>
    </section>
  );
};

export default UnderDevelopment;
