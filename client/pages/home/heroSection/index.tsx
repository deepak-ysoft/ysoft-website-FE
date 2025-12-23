import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/id/1018/1920/1080", // Nature/Mountain
      headline: "Empowering Businesses with Smart Software Solutions",
      subheadline:
        "We build scalable websites, mobile apps, and custom software to drive growth.",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1015/1920/1080", // River/Landscape
      headline: "Innovative Technology for a Digital Future",
      subheadline:
        "Transforming ideas into reality with cutting-edge development services.",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1019/1920/1080", // Architecture/Tech
      headline: "Your Partner in Digital Transformation",
      subheadline:
        "Expert team delivering high-quality solutions tailored to your needs.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <section className="relative h-full w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full ml-0">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0 h-[800px] relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                  <div className="max-w-4xl mx-auto text-white">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
                    >
                      {slide.headline}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                      {slide.subheadline}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-4 text-lg shadow-lg hover:bg-primary/90 transition font-semibold"
                      >
                        Get a Quote <ArrowRight size={20} />
                      </a>
                      <a
                        href="#demo"
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition"
                      >
                        Request a Demo
                      </a>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 bg-white/10 hover:bg-white/20 text-white border-none h-12 w-12" />
          <CarouselNext className="right-4 md:right-8 bg-white/10 hover:bg-white/20 text-white border-none h-12 w-12" />
        </Carousel>
      </section>
    </>
  );
};

export default HeroSection;
