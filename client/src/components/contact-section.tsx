import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@assets/1740159016379.jpg";

const contactInfo = [
  {
    icon: "fas fa-envelope",
    title: "Tiberius Dinu\nNeoteq Founder & CEO",
    content: "tiberiusdinu@neoteq.us",
    gradient: "from-[hsl(var(--sage))] to-[hsl(var(--cream))]"
  }
];

const socialLinks = [
  { 
    icon: "fas fa-calendar-alt", 
    gradient: "from-[hsl(var(--light-green))] to-[hsl(var(--nature-green))]",
    href: "https://calendly.com/tiberiusdinu-neoteq/neoteq-business-opportunities",
    title: "Schedule Meeting"
  },
  { 
    icon: "fab fa-linkedin", 
    gradient: "from-[hsl(var(--nature-green))] to-[hsl(var(--sage))]",
    href: "https://www.linkedin.com/in/tiberius-dinu-51a625170/",
    title: "LinkedIn"
  }
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section ref={ref} id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project and explore the possibilities.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[hsl(var(--light-green))]">
                      <img 
                        src={profileImage} 
                        alt="Tiberius Dinu" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 whitespace-pre-line">{info.title}</h3>
                      <a 
                        href={`mailto:${info.content}`}
                        className="text-gray-300 hover:text-[hsl(var(--light-green))] transition-colors duration-300 underline"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-4 text-center">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex flex-col items-center space-y-2 group`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center transition-transform duration-300`}>
                        <i className={`${social.icon} text-white text-lg`}></i>
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-[hsl(var(--light-green))] transition-colors duration-300">
                        {social.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
