/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEVELOPER_INFO = {
  name: "Jinsiya A",
  role: "Full Stack Developer | AI & Data Science Student",
  summary: "B.Tech Artificial Intelligence and Data Science student with strong skills in programming, data analysis, and problem-solving. Passionate about building AI-powered applications and scalable web systems.",
  cgpa: 8.3,
  location: "Palakkad, Kerala, India",
  postalCode: "678503",
  contact: {
    github: "https://github.com/Jinsiya",
    email: "jinsiyajinnu@gmail.com",
    leetcode: "https://leetcode.com/u/Jinsiya_A/",
    linkedin: "https://www.linkedin.com/in/jinsiya/",
    phone: "+919633355213",
  },
  typewriter: [
    "AI & Data Science Student",
    "Full Stack Developer",
    "Problem Solver",
  ],
  experience: [
    {
      title: "Dev Hackathon",
      organization: "Shri Sakthi Engineering & Technology College",
      date: "Mar 2026",
      details: [
        "Participated as a development team member",
        "Developed an OCR-based document automation web system",
        "Focused on invoice data extraction"
      ],
      linkProjectId: "apoies"
    },
    {
      title: "TuskerSense Hackathon Project",
      organization: "Dhaanish Ahmed Institute of Technology",
      date: "Sep 2025",
      details: [
        "Worked on elephant movement detection system for rural safety"
      ]
    },
    {
      title: "Leadership Role",
      organization: "Coding Competition",
      date: "Feb 2026",
      details: [
        "Led a coding competition managing execution and coordination"
      ]
    }
  ],
  projects: [
    {
      id: "apoies",
      title: "APOIES",
      featured: true,
      aim: "End-to-end intelligent invoice extraction and automated bookkeeping system.",
      idea: "APOIES (Automated Processing of Invoices & Enterprise Systems) leverages state-of-the-art OCR and Large Language Models to transform unstructured billing documents into high-fidelity structured data, eliminating manual entry errors.",
      working: [
        "Hybrid OCR Layer: Utilizes adaptive preprocessing to handle low-quality scan/photos of invoices.",
        "Semantic Parsing: Gemini API analyzes text layout to identify key-value pairs (VAT, Net Amount, Line Items).",
        "LLM Validation: Cross-references extracted sums with line item totals to ensure mathematical consistency.",
        "Data Export: Generates standardized JSON/CSV formats for seamless ERP integration.",
        "Audit Trail: Maintains an original-to-digital mapping for verification and compliance."
      ],
      techStack: ["React", "TypeScript", "Tesseract.js", "Gemini Pro Vision", "Tailwind CSS"],
      badge: "Best Innovative Solution",
      github: "https://github.com/Jinsiya/APOIES.git",
    },
    {
      id: "smartex",
      title: "SmartEx AU",
      featured: false,
      aim: "Next-generation academic copilot for Anna University (AU) students.",
      idea: "SmartEx AU is a comprehensive RAG-based (Retrieval-Augmented Generation) educational platform that provides curriculum-aligned resources and an AI tutor trained on official syllabi and previous year question patterns.",
      working: [
        "Curriculum Mapping: Intelligent organization of resources by regulation, department, and semester.",
        "RAG Chatbot: Custom-tuned AI that searches specifically within provided university notes to prevent hallucinations.",
        "Exam Prediction: Analyzes historical question frequency to highlight high-priority topics.",
        "Automated Summarization: Condenses large chapters into bulleted study guides for quick revision.",
        "Multi-Mark Generation: AI provides structured answers specifically formatted for 2/5/13 mark AU exam standards."
      ],
      techStack: ["React", "PostgreSQL", "Node.js", "OpenAI (v4)", "LangChain", "RAG Architecture"],
      features: [
        "Regulation-specific content",
        "Context-aware AI Tutoring",
        "Dark-mode optimized study UI",
        "Semantic Search for Syllabus"
      ],
      github: "https://github.com/Jinsiya/smartex-au",
    }
  ],
  skills: {
    languages: ["Java", "C", "C++", "HTML", "JavaScript"],
    frameworks: ["React"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ"],
    concepts: ["Backend Development", "AI Basics"]
  },
  spokenLanguages: [
    { name: "English", script: "E", lang: "Latin" },
    { name: "Malayalam", script: "മ", lang: "Malayalam" },
    { name: "Tamil", script: "த", lang: "Tamil" },
    { name: "Hindi", script: "ह", lang: "Devanagari" }
  ],
  softSkills: [
    { name: "Adaptability", icon: "🌱" },
    { name: "Flexibility", icon: "🔄" },
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Time Management", icon: "⏳" }
  ],
  certifications: [
    { name: "IT for NON IT", issuer: "TCS iON" },
    { name: "INDUSTRY 4.0 WITH 5G AND 6G", issuer: "Reliance Skill Development" },
    { name: "Data Management", issuer: "TCS iON" },
    { name: "Introduction to machine learning", issuer: "Microsoft" }
  ],
  certificationRepo: "https://github.com/Jinsiya/Certifications",
  resumeImage: "/input_file_1.png"
};
