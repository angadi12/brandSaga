import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Nav from "@/components/Homecomponenets/Navbar";
import Footer from "@/components/Footercomponent/Footer";
import FAQ from "@/components/Homecomponenets/FAQ";
import Chatbutton from "./Chatbutton";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:"Brandsaga",
  description: "We are your one-stop destination for all things digital marketing. From influencer/Celebrity collaborations to social media strategies, we are here to amplify your brand's presence in the digital landscape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          <main className="">
            <Chatbutton />
            {children}
            <FAQ />
          </main>
          <footer className="">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
