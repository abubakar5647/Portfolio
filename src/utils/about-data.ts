import { Images } from "@/assets";
import { Briefcase, Clock, Code, User } from "lucide-react";

export const AboutCardsData = [
  { id: 1, title: "Fresher(but passionate)", icon: Code },
  { id: 2, title: "10+", description: "Project Completed", icon: User },
  {
    id: 2,
    title: "100%",
    description: "Client Satisfaction",
    icon: Briefcase,
  },
  { id: 2, title: "24/7", description: "Availability", icon: Clock },
];

export const slides = [
  {
    title: "Why Me?",
    text: "I bring a problem-solving mindset, clean code practices, and a passion for building apps that are not just functional but delightful to use.",
    image: Images.Coding,
  },
  {
    title: "About Me",
    text: "A React Native developer with a drive to craft seamless mobile experiences. Always eager to learn and deliver impactful solutions.",
    image: Images.About,
  },
  {
    title: "My Vision",
    text: "To create apps that merge technology with simplicity, empowering people to achieve more with less effort.",
    image: Images.bg,
  },
];

export const aboutMe = {
  title:
    "I’m a passionate frontend developer specializing in React Native and React.js, creating seamless web and mobile experiences with clean, user-focused design",
  description:
    "My expertise as a frontend developer who loves creating fast and responsive apps with React Native and React.js. I enjoy turning ideas into simple, user-friendly designs that work smoothly on both web and mobile. My focus is on writing clean code and building apps that are not only useful but also enjoyable for people to use.",
  hobby:
    "Beyond coding, I bring strong analytical skills, excellent communication abilities, and a collaborative approach to every project. I believe in writing clean, maintainable code and creating user experiences that make a difference.",
};
