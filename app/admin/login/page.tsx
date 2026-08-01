"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // IMPORTANT
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setLoading(false);
        setError(data.message || "Invalid email or password.");
        return;
      }

      setSuccess("✅ Login Successful! Redirecting to Dashboard...");

      setTimeout(() => {
        router.replace("/admin/dashboard");
        router.refresh();
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg">
            🛡️
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            CityVoice Admin
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to access the Admin Dashboard
          </p>
        </div>

        <form onSubmit={login} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Admin Email
            </label>

            <input
              type="email"
              placeholder="admin@cityvoice.in"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
              ❌ {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 text-white font-semibold transition ${
              loading
                ? "cursor-not-allowed bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Checking Credentials..." : "Login"}
          </button>
        </form>

        <div className="mt-8 border-t pt-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CityVoice Admin Panel
        </div>
      </div>
    </div>
  );
}