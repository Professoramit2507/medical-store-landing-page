"use client";

import Image from "next/image";
import doctor from "../../../../public/png-transparent-physician-lia-doctor-of-medicine-doctors-and-nurses-miscellaneous-photography-service-removebg-preview.png";

const categories = [
  { id: 1, name: "Supplements", image: "/ct-scan.jpg" },
  { id: 2, name: "Diabetes", image: "/ct-scan.jpg" },
  { id: 3, name: "Beauty Products", image: "/ct-scan.jpg" },
  { id: 4, name: "Oral Care", image: "/ct-scan.jpg" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#cfe3e8] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 lg:px-24 py-10 md:py-20 min-h-150 gap-10">

        <div className="flex justify-center md:ml-25 md:justify-start order-1">
          <Image
            src={doctor}
            alt="Doctor"
            width={450}
            height={450}
            priority
            className="object-contain w-72 sm:w-80 md:w-112.5 h-auto"
          />
        </div>

        {/* Right Side: Text Content & Small Categories */}
        <div className="text-center md:text-left order-2">
          <p className="text-xs md:text-sm tracking-widest text-gray-600 uppercase mb-3">
            Higher Level Of Care
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Providing Total Health <br className="hidden md:block" />
            Care Solutions
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-md mx-auto md:mx-0">
            Equipment used for supporting and enhancing your life.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-200 shadow-md">
            Shop Now
          </button>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-200 backdrop-blur-sm p-3 rounded-xl flex flex-col items-center justify-center border border-white/40 hover:bg-white transition-all cursor-pointer shadow-sm group"
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-[10px] md:text-[12px] font-bold text-gray-700 text-center leading-tight">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
