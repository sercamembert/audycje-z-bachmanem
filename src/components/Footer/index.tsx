import Link from "next/link";
import React from "react";
import FooterLinks from "./FooterLinks/index";
import Logo from "../Logo";
import { Facebook, Instagram } from "../Svgs";

const Footer = () => {
  return (
    <div
      className=" mt-[57px] md:mt-[74px] lg:mt-[104px] xl:mt-[130px] 3xl:mt-[140px] desktop:mt-[160px] ultra:mt-[240px] w-full border-t border-text min-h-[300px] md:min-h-[265px] lg:min-h-[350px] xl:min-h-[430px] 2xl:min-h-[490px] 3xl:min-h-[529px] ultra:min-w-[850px]
    pt-[66px] md:pt-[80px] lg:pt-[107px] xl:pt-[134px] 2xl:pt-[151px] 3xl:pt-[161px] desktop:pt-[180px] ultra:pt-[267px]
    "
    >
      <div className="w-full h-full flex flex-col md:flex-row  ">
        <div className="flex gap-8 md:gap-0 flex-col md:flex-row items-center md:items-start text-center md:text-left justify-between padding w-full">
          <div className=" md:w-auto flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[18px] desktop:gap-[20px] ultra:gap-[30px]">
            {/* <p className=" font-semibold text-[13px] md:text-[12px] lg:text-[14px] xl:text-[20px] 2xl:text-[19px] desktop:text-[22px] ultra:text-[40px]">
              NUMIO Production
            </p> */}
            <Logo className="w-[150px] md:w-[100px] xl:w-[140px] desktop:w-[200px] mx-auto md:mx-0 mb-2" />
            <p className="footer-paragraph font-light opacity-90">
              Ul. Gen. Władysława Sikorskiego 166
            </p>
            <p className="footer-paragraph font-light opacity-90">
              18-400 Łomża
            </p>
            <p className="footer-paragraph font-light opacity-90">
              NIP: 525 291 75 80
            </p>
            <p className="footer-paragraph font-light opacity-90">
              REGON: 522701253
            </p>
          </div>
          <div className=" md:w-auto flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[18px] desktop:gap-[20px] ultra:gap-[30px]">
            <p className="font-medium text-[17px] md:text-[12px] lg:text-[14px] xl:text-[20px] 2xl:text-[19px] desktop:text-[22px] ultra:text-[40px]">
              Kontakt
            </p>
            <Link
              href="callto:511130650"
              className="footer-paragraph font-light opacity-90"
            >
              Telefon: +48 511 130 650
            </Link>
            <Link
              href="mailto:kontakt@audycjezbachmanem.pl"
              className="footer-paragraph font-light opacity-90"
            >
              Email: kontakt@audycjezbachmanem.pl
            </Link>
            <div className="flex gap-3 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/audycjemuzycznezbachmanem"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="size-8 md:size-6 xl:size-8 desktop:size-9" />
              </Link>
              <Link
                href="https://www.instagram.com/audycje_z_bachmanem"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="size-8 md:size-6 xl:size-8 desktop:size-9" />
              </Link>
            </div>
          </div>
          <div
            className="hidden md:flex flex-row justify-center md:flex-col font-medium col-span-2 md:col-span-1
        text-[12px] lg:text-[14px] xl:text-[20px] 2xl:text-[19px] desktop:text-[22px] ultra:text-[40px]
        mt-[61px] md:mt-0 gap-[18px] md:gap-[16px] xl:gap-[27px] 2xl:gap-[31px] 3xl:gap-[33px] desktop:gap-[37px] ultra:gap-[53px]"
          >
            <Link title="Akredytacje" href="/#akredytacje">
              Akredytacje
            </Link>
            <Link title="Oferta" href="/#oferta-przedszkole">
              Oferta
            </Link>
            <Link title="Galeria" href="/galeria">
              Galeria
            </Link>
            <Link title="Wydarzenia" href="/#kontakt">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <FooterLinks />
        </div>
      </div>
      <div
        className="flex justify-center md:justify-between padding mt-[33px] md:mt-[69px] lg:mt-[92px] xl:mt-[115px] 2xl:mt-[129px] 3xl:mt-[138px] desktop:mt-[155px] ultra:mt-[229px]
      mb-[69px] md:mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[24px] desktop:mb-[26px] ultra:mb-[82px]"
      >
        <Link
          title="outofplace"
          target="_blank"
          href="https://outofplace.space/"
          aria-label="outofplace"
          className="opacity-80 text-center text-[11px] md:text-[8.53px] lg:text-[11.38px] xl:text-[12.22px] 2xl:text-[14px] 3xl:text-[15.07px] desktop:text-[17.11px] ultra:text-[26px]"
        >
          Strona internetowa wykonana przez outofplace.space
        </Link>
      </div>
    </div>
  );
};

export default Footer;
