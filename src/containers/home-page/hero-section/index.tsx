import React from "react";
import OfferSection from "./offert-section";
import Button from "@/components/Buttons/Button";
import { Puddle, Line, Blob } from "@/components/Svgs";
import PromotionalVideo from "@/components/PromotionalVideo";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-6 md:gap-[52px] lg:gap-11 xl:gap-14 desktop:gap-[70px]">
      <header className="relative padding">
        <div className="relative max-w-max">
          <h1 className="font-medium inline-block relative z-10 text-5xl lg:text-[51px] xl:text-7xl desktop:text-[86px] leading-[55px] lg:leading-[61px] xl:leading-[86px] desktop:leading-[103px]">
            Audycje z Bachmanem
          </h1>
          <Puddle className="absolute z-0 left-0 md:left-auto md:-right-1 -bottom-2 xl:-bottom-4 desktop:-bottom-5 w-[279px] lg:w-[320px] xl:w-[451px] desktop:w-[541px]" />
        </div>
        <p className="font-secondary italic text-4xl xl:text-5xl desktop:text-6xl leading-[46px] xl:leading-[48px] desktop:leading-[74px] mt-3 lg:mt-1 xl:mt-[5px]">
          Sezon 2024/2025
        </p>
        <p className="font-light text-lg xl:text-2xl desktop:text-3xl mt-3 lg:mt-2 xl:mt-[14px] desktop:mt-4">
          Twórcze Kształcenie dzieci: Edukacja Artystyczna{" "}
          <br className="hidden md:inline-block" /> na Rzecz Zdrowia i Dobrego
          Samopoczucia
        </p>
        <div className="flex gap-1 lg:gap-3 xl:gap-4 desktop:gap-5 mt-3 lg:mt-3 xl:mt-[14px] desktop:mt-5">
          <Button
            className="bg-[#F6E6F9]"
            size="SMALL"
            text="#Nauka i zabawa"
            variant="DEFAULT"
          />
          <Button
            className="bg-[#EFEEFF]"
            size="SMALL"
            text="#Magia Muzyki"
            variant="DEFAULT"
          />
        </div>
      </header>
      <Line className="hidden md:block w-full absolute z-[-999] md:max-h-[216px] xl:max-h-[305px] desktop:max-h-[365px] md:top-[164px] lg:top-[132px] xl:top-[187px] desktop:top-[224px]" />
      {/* Video section */}
      <aside className="hidden md:block absolute right-0 -top-[61px] lg:-top-[77px] xl:-top-[110px] desktop:-top-[130px]">
        <div className="flex items-end">
          <p className="font-light text-text-light text-xs xl:text-lg desktop:text-xl md:mb-[71px] lg:mb-[88px] xl:mb-[123px] desktop:mb-[150px]">
            Zobacz nasz krótki <br />
            film promocyjny!
          </p>
          {/* md:h-[346px] lg:h-[375px] xl:h-[536px] desktop:h-[655px] */}
          <Blob className="md:w-[153px] lg:w-[190px] xl:w-[270px] desktop:w-[320px]" />
        </div>
        <div className="absolute bottom-[97px] lg:bottom-[103px] xl:bottom-[170px] desktop:bottom-[198px] md:left-[87px] lg:left-[83px] xl:left-[118px] desktop:left-[141px]">
          <PromotionalVideo />
        </div>
      </aside>
      {/* Offer section */}
      <OfferSection />
    </section>
  );
}
