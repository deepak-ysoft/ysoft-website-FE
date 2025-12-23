import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Monitor, Cloud, Cpu, Shield, Server } from "lucide-react";

export default function OurOfferings() {
  const offerings = [
    {
      id: 1,
      icon: <Smartphone className="text-primary" />,
      title: "Mobile App Development",
      description:
        "Cross-platform and native apps with smooth performance and beautiful UI.",
      logos: [
        "/logos/flutter.png",
        "/logos/react-native.png",
        "/logos/swift.png",
        "/logos/kotlin.png",
      ],
    },
    {
      id: 2,
      icon: <Monitor className="text-primary" />,
      title: "Web App Development",
      description:
        "Robust and scalable web applications tailored to your business needs.",
      logos: [
        "/logos/react.png",
        "/logos/nodejs.png",
        "/logos/angular.png",
        "/logos/nextjs.png",
        "/logos/django.png",
      ],
    },
    {
      id: 3,
      icon: <Cloud className="text-primary" />,
      title: "DevOps & Cloud",
      description:
        "Reliable CI/CD pipelines, cloud infrastructure, and scalable deployments.",
      logos: [
        "/logos/docker.png",
        "/logos/jenkins.png",
        "/logos/aws.png",
        "/logos/kubernetes.png",
      ],
    },
    {
      id: 4,
      icon: <Cpu className="text-primary" />,
      title: "AI & Automation",
      description:
        "Smart AI solutions and automation workflows to optimize business processes.",
      logos: [
        "/logos/python.png",
        "/logos/tensorflow.png",
        "/logos/pytorch.png",
      ],
    },
    {
      id: 5,
      icon: <Shield className="text-primary" />,
      title: "Security & Compliance",
      description:
        "Implementing best practices for privacy, security, and regulatory compliance.",
      logos: ["/logos/owasp.png", "/logos/aws.png", "/logos/docker.png"],
    },
    {
      id: 6,
      icon: <Server className="text-primary" />,
      title: "Enterprise Solutions",
      description:
        "Custom enterprise platforms to streamline complex business processes.",
      logos: [
        "/logos/java.png",
        "/logos/php.png",
        "/logos/sql.png",
        "/logos/azure.png",
      ],
    },
  ];

  const [selected, setSelected] = useState(offerings[0]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-4 text-center">
          Our Offerings
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          {" "}
          We provide a complete suite of services and technologies to build,
          scale, and innovate your business.
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: List of Offerings */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            {offerings.map((off) => (
              <motion.div
                key={off.id}
                onClick={() => setSelected(off)}
                whileHover={{ scale: 1.03 }}
                className={`cursor-pointer p-6 rounded-2xl shadow-md transition ${
                  selected.id === off.id
                    ? "bg-primary/20 shadow-xl"
                    : "bg-white/10"
                } flex items-center gap-4`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {off.icon}
                </div>
                <h3 className="font-semibold text-lg">{off.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Selected Description & Logos */}
          <div className="lg:w-2/3 bg-white/10 rounded-3xl p-10 shadow-md min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-6">{selected.title}</h3>
                <motion.p
                  className="text-muted-foreground text-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {selected.description}
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  {selected.logos.map((logo, idx) => (
                    <motion.div
                      key={idx}
                      className="w-16 h-16 flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <img
                        src={logo}
                        alt=""
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
