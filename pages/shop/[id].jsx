import Header from "@/components/header";
import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header path="../" />
      <div>{id}</div>
    </>
  );
}
