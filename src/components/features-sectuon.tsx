"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Zap,
  Wallet,
  BarChart3,
  Users,
  Rocket,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Effortless Selling",
      description:
        "Launch your store instantly with no setup hassle. Just plug, sell, and start earning without technical barriers.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Optimization",
      description:
        "Leverage AI-powered tools to maximize conversions, automate pricing strategies, and boost revenue effortlessly.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Global Payments",
      description:
        "Accept payments worldwide with crypto support, ensuring fast, secure, and borderless transactions for creators and businesses.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Growth Tools",
      description:
        "Access built-in analytics, automated marketing, and referral programs to scale your digital business efficiently.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Creator Network",
      description:
        "Join a thriving community of alpha traders, creators, and innovators collaborating and growing together.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Scalable System",
      description:
        "Designed to support businesses of all sizes, from small startups to enterprise-level operations, without performance bottlenecks.",
    },
  ];

  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    "linear-gradient(135deg, #007adf 0%, #00ecbc 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #fad961 0%, #f76b1c 100%)",
  ];
  return (
    <section id="features" className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#223d40] via-white to-[#223d40]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features for Digital Creators
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 max-w-2xl mb-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything you need to create, sell, and grow your digital business
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-start bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:border-[#223d40]/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="mb-4 p-3 rounded-xl inline-block w-fit"
                style={{ background: gradients[index % gradients.length] }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-base flex-grow overflow-hidden">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
