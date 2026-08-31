"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export default function TeamSection() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/members");
        if (res.ok) {
          const data = await res.json();
          setMembers(data);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return null; // Don't show anything while loading
  if (members.length === 0) return null; // Gracefully hide if no members exist

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background elements to match CityVoice styling */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            👋 Our Team
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The people working together to make CityVoice better.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {member.name}
              </h3>
              <p className="mt-2 text-base font-semibold text-blue-600">
                {member.role}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
