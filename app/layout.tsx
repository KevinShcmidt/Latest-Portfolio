import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import { ThemeProvider } from "next-themes";

export const metadata : Metadata = {
  title: "Kevin Rakotovao | Front-end Developer web & mobile | UI&UX Designer",
  description: "Portfolio de Kevin Rakotovao - Développeur Front-end web & mobile et UI/UX Designer basé à Madagascar. Un an d'expérience dans la création d'interfaces web et mobile modernes et intuitives.",
  keywords: [
    "Kevin Rakotovao",
    "Front-end Developer",
    "Mobile Developer",
    "UI Designer",
    "UX Designer",
    "Madagascar",
    "Développeur Madagascar",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "React",
    "Flutter",
    "Interface Design",
    "Junior Developer",
  ],
  authors: [{ name: "Kevin Rakotovao" }],
  creator: "Kevin Rakotovao",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votresite.com",
    title: "Kevin Rakotovao | Front-end Developer web & mobile | UI&UX Designer",
    description: "Développeur Front-end web & mobile et UI/UX Designer basé à Madagascar. Un an d'expérience en création d'interfaces modernes.",
    siteName: "Kevin Rakotovao Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kevin Rakotovao - Portfolio Front-end & UI/UX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Rakotovao | Front-end Developer web & mobile | UI&UX Designer",
    description: "Développeur Front-end web & mobile et UI/UX Designer basé à Madagascar. Un an d'expérience en création d'interfaces modernes.",
    images: ["chemin/vers/votre/image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
         <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          
        >
         <main className="min-h-screen bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
