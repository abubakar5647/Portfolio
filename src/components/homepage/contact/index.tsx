import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalData } from "@/utils/personal-data";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#0f1729]" />,
      label: personalData.gmail,
    },
    {
      icon: <Phone className="h-6 w-6 text-[#0f1729]" />,
      label: `+${personalData.contact}`,
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#0f1729]" />,
      label: personalData.location,
    },
  ];

  const socialLinks = [
    {
      href: personalData.githhub,
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError(true);
      return;
    }
    console.log("Form submitted:", formData);
  };

  const formFields = [
    {
      id: "name",
      label: "Your Name:",
      type: "text",
      placeholder: "Enter your name",
      value: formData.name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, name: e.target.value }),
    },
    {
      id: "email",
      label: "Your Email:",
      type: "email",
      placeholder: "Enter your email",
      value: formData.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, email: e.target.value });
        setEmailError(false);
      },
      onBlur: handleEmailBlur,
    },
  ];

  return (
    <section id="contact" className="bg-[#0d1224]">
      <div className="py-10">
        <div className="flex justify-center lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Contact With Me
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="border border-[#2a3a5a] rounded-lg p-6 md:p-8 bg-[#0f1729]">
              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                {personalData.message}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-white text-sm mb-2"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      aria-invalid={field.id === "email" && emailError}
                      className="border-[#2a3a5a] text-white placeholder:text-gray-400 focus:border-[#00d9ff] focus:ring-[#00d9ff]"
                    />
                    {field.id === "email" && emailError && (
                      <p className="text-red-500 text-sm mt-2">
                        Please provide a valid email!
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-sm mb-2"
                  >
                    Your Message:
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="border-[#2a3a5a] text-white placeholder:text-gray-400 focus:border-[#00d9ff] focus:ring-[#00d9ff] resize-none"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#e91e8c] to-[#8b5cf6] hover:from-[#d11a7d] hover:to-[#7c4ee0] text-white font-medium px-8 py-6 rounded-full text-base uppercase tracking-wide flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-[#4a5a7a] rounded-full p-4 flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-white text-lg md:text-xl">{item.label}</p>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4a5a7a] hover:bg-[#5a6a8a] rounded-full p-4 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#2a3a5a] mt-12">
        <div className="text-center text-sm text-gray-400 py-6 bg-[#0f1729]">
          © Developer Portfolio by{" "}
          <span className="text-[#00d9ff] hover:underline cursor-pointer">
            Abubakar
          </span>
        </div>
      </footer>
    </section>
  );
}
