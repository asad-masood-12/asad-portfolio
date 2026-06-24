export const personalInfo = {
  name: "Asad Ullah Masood",
  role: "AI Engineer",
  location: "Lahore, Pakistan",
  phone: "+92 303 5554535",
  email: "asadullahmasood1005@gmail.com",
  linkedin: "https://www.linkedin.com/in/asad-ullah-masood/",
  github: "https://github.com/asad-masood-12",
  summary:
    "AI Engineer with experience building and deploying real-world AI systems, including LLM-based applications, RAG pipelines, and voice-driven solutions. Strong background in designing multi-agent workflows and integrating modern AI APIs into scalable backend systems. Experienced in translating business requirements into practical, production-ready solutions using FastAPI, Docker, and cloud infrastructure.",
  typingTexts: [
    "Building LLM-Powered Applications",
    "Designing Multi-Agent Systems",
    "Engineering RAG Pipelines",
    "Crafting Voice-Driven AI Solutions",
    "Deploying Scalable AI Infrastructure",
  ],
  stats: [
    { label: "Projects Delivered", value: 8 },
    { label: "AI Models Deployed", value: 12 },
    { label: "LeetCode Problems", value: "150+" },
    { label: "Technologies Used", value: "40+" },
  ],
};

export const education = {
  degree: "Bachelor of Science in Data Science",
  year: "2026",
  university: "University of Management and Technology (UMT)",
  location: "Lahore, Pakistan",
};

export const experience = [
  {
    title: "Associate AI Engineer",
    company: "Aug AI",
    period: "Mar 2025 – Present",
    location: "Lahore, Pakistan",
    highlights: [
      "End-to-End AI Delivery: Directed design and deployment of advanced AI/ML solutions including LLM integrations, RAG pipelines, and multi-agent systems, ensuring scalability, accuracy, and efficiency.",
      "Client & Stakeholder Management: Owned client relationships from requirement gathering to delivery, led stakeholder presentations, and collaborated with business development to secure and execute projects.",
      "Architecture & Strategy: Designed system architectures, workflows, and technical documentation, translating business requirements into scalable specifications and production-ready applications.",
    ],
  },
  {
    title: "AI Intern",
    company: "Techionik",
    period: "Jan 2025 – Mar 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Contributed to AI/ML solution development including LLM integrations, data pipelines, and model deployment workflows under senior engineer mentorship.",
      "Gained hands-on experience with RAG systems, vector databases, NLP frameworks, and cloud infrastructure during a structured internship program.",
    ],
  },
];

export const skillCategories = [
  {
    title: "LLMs & AI APIs",
    icon: "brain",
    skills: [
      "OpenAI",
      "Claude (Anthropic)",
      "Groq",
      "Gemini",
      "Llama",
      "DeepSeek",
      "BERT",
      "Hugging Face",
    ],
  },
  {
    title: "AI Development",
    icon: "workflow",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG Systems",
      "Agentic Workflows",
    ],
  },
  {
    title: "ML & Deep Learning",
    icon: "layers",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "CNNs",
      "Transformers",
    ],
  },
  {
    title: "Computer Vision",
    icon: "eye",
    skills: ["OpenCV", "YOLO", "FaceNet", "VGG", "ResNet"],
  },
  {
    title: "Voice & Audio",
    icon: "mic",
    skills: [
      "Voice Agents (STT/TTS)",
      "LiveKit",
      "Deepgram",
      "Twilio",
      "OpenAI Realtime API",
      "Whisper",
      "VAD",
      "Speaker Diarization",
    ],
  },
  {
    title: "Data Science",
    icon: "chart",
    skills: [
      "Pandas",
      "NumPy",
      "Scipy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (S3, EC2)", "Docker", "Celery", "Redis"],
  },
  {
    title: "Backend & Databases",
    icon: "database",
    skills: [
      "FastAPI",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "FAISS",
      "Qdrant",
      "Pinecone",
      "Vector Databases",
    ],
  },
  {
    title: "Tools & Collaboration",
    icon: "tool",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira"],
  },
];

export const projects = [
  {
    title: "RoomiAI",
    subtitle: "AI-Powered Hotel Reservation System",
    tech: [
      "Python",
      "LiveKit",
      "Deepgram",
      "Groq LLM",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Next.js",
      "Docker",
    ],
    highlights: [
      "Engineered a voice-enabled hotel booking system using LiveKit Agents framework for real-time WebRTC audio streaming with Deepgram for speech-to-text and text-to-speech, and Groq LLM for natural language understanding, intent classification, and multi-turn conversational response generation.",
      "Built modular service architecture with 13 FastAPI REST endpoints for full CRUD booking lifecycle, backed by PostgreSQL on Supabase with async SQLAlchemy ORM, automated Gmail SMTP email notifications, and tax-aware pricing.",
      "Implemented robust voice-to-action pipeline with 7 agent function tools, speech-to-text normalization, guest capacity and room inventory guardrails with row-level locking to prevent double bookings; containerized with Docker.",
    ],
    color: "#6366f1",
  },
  {
    title: "Mira AI",
    subtitle: "Intelligent Code Modernization & Security Platform",
    tech: [
      "LangGraph",
      "FastAPI",
      "React/Vite",
      "MongoDB",
      "Celery",
      "Redis",
      "Qdrant",
      "Groq",
      "OpenAI",
      "Anthropic",
      "SonarQube",
      "Docker",
    ],
    highlights: [
      "Architected a language-agnostic code modernization platform where users connect a testing server over SSH, create a project pointing at their codebase, and run AI-driven analysis workflows.",
      "Built multi-agent LangGraph system delivering: 0–100 project health scoring, compliance/security reports across OWASP, PCI-DSS, ISO 27001, HIPAA, GDPR, and SOC 2 via SonarQube + LLM enrichment, and a four-step version-hop modernization pipeline.",
      "Developed a RAG layer using Qdrant vector database with web-scraped migration documentation for accurate, up-to-date migration references.",
    ],
    color: "#8b5cf6",
  },
  {
    title: "EU Grant Application AI Assistant",
    subtitle: "Automated Business Plan Generation",
    tech: [
      "Python",
      "LangGraph",
      "OpenAI GPT-4",
      "python-docx",
      "openpyxl",
      "FastAPI",
      "Docker",
    ],
    highlights: [
      "Architected multi-agent LLM system for automated business plan generation and startup evaluation, achieving a 70%+ reduction in manual application preparation effort.",
      "Implemented specialized agents using python-docx and openpyxl to read and inspect existing Word and Excel grant documents, extracting already-completed sections before intelligently filling remaining fields.",
      "Deployed 7+ specialized agents covering financial planning, market analysis, compliance checking, and technical documentation with multilingual AI support.",
    ],
    color: "#ec4899",
  },
  {
    title: "FURBD RAG Donor Chatbot",
    subtitle: "Charity Knowledge Assistant",
    tech: ["Python", "LangChain", "Groq API", "FAISS", "BM25", "FastAPI", "RAGAS"],
    highlights: [
      "Designed a production-grade RAG chatbot for FURBD, a UK charity, combining 5 website URLs and 2 PDF documents into a unified ingestion pipeline with semantic tag filtering.",
      "Engineered a weighted hybrid retrieval system (70% FAISS dense / 30% BM25 sparse) using large 800-token chunks with 300-token overlap.",
      "Built a session-aware RESTful API with multi-turn conversational memory enabling stateful donor interactions with metadata-enriched citations.",
    ],
    color: "#14b8a6",
  },
  {
    title: "AI Customer Retention System",
    subtitle: "License Plate & Churn Intelligence",
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "YOLOv8",
      "EasyOCR",
      "Scikit-learn",
      "Groq",
      "Stripe",
      "Twilio",
      "Chart.js",
      "Streamlit",
    ],
    highlights: [
      "Built a FastAPI backend with MongoDB serving REST APIs for detection, transactions, analytics; integrated YOLO v8 license plate detection with EasyOCR and CLAHE + morphological-operations preprocessing.",
      "Engineered a three-model ML pipeline: ChurnPredictor (GradientBoosting, 14 features), CustomerSegmentation (RandomForest, 7 features), and RFM analysis.",
      "Integrated Groq API (LLaMA 3.3-70B) for JSON-structured staff recommendations; automated transaction flow with Stripe payment processing and Chart.js dashboards.",
    ],
    color: "#f59e0b",
  },
  {
    title: "PopStream",
    subtitle: "Dynamic Ad Placement System",
    tech: ["Python", "PyQt", "YOLOv8", "OpenCV", "Computer Vision"],
    highlights: [
      "Built a PyQt desktop application with real-time object detection for contextual advertisement placement using computer vision algorithms.",
      "Achieved 85% accuracy in object recognition for dynamic content delivery using fine-tuned YOLO models with custom CNN architectures.",
      "Developed an ad inventory management system matching detected objects with relevant advertisements from a structured catalog.",
    ],
    color: "#ef4444",
  },
  {
    title: "AI-Powered Resume Matching Platform",
    subtitle: "Intelligent Recruitment Tool",
    tech: [
      "Python",
      "OpenAI GPT",
      "FastAPI",
      "PyMuPDF",
      "python-docx",
      "Semantic Similarity",
    ],
    highlights: [
      "Developed an intelligent resume parsing system using OpenAI GPT for structured data extraction from PDF, DOCX, and image-based formats.",
      "Implemented semantic matching algorithms with embedding-based similarity scoring, achieving 95% recruiter satisfaction in candidate shortlisting.",
      "Created a scoring mechanism identifying the top 20% of applicants per role with explainable ranking breakdowns.",
    ],
    color: "#3b82f6",
  },
];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Andrew Ng — Coursera",
    icon: "award",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Andrew Ng — Coursera",
    icon: "award",
  },
  {
    title: "NLP Specialization",
    issuer: "Andrew Ng — Coursera",
    icon: "award",
  },
  {
    title: "150+ LeetCode Problems",
    issuer: "SQL & Python — Algorithms, Data Structures, Query Optimization",
    icon: "code",
  },
];
