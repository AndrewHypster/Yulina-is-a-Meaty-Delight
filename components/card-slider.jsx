import Image from "next/image";

export default function CardSlider({ img, kind, name, cost }) {
  return (
    <div className="w-64 mx-auto mb-[12px] border border-my-black hover:shadow-[12px_12px_#413636]">
      <Image src={img} alt="" className="w-64" width="256" height="256" />
      <div className="mt-[-30px] mx-5 text-center select-none">
        <p className="text-my-gray font-medium text-2xl font-marck-script">
          {kind}
        </p>
        <h3 className="text-my-black font-ubuntu font-bold text-2xl text-left">
          {name}
        </h3>
        <div className="mt-1 mb-7 flex justify-between">
          <p className="text-my-black text-2xl font-pt-sans-narrow">
            {cost}грн/кг
          </p>
          <a href={"/shop/" + name}>
            <button className="w-28 h-9 border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu text-xl font-medium text-my-green hover:text-dark-red">
              Купити
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
