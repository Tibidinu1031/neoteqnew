import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "5+", label: "Years Experience" }
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-8">About Neoteq</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a forward-thinking technology company dedicated to pushing the boundaries of what's possible. 
              Our team of experts combines creativity with technical excellence to deliver solutions that shape the future.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Founded on the principles of innovation and excellence, we've been at the forefront of technological advancement, 
              helping businesses transform their digital landscape with cutting-edge solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--sage))] to-[hsl(var(--nature-green))] rounded-lg font-semibold transition-transform duration-300"
            >
              Our Story
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
