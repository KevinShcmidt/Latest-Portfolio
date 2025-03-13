import { JSX } from "react";
import { LucideIcon } from "lucide-react"; // Utilisation d'icônes Lucide, à installer avec `npm install lucide-react`

interface ButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  className?: string;
  icon?: LucideIcon | null; // Icône optionnelle
}

export default function ButtonComponent({
  label,
  onClick,
  isPrimary = true,
  className = "",
  icon: Icon, // Renommé pour pouvoir l'utiliser en tant que composant
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`
        flex items-center gap-2 justify-center
        ${isPrimary ? "px-8 py-4" : "px-6 py-3"}
        bg-custom-gradient 
        transition-all duration-500
        hover:bg-custom-gradient-hover
        hover:animate-gradientSlide
        rounded-full 
        text-textColorDark 
        text-sm 
        font-medium
        ${className}
      `}
      onClick={onClick}
    >
      
      {label}
      {Icon && <Icon className="w-5 h-5" />} {/* Affiche l'icône seulement si elle est définie */}
    </button>
  );
}
