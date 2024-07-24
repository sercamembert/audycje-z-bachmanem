"use client";
import React from "react";
import Image from "next/image";
import videoThumbnailImg from "../../../public/images/Video-thumbnail.png";
import Link from "next/link";

export default function PromotionalVideo() {
  return (
    <div className="w-full">
      <Link
        href="https://www.facebook.com/reel/467237992919899"
        target="_blank"
        className="md:hidden flex mt-3 justify-between mr-auto"
      >
        <p className="font-light text-text-light text-lg pt-6 max-w-[165px]">
          Zobacz nasz krótki film promocyjny!
        </p>
        <Image
          src={videoThumbnailImg}
          alt="Video"
          className="min-w-[160px] max-w-[160px]"
          quality={100}
        />
      </Link>
      <Link
        href="https://www.facebook.com/reel/467237992919899"
        target="_blank"
        aria-label="Video promocyjne"
      >
        <Image
          src={videoThumbnailImg}
          alt="Video"
          className="hidden md:block md:w-[110px] lg:w-[118px] xl:w-[166px] desktop:w-[199px] hover:scale-[1.02] ease-custom-bezier duration-500 cursor-pointer"
        />
      </Link>
    </div>
  );
}
