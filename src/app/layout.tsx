import localFont from 'next/font/local';

import QueryProvider from '@/providers/QueryProvider';
import '@/styles/globals.css';

import type { Metadata } from 'next';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
});

// TODO: 메타데이터 추가
export const metadata: Metadata = {
  title: 'nst-tiptap example',
  description: 'nst-tiptap 테스트용 레포',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg-secondary text-text-primary">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
