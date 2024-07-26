import Image from "next/image";

export default function SocialIcons({ path = "", size }) {
  return (
    <>
      <a href="https://www.instagram.com/andrew_20o4/" target="_blank">
        <Image src={path + "icons/instagram.svg"} width="40" height="40"  className={size} />
      </a>
      <a href="https://t.me/Monoliz1503" target="_blank">
        <Image src={path + "icons/telegram.svg"} width="40" height="40" className={size} />
      </a>
      <a href="https://www.facebook.com/Andreww1503/" target="_blank">
        <Image src={path + "icons/facebook.svg"} width="40" height="40" className={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/andrii-hrechukh-42a060207/"
        target="_blank"
      >
        <Image src={path + "icons/linkedin.svg"} width="40" height="40" className={size} />
      </a>
    </>
  );
}
