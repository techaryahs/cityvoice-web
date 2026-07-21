"use client";

import { useState } from "react";
import {
  FaArrowLeft,
  FaImage,
  FaUpload,
  FaSave,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AddBlogPage() {
  const router = useRouter();

  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Add New Blog
            </h1>

            <p className="mt-1 text-gray-500">
              Publish a new article for the CityVoice website.
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100"
          >
            <FaArrowLeft />
            Back
          </button>

        </div>
      </div>

      {/* Form */}

      <div className="mx-auto max-w-7xl p-8">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-6 text-xl font-bold">
                Blog Details
              </h2>

              <div className="space-y-5">

                <div>
                  <label className="mb-2 block font-medium">
                    Blog Title
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Blog Title"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Slug
                  </label>

                  <input
                    type="text"
                    placeholder="road-safety-during-monsoon"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Category
                  </label>

                  <select className="w-full rounded-xl border p-4">
                    <option>Select Category</option>
                    <option>Road Safety</option>
                    <option>Garbage</option>
                    <option>Street Light</option>
                    <option>Water Supply</option>
                    <option>Public Safety</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Short Description
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Small description..."
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Blog Content
                  </label>

                  <textarea
                    rows={16}
                    placeholder="Write your article..."
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-white p-6 shadow">

              <h2 className="mb-5 text-lg font-bold">
                Featured Image
              </h2>

              <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-blue-500">

                {preview ? (
                  <img
                    src={preview}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <>
                    <FaImage
                      size={45}
                      className="mb-4 text-slate-400"
                    />

                    <p className="font-semibold">
                      Upload Image
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      JPG, PNG
                    </p>
                  </>
                )}

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImage}
                />

              </label>

            </div>

            <div className="rounded-3xl bg-white p-6 shadow">

              <h2 className="mb-5 text-lg font-bold">
                Publish
              </h2>

              <label className="mb-5 flex items-center gap-3">

                <input type="checkbox" />

                Featured Blog

              </label>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <FaSave />
                Publish Blog
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}