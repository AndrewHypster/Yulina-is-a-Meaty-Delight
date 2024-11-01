import { LoadingCards } from "@/components/card-product";

export default function TestPage() {
  return (
    <div className="flex">
      <LoadingCards many={4} />
    </div>
  );
}
