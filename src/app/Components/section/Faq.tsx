// "use client";

// import { useState } from "react";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "Do you deliver medical products home?",
//     answer:
//       "Yes, we provide fast and safe home delivery for all medical products.",
//   },
//   {
//     question: "Are your medicines authentic?",
//     answer:
//       "We only sell 100% genuine and certified medicines from trusted suppliers.",
//   },
//   {
//     question: "How long does delivery take?",
//     answer:
//       "Delivery usually takes 1-3 working days depending on your location.",
//   },
//   {
//     question: "Can I return a product?",
//     answer:
//       "Yes, products can be returned within 7 days if unopened and in original condition.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section className="w-full bg-gray-50 py-16 px-4">
      
//       {/* Title */}
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//         Frequently Asked Questions
//       </h2>

//       {/* Center container */}
//       <div className="flex justify-center">
//         <div className="w-full max-w-3xl space-y-4">
          
//           {faqs.map((item, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
//               >
                
//                 {/* Question */}
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className="w-full flex justify-between items-center text-left"
//                 >
//                   <span className="font-medium text-gray-800">
//                     {item.question}
//                   </span>

//                   <span className="text-2xl text-gray-500">
//                     {isOpen ? "−" : "+"}
//                   </span>
//                 </button>

//                 {/* Answer */}
//                 {isOpen && (
//                   <p className="mt-3 text-sm text-gray-600">
//                     {item.answer}
//                   </p>
//                 )}

//               </div>
//             );
//           })}

//         </div>
//       </div>

//     </section>
//   );
// }












"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do you deliver medical products home?",
    answer: "Yes, we provide fast and safe home delivery for all medical products. Our delivery partners are trained to handle sensitive medical equipment and medicines with care.",
  },
  {
    question: "Are your medicines authentic?",
    answer: "Absolutely. We only sell 100% genuine and certified medicines sourced directly from authorized manufacturers and trusted pharmaceutical suppliers.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 1-3 working days depending on your location. For emergency medicines in major cities, we often provide same-day delivery.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, products can be returned within 7 days if they are unopened and in their original packaging. Please note that certain temperature-sensitive medicines may not be eligible for return due to safety protocols.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#f8fafc] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Support Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Common <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Everything you need to know about our medical services and delivery process.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-[1.5rem] border ${
                  isOpen 
                    ? "bg-white border-green-200 shadow-xl shadow-green-900/5" 
                    : "bg-white/50 border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left p-6 md:p-8"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${
                    isOpen ? "text-green-600" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>

                  <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-green-600 text-white rotate-180" : "bg-gray-100 text-gray-400"
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Answer with Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <div className="h-[1px] bg-gray-50 mb-6" />
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-center mt-12 text-gray-400 text-sm">
          Still have questions? <span className="text-green-600 font-bold cursor-pointer hover:underline">Contact our 24/7 support</span>
        </p>
      </div>
    </section>
  );
}