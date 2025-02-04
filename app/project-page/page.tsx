import React from "react";
import { projectArray } from "../lib/constants";
import ProjectCard from "../ui/components/Projects";
import { Back } from "../ui/components/Buttons";

const ProductPage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl">Projects</h2>
      <span>Click or tap a project to explore it.</span>
      
      <Back path="/" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projectArray.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              type={project.type}
              image={project.image}
              technologies={project.technologies}
              url={project.url}
              github={project.github}
              description={project.description}
            />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
