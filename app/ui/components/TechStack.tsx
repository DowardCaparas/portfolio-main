const techStackArray = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SQL",
  "PostgreSQL",
  "Node.js",
  "GraphQL",
  "Git",
  "GitHub",
  "Vercel",
  "REST API"
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
