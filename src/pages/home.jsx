import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Frontend Developer & UI/UX Designer
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all"
          >
            View My Work
          </motion.button>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'TypeScript', 'UI/UX Design', 'Responsive Design', 'Git'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-md border border-yellow-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          variants={itemVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-lg border border-yellow-200"
              >
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600">A brief description of the project and the technologies used.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating? Get in touch!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all"
          >
            Contact Me
          </motion.button>
        </motion.section>
      </motion.div>
    </div>
  );
}
