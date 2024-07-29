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
import { useState } from "react";

import axios from 'axios';

export default function Tovar() {
  const router = useRouter();
  const { id } = router.query;
  const hasTovar = shop.all.some((tovar) => tovar.id === +id);

  const [weight, setWeight] = useState({ count: 100, type: 1 });
  const [user, setUser] = useState({ name: null, contact: null });

  const sendTgBot = () => {
    const text = `
    Нове замовлення!
    \n
    Тип: ${shop.all[id].kind}
    Назва: ${shop.all[id].name}
    Ціна: ₴${(+shop.all[id].cost * (weight.count / 1000) * weight.type).toFixed(2)}
    Кількість: ${weight.count} ${weight.type === 1? 'гр':'кг'}
    \n
    Контакти
    Ім'я: ${user.name}
    тел: ${user.contact}
    `

    axios.post('/api/tg-bot', { text: text })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }

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
            <form className="w-[32rem] self-center">
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
                        #ed8a19 ${88}%,
                        #f7e8c2 0%
                      );
                      -webkit-background-clip: text;
                      color: transparent;
                    }
                  `}</style>
                </div>
                <p className="font-light text-lg font-ubuntu text-my-black self-center">
                  {234} відгуки
                </p>
              </div>
              <b className="font-inter text-lg font-medium text-my-black tracking-wider">
                Густий і жувальний з часниково-імбирною сумішшю та пуншем із
                кунжутним соєвим соусом.
              </b>
              <span name='cost' className="block font-ubuntu font-medium text-my-black text-3xl">
                ₴{(+shop.all[id].cost * (weight.count / 1000) * weight.type).toFixed(2)}
              </span>
              <b className="block my-6 font-roboto-condensed tracking-wider text-my-black text-xl">
                ВКАЖІТЬ РОЗМІР
              </b>
              <div className="flex w-fit p-2 rounded-full border-4 border-my-black items-center flex-wrap">
                <input
                  type="number"
                  name="count"
                  placeholder="100"
                  className="max-w-44 focus-visible:outline-0 text-center text-my-black font-inter tracking-tight text-3xl"
                  onChange={({ target }) =>
                    setWeight({
                      count: target.value ? target.value : 100,
                      type: weight.type,
                    })
                  }
                />
                <hr className="rotate-90 w-7 mx-[-10px] border-my-black border-[1px] rounded-full" />
                <select
                  name="weight"
                  className="font-inter text-xl font-light"
                  onChange={({ target }) =>
                    setWeight({
                      count: weight.count,
                      type: target.value === "гр" ? 1 : 1000,
                    })
                  }
                >
                  <option value="гр">ГР</option>
                  <option value="кг">КГ</option>
                </select>
              </div>
              <input id="userName" type="text" placeholder="Ім'я" onChange={({target}) => setUser({name: target.value, contact: user.contact})} />
              <input id="userCont" type="text" placeholder="Контакти" onChange={({target}) => setUser({name: user.name, contact: target.value})} />

              <button type="button" className="w-[25rem] h-16 mt-8 bg-my-green rounded-full text-my-white font-inter font-extrabold text-2xl tracking-[0.12em]" onClick={sendTgBot}>
                КУПИТИ
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
}
