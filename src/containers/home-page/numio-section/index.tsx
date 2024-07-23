import { Numio } from "@/components/Svgs";
import Link from "next/link";
import React from "react";

export default function NumioSection() {
  return (
    <div className="padding flex flex-col items-center gap-6 lg:gap-4 xl:gap-6 desktop:gap-7">
      <Numio className="w-[55px] lg:w-[40px] xl:w-[55px] desktop:w-[66px]" />
      <p className="opacity-80 text-center text-lg lg:text-sm xl:text-xl desktop:text-2xl">
        Projekt „Audycje z Bachmanem” jest realizowany przez{" "}
        <br className="hidden md:inline-block" />
        <b className="font-semibold">Numio.</b> Jesteśmy dumni, że możemy
        wspierać edukację i <br className="hidden md:inline-block" /> rozwój
        muzyczny dzieci, dostarczając wyjątkowe{" "}
        <br className="hidden md:inline-block" />
        doświadczenia i inspirując kolejne pokolenia.
      </p>

      <Link
        href="https://numio.pl/"
        target="_blank"
        className="opacity-80 text-center text-lg lg:text-sm xl:text-xl desktop:text-2xl underline underline-offset-2"
      >
        www.numio.pl
      </Link>
    </div>
  );
}
