import React from "react"; // Importe React pour créer des composants
import { motion } from "framer-motion"; // Importe Framer Motion pour les animations
import Header from "./components/Header"; // Importe le composant Header
import Footer from "./components/Footer"; // Importe le composant Footer
import Home from "./pages/Home";// Importe la page d’accueil

function App() { // Déclare le composant principal de l’application
  return (
    <div className="min-h-screen flex flex-col"> {/* Conteneur principal avec Tailwind */}
      <Header /> {/* En-tête du site */}
      
      <motion.main // Section principale animée
        className="flex-grow p-8 bg-gray-50 text-center"
        initial={{ opacity: 0, y: 20 }} // Animation d’apparition
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Home /> {/* Page d’accueil affichée */}
      </motion.main>
      
      <Footer /> {/* Pied de page */}
    </div>
  );
}

export default App; // Exporte le composant pour l’utiliser ailleurs
