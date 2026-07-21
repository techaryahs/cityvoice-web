"use client";

import { useRouter } from "next/navigation";
import {
  FaPlusCircle,
  FaNewspaper,
  FaImages,
  FaStar,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const cards = [
  {
    title: "Add Blog",
    description: "Create a new blog",
    icon: FaPlusCircle,
    color: "from-blue-600 to-cyan-500",
    href: "/admin/blogs/add",
  },
  {
    title: "Manage Blogs",
    description: "Edit & Delete Blogs",
    icon: FaNewspaper,
    color: "from-purple-600 to-pink-500",
    href: "/admin/blogs",
  },
  {
    title: "Homepage Images",
    description: "Update Hero Images",
    icon: FaImages,
    color: "from-green-600 to-emerald-500",
    href: "/admin/homepage",
  },
  {
    title: "User Reviews",
    description: "Manage Testimonials",
    icon: FaStar,
    color: "from-yellow-500 to-orange-500",
    href: "/admin/reviews",
  },
  {
    title: "Users",
    description: "Registered Users",
    icon: FaUsers,
    color: "from-indigo-600 to-violet-500",
    href: "/admin/users",
  },
  {
    title: "Settings",
    description: "Website Settings",
    icon: FaCog,
    color: "from-gray-700 to-gray-500",
    href: "/admin/settings",
  },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          CityVoice Admin Dashboard
        </h1>

        <p className="mt-1 text-blue-100">
          Manage your website from one place.
        </p>
      </div>

      <div className="mx-auto max-w-7xl p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <button
                key={card.title}
                onClick={() => router.push(card.href)}
                className="group rounded-3xl bg-white p-6 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} text-3xl text-white shadow-lg`}
                >
                  <Icon />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-800">
                  {card.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {card.description}
                </p>

                <div className="mt-6 font-semibold text-blue-600 group-hover:translate-x-1 transition">
                  Open →
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}