import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  iitc,
  vf,
  chatbot,
  stock_trend,
  python,
  fastapi,
  cohere,
  chroma,
  langchain,
  pandas
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Dev",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "NLP",
    icon: backend,
  },
  {
    title: "Web Dev",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "langchain",
    icon: langchain,
  },
  {
    name: "fastAPI",
    icon: fastapi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ChromaDB",
    icon: chroma,
  },
  {
    name: "Cohere",
    icon: cohere,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Pandas",
    icon: pandas
  },
];


const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Indraprastha IT Cell (P) Ltd",
    icon: iitc,
    iconBg: "#383E56",
    date: "june 2021 - August 2021",
    points: [
      "Assisted in building and optimizing web applications, focusing on enhancing interactivity using JavaScript and related technologies.",
      "Collaborating with other developers to create online campaigns for elections.",
      "Utilized HTML, CSS, and JavaScript to build user-centric interfaces and optimize web applications for better performance.",
      "Integrated third-party APIs and tools to streamline campaign tracking and reporting, ensuring smooth operations across platforms.",
    ],
  },
  {
    title: "ML engineer Intern",
    company_name: "ValueFirst",
    icon: vf,
    iconBg: "#383E56",
    date: "Jan 2024 - Jan 2025",
    points: [
      "Developed an Open Source ChatBot using the Langchain, Ollama API and Phi-2 model by Microsoft, ensuring secure local processing and efficient functionality.",
      "Enhanced chatbot performance by implementing Cohere embeddings in ChromaDB, optimizing query processing and data retrieval.",
      "Improved response time by 50% through optimizations, including transitioning to Streamlit for faster and seamless integration.",
      "Gained foundational knowledge in NLP, machine learning, and explored FastAPI for building robust and efficient APIs.",
    ],
  },
  
];



const projects = [
  {
    name: "RAG ChatBot",
    description: "Designed an Open Source ChatBot integrating Microsoft’s Phi 2 model for advanced query responses. Incorporated Cohere embeddings with ChromaDB for efficient data storage and retrieval. Added functionalities like PDF uploads and user query handling to provide versatile user interaction.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient"
      },
      {
        name: "Langchain",
        color: "blue-text-gradient"
      },
      {
        name: "Phi-2",
        color: "pink-text-gradient"
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/ax-is/simple-chatbot",
  },
  {
    name: "Stock Trend Analysis",
    description: "Developed a tool to analyze stock trends by fetching data from Yahoo Finance, calculating statistics, and visualizing closing prices. Utilized pandas for data manipulation and matplotlib for plotting stock performance over custom date ranges.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient"
      },
      {
        name: "Pandas",
        color: "blue-text-gradient"
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient"
      }
    ],
    image: stock_trend,
    source_code_link: "https://github.com/ax-is/stock-trend",
    
  },
];

export { services, technologies, experiences, projects };
