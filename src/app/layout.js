import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VocaGame | Frontend Test @Zainal",
  description:
    "VocaGame merupakan salah satu situs top up dan pembelian voucher game di Indonesia yang perkembangannya terhitung cepat dan memiliki tujan untuk memudahkan setiap masyarakat di Indonesia, agar dapat memenuhi aneka kebutuhan top up dan pembelian voucher game secara online. Selain kamu dapat menikmati proses pembelian aneka produk top up dan voucher game yang mudah dan efisien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
