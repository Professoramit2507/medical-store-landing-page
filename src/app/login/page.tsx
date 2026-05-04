"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import img from "../../../public/blood-pressure-scaled.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f9f4] px-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-200 rounded-full blur-[120px] opacity-50"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-200 rounded-full blur-[100px] opacity-50"
      />

      {/* BACK BUTTON */}
      <motion.div whileHover={{ x: -4 }}>
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-green-700 transition-all font-medium group z-10"
        >
          <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition">
            <ArrowLeft size={18} />
          </div>
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-4xl overflow-hidden grid md:grid-cols-2 border border-white/20"
      >

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="p-10 lg:p-16 flex flex-col justify-center"
        >
          <motion.div variants={item} className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              MediCare
            </h1>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome Back!
            </h2>
            <p className="text-gray-500 mt-2">
              Enter your credentials to access your health dashboard.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <motion.div variants={item} whileHover={{ scale: 1.02 }} className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 text-black bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </motion.div>

            {/* PASSWORD */}
            <motion.div variants={item} whileHover={{ scale: 1.02 }} className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors"
                size={20}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 text-black focus:ring-green-500/20 focus:border-green-500 transition-all"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </motion.div>

            <motion.div variants={item} className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-green-600 hover:text-green-700 transition hover:underline"
              >
                Forgot password?
              </Link>
            </motion.div>

            <motion.button
              variants={item}
              type="submit"
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 10px 30px rgba(34,197,94,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200"
            >
              Sign In
            </motion.button>
          </form>

          <motion.p variants={item} className="text-center text-gray-600 mt-10">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-green-600 font-bold hover:underline"
            >
              Create Account
            </Link>
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block relative group"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="h-full w-full"
          >
            <Image
              src={img}
              alt="Medical Professional"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-green-900/90 via-green-900/40 to-transparent flex flex-col justify-end p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
            >
              <p className="text-white text-2xl font-bold mb-2">
                “Health is the greatest wealth.”
              </p>
              <p className="text-green-50 text-sm opacity-90">
                Experience seamless healthcare management and medicine delivery
                at your fingertips.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}