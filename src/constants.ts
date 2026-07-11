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
      id: "ai-summarizer",
      title: "AI Summarizer",
      featured: false,
      aim: "AI-powered web application that automatically generates concise summaries from lengthy texts.",
      idea: "AI Text Summarizer leverages OpenAI's GPT models through an Express backend to transform voluminous text documents, reports, and articles into highly digestible summaries with built-in history tracking and modern glassmorphism features.",
      working: [
        "Advanced NLP summarization: Uses state-of-the-art GPT models to digest paragraphs and extract core themes.",
        "Interactive Input: Rich UI with character counters, real-time feedback, and dynamic sizing.",
        "Dynamic History Engine: Saves past summaries locally with custom searchable indexes and creation timestamps.",
        "Instant Clip Actions: One-click clipboard utilities to streamline sharing summarized content."
      ],
      techStack: ["React", "Vite", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
      badge: "AI-Powered NLP",
      github: "https://github.com/Jinsiya/AI-Summarizer-",
    },
    {
      id: "simple-language-translator",
      title: "AI Translator",
      featured: false,
      aim: "Intelligent, multi-language translation platform featuring instantaneous vocal output and persistence.",
      idea: "AI Translator bridges linguistic gaps by combining Streamlit's reactive UI with deep-translator algorithms and Google Text-to-Speech (gTTS), enabling fluid text translations across 8+ major regional Indian and international languages.",
      working: [
        "Auto Language Detection: Instantly senses source languages and adapts target schemas dynamically.",
        "Deep Translation Pipeline: Integrates deep-translator Google translate wrappers to resolve linguistic nuances.",
        "Vocal Output Engine: Generates high-fidelity audio streams for translated content via Google TTS.",
        "Persistent JSON Logs: Auto-serializes queries and translations locally for seamless offline retrieval."
      ],
      techStack: ["Python", "Streamlit", "deep-translator", "gTTS", "JSON Storage", "CSS3"],
      badge: "Cross-Lingual Engine",
      github: "https://github.com/Jinsiya/CodeAlpha_SimpleLanguageTranslator",
    },
    {
      id: "faq-chatbot",
      title: "FAQ Chatbot System",
      featured: false,
      aim: "Conversational NLP agent delivering intelligent answers through custom similarity matching.",
      idea: "This FAQ Chatbot harnesses scikit-learn's TF-IDF vectorization and cosine similarity calculations to provide instant, typo-tolerant responses to user queries from an extensible pre-defined knowledge base.",
      working: [
        "Text Preprocessing Pipeline: Runs tokenization, stemming, and lemmatization on raw user input.",
        "Intelligent Math Similarity: Fits cosine metrics on TF-IDF matrices to determine the highest-confidence responses.",
        "Confidence Meter: Exposes the exact percentage accuracy of the chatbot's matched results to the user.",
        "Typo Tolerance & Fallback: Gracefully maps spelling variations and employs partial matches for high reliability."
      ],
      techStack: ["Python", "Flask", "NLTK", "scikit-learn", "JavaScript", "HTML5/CSS3"],
      badge: "NLP Similarity",
      github: "https://github.com/Jinsiya/CodeAlpha_ChatbotsforFAQs",
    },
    {
      id: "face-detection-tracking",
      title: "VisionAI Tracker",
      featured: false,
      aim: "Real-time, deep-learning based object detection and multi-target tracking system from video feeds.",
      idea: "VisionAI is a real-time computer vision platform powered by state-of-the-art YOLO and MobileNet SSD models to detect and assign unique trackable IDs to over 20+ common object categories in camera streams.",
      working: [
        "Real-time webcam video: Utilizes OpenCV streams and thread-safe Flask pathways for low-latency live frames.",
        "Advanced Tracking Architecture: Incorporates the SORT algorithm (Kalman Filter + Hungarian matching) for ID preservation.",
        "YOLO Object Classification: Identifies and highlights pedestrians, vehicles, and pets with high-confidence bounding boxes.",
        "Interactive Statistics Hub: Charts live FPS metrics, cumulative target counts, and distribution parameters on a rich dark dashboard."
      ],
      techStack: ["Python", "OpenCV", "Flask", "YOLOv8", "SORT Algorithm", "JavaScript"],
      badge: "Computer Vision",
      github: "https://github.com/Jinsiya/CodeAlpha_Object--detection-and-tracking",
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
