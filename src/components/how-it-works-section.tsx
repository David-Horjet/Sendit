"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  const steps = [
    {
      number: "01",
      title: "Create Your Digital Product",
      description:
        "Upload your digital assets, set product details, and customize your product page with our intuitive creator dashboard.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "02",
      title: "Set Price & Checkout Flow",
      description:
        "Choose your pricing model (one-time, subscription, or pay-what-you-want) and customize the checkout experience for your customers.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "03",
      title: "Receive Payments Instantly",
      description:
        "Get paid directly to your preferred payment method as soon as a sale is made, with no waiting periods or minimum thresholds.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-40 overflow-hidden bg-[#050505]"
    >
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
            How Sendit Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start selling your digital products in minutes with our simple
            three-step process
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              step={step}
              index={index}
              // scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  // scrollYProgress,
}: {
  step: {
    number: string;
    title: string;
    description: string;
    image: string;
  };
  index: number;
  // scrollYProgress: any;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress: itemProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center center"],
  // });

  //   const opacity = useTransform(itemProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  //   const scale = useTransform(itemProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  //   const x = useTransform(
  //     itemProgress,
  //     [0, 0.5, 1],
  //     isEven ? [-50, 0, -50] : [50, 0, 50]
  //   );

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-16 mb-20 md:mb-32`}
      //   style={{ opacity, scale, x }}
    >
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <div className="text-5xl font-bold text-[#223d40] mr-4">
            {step.number}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {step.title}
          </h3>
        </div>
        <p className="text-lg text-gray-300 mb-6">{step.description}</p>
        <motion.div
          className="inline-flex items-center text-[#223d40] font-semibold"
          whileHover={{ x: 5 }}
        >
          Learn more <ArrowRight className="ml-2 h-5 w-5" />
        </motion.div>
      </div>
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
          <Image
            src={step.image || "/placeholder.svg"}
            alt={step.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#223d40] to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
