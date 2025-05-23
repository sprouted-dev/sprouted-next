import AppBar from "@/components/appbar";
import { Nunito } from "next/font/google";
import { Metadata } from "next";
import "@/styles/tailwind.css";
import ThemeProvider from "@/components/theme-provider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sprouted - Weather-Powered Development",
  description:
    "The Weather System for developers. Automatically preserve context, eliminate flow state loss, and enable seamless AI assistant collaboration.",
  other: {
    "go-import": [
      "sprouted.dev/weather git https://github.com/sprouted-dev/garden",
      "sprouted.dev/sprout-cli git https://github.com/sprouted-dev/garden",
    ],
    "go-source": [
      "sprouted.dev/weather https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/libs/weather{/dir} https://github.com/sprouted-dev/garden/blob/main/libs/weather{/dir}/{file}#L{line}",
      "sprouted.dev/sprout-cli https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/apps/sprout-cli{/dir} https://github.com/sprouted-dev/garden/blob/main/apps/sprout-cli{/dir}/{file}#L{line}",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] dark:bg-[#1e293b] text-slate-900 dark:text-white">
        <ThemeProvider>
          <div>
            <AppBar />
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
