export const siteConfig = { // 'config'에서 'siteConfig'로 수정
  name: "Selim Oh",
  title: "Computer Science & Engineering Student @ POSTECH",
  description: "Systems Security & Compiler Optimization Researcher. Currently exploring Compiler-Introduced Security Bugs (CISBs) at <a href='https://compsec.postech.ac.kr/' target='_blank' class='underline underline-offset-4 hover:text-blue-600 transition-colors font-medium'>POSTECH Compsec Lab</a>.",
  accentColor: "#1d4ed8", 
  
  social: {
    email: "selim0h@postech.ac.kr",
    linkedin: "",
    twitter: "", 
    github: "https://github.com/selim0h",
  },

  aboutMe: "I am a computer engineering student at POSTECH with a deep passion for compiler optimization and system security. My research focuses on Compiler-Introduced Security Bugs (CISBs) within the LLVM infrastructure. Currently, I am exploring how optimization passes can inadvertently introduce vulnerabilities.",

  skills: ["LLVM", "C/C++", "Compiler Design", "Linux Kernel Security", "Coq", "System Security"],

  projects: [
    {
      name: "CISB Detection Framework",
      description: "Developing an automated framework to detect security vulnerabilities (Compiler-Introduced Security Bugs) within the LLVM infrastructure.",
      link: "",
      skills: ["LLVM", "C++", "Security"],
    },
    {
      name: "LISP-like Compiler",
      description: "Implemented a full compiler for a LISP-like language during an exchange semester at UC Berkeley (CS164).",
      link: "",
      skills: ["OCaml", "Compilers"],
    }
  ],

  experience: [
    {
      company: "Korea-U.S. High-tech Youth Exchange Support Project (Cyber Security Track)",
      title: "Scholar",
      dateRange: "Nov 2024 - Present",
      bullets: [
        "Selected as a scholar for the Korea-U.S. Student Exchange Program.",
        "Focusing on advanced cybersecurity research and international collaboration."
      ],
    },
    {
      company: "UC Berkeley",
      title: "Exchange Student",
      dateRange: "Jan 2025 - May 2025",
      bullets: [
        "Completed CS164 (Programming Languages and Compilers)."
      ],
    }
  ],

  education: [
    {
      school: "POSTECH",
      degree: "B.S. in Computer Science and Engineering",
      dateRange: "2021 - 2027 (Expected)",
      achievements: [
        "Focus on Systems and Security",
        "Active member of <a href='https://compsec.postech.ac.kr/' target='_blank' class='underline underline-offset-4 hover:text-blue-600 transition-colors'>Compsec Lab</a>"
      ]
    }
  ]
};
