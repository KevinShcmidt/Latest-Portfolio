import React, { ReactNode, useState, useMemo } from "react";

interface SkewTextProps {
  text: string;
  rotation: number;
  color: string;
  customEmojis?: string[];
  className?: string;
  responsive?: boolean;
}

export default function SkewText({
  text,
  rotation,
  color,
  customEmojis,
  className = "",
  responsive = true,
}: SkewTextProps): ReactNode {
  const [showEmojis, setShowEmojis] = useState(false);

  const emojis = useMemo(() => {
    if (customEmojis) return customEmojis;

    // ✅ Déplacé ici pour éviter le warning react-hooks/exhaustive-deps
    const emojiThemes: Record<string, string[]> = {
      simple: ["✨", "🔍", "👌", "🧩", "💡"],
      easy: ["🙂", "👍", "🎯", "✅", "🚀"],
      "easy-to-use": ["👆", "🔄", "📱", "💻"],
      design: ["🎨", "🖌️", "✏️", "📐", "🖼️"],
      good: ["👍", "💯", "⭐", "🏆", "🥇"],
      beautiful: ["✨", "💎", "🌟", "🌈", "💖"],
      professional: ["👔", "💼", "📊", "🏢", "🎓"],
      modern: ["📱", "💻", "🔋", "🚀", "🔮"],
      responsive: ["📱", "💻", "🖥️", "📲", "🔄"],
      fast: ["⚡", "🏃", "🚀", "⏱️", "💨"],
    };

    const cleanText = text.toLowerCase().replace(/[*_]/g, "");
    let selectedEmojis: string[] = [];

    Object.keys(emojiThemes).forEach((theme) => {
      if (cleanText.includes(theme)) {
        selectedEmojis = [...selectedEmojis, ...emojiThemes[theme]];
      }
    });

    if (selectedEmojis.length === 0) {
      selectedEmojis = ["✨", "🔥", "🚀", "💯", "🎉"];
    }

    return [...new Set(selectedEmojis)];
  }, [text, customEmojis]); // ✅ emojiThemes retiré des deps

  const isHexColor = color.startsWith("#") || /^[0-9A-Fa-f]{3,8}$/.test(color);

  const responsiveRotation = responsive
    ? { default: rotation, sm: rotation * 0.75, xs: rotation * 0.5 }
    : { default: rotation, sm: rotation, xs: rotation };

  const style = {
    backgroundColor: isHexColor
      ? color.startsWith("#")
        ? color
        : `#${color}`
      : undefined,
    transform: `rotate(${responsiveRotation.default}deg)`,
    transition: "transform 0.3s ease-in-out, padding 0.3s ease",
    position: "relative" as const,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = `rotate(${-responsiveRotation.default}deg)`;
    setShowEmojis(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = `rotate(${responsiveRotation.default}deg)`;
    setShowEmojis(false);
  };

  return (
    <span
      className={`
        ${!isHexColor ? `bg-${color}` : ""}
        font-semibold text-white
        mx-2 sm:mx-3 md:mx-4
        px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2
        inline-block -skew-x-12
        text-sm sm:text-base md:text-lg
        ${className}
      `}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {showEmojis && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="absolute text-lg sm:text-xl md:text-2xl animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${0.5 + Math.random() * 1.5}s`,
                animationDelay: `${Math.random() * 0.5}s`,
                opacity: 0.8,
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