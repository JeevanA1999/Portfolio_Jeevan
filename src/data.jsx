import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work3 from "./assets/hotelBooking.png";
import Work2 from "./assets/jobline.png";
import Work1 from "./assets/adminDashboard.png";
import Work4 from "./assets/gfinder.png";
import Work5 from "./assets/cointrace.png";
import Work6 from "./assets/newsNexus.png";
import Work7 from "./assets/DashBoard.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  { id: 1, title: "First Name : ", description: "Jeevan" },
  { id: 2, title: "Last Name : ", description: "A" },
  { id: 3, title: "Age : ", description: "24 Years" },
  { id: 4, title: "Nationality : ", description: "Indian" },
  { id: 5, title: "Freelance : ", description: "Available" },
  { id: 6, title: "Address : ", description: "Bangalore" },
  { id: 7, title: "Phone : ", description: "+91 8618415611" },
  { id: 8, title: "Email : ", description: "jeevukulal96@mail.com" },
  { id: 9, title: "GitHub : ", description: "JeevanA1999" },
  { id: 10, title: "Language : ", description: "English, Kannada, Hindi" },
];

export const stats = [
  { id: 1, no: "3", title: "Years of <br /> Experience" },
  { id: 2, no: "10+", title: "Completed <br /> Projects" },
  { id: 3, no: "5+", title: "Happy <br /> Customers" },
  { id: 4, no: "3", title: "Awards <br /> Won" },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2025 - PRESENT",
    title: "Software Engineer <span> BixBytes Solutions</span>",
    desc: "Built HR management app (Next.js, React, MUI) for attendance, shifts, and leave workflows. Enabled HRs to track employee status by department and shift with detailed charts and tables. Developed slot-based tracking (4-part daily view) with presence metrics (1/2/3/4 per day). Integrated leave request system with approval flow and real-time updates. Enhanced UI performance, responsiveness, and accessibility across platforms.",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - PRESENT",
    title: "Web Developer <span> Wipro Ltd </span>",
    desc: "Took the project from initial design through to completion, ensuring all milestones were met on time. Improved UI performance by 60% by identifying bottlenecks, leveraging technologies like Redux and React Hooks. Integrated responsive design principles and turned static web pages into dynamic ones, reducing device-specific bugs by 35%. Coordinated with the design team to ensure seamless integration of UX/UI designs, resulting in a 60% increase in user satisfaction. Worked closely with an Agile team and provided end-to-end solutions for clients.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020",
    title: "Software Developer Intern <span> SmartBridge Educational Services </span>",
    desc: "Developed a mobile application using MIT App Inventor to monitor and control greenhouse conditions remotely. Implemented data archiving to IBM Cloud. Built an automated irrigation system using Arduino and Node-RED to optimize water usage.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017-2021",
    title: "Engineering <span> Srinivas Institute of Technology, Mangalore </span>",
    desc: "Bachelor of Engineering in Electronics and Communication",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015-2017",
    title: "Pre-University <span> Carmel Composite PU College, Bantwal </span>",
    desc: "Pre-University in PCMC",
  },
];

export const skills = [
  { id: 1, title: "HTML", percentage: "80" },
  { id: 2, title: "JavaScript", percentage: "70" },
  { id: 3, title: "CSS", percentage: "80" },
  { id: 4, title: "React", percentage: "70" },
  { id: 5, title: "Tailwind CSS", percentage: "60" },
  { id: 6, title: "Bootstrap", percentage: "45" },
  { id: 7, title: "Redux", percentage: "62" },
  { id: 8, title: "Git", percentage: "73" },
  { id: 9, title: "Next.js", percentage: "60" },
  { id: 10, title: "Material UI", percentage: "77" },
];

export const portfolio = [
  {
    id: 7,
    img: Work7,
    title: "Transaction Dashboard",
    link: "https://transcation-control-dash-board.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project : ", desc: "Transaction Dashboard" },
      { icon: <FaCode />, title: "Language: ", desc: "HTML5, CSS3, ReactJs, Redux Toolkit" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://transcation-control-dash-board.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 6,
    img: Work6,
    title: "News Nexus",
    link: "https://github.com/JeevanA1999/NewsNexusOne/",
    details: [
      { icon: <FiFileText />, title: "Project : ", desc: "News Nexus" },
      { icon: <FaCode />, title: "Language: ", desc: "React Js, Redux Toolkit, Tailwind CSS" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://github.com/JeevanA1999/NewsNexusOne"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: "Hotel Room Booking",
    link: "https://hotel-booking-sooty.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project : ", desc: "Hotel Satkar" },
      { icon: <FaCode />, title: "Language: ", desc: "HTML5, CSS3, ReactJs" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://hotel-booking-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "Job Finder Application",
    link: "https://job-finder-six.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "Job Line" },
      { icon: <FaCode />, title: "Language : ", desc: "React JS" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://job-finder-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: "Admin Dashboard",
    link: "https://vitejs-vite-uayajych.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "Admin Dashboard" },
      { icon: <FaCode />, title: "Language : ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://vitejs-vite-uayajych.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 4,
    img: Work4,
    title: "GitHub Finder",
    link: "https://jeevana1999.github.io/Github_Profile_Finder/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "G Finder" },
      { icon: <FaCode />, title: "Language : ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://jeevana1999.github.io/Github_Profile_Finder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
  {
    id: 5,
    img: Work5,
    title: "Coin Trace",
    link: "https://coin-trace-h6my.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "Coin Trace" },
      { icon: <FaCode />, title: "Language : ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            className="item__details_Link"
            href="https://coin-trace-h6my.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  { id: 1, img: Theme1, color: "hsl(252, 35%, 51%)" },
  { id: 2, img: Theme2, color: "hsl(4, 93%, 54%)" },
  { id: 3, img: Theme3, color: "hsl(271, 76%, 53%)" },
  { id: 4, img: Theme4, color: "hsl(225, 73%, 57%)" },
  { id: 5, img: Theme5, color: "hsl(43, 74%, 49%)" },
  { id: 6, img: Theme6, color: "hsl(339, 81%, 66%)" },
  { id: 7, img: Theme7, color: "hsl(80, 61%, 50%)" },
  { id: 8, img: Theme8, color: "hsl(19, 96%, 52%)" },
  { id: 9, img: Theme9, color: "hsl(88, 65%, 43%)" },
  { id: 10, img: Theme10, color: "hsl(42, 100%, 50%)" },
];
