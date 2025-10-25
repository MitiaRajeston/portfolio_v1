import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-4"
    >
      Contactez-moi
    </motion.button>
  );
}
