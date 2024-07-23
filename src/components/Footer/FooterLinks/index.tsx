import Link from "next/link";
import React from "react";

interface Props {}

const FooterLinks = () => {
  return (
    <div
      className=" md:hidden flex flex-row justify-center md:flex-col font-medium col-span-2 md:col-span-1
    text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[22.39px] desktop:text-[26px] ultra:text-[40px]
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
  );
};

export default FooterLinks;
