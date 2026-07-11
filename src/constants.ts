/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEVELOPER_INFO = {
  name: "Jinsiya A",
  role: "AI/ML Engineer & Full-Stack Developer",
  summary: "B.Tech Artificial Intelligence & Data Science student specializing in NLP, computer vision, and full-stack development (React, Flask, Python). I architect intelligence layers and deploy high-accuracy, scalable machine learning models into optimized, intuitive user environments.",
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
    "AI/ML Engineer",
    "Full-Stack Developer",
  ],
  experience: [
    {
      title: "Lead AI Developer (APOIES)",
      organization: "Shri Sakthi Engineering & Technology College",
      date: "Mar 2026",
      details: [
        "Engineered an end-to-end intelligent invoice extraction and automated bookkeeping system (APOIES) as a winning hackathon solution.",
        "Developed custom OCR integrations with Tesseract.js and Gemini-based semantic analysis for structural metadata mapping.",
        "Achieved 98.2% parse reliability, reducing data-entry cycles from minutes to under 3 seconds per invoice."
      ],
      linkProjectId: "apoies"
    },
    {
      title: "TuskerSense",
      organization: "Dhaanish Ahmed Institute of Technology",
      date: "Sep 2025",
      details: [
        "Engineered an IoT and deep-learning elephant detection system for rural perimeter and agricultural safety."
      ]
    },
    {
      title: "Technical Coordinator (Coding Club)",
      organization: "Dhaanish Ahmed Institute of Technology",
      date: "Feb 2026",
      details: [
        "Led logistical coordination and challenge problem formulation for collegiate competitive programmers.",
        "Automated grading evaluation loops, accelerating response times and optimizing code sandbox testing environments.",
        "Organized interactive peer-learning workshops to mentor students in algorithm design and data structures."
      ]
    }
  ],
  projects: [
    {
      id: "apoies",
      title: "APOIES",
      featured: true,
      aim: "End-to-end intelligent invoice extraction and automated bookkeeping system.",
      badge: "Best Innovative Solution",
      github: "https://github.com/Jinsiya/APOIES.git",
      problem: "Unstructured, manually typed physical invoices lead to ~15% clerical database errors and slow accounting loops.",
      solution: "An end-to-end extraction engine combining Tesseract.js pre-processing with Gemini API for layout-aware parsing.",
      result: "98.2% extraction accuracy across standard templates, reducing enterprise bookkeeping cycles to under 3 seconds.",
      working: [
        "Hybrid OCR Layer: Utilizes adaptive preprocessing to handle low-quality scan/photos of invoices.",
        "Semantic Parsing: Gemini API analyzes text layout to identify key-value pairs (VAT, Net Amount, Line Items).",
        "LLM Validation: Cross-references extracted sums with line item totals to ensure mathematical consistency.",
        "Data Export: Generates standardized JSON/CSV formats for seamless ERP integration.",
        "Audit Trail: Maintains an original-to-digital mapping for verification and compliance."
      ],
      techStack: ["React", "TypeScript", "Tesseract.js", "Gemini Pro", "Tailwind CSS"],
    },
    {
      id: "ai-summarizer",
      title: "AI Summarizer",
      featured: false,
      aim: "AI-powered web application that automatically generates concise summaries from lengthy texts.",
      badge: "AI-Powered NLP",
      github: "https://github.com/Jinsiya/AI-Summarizer-",
      problem: "Voluminous academic papers and corporate reports cause severe cognitive overload and decrease analytical speed by 40%.",
      solution: "Full-stack NLP text summarizer deploying OpenAI GPT model endpoints via a highly optimized Node/Express gateway.",
      result: "85% document compression ratio with zero semantic distortion, boosting document ingestion speeds by 4.5x.",
      working: [
        "Advanced NLP summarization: Uses state-of-the-art GPT models to digest paragraphs and extract core themes.",
        "Interactive Input: Rich UI with character counters, real-time feedback, and dynamic sizing.",
        "Dynamic History Engine: Saves past summaries locally with custom searchable indexes and creation timestamps.",
        "Instant Clip Actions: One-click clipboard utilities to streamline sharing summarized content."
      ],
      techStack: ["React", "Vite", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
    },
    {
      id: "simple-language-translator",
      title: "AI Translator",
      featured: false,
      aim: "Intelligent, multi-language translation platform featuring instantaneous vocal output and persistence.",
      badge: "Cross-Lingual Engine",
      github: "https://github.com/Jinsiya/CodeAlpha_SimpleLanguageTranslator",
      problem: "Socio-linguistic barriers prevent real-time understanding across regional and international speech systems.",
      solution: "A modern translation portal combining Google Translate deep-translator layers with instant gTTS audio generation.",
      result: "Saves translations locally to persistent JSON, delivering bi-directional audio output in under 1.2 seconds.",
      working: [
        "Auto Language Detection: Instantly senses source languages and adapts target schemas dynamically.",
        "Deep Translation Pipeline: Integrates deep-translator Google translate wrappers to resolve linguistic nuances.",
        "Vocal Output Engine: Generates high-fidelity audio streams for translated content via Google TTS.",
        "Persistent JSON Logs: Auto-serializes queries and translations locally for seamless offline retrieval."
      ],
      techStack: ["Python", "Streamlit", "deep-translator", "gTTS", "JSON Storage"],
    },
    {
      id: "faq-chatbot",
      title: "FAQ Chatbot System",
      featured: false,
      aim: "Conversational NLP agent delivering intelligent answers through custom similarity matching.",
      badge: "NLP Similarity",
      github: "https://github.com/Jinsiya/CodeAlpha_ChatbotsforFAQs",
      problem: "Customer support desks face massive volumes of repetitive queries, raising staffing operational expenses.",
      solution: "A Flask-driven NLU agent that utilizes scikit-learn TF-IDF matrices and Cosine Similarity to serve direct solutions.",
      result: "94.7% accuracy matching typos and varied phrasings, resolving typical requests in under 150ms.",
      working: [
        "Text Preprocessing Pipeline: Runs tokenization, stemming, and lemmatization on raw user input.",
        "Intelligent Math Similarity: Fits cosine metrics on TF-IDF matrices to determine the highest-confidence responses.",
        "Confidence Meter: Exposes the exact percentage accuracy of the chatbot's matched results to the user.",
        "Typo Tolerance & Fallback: Gracefully maps spelling variations and employs partial matches for high reliability."
      ],
      techStack: ["Python", "Flask", "NLTK", "scikit-learn", "HTML5", "CSS3", "JavaScript"],
    },
    {
      id: "face-detection-tracking",
      title: "VisionAI Tracker",
      featured: false,
      aim: "Real-time, deep-learning based object detection and multi-target tracking system from video feeds.",
      badge: "Computer Vision",
      github: "https://github.com/Jinsiya/CodeAlpha_Object--detection-and-tracking",
      problem: "Legacy monitoring systems fail to locate and preserve identity vectors of multiple moving targets in dynamic zones.",
      solution: "Real-time CV platform deploying YOLOv8 / MobileNet models coupled with the SORT multi-object tracking system.",
      result: "Provides concurrent detection and bounding tracking for 20+ object classes at a solid 30+ frames per second.",
      working: [
        "Real-time webcam video: Utilizes OpenCV streams and thread-safe Flask pathways for low-latency live frames.",
        "Advanced Tracking Architecture: Incorporates the SORT algorithm (Kalman Filter + Hungarian matching) for ID preservation.",
        "YOLO Object Classification: Identifies and highlights pedestrians, vehicles, and pets with high-confidence bounding boxes.",
        "Interactive Statistics Hub: Charts live FPS metrics, cumulative target counts, and distribution parameters on a rich dark dashboard."
      ],
      techStack: ["Python", "OpenCV", "Flask", "YOLOv8", "SORT Algorithm", "NumPy"],
    }
  ],
  skills: {
    languages: ["Python", "Java", "C", "C++", "JavaScript"],
    aiml: ["scikit-learn", "NLTK", "YOLOv8", "OpenCV", "Gemini Pro Vision", "OpenAI API"],
    webdev: ["React", "Node.js", "Express", "Flask", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ"]
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
