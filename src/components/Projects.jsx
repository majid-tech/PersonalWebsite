import { motion } from "framer-motion";

export default function Projects() {
  // Animation variants for a staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center text-center gap-10 pt-24 pb-16 px-6 sm:px-10 lg:px-24 bg-[#0f111a]"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-slate-200"
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-slate-400 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed"
      >
        A collection of my favorite work bringing ideas to digital life.  
        I focus on seamless user experience, accessibility, and polished UI interactions.
      </motion.p>

      {/* Project Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl"
      >
        {/* Project Card 1 */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1c28] p-5 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/40 hover:shadow-lg transition-all duration-300"
        >
          <img
            src="assets/images/project1.jpg"
            alt="Portfolio Website"
            className="rounded-md mb-4 h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold text-blue-400">
            Portfolio Website
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            A personal portfolio showcasing my skills, experience, and projects.
          </p>
          <div className="flex flex-col gap-3 justify-center mt-4 text-sm w-full">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
            >
              Live
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Code
            </a>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1c28] p-5 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/40 hover:shadow-lg transition-all duration-300"
        >
          <img
            src="assets/images/project2.jpg"
            alt="E-Commerce Platform"
            className="rounded-md mb-4 h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold text-blue-400">
            E-Commerce Platform
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            A shopping platform with a cart system and smooth user flow.
          </p>
          <div className="flex flex-col gap-3 justify-center mt-4 text-sm w-full">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
            >
              Live
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Code
            </a>
          </div>
        </motion.div>

        {/* Project Card 3 */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1a1c28] p-5 rounded-xl border border-slate-800 hover:border-blue-400 hover:shadow-blue-400/40 hover:shadow-lg transition-all duration-300"
        >
          <img
            src="assets/images/project3.jpg"
            alt="Waste Management App"
            className="rounded-md mb-4 h-40 w-full object-cover"
          />
          <h3 className="text-xl font-semibold text-blue-400">
            Waste Management App
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            A Flutter prototype improving community waste pickup scheduling.
          </p>
          <div className="flex flex-col gap-3 justify-center mt-4 text-sm w-full">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
            >
              Live
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Code
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
