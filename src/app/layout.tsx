import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/app/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900 antialiased")}>
      <body>{children}</body>
    </html>
  );
}
