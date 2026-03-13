"use client";
import { useEffect, useRef } from "react";

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let animationId: number = 0;
    let width = 0;
    let height = 0;

    const PARTICLE_COUNT = 80;
    const MAX_DIST = 160;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; opacity: number;
    }

    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4,
        r: Math.random() * 2.2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    }

    function drawArtGeometry() {
      // ── Top-left : grand arc Kandinsky ──
      ctx.beginPath();
      ctx.arc(width * 0.08, height * 0.08, 110, 0, Math.PI);
      ctx.strokeStyle = "rgba(224,160,2,0.10)";
      ctx.lineWidth = 24;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width * 0.08, height * 0.08, 110, 0, Math.PI);
      ctx.strokeStyle = "rgba(224,160,2,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── Top-right : triangle wireframe ──
      const tx = width * 0.92, ty = height * 0.08;
      ctx.beginPath();
      ctx.moveTo(tx, ty - 55);
      ctx.lineTo(tx + 48, ty + 36);
      ctx.lineTo(tx - 48, ty + 36);
      ctx.closePath();
      ctx.strokeStyle = "rgba(224,160,2,0.22)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = "rgba(224,160,2,0.04)";
      ctx.fill();

      // ── 1/4 hauteur gauche : losange ──
      const d1x = width * 0.04, d1y = height * 0.25;
      ctx.save();
      ctx.translate(d1x, d1y);
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.rect(-20, -20, 40, 40);
      ctx.strokeStyle = "rgba(224,160,2,0.30)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = "rgba(224,160,2,0.04)";
      ctx.fill();
      ctx.restore();

      // ── 1/4 hauteur droite : arcs concentriques ──
      [40, 72, 104].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(width * 0.97, height * 0.28, r, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.strokeStyle = `rgba(224,160,2,${0.14 - i * 0.03})`;
        ctx.lineWidth = i === 0 ? 12 : 1;
        ctx.stroke();
      });

      // ── Milieu gauche : trait diagonal brushstroke ──
      ctx.beginPath();
      ctx.moveTo(width * 0.02, height * 0.42);
      ctx.lineTo(width * 0.06, height * 0.58);
      ctx.strokeStyle = "rgba(224,160,2,0.08)";
      ctx.lineWidth = 26;
      ctx.lineCap = "round" as CanvasLineCap;
      ctx.stroke();
      ctx.lineWidth = 1;

      // ── Milieu droite : spirale Fibonacci ──
      const spx = width * 0.95, spy = height * 0.52;
      type SpiralStep = { r: number; sa: number; ea: number; ox: number; oy: number };
      const spiralData: SpiralStep[] = [
        { r: 10, sa: 0,             ea: Math.PI / 2,   ox: 0,  oy: 0  },
        { r: 16, sa: Math.PI / 2,   ea: Math.PI,       ox: -6, oy: 0  },
        { r: 26, sa: Math.PI,       ea: Math.PI * 1.5, ox: -6, oy: 10 },
        { r: 42, sa: Math.PI * 1.5, ea: Math.PI * 2,   ox: 10, oy: 10 },
        { r: 68, sa: 0,             ea: Math.PI / 2,   ox: 10, oy: -16},
      ];
      spiralData.forEach(({ r, sa, ea, ox, oy }, i) => {
        ctx.beginPath();
        ctx.arc(spx + ox, spy + oy, r, sa, ea);
        ctx.strokeStyle = `rgba(224,160,2,${0.30 - i * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // ── 3/4 hauteur gauche : cercle creux ──
      ctx.beginPath();
      ctx.arc(width * 0.06, height * 0.72, 60, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(224,160,2,0.08)";
      ctx.lineWidth = 16;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width * 0.06, height * 0.72, 60, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(224,160,2,0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── 3/4 hauteur droite : losange ──
      const d2x = width * 0.96, d2y = height * 0.75;
      ctx.save();
      ctx.translate(d2x, d2y);
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.rect(-18, -18, 36, 36);
      ctx.strokeStyle = "rgba(224,160,2,0.28)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = "rgba(224,160,2,0.04)";
      ctx.fill();
      ctx.restore();

      // ── Bottom-left : arc ──
      ctx.beginPath();
      ctx.arc(width * 0.05, height * 0.95, 80, -Math.PI * 0.4, Math.PI * 0.1);
      ctx.strokeStyle = "rgba(224,160,2,0.10)";
      ctx.lineWidth = 18;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width * 0.05, height * 0.95, 80, -Math.PI * 0.4, Math.PI * 0.1);
      ctx.strokeStyle = "rgba(224,160,2,0.16)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── Bottom-right : triangle ──
      const bx = width * 0.93, by = height * 0.93;
      ctx.beginPath();
      ctx.moveTo(bx, by - 44);
      ctx.lineTo(bx + 38, by + 28);
      ctx.lineTo(bx - 38, by + 28);
      ctx.closePath();
      ctx.strokeStyle = "rgba(224,160,2,0.20)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = "rgba(224,160,2,0.03)";
      ctx.fill();

      // ── Lignes dashed accent ──
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = "rgba(224,160,2,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.15, height * 0.04);
      ctx.lineTo(width * 0.38, height * 0.04);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width * 0.62, height * 0.96);
      ctx.lineTo(width * 0.85, height * 0.96);
      ctx.stroke();
      ctx.setLineDash([]);

      // ── Nœuds circuit ──
      const nodes = [
        { x: width * 0.92, y: height * 0.08 },
        { x: width * 0.04, y: height * 0.25 },
        { x: width * 0.96, y: height * 0.75 },
        { x: width * 0.08, y: height * 0.92 },
      ];
      nodes.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(224,160,2,0.38)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(224,160,2,0.50)";
        ctx.fill();
      });

      // ── Glow radial global ──
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.3, width * 0.6);
      grad.addColorStop(0, "rgba(224,160,2,0.05)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      drawArtGeometry();

      // Connexions
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.20;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(224,160,2,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Points
      particles.forEach((p) => {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grd.addColorStop(0, `rgba(224,160,2,${p.opacity * 0.5})`);
        grd.addColorStop(1, "rgba(224,160,2,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,160,2,${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}