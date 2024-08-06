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
  other: { "parabirimleri-api":'uQsMzkSsPhGEQG6De3w7xDaoJbTGaHj9'},
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
