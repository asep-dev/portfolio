import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils/cn';

const inter = Inter({
   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
   subsets: ['latin'],
});

// const setInitialTheme = `
//    (function() {
//       if (localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//          document.documentElement.classList.add('dark')
//       } else {
//          document.documentElement.classList.remove('dark')
//       }
//    })();
// `;

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="id">
         <body className={cn('text-black dark:text-white', inter.className)}>
            {children}
         </body>
      </html>
   );
}
