import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Shivam App",
  description: "Built by Shivam",
  icons: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
