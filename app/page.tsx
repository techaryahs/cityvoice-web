import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#eef6ff]">

      {/* Background */}

      <div className="absolute -top-60 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute top-40 -left-52 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-400/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)]" />

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Reviews />

        <BlogSection />


        <Footer />

      </div>

    </main>
  );
}