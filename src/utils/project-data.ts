import { Images } from "@/assets";

export const projects = [
  {
    id: 1,
    title: "Rental Car Mobile",
    status: "In Development",
    image: Images.Rental,
    description:
      "Rental Car Mobile is a React Native application designed to connect car rental shop owners with customers. Shop owners can register their shop, add their cars, and assign drivers if available. Customers can browse listed cars, choose to rent with or without a driver, and make rental bookings directly through the app. The platform supports two roles Shop Owner and Customer — enabling a smooth and organized process for managing car rentals.",
    technologies: [
      "React Native",
      "RTK query",
      "Firebase",
      "Redux toolkit",
      "TypeScript",
      "React hook form",
      "Zod",
      "Socila Login",
      "Socket.io",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Education App",
    status: "Completed",
    image: Images.EDU,
    description:
      "Edu App is a smart educational platform with three roles: Admin,Teacher, and Student. Admin has full control over managing students, teachers, classrooms, events, and more. Teachers can manage classrooms, assign subjects, create student groups, and interact with students. Students can mark their attendance, view their assigned classrooms, subjects, groups, and participate in events and activities they are added to.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "RTK Query",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    status: "Completed",
    image: Images.Portfolio,
    description:
      "A modern and responsive personal portfolio website built with React, Tailwind CSS, JavaScript, and TypeScript. It showcases my skills, projects, and professional journey in a clean, user-friendly interface. Designed with a focus on performance and mobile-first responsiveness, this project highlights my ability to build scalable and visually appealing web applications.",
    technologies: ["React Js", "Tailwind Css", "Typescript", "Javascript"],
  },
  {
    id: 4,
    title: "DiveInMobile",
    status: "Completed",
    image: Images.DiveIn,
    description:
      "DiveInMobile is a social interaction app where users create unique profiles, connect by sending and accepting friend requests, and collaborate in groups. Group admins can send prompts that are instantly shared with all members, allowing replies, emoji reactions, and threaded responses. With each new prompt, the previous one is archived, keeping conversations organized. Powered by Firebase Firestore, DiveInMobile ensures real-time, seamless communication within friend-based groups.",
    technologies: [
      "React Native",
      "Expo Cli",
      "Redux toolkit",
      "Supabase",
      "Socila Login",
      "Typescript",
      "Google Map",
    ],
  },
  {
    id: 5,
    title: "Macca-app",
    status: "In Development",
    image: Images.Macca,
    description:
      "Macca App is a dynamic platform with two roles: event and job creators, and applicants. Organizers can post events and job opportunities, while users can browse, view details, and apply directly. Powered by Firebase Firestore, Macca App offers a smooth and real-time experience for discovering and managing events and jobs.",
    technologies: [
      "React Native",
      "Expo Cli",
      "Firebase Firestore",
      "Zustand",
      "Socila Login",
      "Typescript",
      "React hook form",
      "Zod",
      "Google Map",
    ],
  },
  {
    id: 6,
    title: "Task Manager",
    status: "Completed",
    image: Images.Task,
    description:
      "Task Manager is a full-featured MERN Stack application designed to help teams and individuals manage their work efficiently. Users can create tasks, assign priorities, track progress, and update statuses in real time. With a clean and responsive UI, it provides a smooth workflow experience for task and project management.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
    ],
  },
];
