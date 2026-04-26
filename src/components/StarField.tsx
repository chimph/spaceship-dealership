"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas as HTMLCanvasElement;
    const context = ctx as CanvasRenderingContext2D;

    const starColors = [
      [255, 255, 255] as [number, number, number],
      [200, 220, 255] as [number, number, number],
      [100, 150, 255] as [number, number, number],
      [255, 200, 150] as [number, number, number],
      [255, 180, 80] as [number, number, number],
      [255, 140, 60] as [number, number, number],
      [255, 100, 80] as [number, number, number],
    ] as const;

    let animationId: number;

    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      targetOpacity: number;
      twinkleSpeed: number;
      color: readonly [number, number, number];
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
    }

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const STAR_COUNT = 250;

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }

    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          size: Math.random() * 2.5 + 0.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random(),
          targetOpacity: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    }

    function createShootingStar() {
      if (Math.random() > 0.003) return;
      shootingStars.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height * 0.5,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        opacity: 1,
        life: 0,
      });
    }

    function draw() {
      context.clearRect(0, 0, c.width, c.height);

      for (const star of stars) {
        star.targetOpacity += (Math.random() - 0.5) * 0.04;
        star.targetOpacity = Math.max(0.1, Math.min(1, star.targetOpacity));
        star.opacity += (star.targetOpacity - star.opacity) * star.twinkleSpeed * 10;
        star.opacity = Math.max(0.05, Math.min(1, star.opacity));

        star.y -= star.speed;
        if (star.y < -5) {
          star.y = c.height + 5;
          star.x = Math.random() * c.width;
          star.targetOpacity = Math.random();
        }

        const [r, g, b] = star.color;
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.opacity * 0.8})`;
        context.fill();
      }

      createShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life += 0.02;
        s.opacity = Math.max(0, 1 - s.life);

        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const gradient = context.createLinearGradient(
          s.x,
          s.y,
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.beginPath();
        context.moveTo(s.x, s.y);
        context.lineTo(
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        context.strokeStyle = gradient;
        context.lineWidth = 1.5;
        context.stroke();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    draw();

    const handleResize = () => {
      resize();
      initStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="stars"
      style={{ zIndex: -1 }}
    />
  );
}
