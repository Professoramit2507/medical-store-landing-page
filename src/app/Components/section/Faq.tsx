"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do you deliver medical products home?",
    answer:
      "Yes, we provide fast and safe home delivery for all medical products.",
  },
  {
    question: "Are your medicines authentic?",
    answer:
      "We only sell 100% genuine and certified medicines from trusted suppliers.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 1-3 working days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, products can be returned within 7 days if unopened and in original condition.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>

      {/* Center container */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl space-y-4">
          
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-800">
                    {item.question}
                  </span>

                  <span className="text-2xl text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-3 text-sm text-gray-600">
                    {item.answer}
                  </p>
                )}

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}