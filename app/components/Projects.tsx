"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI Customer Support Agent",
    description:
      "Revolutionary AI chatbot that delivers instant, intelligent customer support with seamless order tracking integration",
    tags: ["Next.js","Open AI", "Python", "Fast Api", "Tailwind CSS"],
    image: "/images/AI Support Agent.png",
    link: "https://ai-support-agent.vercel.app/",
  },
  {
    title: "Marketing Website",
    description:
      "High-conversion marketing platform with stunning visuals and seamless user journeys",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/images/Mareting Web.png",
    link: "https://marketing-web-alpha.vercel.app/",
  },
  {
    title: "Nike Website",
    description:
      "Immersive e-commerce experience with dynamic product showcases and lightning-fast performance",
    tags: ["Next.js", "Tailwind CSS", "Sanity"],
    image: "/images/nike web.png",
    link: "https://nike-e-com.vercel.app/",
  },
   {
    title: "E-commerce Platform",
    description:
      "Full-stack online marketplace featuring secure payments, real-time inventory, and intuitive shopping experience",
    tags: ["React", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MongoDB", "React Icons"],
    image: "/images/ECOM.png",
    link: "https://ecom-web-fronte.vercel.app/",
  },
  {
    title: "Video Calling App",
    description:
      "Crystal-clear video conferencing solution with one-click joining and military-grade encryption",
    tags: ["Vite", "Tailwind CSS", "Zego Cloud SDK"],
    image: "/images/video call.png",
    link: "https://video-calling-app-amber.vercel.app/",
  },
  {
    title: "TaskZen",
    description:
      "Intuitive task manager with drag-and-drop functionality and team collaboration features",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    image: "/images/taskzen.png",
    link: "https://management-system-one.vercel.app/",
  },
  {
    title: "Developer Portfolio",
    description:
      "Showcase portfolio featuring smooth animations and responsive design",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/portfoli.png",
    link: "https://portfolio-ayeshanasirwebdevelopers-projects.vercel.app/",
  },
  {
    title: "Modern Blog Platform",
    description:
      "Engaging content hub with rich text editing and real-time commenting",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"],
    image: "/images/blog web.png",
    link: "https://ayeshanasirwebdeveloper.github.io/Blog-Heckathon/",
  },
    {
    title: "MediBuddy",
    description:
      "Smart medication tracker with dosage reminders and health analytics",
    tags: ["Python", "Streamlit", "JSON"],
    image: "/images/medicine.png",
    link: "https://medicinereminderbuddy.streamlit.app/",
  },
  {
    title: "Resume Builder Pro",
    description:
      "AI-powered resume creator with professional templates and PDF export",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/resume.png",
    link: "https://ayeshanasirwebdeveloper.github.io/Resume-Builder/",
  },
  {
    title: "Data Sweeper",
    description:
      "Powerful data cleaning tool with visualization and multi-format export",
    tags: ["Python", "Streamlit", "Pandas", "plotly"],
    image: "/images/data sweep.png",
    link: "https://moderndatasweeper.streamlit.app/",
  },
  {
    title: "Gourmet Restaurant",
    description:
      "Elegant dining website with menu animations and reservation system",
    tags: ["React.js", "Tailwind CSS"],
    image: "/images/Restaurant.png",
    link: "https://restaurant-react-app-blush.vercel.app/",
  },
  {
    title: "Quiz Master",
    description:
      "Interactive quiz platform with adaptive difficulty and score tracking",
    tags: ["Next JS", "TypeScript", "Tailwind CSS"],
    image: "/images/next quiz.png",
    link: "https://next-js-quiz-app-navy.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "Enterprise-grade link management with analytics and custom domains",
    tags: ["Mongo DB", "Express JS", "React JS", "Node JS"],
    image: "/images/URL Short.png",
    link: "https://url-shortner-lyart-six.vercel.app/",
  },
  {
    title: "Global Time Sync",
    description:
      "World clock solution for remote teams and international travelers",
    tags: ["Streamlit", "Python", "UV"],
    image: "/images/time.png",
    link: "https://timezones.streamlit.app/",
  },
  {
    title: "Data Vault",
    description:
      "Military-grade encryption for sensitive personal and business data",
    tags: ["Python", "Streamlit", "Cryptography"],
    image: "/images/encryption.png",
    link: "https://modernsecuredataencryption.streamlit.app/",
  },
  {
    title: "Boutique Fashion",
    description:
      "Luxury clothing showcase with 3D product views and virtual try-on",
    tags: ["Next JS", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/women.png",
    link: "https://women-web-orcin.vercel.app/",
  },
  {
    title: "Password Generator",
    description:
      "Ultra-secure password creator with strength metrics and clipboard protection",
    tags: ["Streamlit", "Python", "UV", "Pyperclip"],
    image: "/images/pass.png",
    link: "https://women-web-orcin.vercel.app/",
  },
  {
    title: "Wealth Generator",
    description:
      "Interactive financial inspiration tool with business ideas and motivation",
    tags: ["Python", "Fastapi", "UV", "Streamlit"],
    image: "/images/money.png",
    link: "https://moneymakingmachine.streamlit.app/",
  },
  {
    title: "Unit Converter Pro",
    description:
      "Universal measurement converter with dark mode and calculation history",
    tags: ["Python", "Streamlit", "Cryptography"],
    image: "/images/unit convert.png",
    link: "https://modernunitconverter.streamlit.app/",
  },
  {
    title: "Mood Tracker",
    description:
      "Emotional wellness journal with trend analysis and reflection prompts",
    tags: ["Streamlit", "Python", "UV", "Pandas", "CSV"],
    image: "/images/mood.png",
    link: "https://modernmoodtracker.streamlit.app/",
  },
  {
    title: "Knowledge Quiz",
    description:
      "Engaging trivia game with instant feedback and progress tracking",
    tags: ["Python", "UV", "Streamlit"],
    image: "/images/quiz.png",
    link: "https://modernquizapp.streamlit.app/",
  },
  {
    title: "Calculator Pro",
    description:
      "Sleek calculator with scientific functions and memory storage",
    tags: ["Python", "UV", "Streamlit"],
    image: "/images/cal.png",
    link: "https://modernsimplecalculator.streamlit.app/",
  },
  {
    title: "BookShelf",
    description:
      "Digital library manager with reading stats and collection insights",
    tags: ["UV", "Python", "Streamlit", "JSON"],
    image: "/images/library.png",
    link: "https://modernpersonallibrarymanager.streamlit.app/",
  },
  {
    title: "TaskFlow",
    description:
      "Minimalist productivity app with smart scheduling and completion tracking",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/to do.png",
    link: "https://legendary-bunny-8fabbf.netlify.app/",
  },
  {
    title: "Password Vault",
    description:
      "Advanced password generator with strength analysis and secure sharing",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/password.png",
    link: "https://ayeshanasirwebdeveloper.github.io/Password-Generator/",
  },
  {
    title: "Gallery Pro",
    description:
      "Visual storytelling platform with fullscreen mode and tagging system",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/gallery.png",
    link: "https://bejewelled-conkies-9e080e.netlify.app/",
  },
  {
    title: "Ramadan Planner",
    description:
      "Comprehensive fasting companion with prayer times and spiritual resources",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/ramadan.png",
    link: "https://classy-boba-470699.netlify.app/",
  },
  {
    title: "Word Genius",
    description:
      "Challenging vocabulary builder with adaptive learning algorithm",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/guessing game.png",
    link: "https://extraordinary-nougat-3b3b27.netlify.app/",
  },
  {
    title: "Smart Form",
    description:
      "Dynamic input system with conditional logic and auto-validation",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/form.png",
    link: "https://ayeshanasirwebdeveloper.github.io/Register-Toggle/",
  },
  {
    title: "AI Companion",
    description:
      "Conversational assistant with natural language processing",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/ai chat.png",
    link: "https://ornate-lolly-015289.netlify.app/",
  },
  {
    title: "Calendar Pro",
    description:
      "Intelligent scheduling system with event reminders and sharing",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/calendar.png",
    link: "https://darling-sunflower-aa4ec9.netlify.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Some of my recent work and case studies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-400 hover:text-purple-300 font-medium"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
