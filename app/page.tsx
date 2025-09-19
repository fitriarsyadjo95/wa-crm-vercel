import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4 mt-12">
      <h1 className="text-3xl font-bold">Website Onboarding Survey</h1>
      <p className="text-gray-600">
        Capture all the essential information for your website project.
      </p>
      <Link
        href="/onboarding"
        className="inline-block rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors"
      >
        Start Onboarding Form →
      </Link>
    </div>
  );
}