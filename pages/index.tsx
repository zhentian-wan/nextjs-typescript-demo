import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

const useMarquee = () => {
  const DISPLAY_TEXT =
    "wow   such next.js   very react   much title   so marquee   ";

  const [text, setText] = useState(DISPLAY_TEXT);
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(DISPLAY_TEXT.substring(i) + DISPLAY_TEXT.substring(0, i));
      i = (i + 1) % DISPLAY_TEXT.length;
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return text;
};

const IndexPage: NextPage = () => {
  const text = useMarquee();

  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <div>
        <h1>Hello World</h1>
        <Link href="/about">About page</Link>
        <h2>{text}</h2>
      </div>
      <Head>
        <meta name="description" content="Nice page" />
      </Head>
    </>
  );
};

export default IndexPage;
