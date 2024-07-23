import React from "react";
import LogoImg from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

interface logoProps {
  className?: string;
}

export default function Logo({ className }: logoProps) {
  return <Image src={LogoImg} alt="Logo" className={className} />;
}
