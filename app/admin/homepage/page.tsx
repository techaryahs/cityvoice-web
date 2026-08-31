"use client";

import { useState, useEffect, useRef } from "react";
import { FaUpload, FaTrash, FaSave, FaImage, FaSyncAlt } from "react-icons/fa";
import Image from "next/image";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function HomepageImagesAdmin() {
  const [heroImage, setHeroImage] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(true);

  // For previewing new selections
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroPreview, setHeroPreview] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState("");

  const [heroUploading, setHeroUploading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const heroInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchHomepageData();
  }, []);

  const fetchHomepageData = async () => {
    try {
      const res = await fetch("/api/homepage");
      if (res.ok) {
        const data = await res.json();
        setHeroImage(data.heroImage);
        setLogo(data.logo);
      }
    } catch (error) {
      console.error("Failed to fetch homepage data", error);
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const validateFile = (file: File, type: "heroImage" | "logo") => {
    if (file.size > 5 * 1024 * 1024) {
      showToast("File size exceeds 5MB limit", "error");
      return false;
    }
    const validHeroTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    const validLogoTypes = [...validHeroTypes, "image/svg+xml"];
    
    if (type === "heroImage" && !validHeroTypes.includes(file.type)) {
      showToast("Invalid file type for Hero Image", "error");
      return false;
    }
    if (type === "logo" && !validLogoTypes.includes(file.type)) {
      showToast("Invalid file type for Logo", "error");
      return false;
    }
    return true;
  };

  const handleHeroSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file, "heroImage")) {
      setHeroFile(file);
      setHeroPreview(URL.createObjectURL(file));
    }
  };

  const handleLogoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file, "logo")) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (type: "heroImage" | "logo") => {
    const file = type === "heroImage" ? heroFile : logoFile;
    if (!file) return;

    if (type === "heroImage") setHeroUploading(true);
    else setLogoUploading(true);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("type", type);

    try {
      const res = await fetch("/api/admin/homepage", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`${type === "heroImage" ? "Hero Image" : "Logo"} uploaded successfully!`, "success");
        if (type === "heroImage") {
          setHeroImage(data.image);
          setHeroFile(null);
          setHeroPreview("");
        } else {
          setLogo(data.image);
          setLogoFile(null);
          setLogoPreview("");
        }
      } else {
        showToast(data.message || "Upload failed", "error");
      }
    } catch (error) {
      showToast("An error occurred during upload", "error");
    } finally {
      if (type === "heroImage") setHeroUploading(false);
      else setLogoUploading(false);
    }
  };

  const deleteImage = async (type: "heroImage" | "logo") => {
    if (!confirm("Are you sure you want to delete this image? It will revert to the default.")) return;

    if (type === "heroImage") setHeroUploading(true);
    else setLogoUploading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("action", "delete");

    try {
      const res = await fetch("/api/admin/homepage", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`${type === "heroImage" ? "Hero Image" : "Logo"} deleted successfully!`, "success");
        if (type === "heroImage") {
          setHeroImage(data.image);
          setHeroFile(null);
          setHeroPreview("");
        } else {
          setLogo(data.image);
          setLogoFile(null);
          setLogoPreview("");
        }
      } else {
        showToast(data.message || "Delete failed", "error");
      }
    } catch (error) {
      showToast("An error occurred during delete", "error");
    } finally {
      if (type === "heroImage") setHeroUploading(false);
      else setLogoUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-100">
        <div className="text-xl font-semibold text-slate-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      {toast && (
        <div className={`fixed top-5 right-5 z-50 rounded-xl px-6 py-4 text-white shadow-xl transition-all ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {toast.message}
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        <AdminHeader title="Manage Homepage Images" description="Manage your homepage assets from one place." />

        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Hero Image Card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FaImage className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Hero Image</h2>
                <p className="text-sm text-slate-500">JPG, PNG, WEBP. Max 5MB.</p>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-2 relative h-[300px]">
              {(heroPreview || heroImage) ? (
                <Image
                  src={heroPreview || heroImage}
                  alt="Hero Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400">
                  No image available
                </div>
              )}
              {heroFile && (
                <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow">
                  Preview Mode
                </div>
              )}
            </div>

            <input
              type="file"
              ref={heroInputRef}
              onChange={handleHeroSelect}
              accept="image/jpeg, image/png, image/webp"
              className="hidden"
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => heroInputRef.current?.click()}
                disabled={heroUploading}
                className="flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-200 disabled:opacity-50"
              >
                {heroFile ? <FaSyncAlt /> : <FaUpload />}
                {heroFile ? "Change Selection" : "Select New Image"}
              </button>

              {heroFile && (
                <button
                  onClick={() => uploadImage("heroImage")}
                  disabled={heroUploading}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-50"
                >
                  <FaSave />
                  {heroUploading ? "Saving..." : "Save Image"}
                </button>
              )}

              {(!heroFile && heroImage !== "/images/bridge.png") && (
                <button
                  onClick={() => deleteImage("heroImage")}
                  disabled={heroUploading}
                  className="ml-auto flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                >
                  <FaTrash />
                  Delete
                </button>
              )}
            </div>
          </div>

          {/* Logo Card */}
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <FaImage className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Application Logo</h2>
                <p className="text-sm text-slate-500">JPG, PNG, WEBP, SVG. Max 5MB.</p>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-2 relative h-[300px]">
              {(logoPreview || logo) ? (
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border bg-white shadow-lg">
                  <Image
                    src={logoPreview || logo}
                    alt="Logo Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400">
                  No logo available
                </div>
              )}
              {logoFile && (
                <div className="absolute top-4 left-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
                  Preview Mode
                </div>
              )}
            </div>

            <input
              type="file"
              ref={logoInputRef}
              onChange={handleLogoSelect}
              accept="image/jpeg, image/png, image/webp, image/svg+xml"
              className="hidden"
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => logoInputRef.current?.click()}
                disabled={logoUploading}
                className="flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-200 disabled:opacity-50"
              >
                {logoFile ? <FaSyncAlt /> : <FaUpload />}
                {logoFile ? "Change Selection" : "Select New Logo"}
              </button>

              {logoFile && (
                <button
                  onClick={() => uploadImage("logo")}
                  disabled={logoUploading}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-50"
                >
                  <FaSave />
                  {logoUploading ? "Saving..." : "Save Logo"}
                </button>
              )}

              {(!logoFile && logo !== "/images/logo.jpeg") && (
                <button
                  onClick={() => deleteImage("logo")}
                  disabled={logoUploading}
                  className="ml-auto flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                >
                  <FaTrash />
                  Delete
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
