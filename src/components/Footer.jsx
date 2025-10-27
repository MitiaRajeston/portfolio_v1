import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <p>Email: your.email@example.com</p>
            <p>Phone: +1234567890</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">GitHub</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Location</h3>
            <p>Your City</p>
            <p>Your Country</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;