"use client";

import Image from "next/image";
import Link from "next/link";
import { ShowCredential } from "./Buttons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const CertificateCardForHome = ({
  name,
  from,
  url,
}: {
  name: string;
  from: string;
  url: string;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate_card"
    >
      <div className=" flex flex-col ">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm">{from}</span>
      </div>
      <div>
        <Image
          src="/arrowup.svg"
          alt="arrow up"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export const CertificateCardForPage = ({
  name,
  from,
  url,
  image,
  date,
  description,
}: {
  name: string;
  from: string;
  url: string;
  image: string;
  date: string,
  description: string;
}) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="fade-up" className="flex flex-col gap-14">
      <div
        className="bg-gray-200 p-10 flex max-xl:flex-col 
          max-xl:items-center text-center gap-10 rounded-lg"
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-contain"
        />
        <div
          className="flex flex-col justify-between items-start max-xl:items-center 
            gap-6"
        >
          <span className="text-xl font-semibold">{name}</span>
          <span className="">From: <span className="font-medium">{from}</span></span>
          <span className="">Earned on: <span className="font-medium">{date}</span></span>
          <p className="xl:text-justify md:w-[80%] leading-7">{description}</p>
          <ShowCredential url={url} />
        </div>
      </div>
    </div>
  );
};
