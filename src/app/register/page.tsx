"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import img from "../../../public/blood-pressure-scaled.jpeg";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f9f4] px-4 relative overflow-hidden py-12">

      {/* BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-12%] right-[-6%] w-96 h-96 bg-green-200 rounded-full blur-[120px] opacity-40"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-12%] left-[-6%] w-96 h-96 bg-emerald-200 rounded-full blur-[120px] opacity-40"
      />

      {/* BACK BUTTON */}
      <motion.div whileHover={{ x: -4 }}>
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-green-700 z-20"
        >
          <div className="p-2 bg-white rounded-full shadow">
            <ArrowLeft size={18} />
          </div>
          <span className="hidden sm:inline"> Back to home</span>
        </Link>
      </motion.div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2"
      >

        {/* IMAGE SIDE */}
        <div className="hidden md:block relative h-150">
          <Image
            src={img}
            alt="health"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-green-900/60 flex flex-col justify-end p-12 text-white">
            <h2 className="text-3xl font-bold mb-3">
              Join MediCare 💊
            </h2>

            <p className="text-sm mb-4">
              Fast delivery, trusted doctors & secure system
            </p>

            <div className="text-sm space-y-2">
              <p>✔ Verified Pharmacy</p>
              <p>✔ Fast Medicine Delivery</p>
              <p>✔ 24/7 Support</p>
            </div>
          </div>
        </div>

        {/* FORM SIDE (NO VARIANTS) */}
        <div className="p-10 lg:p-12 flex flex-col justify-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 text-sm mt-2 mb-6">
            Start your health journey today
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl border text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 10px 30px rgba(34,197,94,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition"
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-black text-sm mt-6">
            Already have account?{" "}
            <Link href="/login" className="text-green-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}