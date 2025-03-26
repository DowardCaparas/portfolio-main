const EducationCard = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-10 grid-cols-1">
      <div className="p-6 flex flex-col rounded-lg items-start gap-2 bg-gray-100">
        <span className="font-bold text-xl">Cavite State University - Naic</span>
        <span className="mb-4 font-medium">
          Bachelor of Science in Information Technology <br />
          <span className="italic">(2019 - 2024)</span>
        </span>
        <p>
          For my capstone project, I created Simian: A
          Mobile Educational Game for Primary Level in Learning Space Science,
          where I worked as both the programmer and UI/UX designer using Unity3D
          with C#. The project earned the Best Capstone award, and I was also
          recognized as an Academic Achiever for the years 2021-2023.
        </p>
      </div>
      <div className="p-6 flex flex-col rounded-lg items-start gap-2 bg-gray-100">
        <span className="font-bold text-xl">Granby Colleges of Science and Technology Inc.</span>
        <span className="mb-4 font-medium">
        Information and Communications Technology with a major in Programming <br />
        <span className="italic">(2017 - 2019)</span>
        </span>
        <p>
          For my final project, I built a Voting System using VB.NET and worked as the
          programmer. I graduated with honors and was proud of the work I did.
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
