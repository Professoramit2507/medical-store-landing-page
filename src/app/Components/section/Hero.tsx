// "use client";

// import Image from "next/image";
// import doctor from "../../../../public/png-transparent-physician-lia-doctor-of-medicine-doctors-and-nurses-miscellaneous-photography-service-removebg-preview.png";

// const categories = [
//   { id: 1, name: "Supplements", image: "/ct-scan.jpg" },
//   { id: 2, name: "Diabetes", image: "/ct-scan.jpg" },
//   { id: 3, name: "Beauty Products", image: "/ct-scan.jpg" },
//   { id: 4, name: "Oral Care", image: "/ct-scan.jpg" },
// ];

// export default function Hero() {
//   return (
//     <section className="w-full bg-[#cfe3e8] overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 lg:px-24 py-10 md:py-20 min-h-150 gap-10">

//         <div className="flex justify-center md:ml-25 md:justify-start order-1">
//           <Image
//             src={doctor}
//             alt="Doctor"
//             width={450}
//             height={450}
//             priority
//             className="object-contain w-72 sm:w-80 md:w-112.5 h-auto"
//           />
//         </div>

//         {/* Right Side: Text Content & Small Categories */}
//         <div className="text-center md:text-left order-2">
//           <p className="text-xs md:text-sm tracking-widest text-gray-600 uppercase mb-3">
//             Higher Level Of Care
//           </p>

//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Providing Total Health <br className="hidden md:block" />
//             Care Solutions
//           </h1>

//           <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-md mx-auto md:mx-0">
//             Equipment used for supporting and enhancing your life.
//           </p>

//           <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-200 shadow-md">
//             Shop Now
//           </button>

//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className="bg-gray-200 backdrop-blur-sm p-3 rounded-xl flex flex-col items-center justify-center border border-white/40 hover:bg-white transition-all cursor-pointer shadow-sm group"
//               >
//                 <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
//                   <Image
//                     src={category.image}
//                     alt={category.name}
//                     fill
//                     className="object-contain group-hover:scale-110 transition-transform"
//                   />
//                 </div>
//                 <h3 className="text-[10px] md:text-[12px] font-bold text-gray-700 text-center leading-tight">
//                   {category.name}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ShoppingCart, ArrowRight } from "lucide-react";
// import doctor from "../../../../public/png-transparent-physician-lia-doctor-of-medicine-doctors-and-nurses-miscellaneous-photography-service-removebg-preview.png";

// const categories = [
//   { id: 1, name: "Supplements", image: "/ct-scan.jpg" },
//   { id: 2, name: "Diabetes", image: "/ct-scan.jpg" },
//   { id: 3, name: "Beauty Care", image: "/ct-scan.jpg" },
//   { id: 4, name: "Oral Care", image: "/ct-scan.jpg" },
// ];

// export default function Hero() {
//   return (
//     <section className="w-full bg-gradient-to-br from-[#e0f2f1] via-[#cfe3e8] to-[#e8f5e9] overflow-hidden relative pt-20">

//       {/* Decorative Background Elements */}
//       <div className="absolute top-20 right-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-16 py-12 lg:py-24 gap-12 relative z-10">

//         {/* Left Side: Image with Floating Effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative flex justify-center lg:justify-start order-2 lg:order-1"
//         >
//           <div className="relative">
//             {/* Background Blob for Doctor */}
//             <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl scale-90 -z-10" />
//             <Image
//               src={doctor}
//               alt="Professional Doctor"
//               width={500}
//               height={500}
//               priority
//               className="object-contain w-80 md:w-[450px] lg:w-[500px] h-auto drop-shadow-2xl"
//             />
//             {/* Floating Trust Badge */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 3 }}
//               className="absolute top-10 -right-4 md:right-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3"
//             >
//               <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold">✓</div>
//               <p className="text-[10px] md:text-xs font-bold text-gray-800">Verified Medicines</p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right Side: Text Content */}
//         <div className="text-center lg:text-left order-1 lg:order-2">
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="inline-block bg-green-100 text-green-700 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
//               Higher Level Of Care
//             </span>

//             <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
//               Total Health <br />
//               <span className="text-green-600">Care Solutions</span>
//             </h1>

//             <p className="text-gray-600 text-sm md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
//               Order your essential medicines and health equipment from the comfort of your home. Fast, reliable, and secure.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-600/20 flex items-center gap-2 group active:scale-95">
//                 Shop Now <ShoppingCart size={18} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="px-8 py-4 text-gray-700 font-bold flex items-center gap-2 hover:text-green-600 transition-colors">
//                 View All Categories <ArrowRight size={18} />
//               </button>
//             </div>
//           </motion.div>

//           {/* Categories Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//                 className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 hover:bg-white transition-all shadow-sm group cursor-pointer"
//               >
//                 <div className="relative w-12 h-12 mx-auto mb-3">
//                   <Image
//                     src={category.image}
//                     alt={category.name}
//                     fill
//                     className="object-cover rounded-xl group-hover:scale-110 transition-transform"
//                   />
//                 </div>
//                 <h3 className="text-[11px] font-bold text-gray-800 uppercase tracking-tighter text-center">
//                   {category.name}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import doctor from "../../../../public/png-transparent-physician-lia-doctor-of-medicine-doctors-and-nurses-miscellaneous-photography-service-removebg-preview.png";

const categories = [
  { id: 1, name: "Supplements", image: "/ct-scan.jpg" },
  { id: 2, name: "Diabetes", image: "/ct-scan.jpg" },
  { id: 3, name: "Beauty Care", image: "/ct-scan.jpg" },
  { id: 4, name: "Oral Care", image: "/ct-scan.jpg" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#f4f9f4] overflow-hidden relative pt-20 min-h-[90vh] flex items-center">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/national-cancer-institute-KMvoHcB-w5g-unsplash.jpg" // Replace with your background image path (e.g., abstract medical lab or clinic)
          alt="Background"
          fill
          className="object-cover opacity-30 grayscale-[20%]"
          priority
        />
        {/* Gradient Overlay to blend the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2f1]/80 via-transparent to-[#e8f5e9]/80" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-16 py-12 lg:py-24 gap-12 relative z-10">
        {/* Left Side: Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative">
            {/* Soft Glow behind doctor */}
            <div className="absolute inset-0 bg-green-400/10 rounded-full blur-3xl scale-110 -z-10" />

            <Image
              src={doctor}
              alt="Professional Doctor"
              width={550}
              height={550}
              priority
              className="object-contain w-80 md:w-[480px] lg:w-[550px] h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />

            {/* Floating Trust Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -right-6 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-3"
            >
              <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg shadow-green-500/30">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                  Certified
                </p>
                <p className="text-xs font-bold text-gray-900">
                  100% Authentic
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-green-800 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                24/7 Medical Support Available
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1] mb-6 tracking-tight">
              Your Health, <br />
              <span className="text-green-600">Our Priority.</span>
            </h1>

            <p className="text-gray-600 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              Find authentic medicines, healthcare equipment, and wellness
              products delivered to your doorstep instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-16">
              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-[2rem] font-bold transition-all shadow-xl shadow-green-600/30 flex items-center gap-3 group active:scale-95 text-lg">
                Start Shopping{" "}
                <ShoppingCart
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
              </button>
              <button className="group flex items-center gap-2 font-bold text-gray-800 hover:text-green-600 transition-all">
                Browse Categories{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-white/40 backdrop-blur-md p-5 rounded-3xl border border-white/40 hover:bg-green-600 hover:border-green-600 group transition-all duration-500 cursor-pointer shadow-sm"
              >
                <div className="relative w-14 h-14 mx-auto mb-3 p-1 bg-white rounded-2xl shadow-inner group-hover:rotate-6 transition-transform">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-xl p-1"
                  />
                </div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
