// ================= ICONS =================
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

// ================ ASSETS ================
import Work1 from "./assets/adminDashboard.png";
import Work2 from "./assets/finebank.png";
import Work3 from "./assets/hotelBooking.png";
import Work4 from "./assets/gfinder.png";
import Work5 from "./assets/cointrace.png";
import Work6 from "./assets/newsNexus.png";
import Work7 from "./assets/DashBoard.png";
import Work8 from "./assets/jobline.png";

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

// ============= NAVIGATION LINKS ============
export const links = [
  { id: 1, name: "Home", icon: <FaHome className="nav__icon" />, path: "/" },
  { id: 2, name: "About", icon: <FaUser className="nav__icon" />, path: "/about" },
  { id: 3, name: "Portfolio", icon: <FaFolderOpen className="nav__icon" />, path: "/portfolio" },
  { id: 4, name: "Contact", icon: <FaEnvelopeOpen className="nav__icon" />, path: "/contact" },
];

// =============== PERSONAL INFO ===============
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

// =================== STATS ===================
export const stats = [
  { id: 1, no: "3", title: "Years of Experience" },
  { id: 2, no: "10+", title: "Completed Projects" },
  { id: 3, no: "5+", title: "Happy Customers" },
  { id: 4, no: "3", title: "Awards Won" },
];

// =================== SKILLS ==================
export const skills = [
  { id: 1, title: "HTML", percentage: "80" },
  { id: 2, title: "CSS", percentage: "80" },
  { id: 3, title: "JavaScript", percentage: "70" },
  { id: 4, title: "React", percentage: "70" },
  { id: 5, title: "Redux", percentage: "62" },
  { id: 6, title: "Next.js", percentage: "60" },
  { id: 7, title: "Material UI", percentage: "77" },
  { id: 8, title: "Tailwind CSS", percentage: "60" },
  { id: 9, title: "Bootstrap", percentage: "45" },
  { id: 10, title: "Git", percentage: "73" },
];

// ============== RESUME TIMELINE ==============
export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2025 - PRESENT",
    title: "Software Engineer",
    company: "BixBytes Solutions",
    desc: "Built HR management app (Next.js, React, MUI)...",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - PRESENT",
    title: "Web Developer",
    company: "Wipro Ltd",
    desc: "Improved UI performance by 60%...",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020",
    title: "Software Developer Intern",
    company: "SmartBridge Educational Services",
    desc: "Built mobile app with MIT App Inventor...",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017 - 2021",
    title: "Engineering",
    company: "Srinivas Institute of Technology",
    desc: "Electronics and Communication",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015 - 2017",
    title: "Pre-University",
    company: "Carmel Composite PU College",
    desc: "PCMC",
  },
];

// ============== PORTFOLIO PROJECTS ==============
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Admin Dashboard",
    link: "https://vitejs-vite-uayajych.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "Admin Dashboard" },
      { icon: <FaCode />, title: "Language: ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a className="item__details_Link" href="https://vitejs-vite-uayajych.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
        ),
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "Finebank Dashboard",
    link: "https://finebank-io-q3dk.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project : ", desc: "Finebank Dashboard" },
      { icon: <FaCode />, title: "Language: ", desc: "React, Material UI, JavaScript, CSS3, HTML5" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a className="item__details_Link" href="https://finebank-io-livid.vercel.app/login" target="_blank" rel="noopener noreferrer">Website</a>
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
          <a className="item__details_Link" href="https://hotel-booking-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
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
      { icon: <FaCode />, title: "Language: ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a className="item__details_Link" href="https://jeevana1999.github.io/Github_Profile_Finder/" target="_blank" rel="noopener noreferrer">Website</a>
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
      { icon: <FaCode />, title: "Language: ", desc: "React Js" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a className="item__details_Link" href="https://coin-trace-h6my.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
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
          <a className="item__details_Link" href="https://github.com/JeevanA1999/NewsNexusOne/" target="_blank" rel="noopener noreferrer">Website</a>
        ),
      },
    ],
  },
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
          <a className="item__details_Link" href="https://transcation-control-dash-board.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
        ),
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: "Job Finder Application",
    link: "https://job-finder-six.vercel.app/",
    details: [
      { icon: <FiFileText />, title: "Project: ", desc: "Job Line" },
      { icon: <FaCode />, title: "Language: ", desc: "React JS" },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a className="item__details_Link" href="https://job-finder-six.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
        ),
      },
    ],
  },
];

// =================== THEMES ===================
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
