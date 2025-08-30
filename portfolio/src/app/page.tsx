"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons (as components for reusability) ---

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);


// --- Main Portfolio Page Component ---

export default function PortfolioPage() {
  
  // --- Data for your portfolio ---
  const portfolioData = {
    name: "Alvin Ben George",
    title: "Full Stack Developer & Creative Technologist",
    location: "Chennai, TN, India",
    email: "alvinallen333@gmail.com",
    socials: {
      github: "https://github.com/alvinbengeorge", // Replace with your actual GitHub URL
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
            liveUrl: "#",
            repoUrl: "#"
        },
        {
            name: "TalkToUrDB",
            description: "Engineered a conversational AI application using the Gemini API to translate natural language queries into executable SQL commands, lowering the technical barrier for database interaction.",
            tags: ["Gemini API", "SQL", "Conversational AI", "Python"],
            liveUrl: "#",
            repoUrl: "#"
        },
        {
            name: "Alfred Discord Bot",
            description: "Founded and directed a global team of 12 developers to create a feature-rich Discord bot, growing the user base to over 250,000 across 300+ servers.",
            tags: ["Python", "Discord.py", "Open Source", "Community"],
            liveUrl: "#",
            repoUrl: "#"
        },
        {
            name: "Wearable Parkinson's Detection",
            description: "Developed an ESP32-powered wearable for real-time motion analysis to aid early detection of Parkinson's, using a custom algorithm to differentiate tremors.",
            tags: ["Embedded Systems", "ESP32", "Healthcare", "C++"],
            liveUrl: "#",
            repoUrl: "#"
        },
        {
            name: "Campus Web SRM",
            description: "Spearheaded the frontend redesign for a campus web app, improving usability for 5,000+ students by integrating features like calendar and schedule sync.",
            tags: ["Frontend", "React.js", "UI/UX", "JavaScript"],
            liveUrl: "#",
            repoUrl: "#"
        },
        {
            name: "Project KZBLOGS",
            description: "Architected a scalable backend using FastAPI and MongoDB for a high-traffic campus blog, serving over 5,000 students as a central information hub.",
            tags: ["Backend", "FastAPI", "MongoDB", "Python"],
            liveUrl: "#",
            repoUrl: "#"
        }
    ],
    achievements: [
        {
            name: "HACKNOVA '24 (Winner - 1st Prize)",
            description: "Achieved 1st place out of 100+ teams by developing a full-stack educational platform. Integrated AR tools and a live chatbot for an immersive learning experience.",
            tags: ["Next.js", "FastAPI", "AR", "Full Stack"],
        },
        {
            name: "INNOFUSION '25 (1st Runner Up)",
            description: "Secured 2nd place for a full-stack app enabling real-time, voice-controlled interactions in restaurants to optimize operations and reduce staff workload.",
            tags: ["FastAPI", "Next.js", "Voice Control"],
        },
        {
            name: "HACKSTREET 1.0 (1st Runner Up)",
            description: "Won 2nd place among 70+ teams for an AI-powered content app, cutting average API response time from 5.3s to 1.2s and implementing an automated FAQ system.",
            tags: ["Backend", "AI", "Performance"],
        },
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
  
    const [activeSection, setActiveSection] = useState('experience');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sectionRefs = {
        experience: useRef(null),
        projects: useRef(null),
        achievements: useRef(null),
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs]);

    const navLinks = [
        { id: 'experience', title: 'Experience' },
        { id: 'projects', title: 'Projects' },
        { id: 'achievements', title: 'Achievements' },
    ];

  // --- JSX Structure ---
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <div className="container mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-3 lg:gap-16">
        
        {/* Left Column: Header, Nav, Socials */}
        <header className="lg:col-span-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{portfolioData.name}</h1>
            <h2 className="mt-3 text-lg md:text-xl font-medium text-cyan-400">{portfolioData.title}</h2>
            <p className="mt-4 max-w-xs text-gray-400">{portfolioData.summary}</p>
            
            <nav className="hidden lg:block mt-12" aria-label="In-page navigation">
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className={`group flex items-center py-2 transition-all duration-300`}>
                      <span className={`mr-4 h-px w-8 bg-gray-500 transition-all duration-300 group-hover:w-16 group-hover:bg-white ${activeSection === link.id ? 'w-16 bg-white' : ''}`}></span>
                      <span className={`text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white ${activeSection === link.id ? 'text-white' : ''}`}>
                        {link.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-5 mt-8 lg:mt-0">
              <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <span className="sr-only">Email</span>
                <MailIcon className="w-6 h-6" />
              </a>
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                 <span className="sr-only">GitHub</span>
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="w-6 h-6" />
              </a>
          </div>
        </header>

        {/* Right Column: Main Content */}
        <main className="lg:col-span-2 pt-12 lg:py-24">
          {/* Experience Section */}
          <section id="experience" ref={sectionRefs.experience} className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500/30 pb-2">Experience & Leadership</h3>
            <div className="space-y-8">
              {portfolioData.experience.map((job, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-cyan-400">{job.role}</h4>
                      <p className="text-white font-medium">{job.company}</p>
                    </div>
                    <p className="text-gray-400 text-sm whitespace-nowrap mt-2 sm:mt-0">{job.period}</p>
                  </div>
                  <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                    {job.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects" ref={sectionRefs.projects} className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500/30 pb-2">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolioData.projects.map((project, index) => (
                      <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg flex flex-col hover:shadow-cyan-500/20 transition-shadow duration-300">
                          <h4 className="text-xl font-semibold text-cyan-400 mb-2">{project.name}</h4>
                          <p className="text-gray-300 flex-grow">{project.description}</p>
                          <div className="flex flex-wrap gap-2 my-4">
                              {project.tags.map(tag => (
                                  <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                              ))}
                          </div>
                          <div className="flex items-center space-x-4 mt-auto pt-4">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                  Live Demo <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
                            </a>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                  Source Code <GithubIcon className="w-4 h-4 ml-1.5" />
                            </a>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Key Achievements Section */}
          <section id="achievements" ref={sectionRefs.achievements} className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500/30 pb-2">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolioData.achievements.map((achievement, index) => (
                      <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg flex flex-col hover:shadow-cyan-500/20 transition-shadow duration-300">
                          <h4 className="text-xl font-semibold text-cyan-400 mb-2">{achievement.name}</h4>
                          <p className="text-gray-300 flex-grow">{achievement.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                              {achievement.tags.map(tag => (
                                  <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500/30 pb-2">Tech Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {portfolioData.techStack.map(category => (
                    <div key={category.category} className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-4">{category.category}</h4>
                        <ul className="space-y-2">
                            {category.skills.map(skill => (
                                <li key={skill} className="text-gray-300">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500/30 pb-2">Education</h3>
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400">{portfolioData.education.degree}</h4>
              <p className="text-white mt-1">{portfolioData.education.university}</p>
              <p className="text-gray-400 text-sm mt-1">{portfolioData.education.period}</p>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="text-center py-6 border-t border-gray-700/50 mt-16">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}


