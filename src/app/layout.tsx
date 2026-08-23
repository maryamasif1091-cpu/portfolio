import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maryam Asif — Developer Portfolio",
  description: "Personal developer portfolio showcasing projects, technical skills, and background of Maryam Asif, a Computer Science student at FAST-NUCES.",
  keywords: ["Maryam Asif", "Software Developer", "Computer Science", "FAST-NUCES", "Portfolio", "C++", "JavaScript", "React"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-gray-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}