import "@/styles/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // グローバルスタイルとしてサイト全体に適用
import { config } from "@fortawesome/fontawesome-svg-core"; // SVGコアが個別にCSS適用するのを無効化
config.autoAddCss = false;

export const metadata = {
  title: "blog",
  description: "created after reading the book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
