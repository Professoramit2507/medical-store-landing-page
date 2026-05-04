"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Patient",
    comment: "Very fast delivery and authentic medicines. I always trust this medical store for my monthly supplies.",
    rating: 5,
    image: "/avatar1.jpg", // Replace with actual avatar path
  },
  {
    id: 2,
    name: "Dr. Tanvir Hasan",
    role: "Medical Practitioner",
    comment: "Excellent service. Ordered emergency medicine for a patient and got it within 2 hours! Remarkable.",
    rating: 4,
    image: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Regular Customer",
    comment: "Quality products and reliable service. The packaging was clinical and very secure. Highly recommended.",
    rating: 5,
    image: "/avatar3.jpg",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          fill={i < rating ? "currentColor" : "none"} 
          className={i < rating ? "" : "text-gray-200"} 
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="w-full bg-[#f0f4f8] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase text-[10px] tracking-[0.3em] block mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Trusted by <span className="text-green-600">Thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-white hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-green-100 group-hover:text-green-200 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="mb-6">
                  <Stars rating={review.rating} />
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <div className="relative w-14 h-14 shrink-0">
                    <div className="absolute inset-0 bg-green-200 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="rounded-2xl object-cover relative z-10 border-2 border-white"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}