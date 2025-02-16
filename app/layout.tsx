import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://ai-sdk-preview-internal-knowledge-base.vercel.app"
  ),
  title: "Study LM",
  description: "Study LM ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <Navbar />
        <ThemeProvider attribute="class" enableSystem forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
