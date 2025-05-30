import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  color: string;
}

const colors = [
  "hsl(var(--cyber-cyan))",
  "hsl(var(--cyber-purple))", 
  "hsl(var(--cyber-pink))",
  "hsl(var(--cyber-mint))"
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
