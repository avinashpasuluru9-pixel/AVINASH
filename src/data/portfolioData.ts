/**
 * AVINASH - PORTFOLIO CONFIGURATION & EDITABLE DATA
 * Easily update links, personal details, skills, and projects here.
 */

export const GITHUB_URL = "https://github.com/avinashpasuluru9-pixel";
export const LINKEDIN_URL = "https://www.linkedin.com/in/avinash-pasuluru-8a1b29431/";
export const EMAIL_ADDRESS = "YOUR_EMAIL_HERE";

export interface InfoCard {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: 'Basic' | 'Beginner' | 'Learning';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technology: string;
  level: string;
  repoStatus: 'Repository Coming Soon' | 'Available';
  githubUrl?: string;
  codeSnippet: string;
  demoType: 'grades' | 'voting';
}

export interface GenAICard {
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Upcoming';
}

export const profileConfig = {
  name: "AVINASH",
  badge: "CSE (AI/ML) • First Year Student",
  mainHeading: "Hi, I'm AVINASH",
  secondaryHeading: "Computer Science & AI/ML Student",
  introduction: "I'm a first-year B.Tech Computer Science and Engineering (AI/ML) student exploring programming, development, Generative AI, and problem solving through hands-on projects.",
  githubUrl: GITHUB_URL,
  linkedinUrl: LINKEDIN_URL,
  emailPlaceholder: EMAIL_ADDRESS,
};

export const aboutConfig = {
  heading: "About Me",
  paragraphs: [
    "I'm AVINASH, a first-year B.Tech student pursuing Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning.",
    "I am currently building my foundation in programming, web development, Generative AI, and problem solving. I enjoy experimenting with technology and turning simple ideas into small working projects.",
    "My current goal is to strengthen my fundamentals, learn new technologies step by step, and gradually build more meaningful AI and software projects.",
  ],
  infoCards: [
    {
      title: "Student",
      subtitle: "B.Tech CSE (AI/ML)",
      iconName: "GraduationCap",
    },
    {
      title: "Current Focus",
      subtitle: "Programming + AI",
      iconName: "Cpu",
    },
    {
      title: "Experience",
      subtitle: "Learning & Building",
      iconName: "Hammer",
    },
    {
      title: "Approach",
      subtitle: "Learn → Build → Improve",
      iconName: "Sparkles",
    },
  ],
};

export const educationConfig = {
  degree: "B.Tech — Computer Science & Engineering (AI/ML)",
  status: "Currently Studying",
  year: "First Year",
  description: "Building a strong foundation in computer science, programming, Artificial Intelligence, Machine Learning, and software development.",
  timeline: "2024 – 2028 (Undergraduate)",
  focusAreas: [
    "Programming Fundamentals (Python)",
    "Web Development Basics (HTML, CSS, JS)",
    "Mathematics for Computing & AI logic",
    "Problem Solving & Algorithmic Thinking",
  ],
};

export const skillsConfig: SkillCategory[] = [
  {
    title: "Programming",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Basic" },
    ],
  },
  {
    title: "Web Development",
    iconName: "Layout",
    skills: [
      { name: "HTML", level: "Basic" },
      { name: "CSS", level: "Basic" },
      { name: "JavaScript", level: "Basic" },
    ],
  },
  {
    title: "AI",
    iconName: "Sparkles",
    skills: [
      { name: "Generative AI", level: "Beginner" },
      { name: "AI Tools", level: "Beginner" },
      { name: "Prompt Engineering", level: "Learning" },
    ],
  },
  {
    title: "Core Skills",
    iconName: "BrainCircuit",
    skills: [
      { name: "Problem Solving", level: "Learning" },
      { name: "Logical Thinking", level: "Learning" },
      { name: "Project Building", level: "Basic" },
      { name: "Continuous Learning", level: "Learning" },
    ],
  },
];

export const projectsConfig: ProjectItem[] = [
  {
    id: "project-01",
    number: "Project 01",
    title: "Student Grade Calculator",
    description: "A beginner Python project that calculates student grades based on marks. It helped me understand variables, conditions, calculations, and basic programming logic.",
    technology: "Python",
    level: "Beginner Project",
    repoStatus: "Repository Coming Soon",
    codeSnippet: `# Student Grade Calculator in Python
marks = float(input("Enter marks (0-100): "))

if marks >= 90:
    grade = "A+ (Outstanding)"
elif marks >= 80:
    grade = "A (Excellent)"
elif marks >= 70:
    grade = "B (Good)"
elif marks >= 60:
    grade = "C (Satisfactory)"
elif marks >= 50:
    grade = "D (Pass)"
else:
    grade = "F (Needs Improvement)"

print(f"Result: {grade}")`,
    demoType: "grades",
  },
  {
    id: "project-02",
    number: "Project 02",
    title: "Voting Eligibility Calculator",
    description: "A simple Python project that checks whether a person is eligible to vote based on age. This project helped me understand conditional statements and decision-making logic.",
    technology: "Python",
    level: "Beginner Project",
    repoStatus: "Repository Coming Soon",
    codeSnippet: `# Voting Eligibility Calculator in Python
age = int(input("Enter your age: "))

if age >= 18:
    print("Eligible to vote in democratic elections!")
else:
    years_left = 18 - age
    print(f"Not eligible yet. You can vote in {years_left} year(s).")`,
    demoType: "voting",
  },
];

export const genAIConfig = {
  heading: "Exploring Generative AI",
  badge: "Currently Learning",
  description: "I'm currently exploring Generative AI and learning how modern AI tools can help with creativity, software development, problem solving, and building useful applications.",
  cards: [
    {
      title: "AI Tools",
      description: "Exploring modern AI platforms and tools.",
      iconName: "Wrench",
      tag: "Platform Exploration",
    },
    {
      title: "Prompt Engineering",
      description: "Learning how to communicate effectively with AI systems.",
      iconName: "TerminalSquare",
      tag: "Context & Clarity",
    },
    {
      title: "AI-Assisted Development",
      description: "Exploring how AI can support coding and development.",
      iconName: "Code",
      tag: "Coding Assistance",
    },
    {
      title: "AI Applications",
      description: "Learning how Generative AI can be used to build useful applications.",
      iconName: "Cpu",
      tag: "Practical Use Cases",
    },
  ],
};

export const journeyConfig: {
  heading: string;
  steps: JourneyStep[];
  closingText: string;
} = {
  heading: "Learning Journey",
  steps: [
    {
      step: "01",
      title: "Programming Fundamentals",
      description: "Learning Python and programming logic.",
      status: "In Progress",
    },
    {
      step: "02",
      title: "Web Development",
      description: "Learning HTML, CSS and JavaScript fundamentals.",
      status: "In Progress",
    },
    {
      step: "03",
      title: "Generative AI",
      description: "Exploring AI tools and prompt engineering.",
      status: "In Progress",
    },
    {
      step: "04",
      title: "AI/ML Fundamentals",
      description: "Starting to learn Artificial Intelligence and Machine Learning concepts.",
      status: "Upcoming",
    },
    {
      step: "05",
      title: "Future Projects",
      description: "Building increasingly advanced software and AI projects.",
      status: "Upcoming",
    },
  ],
  closingText: "The journey has just started.",
};

export const githubSectionConfig = {
  heading: "Build. Learn. Share.",
  text: "Explore my projects, experiments, and coding journey on GitHub.",
  buttonText: "Visit GitHub",
  url: GITHUB_URL,
};

export const connectConfig = {
  heading: "Let's Connect",
  text: "I'm always interested in learning, building projects, discovering new technologies, and connecting with fellow students and developers.",
  cards: [
    {
      type: "GitHub",
      handle: "@avinashpasuluru9-pixel",
      buttonText: "View GitHub",
      url: GITHUB_URL,
      iconName: "Github",
      actionType: "link",
    },
    {
      type: "LinkedIn",
      handle: "Avinash Pasuluru",
      buttonText: "Connect on LinkedIn",
      url: LINKEDIN_URL,
      iconName: "Linkedin",
      actionType: "link",
    },
    {
      type: "Email",
      handle: EMAIL_ADDRESS,
      buttonText: "Send Email",
      url: `mailto:${EMAIL_ADDRESS}`,
      iconName: "Mail",
      actionType: "copy",
      note: "Editable placeholder: Replace YOUR_EMAIL_HERE with your email address",
    },
  ],
};

export const footerConfig = {
  name: "AVINASH",
  role: "B.Tech CSE (AI/ML) Student",
  quote: "Learning today. Building tomorrow.",
  copyright: "© 2026 AVINASH. All rights reserved.",
};
