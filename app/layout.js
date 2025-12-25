import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FORGE - Rapid MVP & Brand Kit Delivery',
  description: 'FORGE offers rapid MVP development and complete brand kit design to launch your business ideas faster. Get to market quickly with a professional identity.',
  keywords: ['MVP', 'Rapid Development', 'Brand Kit', 'Logo Design', 'Web Development', 'Startup', 'Forge'],
  author: 'FORGE Agency',
  openGraph: {
    title: 'FORGE - Rapid MVP & Brand Kit Delivery',
    description: 'FORGE offers rapid MVP development and complete brand kit design to launch your business ideas faster.',
    url: 'https://www.yourforgeagency.com', // Replace with your actual domain
    siteName: 'FORGE',
    images: [
      {
        url: 'https://www.yourforgeagency.com/og-image.jpg', // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: 'FORGE - Rapid MVP & Brand Kit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORGE - Rapid MVP & Brand Kit Delivery',
    description: 'FORGE offers rapid MVP development and complete brand kit design to launch your business ideas faster.',
    images: ['https://www.yourforgeagency.com/twitter-image.jpg'], // Replace with a relevant image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
