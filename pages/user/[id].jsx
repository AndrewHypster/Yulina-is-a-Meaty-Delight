import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import Image from "next/image";
import { useRouter } from "next/router";

export default function User({ path = "", title }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <MyHead title="Кабінет" path="../../" />
      <Header path="../../" />
      <section>
        {/* Ш А П К А */}
        <div className="h-[270px] flex gap-[420px] items-center bg-bodily justify-center relative gap-7 z-10">
          <h1 className="text-dark-brown text-8xl font-extrabold">Андрій</h1>
          {/* Центральні фото */}
          <div className="h-[270px] w-[392px] absolute right-1/2 translate-x-1/2 grid">
            <div className="absolute mx-auto top-0 gap-[61px] flex">
              <Image
                src="/icons/crow.svg"
                width="90"
                height="90"
                alt="crow"
                className="mt-14 rotate-[-47deg]"
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
                className="mt-14 rotate-[47deg]"
              />
            </div>
            <Image
              src="/imgs/user.png"
              width="370"
              height="370"
              alt="user"
              className="mx-auto rounded-full self-end translate-y-[calc(50%-100px)]"
            />
          </div>
          <h1 className="text-dark-brown text-8xl font-extrabold">Хіпстер</h1>
          <Image
            src="/icons/meatL.svg"
            width="120"
            height="120"
            alt="crow"
            className="absolute top-0 left-[17px]"
          />
          <Image
            src="/icons/meatR.svg"
            width="120"
            height="120"
            alt="crow"
            className="absolute top-0 right-[17px]"
          />
        </div>
        <div className="grid grid-cols-2 justify-center gap-[370px] bg-dark-brown relative">
          {/* І С Т О Р І Я   З А М О В Л Е Н Ь */}
          <div className="w-fit p-16 pb-10 justify-self-end">
            <h2 className="font-ubuntu mb-11 text-5xl text-bodily font-bold">
              Історія замовлень
            </h2>
            <ul className="grid gap-3.5 text-bodily">
              <li className="max-w-md">
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-marck-script text-4xl">
                    Міні сосиски
                  </h3>
                  <small className="h-fit">12.08.2024</small>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-ubuntu text-base uppercase leading-3 font-extralight">
                    Гарячі яловичі палички
                  </h4>
                  <div className="flex gap-4 items-baseline">
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      ₴1200
                    </p>
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      12кг
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li className="max-w-md">
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-marck-script text-4xl">
                    Міні сосиски
                  </h3>
                  <small className="h-fit">12.08.2024</small>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-ubuntu text-base uppercase leading-3 font-extralight">
                    Гарячі яловичі палички
                  </h4>
                  <div className="flex gap-4 items-baseline">
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      ₴1200
                    </p>
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      12кг
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li className="max-w-md">
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-marck-script text-4xl">
                    Міні сосиски
                  </h3>
                  <small className="h-fit">12.08.2024</small>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-ubuntu text-base uppercase leading-3 font-extralight">
                    Гарячі яловичі палички
                  </h4>
                  <div className="flex gap-4 items-baseline">
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      ₴1200
                    </p>
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      12кг
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li className="max-w-md">
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-marck-script text-4xl">
                    Міні сосиски
                  </h3>
                  <small className="h-fit">12.08.2024</small>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-ubuntu text-base uppercase leading-3 font-extralight">
                    Гарячі яловичі палички
                  </h4>
                  <div className="flex gap-4 items-baseline">
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      ₴1200
                    </p>
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      12кг
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li className="max-w-md">
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-marck-script text-4xl">
                    Міні сосиски
                  </h3>
                  <small className="h-fit">12.08.2024</small>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-ubuntu text-base uppercase leading-3 font-extralight">
                    Гарячі яловичі палички
                  </h4>
                  <div className="flex gap-4 items-baseline">
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      ₴1200
                    </p>
                    <p className="font-ubuntu text-base uppercase leading-3 font-extralight">
                      12кг
                    </p>
                  </div>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
            </ul>
            <Image
              src="/icons/chicken-leg.svg"
              width="169"
              height="169"
              className="mt-10 translate-x-[-45px]"
            />
          </div>
          {/* С Е Р Е Д И Н А */}
          <div
            className="w-[370px] h-full p-4 absolute left-1/2 translate-x-[-50%] bg-bodily"
            style={{ backgroundImage: "url('/icons/circle.svg')" }}
          />
          {/* І Н Ф О Р М А Ц І Я */}
          <div className="w-fit p-16 pb-10 grid">
            <h2 className="w-[434px] text-center font-ubuntu mb-11 text-5xl text-bodily font-bold">
              Інформація
            </h2>
            <ul className="grid gap-3.5 text-bodily">
              <li>
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-4xl">Ім&apos;я</h3>
                  <p>Андрій Хіпстер</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-4xl">
                    День народження
                  </h3>
                  <p>2024.04.21</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-4xl">
                    Телефон
                  </h3>
                  <p>+380685325881</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-4xl">
                    Телеграм
                  </h3>
                  <p>https://t.me/Monoliz1503</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
              <li>
                <div className="flex justify-between flex-wrap items-baseline">
                  <h3 className="h-fit font-pt-sans-narrow text-4xl">Пошта</h3>
                  <p>andrii.hrechukh@gmail.com</p>
                </div>
                <div className="w-full mt-[7.5px] h-[1px] bg-bodily" />
              </li>
            </ul>
            <Image
              src="/icons/chicken-leg.svg"
              width="169"
              height="169"
              className="mt-10 translate-x-[45px] -scale-x-100 justify-self-end"
            />
          </div>
        </div>
      </section>
      <Footer path="../" />
    </>
  );
}
