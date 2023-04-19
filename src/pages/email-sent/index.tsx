import Head from "next/head";
import EmailSentPage from "sections/emailSentPage/EmailSentPage";

const index = () => {
  return (
    <>
      <Head>
        <title>Email Sent</title>
      </Head>
      <main>
        <EmailSentPage />
      </main>
    </>
  );
};

export default index;
