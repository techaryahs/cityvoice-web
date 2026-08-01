"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

interface AdminHeaderProps {
  title: string;
  description?: string;
  backUrl?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function AdminHeader({ title, description, backUrl = "/admin/dashboard", icon, children }: AdminHeaderProps) {
  const router = useRouter();

  return (
    <header className="mb-8 rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-5 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>
            {description && (
              <p className="mt-1 text-sm text-slate-500">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {children}
          <button
            type="button"
            onClick={() => router.push(backUrl)}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </button>
        </div>
      </div>
    </header>
  );
}
