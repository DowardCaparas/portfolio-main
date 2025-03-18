import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "./ui/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dounhuward Caparas",
  description:
    "I'm a Full stack web developer showcasing my works and interest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavBar />
        <div className="py-20">{children}</div>

        {/* Embedded Chatbot Script */}
        <Script
          id="chatbot-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "cOWIZgQezkVlIHKguM5Kl",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="lazyOnload" // Ensures it loads after the page
        />
        {/* Footer */}
        <footer className="text-center flex flex-col my-10 text-sm">
          <span>&copy; 2025 Dounhuward B. Caparas</span>
          <span>All rights reserved.</span>
        </footer>
      </body>
    </html>
  );
}
