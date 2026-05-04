"use client";

import Image from "next/image";

type Review = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Patient",
    comment:
      "Very fast delivery and authentic medicines. I always trust this medical store.",
    rating: 5,
    image: "/blood-pressure-scaled.jpeg",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "Customer",
    comment:
      "Excellent service. Ordered emergency medicine and got it within 2 hours!",
    rating: 4,
    image: "/blood-pressure-scaled.jpeg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Doctor",
    comment:
      "Quality products and reliable service. Highly recommended for patients.",
    rating: 5,
    image: "/blood-pressure-scaled.jpeg",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-yellow-500 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 md:px-10">
      <h2 className="text-2xl font-bold text-center text-black mb-10">
        What Our Customers Say
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-12 h-12">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Rating */}
            <Stars rating={review.rating} />

            {/* Comment */}
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              &quot;{review.comment}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}