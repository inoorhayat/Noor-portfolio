import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header/Header"; // Corrected import statement

export const metadata = {
  title: "Noor's Portfolio",
  description: "Noor Hayat Mern Stack Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
