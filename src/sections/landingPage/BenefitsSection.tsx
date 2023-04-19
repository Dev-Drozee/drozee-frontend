import ExclusiveAccessSVG from "assets/sections/benefits/exclusive_access.svg";
import FreeForeverSVG from "assets/sections/benefits/free_forever.svg";
import SupriseSVG from "assets/sections/benefits/suprise.svg";
import VIPTreatmentSVG from "assets/sections/benefits/vip_treatment.svg";

const BenefitsSection = () => {
  return (
    <section className="bg-primary-light px-10 pb-24 pt-20">
      <h2 className="mx-auto max-w-xs text-center font-serif text-lg font-bold md:max-w-xl md:text-3xl">
        Join at alpha phase and get exclusive
        <div className="relative ml-4 inline-block w-max">
          <h2 className="relative z-[1] text-white">benefits</h2>
          <svg
            className="absolute -left-4 -top-4 w-[104px] md:-top-2 md:w-[158px]"
            width="158"
            height="82"
            viewBox="0 0 158 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15.6226"
              y1="29.5984"
              x2="110.951"
              y2="15.3772"
              stroke="#292953"
              strokeOpacity="0.71"
              strokeWidth="30"
              strokeLinecap="round"
            />
            <line
              x1="15"
              y1="-15"
              x2="88.1345"
              y2="-15"
              transform="matrix(0.86615 -0.499784 0.635993 0.771695 43 69.5449)"
              stroke="#292953"
              strokeOpacity="0.71"
              strokeWidth="30"
              strokeLinecap="round"
            />
            <line
              x1="45.6025"
              y1="49.241"
              x2="140.241"
              y2="29.3975"
              stroke="#292953"
              strokeOpacity="0.71"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </h2>
      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-stretch justify-center gap-8 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex flex-1 items-center justify-evenly">
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <FreeForeverSVG className="min-h-[33px]" />
            <p>Free Forever</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <ExclusiveAccessSVG />
            <p>Exclusive Access</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-evenly">
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <VIPTreatmentSVG />
            <p>VIP Treatment</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <SupriseSVG />
            <p>{"That's Suprise"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
