import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";



export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especilizada",
  description: "Oficina de carros em Juiz de Fora, MG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
