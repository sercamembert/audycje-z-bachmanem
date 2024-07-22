import React from "react";

export default function HeroSection() {
  return (
    <section className="padding flex flex-col bg-red-950">
      <div></div>
      {/* Offer section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-12 xl:gap-[70px] desktop:gap-20">
        <div className="w-full md:w-1/3 relative flex flex-col px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 pt-9 md:pt-4 lg:pt-5 xl:pt-8 desktop:pt-9 ">
          <p>Oferta dla</p>
          <h2>Szkoły</h2>
          <p>
            Interaktywne koncerty i bajki muzyczne dla uczniów, które łączą
            śpiew, rytmy i edukacyjne zagadki.
          </p>
        </div>
        <div className="w-full md:w-1/3 relative flex flex-col px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 pt-9 md:pt-4 lg:pt-5 xl:pt-8 desktop:pt-9 ">
          <p>Oferta dla</p>
          <h2>Przedszkolaków</h2>
          <p>
            Bajkowe opowieści i muzyczne zabawy, angażujące dzieci poprzez ruch
            i grę na instrumentach.
          </p>
        </div>
        <div className="w-full md:w-1/3 relative flex flex-col px-7 md:px-4 lg:px-5 xl:px-7 desktop:px-8 pt-9 md:pt-4 lg:pt-5 xl:pt-8 desktop:pt-9 ">
          <p>Oferta</p>
          <h2>Indywidualna</h2>
          <p>
            Dostosowane koncerty i programy muzyczne, tworzone na specjalne
            zamówienie dla wyjątkowych wydarzeń.
          </p>
        </div>
      </div>
    </section>
  );
}
