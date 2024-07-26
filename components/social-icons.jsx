import Image from "next/image";

export default function SocialIcons({ path = "", initsize, size }) {
  return (
    <>
      <a href="https://www.instagram.com/andrew_20o4/" target="_blank">
        <Image src={path + "icons/instagram.svg"} width={initsize} height={initsize}  className={size} />
      </a>
      <a href="https://t.me/Monoliz1503" target="_blank">
        <Image src={path + "icons/telegram.svg"} width={initsize} height={initsize} className={size} />
      </a>
      <a href="https://www.facebook.com/Andreww1503/" target="_blank">
        <Image src={path + "icons/facebook.svg"} width={initsize} height={initsize} className={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/andrii-hrechukh-42a060207/"
        target="_blank"
      >
        <Image src={path + "icons/linkedin.svg"} width={initsize} height={initsize} className={size} />
      </a>
    </>
  );
}
