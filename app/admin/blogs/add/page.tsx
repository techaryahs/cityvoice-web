"use client";

import { useState } from "react";
import { FaArrowLeft, FaImage, FaSave, FaUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AdminHeader } from "@/components/admin/AdminHeader";

interface BlogFormState {
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  image: string;
  featured: boolean;
}

export default function AddBlogPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<BlogFormState>({
    title: "",
    slug: "",
    category: "",
    description: "",
    content: "",
    image: "",
    featured: false,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);
    setIsUploading(true);

    const uploadData = new FormData();
    uploadData.append("image", file);

    try {
      const response = await fetch("/api/admin/blogs/upload", {
        method: "POST",
        body: uploadData,
      });

      const result = await response.json();
      if (response.ok && result.success && result.image) {
        setFormData((prev) => ({ ...prev, image: result.image }));
        setPreview(result.image);
        setMessage("Image uploaded successfully.");
      } else {
        setMessage(result.message || "Image upload failed.");
      }
    } catch {
      setMessage("Image upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/admin/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          slug: formData.slug || undefined,
          author: "Admin",
          published: true,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setMessage("Blog published successfully.");
        router.refresh();
        router.push("/admin/blogs");
      } else {
        setMessage(result.message || "Unable to publish blog.");
      }
    } catch {
      setMessage("Unable to publish blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-6 lg:px-8 lg:py-8">
        <AdminHeader 
          title="Add new blog post" 
          description="Publish a polished article for your audience."
          icon={<FaSave className="text-base" />}
          backUrl="/admin/blogs"
        />

        <form onSubmit={handleSubmit} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Basic information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Set the essentials for your article.
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Draft
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Blog title
                  </label>
                  <input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    type="text"
                    placeholder="Enter blog title"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Slug
                    </label>
                    <input
                      value={formData.slug}
                      onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                      type="text"
                      placeholder="road-safety-during-monsoon"
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Category
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">Select category</option>
                      <option value="Road Safety">Road Safety</option>
                      <option value="Garbage">Garbage</option>
                      <option value="Street Light">Street Light</option>
                      <option value="Water Supply">Water Supply</option>
                      <option value="Public Safety">Public Safety</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Summary
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Add a concise introduction to set expectations.
                </p>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Short description
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  placeholder="Write a short description for the article..."
                  className="min-h-[120px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Article
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Draft the full content for your post.
                </p>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Content
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  rows={18}
                  placeholder="Write your article here..."
                  className="min-h-[500px] w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm leading-7 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          </section>

          <aside className="space-y-6 xl:sticky xl:top-6 xl:h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Featured image
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    A strong preview helps drive clicks.
                  </p>
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/60">
                {preview ? (
                  <div className="relative h-[240px] w-full">
                    <img src={preview} alt="Featured image preview" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
                      Change image
                    </div>
                  </div>
                ) : (
                  <div className="flex h-[240px] flex-col items-center justify-center px-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <FaImage className="text-slate-500" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      Upload a featured image
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      JPG, PNG, WebP up to 5MB
                    </p>
                  </div>
                )}

                <input type="file" hidden accept="image/*" onChange={handleImage} />
              </label>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                <FaUpload className="text-slate-400" />
                {isUploading ? "Uploading image..." : "Drag and drop or browse to add an image."}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Publish
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Review the ready-to-publish state.
                  </p>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Live
                </span>
              </div>

              <label className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Featured blog
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Highlight in the homepage collection.
                  </p>
                </div>
                <input
                  checked={formData.featured}
                  onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))}
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              {message && (
                <p className="mt-4 text-sm text-slate-600">{message}</p>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || isUploading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FaSave />
                  {isSubmitting ? "Publishing..." : "Publish blog"}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}