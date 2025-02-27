import { JSX } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void; // Type plus précis qu'une Function générique
  isPrimary?: boolean; // Optionnel avec une valeur par défaut
  className?: string; // Pour permettre des styles supplémentaires
}

export default function ButtonComponent({
  label,
  onClick,
  isPrimary = true, // Valeur par défaut
  className = "", // Valeur par défaut
}: ButtonProps): JSX.Element {
  // JSX.Element est plus approprié que ReactNode ici
  return (
    <button
      className={`
        ${isPrimary ? "px-8 py-4" : "px-6 py-3"}
        bg-custom-gradient 
        transition-all duration-500
    hover:bg-custom-gradient-hover
    hover:animate-gradientSlide
        rounded-lg 
        text-textColorDark 
        text-sm 
        font-medium
        
        ${className}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
