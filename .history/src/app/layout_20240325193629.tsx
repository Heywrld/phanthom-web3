import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { FormStateProvider } from "@/hooks/useFormState";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phantom",
  description: "Phantom Web 3 App",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${inter.className} flex flex-col p-4 md:py-[30px] md:px-[40px]`}
      >
        <FormStateProvider>{children}</FormStateProvider>
      </body>
    </html>
  );
}
