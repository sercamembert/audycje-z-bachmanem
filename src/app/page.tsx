import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import OpinionsSection from "@/containers/home-page/opinions-section";
import OfferSection from "@/containers/home-page/offer-section";

import offer1Img from "../../public/images/offer1.webp";
import offer2Img from "../../public/images/offer2.webp";
import offer3Img from "../../public/images/offer3.webp";

import { Offer1 } from "@/components/Svgs";
import { Offer2 } from "@/components/Svgs";
import { Offer3 } from "@/components/Svgs";
import { Offer4 } from "@/components/Svgs";
import { Offer5 } from "@/components/Svgs";
import { Offer6 } from "@/components/Svgs";
import { Offer7 } from "@/components/Svgs";
import { Offer8 } from "@/components/Svgs";
import ContactSection from "@/containers/home-page/contact-section";
import NumioSection from "@/containers/home-page/numio-section";

export default function Home() {
  const offerSections = [
    {
      id: "oferta-przedszkole",
      title: "Oferta skierowana do dzieci w wieku przedszkolnym",
      subtitle: "Muzyczne Bajki z Bachmanem!",
      elements: [
        {
          icon: Offer1,
          title: "Bajkowe Opowieści:",
          text: "Zanurz się w niezwykłych historiach, w których każdy dźwięk ma swoją wyjątkową rolę.",
        },
        {
          icon: Offer2,
          title: "Aktywne Zaangażowanie:",
          text: "Dzieci biorą czynny udział w naszych spotkaniach poprzez zabawy, taniec i grę na instrumentach.",
        },
        {
          icon: Offer3,
          title: "Interaktywna Zabawa:",
          text: "Uczestnicy wykonują różnorodne zadania, które rozwijają ich wyobraźnię i umiejętności muzyczne.",
        },
      ],
      time: "30 minut pełnych muzyki i zabawy!",
      imageSrc: offer1Img,
      imageAlt: "Audycje z Bachmanem",
    },
    {
      id: "oferta-szkola",
      title: "Oferta skierowana do dzieci w wieku szkolnym",
      subtitle: "Interaktywne koncerty z Bachmanem!",
      elements: [
        {
          icon: Offer4,
          title: "Muzyczne Bajki:",
          text: "Uczniowie poznają niezwykłe historie, gdzie każdy instrument opowiada swoją część opowieści.",
        },
        {
          icon: Offer5,
          title: "Aktywne Uczestnictwo:",
          text: "Dzieci śpiewają, wystukują rytmy i rozwijają edukacyjne zagadki, angażując się w każdy koncert.",
        },
        {
          icon: Offer6,
          title: "Interaktywna Nauka:",
          text: "Nasze koncerty to nie tylko słuchanie, ale również interaktywne zadania, które rozwijają umiejętności muzyczne i wiedzę uczniów.",
        },
      ],
      time: "45 minut pełnych muzyki i zabawy!",
      imageSrc: offer2Img,
      imageAlt: "Interaktywne koncerty z Bachmanem",
    },
    {
      id: "oferta-indywidualna",
      title: "Oferta Indywidualna",
      subtitle: "Unikalne koncerty na zamówienie!",
      text: "Chcesz zorganizować wyjątkowe wydarzenie? „Audycje z Bachmanem” oferują dostosowane do Twoich potrzeb koncerty i programy muzyczne, które uczynią każde wydarzenie niezapomnianym przeżyciem! Co oferujemy?",
      elements: [
        {
          icon: Offer7,
          title: "Personalizowane Koncerty:",
          text: "Tworzymy programy muzyczne dopasowane do okazji i preferencji, zapewniając wyjątkowe wrażenia dla każdej publiczności.",
        },
        {
          icon: Offer8,
          title: "Profesjonalizm i Jakość:",
          text: "Nasi artyści to doświadczeni muzycy, którzy gwarantują najwyższy poziom artystyczny.",
        },
        {
          icon: Offer3,
          title: "Elastyczność i Kreatywność:",
          text: "Realizujemy zarówno kameralne spotkania, jak i większe wydarzenia, dostosowując repertuar i styl do potrzeb klienta.",
        },
      ],
      time: "Dostępne różne opcje czasowe, dostosowane do Twoich wymagań.",
      imageSrc: offer3Img,
      imageAlt: "Unikalne koncerty na zamówienie",
    },
  ];

  return (
    <main className="flex flex-col  lg:gap-[32px] xl:gap-[60px] desktop:gap-[92px] pt-[87px] lg:pt-[98px] xl:pt-[130px] desktop:pt-[147px] mb-[200px]">
      <HeroSection />
      <AboutSection />
      <OpinionsSection />
      {offerSections.map((offer, index) => (
        <OfferSection
          key={index}
          id={offer.id}
          title={offer.title}
          subtitle={offer.subtitle}
          text={offer.text}
          elements={offer.elements}
          time={offer.time}
          imageSrc={offer.imageSrc}
          imageAlt={offer.imageAlt}
        />
      ))}
      <ContactSection />
      <NumioSection />
    </main>
  );
}
