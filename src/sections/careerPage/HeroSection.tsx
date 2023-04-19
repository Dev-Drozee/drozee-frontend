import Link from "next/link";

import CareerHeroSVG from "assets/sections/careerHero/career_hero.svg";
import MobileHeroSVG from "assets/sections/careerHero/mobile_hero.svg";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col items-center justify-between gap-4 pb-10 lg:flex-row lg:gap-0 lg:pl-20">
        <div className="order-2 flex w-full flex-col items-start justify-center gap-8 px-10 lg:order-1 lg:w-[50%] lg:gap-10 lg:px-0">
          <h1 className="mt-4 max-w-[590px] font-serif text-3xl md:mt-0 lg:text-5xl lg:leading-snug">
            Careers at Drozee
          </h1>
          <h4 className="max-w-[560px] text-sm lg:text-base">
            Our goal is to change the way of learning by offering free
            nanodegrees recognized by the industry!
          </h4>
          <div className="mt-2 w-full lg:mt-10">
            <Link
              href="/career/#job_openings"
              className="inline-block w-full rounded-xl bg-secondary px-0 py-3 text-center text-base font-medium tracking-wide text-white md:w-max md:rounded-lg md:px-6 md:py-4"
              title="See open positions"
              aria-label="See open positions"
            >
              See open positions
            </Link>
          </div>
        </div>
        <div className="relative order-1 ml-auto flex w-5/6 items-center justify-center py-10 md:py-14 lg:order-2 lg:ml-0 lg:w-[50%] lg:py-28">
          <div className="absolute right-0 top-0 z-0 h-full w-full rounded-br-[100px] rounded-tl-[100px] bg-primary" />
          <div className="-left-30 relative top-12 w-full md:left-6 md:top-6 xl:left-10">
            <MobileHeroSVG className="md:hidden" />
            <CareerHeroSVG className="hidden md:block md:scale-90 lg:scale-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
