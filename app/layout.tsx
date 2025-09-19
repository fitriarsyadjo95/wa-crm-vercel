import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Onboarding Survey",
  description: "Client onboarding form for website projects"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="mx-auto max-w-4xl p-6">{children}</main>
      </body>
    </html>
  );
}