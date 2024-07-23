import Image from "next/image";

export default function Banner() {
  return (
    <aside className="h-[160px] bg-gradient-to-r from-dark-red to-[#A53C3C] items-center flex">
      <div className="w-fit mx-auto text-my-white items-center flex">
        <Image
          src="icons/green-fire.svg"
          alt="green-fire"
          className="h-[130px]"
          width="130"
          height="130"
        />
        <div className="h-[150px] grid-cols-[1fr 292px] content-evenly grid">
          <h2 className="font-inter text-5xl col-span-2">
            <span className="font-semibold">Знижка 20%</span> до кінця місяця!
          </h2>
          <p className="text-xl italic">
            Спробуйте найсмачніше сушене м&apos;ясо від Юлі
          </p>
          <button className="h-11 rounded-full border-my-white border-4 bg-light-brown text-2xl font-bold">
            Купити зараз
          </button>
        </div>
        <Image
          src="icons/green-fire.svg"
          alt="green-fire"
          className="h-[130px]"
          width="130"
          height="130"
        />
      </div>
    </aside>
  );
}
