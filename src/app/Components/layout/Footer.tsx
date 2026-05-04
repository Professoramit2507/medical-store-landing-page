"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black mt-10 px-6 border-2 border-red-700 py-10 rounded-xl">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-full text-lg">💊</div>
            <h1 className="text-xl font-bold text-green-600">MediCare</h1>
          </div>
          <p className="text-sm text-white mt-3">
            Your trusted online medical store. Fast delivery and guaranteed authentic medicines.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Medicines</li>
            <li className="hover:text-green-600 cursor-pointer">Categories</li>
            <li className="hover:text-green-600 cursor-pointer">Orders</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-3">Services</h2>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-green-600 cursor-pointer">Prescription Upload</li>
            <li className="hover:text-green-600 cursor-pointer">24/7 Support</li>
            <li className="hover:text-green-600 cursor-pointer">Home Delivery</li>
            <li className="hover:text-green-600 cursor-pointer">Health Tips</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <div className="space-y-2 text-sm text-white">
            
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 1234-567890
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> support@medicare.com
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Bangladesh
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MediCare. All rights reserved.
      </div>

    </footer>
  );
}