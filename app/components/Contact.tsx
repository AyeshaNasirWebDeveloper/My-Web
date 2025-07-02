"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, FormEvent } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { SiGithub, SiLinkedin, SiGitter, SiInstagram, SiTiktok, SiThreads, SiFacebook, SiDiscord } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { ContactFormData, SubmitStatus } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  // Mouse tracking for dynamic gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(126, 34, 206, 0.15), transparent 80%)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with environment variable checks
      if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 
          !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error("EmailJS configuration is incomplete");
      }

      await emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // Send email to yourself
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Message from Portfolio Contact Form",
          message: formData.message
        }
      );

      // Send auto-reply to client
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      //   process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_ID,
      //   {
      //     to_name: formData.name,
      //     to_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message
      //   }
      // );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  // Social media links data
  const socialLinks = [
    { icon: SiGithub, label: "GitHub", url: "https://github.com/AyeshaNasirWebDeveloper" },
    { icon: SiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ayeshanasirwin/" },
    { icon: SiGitter, label: "Twitter", url: "https://x.com/AyeshaNasir170/" },
    { icon: SiInstagram, label: "Instagram", url: "https://www.instagram.com/ayesha_naasir/" },
    { icon: SiThreads, label: "Threads", url: "https://www.threads.com/@ayesha_naasir" },
    { icon: SiTiktok, label: "TikTok", url: "https://www.tiktok.com/@ayesha_nasirr" },
    { icon: SiFacebook, label: "Facebook", url: "https://www.facebook.com/ayesha.nasir.22058/" },
    { icon: SiDiscord, label: "Discord", url: "https://discord.com/invite/C8Cbch7T" }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden"
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ background }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get in touch for collaborations or just to say hello
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {/* Location */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="p-3 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200 mb-1">Location</h4>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                  </div>
                </motion.div>
                
                {/* Email */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="p-3 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200 mb-1">Email</h4>
                    <a href="mailto:ayeshanasir07000@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">ayeshanasir07000@gmail.com</a>
                  </div>
                </motion.div>
                
                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="p-3 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200 mb-1">Phone</h4>
                    <a href="tel:+923072709520" className="text-gray-400 hover:text-purple-400 transition-colors">Connect me on Discord</a>
                  </div>
                </motion.div>
                
                {/* Social Links */}
                <div className="pt-6 mt-6 border-t border-gray-700/50">
                  <h4 className="text-lg font-medium text-gray-200 mb-4">Connect With Me</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-purple-900/30 transition-colors flex flex-col items-center"
                        aria-label={social.label}
                        title={social.label}
                      >
                        <social.icon className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
                        <span className="text-xs mt-1 text-gray-400">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

           {/* Contact Form */}
           <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-sm">✉️</span>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-200 transition-all placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-200 transition-all placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-200 transition-all placeholder-gray-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-200 transition-all placeholder-gray-500"
                    placeholder="Your message here..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/30 text-green-400 rounded-lg border border-green-800/50"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/30 text-red-400 rounded-lg border border-red-800/50"
                  >
                    {formData.name && formData.email && formData.message 
                      ? "Failed to send message. Please try again later."
                      : "Please fill all required fields."}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}