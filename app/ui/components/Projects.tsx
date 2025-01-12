"use client";

import { ProjectArrayProps } from "@/app/lib/definition";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ProjectCard, ProjectCardButton } from "./Buttons";

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
        <div className="border p-5 flex flex-col rounded-lg card">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="object-contain w-full mb-4"
          />
          <div className="flex justify-between items-center">
            <span className="font-bold">{name}</span>
            <div className="flex gap-4">
              <ProjectCardButton path={github} imgURL="/github.svg" alternative="github"/>
              <ProjectCardButton path={url} imgURL="/arrowup.svg" alternative="arrow up"/>
            </div>
          </div>
          <span className="text-sm font-medium">{type}</span>
          <span className="text-sm">{description}</span>
          <div className="flex-wrap flex gap-2 mt-4">
            {technologies?.map((tech) => (
              <span key={tech} className="tech_stack">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <ProjectCard
          path={url}
          name={name}
          description={description}
          url={url}
        />
      )}
    </>
  );
};

export default Projects;
