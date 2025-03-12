"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialsProps } from "@/app/lib/definition";

const Links = ({ name, url, iconUrl }: SocialsProps) => {
  return (
    <div className="flex gap-6 py-4">
      <Image
        src={iconUrl}
        alt={name}
        width={40}
        height={40}
        className="object-contain self-center mx-auto"
      />
      <div className="inline-grid">
      <span className="font-semibold text-md">{name}</span>
      <Link href={url} className="text-blue-500 hover:underline text-sm p-1">{url}</Link>
      </div>
    </div>
  );
};

export default Links;
