import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Roboto, Archivo_Black } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700', '800', '900'],
})

const archivo_black = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo-black',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "Wesley Silva",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} ${inter.variable}  ${roboto.variable} ${archivo_black.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
