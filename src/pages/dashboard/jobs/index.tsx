import { useUser } from '@clerk/nextjs';
import DashboardLayout from 'layout/DashboardLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/login');
    }
  }, [isLoaded, isSignedIn, router])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardLayout rightSidebar={<div>Right Side bar</div>}>
        <div className='text-justify'>
          <h2>Welcome to jobs</h2>
          <p>User: {user?.firstName}</p>
        </div>
      </DashboardLayout>
    </>
  )
}