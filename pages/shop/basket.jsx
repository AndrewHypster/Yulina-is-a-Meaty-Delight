import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import Image from "next/image";

export default function Basket() {
  return (
    <>
      <MyHead title="Магазин" />
      <Header />
      <section className="p-6 bg-[#F1F3F4]">
        <div className="w-fit mx-auto flex gap-6">
          <main className="grid gap-6">
            <h2 className="py-4 px-8 bg-my-white font-ubuntu font-bold text-4xl">
              Кошик ласощів (20)
            </h2>
            <ul className="grid gap-6 py-6 bg-my-white">
              {new Array(5).fill(0).map(() => (
                <li className="max-w-2xl w-screen">
                  <div className="flex gap-4 relative">
                    <Image src="/imgs/tovar/0.png" height="108" width="108" />

                    <div>
                      <h3 className="font-ubuntu font-bold text-base uppercase">
                        Гарячі яловичі палички
                      </h3>
                      <p className="font-marck-script text-my-gray">
                        Міні сосиски
                      </p>
                      <p className="font-pt-sans-narrow text-xl">
                        688грн (2кг)
                      </p>
                    </div>
                    <button className="absolute right-4">
                      <Image src="/icons/delete.svg" height="18" width="18" />
                    </button>
                  </div>
                  <div className="h-[1px] bg-[#DEDBDB]"></div>
                </li>
              ))}
            </ul>
          </main>
          <nav className="h-fit pt-4 pb-6 px-6 bg-my-white font-ubuntu">
            <h2 className="font-bold text-4xl">
              Всього <span className="text-3xl text-dark-red">15 000 грн</span>
            </h2>
            <small className="font-bold text-sm text-my-gray">
              Вибрано <span className="text-dark-red">688 грн</span>
            </small>
            <button className="w-32 h-8 mt-2 block border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu font-medium text-my-green hover:text-dark-red">
              Замовити (1)
            </button>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}
