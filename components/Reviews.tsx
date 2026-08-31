"use client";

import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

function ReviewModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.review) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Review submitted successfully!");

      setForm({
        name: "",
        email: "",
        review: "",
      });

      onClose();

    } catch (err) {
      alert("Unable to submit review.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">

      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl text-slate-400 transition hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-slate-900">
          Write a Review
        </h2>

        <p className="mt-2 text-slate-500">
          We'd love to hear about your experience using City Voice.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Review */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Your Review
            </label>

            <textarea
              rows={5}
              value={form.review}
              onChange={(e) =>
                setForm({ ...form, review: e.target.value })
              }
              placeholder="Tell us about your experience..."
              required
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              type="submit"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default function Reviews() {
  const [openReview, setOpenReview] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const displayedReviews = showAllReviews
    ? reviews
    : reviews.slice(0, 3);

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = async () => {
    try {
      const res = await fetch("/api/reviews/approved");

      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await res.json();
      setReviews(data);

    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <section className="relative py-36 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            ⭐ Citizen Reviews
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 text-center">
            Loved by Citizens
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-3xl mx-auto text-center">
            Thousands of citizens across India are improving their cities through
            transparent reporting and faster issue resolution.
          </p>

          <button
            onClick={() => setOpenReview(true)}
            className="mt-8 sm:mt-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl transition hover:scale-105"
          >
            Write a Review
          </button>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-20">

  {displayedReviews.map((item: any, index: number) => (
    <ReviewCard
      key={item.id}
      {...item}
      index={index}
    />
  ))}

</div>

      {/* View More Button */}

      {reviews.length > 3 && (
        <div className="mt-16 flex justify-center">

          <button
        onClick={() => setShowAllReviews(!showAllReviews)}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        {showAllReviews ? (
          <>
            ↑ Show Less Reviews
          </>
        ) : (
          <>
            View All {reviews.length} Reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

        </div>
      )}

      </div>

      <ReviewModal
        open={openReview}
        onClose={() => {
          setOpenReview(false);
          fetchApprovedReviews();
        }}
      />
    </section>
  );
}