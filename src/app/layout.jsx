import "@/styles/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // グローバルスタイルとしてサイト全体に適用
import { config } from "@fortawesome/fontawesome-svg-core"; // SVGコアが個別にCSS適用するのを無効化
import { GoogleTag } from "@/components/GoogleTag";
config.autoAddCss = false;

// 書籍が古かったので下記を参照
// https://nextjs.org/learn/dashboard-app/adding-metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// 動的にもできる：https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata

export const metadata = {
  title: {
    template: "%s | Cube", // %sは特定のページタイトルに置き換えられる
    default: "Cube",
  },
  description: "The official Next.js Learn Dashboard built with App Router",
  // metadataBase: new URL("https://hogehoge.com"), // デフォルト値が自動で設定される 相対パスを利用できるようにする
  // alternates: {
  //   canonical: "/",
  // },
  icons: {
    icon: "/icon.ico", // public/favicon.icoだとうまくいかなかったなんで？ リネームして解決した→　https://qiita.com/nisaji/items/5aaa4b743dc5bf668e8a
    shortcut: "/icon.ico",
  },
  type: "website",
  generator: "Next.js",
  applicationName: "Blog Page",
  referrer: "origin-when-cross-origin", // これもあまりよくわからん
  keywords: ["Next.js", "React", "JavaScript"],
  openGraph: {
    title: "Blog Page",
    description: "The official Next.js Learn Dashboard built with App Router",
    siteName: "Cube",
  },
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <GoogleTag />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
