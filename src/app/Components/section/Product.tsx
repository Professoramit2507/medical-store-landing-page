"use client";

import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating?: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Alcohol-Free Hand Sanitizer",
    price: "$122.00",
    rating: 4,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 2,
    name: "Blood Pressure Indicator",
    price: "$638.00",
    rating: 3,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 3,
    name: "Eco-Friendly Cotton Face Mask",
    price: "$50.00",
    oldPrice: "$70.00",
    discount: "29%",
    rating: 4,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 4,
    name: "Fresh Dettol Hand Sanitizer",
    price: "$362.00",
    oldPrice: "$422.00",
    discount: "14%",
    rating: 5,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 5,
    name: "Kerastase Shampoo",
    price: "$74.00",
    oldPrice: "$98.00",
    discount: "25%",
    rating: 4,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 6,
    name: "First Aid Kit",
    price: "$74.00",
    rating: 5,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 7,
    name: "Disposable Face Mask",
    price: "$42.00",
    oldPrice: "$60.00",
    discount: "13%",
    rating: 4,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 8,
    name: "Hydroalcoholic Gel",
    price: "$122.00",
    rating: 3,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 9,
    name: "Listerine Mouth Wash",
    price: "$302.00",
    rating: 5,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
  {
    id: 10,
    name: "Disposable Face Mask",
    price: "$42.00",
    oldPrice: "$60.00",
    discount: "13%",
    rating: 4,
    image: "/Dettol-Antiseptic-Liquid-50-ml-in-Bangladesh.jpg",
  },
];

function Stars({ rating = 0 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-500 text-xs md:text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function TrendingProducts() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
        Trending Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white border border-gray-200 rounded-2xl p-3 md:p-4 
            shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative w-full h-32 sm:h-40 md:h-44 mb-4 overflow-hidden rounded-lg">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col grow">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-1">
                {p.name}
              </h3>

              <div className="mb-2">
                <Stars rating={p.rating} />
              </div>

              {/* Price Row */}
              <div className="mt-auto pt-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-green-600 text-sm md:text-base">
                  {p.price}
                </span>

                <div className="flex items-center gap-2">
                  {p.oldPrice && (
                    <span className="text-[10px] md:text-xs line-through text-gray-400">
                      {p.oldPrice}
                    </span>
                  )}
                  {p.discount && (
                    <span className="text-[10px] md:text-xs text-red-500 font-bold bg-red-50 px-1 rounded">
                      -{p.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Optional: Hover Add to Cart Button */}
            <button className="mt-4 w-full bg-gray-900 text-white text-xs py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
