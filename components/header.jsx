import Image from "next/image";
import Link from "next/link";
import SignIn from "@/components/sign/in";
import SocialIcons from "./social-icons";
import Register from "./sign/register";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "@/redux_toolkit/features/path/pathSlice";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathPhoto = useSelector((state) => state.path.photo);

  useEffect(() => {
    const updatePath = () => {
      const newPath =
      router.asPath === "/"
          ? ""
          : "../".repeat(router.asPath.split("/").length - 1);
      dispatch(setPath(newPath));
    };
    updatePath();
  }, []);

  const autorise = () => {
    const userID = localStorage.getItem("userID");

    if (userID) {
      router.push(`/user/${userID}`);
    } else {
      document.querySelector("#sign-in").style.display = "flex";
    }
  };

  return (
    <>
      <header
        id="header"
        className="px-10 2sm:px-20 justify-between items-center flex text-dark-red"
      >
        <div className="flex items-center">
          <Link href="/" className="no-filter">
            <Image
              src={pathPhoto + "logo.svg"}
              alt="logo"
              className="h-16 mr-9 lg:mr-32"
              width="64"
              height="64"
            />
          </Link>
          <nav className="h-fit font-long-cang text-2xl gap-x-3 hidden ml:flex">
            <Link href="/">Головна</Link>|<Link href="/shop">Продукція</Link>|
            <Link href="">Смаки</Link>|<Link href="">Про нас</Link>|
            <Link href="">Блог</Link>|<Link href="">Контакти</Link>
          </nav>
        </div>

        <div className="hidden xl:flex items-end gap-2">
          <button onClick={() => autorise()}>
            <Image src={pathPhoto + "icons/user.svg"} width="40" height="40" />
          </button>

          <address className="h-fit font-inter text-base grid">
            <Link href="tel:+000000000000">+000 (00) 000-00-00</Link>
            <Link href="mailto:info@gmail.com">info@gmail.com</Link>
          </address>
        </div>

        {/* Б О К О В Е   М Е Н Ю */}
        <a
          href="#menu"
          style={{ backgroundImage: `url(${pathPhoto}icons/menu.svg)` }}
          className="w-8 h-8 bg-cover cursor-pointer hover:brightness-[3] ml:hidden"
        />

        <div
          id="menu"
          className="w-screen h-screen fixed z-50 top-0 left-full target:left-0 p-8 bg-my-white"
        >
          <a
            href="#"
            style={{ backgroundImage: `url(${pathPhoto}icons/x.svg)` }}
            alt=""
            className="w-8 h-8 absolute right-[2rem] block"
          />
          <div className="mt-10 font-long-cang text-2xl gap-y-3 grid">
            <Link href="/">Головна</Link>
            <hr />
            {/* {isAutorise ? ( */}
            {/* <Link href="/user/some-id">Кабінет</Link> */}
            {/* ) : ( */}
            <a href="#sign-in">Кабінет</a>
            {/* )} */}
            <hr />
            <Link href="/shop">Продукція</Link>
            <hr />
            <Link href="#">Смаки</Link>
            <hr />
            <Link href="#">Про нас</Link>
            <hr />
            <Link href="#">Блог</Link>
            <hr />
            <Link href="#">Контакти</Link>
            <hr />

            <div className="mt-8 grid grid-cols-2 w-fit gap-6">
              <SocialIcons initsize="64" />
            </div>
          </div>
        </div>
      </header>

      <SignIn />
      <Register />
    </>
  );
}
