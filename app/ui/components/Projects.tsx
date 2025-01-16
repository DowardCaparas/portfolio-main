"use client";

import { ProjectArrayProps, ProjectCardProps } from "@/app/lib/definition";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const newWindow = (path: string) => {
  window.open(path, "_blank");
};

const Projects = ({
  name,
  type,
  image,
  technologies,
  url,
  github,
  description,
}: ProjectArrayProps) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/project-page" ? (
        <div
          className="card inline-grid hover:shadow-md active:bg-[#f7f7f7]
           duration-200 transition ease-in "
        >
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className="object-contain w-full"
            />
            <div className="p-5 border-t flex-col flex">
              <div className="flex justify-between items-center">
                <span className="font-bold">{name}</span>
                {/* Github button */}
                <button
                  className="hover:scale-105 active:scale-100 transition-transform
                             duration-150 ease-in"
                  onClick={() => newWindow(github)}
                  aria-label="going to new window"
                >
                  <Image
                    src="/github.svg"
                    alt={name}
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </button>
              </div>

              <span className="text-sm font-medium">{type}</span>
              <span className="text-sm mt-2">{description}</span>

              <div className="flex-wrap flex gap-2 mt-4">
                {technologies?.map((tech) => (
                  <span key={tech} className="tech_stack">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <ProjectCard name={name} description={description} url={url} />
      )}
    </>
  );
};

const ProjectCard = ({ name, description, url }: ProjectCardProps) => {
  const customURL = url.slice(8);
  return (
    <button
      className="card_container project_card"
      onClick={() => newWindow(url)}
      aria-label="going to new window"
    >
      <span className="font-bold text-sm">{name}</span>
      <span className="text-sm">{description}</span>
      <span className="px-2 py-1 bg-[#eeeeee] text-sm z-50 mt-2">
        {customURL}
      </span>
    </button>
  );
};

export default Projects;
