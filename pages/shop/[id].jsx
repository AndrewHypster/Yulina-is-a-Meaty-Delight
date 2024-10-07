import Banner from "@/components/banner";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import Error from "next/error";
import LoadingPage from "../loading";
import Footer from "@/components/footer";
import Image from "next/image";

import { useRouter } from "next/router";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setModal } from "@/redux_toolkit/features/modal-window/modalSlice";

export default function Tovar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  const [weight, setWeight] = useState({ count: 100, type: 1 });
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 690) setSlides(3);
    if (window.innerWidth <= 332) setSlides(2);
  }, []);

  useEffect(() => {
    console.log(router.query.id);
    if (router.query.id)
      axios
        .post("/api/shop?work=get-product", { id: router.query.id })
        .then((resp) => {
          setProduct(resp.data);
          setLoading(false);
        })
        .catch((err) => console.log("Помилка", err));
  }, router.query.id);

  const sendTgBot = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      const text = `
      Нове замовлення!
      \n
      Тип: ${product.kind}
      Назва: ${product.name}
      Ціна: ₴${(+product.cost * (weight.count / 1000) * weight.type).toFixed(2)}
      Кількість: ${weight.count} ${weight.type === 1 ? "гр" : "кг"}
      \n
      Контакти
      Ім'я: ${user.name} ${user.lastName}
      тел: ${user.contacts.phone}
      `;

      axios
        .post(
          "/api/gmail-bot",
          { text: text },
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => {
          console.log("Респонс відповідь", response.data);
          dispatch(
            setModal({
              type: "Success",
              text: response.data.message,
            })
          );
        })
        .catch((error) => {
          console.error("There was an error!", error);
          document.body.style = "overflow: hidden";
          dispatch(
            setModal({
              type: "Error",
              text: `Error ${error.response.status}: ${error.response.data.message}`,
            })
          );
        });
    } else {
      dispatch(
        setModal({
          type: "Warning",
          text: "Увійдіть в свій кабінет!",
        })
      );
    }
  };

  if (loading) return <LoadingPage />;
  else
    return (
      <>
        {!product ? (
          <Error statusCode={404} />
        ) : (
          <>
            <MyHead title={product.name} />
            <Header />
            <Banner />
            <section className="pb-4 md:py-4 flex flex-col md:grid grid-cols-[50%,50%] gap-8 xl:gap-20 md:bg-gradient-to-r from-mustard to-50% from-50% my-white">
              <div className="w-full md:max-w-lg bg-mustard md:bg-transparent self-center justify-self-center">
                <Image
                  src={`/imgs/tovar/${0}.png`}
                  width="700"
                  height="700"
                  alt={product.name}
                  className="w-96 lg:w-full mx-auto"
                />
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={slides}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="3sm:w-96 lg:w-full select-none cursor-grab"
                >
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={`/imgs/tovar/${0}.png`}
                      width="700"
                      height="700"
                      alt={product.name}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <form className="max-w-lg mx-4 md:m-0 self-center">
                <h2 className="w-fit font-marck-script text-my-black text-4xl ml:text-5xl xl0:text-6xl font-normal">
                  {product.kind}
                </h2>
                <h1 className="w-fit font-ubuntu text-my-black text-4xl ml:text-5xl xl0:text-6xl font-bold uppercase">
                  {product.name}
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
                <b className="font-inter text-lg font-medium text-my-black tracking-wider block">
                  Густий і жувальний з часниково-імбирною сумішшю та пуншем із
                  кунжутним соєвим соусом.
                </b>
                <span
                  name="cost"
                  className="block font-ubuntu font-medium text-my-black text-3xl"
                >
                  ₴
                  {(product.cost * (weight.count / 1000) * weight.type).toFixed(
                    2
                  )}
                </span>
                <b className="block my-6 font-roboto-condensed tracking-wider text-my-black text-xl">
                  ВКАЖІТЬ РОЗМІР
                </b>
                <div className="flex w-fit p-2 rounded-full border-4 border-my-black items-center flex-wrap">
                  <input
                    type="number"
                    min="100"
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
                
                <button
                  type="button"
                  className="w-80 ml:w-96 h-16 mt-8 bg-my-green rounded-full text-my-white font-inter font-extrabold text-2xl tracking-[0.12em] block"
                  onClick={sendTgBot}
                >
                  КУПИТИ
                </button>
              </form>
            </section>

            {/* ------------------------------- *\
                В І Д Г У К И   К Л І Є Н Т І В
            \* -------------------------------- */}
            <section>
              <h2 className="bg-my-black py-6 2sm:py-8 text-center text-my-white text-2xl 3sm:text-3xl 2sm:text-4xl font-bold font-ubuntu tracking-wider">
                Відгуки наших клієнтів
              </h2>
              <div className="lg:max-w-6xl py-11 px-8 mx-auto grid lg:flex flex-wrap justify-between gap-y-14 lg:gap-y-16">
                {product.reviews.map((review, index) => (
                  <Feedback
                    key={index}
                    uName={review.userName}
                    date={review.date}
                    rating={review.rating}
                    text={review.comment}
                  />
                ))}
              </div>
            </section>
            <Footer />
          </>
        )}
      </>
    );
}

const Feedback = ({ uImg, uName, uLName, uOld, date, rating, text }) => {
  return (
    <div className="max-w-lg">
      <div className="flex items-center gap-5">
        {uImg ? (
          <img src={uImg} alt="фото користувача" />
        ) : (
          <h3 className="w-20 h-20 text-center content-center rounded-full bg-[#D9D9D9] font-semibold text-my-black text-2xl tracking-wider">
            {uName /*[0] + uLName[0]*/}
          </h3>
        )}
        <div>
          <div className="flex gap-2 items-baseline">
            <h3 className="font-ubuntu font-semibold text-my-black text-2xl">{
              `${uName}` /*${uLName[0]}*/
            }</h3>
            <p className="font-light font-ubuntu">{date}</p>
          </div>
          <div className="flex mt-[-12px] items-center gap-2">
            <h4 className="font-ubuntu text-my-black text-xl">{uOld}р</h4>
            <div className="user-stars">
              <style jsx>{`
                .user-stars::before {
                  content: "★★★★★";
                  font-size: 26px;
                  background: linear-gradient(
                    to right,
                    #ed8a19 ${(rating / 5) * 100}%,
                    #5c5c5c 0%
                  );
                  -webkit-background-clip: text;
                  color: transparent;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3.5 text-xl font-extralight font-ubuntu">{text}</p>
    </div>
  );
};
