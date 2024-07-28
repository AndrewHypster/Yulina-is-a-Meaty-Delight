import Image from "next/image";
import Link from "next/link";

export default function SocialIcons({ path = "", initsize, size, styles = "" }) {
  return (
    <>
      <Link
        href="https://www.instagram.com/andrew_20o4/"
        target="_blank"
        alt="instagram"
        className={styles}
      >
        <Image
          src={path + "icons/instagram.svg"}
          width={initsize}
          height={initsize}
          className={size}
        />
      </Link>
      <Link
        href="https://t.me/Monoliz1503"
        target="_blank"
        alt="telegram"
        className={styles}
      >
        <Image
          src={path + "icons/telegram.svg"}
          width={initsize}
          height={initsize}
          className={size}
        />
      </Link>
      <Link
        href="https://www.facebook.com/Andreww1503/"
        target="_blank"
        alt="facebook"
        className={styles}
      >
        <Image
          src={path + "icons/facebook.svg"}
          width={initsize}
          height={initsize}
          className={size}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/andrii-hrechukh-42a060207/"
        target="_blank"
        alt="linkedin"
        className={styles}
      >
        <Image
          src={path + "icons/linkedin.svg"}
          width={initsize}
          height={initsize}
          className={size}
        />
      </Link>
    </>
  );
}
