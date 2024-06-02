import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contex/ThemeContex";
import AuthProvider from "./components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default:'Ak app',
    template:'Ak app | %s',
  }
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className="h-full w-full">
        <ThemeProvider>
          <AuthProvider>
           {/* <section className="container mb-0 h-full m-0 w-full"> */}
          <Navbar/>
        {children}
        <Footer/>
        {/* </section> */}
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
