/* Formatting: (itemId, imageUrl, color=invisible|dark|colored) */

import type Project from "../models/Project";

const portfolio: { [key: string]: Project } = {
  berry_icon: {
    title: "Berry",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "It's a strawberry, what more could you possibly want to know?",
    imageUrl: "thumbnails/berry.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDEviw-g14Q/",
    categories: {},
  },
  aperture_icon: {
    title: "Aperture",
    type: "icon",
    subtitle: "noir.graphics",
    description: "Lenses are quite beautiful, aren't they?",
    imageUrl: "thumbnails/aperture.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDHThjdgcXP/",
    categories: {},
  },
  croissant_icon: {
    title: "Croissant",
    type: "icon",
    subtitle: "noir.graphics",
    description: "Bonjour.",
    imageUrl: "thumbnails/croissant.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDJ28KCAjFC/",
    categories: {},
  },
  blaze_icon: {
    title: "Blaze",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "This icon makes me want to light a fire under your...browser...cough cough.",
    imageUrl: "thumbnails/blaze.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDUd8bygkiF/",
    categories: {},
  },
  cubes_icon: {
    title: "Cubes",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "Recursion is universally one of the most satisfying and most frustrating things.",
    imageUrl: "thumbnails/cubes.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDSSl5eA0UZ/",
    categories: {},
  },
  fox_icon: {
    title: "Fox",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "I'd like to think the fox is my spirit animal, but I'm not sure my reaction time is good enough. Back to playing Valorant I guess.",
    imageUrl: "thumbnails/fox.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDUd-nnAW9C/",
    categories: {},
  },
  gem_icon: {
    title: "Gem",
    type: "icon",
    subtitle: "noir.graphics",
    description: "This site. Let me know if you have any suggestions.",
    imageUrl: "thumbnails/gem.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDC6P9sAKwp/",
    categories: {},
  },
  pin_icon: {
    title: "Pin",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "Where are we gonna be? Santa Cruz? Berkeley? The meaningless void of existence?",
    imageUrl: "thumbnails/pin.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDHTko4gkMw/",
    categories: {},
  },
  range_icon: {
    title: "Range",
    type: "icon",
    subtitle: "noir.graphics",
    description: "One of my favorites, New Jersey could never.",
    imageUrl: "thumbnails/range.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CC94KaIgzpM/",
    categories: {},
  },
  screens_icon: {
    title: "Screens",
    type: "icon",
    subtitle: "noir.graphics",
    description: "The love of my life...unintentionally.",
    imageUrl: "thumbnails/screens.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDEvbpUAKsd/",
    categories: {},
  },
  target_icon: {
    title: "Target",
    type: "icon",
    subtitle: "noir.graphics",
    description: "X marks the spot. Or...wait...fuck...",
    imageUrl: "thumbnails/target.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDPXk1_Aw6p/",
    categories: {},
  },
  weight_icon: {
    title: "Weight",
    type: "icon",
    subtitle: "noir.graphics",
    description:
      "The perpetual nature of getting huge, no size will ever be enough and it DOES matter.",
    imageUrl: "thumbnails/weight.png",
    externalSiteName: "Instagram",
    externalUrl: "https://www.instagram.com/p/CDCqOKGAUCg/",
    categories: {},
  },
  lyftable_project: {
    title: "Lyftable",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Workout tracking mobile app with social media integration to create and share workouts, promote progress, and motivate each other to improve.",
    description_short:
      "Workout tracking mobile app with social media integration to create and share workouts.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "Github",
    externalUrl: "https://github.com/nico-galin/Lyftable",
    categories: {
      languages: ["HTML", "Javascript", "CSS"],
      frameworks: ["React Native"],
      platforms: ["Adobe Illustrator", "Figma"],
    },
    timestamp: "2021",
  },
  niqbot_project: {
    title: "NiqBot",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Automated Discord Bot to track user data and provide user insights. Track and display the last 30 days of voice call disconnect times to display a bedtime chart and predict average bedtime. Provide insights into the Discord server's overall bedtime with graph of averages over time and charts for earliest/latest bedtimes.",
    description_short:
      "Automated Discord Bot to track user data and provide user insights.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "Github",
    externalUrl: "https://github.com/nico-galin/NiqBot",
    categories: {
      languages: ["Javascript", "Python"],
      frameworks: ["Node.js", "Discord.js"],
      platforms: ["MongoDB"],
    },
    timestamp: "2021",
  },
  slate_project: {
    title: "Slate",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Member structuring, recruitment, and accountability application for clubs and other organizations.",
    description_short: "",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "Github",
    externalUrl: "https://github.com/nico-galin/Slate",
    categories: {
      languages: ["Javascript", "Python"],
      platforms: ["Firebase"],
      frameworks: ["React Native", "Redux", "Node.js", "GraphQL"],
    },
    timestamp: "2020",
  },
  crypto_mining_project: {
    title: "Crypto Mining",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Set up Ethereum (ETH) and Monero (XMR) mining rigs using custom built desktop PCs.",
    description_short: "",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "",
    externalUrl: "",
    categories: {
      languages: ["Python", "C"],
      operating_systems: ["HiveOS", "Windows"],
    },
    timestamp: "2021",
  },
  sentiment_analysis_project: {
    title: "Sentiment Analysis",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Machine learning algorithm to determine the general sentiment of any text block.",
    description_short: "",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "",
    externalUrl: "",
    categories: {
      languages: ["Python"],
      frameworks: ["TensorFlow"],
    },
    timestamp: "2019",
  },
  numc_project: {
    title: "numc",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Custom NumPy distribution with optimized matrix and float operations.",
    description_short: "",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "",
    externalUrl: "",
    categories: {
      languages: ["RISC-V", "C"],
      frameworks: ["CS61C Skeleton"],
    },
    timestamp: "2020",
  },
  personal_site_project: {
    title: "Personal Site",
    type: "project",
    subtitle: "Personal Project",
    description:
      "This website, alongside many previous iterations over the past several years, that are fully customized and manually animated for a seamless experience.",
    description_short: "This website.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "Github",
    externalUrl: "https://github.com/nico-galin/nico-galin.github.io",
    categories: {
      languages: ["Javascript", "HTML", "SCSS"],
      frameworks: ["React", "JSX"],
    },
    timestamp: "2022",
  },
  byrdle_project: {
    title: "Byrdle",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Wordle clone with 4, 5, and 6 letter options and social media integration.",
    description_short:
      "Wordle clone with 4, 5, and 6 letter options and social media integration.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "Github",
    externalUrl: "https://github.com/nico-galin/byrdle",
    categories: {
      languages: ["Javascript", "HTML", "SCSS"],
      frameworks: ["React", "JSX"],
    },
    timestamp: "2022",
  },
  naai_project: {
    title: "Naai",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Architecting, designing, and developing a playful and highly animated marketing site for Naai, a platform reimagining the digital thrifting experience.",
    description_short:
      "Highly animated and playful marketing site for a promising new thrifting app.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "their site",
    externalUrl: "https://naai.app",
    categories: {
      languages: ["TypeScript", "HTML", "SCSS"],
      frameworks: ["React.js", "Next.js"],
    },
    timestamp: "2022",
  },
  meet_project: {
    title: "Meet",
    type: "project",
    subtitle: "Personal Project",
    description:
      "Elegant web platform for interns in similar regions to meet through their corporate housing locations, shared interests, or spontaneous events.",
    description_short:
      "Elegant platform for interns to meet through corporate housing and shared interests.",
    imageUrl: "icons/code-icon.png",
    externalSiteName: "its site",
    externalUrl: "https://meet.nicogalin.com",
    categories: {
      languages: ["JavScript", "HTML", "SCSS"],
      frameworks: ["React.js", "Firebase"],
    },
    timestamp: "2022",
  },
};

export default portfolio;
