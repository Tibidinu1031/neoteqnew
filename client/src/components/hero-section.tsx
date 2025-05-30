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
            <span className="gradient-text">FUTURE</span><br />
            <span className="text-white">IS NOW</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into cutting-edge digital experiences with advanced technology and innovative design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://neotequpt.replit.app/', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--light-green))] to-[hsl(var(--nature-green))] rounded-lg font-semibold transition-transform duration-300 cyber-glow"
            >
              AI Startup Agent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=2sTIMFEapYU', '_blank')}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            >
              Watch Demo for V1
            </motion.button>
          </div>
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
