


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PopularCategory() {
  const categories = [
    { title: "CT-scanner", img: "/ct-scan.jpg" },
    { title: "Miscellaneous", img: "/thermo.jpg" },
    { title: "Best Stethoscope", img: "/Stethoscope.webp" },
    { title: "Blood Pressure", img: "/blood-pressure-scaled.jpeg" },
    { title: "Rubber Gloves", img: "/gloves.jpg" },
    { title: "Surgical Mask", img: "/mask.jpg" },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 bg-[#f8fafc]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-green-600 font-bold uppercase text-[10px] tracking-[0.3em]">Our Inventory</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Popular <span className="text-green-600">Categories</span>
          </h2>
        </div>
        <button className="text-sm font-bold text-gray-500 hover:text-green-600 flex items-center gap-2 transition-colors group">
          Explore All Categories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-[2rem] p-6 flex items-center justify-between border border-gray-100 hover:border-green-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer"
          >
            {/* Left Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors leading-tight mb-4">
                {item.title}
              </h3>
              <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-green-600 transition-colors">
                View More <ArrowRight size={12} />
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Background Circle Decor */}
              <div className="absolute inset-0 bg-gray-50 rounded-full group-hover:scale-110 group-hover:bg-green-50 transition-all duration-500" />
              
              <div className="relative w-16 h-16 transform group-hover:rotate-12 transition-transform duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}