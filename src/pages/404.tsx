import Link from "next/link";

import Logo from "assets/logo/big_primary_dashed_logo.svg";
import Page404SVG from "assets/sections/page404/page_404.svg";

const Page404 = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute left-[10%] top-8 flex items-center justify-center gap-2 xl:gap-4">
        <Logo className="scale-75 xl:scale-100" />
        <p className="text-md font-medium text-primary xl:text-2xl">Drozee</p>
      </div>

      <div className="flex items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-primary xl:text-5xl">
            Oops!
          </h2>
          <h2 className="text-xl font-semibold uppercase text-primary xl:text-5xl">
            Page Not Found
          </h2>
          <p className="mb-10 text-base text-primary xl:text-xl">
            it looks like you’re lost...
          </p>
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
          <Page404SVG />
        </div>
      </div>
    </section>
  );
};

export default Page404;
