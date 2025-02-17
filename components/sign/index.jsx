import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@/redux_toolkit/features/modal-window/modalSlice.tsx";
import { setUser } from "@/redux_toolkit/features/user/userSlice";

export default function Sign({ type }) {
  const isRegister = type == "register";
  const router = useRouter();
  const dispatch = useDispatch();
  const path = useSelector((state) => state.path.photo);

  const register = (btn) => {
    const [name, lastName, phone, pass, secPass] = btn.target.form;
    if (pass.value == secPass.value) {
      axios
        .post("/api/users?work=create", {
          name: name.value,
          lastName: lastName.value,
          password: pass.value,
          contacts: {
            phone: phone.value,
          },
        })
        .then((response) => {
          const { _id, name, lastName, contacts, basket } = response.data;
          dispatch(
            setUser({
              id: _id,
              name,
              lastName,
              contacts,
              basket,
            })
          );

          btn.target.form.offsetParent.style.display = "none";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const log = (btn) => {
    const [phone, password] = btn.target.form;
    if (phone.value && password.value) {
      axios
        .post("/api/users?work=authorise", {
          phone: phone.value,
          password: password.value,
        })
        .then((resp) => {
          const { _id, name, lastName, contacts, basket } = resp.data.userInfo;
          dispatch(
            setUser({
              id: _id,
              name,
              lastName,
              contacts,
              basket,
            })
          );
          router.push("/user/" + resp.data.userInfo._id);
          btn.target.form.offsetParent.style.display = "none";
        })
        .catch((err) => {
          dispatch(
            setModal({
              type: "Error",
              text: `Error ${err.response.status}: ${err.response.data.error}`,
            })
          );
        });
    } else {
      dispatch(
        setModal({
          type: "Error",
          text: `Error 400: Заповніть усі поля!`,
        })
      );
    }
  };

  return (
    <div
      id={type}
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-[#2b2a3096] flex-wrap content-center justify-center hidden target:flex"
    >
      <form className="3sm:w-96 w-auto px-7 py-12 pb-8 bg-dark-brown rounded-2xl relative">
        <p
          className="absolute top-4 right-6 text-my-white text-2xl cursor-pointer"
          onClick={(x) =>
            (x.target.offsetParent.offsetParent.style.display = "none")
          }
        >
          x
        </p>
        <Image
          className="mx-auto"
          src={`${path}icons/${type}.svg`}
          width="150"
          height="150"
        />
        <div className="w-56 4sm:w-72 3sm:w-auto mx-auto mt-2.5 mb-7 gap-0.5 grid">
          {isRegister ? (
            <div className="flex gap-2 3sm:gap-5">
              <Input label="Ім'я" name="name" width="150" />
              <Input label="Прізвище" name="lastname" width="150" />
            </div>
          ) : (
            <></>
          )}
          <Input label="Телефон" name="phone" />
          <Input label="Пароль" name="pass" />
          {isRegister ? <Input label="Пароль щераз" name="secpass" /> : <></>}
        </div>
        <a>
          <button
            type="button"
            onClick={(btn) => (isRegister ? register(btn) : log(btn))}
            className="mx-auto mb-8 py-1 px-3 rounded-lg border-2 border-bodily text-bodily hover:text-dark-brown hover:bg-bodily font-marck-script text-3xl tracking-wide block"
          >
            {isRegister ? "Зареєструватись" : "Увійти"}
          </button>
        </a>
        <div className="flex justify-between">
          {isRegister ? (
            <a
              onClick={(a) => {
                a.target.offsetParent.offsetParent.style.display = "none";
                a.target.parentElement.parentElement.parentElement.previousSibling.style.display =
                  "flex";
              }}
              className="mx-auto font-pt-sans-narrow tracking-wider text-my-white cursor-pointer"
            >
              Увійти
            </a>
          ) : (
            <a
              onClick={(a) => {
                a.target.offsetParent.offsetParent.style.display = "none";
                a.target.parentElement.parentElement.parentElement.nextSibling.style.display =
                  "flex";
              }}
              className="font-pt-sans-narrow tracking-wider text-my-white cursor-pointer"
            >
              Зареєструватись
            </a>
          )}
        </div>
      </form>
    </div>
  );
}

function Input({ label, name, width }) {
  return (
    <div className="grid font-pt-sans-narrow text-lg tracking-wider text-my-white">
      <label htmlFor={name}>{label}</label>
      <input
        className="px-2 py-0.5 rounded shadow-[inset_2px_3px_6px_#AC8930] target:border-none focus-visible:outline-none text-my-black"
        style={{ width: width + "px" }}
        type="text"
        name={name}
      />
    </div>
  );
}
