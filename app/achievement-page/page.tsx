import Image from "next/image";
import { Back } from "../ui/components/Buttons";

const AchievementPage = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 w-full transition-all duration-150 ease-in mt-10">
      <h2 className="font-bold text-2xl mb-6">Achievements</h2>
      <Back path="/" />
      <div className="flex flex-col gap-4 items-center mt-20">
        <Image
          src="/images/BestCapstone.webp"
          alt="Best Capstone"
          width={800}
          height={800}
          className="object-contain"
        />
        <span className="font-bold text-xl my-5">Best Capstone Award</span>
        <span className="text-justify indent-10 lg:w-[75%] md:[w-80%] w-[95%] leading-10">
          This was the day we received the Certificate for Best Capstone Award
          at our school for our project,{" "}
          <i className="text-sm">
            Simian: A Mobile Educational Game for Primary Level in Learning
            Space Science
          </i>
          . My team and I were so happy—it was the moment we had been working
          for. As the programmer of the team, I remembered all the late nights
          we spent thinking about how to build the system. Seeing our hard work
          pay off felt amazing. We couldn&apos;t have done it without God&apos;s
          help and the support of each other. <br />
          <p className="indent-10">
            Our project was created using Unity3D and C#. It is a 2D game with
            fun features to help kids learn easily. The game teaches about
            planets, constellations, galaxies, and special materials found on
            certain planets. It includes three mini-games: Planet Adventure,
            Word Puzzle, and Sliding Puzzle.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AchievementPage;
