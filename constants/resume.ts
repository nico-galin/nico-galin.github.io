import type Experience from "../models/Experience";
import type School from "../models/School";

interface Resume {
  experience: Experience[];
  education: School[];
  projects: {
    title: string;
    years: string[];
    description: string;
  }[];
  skills: {
    languages: string;
    technologies: string;
    project_management: string;
  };
  volunteer: {
    title: string;
    company: string;
    start: string;
    end: string;
    paren: string;
    description: string;
  }[];
}

const resume: Resume = {
  experience: [
    {
      title: "Tech Lead and Developer",
      company: "Muusic",
      start: "Jan 2021",
      end: "Present",
      descriptions: [
        "Building a Web3 application on the Polygon (Ethereum L2) chain in React.js (in TypeScript), ChakraUI, Pinata, and Firebase with audio streaming and Zora smart contract integration.",
        "Overseeing cross-functional web application development and larger scale business development operations.",
      ],
    },
    {
      title: "EES Software Engineering Intern",
      company: "Apple",
      start: "May 2022",
      end: "Aug 2022",
      paren: "4 MO",
      descriptions: [
        "Architected highly scalable dashboards and data analytics pipelines in React.js and Grails (Groovy) to aid in hardware development, BOM management, PCB design, and more.",
      ],
    },
    {
      title: "ECAD Software Engineering Intern",
      company: "Apple",
      start: "Jan 2021",
      end: "Aug 2021",
      paren: "8 MO",
      descriptions: [
        "Developed and documented PCB design and validation utilities in several frontend frameworks for company-wide use",
      ],
    },
    {
      title: "President",
      company: "Web Development at Berkeley",
      start: "May 2022",
      end: "Present",
      paren: "",
      descriptions: [
        "Managing and directing Berkeley’s premier web development organization to realize business priorities and expand industry impact, improve developer/designer skills (mentoring React.js, ES6, etc.), and community development.",
        "Spearheading the acquisition of sproul.club, a community-building organization that I worked with for several semesters prior.",
      ],
    },
    {
      title: "External Vice President (VP Engineering)",
      company: "Web Development at Berkeley",
      start: "Dec 2021",
      end: "May 2022",
      paren: "6 MO",
      descriptions: [
        "Conducted industry client acquisition, implemented pragmatic organization-wide development conventions, standardized development infrastucture, guided engineering culture.",
        "Worked on client acquisition and outreach to Berkeley-founded companies and student organizations.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Web Development at Berkeley",
      start: "Sep 2021",
      end: "May 2022",
      paren: "4 MO",
      descriptions: [
        "Led frontend development and directed unit testing for a large scale web app using React.js (in TypeScript) and AWS in an Agile/SCRUM environment.",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "sproul.club",
      start: "Jan 2021",
      end: "Sep 2021",
      paren: "9 MO",
      descriptions: [
        "Managed 5 team-members across Product Design, Backend and Frontend Development, and User Testing sectors developing the sproul.club student account features.",
        "Served as a SCRUM Master, following the Agile workflow with JIRA.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "sproul.club",
      start: "Oct 2020",
      end: "Jan 2021",
      paren: "4 MO",
      descriptions: [
        "Led organization-wide fullstack development efforts and implemented user reasearch insights for a community-driven web app using React.js and Flask in an Agile/SCRUM environment.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "SummerBio.",
      start: "May 2020",
      end: "Aug 2020",
      paren: "4 MO",
      descriptions: [
        "Designed and implemented a mobile cross-platform app in Capacitor/AngularJS, HTML, SCSS, and Adobe XD for personal COVID-19 test submission and expedited test result delivery.",
        "Tested and modified multiple contact tracing applications implementing Google/Apple’s API and the TCN Bluetooth Protocol for internal use.",
        "Published COVID-19 test management app to beta testers on iOS and Android.",
        "Developed NodeJS backend for both contact tracing and test result applications through Google Firebase and Amazon Web Services.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Joby Aviation",
      start: "Jun 2018",
      end: "May 2020",
      paren: "2 YR",
      descriptions: [
        "Developed a mobile cross-platform flight booking application using Apache Cordova (and later) React Native frameworks, HTML, and CSS on a small team.",
        "Implemented backend functionality with Amazon Web Services and REST APIs for syncing, automated scheduling, and updating.",
        "Published flight booking app on internal test tracks for both iOS and Android devices.",
        "Coordinated with a team of 6-8 in an Agile/SCRUM environment.",
      ],
    },
    {
      title: "Software Development Consultant",
      company: "GammaDynamics",
      start: "Sep 2016",
      end: "Jan 2018",
      paren: "1 YR 5 MO",
      descriptions: [
        "Developed a cross-platform web application in Apache Cordova, HTML, and CSS to provide access to a trained neural network on product reviews.",
        "Published multiple apps on the Apple and Google App Stores.",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degrees: ["B.A. Computer Science", "B.A. Data Science (Cognition)"],
      gpa: "3.76",
    },
  ],
  projects: [
    {
      title: "Naai",
      years: ["2022"],
      description:
        "Architecting, designing, and developing a playful and highly animated marketing site for Naai, a platform reimagining the digital thrifting experience.",
    },
    {
      title: "Meet",
      years: ["2022"],
      description:
        "Developed a centralized platform for interns with nearby corporate housing to access group chats, social media platforms, and schedule meetups",
    },
    {
      title: "Lyftable",
      years: ["2021"],
      description:
        "Progress tracking social media platform for sharing and comparing fitness improvement with friends and followers. Built using Adobe XD, React Native, and Google Firebase.",
    },
    {
      title: "Personal Site",
      years: ["2020", "2021"],
      description: "Github-hosted personal site built with React.js and SCSS.",
    },
    {
      title: "NiqBot",
      years: ["2020"],
      description:
        "DIscord bot that tracks user disconnect times and provides analytics (graphs, means, etc.) with bedtime predictions and server bedtime leaderboards.",
    },
    {
      title: "Crypto Mining",
      years: ["2021"],
      description:
        "Set up Ethereum (ETH) and Monero (XMR) mining rigs using custom built desktop PCs running Windows and HiveOS.",
    },
    {
      title: "Sentiment Analysis",
      years: ["2019"],
      description:
        "Machine learning algorithm to determine the general sentiment (Positive, Neutral, Negative) of text using TensorFlow and Python3.",
    },
    {
      title: "NumC",
      years: ["2020"],
      description:
        "Custom NumPy distribution with optimized matrix and float operations.",
    },
  ],
  skills: {
    languages:
      "TypeScript, JavaScript, Python, Java, GoLang, RISC-V, HTML, CSS, SCSS",
    technologies:
      "Next.js, React.js, React Native, Angular, Apache Cordova, Capacitor, REST, Node.js, Git",
    project_management: "JIRA, Confluence, SCRUM, Agile, Asuna, Lucid Chart",
  },
  volunteer: [
    {
      title: "Web Design Mentor",
      company: "Cubstart Web Design DeCal",
      start: "Sep 2020",
      end: "May 2021",
      paren: "9 MO",
      description:
        "Mentoring React.js, HTML, and CSS for an introductory web design course at Berkeley, with weekly office hours and project support.",
    },
    {
      title: "Internal/External Affairs Committee Member",
      company: "Greening the Greeks",
      start: "Jan 2021",
      end: "Present",
      paren: "",
      description:
        "Creating and maintaining all logos, icons, presentation decks, and other marketing materials.",
    },
    {
      title: "Web Dev Project Mentor",
      company: "Intro to Fullstack Dev",
      start: "Nov 2021",
      end: "Dec 2021",
      paren: "1MO",
      description:
        "Mentoring students in the Intro to Fullstack Development course on their final projects and presentations, which were their own application ideas and implementations.",
    },
  ],
};

export default resume;
