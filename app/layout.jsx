import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://w-food-two.vercel.app/"),
  title: "W'Food Restaurant",
  openGraph: {
    description: "Una Muestra de Sabores Locales.",
    url: "https://w-food-two.vercel.app/",
    images: [
      {
        url: "/bg.png", // Ruta relativa a la imagen en la carpeta public
        width: 1200, // Ancho de la imagen
        height: 630, // Alto de la imagen
        alt: "W-Food", // Texto alternativo para la imagen
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
