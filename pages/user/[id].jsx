import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function User() {
  const user = useSelector((state) => state.user);
  console.log("КОРИСТУВАЧ", user.id ?? false);

  return (
    <>
      <MyHead title="Кабінет" />
      <Header />
      <section>
        {/* Ш А П К А */}
        <div className="h-52 3sm:h-56 lg:h-[270px] flex gap-[420px] items-center bg-bodily justify-center relative gap-7 z-10">
          <h1
            className="hidden md:block text-bodily text-7xl ml:text-8xl font-extrabold tracking-widest"
            style={{ WebkitTextStroke: "3px #654321" }}
          >
            {user.id ? "Мій" : "А ти"}
          </h1>
          {/* Центральні фото */}
          <div className="h-[270px] w-[335px] 3sm:w-[392px] absolute top-1 lg:top-0 right-1/2 translate-x-1/2 grid justify-items-center">
            <div className="absolute mx-auto top-0 gap-3 4sm:gap-8 3sm:gap-11 lg:gap-[61px] flex">
              <Image
                src="/icons/crow.svg"
                width="90"
                height="90"
                alt="crow"
                className="mt-10 4sm:mt-14 rotate-[-47deg]"
              />
              <Image
                src="/icons/crow.svg"
                width="90"
                height="90"
                alt="crow"
                className="h-fit"
              />
              <Image
                src="/icons/crow.svg"
                width="90"
                height="90"
                alt="crow"
                className="mt-10 4sm:mt-14 rotate-[47deg]"
              />
            </div>
            <Image
              src="/imgs/user.png"
              width="370"
              height="370"
              alt="user"
              className="w-56 3sm:w-64 lg:w-[370px] mt-20 3sm:mt-14 lg:mt-0 mx-auto rounded-full self-end translate-y-[calc(50%-100px)]"
            />
          </div>
          <h1
            className="hidden md:block text-bodily text-7xl ml:text-8xl font-extrabold tracking-widest"
            style={{ WebkitTextStroke: "3px #654321" }}
          >
            {user.id ? "Дім" : "Хто?"}
          </h1>
          <Image
            src="/icons/meatL.svg"
            width="120"
            height="120"
            alt="crow"
            className="w-24 lg:w-[120px] hidden ml:block absolute top-0 left-[17px]"
          />
          <Image
            src="/icons/meatR.svg"
            width="120"
            height="120"
            alt="crow"
            className="w-24 lg:w-[120px] hidden ml:block absolute top-0 right-[17px]"
          />
        </div>
        <div className="flex ml:grid pt-20 lg:pt-0 flex-col-reverse grid-cols-2 ml:gap-64 lg:gap-[370px] bg-dark-brown relative">
          {/* І С Т О Р І Я   З А М О В Л Е Н Ь */}
          <div className="ml:w-fit mx-auto ml:mx-0 p-8 pt-12 3sm:p-12 xl0:p-16 pb-10 justify-self-end">
            <h2 className="3xl:w-[435px] text-center font-ubuntu mb-11 text-4xl ml:text-4xl 3xl:text-5xl text-bodily font-bold">
              Замовлення
            </h2>
            <ul className="grid gap-3.5 text-bodily">
              {user.orders?.map((order) => {
                <li className="max-w-md">
                  <div className="flex justify-between gap-8">
                    <div className="">
                      <h3 className="h-fit font-marck-script text-2xl xl:text-3xl xl1:text-4xl">
                        Міні сосиски
                      </h3>
                      <h4 className="font-ubuntu text-xs xl:text-sm xl1:text-base uppercase leading-3 font-extralight">
                        Гарячі яловичі палички
                      </h4>
                    </div>
                    <div className="content-end">
                      <small className="h-fit mb-1.5 text-xs xl:text-[80%] text-right block">
                        12.08.2024
                      </small>
                      <div className="flex gap-4 items-baseline">
                        <p className="font-ubuntu text-xs xl:text-base uppercase leading-3 font-extralight">
                          ₴1200
                        </p>
                        <p className="font-ubuntu text-xs xl:text-base uppercase leading-3 font-extralight">
                          12кг
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
                </li>;
              })}
            </ul>

            <div className="grid">
              <Image
                src="/icons/chicken-leg.svg"
                width="169"
                height="169"
                className="mt-10 w-28 mx-auto ml:absolute bottom-10 xl1:w-[169px] translate-x-[-45px]"
              />
            </div>
          </div>
          {/* С Е Р Е Д И Н А */}
          <div
            className="w-64 hidden ml:block lg:w-[370px] h-full p-4 absolute left-1/2 translate-x-[-50%] bg-bodily"
            style={{ backgroundImage: "url('/icons/circle.svg')" }}
          />
          {/* І Н Ф О Р М А Ц І Я */}
          <div className="ml:w-fit mx-auto ml:mx-0 p-8 pt-12 3sm:p-12 xl0:p-16 pb-10">
            <h2 className="3xl:w-[435px] text-center font-ubuntu mb-11 text-5xl ml:text-4xl 3xl:text-5xl text-bodily font-bold">
              Інформація
            </h2>
            <ul className="grid gap-3.5 text-bodily">
              <li>
                <div className="3sm:flex ml:block xl0:flex justify-between gap-8 flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-3xl ml:text-2xl xl1:text-3xl 3xl:text-4xl">
                    Ім&apos;я
                  </h3>
                  <p>
                    {user.name} {user.lastName}
                  </p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="3sm:flex ml:block xl0:flex justify-between gap-8 flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-3xl ml:text-2xl xl1:text-3xl 3xl:text-4xl">
                    День народження
                  </h3>
                  <p>{user.birthday}</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="3sm:flex ml:block xl0:flex ml:block xl0:flex justify-between gap-8 flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-3xl ml:text-2xl xl1:text-3xl 3xl:text-4xl">
                    Телефон
                  </h3>
                  <p>{user.contacts?.phone || ""}</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="3sm:flex ml:block xl0:flex justify-between gap-8 flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-3xl ml:text-2xl xl1:text-3xl 3xl:text-4xl">
                    Телеграм
                  </h3>
                  <p>{user.contacts?.telegram || ""}</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="3sm:flex ml:block xl0:flex justify-between gap-8 flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-3xl ml:text-2xl xl1:text-3xl 3xl:text-4xl">
                    Пошта
                  </h3>
                  <p>{user.contacts?.malto || ""}</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
            </ul>
            <div className="grid">
              <Image
                src="/icons/chicken-leg.svg"
                width="169"
                height="169"
                className="mt-10 w-28 xl1:w-[169px] translate-x-[45px] -scale-x-100 justify-self-center ml:justify-self-end"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
