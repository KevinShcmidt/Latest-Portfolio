"use client";
import React, { JSX, useState } from "react";
import * as motion from "motion/react-client";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import Modals from "./Modals";

// ── Types ──
interface WorkItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  buttonAction: () => void;
  modalContent?: { title: string; description: string; images: string[] };
}

// ── Card 3D ──
function Card3D({
  item,
  position,
  total,
  onClick,
}: {
  item: WorkItem;
  position: number;
  total: number;
  onClick: () => void;
}) {
  const isCenter = position === 0;
  const absPos = Math.abs(position);
  const visible = absPos <= 2;

  const rotateY = position * 25;
  const translateX = position === 0 ? 0
    : position === 1 ? 300
    : position === -1 ? -300
    : position === 2 ? 520
    : -520;
  const translateZ = isCenter ? 60 : absPos === 1 ? -40 : -120;
  const scale = isCenter ? 1 : absPos === 1 ? 0.88 : 0.75;
  const opacity = isCenter ? 1 : absPos === 1 ? 0.85 : 0.55;
  const zIndex = total - absPos;

  if (!visible) return null;

  return (
    <motion.div
      onClick={onClick}
      animate={{ rotateY, x: translateX, z: translateZ, scale, opacity }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "absolute",
        left: "50%",
        marginLeft: "-160px", // demi-largeur card pour centrer
        zIndex,
        transformStyle: "preserve-3d",
        cursor: isCenter ? "default" : "pointer",
      }}
      className="w-[280px] sm:w-[300px] md:w-[320px]"
    >
      <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        isCenter
          ? "border-[#E0A002]/60 shadow-2xl shadow-[#E0A002]/20 bg-white"
          : "border-[#E0A002]/15 bg-white/80 shadow-lg"
      }`}>
        {/* Image */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={item.image}
            fill
            alt={item.title}
            className={`object-cover transition-transform duration-500 ${isCenter ? "scale-100" : "scale-105"}`}
            sizes="320px"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${isCenter ? "opacity-30" : "opacity-60"}`} />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-[#E0A002]/90 text-white">
              Project
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-px bg-[#E0A002]" />
            <h2 className="text-sm font-bold text-[#14213d]">{item.title}</h2>
          </div>
          <p className={`text-xs text-[#14213d]/65 leading-relaxed ${isCenter ? "line-clamp-3" : "line-clamp-2"}`}>
            {item.description}
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E0A002]/10">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `rgba(224,160,2,${0.3 + i * 0.25})` }} />
              ))}
            </div>
            {item.link && item.link.trim() !== "" ? (
              <Link href={item.link} target="_blank" onClick={(e) => e.stopPropagation()} className="text-[11px] font-bold text-[#E0A002] hover:text-[#c48c00] transition-colors">
                View project →
              </Link>
            ) : (
              <button onClick={(e) => { e.stopPropagation(); item.buttonAction(); }} className="text-[11px] font-bold text-[#E0A002] hover:text-[#c48c00] transition-colors">
                View project →
              </button>
            )}
          </div>
        </div>
      </div>

      {isCenter && (
        <div className="absolute -bottom-6 left-4 right-4 h-6 rounded-b-2xl blur-md opacity-30" style={{ background: "rgba(224,160,2,0.3)" }} />
      )}
    </motion.div>
  );
}

// ── Navigation dots ──
function NavDots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2 mt-12 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`rounded-full transition-all duration-300 ${
            i === active
              ? "w-6 h-2 bg-[#E0A002]"
              : "w-2 h-2 bg-[#E0A002]/30 hover:bg-[#E0A002]/60"
          }`}
        />
      ))}
    </div>
  );
}

// ── Main ──
export default function Work(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string; description: string; images: string[];
  } | null>(null);

  const openModal = (project: { title: string; description: string; images: string[] }) => {
    setSelectedProject(project);
    setIsActiveModal(true);
  };

  const WorkItems: WorkItem[] = [
    {
      id: 1,
      image: "/images/CardImage/pride.png",
      title: "Pride",
      description: "A mockup for a music platform that I designed with Figma, highlighting design trends adapted to user personas.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=202-250&t=RacRrbuy2pHh0ixO-0&scaling=min-zoom&content-scaling=fixed&page-id=197%3A2",
      buttonAction: () => {},
    },
    {
      id: 2,
      image: "/images/CardImage/energie.png",
      title: "Green Future",
      description: "A landing page mockup for a company called Green Future, which focuses on green energy.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=282-15&t=z7bTlmOsbQKllSok-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=282%3A15",
      buttonAction: () => {},
    },
    {
      id: 3,
      image: "/images/CardImage/goodVibe.png",
      title: "Good Vibe",
      description: "A mobile app mockup for a platform that allows users to listen to music.",
      link: "https://www.figma.com/proto/uPR9ohmQGxSh3GteN8rj3b/Challenge-Daily-UI?node-id=135-12&t=DRf8jKl4R6LfSAKS-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=121%3A117&show-proto-sidebar=1",
      buttonAction: () => {},
    },
    {
      id: 4,
      image: "/images/CardImage/chargeoEv.png",
      title: "Chargeo EV",
      description: "An application that allows users to find available electric vehicle chargers and recharge their EV.",
      link: "",
      buttonAction: () => openModal({
        title: "Chargeo EV",
        description: "An application that allows users to find available electric vehicle chargers and recharge their EV. Technologies used : Flutter, Figma",
        images: ["/images/CardImage/chargeoEv.png"],
      }),
    },
    {
      id: 5,
      image: "/images/CardImage/elcdis.png",
      title: "Chargeo EV Dashboard",
      description: "Frontend of the Chargeo EV mobile application dashboard, developed with React JS.",
      link: "",
      buttonAction: () => openModal({
        title: "Chargeo EV Dashboard",
        description: "Frontend of the Chargeo EV mobile application dashboard, developed with React JS.\nTechnologies used: React JS, React hook form, TanStack Query, Rechart, Tailwind CSS, and Figma.",
        images: ["/images/CardImage/elcdis.png", "/images/CardImage/elcdis.png", "/images/CardImage/elcdis.png"],
      }),
    },
    {
      id: 6,
      image: "/images/CardImage/evoyage.png",
      title: "E-Voyage",
      description: "The biggest project I've developed since learning to code: a web app for booking seats on land trips.",
      link: "",
      buttonAction: () => openModal({
        title: "E-Voyage",
        description: "The biggest project I've developed since learning to code: a web app for booking seats on land trips. Technologies used : Laravel, JavaScript",
        images: ["/images/CardImage/evoyage.png"],
      }),
    },
  ];

  const prev = () => setActiveIndex((i) => (i - 1 + WorkItems.length) % WorkItems.length);
  const next = () => setActiveIndex((i) => (i + 1) % WorkItems.length);

  // Drag to swipe
  const dragStart = React.useRef<number>(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStart.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart.current - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div className="relative mt-10 md:mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 pb-24">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title text="My latest projects" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-sm md:text-base text-center text-[#14213d]/70 max-w-2xl mx-auto"
      >
        A selection of projects that reflect my passion for clean interfaces and solid code.
      </motion.p>

      {/* ── Carousel 3D ── */}
      <div className="relative mt-16 flex items-center justify-center">
        {/* Scene 3D */}
        <div
          className="relative flex items-center justify-center select-none"
          style={{ perspective: "1200px", height: "420px", width: "100%" }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div style={{ transformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}>
            {WorkItems.map((item, i) => {
              const position = ((i - activeIndex + WorkItems.length) % WorkItems.length);
              const centeredPos = position > WorkItems.length / 2 ? position - WorkItems.length : position;
              return (
                <Card3D
                  key={item.id}
                  item={item}
                  position={centeredPos}
                  total={WorkItems.length}
                  onClick={() => { if (centeredPos !== 0) setActiveIndex(i); }}
                />
              );
            })}
          </div>
        </div>

        {/* Boutons nav */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full border border-[#E0A002]/30 bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#E0A002] hover:bg-[#E0A002] hover:text-white transition-all duration-200 shadow-md"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full border border-[#E0A002]/30 bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#E0A002] hover:bg-[#E0A002] hover:text-white transition-all duration-200 shadow-md"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <NavDots
        count={WorkItems.length}
        active={activeIndex}
        onSelect={setActiveIndex}
      />

      {/* Compteur */}
      <motion.p
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-4 text-xs text-[#14213d]/40 font-mono"
      >
        {String(activeIndex + 1).padStart(2, "0")} / {String(WorkItems.length).padStart(2, "0")}
      </motion.p>

      {/* Modal */}
      {isActiveModal && selectedProject && (
        <Modals
          onClose={() => setIsActiveModal(false)}
          title={selectedProject.title}
          description={selectedProject.description}
          images={selectedProject.images}
        />
      )}
    </div>
  );
}