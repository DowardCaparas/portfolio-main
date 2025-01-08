import Image from "next/image";
import SectionTitle from "./ui/components/SectionTitle";
import TechStack from "./ui/components/TechStack";
import { certificates, projectArray } from "./lib/constants";
import Projects from "./ui/components/Projects";
import { SendMail } from "./ui/components/Buttons";
import EducationCard from "./ui/components/EducationCard";
import CertificationCard from "./ui/components/CertificationCard";

const Home = () => {
  const filteredProjectArray = projectArray.slice(0, 4);

  return (
    <main className="flex flex-col">
      <div className="flex gap-6 font-medium mb-10">
        <Image
          src="/images/Doward.jpg"
          alt="Doward Caparas"
          width={150}
          height={150}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Doward Caparas</h1>
          <span className="text-sm flex gap-2">
            <Image
              src="/mappin.svg"
              alt="map pin"
              width={18}
              height={18}
              className="object-contain"
            />
            Cavite, Philippines
          </span>
          <span className="my-4">Full Stack Web Developer</span>
          <SendMail label="Send Email" iconUrl="/mail.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* About section */}
        <section className="section_title card">
          <SectionTitle title="About" iconUrl="/info.svg" />
          <p>
            I&apos;m a full-stack web developer from the Philippines. I build
            responsive web apps using ReactJS and Tailwind CSS. I&apos;m
            currently sharpening my skills in front-end development with NEXT.js
            and TypeScript, and I&apos;ve been exploring UI libraries to improve
            efficiency and responsiveness. While I&apos;m focused on front-end
            work right now, I&apos;m also looking forward to learning more about
            back-end development in the future.
          </p>
        </section>

        {/* Tech stack section */}
        <section className="section_title card">
          <SectionTitle title="Tech Stack" iconUrl="/layers.svg" />
          <TechStack />
        </section>

        {/* Project section */}
        <section className="section_title card">
          <SectionTitle title="Projects" iconUrl="/panels.svg" />
          <div className="grid gap-2 sm:grid-cols-2">
            {filteredProjectArray.map((project) => (
              <div key={project.name}>
                <Projects
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  url={project.url}
                  description={project.description}
                />
              </div>
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
          <p>
            When I&apos;m not coding, I&apos;m diving into React, MDN, and Next.js docs,
            playing my saxophone in a marching band, staying updated with IT
            content creators, or earning extra cash through TikTok affiliate
            marketing. <br /> <br />
            I also unwind by watching movies to keep stress at bay
            and exploring hobbies like space science and creative brainstorming
            to stay inspired.
          </p>
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
