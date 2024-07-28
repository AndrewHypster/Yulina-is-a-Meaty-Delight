import Banner from "@/components/banner";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import Error from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import shop from "../../shop.json";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Tovar() {
  const router = useRouter();
  const { id } = router.query;
  const hasTovar = shop.all.some((tovar) => tovar.id === +id);

  return (
    <>
      {!hasTovar ? (
        <Error statusCode={404} />
      ) : (
        <>
          <MyHead path="../" title={shop.all[id].name} />
          <Header path="../" />
          <Banner path="../" />
          <section className="px-16 py-4 grid grid-cols-2 gap-20 bg-gradient-to-r from-mustard to-50% from-50% my-white">
            <div>
              <Image
                src={`/imgs/tovar/${id}.png`}
                width="700"
                height="700"
                alt={shop.all[id].name}
              />
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="select-none cursor-grab"
              >
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={`/imgs/tovar/${id}.png`}
                    width="700"
                    height="700"
                    alt={shop.all[id].name}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[28rem] self-center">
              <h2 className="font-marck-script text-my-black text-6xl font-normal">
                {shop.all[id].kind}
              </h2>
              <h1 className="font-ubuntu text-my-black text-6xl font-bold uppercase">
                {shop.all[id].name}
              </h1>
              <div className="w-fit grid grid-cols-2 gap-4 content-center">
                <div className="star-container">
                  <style jsx>{`
                    .star-container::before {
                      content: "★★★★★";
                      font-size: 40px;
                      background: linear-gradient(
                        to right,
                        #ED8A19 ${88}%,
                        #F7E8C2 0%
                      );
                      -webkit-background-clip: text;
                      color: transparent;
                    }
                  `}</style>
                </div>
                <p className="font-light text-lg font-ubuntu text-my-black">{234} відгуки</p>
              </div>
              <b className="font-inter text-lg font-medium text-my-black tracking-wider">Густий і жувальний з часниково-імбирною сумішшю та пуншем із кунжутним соєвим соусом.</b>
              <span className="block font-ubuntu font-medium text-my-black text-3xl">₴{+shop.all[id].cost * 1}</span>
              <b className="block my-6 font-roboto-condensed tracking-wider text-my-black text-xl">ВКАЖІТЬ РОЗМІР</b>
              <div className="flex w-fit p-2 rounded-full border-4 border-my-black items-center flex-wrap">
                <input type="number" value='100' className="max-w-44 focus-visible:outline-0 text-center text-my-black font-inter tracking-tight text-3xl" />
                <hr className="rotate-90 w-7 mx-[-10px] border-my-black border-[1px] rounded-full" />
                <select name="weight" className="font-inter text-xl font-light">
                  <option value="гр">ГР</option>
                  <option value="кг">КГ</option>
                </select>
              </div>
                <button className="w-[25rem] h-16 mt-8 bg-my-green rounded-full text-my-white font-inter font-extrabold text-2xl tracking-[0.12em]">КУПИТИ</button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
