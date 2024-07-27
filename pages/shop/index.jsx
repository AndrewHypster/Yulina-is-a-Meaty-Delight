import Banner from "@/components/banner";
import CardSlider from "@/components/card-slider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import SocialIcons from "@/components/social-icons";
import shop from "../../shop.json";

export default function Shop() {
  return (
    <>
      <MyHead title="Магазин" />
      <Header path="../" />
      <Banner />
      <div className="flex">
        <div className="w-36 justify-center place-items-center hidden md:grid">
          <div className="grid h-fit gap-10">
            <SocialIcons initsize="36" />
          </div>
        </div>
        <div className="flex flex-wrap w-fit mx-auto gap-10 py-10 justify-center md:justify-start">
          {shop.all.map((tovar) => (
            <CardSlider
              key={tovar.id}
              id={tovar.id}
              img={`/imgs/tovar/${tovar.id}.png`}
              kind={tovar.kind}
              name={tovar.name}
              cost={tovar.cost}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
