
// Projects
const github = "https://github.com/DowardCaparas/";
const githubPages = "https://dowardcaparas.github.io/";

export const projectArray = [
  {
    name: "Book Keeper",
    type: "Web app",
    image: "/images/BookKeeper.webp",
    technologies: ["React", "Next.js", "TypeScript", "SQL", "PostgreSQL", "Vercel", "Tailwind"],
    url: "https://dcaparas-book-keeper.vercel.app",
    github: `${github}book-keeper`,
    description: `Book management system with customers, CRUD.`,
  },
  {
    name: "Payflow",
    type: "Web app",
    image: "/images/PayFlow.webp",
    technologies: ["React", "Next.js", "TypeScript", "SQL", "PostgreSQL", "Vercel"],
    url: "https://dcaparas-payflow.vercel.app",
    github: `${github}payflow`,
    description: `Invoice management system with customers, CRUD.`,
  },
  {
    name: "Content Summarizer AI",
    type: "Web app",
    image: "/images/AIContentSummarizer.webp",
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "OpenAI"],
    url: "https://dcaparas-content-summarizer.vercel.app",
    github: `${github}ai-content-summarizer`,
    description: `It can summarize the article or content.`,
  },
  {
    name: "Dishify Recipe",
    type: "Website",
    image: "/images/RecipeApp.webp",
    technologies: ["React", "Next.js", "TypeScript", "REST API", "Vercel", "Tailwind"],
    url: "https://dcaparas-dishify-recipe.vercel.app",
    github: `${github}recipe-app`,
    description: `A recipe app where users can select a dish and view its ingredients and instructions.`,
  },
  {
    name: "QR Code Generator",
    type: "Web app",
    image: "/images/QRCodeGenerator.webp",
    technologies: ["React", "Vite", "TypeScript", "Vercel", "Tailwind"],
    url: "https://dcaparas-qrcode-generator.vercel.app",
    github: `${github}qrcode-generator`,
    description: `QR Code generator, you can download it also as PNG or JPG.`,
  },
  {
    name: "Anime Vault",
    type: "Website",
    image: "/images/AnimeVault.webp",
    technologies: [
      "Tailwind",
      "React",
      "Next.js",
      "TypeScript",
      "Vercel",
    ],
    url: "https://dcaparas-anime-vault.vercel.app",
    github: `${github}anime_list`,
    description: `Infinite scroll for looking anime movies/series.`,
  },
  {
    name: "Weather App",
    type: "Web App",
    image: "/images/WeatherApp.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: `${githubPages}weather_app`,
    github: `${github}weather_app`,
    description: `Simple weather app, that allow users to enter city or country name to get data`,
  },
  {
    name: "ToDo App",
    type: "Web App",
    image: "/images/ToDoApp.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: `${githubPages}todoApp`,
    github: `${github}todoApp`,
    description: `Basic task manager, you can manage and monitor your tasks.`,
  },
  {
    name: "BinDec",
    type: "Web App",
    image: "/images/BinDec.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: "https://dcaparas-bin-dec.vercel.app",
    github: `${github}BinDec`,
    description: `Decimal to Binary converter and vice versa.`,
  },
  {
    name: "Portfolio Website",
    type: "Website",
    image: "/images/Sophia-Portfolio.webp",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    url: "https://sophia-site.vercel.app",
    github: `${github}sophia-portfolio`,
    description: `Single page website.`,
  },
  {
    name: "Portfolio Website",
    type: "Website",
    image: "/images/WebPortfolio.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: `${githubPages}portfolio`,
    github: `${github}portfolio`,
    description: `Single page website.`,
  },
  {
    name: "Calculator",
    type: "Web App",
    image: "/images/Calculator.webp",
    technologies: ["React", "Tailwind", "TypeScript", "Next.js"],
    url: `${githubPages}calculator`,
    github: `${github}calculator`,
    description: `Basic arethmetic calculator.`,
  },
  {
    name: "Day Counter",
    type: "Web App",
    image: "/images/DayCounter.webp",
    technologies: ["Tailwind", "React", "Next.js", "JavaScript"],
    url: `${githubPages}RemainingDayCounter`,
    github: `${github}RemainingDayCounter`,
    description: `The calculator that can count the remaining days between start and end date.`,
  },
];

// Certificates
const freeCodeCamp = "https://www.freecodecamp.org/certification/Dounhuward_B_Caparas/";

export const certificates = [
  {
    name: "SQL (Intermediate)",
    from: "HackerRank",
    url: `https://www.hackerrank.com/certificates/iframe/ec24b289f045`,
    image: `/images/SQL(Intermediate)Cert.webp`,
    date:"Mar 26, 2025",
    description: `It includes complex joins, unions, and sub-queries.`,
  },
  {
    name: "SQL (Basic)",
    from: "HackerRank",
    url: `https://www.hackerrank.com/certificates/iframe/ef81d36d6520`,
    image: `/images/SQL(Basic)Cert.webp`,
    date:"Mar 26, 2025",
    description: `It includes simple queries, relationships, and aggregators.`,
  },
  {
    name: "Problem Solving (Basic)",
    from: "HackerRank",
    url: `https://www.hackerrank.com/certificates/iframe/ec24b289f045`,
    image: `/images/ProblemSolving(Basic)Cert.webp`,
    date:"Mar 17, 2025",
    description: `It covers basic topics of Data Structures (such as Arrays, Strings) 
    and Algorithms (such as Sorting and Searching).`,
  },
  {
    name: "React (Basic)",
    from: "HackerRank",
    url: `https://www.hackerrank.com/certificates/iframe/57c3315cf170`,
    image: `/images/React(Basic)Cert.webp`,
    date:"Mar 17, 2025",
    description: `React (Basic) It covers topics like Basic Routing, Rendering Elements,
    State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.`,
  },
  {
    name: "Foundational C-Sharp with Microsoft",
    from: "freeCodeCamp",
    url: `${freeCodeCamp}foundational-c-sharp-with-microsoft`,
    image: `/images/FoundationalC-SharpCert.webp`,
    date:"Aug 25, 2024",
    description: `This certificate validates foundational knowledge of C#, including core syntax, 
    data structures, object-oriented programming principles, and error handling.`,
  },
  {
    name: "Responsive Web Design",
    from: "freeCodeCamp",
    url: `${freeCodeCamp}responsive-web-design`,
    image: `/images/ResponsiveWebDesignCert.webp`,
    date:"June 27, 2024",
    description: `It covers the principles of building responsive websites using HTML, CSS, and Flexbox, 
    ensuring a seamless experience across various screen sizes.`,
  },
];

// Socials
export const socials = [
  {
    name: "Linkedin",
    iconUrl: "/linkedin.svg",
    url: 'https://www.linkedin.com/in/dounhuwardcaparas'
  },
  {
    name: "Github",
    iconUrl: "/github.svg",
    url: 'https://github.com/DowardCaparas'
  },
  {
    name: "HackerRank",
    iconUrl: "/hackerrank.svg",
    url: 'https://www.hackerrank.com/profile/dounhuward_c'
  },
];

export const skills = [
  "Proficiency in JavaScript (ES6+) and TypeScript",
  "Experienced with React.js and Next.js for building static and dynamic websites",
  "Skilled in responsive design with Tailwind CSS for all screen sizes",
  "Experienced with static and dynamic rendering",
  "Good understanding of SEO principles",
  "Comfortable with Git and GitHub for version control",
  "Experienced in fetching data from a SQL PostgreSQL database",
  "Experienced in fetching data from an API",
  "Strong understanding of the DOM and its manipulation",
];

export const accomplishments = [
  "Maintained system units, ensuring optimal performance",
  "Resolved network issues, minimizing downtime",
  "Created engaging photo and video content for various projects",
  "Accurately encoded employee data to streamline processes",
  "Monitored CCTV systems, providing detailed reports for security enhancement"
];

export const navlinks = [
  {label: "Home", url: "/" },
  {label: "Achievements", url: "/my-achievements" },
  {label: "Certificates", url: "/my-certificates" },
  {label: "Projects", url: "/my-projects" },
];
