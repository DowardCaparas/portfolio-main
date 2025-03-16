import Image from "next/image";
import SectionTitle from "./ui/components/SectionTitle";
import TechStack from "./ui/components/TechStack";
import {
  accomplishments,
  certificates,
  projectArray,
  skills,
  socials,
} from "./lib/constants";
import Projects from "./ui/components/Projects";
import {
  GoToProjectsButton,
  Readmore,
  SendMail,
} from "./ui/components/Buttons";
import EducationCard from "./ui/components/EducationCard";
import CertificationCard from "./ui/components/CertificationCard";
import Links from "./ui/components/Links";

const Home = () => {
  const filteredProjectArray = projectArray.slice(0, 4);

  return (
    <main className="flex flex-col mt-8 md:px-32 px-4 transition-all duration-150 ease-in">
      {/* Image with details and buttons */}
      <div className="flex max-sm:flex-col gap-6 font-medium mb-16 items-center">
        <Image
          src="/images/doward.webp"
          alt="Doward Caparas"
          width={160}
          height={160}
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

          <span className="text-sm mt-1">dounhuward.c@gmail.com</span>

          <span className="my-4 text-sm flex-shrink font-semibold">
           Aspiring Full Stack Web Developer
          </span>

          <div className="flex max-sm:flex-col w-full gap-3">
            {/* Send email button */}
            <SendMail />
            {/* Go to project page button */}
            <GoToProjectsButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          <div className="flex gap-10 flex-col">
            {/* About section */}
            <section className="section_title card">
              <SectionTitle title="About" iconUrl="/info.svg" />
              <p>
                I&apos;m a full-stack web developer from the Philippines. I
                build responsive and scalable web applications using Next.js,
                TypeScript, SQL, and PostgreSQL. My expertise lies in front-end
                development with React.js and Tailwind CSS, ensuring efficiency
                and responsiveness. <br />
                <br />
                I&apos;ve learned the difference between static and dynamic
                rendering, and I know how to use React Server Actions to fetch
                data directly from my database—without relying on useState or
                useEffect hooks. I&apos;m always exploring new techniques to
                refine my skills and create seamless web experiences.
              </p>
            </section>

            {/* Tech stack section */}
            <section className="section_title card">
              <SectionTitle title="Tech Stack" iconUrl="/layers.svg" />
              <TechStack />
            </section>
          </div>

          {/* Project section */}
          <section className="section_title card">
            <SectionTitle title="Recent Projects" iconUrl="/panels.svg" />

            <span className="text-sm ml-3 font-medium">
              Click or tap a project to explore it.
            </span>

            <div className="grid gap-7 grid-cols-1 mt-2 p-3">
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
        </div>

        {/* Experience section */}
        <section className="section_title card">
          <SectionTitle title="Experience" iconUrl="/shieldcheck.svg" />
          <div className="inline-grid">
            <span className="font-medium">
              Systems and Facility Management Dept.
            </span>
            <span className="text-sm">P. IMES Corporation · Internship</span>
          </div>
          <ul className="px-5 mt-2">
            {accomplishments.map((skill) => (
              <li key={skill} className="list-disc">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills section */}
        <section className="section_title card">
          <SectionTitle title="Skills" iconUrl="/gear.svg" />
          <ul className="px-5">
            {skills.map((skill) => (
              <li key={skill} className="list-disc">
                {skill}
              </li>
            ))}
          </ul>
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

        <div className="flex gap-10 max-sm:flex-col">
          {/* Outside coding section */}
          <section className="section_title card">
            <SectionTitle title="Outside of coding" iconUrl="/bookopen.svg" />
            <p>
              When I&apos;m not coding, I&apos;m diving into React, MDN, and
              Next.js docs, playing my saxophone in a marching band, staying
              updated with IT content creators, or earning extra cash through
              TikTok affiliate marketing. <br /> <br />I also unwind by watching
              movies to keep stress at bay and exploring hobbies like space
              science and creative brainstorming to stay inspired.
            </p>
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

        {/* Education section */}
        <section className="section_title card">
          <SectionTitle title="Education" iconUrl="/graduationcap.svg" />
          <EducationCard />
        </section>

        {/* Links section */}
        <section className="section_title card">
          <SectionTitle title="Links" iconUrl="/link.svg" />

          <div className="flex flex-col items-start gap-4">
            {socials.map((social) => (
              <Links
                key={social.name}
                name={social.name}
                iconUrl={social.iconUrl}
                url={social.url}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center flex flex-col my-10 text-sm">
          <span>&copy; 2025 Dounhuward B. Caparas</span>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </main>
  );
};

export default Home;
