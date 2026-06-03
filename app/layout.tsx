import "./globals.css";

export const metadata = {
  title: "Arch Support",
  description: "Rozwiązania dla architektów",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
