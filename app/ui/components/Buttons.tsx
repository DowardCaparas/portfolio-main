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

export const SendMail = ({
  label,
  iconUrl,
}: {
  label: string;
  iconUrl: string;
}) => {
  const handleClick = () => {
    window.location.href =
      "mailto:dounhuward.c@gmail.com?subject=Hello&body=How are you?";
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 flex gap-3 bg-black text-white justify-center items-center 
      w-2/3 rounded-lg"
    >
      <Image
        src={iconUrl}
        alt={label}
        width={18}
        height={18}
        className="object-contain"
      />
      <span className="text-sm">{label}</span>
    </button>
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

export const ProjectCard = ({ path, name, description }: ProjectCardProps) => {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="border p-5 flex flex-col rounded-lg hover_project_card"
    >
      <span className="font-bold text-sm">{name}</span>
      <span className="text-sm">{description}</span>
    </Link>
  );
};
