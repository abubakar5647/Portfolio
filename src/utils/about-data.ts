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
    "I’m a passionate MERN Stack Developer specializing in React Native, React.js, Node.js, Express.js, MongoDB, and MySQL — building modern, scalable, and high-performance applications.",
  description:
    "I love creating full-stack solutions that combine powerful backends with smooth, responsive frontends. My expertise spans React Native and React.js for crafting seamless user interfaces, and Node.js, Express.js, MongoDB, and MySQL for building secure, scalable, and efficient server-side architectures. I focus on writing clean, maintainable code and delivering apps that provide real value to users.",
  hobby:
    "Beyond coding, I bring strong problem-solving skills, clear communication, and a team-focused mindset to every project. I’m passionate about continuous learning and creating impactful digital products that help businesses grow.",
};
