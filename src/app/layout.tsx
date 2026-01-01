import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/Header";
import { Container } from "@/styles/pages/app";
import { CartContextProvider } from "@/contexts/CartContext";
import { StitchesRegistry } from "@/components/StitchesRegistry";

const geistRobo = Roboto({
  variable: "--font-geist-robo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: 'Ignite Shop',
  description: 'Loja desenvolvida no Ignite',
  metadataBase: new URL('https://ignite-shop.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistRobo.variable}`}>
        <StitchesRegistry>
          <CartContextProvider>
            <Container>
              <Header />
              {children}
            </Container>
          </CartContextProvider>
        </StitchesRegistry>
      </body>
    </html>
  );
}
