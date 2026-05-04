// "use client";

// import { useState } from "react";
// import { Home, Pill, Upload, Box, Phone, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/", icon: <Home size={18} /> },
//     { name: "Medicines", href: "/medicines", icon: <Pill size={18} /> },
//     { name: "Categories", href: "/categories", icon: null },
//     { name: "Prescription", href: "/prescription", icon: <Upload size={18} /> },
//     { name: "Orders", href: "/orders", icon: <Box size={18} /> },
//     { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white rounded-xl px-4 md:px-6 py-4 relative z-100">
//       <div className="flex items-center justify-between">
//         {/* LEFT: Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="bg-green-100 p-2 rounded-full text-lg">💊</div>
//           <div>
//             <h1 className="text-lg md:text-xl font-bold text-green-600 leading-tight">
//               MediCare
//             </h1>
//             <p className="text-[10px] text-gray-500 hidden sm:block">
//               Your Health, Our Priority
//             </p>
//           </div>
//         </Link>

//         {/* CENTER: Desktop Menu (Hidden on Mobile) */}
//         <div className="hidden md:flex items-center gap-6 text-sm font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`flex items-center gap-1 transition ${
//                 pathname === link.href
//                   ? "text-green-600"
//                   : "text-gray-700 hover:text-green-600"
//               }`}
//             >
//               {link.icon} {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT: Button & Mobile Toggle */}
//         <div className="flex items-center gap-3">
//           <button className="hidden sm:block bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition font-medium">
//             Get Started
//           </button>

//           {/* Mobile Menu Icon */}
//           <button
//             className="md:hidden p-2 text-gray-700"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU: ড্রপডাউন মেনু */}
//       {isOpen && (
//         <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl rounded-b-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হয়ে যাবে
//               className={`flex items-center gap-3 text-lg font-medium p-2 rounded-lg ${
//                 pathname === link.href
//                   ? "bg-green-50 text-green-600"
//                   : "text-gray-700"
//               }`}
//             >
//               {link.icon} {link.name}
//             </Link>
//           ))}
//           <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold mt-2">
//             Get Started
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }






"use client";

import { useState } from "react";
import { Home, Pill, Upload, Box, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Medicines", href: "/medicines", icon: <Pill size={18} /> },
    { name: "Categories", href: "/categories", icon: null },
    { name: "Prescription", href: "/prescription", icon: <Upload size={18} /> },
    { name: "Orders", href: "/orders", icon: <Box size={18} /> },
    { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <nav className="w-full shadow-md bg-white rounded-xl px-4 md:px-6 py-4 relative z-50">
      <div className="flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full text-lg">💊</div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-green-600 leading-tight">
              MediCare
            </h1>
            <p className="text-[10px] text-gray-500 hidden sm:block">
              Your Health, Our Priority
            </p>
          </div>
        </Link>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1 transition ${
                pathname === link.href
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: Login/Register + Mobile Toggle */}
        <div className="flex items-center gap-3">

          {/* ✅ Desktop Login/Register */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login">
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition font-medium">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition font-medium">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl rounded-b-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-lg font-medium p-2 rounded-lg ${
                pathname === link.href
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {/* ✅ Mobile Login/Register */}
          <div>
            <Link href="/login">
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold mt-2">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold mt-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}