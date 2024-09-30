"use client";
import Head from "next/head";

export default function MyHead({ title }) {
  const path = localStorage.getItem("pathPhoto");
  return (
    <Head>
      <link rel="icon" href={path + "logo.svg"} />
      <title>{title}</title>
    </Head>
  );
}
