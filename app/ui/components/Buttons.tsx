"use client";

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
    <Link href={path} className="flex items-center gap-2 mb-10 mt-6">
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

export const SendMail = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:dounhuward.c@gmail.com?subject=Hello&body=How are you?";
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 flex gap-1 ring-black ring-1 justify-center rounded-lg
       w-full bg-white hover:shadow-md hover:shadow-[#222222] duration-150 ease-in
      active:scale-90 hover:scale-105 transition"
    >
      <Image
        src='/mail.svg'
        alt="message icon"
        width={15}
        height={15}
        className="object-contain"
      />
      <span className="text-sm">Send Email</span>
    </button>
  );
};

export const GoToProjectsButton = () => {
  return (
    <Link
      href='/project-page'
      className="p-2 flex gap-1 ring-black ring-1 justify-center rounded-lg
       w-full bg-black hover:shadow-md hover:shadow-[#222222] duration-150 ease-in
      active:scale-90 hover:scale-105 transition text-white"
    >
      <Image
        src='/panels.svg'
        alt="message icon"
        width={15}
        height={15}
        className="object-contain"
      />
      <span className="text-sm">Projects</span>
    </Link>
  );
};

export const Readmore = () => {
  return (
    <div className="mt-5 mb-2">
        <Link
      href="/achievement-page"
      className="bg-white p-3 text-black rounded-lg text-sm hover:bg-slate-50 active:bg-slate-100"
    >
      Read more
    </Link>
    </div>
  );
}
