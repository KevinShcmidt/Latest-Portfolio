import React, { ReactNode, useState, useMemo } from "react";

interface SkewTextProps {
  text: string;
  rotation: number;
  color: string; // Couleur hexadécimale ou classe Tailwind
  customEmojis?: string[]; // Émojis personnalisés optionnels
}

export default function SkewText({
  text,
  rotation,
  color,
  customEmojis,
}: SkewTextProps): ReactNode {
  // État pour gérer l'affichage des emojis
  const [showEmojis, setShowEmojis] = useState(false);
  
  // Dictionnaire d'émojis thématiques
  const emojiThemes: Record<string, string[]> = {
    simple: ["✨", "🔍", "👌", "🧩", "💡"],
    easy: ["🙂", "👍", "🎯", "✅", "🚀"],
    "easy-to-use": ["👆", "🔄", "📱", "💻",],
    design: ["🎨", "🖌️", "✏️", "📐", "🖼️"],
    good: ["👍", "💯", "⭐", "🏆", "🥇"],
    beautiful: ["✨", "💎", "🌟", "🌈", "💖"],
    professional: ["👔", "💼", "📊", "🏢", "🎓"],
    modern: ["📱", "💻", "🔋", "🚀", "🔮"],
    responsive: ["📱", "💻", "🖥️", "📲", "🔄"],
    fast: ["⚡", "🏃", "🚀", "⏱️", "💨"]
  };
  
  // Sélection des émojis en fonction du texte
  const emojis = useMemo(() => {
    if (customEmojis) return customEmojis;
    
    // Convertir le texte en minuscules et nettoyer des caractères spéciaux
    const cleanText = text.toLowerCase().replace(/[*_]/g, "");
    
    // Recherche des mots-clés dans le texte
    let selectedEmojis: string[] = [];
    
    Object.keys(emojiThemes).forEach(theme => {
      if (cleanText.includes(theme)) {
        selectedEmojis = [...selectedEmojis, ...emojiThemes[theme]];
      }
    });
    
    // Si aucun thème correspondant n'est trouvé, utiliser des émojis génériques
    if (selectedEmojis.length === 0) {
      selectedEmojis = ["✨", "🔥", "🚀", "💯", "🎉"];
    }
    
    // Déduplication
    return [...new Set(selectedEmojis)];
  }, [text, customEmojis, emojiThemes]);
  
  // Déterminer si la couleur commence par # ou est une valeur hexadécimale
  const isHexColor = color.startsWith("#") || /^[0-9A-Fa-f]{3,8}$/.test(color);
  
  // Style du composant
  const style = isHexColor 
    ? { 
        backgroundColor: color.startsWith("#") ? color : `#${color}`,
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-in-out",
        position: "relative" as const
      }
    : { 
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-in-out",
        position: "relative" as const
      };
  
  // Fonctions pour gérer le hover
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = `rotate(${-rotation}deg)`;
    setShowEmojis(true);
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = `rotate(${rotation}deg)`;
    setShowEmojis(false);
  };

  return (
    <span 
      className={`${!isHexColor ? `bg-${color}` : ''} font-semibold mx-4 px-6 py-2 inline-block -skew-x-12`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      
      {/* Conteneur pour les emojis */}
      {showEmojis && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {emojis.map((emoji, index) => (
            <span 
              key={index}
              className="absolute text-2xl animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${0.5 + Math.random() * 1.5}s`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </span>
  );
}