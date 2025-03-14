import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahtisham Ul Haq | Portfolio ',
  description: 'Explore my portfolio showcasing React, Next.js, and Tailwind CSS projects.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Ahtisham Ul Haq',
    description: 'Check out my portfolio featuring React, Next.js, and MERN stack projects.',
    url: 'https://ahtishamulhaq.vercel.app',
    siteName: 'Ahtisham Ul Haq Portfolio',
    images: [
      {
        url: 'https://ahtishamulhaq.vercel.app/preview-img-dark.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Ahtisham Ul Haq Portfolio Preview',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <meta property="og:title" content="Ahtisham Ul Haq | Frontend Developer" />
  <meta property="og:description" content="Explore my portfolio showcasing React, Next.js, and Tailwind CSS projects." />
  <meta name="image" property="og:image" content="https://ahtishamulhaq.vercel.app/preview-img-dark.png?v=2"/>
  <meta property="og:url" content="https://ahtishamulhaq.vercel.app/" />
  
</head>
      <body>{children}</body>
    </html>
  );
}
