import Gallery from "@/components/Gallery";
import React from "react";

export default function HeroSection() {
  return (
    <div className="padding flex flex-col pt-[87px] lg:pt-[98px] xl:pt-[130px] desktop:pt-[147px] mb-[200px] gap-[35px] md:gap-[50px] lg:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
      <div>
        <p className="font-secondary italic text-xl lg:text-2xl xl:text-4xl desktop:text-[42px]">
          Audycje z Bachmanem
        </p>
        <h1 className="font-medium inline-block relative z-10 text-4xl lg:text-[46px] xl:text-6xl desktop:text-[80px] leading-[55px] lg:leading-[61px] xl:leading-[86px] desktop:leading-[103px] mt-1 lg:mt-3">
          Galeria zdjęć
        </h1>
      </div>
      <Gallery />
    </div>
  );
}
