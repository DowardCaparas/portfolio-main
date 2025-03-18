import Image from "next/image";

const SectionTitle = ({
  title,
  iconUrl,
}: {
  title: string;
  iconUrl: string;
}) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Image src={iconUrl} alt="info icon" width={25} height={25} />
      <span className="font-bold text-lg">{title}</span>
    </div>
  );
};

export default SectionTitle;
