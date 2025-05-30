import { useEffect, useState } from "react";
import logoPath from "@assets/Neoteq Logo.png";

interface Particle {
  id: number;
  left: number;
  delay: number;
  color: string;
}

const colors = [
  "hsl(var(--light-green))",
  "hsl(var(--nature-green))", 
  "hsl(var(--sage))",
  "hsl(var(--cream))"
];

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 9; i++) {
      newParticles.push({
        id: i,
        left: (i + 1) * 10,
        delay: Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particles"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            background: particle.color
          }}
        />
      ))}

    </div>
  );
}
