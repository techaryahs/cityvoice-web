"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function LinksPage() {
  const [form, setForm] = useState({
    instagram: "",
    facebook: "",
    youtube: "",
    android: "",
    ios: "",
    demo: "",
  });

  useEffect(() => {
    fetch("/api/admin/links")
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const save = async () => {
    const res = await fetch("/api/admin/links", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Links Updated Successfully");
    }
  };

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-3xl">
        <AdminHeader title="Website Links" description="Manage your website links and app URLs." />
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="space-y-5">
          <Input
            label="Instagram"
            value={form.instagram}
            onChange={(v) => handleChange("instagram", v)}
          />

          <Input
            label="Facebook"
            value={form.facebook}
            onChange={(v) => handleChange("facebook", v)}
          />

          <Input
            label="YouTube"
            value={form.youtube}
            onChange={(v) => handleChange("youtube", v)}
          />

          <Input
            label="Android App"
            value={form.android}
            onChange={(v) => handleChange("android", v)}
          />

          <Input
            label="iOS App"
            value={form.ios}
            onChange={(v) => handleChange("ios", v)}
          />

          <Input
            label="Demo Video"
            value={form.demo}
            onChange={(v) => handleChange("demo", v)}
          />

          <button
            onClick={save}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold">
        {label}
      </label>

      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label} URL`}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}