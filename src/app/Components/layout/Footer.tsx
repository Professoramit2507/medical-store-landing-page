"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo + About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-xl text-white shadow-lg shadow-green-600/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">MediCare</h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner in health. Providing authentic medicines and medical supplies with speed and care since 2010.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-bold mb-6 text-lg">Quick Links</h2>
            <ul className="space-y-4">
              {["Home", "Medicines", "Categories", "Latest Orders"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm hover:text-green-500 transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-bold mb-6 text-lg">Our Services</h2>
            <ul className="space-y-4">
              {["Prescription Upload", "24/7 Support", "Home Delivery", "Health Consultations"].map((service) => (
                <li key={service} className="text-sm hover:text-green-500 transition-colors cursor-pointer flex items-center group">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-3 opacity-50 group-hover:opacity-100" />
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <h2 className="text-white font-bold mb-6 text-lg">Contact Us</h2>
            <div className="space-y-4 text-sm">
              <a href="tel:+8801234567890" className="flex items-center gap-3 hover:text-green-500 transition-colors">
                <div className="p-2 bg-gray-800 rounded-lg"><Phone size={16} /></div>
                +880 1234-567890
              </a>
              <a href="mailto:support@medicare.com" className="flex items-center gap-3 hover:text-green-500 transition-colors">
                <div className="p-2 bg-gray-800 rounded-lg"><Mail size={16} /></div>
                support@medicare.com
              </a>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg mt-1"><MapPin size={16} /></div>
                <span>Dhaka, Bangladesh <br/> <span className="text-[10px] text-gray-500 font-bold uppercase">Main Branch</span></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} MediCare. Built with ❤️ for better health.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}