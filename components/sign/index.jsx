"use client";
import axios from "axios";
import Image from "next/image";
import ModalWindow from "@/components/modal-window";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Sign({ type }) {
  const isRegister = type == "register";
  const router = useRouter();
  const [modal, setModal] = useState({ type: null, text: null, scroll: 0 });
  const path = localStorage.getItem("pathPhoto");

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
          console.log(response.data);
          btn.target.form.offsetParent.style.display = "none";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const log = (btn) => {
    const [phone, password] = btn.target.form;
    console.log(phone.value, password.value);
    if (phone.value && password.value) {
      axios
        .post("/api/users?work=authorise", {
          phone: phone.value,
          password: password.value,
        })
        .then((resp) => {
          console.log(resp);
          localStorage.setItem("userID", resp.data.id);
          router.push("/user/" + resp.data.id);
          btn.target.form.offsetParent.style.display = "none";
        })
        .catch((err) => {
          setModal({
            type: "Error",
            text: `Error ${err.response.status}: ${err.response.data.error}`,
          });
        });
    } else {
      setModal({
        type: "Error",
        text: `Error 400: Заповніть усі поля!`,
      });
    }
  };

  return (
    <div
      id={type}
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-[#2b2a3096] flex-wrap content-center justify-center hidden target:flex"
    >
      <form className="w-96 px-7 py-12 pb-8 bg-dark-brown rounded-2xl relative">
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
        <div className="mt-2.5 mb-7 gap-0.5 grid">
          {isRegister ? (
            <div className="flex gap-5">
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
              className="mx-auto"
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
            >
              Зареєструватись
            </a>
          )}
        </div>
      </form>
      <ModalWindow type={modal.type} text={modal.text} />
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
