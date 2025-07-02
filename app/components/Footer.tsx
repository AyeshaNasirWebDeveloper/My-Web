"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className={`absolute ${i % 2 === 0 ? 'bg-purple-600' : 'bg-blue-600'} rounded-full filter blur-[40px]`}
            style={{
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
              top: `${10 + i * 5}%`,
              left: `${5 + i * 7}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Ayesha Nasir
            </h3>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer crafting beautiful, functional digital experiences
            </p>
          </motion.div>
        
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Ayesha Nasir. All rights reserved.
          </motion.p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-purple-400/30 transition-all mt-6 md:mt-0"
            aria-label="Back to top"
          >
            <FiArrowUp className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}