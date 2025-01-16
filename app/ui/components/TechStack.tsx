const techStackArray = [
  "React",
  "Next.js",
  "Tailwind",
  "SQL",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];
  
const TechStack = () => {
  return (
    <div className="flex-wrap flex gap-2">
     {techStackArray.map((techstack) => (
            <span key={techstack} className="tech_stack">
                {techstack}
            </span>
        ))}
    </div>
       
  );
};

export default TechStack;
