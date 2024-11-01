import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Banner() {
  const path = useSelector((state) => state.path.photo);
  return (
    <aside className="h-[160px] bg-gradient-to-r from-dark-red to-[#A53C3C] items-center flex">
      <div className="w-fit mx-auto text-my-white items-center flex">
        <Image
          src={path + "icons/green-fire.svg"}
          alt="green-fire"
          className="hidden sm:block h-[130px]"
          width="130"
          height="130"
        />
        <div className="h-[150px] grid-cols-[1fr 292px] content-evenly grid">
          <h2 className="font-inter text-4xl 3sm:text-5xl col-span-2 flex-wrap justify-center flex">
            <span className="font-semibold">Знижка 20%</span> до кінця місяця!
          </h2>
          <p className="text-xl italic hidden ml:block">
            Спробуйте найсмачніше сушене м&apos;ясо від Юлі
          </p>
          <Link
            href="/shop"
            className="mx-auto col-span-2 ml:col-span-1 gap-2 ml:gap-0"
          >
            <button className="h-11 w-[205px] rounded-full border-my-white border-4 hover:text-dark-red hover:bg-my-white bg-light-brown text-2xl font-bold">
              Купити зараз
            </button>
          </Link>
        </div>
        <Image
          src={path + "icons/green-fire.svg"}
          alt="green-fire"
          className="hidden sm:block h-[130px]"
          width="130"
          height="130"
        />
      </div>
    </aside>
  );
}
