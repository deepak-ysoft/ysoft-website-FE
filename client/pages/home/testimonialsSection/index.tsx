import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, EduTech Co.",
      photo: "/clients/alice.jpg",
      text: "Their team delivered our mobile app on time and exceeded expectations. Highly recommend!",
      rating: 5,
      companyLogo: "/logos/edutech.png",
    },
    {
      name: "Michael Smith",
      role: "CTO, HealthPlus",
      photo: "/clients/michael.jpg",
      text: "The software solutions were robust, scalable, and exactly what our business needed.",
      rating: 5,
      companyLogo: "/logos/healthplus.png",
    },
    {
      name: "Sarah Lee",
      role: "Founder, FinTech Solutions",
      photo: "/clients/sarah.jpg",
      text: "Amazing collaboration and technical expertise. Our web platform is now faster and more reliable.",
      rating: 4,
      companyLogo: "/logos/fintech.png",
    },
    {
      name: "David Kim",
      role: "Product Manager, TravelPro",
      photo: "/clients/david.jpg",
      text: "They understood our requirements perfectly and delivered a polished, professional product.",
      rating: 5,
      companyLogo: "/logos/travelpro.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 text-center mb-16 max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-4">What Clients Say</h2>
        <p className="text-muted-foreground text-lg">
          Our clients trust us to deliver exceptional software solutions.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 rounded-3xl p-10 shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mb-6 object-cover"
            />
            <p className="text-lg text-muted-foreground mb-4">
              "{testimonials[current].text}"
            </p>
            <h4 className="font-semibold text-xl">
              {testimonials[current].name}
            </h4>
            <p className="text-sm text-primary mb-4">
              {testimonials[current].role}
            </p>

            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.539 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.047 9.392c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.965z" />
                  </svg>
                ),
              )}
            </div>

            {/* Company Logo */}
            <img
              src={testimonials[current].companyLogo}
              alt={testimonials[current].role}
              className="h-12 object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}

        {/* Animated Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <motion.span
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-primary" : "bg-primary/30"}`}
              layout
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
