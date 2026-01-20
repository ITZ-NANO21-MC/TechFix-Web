import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'TechFix Solutions - Reparación de Celulares y PC',
  description: 'Expertos en reparación de celulares y computadoras. Venta de accesorios de alta calidad. Soluciones tecnológicas a tu alcance.',
  icons: {
    // Ícono para la pestaña del navegador (puede ser .ico o .png)
    icon: '/favicon.ico', 
    
    // Ícono para Apple (iPhone, iPad)
    apple: '/apple-touch-icon.png', // <-- Deberías crear este archivo en 180x180

    // Otros tamaños para diferentes propósitos (opcional pero recomendado)
    shortcut: '/favicon-16x16.png', // <-- Íconos PNG de tamaños específicos
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png', // <-- Ícono para Android
        sizes: '192x192',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
