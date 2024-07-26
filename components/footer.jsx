import Image from "next/image";
import SocialIcons from "./social-icons";

export default function Footer({ path = "" }) {
  return (
    <footer className="h-[460px] pt-12 px-20 shadow-[inset_0_6px_5px_rgba(0,0,0,0.25)] grid">
      <div className="flex justify-between">
        <div className="w-fit text-center">
          <Image
            src={path + "logo.svg"}
            width="84"
            height="84"
            alt="logo"
            className="!h-12 mx-auto"
          />
          <p className="font-ubuntu text-xl font-medium text-dark-red tracking-tight leading-5 capitalize">
            Юлина м&apos;ясна
            <br />
            насолода
          </p>
        </div>
        <address className="w-fit lg:w-[40.11%] grid">
          <div className="grid lg:flex gap-y-1.5 lg:gap-x-14">
            <SocialIcons path={path} size='!w-10 !h-10 2sm:w-auto 2sm:h-auto' />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42049.55241920466!2d26.053175949999996!3d48.79912679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473163734f0bdb23%3A0x8a3fac2f85db805!2z0JHQvtGA0YnRltCyLCDQotC10YDQvdC-0L_RltC70YzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1721976888035!5m2!1suk!2sua"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full mt-16 border-0 self-end hidden lg:block"
          ></iframe>
        </address>
      </div>
      <div className="self-end">
        <hr className="h-px border-0 bg-my-black" />
        <p className="my-1 3sm:my-4 font-ubuntu font-light text-[6px] 4sm:text-[9px] 3sm:text-xs 2sm:text-sm text-center sm:text-left">
          Авторське право © 2024 Юлина м’ясна насолода
        </p>
      </div>
    </footer>
  );
}
