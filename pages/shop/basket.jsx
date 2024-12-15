import Footer from "@/components/footer";
import Header from "@/components/header";
import MyHead from "@/components/myHead";
import SignIn from "@/components/sign/in";
import { setModal } from "@/redux_toolkit/features/modal-window/modalSlice";
import { deleteFromBasket } from "@/redux_toolkit/features/user/userSlice";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Basket() {
  const dispatch = useDispatch();
  const [user, userId, basket] = useSelector((store) => [
    store.user,
    store.user.id,
    store.user.basket,
  ]);
  // Ціна всіх вибраних товарів
  const [selectCost, setSelectCost] = useState(0);

  // Вибрати товар
  const [isSelect, setSelect] = useState([]);
  useEffect(() => {
    console.log(isSelect);
    const inp = document.querySelector("#select-all");
    if (isSelect.length == basket.length) inp.checked = true;
    else inp.checked = false;

    setSelectCost(() => {
      let cost = 0;
      isSelect.forEach(
        (id) => (cost += (basket[id].cost * basket[id].weight) / 100)
      );
      return cost;
    });
  }, [isSelect]);

  // Ціна всіх продуктів
  const totalCost = basket?.reduce(
    (sum, item) => sum + (item?.cost * item?.weight) / 100,
    0
  );

  useEffect(() => {
    userId ?? (document.querySelector("#sign-in").style.display = "flex");
  }, [userId]);

  const deleteItem = (item) => {
    axios
      .post(
        "/api/users?work=delete-basket",
        {
          userId: userId,
          _id: item._id,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
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
        document.body.style = "overflow: hidden";
        dispatch(
          setModal({
            type: "Error",
            text: `Error ${error.response.status}: ${error.response.data.message}`,
          })
        );
      });
  };

  const sendToGmail = () => {
    const text = `
      Нове замовлення на ${selectCost} грн!
      ${isSelect.map(
        (selectId, i) => `
      ------- ${i + 1} -------
      Тип: ${basket[selectId].kind}
      Назва: ${basket[selectId].name}
      Ціна: ₴${(
        (basket[selectId].cost * basket[selectId].weight) /
        100
      ).toFixed(2)}
      Кількість: ${basket[selectId].weight}г
      `
      )}\nКонтакти
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
  };

  return (
    <>
      <MyHead title="Магазин" />
      <Header />
      {userId ? (
        <section className="py-6 bg-[#F1F3F4]">
          <style jsx>{`
            .custom-checkbox {
              display: inline-flex;
              align-items: center;
              gap: 4px;
              cursor: pointer;
            }

            /* Приховуємо стандартний чекбокс */
            .custom-checkbox input[type="checkbox"] {
              display: none;
            }

            /* Кастомний вигляд чекбокса */
            .custom-checkbox span {
              width: 14px;
              height: 14px;
              border: 2px solid #413636;
              border-radius: 100vw;
              position: relative;
              transition: background-color 0.3s, border-color 0.3s;
            }

            /* Додаємо галочку при виборі */
            .custom-checkbox input[type="checkbox"]:checked + span {
              background-color: #228b22;
              border-color: #228b22;
            }

            .custom-checkbox input[type="checkbox"]:checked + span::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-10%, -80%) rotate(45deg);
              width: 8px;
              height: 16px;
              border: solid #fff;
              border-width: 0 3px 3px 0;
            }
          `}</style>

          <div className="w-fit mx-auto flex gap-6">
            <main className="grid gap-6 px-3 max-w-xl w-screen">
              <h2 className="py-4 px-8 bg-my-white font-ubuntu font-bold text-4xl">
                Кошик ласощів ({basket.length})
              </h2>
              <nav className="h-fit pt-4 pb-6 px-6 bg-my-white font-ubuntu grid gap-1">
                <h2 className="font-bold text-4xl">
                  Всього{" "}
                  <span className="text-3xl text-dark-red">
                    {totalCost} грн
                  </span>
                </h2>
                <small className="font-bold text-sm text-my-gray">
                  Вибрано{" "}
                  <span className="text-dark-red">{selectCost} грн</span>
                </small>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id="select-all"
                    onChange={(e) => {
                      setSelect(
                        e.target.checked ? [...Array(basket.length).keys()] : []
                      );
                    }}
                  />
                  <span></span>
                  Вибрати всьо
                </label>
                <button
                  className="w-32 h-8 mt-2 block border border-my-green hover:border-dark-red rounded-full shadow-[2px_4px_my-green] hover:shadow-dark-red font-ubuntu font-medium text-my-green hover:text-dark-red"
                  onClick={() => {
                    isSelect.length > 0
                      ? sendToGmail()
                      : dispatch(
                          setModal({
                            type: "Warning",
                            text: `Виберіть хоч один товар`,
                          })
                        );
                  }}
                >
                  Замовити ({isSelect.length})
                </button>
              </nav>
              <ul className="grid gap-6 px-6 py-4 bg-my-white">
                {basket.length ? (
                  basket.map((item, key) => (
                    <li key={key}>
                      <div className="flex gap-4 relative">
                        <Image
                          src="/imgs/tovar/0.png"
                          height="108"
                          width="108"
                        />

                        <div>
                          <h3 className="font-ubuntu font-bold text-base uppercase">
                            {item.name}
                          </h3>
                          <p className="font-marck-script text-my-gray">
                            {item.kind}
                          </p>
                          <p className="font-pt-sans-narrow text-xl">
                            {(item.cost * item.weight) / 100}грн ({item.weight}
                            г)
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <label className="custom-checkbox">
                          {isSelect.some((e) => e == key) ? (
                            <input
                              type="checkbox"
                              onChange={() => {
                                setSelect(isSelect.filter((e) => e != key));
                              }}
                              checked
                            />
                          ) : (
                            <input
                              type="checkbox"
                              onChange={() => setSelect([...isSelect, key])}
                            />
                          )}
                          <span></span>
                          Обрати
                        </label>

                        <button
                          className="flex gap-1"
                          onClick={() => deleteItem(item)}
                        >
                          <Image
                            src="/icons/delete.svg"
                            height="18"
                            width="18"
                          />
                          Видалити
                        </button>
                      </div>

                      <div className="h-[1px] bg-[#DEDBDB]"></div>
                    </li>
                  ))
                ) : (
                  <p className="mx-8 text-lg">
                    Кошик покищо порожній 😢
                    <br />
                    Але можете його поповнити ласощами 😋
                  </p>
                )}
              </ul>
            </main>
          </div>
        </section>
      ) : (
        <></>
      )}
      <SignIn />
      <Footer />
    </>
  );
}
