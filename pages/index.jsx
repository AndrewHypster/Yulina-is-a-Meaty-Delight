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
      <main className="py-20 xl:p-20 bg-bodily justify-center flex"> {/* 1400px */}
        <div className="w-[680px] xl:w-auto 2xl:w-[700px] mx-auto xl:mx-0 text-dark-brown tracking-[-0.02em]">
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
          className="h-[19.8vw] hidden 2xl:h-[22vw] 2xl:max-h-[20rem] xl:block"
          width="607"
          height="320"
        />
      </main>

      {/* Т Р Е Н Д И */}
      <section className="px-20">
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
        <Link href="/shop" className="w-fit mx-auto my-6 block">
          <button className="w-80 h-20 hover:bg-my-black border-[7px] rounded-full border-my-black font-ubuntu font-bold text-3xl text-my-black hover:text-my-white tracking-[0.07em]">
            Поласувати
          </button>
        </Link>
      </section>

      {/* В И К О Р И С Т А Н Н Я */}
      <section>
        <HowToUse
          title="Подорожі та походи"
          text="Сушене м'ясо є ідеальною їжею для подорожей, походів та кемпінгу. Воно легке, не потребує охолодження і забезпечує високий рівень білка та енергії, необхідні під час активного відпочинку"
          bg='imgs/use-1.png'
        />
      </section>
    </>
  );
}

function HowToUse({ title, text, bg, img }) {
  return (
    <div className="relative">
      <div style={{background: `url(${bg})`}} className='h-96 !bg-center !bg-cover'>
        <h3>{title}</h3>
        <p>{text}</p>
        {img ? <Image src={img} /> : <></>}
      </div>
      <div className="h-96 w-full top-0 absolute bg-gradient-to-r from-[#00000080] from-36% [#77777700]" />
    </div>
  );
}
