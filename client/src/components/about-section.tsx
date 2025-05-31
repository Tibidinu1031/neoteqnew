import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const stats = [
  { value: "3.5K+", label: "Downloads" },
  { value: "80+", label: "5 star reviews" }
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
              Neoteq sits at the intersection of AI, entrepreneurial education and neuroscience. Neoteq's mission is to build the new field of neuroentrepreneurship.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              That means a fundamental shift in how startups are built, ran and scaled using a brain-first and human-centric approach. It requires a market education in advance and that is precisely what the podcast is about, as mentioned above.
            </p>
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
