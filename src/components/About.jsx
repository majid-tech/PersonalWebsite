// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col gap-8 items-center pt-24 pb-16 px-6 sm:px-10 lg:px-24 text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ infinite: true }}
          className="text-3xl text-slate-200 sm:text-4xl font-bold mb-2"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ infinite: true }} 
          className="text-slate-300 max-w-3xl text-[16px] sm:text-[18px] leading-relaxed text-justify">
          I’m <span className="text-blue-400 font-semibold">Majid Mohammed</span>, a passionate
          <span className="text-blue-400"> Full-Stack Developer</span> who loves turning ideas into
          beautiful, functional digital experiences. My journey began in IT support and network
          engineering, where I developed a strong problem-solving mindset and a deeper appreciation
          for reliable systems. I aim to build web applications that are fast, intuitive, and
          impactful in the real world.
        </motion.p>

        {/* Skills */}
        <div className="w-full max-w-6xl mt-10">
          <h3 className="text-2xl font-semibold mb-8 text-blue-400 text-center">
            Skills & Technologies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Frontend */}
            <div className="bg-[#1a1c28] p-6 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/50 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h4>
              <ul className="space-y-2 text-slate-200">
                <li>HTML5</li>
                <li>CSS3 / Tailwind</li>
                <li>JavaScript</li>
                <li>React / Framer-Motion</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-[#1a1c28] p-6 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/50 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Backend</h4>
              <ul className="space-y-2 text-slate-200">
                <li>Node.js</li>
                <li>Python / Django</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-[#1a1c28] p-6 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/50 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Tools</h4>
              <ul className="space-y-2 text-slate-200">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Google Cloud Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#projects"
          className="mt-12 inline-block rounded-lg bg-blue-600 px-10 py-3 font-medium text-white shadow-md shadow-blue-800 transition-all duration-300 hover:shadow-blue-400 hover:scale-105"
        >
          View My Projects 🚀
        </a>
      </section>
    </>
  );
}
