import Image from "next/image";
import Link from "next/link";

const CertificationCard = ({
  name,
  from,
  url,
}: {
  name: string;
  from: string;
  url: string;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate_card segment_card_hover bg-[#eeeeee]"
    >
      <div className=" flex flex-col ">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm">{from}</span>
      </div>
      <div>
        <Image
          src="/arrowup.svg"
          alt="arrow up"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default CertificationCard;
