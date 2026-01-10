export const portfolioData = {
  name: "Alvin Ben George",
  title: "Full Stack Developer & Creative Technologist",
  location: "Chennai, TN, India",
  email: "alvinallen333@gmail.com",
  socials: {
    github: "https://github.com/alvinbengeorge", 
    linkedin: "https://linkedin.com/in/alvinbengeorge",
  },
  summary: "A creative technologist and community builder dedicated to leveraging technology to create impactful solutions. With a strong foundation in full-stack development and a passion for leading collaborative projects, I am driven by the challenge of turning complex ideas into elegant, user-centric applications. Eager to contribute to a team that values innovation and social good.",
  experience: [
    {
      role: "Networking Trainee",
      company: "Bharat Sanchar Nigam Limited",
      period: "June 2024 - July 2024",
      description: [
        "Simulated and configured enterprise-level network topologies using Cisco Packet Tracer.",
        "Gained hands-on experience in network hardware, protocols, and the telecommunications business lifecycle."
      ]
    },
    {
      role: "Technical Lead",
      company: "Google Developers Group On Campus SRM",
      period: "2023 - Present",
      description: [
        "Spearheaded the development of the club's main project and managed the GitHub organization.",
        "Implemented an automation script for certificate generation, simplifying a key operational task."
      ]
    },
    {
      role: "Technical Lead",
      company: "SRMKZILLA (Mozilla Campus Club)",
      period: "2022 - Present",
      description: [
        "Led a technical team of 21 members in developing two major projects, driving a 12% performance increase for the main website.",
        "Architected and co-developed a new project using a FastAPI backend to automate manual club processes."
      ]
    },
    {
      role: "Backend Development",
      company: "Prasanna Law Firm",
      period: "April 2023 - Feb 2024",
      description: [
        "Engineered a backend API with Express.js and MongoDB to streamline internal operations, improving workflow efficiency by 30%.",
        "Integrated Amazon S3 for scalable file storage and management."
      ]
    }
  ],
  projects: [
    {
      name: "VandeBharat Info",
      description: "Engineered a full-stack application to deliver real-time tracking for the Vande Bharat train service. Designed a dynamic frontend to visualize live data.",
      tags: ["Next.js", "FastAPI", "Real-time Data"],
      repoUrl: "https://github.com/alvinbengeorge/vandebharat-info",
      liveUrl: "#"
    },
    {
      name: "TalkToUrDB",
      description: "Engineered a conversational AI application using the Gemini API to translate natural language queries into executable SQL commands, lowering the technical barrier for database interaction.",
      tags: ["Gemini API", "SQL", "Conversational AI", "Python"],
      liveUrl: "", 
      repoUrl: "https://github.com/alvinbengeorge/TalkToUrDB"
    },
    {
      name: "Alfred Discord Bot",
      description: "Founded and directed a global team of 12 developers to create a feature-rich Discord bot, growing the user base to over 250,000 across 300+ servers.",
      tags: ["Python", "Discord.py", "Open Source", "Community"],
      liveUrl: "#",
      repoUrl: "https://github.com/AlfredDiscordBot/alfred-discord-bot"
    },
    {
      name: "Wearable Parkinson's Detection",
      description: "Developed an ESP32-powered wearable for real-time motion analysis to aid early detection of Parkinson's, using a custom algorithm to differentiate tremors.",
      tags: ["Embedded Systems", "ESP32", "Healthcare", "C++"],
      liveUrl: "#",
      repoUrl: "https://github.com/alvinbengeorge/parkinson-project"
    },
    {
      name: "Campus Web SRM",
      description: "Spearheaded the frontend redesign for a campus web app, improving usability for 5,000+ students by integrating features like calendar and schedule sync.",
      tags: ["Frontend", "React.js", "UI/UX", "JavaScript"],
      liveUrl: "https://campusweb.vercel.app/", 
      repoUrl: "#"
    },
    {
      name: "Project KZBLOGS",
      description: "Architected a scalable backend using FastAPI and MongoDB for a high-traffic campus blog, serving over 5,000 students as a central information hub.",
      tags: ["Backend", "FastAPI", "MongoDB", "Python"],
      liveUrl: "#",
      repoUrl: "https://github.com/srm-kzilla/kzblogs"
    }
  ],
  achievements: [
    {
      name: "HackNova '24 (Winner - 1st Prize)",
      description: "Achieved 1st place out of 100+ teams by developing a full-stack educational platform. Integrated AR tools and a live chatbot for an immersive learning experience.",
      tags: ["Next.js", "FastAPI", "AR", "Full Stack"],
    },
    {
      name: "Innofusion '25 (2nd Prize)",
      description: "Secured 2nd place for a full-stack app enabling real-time, voice-controlled interactions in restaurants to optimize operations and reduce staff workload.",
      tags: ["FastAPI", "Next.js", "Voice Control"],
    },
    {
      name: "Hackstreet 1.0 (2nd Prize)",
      description: "Won 2nd place among 70+ teams for an AI-powered content app, cutting average API response time from 5.3s to 1.2s and implementing an automated FAQ system.",
      tags: ["Backend", "AI", "Performance"],
    },
    {
      name: "Healthathon (1st Prize)",
      description: "Developed a solution in less than 45 minutes to detect stress in a body using ESP32 and moisture sensors.",
      tags: ["Healthcare", "Innovation"],
    },
    {
      name: "Innofusion '24 (3rd Prize)",
      description: "Created a software solution that classifies heart disorders very quickly with the help of information provided by the user and scans",
      tags: ["Innovation"],
    },
    {
      name: "MediSpeak 2025 (2nd Prize)",
      description: "Presented the project to the research paper we wrote, a watch which has the capabilities of detecting Parkinsons disease using MPU6050 (a motion sensor)",
      tags: ["Healthcare", "Communication"],
    }
  ],
  education: {
    degree: "B.Tech in Electronics and Computer Engineering",
    university: "SRM Institute of Science and Technology",
    period: "2022 - 2026"
  },
  techStack: [
    { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C/C++"] },
    { category: "Frameworks / Libs", skills: ["FastAPI", "Next.js", "React.js", "Node.js"] },
    { category: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "AI/ML", skills: ["Pandas", "TensorFlow", "OpenCV", "Gemini API"] },
    { category: "Cloud & DevOps", skills: ["AWS", "GCP", "Docker", "NGINX", "CI/CD"] },
    { category: "Developer Tools", skills: ["Git", "GitHub", "Linux", "Streamlit"] }
  ]
};
