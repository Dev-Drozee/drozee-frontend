import { useAuth } from "@clerk/nextjs";
import Head from "next/head";
import { useRouter } from "next/router";

import SignUpPage from "sections/signupPage/SignUpPage";

export default function Index() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    router.replace("/dashboard");
  }

  return (
    <>
      <Head>
        <title>Welcome to Drozee!</title>
      </Head>
      <main>
        <SignUpPage />
      </main>
    </>
  );
}
