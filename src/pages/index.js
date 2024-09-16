import Head from "next/head";
import Image from "next/image";
import HomeInner from "@/components/HomeInner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <HomeInner />
      </div>
    </>
  );
}



{/* <Image
className={styles.logo}
src="https://nextjs.org/icons/next.svg"
alt="Next.js logo"
width={180}
height={38}
priority
/> */}

// /* <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>