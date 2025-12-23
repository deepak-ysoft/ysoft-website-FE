import { motion } from "framer-motion";

export default function WhoWeAre() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.h2 className="text-4xl font-extrabold mb-4" variants={item}>
            Who We Are
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            variants={item}
          >
            We are a team of passionate developers and designers dedicated to
            building smart, scalable software solutions that help businesses
            grow.
          </motion.p>

          {/* Description */}
          <motion.div
            className="space-y-4 text-muted-foreground"
            variants={item}
          >
            <p>
              Founded in [Year], our company has grown into a full-service
              software development agency. We pride ourselves on combining
              technical expertise with creative problem-solving to deliver
              outstanding results.
            </p>
            <p>
              Our mission is to empower businesses with tools that simplify
              processes, improve efficiency, and drive growth. We focus on
              innovation, quality, and long-term partnerships.
            </p>
          </motion.div>

          {/* Optional CTA */}
          <motion.div className="mt-8" variants={item}>
            <a
              href="#about"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition font-semibold"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
