"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/ImageComponent.module.css";
import eyecatch from "@/images/about.jpg";

export const ImageComponent = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    // ①layout="responsive"は使えなくなったので、styles属性でwidth, heightを指定する必要がある
    // https://nextjs.org/docs/app/api-reference/components/image#responsive-image-using-a-static-import

    // ②下記のやり方だと、placeholder=blurを使わないでアニメーションは作成できる
    // https://www.meje.dev/blog/nextjs-image-blur-on-load

    // ③なぜかめちゃくちゃ重たい。　use clientのせいかと思ったけど違った。単純にloadが長いっぽい？
    <figure>
      <Image
        src={eyecatch}
        alt=""
        width={1280}
        height={853}
        sizes="(min-width: 1152px) 1152px, 100vw"
        style={{ width: "100%", height: "auto" }}
        onLoad={() => setIsImageLoading(false)}
        className={`${isImageLoading ? styles.blur : styles.removeBlur}`}
        // placeholder="blur"
        // blurDataURL=""
        priority
      />
      {/*  */}
    </figure>
  );
};
