import { JSX } from "react";
import { LucideIcon } from "lucide-react";
import * as motion from "motion/react-client";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  className?: string;
  icon?: LucideIcon | null;
}

export default function ButtonComponent({
  label,
  onClick,
  isPrimary = true,
  className = "",
  icon: Icon,
}: ButtonProps): JSX.Element {
  return (
    <motion.div
      className={`
        flex items-center gap-2 justify-center
        ${isPrimary ? "px-8 py-4" : "px-6 py-3"}
        bg-custom-gradient 
        transition-colors duration-300
        hover:bg-custom-gradient-hover
        rounded-lg 
        text-textColorDark 
        text-sm 
        font-medium
        ${className}
      `}
      onClick={onClick}
      // Animation au survol
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
      }}
      // Animation au clic
      whileTap={{ scale: 0.95 }}
      // Animation d'apparition qui attire l'attention
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 15
      }}
      animate={{ 
        opacity: 1, 
        scale: [0.8, 1.1, 1],  // Séquence d'échelle: petit -> plus grand -> normal
        y: [15, -5, 0],        // Séquence de position: bas -> léger rebond vers le haut -> position normale
        transition: { 
          duration: 0.8,       // Animation plus longue pour être remarquée
          ease: "easeOut",     // Type d'interpolation pour un effet naturel
          times: [0, 0.6, 1]   // Timing des keyframes dans la séquence
        } 
      }}
    >
      <motion.div 
        className="flex items-center gap-2"
        // Le contenu clignote légèrement pour attirer l'attention
        animate={{ 
          opacity: [0, 1, 0.8, 1],
          transition: { 
            duration: 1.2,
            times: [0, 0.5, 0.7, 1]
          }
        }}
      >
        {label}
        {Icon && (
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ 
              opacity: 1,
              rotate: [0, -15, 15, -5, 0],  // Oscillation de l'icône
              transition: { 
                duration: 1,
                delay: 0.3
              }
            }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}