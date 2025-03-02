"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Sparkles, Wallet, BarChart3, Users, Zap, Globe, Shield, Headphones, Rocket } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Seamless Sales & Checkout",
      description: "Frictionless buying experience with multiple payment options and one-click purchases.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI-Powered Revenue Boosters",
      description: "Smart recommendations and pricing strategies to maximize your earnings.",
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Crypto-Friendly & Instant Payouts",
      description: "Get paid in your preferred currency, including major cryptocurrencies.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Built-in Analytics & Marketing Tools",
      description: "Track performance and grow your audience with powerful integrated tools.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Thriving Creator Community",
      description: "Connect with like-minded creators and collaborate on new opportunities.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast Delivery",
      description: "Instant digital product delivery to customers worldwide.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Marketplace",
      description: "Reach customers from every corner of the world with multi-language support.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "State-of-the-art encryption and fraud protection for peace of mind.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for both sellers and buyers.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Scalable Infrastructure",
      description: "Built to handle from small startups to enterprise-level operations.",
    },
  ]

  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    "linear-gradient(135deg, #007adf 0%, #00ecbc 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #fad961 0%, #f76b1c 100%)",
  ]

  const rowVariants = {
    animate: (i: number) => ({
      x: i % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    }),
  }

  return (
    <section id="features" className="py-20 md:py-40 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #223d40 0%, #ffffff 50%, #223d40 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for Digital Creators
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to create, sell, and grow your digital business
          </motion.p>
        </div>

        {[0, 1, 2].map((rowIndex) => (
          <div key={rowIndex} className="relative mb-12 h-[280px] overflow-hidden">
            <motion.div
              className="absolute flex whitespace-nowrap"
              variants={rowVariants}
              animate="animate"
              custom={rowIndex}
            >
              {[...features, ...features].slice(rowIndex * 4, rowIndex * 4 + 8).map((feature, index) => (
                <div
                  key={index}
                  className="w-[280px] mx-4 bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:border-[#223d40]/50"
                >
                  <div
                    className="mb-4 p-3 rounded-xl inline-block"
                    style={{ background: gradients[index % gradients.length] }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
