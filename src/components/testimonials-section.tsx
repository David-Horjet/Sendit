"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/buttons";
import avatar from "../../public/avatar.jpeg"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Digital Artist",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Sendit transformed how I sell my digital art. The seamless checkout process and instant payments have increased my conversion rate by 40%.",
  },
  {
    name: "Sarah Williams",
    role: "Course Creator",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As an online educator, I needed a platform that could handle my complex course structure. Sendit not only delivered but exceeded my expectations with their analytics tools.",
  },
  {
    name: "Michael Chen",
    role: "NFT Developer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The crypto payment options and blockchain integration made Sendit the perfect choice for my NFT business. Their support team is also incredibly responsive.",
  },
  {
    name: "Emma Rodriguez",
    role: "eBook Author",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I've tried multiple platforms for selling my eBooks, but none compare to Sendit's ease of use and fair pricing. My readers love the smooth buying experience.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  //   const variants = {
  //     enter: (direction: number) => ({
  //       x: direction > 0 ? 1000 : -1000,
  //       opacity: 0,
  //     }),
  //     center: {
  //       zIndex: 1,
  //       x: 0,
  //       opacity: 1,
  //     },
  //     exit: (direction: number) => ({
  //       zIndex: 0,
  //       x: direction < 0 ? 1000 : -1000,
  //       opacity: 0,
  //     }),
  //   }

  return (
    <section id="testimonials" className="py-20 md:py-40 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage:
                "linear-gradient(135deg, #223d40 0%, #ffffff 50%, #223d40 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of creators who are growing their digital business
            with Sendit
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={testimonialsRef}>
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                // variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="bg-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-blue/20">
                        <Image
                          src={avatar}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="h-10 w-10 text-brand-blue/30 mb-4 mx-auto md:mx-0" />
                      <p className="text-lg md:text-xl mb-6 italic text-gray-300">
                        {`"{testimonials[currentIndex].content}"`}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-brand-blue">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-800 shadow-lg hover:bg-brand-blue hover:text-white transition-all duration-300"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-800 shadow-lg hover:bg-brand-blue hover:text-white transition-all duration-300"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-blue scale-125"
                    : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
