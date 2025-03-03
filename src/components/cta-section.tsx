"use client";

import { motion } from "framer-motion";
import { BellIcon as BrandTelegram } from "lucide-react";
import { Button } from "./ui/buttons";

export default function CtaSection() {
  return (
    <section
      className="py-20 md:py-40 bg-[#050505]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 md:p-16 border border-gray-600 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Early & Shape the Future of Sendit!
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Be among the first to access our platform and help us build the
              future of digital commerce. Early adopters get exclusive benefits
              and lifetime discounts.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 w-full sm:w-auto bg-[#223d40] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Up as a Creator
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 w-full sm:w-auto border-brand-blue text-brand-blue hover:bg-brand-blue/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BrandTelegram className="mr-2 h-5 w-5" /> Join Our Telegram
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
