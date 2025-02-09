import Image from "next/image";
import SectionTitle from "./ui/components/SectionTitle";
import TechStack from "./ui/components/TechStack";
import { certificates, projectArray, socials } from "./lib/constants";
import Projects from "./ui/components/Projects";
import {
  GoToProjectsButton,
  Readmore,
  SendMail,
} from "./ui/components/Buttons";
import EducationCard from "./ui/components/EducationCard";
import CertificationCard from "./ui/components/CertificationCard";
import Socials from "./ui/components/Socials";

const Home = () => {
  const filteredProjectArray = projectArray.slice(0, 4);

  return (
    <main className="flex flex-col">

      {/* Image with details and buttons */}
      <div className="flex max-sm:flex-col gap-4 font-medium mb-16 items-center">
        <Image
          src="/images/doward.webp"
          alt="Doward Caparas"
          width={185}
          height={185}
          className="rounded-lg max-sm:w-[70%]"
        />
        <div className="flex flex-col max-sm:items-center max-sm:w-[70%]">
          <h1 className="font-bold text-xl ">Doward Caparas</h1>

          {/* Location with icon */}
          <div className="flex gap-1">
            <Image
              src="/mappin.svg"
              alt="map pin"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-sm">Cavite, Philippines</span>
          </div>
          <span className="my-4 text-sm flex-shrink">Full Stack Web Developer</span>

          <div className="inline-grid w-full gap-3">
            {/* Send email button */}
            <SendMail />
            {/* Go to project page button */}
            <GoToProjectsButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* About section */}
        <section className="section_title card">
          <SectionTitle title="About" iconUrl="/info.svg" />
          <p className="text-sm">
            I&apos;m a full-stack web developer from the Philippines. I build
            responsive and scalable web applications using Next.js, TypeScript,
            SQL, and PostgreSQL. My expertise lies in front-end development with
            React.js and Tailwind CSS, ensuring efficiency and responsiveness.{" "}
            <br />
            <br />
            I&apos;ve learned the difference between static and dynamic
            rendering, and I know how to use React Server Actions to fetch data
            directly from my database—without relying on useState or useEffect
            hooks. I&apos;m always exploring new techniques to refine my skills
            and create seamless web experiences.
          </p>
        </section>

        <div className="flex gap-2 max-sm:flex-col">
          {/* Tech stack section */}
          <section className="section_title card">
            <SectionTitle title="Tech Stack" iconUrl="/layers.svg" />
            <TechStack />
          </section>

          {/* Achievement section */}
          <section className="section_title card">
            <SectionTitle title="Achievement" iconUrl="/trophy.svg" />
            <div className="achievement_card">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/medal.svg"
                  alt="medal"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="font-bold text-xl">Best Capstone</span>
              </div>
              <span className="font-medium">Mobile game</span>
              <p className="mt-2 text-sm">
                Simian: A Mobile Educational Game for Primary Level in Learning
                Space Science
              </p>
              <div className="flex justify-between items-center">
                <Readmore />
                <i className="text-sm">August 2023</i>
              </div>
            </div>
          </section>
        </div>

        {/* Project section */}
        <section className="section_title card">
          <SectionTitle title="Projects" iconUrl="/panels.svg" />

          <span className="text-sm ml-3 font-medium">
            Click or tap a project to explore it.
          </span>

          <div className="grid gap-5 sm:grid-cols-2 mt-4 p-3">
            {filteredProjectArray.map((project) => (
              <Projects
                key={project.name}
                name={project.name}
                image={project.image}
                github={project.github}
                url={project.url}
                description={project.description}
              />
            ))}
          </div>
        </section>

        {/* Education section */}
        <section className="section_title card">
          <SectionTitle title="Education" iconUrl="/graduationcap.svg" />
          <EducationCard />
        </section>

        {/* Certificates section */}
        <section className="section_title card">
          <SectionTitle
            title="Recent Certification"
            iconUrl="/shieldcheck.svg"
          />
          <div className="flex flex-col gap-2">
            {certificates.map((cert) => (
              <div key={cert.name}>
                <CertificationCard
                  name={cert.name}
                  from={cert.from}
                  url={cert.url}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Outside coding section */}
        <section className="section_title card">
          <SectionTitle title="Outside of coding" iconUrl="/bookopen.svg" />
          <p className="text-sm">
            When I&apos;m not coding, I&apos;m diving into React, MDN, and
            Next.js docs, playing my saxophone in a marching band, staying
            updated with IT content creators, or earning extra cash through
            TikTok affiliate marketing. <br /> <br />I also unwind by watching
            movies to keep stress at bay and exploring hobbies like space
            science and creative brainstorming to stay inspired.
          </p>
        </section>

        {/* Connect section */}
        <section className="section_title card">
          <SectionTitle title="Connect" iconUrl="/mail.svg" />

          <span className="text-sm">Email:</span>
          <div className="bg-[#eeeeee] w-full p-3 font-medium mb-4 mt-2">
            dounhuward.c@gmail.com
          </div>

          <span className="text-sm">Social links:</span>
          <div className="flex gap-4 mt-2">
            {socials.map((social) => (
              <Socials
                key={social.name}
                name={social.name}
                iconUrl={social.iconUrl}
                url={social.url}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center flex flex-col mt-10 text-sm">
          <span>&copy; 2025 Dounhuward B. Caparas</span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </main>
  );
};

export default Home;
