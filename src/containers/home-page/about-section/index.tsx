import { Rainbow, Star, Sunstar } from "@/components/Svgs";
import React from "react";

export default function AboutSection() {
  return (
    <section className="padding home-padding flex flex-col gap-14 lg:gap-0">
      <header className="mx-auto text-center flex flex-col lg:gap-3 xl:gap-4 desktop:gap-5">
        <h2 className="heading">
          Dlaczego <span className="font-secondary italic">MY?</span>
        </h2>
        <p className="hidden lg:block paragraph text-text-light">
          Wybierając <q>Audycje z Bachmanem</q>, zapewniasz dzieciom <br /> nie
          tylko rozrywkę, ale i edukację na najwyższym poziomie. <br /> Nasze
          koncerty to wyjątkowa okazja do rozwijania pasji <br /> muzycznych,
          poznawania kultury i promowania zdrowego <br /> stylu życia.
        </p>
      </header>

      <div className="flex flex-col items-center lg:items-start md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap lg:justify-between gap-12 md:gap-10 lg:h-[305px] xl:h-[430px] desktop:h-[516px]">
        <article className="flex flex-col items-center gap-2 max-w-[340px] md:max-w-[291px] lg:max-w-[206px] xl:max-w-[291px] desktop:max-w-[350px]">
          <Star className="w-[109px] lg:w-[78px] xl:w-[109px] desktop:w-[130px]" />
          <h3 className="font-medium text-4xl lg:text-2xl xl:text-4xl desktop:text-[43px]">
            Profesjonalizm
          </h3>
          <p className="text-text-light text-xl lg:paragraph text-center">
            Nasi prowadzący to eksperci w dziedzinie muzyki, którzy z pasją
            dzielą się swoją wiedzą i umiejętnościami.
          </p>
        </article>
        <article className="flex flex-col items-center gap-2 max-w-[340px] lg:max-w-[231px] xl:max-w-[331px] desktop:max-w-[393px] lg:my-auto">
          <Rainbow className="w-[137px] lg:w-[91px] xl:w-[137px] desktop:w-[164px]" />
          <h3 className="font-medium text-4xl lg:text-2xl xl:text-4xl desktop:text-[43px]">
            Interaktywność
          </h3>
          <p className="text-text-light text-xl lg:paragraph text-center">
            Dzieci są aktywnymi uczestnikami naszych koncertów, co sprawia, że
            nauka staje się zabawą i przyjemnością.
          </p>
        </article>
        <article className="flex flex-col mx-auto lg:mx-0 items-center gap-2 max-w-[340px] lg:max-w-[224px] xl:max-w-[315px] desktop:max-w-[378px] lg:mt-auto">
          <Sunstar className="w-[87px] lg:w-[61px] xl:w-[87px] desktop:w-[103px]" />
          <h3 className="font-medium text-4xl lg:text-2xl xl:text-4xl desktop:text-[43px]">
            Różnorodność
          </h3>
          <p className="text-text-light text-xl lg:paragraph text-center">
            Bogaty program obejmujący muzykę z różnych kultur i epok,
            dostosowany do wieku i potrzeb dzieci.
          </p>
        </article>
      </div>
    </section>
  );
}
