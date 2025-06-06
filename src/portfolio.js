/* Change this file to get your personal Porfolio */

import { skillData } from "./data/skills";
import { certificationData } from "./data/certifications";
import { experienceData } from "./data/experience";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

const skills = {
  ...skillData,
};

//SEO Related settings
const seo = {
  title: "Piyush Chouhan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Piyush Chouhan Portfolio",
    type: "website",
    url: "https://piyushchouhan.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Nanthakumar J J",
  logo_name: "Technical Architect",
  nickname: "Nantha",
  subTitle:
    "Specializing in building scalable web solutions, optimizing .NET applications, and executing seamless cloud migrations with expertise in Angular, MSSQL, and .NET Web API.",
  resumeLink: "https://1drv.ms/b/s!Ai_HHQX8idMDkwcw1GU3AsHvtX3r?e=pFtf48",
  portfolio_repository: "https://github.com/jjnanthakumar/portfolio-sleek",
  githubProfile: "https://github.com/jjnanthakumar/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jjnanthakumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jjnanthakumar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jjnanthakumar477@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/decrypt.me/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/piyushchohan48/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Arrow023",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/arrow023",
    },

    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Piyushchouhan",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Panimalar Engineering College, Anna University",
      subtitle: "B.E. in Computer Science",
      logo_path: "panimalar.png",
      alt_name: "PEC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Scored 9.05 CGPA, First Class with Distinction. Has been a department topper with a 9.32 GPA in Semester 1.",
      ],
      website_link: "https://panimalar.ac.in/",
    },
    {
      title: "St. Sebastian's Matriculation Higher Secondary School",
      subtitle: "HSC - Computer Science",
      logo_path: "sebastian.png",
      alt_name: "Sebastian Pallavaram",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Attended school from X to XII. Scored 95.4% in HSC.",
        "⚡ Learned basics of computer science and programming languages.",
        "⚡ Been a consistent topper in the class and school.",
      ],
      website_link: "https://www.stsebastianmhsspvm.com/",
    },
    {
      title: "Holy Queen Matriculation Higher Secondary School",
      subtitle: "SSLC",
      logo_path: "holyqueen.png",
      alt_name: "HQMS Nagalkeni",
      duration: "2009 - 2015",
      descriptions: [
        "⚡ Attended school from IV to X. Scored 95.6% in SSLC.",
        "⚡ Enjoyed a lot!",
        "⚡ Won many prices in academics.",
      ],
      website_link: "https://www.holyqueen.in/",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create and deploy web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects & Publications",
  description: "Some of my projects and publications are listed here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "bloggle",
      name: "Bloggle - Personalized Blogs",
      createdAt: "2021-07-12T00:00:00Z",
      description: "A Web App for Publishing Blogs",
      url: "https://bloggle.netlify.app/",
    },
    {
      id: "copyright-brain",
      name:
        "Reconstructing Perceived Images from Human Brain Activities Using Twin Deep Neural Network",
      createdAt: "2021-06-30T00:00:00Z",
      description: "Copyright © L-104847/2021",
      url: "https://1drv.ms/b/s!Ai_HHQX8idMDkw-BxTmfY4m0pJY1?e=M3vyOA",
    },
    {
      id: "consistency-models",
      name:
        "Identification of Fake/Counterfeit Drugs using Blockchain and IoT Network",
      createdAt: "2019-03-22T00:00:00Z",
      description: "Copyright © 4380/2019-CO/L",
      url: "https://1drv.ms/i/s!Ai_HHQX8idMDkxE254J9647EcF-S?e=1uEhAh",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic_no_bg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "No.12, James Street, Gandhi Nagar, Nagalkeni, Chromepet, Chennai- 600044.",
    locality: "Chennai, TN",
    country: "India",
    region: "Chennai",
    postalCode: "600044",
    streetAddress: "James Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/oGXAffsmjc5e2iHD7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

const certifications = {
  ...certificationData,
};

const experience = {
  ...experienceData,
};
