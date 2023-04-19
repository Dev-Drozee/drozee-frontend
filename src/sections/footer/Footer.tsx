import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex flex-col items-start justify-evenly gap-10 px-10 py-14 lg:flex-row lg:gap-0 lg:px-0 lg:py-28">
        <div className="">
          <h3 className="mb-4 font-serif text-xl font-bold tracking-wider lg:text-3xl">
            Product
          </h3>
          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>
              <Link
                href="/about-us"
                title="Drozee Overview"
                aria-label="Drozee Overview"
              >
                Drozee Overview
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                title="Learn Path"
                aria-label="Learn Path"
              >
                LearnPath
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                title="StepDegree"
                aria-label="StepDegree"
              >
                StepDegree
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                title="Skill Match"
                aria-label="Skill Match"
              >
                Skill Match
              </Link>
            </li>
            <li>
              <Link href="/dashboard" title="TopSlot" aria-label="TopSlot">
                TopSlot
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-4 font-serif text-xl font-bold tracking-wider lg:text-3xl">
            Company
          </h3>
          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>
              <Link href="/about-us" title="About Us" aria-label="About Us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/career" title="Career" aria-label="Career">
                Career
              </Link>
            </li>
            <li>
              <Link href="/dashboard" title="Spotlight" aria-label="Spotlight">
                Spotlight
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Customer Stories"
                aria-label="Customer Stories"
              >
                Customer Stories
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Our Heroes"
                aria-label="Our Heroes"
              >
                Our Heroes
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Pricing"
                aria-label="Pricing"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-4 font-serif text-xl font-bold tracking-wider lg:text-3xl">
            Resources
          </h3>
          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>
              <Link
                href="/under-development"
                title="Help Center"
                aria-label="Help Center"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/under-development" title="Blog" aria-label="Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Community"
                aria-label="Community"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Developers"
                aria-label="Developer"
              >
                Developers
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="mb-4 font-serif text-xl font-bold tracking-wider lg:text-3xl">
            Partners
          </h3>
          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>
              <Link
                href="/under-development"
                title="Academics"
                aria-label="Academics"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Corporates"
                aria-label="Corporates"
              >
                Corporates
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Recruiters"
                aria-label="Recruiters"
              >
                Recruiters
              </Link>
            </li>
            <li>
              <Link
                href="/under-development"
                title="Startups"
                aria-label="Startups"
              >
                Startups
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 bg-primary-dark px-10 py-8 lg:flex-row lg:px-36">
        <p className="text-xs">Copyright © 2022 Drozee. All rights reserved.</p>
        <ul className="flex items-center justify-evenly gap-8">
          <li>
            <Link href="/" title="Facebook" aria-label="Facebook">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13416 3.29509H9.95087V0.139742C9.63744 0.0967442 8.55952 0 7.30416 0C4.68481 0 2.89049 1.643 2.89049 4.66274V7.44186H0V10.9693H2.89049V19.845H6.43436V10.9701H9.20793L9.64822 7.44269H6.43353V5.01251C6.43436 3.99297 6.70964 3.29509 8.13416 3.29509V3.29509Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" title="Twitter" aria-label="Twitter">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1616 2.11613C21.3412 2.475 20.467 2.71288 19.5556 2.82838C20.4932 2.27013 21.2088 1.39287 21.5452 0.3355C20.6711 0.85525 19.7059 1.22238 18.6773 1.42725C17.8472 0.545875 16.6642 0 15.3736 0C12.8697 0 10.8539 2.02675 10.8539 4.51137C10.8539 4.86888 10.8842 5.21263 10.9587 5.53988C7.19862 5.357 3.87153 3.55988 1.63647 0.82225C1.24626 1.49738 1.01738 2.27012 1.01738 3.102C1.01738 4.664 1.82399 6.04862 3.02632 6.85025C2.29968 6.8365 1.58683 6.62613 0.982908 6.29475C0.982908 6.3085 0.982908 6.32638 0.982908 6.34425C0.982908 8.536 2.55062 10.3565 4.60644 10.7759C4.2383 10.8763 3.83706 10.9244 3.42066 10.9244C3.13111 10.9244 2.8388 10.9079 2.56441 10.8474C3.15041 12.6335 4.81327 13.9466 6.79049 13.9893C5.25173 15.1896 3.29794 15.9129 1.18284 15.9129C0.811934 15.9129 0.456199 15.8964 0.100464 15.851C2.10389 17.1394 4.47821 17.875 7.03868 17.875C15.3612 17.875 19.9113 11 19.9113 5.04075C19.9113 4.84137 19.9044 4.64887 19.8948 4.45775C20.7924 3.8225 21.5466 3.02913 22.1616 2.11613Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" title="Instagram" aria-label="Instagram">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.1668 0H15.4397C19.2466 0 22.3338 3.07862 22.3338 6.875V15.125C22.3338 18.9214 19.2466 22 15.4397 22H7.1668C3.35988 22 0.272705 18.9214 0.272705 15.125V6.875C0.272705 3.07862 3.35988 0 7.1668 0ZM15.4397 19.9375C18.1009 19.9375 20.2656 17.7787 20.2656 15.125V6.875C20.2656 4.22125 18.1009 2.0625 15.4397 2.0625H7.16682C4.50569 2.0625 2.34094 4.22125 2.34094 6.875V15.125C2.34094 17.7787 4.50569 19.9375 7.16682 19.9375H15.4397Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.78809 11C5.78809 7.96263 8.25754 5.5 11.3033 5.5C14.3491 5.5 16.8186 7.96263 16.8186 11C16.8186 14.0374 14.3491 16.5 11.3033 16.5C8.25754 16.5 5.78809 14.0374 5.78809 11ZM7.85626 11C7.85626 12.8948 9.4033 14.4375 11.3033 14.4375C13.2033 14.4375 14.7504 12.8948 14.7504 11C14.7504 9.10388 13.2033 7.5625 11.3033 7.5625C9.4033 7.5625 7.85626 9.10388 7.85626 11Z"
                  fill="white"
                />
                <ellipse
                  cx="17.2328"
                  cy="5.08737"
                  rx="0.735443"
                  ry="0.73288"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/" title="Linkedin" aria-label="Linkedin">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0544 22.0601V22.0592H22.0599V13.9687C22.0599 10.0108 21.2078 6.96191 16.5808 6.96191C14.3564 6.96191 12.8637 8.18255 12.2543 9.3398H12.1899V7.3314H7.80273V22.0592H12.371V14.7666C12.371 12.8464 12.7349 10.9897 15.1128 10.9897C17.4558 10.9897 17.4907 13.181 17.4907 14.8897V22.0601H22.0544Z"
                  fill="white"
                />
                <path
                  d="M0.364014 7.33252H4.93779V22.0603H0.364014V7.33252Z"
                  fill="white"
                />
                <path
                  d="M2.64904 0C1.18664 0 0 1.18664 0 2.64904C0 4.11143 1.18664 5.3229 2.64904 5.3229C4.11143 5.3229 5.2981 4.11143 5.2981 2.64904C5.29715 1.18664 4.11051 0 2.64904 0Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
