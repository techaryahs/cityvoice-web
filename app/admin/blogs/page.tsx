import Link from "next/link";
import { formatBlogDate } from "@/lib/blogs";
import { readBlogs } from "@/lib/blogs-server";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminBlogsPage() {
  const blogs = readBlogs();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <AdminHeader title="Blog posts" description="Manage and view your blog posts">
          <Link href="/admin/blogs/add" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow">
            Add new blog
          </Link>
        </AdminHeader>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {blogs.length === 0 ? (
            <p className="text-slate-600">No blogs yet.</p>
          ) : (
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="flex flex-col gap-2 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">{blog.category}</p>
                    <h2 className="text-lg font-semibold text-slate-900">{blog.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">{blog.description}</p>
                  </div>
                  <div className="text-sm text-slate-500">
                    <p>{formatBlogDate(blog.createdAt)}</p>
                    <p>{blog.published ? "Published" : "Draft"}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
