"use client";
import React from "react";
import { Video, VideoMobile } from "../Svgs";
import Image from "next/image";
import videoThumbnailImg from "../../../public/images/Video-thumbnail.png";

export default function PromotionalVideo() {
  return (
    <div className="w-full">
      <div className="md:hidden flex mt-3 justify-between mr-auto">
        <p className="font-light text-text-light text-lg pt-6 max-w-[165px]">
          Zobacz nasz krótki film promocyjny!
        </p>
        <Image
          src={videoThumbnailImg}
          alt="Video"
          className="min-w-[160px] max-w-[160px]"
          quality={100}
        />
      </div>
      <Video className="hidden md:block md:w-[110px] lg:w-[118px] xl:w-[166px] desktop:w-[199px] hover:scale-[1.02] ease-custom-bezier duration-500 cursor-pointer" />
    </div>
  );
}
