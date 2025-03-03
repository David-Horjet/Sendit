"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Globe, Shield } from "lucide-react";
import Coins3D from "./3d-coins";
import { Button } from "./ui/buttons";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.9]);
  const y = useTransform(scrollYProgress, [1, 1], [0, 100]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{ opacity, scale, y }}
    >
      <Coins3D />

      {/* Enhanced animated background */}
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-90" />
        <AnimatedBackground />
      </div> */}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text bg-gradient-to-r from-[#0fd3e9] via-white to-[#223d40]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,rgb(197, 218, 220) 0%, #ffffff 50%,rgb(201, 242, 247) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Monetize Effortlessly.
              <br />
              Sell Globally.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Sendit empowers creators, traders, and innovators to sell digital
              products seamlessly across the globe.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-[#223d40] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-brand-teal text-brand-teal hover:bg-brand-teal/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-2 md:gap-5 mb-12"
          >
            <FeatureIcon
              icon={<Globe className="h-6 w-6" />}
              text="Global Reach"
            />
            <FeatureIcon
              icon={<Shield className="h-6 w-6" />}
              text="Secure Payments"
            />
            <FeatureIcon
              icon={<Zap className="h-6 w-6" />}
              text="Instant Delivery"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#features" aria-label="Scroll to features">
              <ChevronDown className="h-10 w-10 text-brand-blue animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// function AnimatedBackground() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Animated gradient blobs */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 blur-[120px]"
//         animate={{
//           x: [0, 50, -50, 0],
//           y: [0, -50, 50, 0],
//           scale: [1, 1.1, 0.9, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-brand-red/10 to-brand-blue/10 blur-[100px]"
//         animate={{
//           x: [0, -50, 50, 0],
//           y: [0, 50, -50, 0],
//           scale: [1, 0.9, 1.1, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-brand-teal/15 to-brand-blue/15 blur-[80px]"
//         animate={{
//           x: [0, 70, -70, 0],
//           y: [0, -70, 70, 0],
//           scale: [1, 1.2, 0.8, 1],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//     </div>
//   );
// }

function FeatureIcon({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1 justify-center">
      <div className="p-2 bg-gradient-to-br from-brand-blue to-brand-teal rounded-lg text-white">
        {icon}
      </div>
      <span className="text-gray-300 font-medium">{text}</span>
    </div>
  );
}
