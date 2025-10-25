import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h2 className="text-xl font-bold">À propos de moi</h2>
      <p>Je suis un développeur débutant passionné par React.</p>
    </motion.div>
  );
}
