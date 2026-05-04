"use client";

import Image from "next/image";

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
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
        Popular Categories
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl px-5 py-6 flex items-center justify-between
             hover:shadow-lg hover:bg-gray-100 transition-all duration-300 group"
          >
            
            {/* Left Content */}
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                {item.title}
              </h3>

              <button className="mt-3 text-xs font-medium bg-white text-gray-700 px-4 py-1.5 rounded-full shadow-sm border border-gray-100 hover:bg-green-600 hover:text-white hover:border-green-600 transition">
                View More
              </button>
            </div>

            {/* Right Image */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 ml-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}