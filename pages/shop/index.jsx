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
      <div className="flex">
        <div className="w-36 ml-4 mt-[calc(100vh-60vh)] h-fit gap-6 grid">
          <SocialIcons initsize='36' />
        </div>
        <div className="flex flex-wrap gap-1 p-10 pl-0 cont-left">
          {shop.all.map((tovar) => (
            <CardSlider
              key={topId}
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
