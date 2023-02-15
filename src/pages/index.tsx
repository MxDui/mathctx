import Head from "next/head";
import Image from "next/image";
import styles from "mathctx/styles/Home.module.css";
import { useDictionary } from "mathctx/lang/lang";
import Navbar from "mathctx/components/Navigation/Navbar";

export default function Home() {
  const d = useDictionary("es");

  return (
    <>
      <Head>
        <title>MathCTX</title>
        <meta name="description" content="MathCTX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="grid place-items-center h-screen">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">{d?.["page.home.title"]}</h1>
          <p className="text-xl">{d?.["page.home.description"]}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            {d?.["page.home.cta"]}
          </button>
        </div>
      </main>
    </>
  );
}
