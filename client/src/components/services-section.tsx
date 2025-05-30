import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const services = [
  {
    icon: "fas fa-robot",
    title: "AI Startup Agent",
    description: "Hyper-personalized Chief Science Officer synced with your psychological profile. It also explains its outputs from a neuroscience perspective so you can also understand what drives your decision-making process.",
    color: "light-green",
    hoverColor: "nature-green"
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Courses",
    description: "Practical courses that teach and help you to implement neuroscience in your company. They are also packed with mini-exercises for improved retention.",
    color: "nature-green",
    hoverColor: "sage"
  },
  {
    icon: "fas fa-podcast",
    title: "AI Podcast",
    description: "Built to educate the market on the potential and benefits of (using) neuroentrepreneurship. Just like the courses, it covers all the areas of a startup. It also offers solutions on problems startup people regularly deal with.",
    color: "sage",
    hoverColor: "light-green"
  }
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Our Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neuroscience-powered solutions designed to enhance startup performance and decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover-lift group"
            >
              <div className="mb-6">
                <i className={`${service.icon} text-4xl text-[hsl(var(--${service.color}))] group-hover:text-[hsl(var(--${service.hoverColor}))] transition-colors duration-300`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <button className="text-[hsl(var(--light-green))] hover:text-[hsl(var(--nature-green))] transition-colors duration-300 font-semibold">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
