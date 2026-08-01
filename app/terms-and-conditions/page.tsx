import { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";
import { FaCamera, FaMapMarkerAlt, FaUsers, FaBuilding, FaChartLine, FaShieldAlt, FaCity } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Terms & Conditions | CityVoice",
  description: "Terms and Conditions for using CityVoice.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Welcome to CityVoice. By accessing or using the app, you agree to the following terms."
      lastUpdated="April 17, 2026"
    >
      <LegalSection number="1" title="Platform Purpose">
        <p>
          CityVoice is a <strong>community-driven civic platform</strong> that allows users to post, view, and engage with real-world civic issues.
        </p>
        <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4 mt-4">
          <p className="text-amber-900 font-medium">We do not guarantee resolution of any issue posted on the platform.</p>
        </div>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="2" title="User Eligibility">
        <ul className="list-disc pl-5 space-y-2">
          <li>You must be <strong>18 years or older</strong></li>
          <li>You must provide <strong>accurate information</strong></li>
          <li>You are responsible for all activity under your account</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="3" title="User Content">
        <p>By posting on CityVoice, you agree:</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>Content must be <strong>true and not misleading</strong></li>
          <li>
            You will not post:
            <ul className="list-[circle] pl-6 space-y-1 mt-2">
              <li>Fake complaints</li>
              <li>Personal attacks or defamation</li>
              <li>Private property without permission</li>
              <li>Illegal or offensive material</li>
            </ul>
          </li>
        </ul>
        <p className="mt-6">
          You grant CityVoice a <strong>non-exclusive license</strong> to use, display, and share your content for platform operations.
        </p>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="4" title="Moderation Rights">
        <p>CityVoice reserves the right to:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Remove any content without notice</li>
          <li>Suspend or restrict users</li>
          <li>Review and moderate posts</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="5" title="Data Usage">
        <p>Your data is handled as per our Privacy Policy.</p>
        <p className="mt-3">We may share issue-related data with:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Municipal authorities</li>
          <li>Government bodies</li>
          <li>NGO&apos;s</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="6" title="No Liability">
        <p>CityVoice acts as a <strong>facilitator platform only.</strong></p>
        <p className="mt-3">We are <strong>not responsible for:</strong></p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Action or inaction by authorities</li>
          <li>Accuracy of user-generated content</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="7" title="Intellectual Property">
        <ul className="list-disc pl-5 space-y-2">
          <li>App design, branding, and content belong to CityVoice</li>
          <li>Users cannot copy, reproduce, or misuse platform elements</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="8" title="Termination">
        <p>We may suspend or terminate access if:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Terms are violated</li>
          <li>Misuse of platform is detected</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="9" title="Changes to Terms">
        <p>We may update these Terms anytime. Continued use means acceptance.</p>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      {/* App Description Section - Highlighted differently */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            CityVoice - App Description
          </h2>
          <p className="text-xl font-bold text-slate-800 mb-4">
            CityVoice – Raise Issues. Get Heard. Fix Your City.
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tired of bad roads, potholes, garbage issues, or civic problems being ignored? <br/>
            <strong>CityVoice gives your complaint a platform.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaCamera className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Report Civic Issues Instantly</h3>
              <p className="text-sm text-slate-600">Snap a photo, add details, and post your issue in seconds.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Auto Location Tagging</h3>
              <p className="text-sm text-slate-600">Your issue is mapped automatically for accurate reporting and visibility.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaUsers className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Community Support</h3>
              <p className="text-sm text-slate-600">Get support from people facing the same issue.<br/>More voices = more attention.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaBuilding className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Reach the Right Authorities</h3>
              <p className="text-sm text-slate-600">Issues can be directed to relevant municipal bodies for action.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaChartLine className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Track Issues (Coming Soon)</h3>
              <p className="text-sm text-slate-600">Monitor status like: Pending, In Progress, Resolved</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Safe & Controlled Platform</h3>
              <p className="text-sm text-slate-600">Content moderation, User reporting system, Privacy-focused approach</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white/60 backdrop-blur-sm border border-white rounded-2xl p-6 text-center flex items-center justify-center gap-4">
          <div className="flex-shrink-0 text-blue-600">
            <FaCity className="text-3xl" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-slate-900">Built for Real City Problems</h3>
            <p className="text-sm text-slate-600 mt-1">From potholes to streetlights to public infrastructure—<br/>CityVoice is designed for real-world impact.</p>
          </div>
        </div>

      </section>

    </LegalPageLayout>
  );
}
