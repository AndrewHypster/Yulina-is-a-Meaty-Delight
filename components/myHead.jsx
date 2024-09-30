'use client'
import Head from "next/head";

export default function MyHead({ path='', title }) {
  return (
    <Head>
      <link rel="icon" href={path + "logo.svg"} />
      <title>{title}</title>
    </Head>
  );
}
