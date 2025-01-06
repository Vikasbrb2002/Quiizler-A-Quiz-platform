import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-500">About Us</h1>
        <p className="text-lg text-gray-300 mt-4">
          Meet the passionate minds behind the Quiizler platform.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
        {/* Card: Vikas Kumar */}
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          <div className="p-8">
            <img
              src="/vikas.jpeg" // Replace with your actual image
              alt="Vikas Kumar"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-white text-center mb-2">
              Vikas Kumar
            </h2>
            <p className="text-gray-200 text-center mb-4">
              Passionate Developer | Innovator | Lifelong Learner
            </p>
            <p className="text-gray-300 mb-6 text-center">
              Vikas focuses on creating impactful solutions, combining technical
              expertise with a drive for innovation.
            </p>
            <div className="flex justify-center">
              <a
                href="https://linkedin.com/in/vikas" // Replace with actual LinkedIn URL
                className="bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card: Vidyush Singh */}
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          <div className="p-8">
            <img
              src="/vidyush.jpeg" // Replace with your actual image
              alt="Vidyush Singh"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-white text-center mb-2">
              Vidyush Singh
            </h2>
            <p className="text-gray-200 text-center mb-4">
              Full Stack Developer | Visionary | Problem Solver
            </p>
            <p className="text-gray-300 mb-6 text-center">
              Vidyush specializes in building scalable solutions, ensuring every
              detail aligns with the vision of the project.
            </p>
            <div className="flex justify-center">
              <a
                href="https://linkedin.com/in/vidyush" // Replace with actual LinkedIn URL
                className="bg-white text-green-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
