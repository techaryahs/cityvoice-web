import { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | CityVoice",
  description: "Privacy Policy for CityVoice. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. Learn how CityVoice collects, uses, and protects your information."
      lastUpdated="April 17, 2026"
    >
      <LegalSection number="1" title="Information We Collect">
        <p>We collect only the information necessary to operate the platform effectively:</p>
        
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-semibold text-slate-800 text-lg mb-2">a) User-Generated Content</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Photos and descriptions of civic issues</li>
              <li>Comments and interactions on posts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 text-lg mb-2">b) Location Data</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Approximate or precise location (to tag issue location)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 text-lg mb-2">c) Account Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mobile number (for OTP login)</li>
              <li>Basic profile details (provided by user)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 text-lg mb-2">d) Device Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device type, OS, app usage data (for performance &amp; debugging)</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="2" title="How We Use Your Information">
        <p>We use collected data to:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Enable users</strong> to post and share civic issues</li>
          <li><strong>Route issues</strong> to relevant municipal authorities</li>
          <li><strong>Improve app</strong> functionality and performance</li>
          <li><strong>Maintain platform</strong> safety and moderation</li>
          <li><strong>Provide status updates</strong> on issues (future feature)</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="3" title="Data Sharing">
        <p className="font-semibold text-slate-800 text-lg">We do not sell user data.</p>
        <p className="mt-3">However, we may share limited data in the following cases:</p>
        <ul className="list-disc pl-5 space-y-4 mt-4">
          <li>
            <strong className="text-slate-800">With Government Authorities:</strong>
            <p className="mt-1">Issue-related data (photo, description, location) may be shared to facilitate resolution</p>
          </li>
          <li>
            <strong className="text-slate-800">With Service Providers:</strong>
            <p className="mt-1">For hosting, analytics, or OTP services (under strict data protection agreements)</p>
          </li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="4" title="User Responsibility">
        <div className="mb-4">
          <p>Users must not upload:</p>
          <ul className="list-[circle] pl-8 space-y-1 mt-2">
            <li>False or misleading information</li>
            <li>Personal or private property content without consent</li>
            <li>Offensive, abusive, or illegal content</li>
          </ul>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mt-6">
          <p className="text-blue-900 font-medium">CityVoice reserves the right to remove content or restrict users violating guidelines.</p>
        </div>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="5" title="Data Security">
        <p>We implement reasonable technical and organizational measures to protect your data. However, no digital platform can guarantee 100% security.</p>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="6" title="Your Control & Rights">
        <p>You can:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Choose what content to upload</li>
          <li>Edit or delete your posts (if feature enabled)</li>
          <li>Stop using the app anytime</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="7" title="Data Retention">
        <ul className="list-disc pl-5 space-y-2">
          <li>We retain data as long as necessary to operate the platform</li>
          <li>Data may be retained for legal or operational purposes</li>
        </ul>
      </LegalSection>

      <div className="h-px bg-slate-100" />

      <LegalSection number="8" title="Policy Updates">
        <p>This Privacy Policy may be updated from time to time. Continued use of the app means acceptance of updates.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
