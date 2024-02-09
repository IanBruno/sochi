import '@/app/ui/global.css';
import { exo } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased`}>{children}</body>
    </html>
  );
}
