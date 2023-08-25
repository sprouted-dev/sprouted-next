import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Sprouted",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
