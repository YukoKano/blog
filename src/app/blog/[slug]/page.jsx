import Image from "next/image";
import { getPostBySlug } from "../../../../lib/api";
import { extractText } from "../../../../lib/extract-text";

import { ConvertBody } from "@/components/ConvertBody";
import { Container } from "@/components/Container";
import { PostBody } from "@/components/PostBody";
import { PostHeader } from "@/components/PostHeader";
import {
  TwoColumns,
  TwoColumnsMain,
  TwoColumnsSidebar,
} from "@/components/TwoColumns";
import { PostCategory } from "@/components/PostCategory";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const { title, pageTitle, publishDate: publish, content, categories } = post;

  const pageDesc = extractText(content);
  const eyecatch = post.eyecatch ?? "";

  const ogpTitle = `${pageTitle} | Cube`;
  // const ogpUrl = new URL(`/blog/${slug}`, "siteUrl").toString();

  const metadata = {
    title: pageTitle,
    description: pageDesc,

    openGraph: {
      title: ogpTitle,
      description: pageDesc,
      // url: ogpUrl,
      images: [
        {
          url: eyecatch.url,
          width: eyecatch.width,
          height: eyecatch.height,
        },
      ],
    },

    twitter: {
      title: ogpTitle,
      description: pageDesc,
      images: [eyecatch.url],
    },
  };

  return metadata;
}

export default async function Schedule({ params }) {
  // paramsを持ってくれば勝手にslugゲットできるの便利
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <Container>
      <article>
        <PostHeader
          title={post.title}
          subtitle="Blog Article"
          publish={post.publishDate}
        />
        <figure>
          <Image
            src={post.eyecatch.url}
            alt=""
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>
        <TwoColumns>
          <TwoColumnsMain>
            <PostBody>
              {/* React要素に変換する必要がある。dangerouslySetInnerHTMLをつかうと最も簡単だが扱いづらい */}
              {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
              <ConvertBody contentHtml={post.content} />
              {/* ↑のようにparserを使うとImageコンポーネントも使える */}
            </PostBody>
          </TwoColumnsMain>
          <TwoColumnsSidebar>
            <PostCategory categories={post.categories} />
          </TwoColumnsSidebar>
        </TwoColumns>
      </article>
    </Container>
  );
}
