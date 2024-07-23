import ContactFormHomePage from "@/components/ContactForm";
import { Contact, ContactStar } from "@/components/Svgs";
import React from "react";

export default function ContactSection() {
  return (
    <div className="padding home-padding" id="kontakt">
      <div
        className="flex relative overflow-hidden flex-col gap-2 md:gap-3 lg:gap-5 xl:gap-6 desktop:gap-7 bg-[#F0ABFC] rounded-[40px] md:rounded-[35px] lg:rounded-[43px] xl:rounded-[60px] desktop:rounded-[65px]
      px-7 md:px-16 lg:px-[50px] xl:px-[95px] desktop:px-[112px]
      pt-6 md:pt-10 lg:pt-12 xl:pt-14 desktop:pt-16
      pb-10 md:pb-16 lg:pb-[138px] xl:pb-[206px] desktop:pb-[247px]
      lg:min-h-[627px] xl:min-h-[795] desktop:min-h-[990px]"
      >
        <div className="flex flex-col gap-3 xl:gap-4 desktop:gap-6">
          <div className="flex gap-3 xl:gap-4">
            <Contact className="w-8 md:w-12 xl:w-16" />
            <p className="font-secondary italic text-3xl md:text-4xl xl:text-6xl">
              Kontakt
            </p>
          </div>
          <h4 className="font-medium text-4xl md:text-[42px] xl:text-6xl desktop:text-7xl">
            Zaproś nas do Siebie!
          </h4>
        </div>
        <ContactFormHomePage />
        <ContactStar className="absolute hidden lg:block right-0 bottom-0 lg:right-auto lg:left-0 w-[289px] xl:w-[419px] desktop:w-[500px]" />
      </div>
    </div>
  );
}
