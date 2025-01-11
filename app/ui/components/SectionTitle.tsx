import Image from "next/image";
import { ViewAll } from "./Buttons";

const SectionTitle = ({
  title,
  iconUrl,
}: {
  title: string;
  iconUrl: string;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 mb-5">
        <Image
          src={iconUrl}
          alt="info icon"
          width={18}
          height={18}
          className="object-contain"
        />
        <span className="font-bold text-lg">{title}</span>
      </div>
      <div className="mt-1">
      {title === "Projects" && <ViewAll path="/project-page" />}
      </div>
    </div>
  );
};

export default SectionTitle;
