import { Dot } from "@/components/Svgs";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ElementProps {
  icon: any;
  title: string;
  text: string;
}

interface OfferSectionProps {
  title: string;
  subtitle: string;
  text?: string;
  elements: ElementProps[];
  time: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function OfferSection({
  title,
  subtitle,
  text,
  elements,
  time,
  imageSrc,
  imageAlt,
}: OfferSectionProps) {
  return (
    <section className="padding flex flex-col md:flex-row gap-7 md:gap-0 md:justify-between">
      <div className="flex flex-col gap-7 xl:gap-10 desktop:gap-12 w-full md:w-[70.25%] lg:w-[56%]">
        <div>
          <h3 className="font-medium md:!leading-snug text-4xl xl:text-5xl desktop:text-6xl ">
            {title}
          </h3>
          <p className="font-secondary italic text-2xl md:text-xl xl:text-3xl desktop:text-4xl mt-2 md:mt-3 xl:mt-4 desktop:mt-5">
            {subtitle}
          </p>
          {text && (
            <p
              className="text-text-light text-lg md:text-sm xl:text-xl desktop:text-2xl mt-2 xl:mt-3
                w-full md:w-[340px] xl:w-[480px] desktop:w-[575px]"
            >
              {text}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-7 md:gap-5 xl:gap-6 desktop:gap-7 w-full md:w-[75%]">
          {elements.map((element, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-3 xl:gap-4 desktop:gap-5"
            >
              <div>
                <element.icon className="w-6 md:w-5 lg:w-4 xl:w-7" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xl md:text-lg xl:text-2xl desktop:text-3xl">
                  {element.title}
                </p>
                <p className="text-text-light text-lg md:text-sm xl:text-xl desktop:text-2xl mt-2 xl:mt-3">
                  {element.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-lg md:text-sm xl:text-xl desktop:text-2xl">
            Szczegóły:
          </p>
          <div className="flex gap-4 md:gap-2 xl:gap-5 mt-2 xl:mt-4 desktop:mt-5 mb-10 md:bt-7 xl:mb-10 desktop:mb-12">
            <div>
              <Dot className="size-2 mt-2 ml-2 md:size-1 xl:size-2 xl:mt-[10px] xl:ml-3 desktop:mt-3" />
            </div>
            <p className="text-lg md:text-sm xl:text-xl desktop:text-2xl text-text-light">
              <span className="font-semibold text-text">Czas trwania:</span>{" "}
              {time}
            </p>
          </div>
          <Link
            href="/"
            className="text-[#6866E9]  max-w-max font-semibold text-xl lg:text-sm xl:text-xl desktop:text-2xl hover:scale-[1.02] ease-custom-bezier duration-500"
          >
            Zaproś nas do siebie -&gt;
          </Link>
        </div>
      </div>
      <div className="md:hidden lg:block w-full lg:w-[35.1%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-[40px] xl:rounded-[60px] desktop:rounded-[71px]"
        />
      </div>
    </section>
  );
}
