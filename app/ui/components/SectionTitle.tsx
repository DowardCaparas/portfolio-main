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
      <div className="flex gap-2 mb-4">
        <Image
          src={iconUrl}
          alt="info icon"
          width={25}
          height={25}
          className="object-contain"
        />
        <span className="font-bold text-lg">{title}</span>
      </div>
      <div className="mt-1">
      {title === "Recent Projects" && <ViewAll path="/project-page" />}
      </div>
    </div>
  );
};

export default SectionTitle;
