'use client';

import { Inter } from "next/font/google";
import { styled } from './common/theme/global';
import { Column } from './common/Layouts';
import NavigationMenu from './common/navigation/NavigationMenu';
import { globalStyles } from './common/theme/global';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Brownian Motion</title>
        <link rel="icon" href="images/BlackHellfish.svg" type="image/svg+xml"></link>
      </head>
      <body>
        <Column style={{ height: '100vh', width: '100vw' }} align="stretch">
          <NavigationMenu />
          <ScrollableContent>
            {children}
          </ScrollableContent>
        </Column>
      </body>
    </html>
  );
}

const ScrollableContent = styled('div', {
  overflowY: 'scroll',
  width: '-webkit-fill-available',
  height: '-webkit-fill-available',
})