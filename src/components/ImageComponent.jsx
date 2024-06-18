"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/ImageComponent.module.css";

export const ImageComponent = ({
  imagePath,
  imageWidth,
  imageHeight,
  sizes,
  isPriority,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    // ①layout="responsive"は使えなくなったので、styles属性でwidth, heightを指定する必要がある
    // https://nextjs.org/docs/app/api-reference/components/image#responsive-image-using-a-static-import

    // ②下記のやり方だと、placeholder=blurを使わないでアニメーションは作成できる。逆に使う方法がわからない……
    // https://www.meje.dev/blog/nextjs-image-blur-on-load
    // placeholderでblurDataUrlが生成されるのは確認できるが、確認方法がわからない

    // ③なぜかめちゃくちゃ重たい。use clientのせいかと思ったけど違った。単純にページ全体のloadが長いっぽい？
    <figure className={styles.figure}>
      <Image
        src={imagePath}
        alt=""
        width={imageWidth}
        height={imageHeight}
        sizes={sizes}
        style={{ width: "100%", height: "auto" }}
        className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
        onLoad={() => setIsImageLoaded(true)}
        priority={isPriority}
        // key={imagePath} ブラー処理を変えたので別のものと認識させる必要がなくなった、これいるか？
      />
    </figure>
  );
};
