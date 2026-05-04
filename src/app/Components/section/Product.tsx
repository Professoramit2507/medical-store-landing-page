"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  image: string;
  category: string;
};

const products: Product[] = [
  { id: 1, category: "Sanitizer", name: "Alcohol-Free Hand Sanitizer", price: "$122.00", rating: 4, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 2, category: "Equipment", name: "Blood Pressure Indicator", price: "$638.00", rating: 3, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 3, category: "Safety", name: "Eco-Friendly Cotton Face Mask", price: "$50.00", oldPrice: "$70.00", discount: "29%", rating: 4, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 4, category: "Antiseptic", name: "Fresh Dettol Hand Sanitizer", price: "$362.00", oldPrice: "$422.00", discount: "14%", rating: 5, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 5, category: "Hair Care", name: "Kerastase Shampoo", price: "$74.00", oldPrice: "$98.00", discount: "25%", rating: 4, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 6, category: "Safety", name: "First Aid Kit Box", price: "$74.00", rating: 5, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 7, category: "Safety", name: "Disposable Face Mask", price: "$42.00", oldPrice: "$60.00", discount: "13%", rating: 4, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 8, category: "Sanitizer", name: "Hydroalcoholic Gel", price: "$122.00", rating: 3, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 9, category: "Oral Care", name: "Listerine Mouth Wash", price: "$302.00", rating: 5, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
  { id: 10, category: "Safety", name: "KN95 Protective Mask", price: "$42.00", oldPrice: "$60.00", discount: "13%", rating: 4, image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg" },
];

function Stars({ rating = 0 }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
      ))}
    </div>
  );
}

export default function TrendingProducts() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Trending <span className="text-green-600">Products</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1 font-medium">Top-rated medical supplies for your home.</p>
          </div>
          <div className="flex gap-2">
             <button className="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-gray-50 transition">All</button>
             <button className="px-6 py-2 rounded-full bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-600/20">New</button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col"
            >
              {/* Discount Badge */}
              {p.discount && (
                <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg">
                  {p.discount} OFF
                </span>
              )}

              {/* Action Buttons (Hover) */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <button className="p-2 bg-white rounded-xl shadow-md text-gray-600 hover:bg-green-600 hover:text-white transition">
                  <Heart size={16} />
                </button>
                <button className="p-2 bg-white rounded-xl shadow-md text-gray-600 hover:bg-green-600 hover:text-white transition">
                  <Eye size={16} />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col grow">
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">{p.category}</span>
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 h-10 mb-2 leading-tight group-hover:text-green-600 transition">
                  {p.name}
                </h3>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-lg font-black text-gray-900 leading-none">{p.price}</span>
                    {p.oldPrice && (
                      <span className="text-xs text-gray-400 line-through mt-1">{p.oldPrice}</span>
                    )}
                  </div>
                  <button className="bg-gray-900 text-white p-2.5 rounded-xl hover:bg-green-600 transition-colors active:scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-50">
                  <Stars rating={p.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}