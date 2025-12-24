import { personalData } from "./personal-data";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export const socialLinks = [
  {
    href: personalData.github,
    icon: <Github className="h-6 w-6 text-[#0f1729]" />,
  },
  {
    href: personalData.linkedin,
    icon: <Linkedin className="h-6 w-6 text-[#0f1729]" />,
  },
  {
    href: personalData.gmail,
    icon: <Mail className="h-6 w-6 text-[#0f1729]" />,
  },
  {
    href: personalData.facebook,
    icon: <Facebook className="h-6 w-6 text-[#0f1729]" />,
  },
];