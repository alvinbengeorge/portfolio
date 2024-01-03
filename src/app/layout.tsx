import NavBar from "../components/NavBar";
import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alvin Ben George</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className + " bg-black"}>
        <NavBar />
        <div className="bg-black overflow-auto">{children}</div>
      </body>
    </html>
  );
}
