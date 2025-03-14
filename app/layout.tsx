import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

        {children}
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
      </body>
    </html>
  );
}
