import Image from "next/image";
import Link from "next/link";

export default function Header({ path = "" }) {
  return (
    <header className="px-20 justify-between items-center flex text-dark-red">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={path + "logo.svg"}
            alt="logo"
            className="h-16 mr-9 lg:mr-32"
            width="64"
            height="64"
          />
        </Link>
        <nav className="h-fit font-long-cang text-2xl gap-x-3 hidden ml:flex">
          <Link href="/">Головна</Link>|<Link href="shop">Продукція</Link>|
          <Link href="#">Смаки</Link>|<Link href="#">Про нас</Link>|
          <Link href="#">Блог</Link>|<Link href="#">Контакти</Link>
        </nav>
      </div>

      <address className="h-fit font-inter text-base hidden xl:grid">
        <Link href="tel:+000000000000">+000 (00) 000-00-00</Link>
        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
      </address>

      <div style={{backgroundImage: `url(${path}icons/menu.svg)`}} className='w-8 h-8 bg-cover cursor-pointer hover:brightness-[3]' />
    </header>
  );
}
