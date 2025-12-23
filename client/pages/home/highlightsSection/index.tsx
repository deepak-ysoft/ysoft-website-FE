import { motion } from "framer-motion";
import { Clock, Headphones, Workflow, Layers, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const highlights = [
    {
      icon: <Clock className="text-primary" />,
      title: "On-time Delivery",
      text: "Reliable planning and predictable releases.",
    },
    {
      icon: <Headphones className="text-primary" />,
      title: "24/7 Support",
      text: "Always-on support for your team.",
    },
    {
      icon: <Workflow className="text-primary" />,
      title: "Agile Development",
      text: "Iterative delivery with constant feedback.",
    },
    {
      icon: <Layers className="text-primary" />,
      title: "Scalable Architecture",
      text: "Built to grow with your business.",
    },
    {
      icon: <Sparkles className="text-primary" />,
      title: "Personalized Service",
      text: "Solutions tailored to your needs.",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 text-center max-w-4xl mb-12">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We combine expertise, creativity, and dedication to deliver software
          solutions that drive results for our clients.
        </motion.p>
      </div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {highlights.map((h, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 hover:bg-white/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              {h.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
