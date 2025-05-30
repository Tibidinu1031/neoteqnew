import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const services = [
  {
    icon: "fas fa-robot",
    title: "AI & Machine Learning",
    description: "Advanced AI solutions that automate processes and provide intelligent insights for your business growth.",
    color: "light-green",
    hoverColor: "nature-green"
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications with stunning UI/UX and seamless performance.",
    color: "nature-green",
    hoverColor: "sage"
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that grow with your business needs and requirements.",
    color: "sage",
    hoverColor: "light-green"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain data integrity.",
    color: "cream",
    hoverColor: "nature-green"
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    color: "light-green",
    hoverColor: "sage"
  },
  {
    icon: "fas fa-globe",
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies and best practices.",
    color: "nature-green",
    hoverColor: "cream"
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions powered by the latest technology trends and innovative approaches.
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
