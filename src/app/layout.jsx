import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import CartProvider from '@/context/CartProvider';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Texi Kitchen',
    template: '%s | Texi Kitchen',
  },
  description: 'Texi Burger resturent',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="px-5 py-2 flex  items-center justify-between gap-5 bg-stone-800">
          <Link href={'/'}>
            {/* <img src="/logo.png" alt="" className="w-[80px]" /> */}
            <Image
              src="/logo.png"
              alt=""
              className="w-20"
              width={80}
              height={80}
            />
          </Link>
          <div className="space-x-3">
            <Link className="btn" href={'/foods'}>
              Foods
            </Link>
            <Link className="btn" href={'/reviews'}>
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
