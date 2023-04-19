import { useUser } from "@clerk/nextjs";
import DashboardLayout from "layout/DashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CareerPage from "sections/dashboardPage/Career";

export default function Index() {
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
        <CareerPage />
      </DashboardLayout>
    </>
  );
}
