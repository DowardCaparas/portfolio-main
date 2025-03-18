import { Back } from "../ui/components/Buttons";
import { certificates } from "../lib/constants";
import { CertificateCardForPage } from "../ui/components/CertificationCard";

const page = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 w-full transition-all duration-150 ease-in mt-10">
      <h2 className="font-bold text-2xl mb-6">Certificates</h2>
      <span>
        You can check it by tapping or clicking the &quot;show credential&quot; button
      </span>

      <Back path="/" />

      <div className="flex flex-col gap-14">
        {certificates.map((cert) => (
          <CertificateCardForPage
            key={cert.name}
            name={cert.name}
            from={cert.from}
            url={cert.url}
            image={cert.image}
            description={cert.description}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
