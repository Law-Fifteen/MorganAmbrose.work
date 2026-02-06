import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Morgan Ambrose Naranjo - Corporate Sales Manager',
  description: 'Sales and Operations Leader with a proven record of building high-performing teams and scalable training programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}