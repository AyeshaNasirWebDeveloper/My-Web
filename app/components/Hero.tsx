"use client";

import { motion, useMotionTemplate, useMotionValue, animate, Variants } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  // Animated values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Animated gradient position
  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(126, 34, 206, 0.15), transparent 80%)`;

  // Handle mouse movement
function onMouseMove(e: React.MouseEvent<HTMLElement>) {
  const { currentTarget, clientX, clientY } = e;
  const { left, top } = currentTarget.getBoundingClientRect();
  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
}

  // Text animation
  useEffect(() => {
    const animateText = async () => {
      await animate(".hero-text", { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.3 });
      await animate(".hero-subtext", { opacity: 1, y: 0 }, { duration: 0.6 });
      await animate(".hero-buttons", { opacity: 1, y: 0 }, { duration: 0.6 });
    };
    animateText();
  }, []);

  // Floating animation for decorative elements
const floatingVariants: Variants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={onMouseMove}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ background }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Floating orbs */}
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/30 blur-[80px]"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"
        />
      </motion.div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50"
            >
              <SparklesIcon className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Full Stack Developer</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              className="hero-text opacity-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300">
                Crafting Digital
              </span>
              <br />
              <span className="text-gray-200">Experiences</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              className="hero-subtext opacity-0 text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0"
            >
              I design and build beautiful, responsive web applications with modern technologies and pixel-perfect attention to detail.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              className="hero-buttons opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(109, 40, 217, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get in Touch <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>

              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(55, 65, 81, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-gray-800/30 backdrop-blur-sm text-gray-200 rounded-xl font-medium border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>

          {/* Image/content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-70 blur-lg"></div>
              
              {/* Main image container */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900/80 backdrop-blur-sm">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_30%,transparent)]">
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[3%]"></div>
                </div>
                
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-130 object-cover mix-blend-luminosity opacity-90"
                  priority
                />
              </div>

              {/* Floating tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2"
              >
                {["Next.js", "React", "TS", "Sanity", "MongoDB"].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm text-xs font-medium rounded-full border border-gray-700/50 shadow-lg"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}