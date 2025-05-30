import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Address",
    content: "123 Tech Street, Innovation District\nSan Francisco, CA 94105",
    gradient: "from-[hsl(var(--cyber-cyan))] to-[hsl(var(--cyber-purple))]"
  },
  {
    icon: "fas fa-phone",
    title: "Phone",
    content: "+1 (555) 123-4567",
    gradient: "from-[hsl(var(--cyber-purple))] to-[hsl(var(--cyber-pink))]"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    content: "hello@neotech.com",
    gradient: "from-[hsl(var(--cyber-pink))] to-[hsl(var(--cyber-mint))]"
  }
];

const socialLinks = [
  { icon: "fab fa-twitter", gradient: "from-[hsl(var(--cyber-cyan))] to-[hsl(var(--cyber-purple))]" },
  { icon: "fab fa-linkedin", gradient: "from-[hsl(var(--cyber-purple))] to-[hsl(var(--cyber-pink))]" },
  { icon: "fab fa-github", gradient: "from-[hsl(var(--cyber-pink))] to-[hsl(var(--cyber-mint))]" },
  { icon: "fab fa-instagram", gradient: "from-[hsl(var(--cyber-mint))] to-[hsl(var(--cyber-cyan))]" }
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

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-white bg-opacity-10 border-white border-opacity-20 focus:border-[hsl(var(--cyber-cyan))] placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-white bg-opacity-10 border-white border-opacity-20 focus:border-[hsl(var(--cyber-cyan))] placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 focus:border-[hsl(var(--cyber-cyan))] placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 focus:border-[hsl(var(--cyber-cyan))] placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-white bg-opacity-10 border-white border-opacity-20 focus:border-[hsl(var(--cyber-cyan))] placeholder-gray-400 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[hsl(var(--cyber-cyan))] to-[hsl(var(--cyber-purple))] hover:scale-105 transition-transform duration-300 cyber-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center`}>
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
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
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center transition-transform duration-300`}
                    >
                      <i className={`${social.icon} text-white`}></i>
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
