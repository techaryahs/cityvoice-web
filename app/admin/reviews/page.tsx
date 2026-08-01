"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";

type Review = {
  id: number;
  name: string;
  email: string;
  review: string;
  status: "pending" | "approved";
  createdAt: string;
};

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      setLoading(true);

      const res = await fetch("/api/reviews");
      const data = await res.json();

      setReviews(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  }

  async function approveReview(id: number) {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
      });

      if (!res.ok) throw new Error();

      fetchReviews();
    } catch {
      alert("Unable to approve review.");
    }
  }

  async function deleteReview(id: number) {
    if (!confirm("Delete this review?")) return;

    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      fetchReviews();
    } catch {
      alert("Unable to delete review.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-7xl">
        <AdminHeader title="User Reviews" description="Approve or remove submitted reviews." />

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {loading ? (
            <div className="p-10 text-center">
              Loading...
            </div>
          ) : reviews.length === 0 ? (
            <div className="p-10 text-center">
              No reviews found.
            </div>
          ) : (
            <table className="w-full">

              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Review</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>

                {reviews.map((review) => (
                  <tr
                    key={review.id}
                    className="border-t"
                  >
                    <td className="p-4 font-semibold">
                      {review.name}
                    </td>

                    <td className="p-4">
                      {review.email}
                    </td>

                    <td className="max-w-md p-4">
                      {review.review}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          review.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {review.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </td>

                    <td className="space-x-2 p-4 text-center">

                      {review.status === "pending" && (
                        <button
                          onClick={() => approveReview(review.id)}
                          className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                        >
                          Approve
                        </button>
                      )}

                      <button
                        onClick={() => deleteReview(review.id)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
}