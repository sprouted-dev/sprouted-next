import AppBar from "@/components/appbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-sprouted">
      <AppBar />
      <div className="">{children}</div>
    </main>
  );
}
