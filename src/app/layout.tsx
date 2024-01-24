import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { font } from "../utils/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hello, I am Alvin Ben George, a Backend Developer currently interested in Python, TypeScript and Embedded Systems, currently pursuing Electronics and Computer Engineering." />
        <title>Alvin Ben George</title>
        <link rel="icon" href="/favicon.ico" />
          
      </head>
      <body className={font.className + " bg-black"}>
        <NavBar />
        <div className="bg-black overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
