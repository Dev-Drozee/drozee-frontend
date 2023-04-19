import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import DarkMonitorLogo from "assets/logo/big_primary_dashed_logo.svg";
import LightMonitorLogo from "assets/logo/big_white_dashed_logo.svg";
import LightMobileLogo from "assets/logo/small_white_dashed_logo.svg";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [menu, showMenu] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Hamberger menu click handler
  // Change css classes
  const onMobileMenuClick = () => {
    const prevMenuState = menu;
    showMenu(!prevMenuState);
  };

  useEffect(() => {
    // Changes navbar styles from normal to glassmorphic
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 50) {
        if (navbarRef && navbarRef.current) {
          setNavbarScrolled(true);
        }
      } else {
        setNavbarScrolled(false);
      }
    };
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 min-h-[8vh] w-full"
      ref={navbarRef}
    >
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex lg:items-center lg:justify-center lg:px-20 lg:py-6 ${
          navbarScrolled ? "bg-primary" : "bg-transparent"
        } transition-all duration-500`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between">
          <div className="w-max">
            <Link
              href="/"
              title="Home"
              aria-label="Home"
              className="flex items-center justify-center gap-3"
            >
              {navbarScrolled ? (
                <LightMonitorLogo aria-label="Logo" />
              ) : (
                <DarkMonitorLogo aria-label="Logo" />
              )}
              <p
                className={`text-xl font-medium ${
                  navbarScrolled ? "text-white" : "text-primary"
                }`}
              >
                Drozee
              </p>
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-12">
            <li>
              <div
                title="Products"
                aria-label="Products"
                className={`flex items-center justify-center gap-2 ${
                  navbarScrolled ? "text-white" : "text-primary"
                } group relative cursor-pointer`}
              >
                <p>Products</p>
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${
                      navbarScrolled ? "stroke-white" : "stroke-primary"
                    }`}
                    d="M1 1L4.5 4L8 1"
                    // stroke='white'
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <ul className="absolute left-0 top-6 z-10 hidden w-max rounded-lg bg-white px-8 py-4 text-black shadow-md group-hover:block">
                  <li className="pb-2">
                    <Link
                      href="/dashboard"
                      title="Folio"
                      aria-label="Folio"
                      className="hover:text-secondary"
                    >
                      Folio
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/dashboard"
                      title="Learn Track"
                      aria-label="Learn Track"
                      className="hover:text-secondary"
                    >
                      LearnTrack
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link
                      href="/dashboard"
                      title="Learn Path"
                      aria-label="Learn Path"
                      className="hover:text-secondary"
                    >
                      LearnPath
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      title="StepDegree"
                      aria-label="StepDegree"
                      className="hover:text-secondary"
                    >
                      StepDegree
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  navbarScrolled
                    ? "text-white hover:text-primary-light"
                    : "text-priamry hover:text-secondary"
                }`}
                title="About us"
                aria-label="About us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={`${
                  navbarScrolled
                    ? "text-white hover:text-primary-light"
                    : "text-priamry hover:text-secondary"
                }`}
                title="Partners"
                aria-label="Partners"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="rounded-3xl bg-primary-light px-7 py-3 text-base font-semibold text-primary hover:text-secondary"
                title="Login"
                aria-label="Login"
              >
                Login / Signup
              </Link>
              {/* <Link href='/alpha-access' className='bg-primary-light text-primary py-3 px-7 rounded-3xl font-semibold text-base hover:text-secondary'
							title='Alpha Access'
							aria-label='Alpha Access'>
							Alpha Access
						</Link> */}
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`relative flex w-full items-center justify-between px-4 py-4 lg:hidden ${
          menu ? "bg-primary" : "bg-black bg-opacity-20 backdrop-blur-3xl"
        }`}
      >
        <div className="w-max">
          <Link
            href="/"
            title="Home"
            aria-label="Home"
            className="flex items-center justify-center gap-3"
          >
            <LightMobileLogo aria-label="Logo" />
          </Link>
        </div>
        <ul
          className={`${
            menu ? "right-0" : "-right-full"
          } absolute top-14 flex min-h-[calc(100vh-7vh)] w-full flex-col items-center justify-center gap-12 bg-primary transition-right`}
        >
          <li>
            <div
              title="Products"
              aria-label="Products"
              className="group relative flex cursor-pointer flex-col items-center justify-center gap-2 text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <p>Products</p>
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4.5 4L8 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <ul className="hidden w-max flex-col items-center justify-center px-8 py-4 group-hover:flex">
                <li className="py-1">
                  <Link
                    href="/dashboard"
                    title="Folio"
                    aria-label="Folio"
                    className="hover:text-secondary"
                  >
                    Folio
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/dashboard"
                    title="Learn Track"
                    aria-label="Learn Track"
                    className="hover:text-secondary"
                  >
                    LearnTrack
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/dashboard"
                    title="Learn Path"
                    aria-label="Learn Path"
                    className="hover:text-secondary"
                  >
                    LearnPath
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/dashboard"
                    title="StepDegree"
                    aria-label="StepDegree"
                    className="hover:text-secondary"
                  >
                    StepDegree
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-white"
              title="Know us"
              aria-label="Know us"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/partners"
              className="text-white"
              title="Partners"
              aria-label="Partners"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              href="/alpha-access"
              className="rounded-3xl bg-primary-light px-7 py-3 text-base font-semibold text-primary hover:text-secondary"
              title="Alpha Access"
              aria-label="Alpha Access"
            >
              Alpha Access
            </Link>
          </li>
        </ul>
        <button
          className="mr-2 flex flex-col items-center justify-center gap-[5px]"
          onClick={onMobileMenuClick}
          aria-label="Menu"
        >
          <span
            className={`inline-block h-[2px] w-8 bg-white transition-all duration-200 ${
              menu ? "translate-y-2 rotate-45" : null
            } `}
          ></span>
          <span
            className={`inline-block h-[2px] w-8 bg-white transition-all duration-200 ${
              menu ? "opacity-0" : null
            } `}
          ></span>
          <span
            className={`inline-block h-[2px] w-8 bg-white transition-all duration-200 ${
              menu ? "-translate-y-2 -rotate-45" : null
            } `}
          ></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
