import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import '@/styles/globals.css';

const googleFont = M_PLUS_Rounded_1c({
  weight: ['100', '400', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={googleFont.className}>
        {draftMode().isEnabled && (
          <div>
            <a className='p-4 bg-blue-300 block' href='/api/disable-draft'>
              Disable preview mode
            </a>
          </div>
        )}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
