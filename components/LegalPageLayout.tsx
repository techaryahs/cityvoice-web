import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#eef6ff]">
      {/* Background elements */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-blue-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-40 -left-52 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Back Button & Header */}
        <div className="pt-32 md:pt-40 pb-16 px-6 max-w-[950px] mx-auto w-full flex-grow">
          <div className="mb-10">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition font-medium bg-white/50 backdrop-blur-sm border border-slate-200/60 px-4 py-2 rounded-full shadow-sm hover:shadow-md"
            >
              <FaArrowLeft className="text-xs" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{subtitle}</p>
            <p className="text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 inline-block px-5 py-2 rounded-full shadow-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <article className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-[0_8px_40px_rgba(15,23,42,0.06)] border border-white/60 p-8 md:p-14 space-y-14">
            {children}
          </article>
        </div>

        <Footer />
      </div>
    </main>
  );
}

interface LegalSectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ number, title, children }: LegalSectionProps) {
  return (
    <section className="relative">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-start gap-4">
        {number && <span className="text-blue-600 font-black">{number}.</span>}
        <span className="leading-tight">{title}</span>
      </h2>
      <div className="text-slate-600 text-[1.05rem] leading-relaxed space-y-5">
        {children}
      </div>
    </section>
  );
}
