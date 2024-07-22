import ArrowButton from "@/components/Buttons/ArrowButton";
import PromotionalVideo from "@/components/PromotionalVideo";
import { Flower1, Flower2, Flower2Mobile, Heart } from "@/components/Svgs";
import Link from "next/link";
import React from "react";

export default function OfferSection() {
  return (
    <div className="padding flex flex-col md:flex-row items-end gap-4 md:gap-10 lg:gap-12 xl:gap-[70px] desktop:gap-20">
      <Link
        href="/"
        className="bg-[#BBF7D0] hover:scale-[1.01] ease-custom-bezier duration-500 group w-full overflow-hidden md:w-[31.75%] relative px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 py-9 md:py-4 lg:py-5 xl:py-8 desktop:py-9
    rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
    min-h-[254px] md:min-h-[188px] lg:min-h-[216px] xl:min-h-[304px] desktop:min-h-[364px]"
      >
        <div className="flex flex-col w-full relative z-10">
          <p className="font-secondary italic text-xl md:text-sm lg:text-base xl:text-2xl desktop:text-3xl ">
            Oferta dla
          </p>
          <h2 className="font-medium text-2xl md:text-base lg:text-xl xl:text-3xl desktop:text-4xl">
            Szkoły
          </h2>
          <p className="text-lg md:text-xs lg:text-sm xl:text-xl desktop:text-2xl pt-1 xl:pt-[6px] desktop:pt-2">
            Interaktywne koncerty i <br className="hidden lg:block" /> bajki
            muzyczne dla <br className="hidden lg:block" /> uczniów, które łączą
            śpiew, <br className="hidden lg:block" /> rytmy i edukacyjne
            <br className="hidden lg:block" /> zagadki.
          </p>
        </div>
        <Flower1 className="absolute -bottom-14 md:bottom-0 right-5 md:right-0 w-[146px] md:w-[85px] lg:w-[85px] xl:w-[120px] desktop:w-[155px] z-0" />
        <ArrowButton className="absolute rounded-[50%] z-20 top-4 md:top-3 lg:top-4 xl:top-5 desktop:top-6 right-5 md:right-4 lg:right-5 xl:right-6 desktop:right-8" />
      </Link>
      <Link
        href="/"
        className="bg-[#F0ABFC] hover:scale-[1.01] ease-custom-bezier duration-500 group overflow-hidden w-full md:w-[31.75%] relative flex flex-col px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 py-9 md:pt-4 lg:py-5 xl:py-8 desktop:py-9
    rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
    min-h-[254px] md:min-h-[229px] lg:min-h-[280px] xl:min-h-[393px] desktop:min-h-[472.65px]"
      >
        <div className="flex flex-col relative z-10">
          <p className="font-secondary italic text-xl md:text-sm lg:text-base xl:text-2xl desktop:text-3xl ">
            Oferta dla
          </p>
          <h2 className="font-medium text-2xl md:text-base lg:text-xl xl:text-3xl desktop:text-4xl pt-1">
            Przedszkolaków
          </h2>
          <p className="text-lg md:text-xs lg:text-sm xl:text-xl desktop:text-2xl pt-1 xl:pt-[6px] desktop:pt-2">
            Bajkowe opowieści i <br className="hidden lg:block" /> muzyczne
            zabawy,
            <br className="hidden lg:block" /> angażujące dzieci{" "}
            <br className="hidden lg:block" /> poprzez ruch i grę na{" "}
            <br className="hidden lg:block" /> instrumentach.
          </p>
        </div>
        <Heart className="absolute bottom-3 md:bottom-2 lg:bottom-3 xl:bottom-4 desktop:bottom-7 right-5 md:right-0 md:left-3 xl:left-6 w-[92px] md:w-[74px] lg:w-[91px] xl:w-[128px] desktop:w-[153px] z-0" />
        <ArrowButton className="absolute rounded-[50%] z-20 top-4 md:top-auto md:bottom-3 lg:bottom-4 xl:bottom-5 desktop:bottom-6 right-5 md:right-4 lg:right-5 xl:right-6 desktop:right-8" />
      </Link>
      <Link
        href="/"
        className="bg-[#D8FDB8] hover:scale-[1.01] ease-custom-bezier duration-500 group w-full overflow-hidden md:w-[36.5%] relative flex flex-col px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 py-9 md:pt-4 lg:py-5 xl:py-8 desktop:py-9
    rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
    min-h-[254px] md:min-h-[156px] lg:min-h-[191px] xl:min-h-[269px] desktop:min-h-[323px]"
      >
        <div className="flex flex-col relative z-10">
          <p className="font-secondary italic text-xl md:text-sm lg:text-base xl:text-2xl desktop:text-3xl ">
            Oferta
          </p>
          <h2 className="font-medium text-2xl md:text-base lg:text-xl xl:text-3xl desktop:text-4xl pt-1">
            Indywidualna
          </h2>
          <p className="text-lg md:text-xs lg:text-sm xl:text-xl desktop:text-2xl pt-1 xl:pt-[6px] desktop:pt-2">
            Dostosowane koncerty i <br className="hidden lg:block" /> programy
            muzyczne, tworzone <br className="hidden lg:block" />
            na specjalne zamówienie dla <br className="hidden lg:block" />
            wyjątkowych wydarzeń.
          </p>
        </div>
        <Flower2Mobile className="md:hidden absolute z-0 bottom-0 right-5 w-[121px]" />
        <Flower2 className="hidden md:block absolute top-0 right-0 w-[94px] lg:w-[94px] xl:w-[132px] desktop:w-[171px] z-0" />
        <ArrowButton className="absolute rounded-[50%] z-20 top-4 md:top-auto md:bottom-3 lg:bottom-4 xl:bottom-5 desktop:bottom-6 right-5 md:right-4 lg:right-5 xl:right-6 desktop:right-8" />
      </Link>
      <div className="md:hidden w-full">
        <PromotionalVideo />
      </div>
    </div>
  );
}
