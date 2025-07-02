"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiFirebase,
  SiMongodb,
  SiSanity,
  SiFramer,
  SiOpenai,
  SiGoogle,
  SiStreamlit,
  SiAntdesign
} from "react-icons/si";

const skillCategories = [
  {
    name: "Core Foundations",
    icon: "🛠️",
    skills: [
      { name: "HTML5", icon: SiHtml5, level: 98, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, level: 96, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, level: 94, color: "text-yellow-400" },
      { name: "Bootstrap", icon: SiBootstrap, level: 92, color: "text-purple-500" },
    ]
  },
  {
    name: "Frontend Mastery",
    icon: "🎨",
    skills: [
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "text-blue-600" },
      { name: "React", icon: SiReact, level: 95, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 97, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, level: 93, color: "text-gray-100" },
      { name: "Ant Design", icon: SiAntdesign, level: 85, color: "text-teal-400" },
      { name: "Framer Motion", icon: SiFramer, level: 88, color: "text-pink-500" },
    ]
  },
  {
    name: "AI & Backend",
    icon: "🧠",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 89, color: "text-green-500" },
      { name: "Python", icon: SiPython, level: 91, color: "text-yellow-400" },
      { name: "OpenAI API", icon: SiOpenai, level: 88, color: "text-green-400" },
      { name: "Gemini AI", icon: SiGoogle, level: 85, color: "text-blue-300" },
      { name: "Chainlit", icon: SiStreamlit, level: 83, color: "text-emerald-400" },
      { name: "Streamlit", icon: SiStreamlit, level: 90, color: "text-red-400" },
    ]
  },
  {
    name: "DevOps & Data",
    icon: "⚙️",
    skills: [
      { name: "Git", icon: SiGit, level: 93, color: "text-orange-600" },
      { name: "Firebase", icon: SiFirebase, level: 87, color: "text-amber-500" },
      { name: "MongoDB", icon: SiMongodb, level: 89, color: "text-green-600" },
      { name: "Sanity", icon: SiSanity, level: 89, color: "text-green-600" },
    ]
  }
];

export default function Skills() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(126, 34, 206, 0.1), transparent 80%)`;

function onMouseMove(e: React.MouseEvent<HTMLElement>) {
  const { currentTarget, clientX, clientY } = e;
  const { left, top } = currentTarget.getBoundingClientRect();
  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
}

  return (
    <section 
      id="skills" 
      className="relative py-24 overflow-hidden"
      onMouseMove={onMouseMove}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ background }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </motion.div>

        {/* Centered Skills Grid */}
        <div className="flex flex-col items-center">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15 + 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-6xl mb-16"
            >
              {/* Centered Category Header */}
              <div className="flex flex-col items-center mb-8">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white mt-2">
                  {category.name}
                </h3>
                <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mt-4"></div>
              </div>
              
              {/* Centered Skills */}
              <div className="flex flex-wrap justify-center gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: catIndex * 0.1 + skillIndex * 0.05
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05
                    }}
                    className="w-[160px]"
                  >
                    <div className="relative h-full p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all flex flex-col items-center">
                      <div className={`text-4xl mb-4 ${skill.color}`}>
                        <skill.icon />
                      </div>
                      <h4 className="text-gray-300 text-center font-medium mb-3">
                        {skill.name}
                      </h4>
                      <div className="w-full mt-auto">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full ${
                              skill.level > 90 
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                                : skill.level > 80 
                                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                                  : 'bg-gradient-to-r from-gray-500 to-gray-400'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Callout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Always Expanding My Toolkit
          </h3>
          <p className="text-gray-300">
            I&apos;m constantly exploring emerging technologies and deepening my expertise in core platforms. 
            Currently mastering advanced Next.js patterns and AI integration techniques to build 
            next-generation web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}