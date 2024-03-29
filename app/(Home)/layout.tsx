import Footer from '@/components/ui/shared/Footer';
import Header from '@/components/ui/shared/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APP',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
