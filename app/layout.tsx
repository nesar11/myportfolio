// app/layout.tsx
import './styles/globals.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Nesar Uddin | Portfolio Website | Full Stack Developer | DevOps</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
