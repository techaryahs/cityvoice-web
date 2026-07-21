import Link from "next/link";

interface EditBlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Edit blog</h1>
        <p className="mt-3 text-slate-600">Editing blog slug: {slug}</p>
        <Link href="/admin/blogs" className="mt-6 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          Back to blogs
        </Link>
      </div>
    </main>
  );
}
