"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialsProps } from "@/app/lib/definition";

const Socials = ({ name, url, iconUrl }: SocialsProps) => {
  return (
    <Link href={url} className="bg-[#eeeeee] w-16 p-3 rounded-lg 
    hover:bg-[#dadada] hover:scale-105 active:scale-95">
      <Image
        src={iconUrl}
        alt={name}
        width={25}
        height={25}
        className="object-contain self-center mx-auto"
      />
    </Link>
  );
};

export default Socials;
