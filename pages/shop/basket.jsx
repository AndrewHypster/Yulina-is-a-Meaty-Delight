import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import { setModal } from "@/redux_toolkit/features/modal-window/modalSlice";
import { deleteFromBasket } from "@/redux_toolkit/features/user/userSlice";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Basket() {
  const dispatch = useDispatch();
  const [userId, basket] = useSelector((store) => [
    store.user.id,
    store.user.basket,
  ]);

  const deleteItem = (item) => {
    axios
      .post(
        "/api/users?work=delete-basket",
        {
          userId: userId,
          productId: item._id,
        },
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

        dispatch(
          deleteFromBasket({
            basket: {
              _id: item._id,
            },
          })
        );
      })
      .catch((error) => {
        console.error("There was an error!", error);
        document.body.style = "overflow: hidden";
        console.log(error);

        dispatch(
          setModal({
            type: "Error",
            text: `Error ${error.response.status}: ${error.response.data.message}`,
          })
        );
      });
  };

  return (
    <>
      <MyHead title="Магазин" />
      <Header />
      <section className="p-6 bg-[#F1F3F4]">
        <div className="w-fit mx-auto flex gap-6">
          <main className="grid gap-6">
            <h2 className="py-4 px-8 bg-my-white font-ubuntu font-bold text-4xl">
              Кошик ласощів ({basket.length})
            </h2>
            <ul className="grid gap-6 py-6 bg-my-white">
              {basket.map((item, key) => (
                <li className="max-w-2xl w-screen" key={key}>
                  <div className="flex gap-4 relative">
                    <Image src="/imgs/tovar/0.png" height="108" width="108" />

                    <div>
                      <h3 className="font-ubuntu font-bold text-base uppercase">
                        {item.name}
                      </h3>
                      <p className="font-marck-script text-my-gray">
                        {item.kind}
                      </p>
                      <p className="font-pt-sans-narrow text-xl">
                        {(item.cost * item.weight) / 1000}грн ({item.weight}г)
                      </p>
                    </div>
                    <button
                      className="absolute right-4"
                      onClick={() => deleteItem(item)}
                    >
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
