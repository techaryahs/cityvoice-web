"use client";

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Mumbai",
    image: "/images/users/user1.jpg",
    review:
      "Reported a pothole outside our apartment. The issue was resolved within two days with complete tracking.",
    complaint: "Road Repair Completed",
  },
  {
    name: "Priya Verma",
    city: "Delhi",
    image: "/images/users/user2.jpg",
    review:
      "Garbage collection started the very next morning after submitting my complaint through City Voice.",
    complaint: "Garbage Cleared",
  },
  {
    name: "Amit Singh",
    city: "Lucknow",
    image: "/images/users/user3.jpg",
    review:
      "The live complaint tracking is fantastic. I received updates at every stage until completion.",
    complaint: "Water Leakage Fixed",
  },
];

export default function Reviews() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            ⭐ Citizen Reviews
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">
            Loved by Citizens
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
            Thousands of citizens across India are improving their cities
            through transparent reporting and faster issue resolution.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {reviews.map((item, index) => (
            <ReviewCard
              key={index}
              {...item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}