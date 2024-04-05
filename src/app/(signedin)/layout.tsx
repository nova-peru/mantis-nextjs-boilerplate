// Global
import type { Metadata } from "next";

// Local
import { MainLayout } from "@/layouts/MainLayout";
import { MainLayoutProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Crece HR - Bienvenido",
  description: "Gestión de talentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayoutProvider>
      <MainLayout>{children}</MainLayout>
    </MainLayoutProvider>
  );
}
