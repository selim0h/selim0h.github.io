export const config = {
  name: "Selim Oh",
  title: "Computer Engineering Student @ POSTECH",
  description: "Passionate about Compiler Optimization & System Security",
  accentColor: "#1d4ed8", // 원하는 테마 색상 (파란색 계열)
  
  social: {
    email: "selim0h@postech.ac.kr",
    linkedin: "https://linkedin.com/in/yourprofile", // 본인 링크로 수정
    github: "https://github.com/selim0h",
    medium: "https://medium.com/@selim0h", // 추가 가능
  },

  aboutMe: "I am a computer engineering student at POSTECH with a deep passion for compiler optimization and system security. My research focuses on Compiler-Introduced Security Bugs (CISBs) within the LLVM infrastructure. Currently, I am exploring how optimization passes can inadvertently introduce vulnerabilities.",

  skills: ["LLVM", "C/C++", "Compiler Design", "Linux Kernel Security", "Coq"],

  projects: [
    {
      name: "CISB Detection Framework",
      description: "Developing an automated framework to detect security vulnerabilities introduced during LLVM optimization stages.",
      link: "https://medium.com/@selim0h", // 관련 포스트나 깃헙 링크
      skills: ["LLVM", "C++", "Security"],
    },
    {
      name: "LISP-like Compiler",
      description: "Designed and implemented a full compiler for a LISP-like language during exchange semester at UC Berkeley (CS164).",
      link: "",
      skills: ["Python", "Compilers"],
    }
  ],

  experience: [
    {
      company: "WEST Program Scholar",
      title: "Cyber Security Track",
      dateRange: "Nov 2024 - Present",
      bullets: [
        "Selected as a scholar for the Korea-U.S. Student Exchange Program by the Ministry of Education.",
        "Focusing on advanced cybersecurity research and international collaboration."
      ],
    },
    {
      company: "UC Berkeley",
      title: "Exchange Student",
      dateRange: "Jan 2025 - May 2025",
      bullets: [
        "Studied advanced Computer Science courses including CS164 (Compilers).",
        "Engaged in system security and software engineering projects."
      ],
    }
  ],

  education: [
    {
      school: "POSTECH",
      degree: "Bachelor of Science in Computer Science and Engineering",
      dateRange: "2022 - 2027 (Expected)",
      achievements: [
        "Major GPA: X.X / 4.3", // 본인 학점 입력
        "Focus on Systems and Security"
      ]
    }
  ]
};
