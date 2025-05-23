import React from "react";
import { projectArray } from "../lib/constants";

import { Back } from "../ui/components/Buttons";
import { ProjectCardForPage } from "../ui/components/Projects";

const ProductPage = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 w-full transition-all duration-150 ease-in mt-10">
      <h2 className="font-bold text-2xl mb-6">Projects</h2>
      <span>Click or tap a project to explore it.</span>
      
      <Back path="/" />

      <div className="grid md:gap-16 gap-10 sm:grid-cols-2">
        {projectArray.map((project, index) => (
            <ProjectCardForPage
              key={project.name + index}
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
    </div>
  );
};

export default ProductPage;
