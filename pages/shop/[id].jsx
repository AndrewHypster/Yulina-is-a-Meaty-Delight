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
                className='select-none'
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
            <div>
              <h2>{shop.all[id].kind}</h2>
              <h1>{shop.all[id].name}</h1>
            </div>
          </section>
        </>
      )}
    </>
  );
}
