import { motion } from "framer-motion";
import { Book, Heart, Briefcase, ShoppingCart, Factory, Globe, Cpu, Shield } from "lucide-react";

export default function IndustryExpertise() {
  const industries = [
    {
      icon: <Book className="text-primary" />,
      title: "Education",
      description: "Custom e-learning platforms, school management, and virtual classrooms.",
    },
    {
      icon: <Heart className="text-primary" />,
      title: "Healthcare",
      description: "Telemedicine apps, patient management systems, and medical analytics solutions.",
    },
    {
      icon: <Briefcase className="text-primary" />,
      title: "Finance",
      description: "Banking, fintech, and secure payment solutions tailored to your business.",
    },
    {
      icon: <ShoppingCart className="text-primary" />,
      title: "E-commerce",
      description: "Scalable online stores, marketplaces, and payment integrations.",
    },
    {
      icon: <Factory className="text-primary" />,
      title: "Manufacturing",
      description: "ERP systems, IoT solutions, and supply chain automation software.",
    },
    {
      icon: <Globe className="text-primary" />,
      title: "Travel & Hospitality",
      description: "Booking platforms, customer experience apps, and travel management solutions.",
    },
    {
      icon: <Cpu className="text-primary" />,
      title: "AI & Tech Startups",
      description: "AI-driven platforms, predictive analytics, and automation software.",
    },
    {
      icon: <Shield className="text-primary" />,
      title: "Security & Compliance",
      description: "Secure apps, GDPR & HIPAA compliant software solutions.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 text-center mb-16 max-w-4xl">
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Industry-Specific Software Development Expertise
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build software tailored to the unique requirements of your industry.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 hover:bg-white/20 p-8 rounded-3xl shadow-md hover:shadow-xl cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 text-3xl">
              {industry.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{industry.title}</h3>
            <p className="text-muted-foreground text-sm">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
