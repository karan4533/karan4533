// Resume data structure for the terminal-style website

export interface ResumeData {
  about: string[];
  education: Array<{
    institution: string;
    degree: string;
    date: string;
    details?: string[];
  }>;
  projects: Array<{
    title: string;
    category: string;
    period: string;
    description: string[];
    link?: string;
  }>;
  skills: {
    programming: string[];
    databases: string[];
    tools: string[];
    interests: {
      technical: string[];
      nonTechnical: string[];
    };
  };
  certifications: string[];
  contact: {
    name: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export const resumeData: ResumeData = {
  about: [
    "Enthusiastic and adaptable fresher seeking opportunities to apply and expand skills in a dynamic, team-oriented environment.",
    "Passionate about continuous learning, problem solving, and effective contribution to organizational success."
  ],
  
  education: [
    {
      institution: "Vellore Institute of Technology - Andhra Pradesh",
      degree: "M.Tech Integrated Computer Science (Collaboration with Virtusa)",
      date: "Expected Dec 2026",
      details: ["CGPA: 8.15/10"]
    },
    {
      institution: "Navarasam Matriculation Higher Secondary School - Erode",
      degree: "Higher Secondary Education, Computer Science",
      date: "March 2021",
      details: ["Percentage: 82.3%"]
    },
    {
      institution: "Navarasam Matriculation Higher Secondary School - Erode",
      degree: "Secondary School Education (SSLC)",
      date: "March 2019",
      details: ["Percentage: 73%"]
    }
  ],
  
  projects: [
    {
      title: "Automating Logical Volume Management Across Distributed Servers in Data Centers",
      category: "Summer Internship Project",
      period: "June 2024 – July 2024",
      description: [
        "Developed a web-based tool for managing logical volumes in distributed data centers.",
        "Automated storage management, optimizing resource utilization and system efficiency.",
        "Integrated real-time dashboards, storage alerts, and performance monitoring features."
      ],
      link: "https://github.com/karan4533/lvm-project"
    },
    {
      title: "Attendance Management System",
      category: "Software Project Management",
      period: "May 2023 – Aug 2024",
      description: [
        "Built a Student Management System for enrollment, attendance, and user management.",
        "Implemented an intuitive interface for efficient data handling and attendance list downloads.",
        "Provided real-time insights for improved attendance management and reporting."
      ]
    },
    {
      title: "Intravenous Flow Monitor",
      category: "Engineering Clinics Project",
      period: "June 2021 – July 2022",
      description: [
        "Designed a system to measure and regulate the flow rate of IV fluids.",
        "Ensured precise delivery of fluids into the bloodstream via an IV catheter.",
        "Enhanced patient safety by maintaining accurate infusion rates."
      ]
    }
  ],
  
  skills: {
    programming: ["HTML", "CSS", "JavaScript", "Svelte", "React.js", "Hono.js", "Java"],
    databases: ["MySQL (Basics)", "Firebase Realtime DB", "MongoDB", "Redis", "Neo4j (Basics)"],
    tools: ["Cloudflare", "Netlify", "Canva", "Figma", "Google Docs", "PowerPoint", "MS Word", "Excel", "Git", "GitHub"],
    interests: {
      technical: ["Programming Languages", "Backend Development", "Database Management", "Responsive Design", "API Integration"],
      nonTechnical: ["Communication", "Problem-Solving", "Time Management", "Adaptability", "Teamwork"]
    }
  },
  
  certifications: [
    "National Hackathon 2022 – IIEC, VIT-AP",
    "Bootcamp on LLM Security (2025–2026) – Null Vijayawada",
    "Mobile Application Development – Blockchain Club",
    "MATLAB Onramp – Training Course",
    "Cybersecurity: Vulnerability Assessment and Patch Management – Syxsense",
    "Institute of Language Management (2016–2017)"
  ],
  
  contact: {
    name: "KARAN M.L",
    location: "Erode, Tamil Nadu",
    email: "mlkaran2004@gmail.com",
    phone: "+91 7448907020",
    linkedin: "linkedin.com/in/karan45",
    github: "github.com/karan4533"
  }
};

// ASCII art for terminal header
export const asciiHeader = `
 _    ____ ____  ____ _  _    _  _ _    
 |    |__| |__/  |__| |\\ |    |\\/| |    
 |___ |  | |  \\  |  | | \\|    |  | |___ 
                                         
 Terminal Resume - Type 'help' for available commands
`;

