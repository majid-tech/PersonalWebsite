// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center gap-8 pt-24 pb-16 px-6 sm:px-10 lg:px-24 bg-[#0f111a]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ infinity: true }}
        className="text-3xl sm:text-4xl font-bold text-slate-200"
      >
        Let’s <span className="text-blue-400">Connect</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ infinity: true }}
        className="text-slate-400 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed"
      >
        I’m always open to discussing new opportunities, collaborations, or just tech talk.
        Feel free to reach out — I’ll respond as soon as I can!
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ infinity: true }}
        className="flex flex-wrap justify-center gap-6 mt-4"
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/majid-mohammed044"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md shadow-blue-800 hover:shadow-blue-400 hover:scale-105 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/majid-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-600 text-blue-400 font-medium hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+233553051673"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500 text-green-400 font-medium hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ infinity: true }}
        className="text-slate-500 text-sm mt-8"
      >
        © {new Date().getFullYear()} Majid Mohammed. All Rights Reserved.
      </motion.p>
    </section>
  );
}
