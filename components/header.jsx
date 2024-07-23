import Image from "next/image";
import Link from "next/link";

export default function Header({ path='' }) {
  return (
    <header className="px-20 justify-between flex-wrap items-center flex text-dark-red">
      <Link href="/">
      <Image
        src={ path + "logo.svg" }
        alt="logo"
        className="h-16 mr-32"
        width="64"
        height="64"
      />
      </Link>
      <nav className="h-fit font-long-cang text-2xl gap-x-3 flex">
        <Link href="/">Головна</Link>|<Link href="shop">Продукція</Link>|
        <Link href="#">Смаки</Link>|<Link href="#">Про нас</Link>|<Link href="#">Блог</Link>|
        <Link href="#">Контакти</Link>
      </nav>
      <address className="h-fit font-inter text-base grid">
        <Link href="tel:+000000000000">+000 (00) 000-00-00</Link>
        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
      </address>
    </header>
  );
}
