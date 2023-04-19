import { useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import DashboardCard from "components/dashboardCard";
import DashboardLayout from "layout/DashboardLayout";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardLayout rightSidebar={<div>Right Side bar</div>}>
        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-gray-700">Dashboard</h1>
            <p className="text-sm text-gray-500">
              AI guided system, to help you improve in parts in which you are
              having problems!
            </p>
          </div>
          <div className="relative flex justify-between gap-4">
            <div className="absolute bottom-0 left-0 w-full rounded-2xl bg-support-4 px-4 pb-36 pt-4">
              <h2 className="text-2xl font-bold text-gray-700">
                Welcome, {user?.firstName}
              </h2>
            </div>
            <svg
              className="z-[1] ml-auto mr-[10%]"
              width="175"
              height="255"
              viewBox="0 0 175 255"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3239 88.4118C15.3239 44.8698 50.6199 9.57031 94.162 9.57031C137.704 9.57031 173 44.8698 173 88.4118C173 131.954 137.704 167.236 94.162 167.236C50.6199 167.236 15.3239 131.954 15.3239 88.4118Z"
                stroke="#806FD5"
                strokeWidth="3.06"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M77.4466 49.5645H49.7687V105.744H77.4466V49.5645Z"
                fill="#2F2773"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M93.3446 39.7422C120.142 39.7422 116.793 95.3174 115.207 101.42C111.457 106.017 79.0129 108.255 67.5569 101.42C63.2736 90.953 67.9957 39.7422 93.3446 39.7422Z"
                fill="#FE697D"
              />
              <path
                d="M93.3447 30.0883C101.303 30.0883 107.754 23.637 107.754 15.6789C107.754 7.72083 101.303 1.26953 93.3447 1.26953C85.3866 1.26953 78.9353 7.72083 78.9353 15.6789C78.9353 23.637 85.3866 30.0883 93.3447 30.0883Z"
                fill="#FEC246"
              />
              <path
                d="M82.9521 2.68164C85.6148 7.4352 89.6557 11.27 94.5421 13.6804C99.4284 16.0907 104.931 16.9633 110.323 16.1831"
                stroke="#936800"
                strokeWidth="3.85"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M91.5049 19.4449C91.0189 18.0374 91.1674 16.7143 91.8121 16.4881C92.4568 16.262 93.3884 17.2206 93.8744 18.6281C94.3605 20.0356 94.212 21.3588 93.5673 21.5815C92.9226 21.8043 91.9876 20.8491 91.5049 19.4449Z"
                stroke="#936800"
                strokeWidth="3.85"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.1248 175.532C48.1248 171.306 66.9896 113.911 67.6647 112.129L105.668 190.12C105.668 190.12 130.406 207.863 133.039 212.719L144.755 217.3L132.266 249.001C124.735 239.357 126.186 229.951 127.864 224.59C114.501 218.816 48.1248 179.5 48.1248 175.532Z"
                fill="#C5C5C5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.3134 67.7118C41.3134 66.0429 41.8083 64.4114 42.7355 63.0237C43.6627 61.636 44.9806 60.5545 46.5225 59.9158C48.0644 59.2771 49.7611 59.11 51.398 59.4356C53.0349 59.7612 54.5384 60.5649 55.7186 61.745C56.8987 62.9251 57.7024 64.4287 58.028 66.0656C58.3536 67.7025 58.1865 69.3991 57.5478 70.9411C56.9091 72.483 55.8275 73.8009 54.4398 74.7281C53.0522 75.6553 51.4207 76.1502 49.7517 76.1502C47.5151 76.1457 45.3714 75.2553 43.7898 73.6737C42.2083 72.0922 41.3178 69.9485 41.3134 67.7118Z"
                fill="#FEC246"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M67.6647 112.127C71.148 113.477 103.319 116.549 113.907 112.127C114.977 120.704 113.964 254.904 113.964 254.904H76.3663C76.3663 249.939 83.7921 241.065 98.9238 240.917C98.0226 234.153 67.6647 112.127 67.6647 112.127Z"
                fill="white"
              />
              <path
                d="M19.4749 25.7559H7.71858C3.93061 25.7559 0.859863 28.8266 0.859863 32.6146V44.3709C0.859863 48.1589 3.93061 51.2296 7.71858 51.2296H19.4749C23.2629 51.2296 26.3337 48.1589 26.3337 44.3709V32.6146C26.3337 28.8266 23.2629 25.7559 19.4749 25.7559Z"
                fill="#59D090"
              />
              <path
                d="M26.3334 31.3795C29.4391 31.3795 31.9568 28.8618 31.9568 25.7561C31.9568 22.6505 29.4391 20.1328 26.3334 20.1328C23.2277 20.1328 20.7101 22.6505 20.7101 25.7561C20.7101 28.8618 23.2277 31.3795 26.3334 31.3795Z"
                fill="#5645BA"
              />
              <path
                d="M101.692 41.9277C100.424 44.7553 99.7759 47.8216 99.792 50.9204C99.8082 54.0192 100.488 57.0786 101.785 59.8928C103.083 62.707 104.968 65.2107 107.314 67.2354C109.66 69.2601 112.412 70.7588 115.386 71.6308"
                stroke="#9EF5EE"
                strokeWidth="5.14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M66.1554 86.5644C70.7628 86.566 75.2509 85.0999 78.9689 82.3788C82.6869 79.6577 85.4415 75.823 86.8332 71.4308C88.2249 67.0386 88.1814 62.3173 86.709 57.9515C85.2365 53.5858 82.4117 49.8025 78.6442 47.1504"
                stroke="#9EF5EE"
                strokeWidth="5.14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M116.189 82.4355C112.591 80.1742 108.408 79.0196 104.16 79.1148C99.9113 79.2101 95.7843 80.5511 92.2912 82.9714C88.7981 85.3917 86.0928 88.7846 84.5112 92.729C82.9296 96.6733 82.5413 100.995 83.3945 105.158"
                stroke="#9EF5EE"
                strokeWidth="5.14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.7764 83.2894L78.5668 81.092L75.8834 61.6973L87.093 63.8946L89.7764 83.2894Z"
                fill="#806FD5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.8306 81.2157C82.8306 79.5468 83.3255 77.9153 84.2527 76.5276C85.1799 75.1399 86.4978 74.0584 88.0397 73.4197C89.5816 72.781 91.2783 72.6139 92.9152 72.9395C94.5521 73.2651 96.0557 74.0688 97.2358 75.2489C98.4159 76.429 99.2196 77.9326 99.5452 79.5695C99.8708 81.2064 99.7037 82.903 99.065 84.445C98.4263 85.9869 97.3447 87.3048 95.9571 88.232C94.5694 89.1592 92.9379 89.6541 91.2689 89.6541C89.0323 89.6497 86.8886 88.7592 85.307 87.1776C83.7255 85.5961 82.835 83.4524 82.8306 81.2157Z"
                fill="#FEC246"
              />
              <path
                d="M98.7484 48.6211C104.149 53.5829 107.187 62.1731 108.773 71.236"
                stroke="white"
                strokeWidth="16.23"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-700">Features</h2>
            <div className="mt-4 flex items-start justify-start gap-8">
              <DashboardCard
                title={"Career"}
                description={
                  "All your courses in one single place, when you can keep tracking of most important ones!"
                }
                link={"/dashboard/career"}
              />
              <DashboardCard
                title={"Jobs"}
                description={
                  "All your courses in one single place, when you can keep tracking of most important ones!"
                }
                link={"/dashboard/jobs"}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
