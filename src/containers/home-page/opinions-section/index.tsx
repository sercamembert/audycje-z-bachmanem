import { Shuriken } from "@/components/Svgs";
import Link from "next/link";
import React from "react";

export default function OpinionsSection() {
  return (
    <section
      id="akredytacje"
      className="flex home-padding flex-col padding gap-7 md:gap-12 lg:gap-3 xl:gap-5 desktop:gap-6 "
    >
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
        <header className="w-full lg:w-[41%]">
          <h3 className="heading">Zaufali Nam</h3>
          <p className="font-secondary italic text-3xl lg:text-4xl xl:text-5xl desktop:text-6xl mt-2 md:mt-0.5">
            Nasze Akredytacje!
          </p>
          <p className="text-text-light plain-text mt-2 xl:mt-4 desktop:mt-6 md:max-w-[500px] lg:max-w-full">
            Jesteśmy dumni, że nasze <q>Audycje z Bachmanem</q> zyskały uznanie
            wielu placówek edukacyjnych i instytucji kulturalnych. Dzięki ich
            zaufaniu możemy dalej rozwijać nasze programy i inspirować kolejne
            pokolenia młodych melomanów.
          </p>
        </header>
        <article
          className="bg-[#B12EFC] relative overflow-hidden lg:w-[52%] text-white rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
          p-6 lg:7 xl:p-10 desktop:p-11 lg:pb-11 xl:pb-16 desktop:pb-20"
        >
          <p className="font-medium text-2xl lg:text-xl xl:text-3xl desktop:text-4xl xl:leading-snug desktop:leading-snug">
            Rekomendacja Instytutu <br className="hidden md:block" />{" "}
            Działalności Publicznej
          </p>
          <p className="plain-text mt-2 lg:w-[88.96%]">
            Instytut Działalności Publicznej z przyjemnością rekomenduje{" "}
            <q>Audycje z Bachmanem</q> jako wartościowy program
            edukacyjno-kulturalny. Program ten w profesjonalny sposób wspiera
            rozwój muzyczny i artystyczny dzieci, promując jednocześnie zdrowy
            styl życia.
          </p>
          <Shuriken className="hidden lg:block absolute top-0 right-0 w-[114px] xl:w-[161px] desktop:w-[193px]" />
        </article>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:justify-between items-start">
        <p className="md:hidden mx-auto lg:mx-0 lg:block max-w-max font-light text-center lg:text-left text-text-light text-sm xl:text-xl desktop:text-2xl">
          Opinie naszych <br /> klientów:
        </p>
        <article
          className="bg-[#6866E9] w-full md:w-[50.5%] lg:w-[44%]  text-white rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
        p-6 lg:7 xl:p-10 desktop:p-11 lg:pb-11 xl:pb-16 desktop:pb-20"
        >
          <p className="font-medium text-2xl lg:text-xl xl:text-3xl desktop:text-4xl xl:leading-snug desktop:leading-snug">
            Happy Świat
          </p>
          <p className="plain-text mt-2 w-full">
            <q>
              Serdecznie polecamy Audycje Muzyczne z Bachmanem. Artyści w piękny
              sposób przenoszą dzieci do krainy muzyki i instrumentów. Dużym
              plusem jest muzyka grana na żywo przez uzdolnionych muzyków. Pan
              prowadzący świetnie aktywizuje dzieci, które z zaciekawieniem
              słuchają występów.
            </q>
          </p>
        </article>
        <article
          className="bg-[#647B7C] hidden md:block w-full md:w-[45%] lg:w-[36%]  text-white rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
        p-6 lg:7 xl:p-10 desktop:p-11 lg:pb-11 xl:pb-16 desktop:pb-20"
        >
          <p className="font-medium text-2xl lg:text-xl xl:text-3xl desktop:text-4xl xl:leading-snug desktop:leading-snug">
            Szkoła Podstawowa w Boleszkowicach
          </p>
          <p className="plain-text mt-2 w-full">
            <q>
              Audycje z Bachmanem stały się nieodłącznym elementem naszego
              szkolnego kalendarza. Dzieci i nauczyciele z niecierpliwością
              czekają na każde spotkanie. Program wzbogaca naszą edukację,
              inspiruje i zachęca do odkrywania piękna muzyki.
            </q>
          </p>
        </article>
      </div>

      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-5 desktop:gap-6">
        <p className="plain-text text-text-light font-medium">
          Dołącz do grona zadowolonych szkół i{" "}
          <br className="hidden md:block" /> przedszkoli, które już skorzystały
          z <br className="hidden md:block" /> naszych audycji!
        </p>
        <Link
          href="/#kontakt"
          className="text-[#6866E9] max-w-max font-semibold text-xl lg:text-sm xl:text-xl desktop:text-2xl hover:scale-[1.02] ease-custom-bezier duration-500"
        >
          Skontaktuj się z nami -&gt;
        </Link>
      </div>
    </section>
  );
}
