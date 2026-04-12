import { neitzenMetadata } from './metadata';
import MainLayout from './mainlayout';
import './globals.css';

export const metadata = neitzenMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans flex flex-col antialiased" suppressHydrationWarning>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}