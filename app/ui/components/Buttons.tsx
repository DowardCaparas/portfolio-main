"use client";

import Image from "next/image";
import Link from "next/link";

export const ViewAll = ({ path }: { path: string }) => {
  return (
    <Link href={path} className="flex items-center gap-2 text-sm -mt-6">
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
    <Link href={path} className="flex items-center gap-2 mb-16 mt-10">
      <Image
        src="/moveleft.svg"
        alt="move left"
        width={18}
        height={18}
        className="object-contain"
      />
      <span className="font-medium">Back to home</span>
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
      className="px-4 py-2 flex gap-1 ring-black ring-1 justify-center rounded-lg
       w-full bg-white "
    >
      <span className="font-semibold">Send me an email</span>
    </button>
  );
};

export const GoToProjectsButton = () => {
  return (
    <Link
      href="/my-projects"
      className="p-2 flex gap-1 ring-black ring-1 justify-center rounded-lg
       w-full bg-black text-white"
    >
      <span className="font-semibold">Projects</span>
    </Link>
  );
};

export const Readmore = () => {
  return (
    <div className="mt-5 mb-2">
      <Link
        href="/my-achievements"
        className="bg-white p-3 text-black rounded-lg text-sm hover:bg-gray-200 active:bg-gray-300
        font-medium"
      >
        See Details
      </Link>
    </div>
  );
};

export const ShowCredential = ({ url }: { url: string }) => {
  const newWindow = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <button
      className="rounded-full py-2 px-6 bg-white ring-2 ring-black hover:bg-gray-100
      active:bg-gray-200 flex gap-4 items-center"
      onClick={() => newWindow(url)}
      aria-label="show credential to another window"
    >
      <span className="font-medium">Show Credential</span>
      <Image
        src="/arrowup.svg"
        alt="arrow up"
        width={18}
        height={18}
        className="object-contain"
      />
    </button>
  );
};
