"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function About() {
  const stats = [
    { value: "30+", label: "Projects Completed" },
    { value: "1.5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const skills = [
    { name: "Frontend Development", icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" /> },
    { name: "Backend Integration", icon: <CpuChipIcon className="h-6 w-6 text-blue-400" /> },
    { name: "UI/UX Design", icon: <RocketLaunchIcon className="h-6 w-6 text-pink-400" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Let me introduce myself and what I do
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              Full Stack Developer & Problem Solver
            </h3>
            
            <p className="text-gray-300 mb-6">
              I&apos;m Ayesha Nasir, a passionate developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless digital 
              experiences that solve real-world problems.
            </p>
            
            <p className="text-gray-300 mb-8">
              My journey in tech began with a curiosity about how things work, which evolved into building 
              solutions that impact users globally. I specialize in responsive designs, performance optimization, 
              and intuitive user interfaces.
            </p>

            {/* Skills Highlights */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}

            {/* Personal Note Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-3 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/20 mt-4"
            >
              <p className="text-gray-300 italic">
                &apos;I believe in writing clean, efficient code and creating experiences 
                that users love. When I&apos;m not coding, you&apos;ll find me exploring new 
                technologies or contributing to open-source projects.&apos;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}