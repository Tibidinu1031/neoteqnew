import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-green))] via-[hsl(var(--dark-forest))] to-[hsl(var(--nature-green))] opacity-50"></div>
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">BRAIN-BASED</span><br />
            <span className="text-white">ENTREPRENEURSHIP</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            Improving startups' performance, decision-making and interactions using neuroscience principles.
          </p>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-[hsl(var(--light-green))] rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-[hsl(var(--sage))] rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, delay: 4 }}
        className="absolute top-1/2 left-20 w-12 h-12 bg-[hsl(var(--cream))] rounded-full opacity-25"
      />
    </section>
  );
}
