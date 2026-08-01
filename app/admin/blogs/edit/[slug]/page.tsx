import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";

interface EditBlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <AdminHeader title="Edit blog" description={`Editing blog slug: ${slug}`} backUrl="/admin/blogs" />
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="mt-3 text-slate-600">Editing blog form will go here...</p>
        </div>
      </div>
    </main>
  );
}
