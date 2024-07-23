import Banner from "@/components/banner";
import CardSlider from "@/components/card-slider";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
// Next
import Image from "next/image";
import Link from "next/link";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <>
      <MyHead title="Головна" />
      <Header />
      <Banner />
      <main className="p-20 bg-bodily h-[480px] justify-between flex">
        <div className="text-dark-brown tracking-[-0.02em]">
          <h1 className="text-6xl font-ubuntu font-medium">
            Сушене м&apos;ясо від Юлі!
          </h1>
          <p className="mt-3.5 mb-12 font-inter font-normal text-2xl">
            &nbsp;Насолоджуйтесь автентичними смаками з нашого широкого
            асортименту сушеного м&apos;яса. Зараз знижка 20% на всі продукти!
            Замовляйте зараз і відкрийте для себе справжню м&apos;ясну насолоду.
          </p>
          <Link href="/shop">
            <button className="bg-my-green w-72 h-16 rounded-full text-my-white font-ubuntu font-bold text-3xl tracking-[0.07em]">
              Замовити
            </button>
          </Link>
        </div>
        <Image
          src="/imgs/main.png"
          alt=""
          className="h-80"
          width="607"
          height="320"
        />
      </main>

      {/* Т Р Е Н Д И */}
      <section className="mb-80 px-20">
        <div className="flex mt-16">
          <Image
            src="icons/black-fire.svg"
            alt="#fire"
            className="h-24 mt-[-25px]"
            width="80"
            height="80"
          />
          <div className="ml-3.5">
            <h2 className="font-ubuntu font-medium text-7xl text-my-black tracking-[-0.02em]">
              Зараз в тренді
            </h2>
            <p className="font-ubuntu font-medium text-lg text-my-black tracking-[0.08em]">
              Що подобається людям?
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
        >
          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardSlider
              img="/imgs/tovar.png"
              kind="Міні сосиски"
              name="ГАРЯЧІ ЯЛОВИЧІ ПАЛИЧКИ"
              cost="280"
            />
          </SwiperSlide>
        </Swiper>
        <button>Поласувати Нове</button>
      </section>
    </>
  );
}
