import "@/style/reset.css"
import "@/style/variables.css"
import "@/style/globals.css"
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ayhan Berk's Website Homepage",
    template: "Ayhan Berk's | %s Page"
  },
  description: "Ayhan Berk's Blog Page Example",
  "parabirimleri-api": '3Co0Ta7ZkGYPWuz4ufkV2xqnebmafCII',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
