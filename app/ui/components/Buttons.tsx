"use client";

import { ProjectCardButtonProps, ProjectCardProps } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";

export const ViewAll = ({ path }: { path: string }) => {
  return (
    <Link href={path} className="flex items-center gap-2 text-sm">
      View All
      <Image
        src="/moveright.svg"
        alt="move right"
        width={18}
        height={18}
        className="object-contain"
      />
    </Link>
  );
};

export const Back = ({ path }: { path: string }) => {
  return (
    <Link href={path} className="flex items-center gap-2 text-sm mb-10 mt-6">
      <Image
        src="/moveleft.svg"
        alt="move left"
        width={18}
        height={18}
        className="object-contain"
      />
      Back
    </Link>
  );
};

export const ProjectCardButton = ({path, imgURL, alternative,}: ProjectCardButtonProps) => {
  return (
    <Link href={path} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgURL}
        alt={alternative}
        width={25}
        height={25}
        className="object-contain"
      />
    </Link>
  );
};

export const ProjectCard = ({ path, name, description, url }: ProjectCardProps) => {
  const customURL = url.slice(8);
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="border p-3 flex flex-col rounded-lg"
    >
      <span className="font-bold text-sm">{name}</span>
      <span className="text-sm">{description}</span>
      <span className="px-2 py-1 bg-[#eeeeee] text-sm z-50 mt-2">{customURL}</span>
    </Link>
  );
};

export const SendMail = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:dounhuward.c@gmail.com?subject=Hello&body=How are you?";
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 px-6 flex gap-2 ring-black ring-1 justify-center items-center rounded-lg
      w-40"
    >
      <Image
        src='/mail.svg'
        alt="message icon"
        width={18}
        height={18}
        className="object-contain"
      />
      <span className="text-sm">Send Email</span>
    </button>
  );
};
