import Banner from "@/components/banner";
import { CardProduct } from "@/components/card-product";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import SocialIcons from "@/components/social-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [maxProducts, setMaxProducts] = useState(false);
  const [page, setPage] = useState(1);

  function getProducts() {
    axios
      .post("/api/shop?work=get-products", {
        page: page,
        limit: 4,
      })
      .then((resp) => {
        if (resp.data.products?.length == 0) setMaxProducts(true);
        else if (resp.data.products?.length < 4) {
          setMaxProducts(true);
          setProducts([...products, ...resp.data.products]);
        } else setProducts([...products, ...resp.data.products]);
      })
      .catch((err) => console.log("Помилка", err))
      .finally(() => setPage(page + 1));
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (!products[0]) return <LoadingPage />;
  else
    return (
      <>
        <MyHead title="Магазин" />
        <Header />
        <Banner />
        <div className="flex pr-36">
          <div className="w-36 justify-center place-items-center hidden md:grid">
            <div className="grid h-fit gap-10 grid-flow-row-dense">
              <SocialIcons initsize="36" styles="rotate-[270deg]" />
            </div>
          </div>
          <div className="flex flex-wrap w-fit mx-auto gap-10 py-10 justify-center md:justify-start">
            {products?.map((product, index) => (
              <CardProduct
                key={index}
                id={product._id}
                img={`/imgs/tovar/${0}.png`}
                kind={product.kind}
                name={product.name}
                cost={product.cost}
              />
            ))}
            <div className="w-full">
              {!maxProducts ? (
                <button
                  className="block h-12 mx-auto px-16 border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu text-2xl font-medium text-my-green hover:text-dark-red"
                  onClick={() => getProducts()}
                >
                  Показати ще
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
