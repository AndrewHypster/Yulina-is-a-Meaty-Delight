import Head from "next/head";
import { useSelector } from "react-redux";

export default function MyHead({ title }) {
  const pathPhoto = useSelector((state) => state.path.photo);

  return (
    <Head>
      <link rel="icon" href={pathPhoto + "logo.svg"} />
      <title>{title}</title>
    </Head>
  );
}
