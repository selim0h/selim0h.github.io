export const siteConfig = { // 'config'에서 'siteConfig'로 수정되었습니다.
  name: "Selim Oh",
  title: "Computer Engineering Student @ POSTECH",
  description: "Passionate about Compiler Optimization & System Security",
  accentColor: "#1d4ed8", 
  
  social: {
    email: "selim0h@postech.ac.kr",
    linkedin: "", // 링크가 있다면 넣으세요
    twitter: "", 
    github: "https://github.com/selim0h",
  },

  aboutMe: "I am a computer engineering student at POSTECH with a deep passion for compiler optimization and system security. My research focuses on Compiler-Introduced Security Bugs (CISBs) within the LLVM infrastructure. Currently, I am exploring how optimization passes can inadvertently introduce vulnerabilities.",

  skills: ["LLVM", "C/C++", "Compiler Design", "Linux Kernel Security", "Coq", "System Security"],

  projects: [
    {
      name: "CISB Detection Framework",
      description: "Developing an automated framework to detect security vulnerabilities (Compiler-Introduced Security Bugs) within the LLVM infrastructure.",
      link: "https://medium.com/@selim0h", // 본인 블로그 링크
      skills: ["LLVM", "C++", "Security"],
    },
    {
      name: "LISP-like Compiler",
      description: "Implemented a full compiler for a LISP-like language during an exchange semester at UC Berkeley (CS164).",
      link: "https://medium.com/@selim0h",
      skills: ["Python", "Compilers"],
    }
  ],

  experience: [
    {
      company: "WEST Program (Cyber Security Track)",
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
        "Completed CS164 (Compilers) and CS161 (Computer Security).",
        "Engaged in system security and software engineering projects."
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
        "Active member of security research group"
      ]
    }
  ]
};
