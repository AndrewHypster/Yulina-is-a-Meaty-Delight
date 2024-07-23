import Head from "next/head";

export default function MyHead({ title }) {
  return (
    <Head>
      <link rel="icon" href="logo.svg" />
      <title>{title}</title>
    </Head>
  );
}
