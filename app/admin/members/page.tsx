"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export default function ManageMembers() {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/admin/members");
      if (res.ok) {
        const data = await res.json();
        setMembers(data);
      }
    } catch (error) {
      console.error("Failed to fetch members", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setRole("");
    setDescription("");
    setImageFile(null);
    setImagePreview("");
  };

  const handleEdit = (member: Member) => {
    setEditingId(member.id);
    setName(member.name);
    setRole(member.role);
    setDescription(member.description);
    setImagePreview(member.image);
    setImageFile(null);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return;

    try {
      const res = await fetch(`/api/admin/members?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Member deleted successfully!");
        fetchMembers();
      } else {
        alert("Failed to delete member.");
      }
    } catch (error) {
      alert("Error deleting member.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !description || (!imageFile && !imagePreview)) {
      alert("Please fill all fields and provide an image.");
      return;
    }

    setSaving(true);
    try {
      let finalImageUrl = imagePreview;

      // Upload image if a new one is selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const uploadRes = await fetch("/api/admin/members/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (!uploadData.success) {
          throw new Error(uploadData.message || "Image upload failed");
        }
        finalImageUrl = uploadData.image;
      }

      // Save Member Data
      const payload = {
        id: editingId, // only for PUT
        name,
        role,
        description,
        image: finalImageUrl,
      };

      const method = editingId ? "PUT" : "POST";
      const saveRes = await fetch("/api/admin/members", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const saveData = await saveRes.json();
      if (saveData.success) {
        alert(editingId ? "Member updated successfully!" : "Member added successfully!");
        resetForm();
        fetchMembers();
      } else {
        throw new Error(saveData.message || "Failed to save member");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message || "An error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="mb-6 font-semibold text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </button>

        <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-bold text-slate-800">
          {editingId ? "Edit Team Member" : "Add Team Member"}
        </h1>

        {/* Form Section */}
        <div className="mb-12 rounded-3xl bg-white p-6 sm:p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Image Upload */}
              <div className="w-full md:w-1/3">
                <label className="mb-2 block font-medium text-slate-700">Profile Image</label>
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6">
                  {imagePreview ? (
                    <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-lg">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-200 text-slate-400 shadow-inner">
                      No Image
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-4 w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>

              {/* Text Fields */}
              <div className="w-full space-y-4 md:w-2/3">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">Member Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amit Sharma"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-slate-700">Designation / Role</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Founder & CEO"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-slate-700">Description</label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Short professional description..."
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 border-t pt-6">
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl px-6 py-3 font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  Cancel Edit
                </button>
              )}
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId ? "Update Member" : "Add Member"}
              </button>
            </div>
          </form>
        </div>

        {/* Existing Members Section */}
        <h2 className="mb-6 text-3xl font-bold text-slate-800">Existing Members</h2>
        
        {loading ? (
          <p className="text-slate-500">Loading members...</p>
        ) : members.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-md">
            <p className="text-lg text-slate-500">No team members added yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.id} className="flex flex-col items-center rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-slate-50 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-600">{member.role}</p>
                <p className="mt-3 text-center text-sm text-slate-500 line-clamp-3">
                  {member.description}
                </p>
                <div className="mt-6 flex w-full gap-3">
                  <button
                    onClick={() => handleEdit(member)}
                    className="flex-1 rounded-xl bg-slate-100 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="flex-1 rounded-xl bg-red-50 py-2 font-medium text-red-600 transition hover:bg-red-100 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
