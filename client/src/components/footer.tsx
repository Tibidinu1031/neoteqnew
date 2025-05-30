import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 border-t border-white border-opacity-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">NeoTech</div>
          <div className="text-gray-300 text-center md:text-right">
            <p>&copy; 2024 NeoTech. All rights reserved.</p>
            <p className="text-sm mt-2">Shaping the future through innovation</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
