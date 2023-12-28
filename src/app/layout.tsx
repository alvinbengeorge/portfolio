import NavBar from "../components/NavBar";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const font = Comfortaa({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alvin Ben George</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={font.className}>
        <NavBar />
        <div className="bg-black">{children}</div>
      </body>
    </html>
  );
}
