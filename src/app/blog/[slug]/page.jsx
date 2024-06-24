import { getAllSlugs, getPostBySlug } from "/lib/api";
import { extractText } from "/lib/extract-text";

import { eyecatchLocal } from "/lib/constants";

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
import { ImageComponent } from "@/components/ImageComponent";
import { prevNextPost } from "/lib/prev-next-post";
import { Pagenation } from "@/components/Pagenation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const allSlugs = await getAllSlugs();

  // returnいるんだ
  return allSlugs.map(({ slug }) => {
    return { slug: slug };
  });
}

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const post = await getPostBySlug(slug);
  const { title, pageTitle, publishDate: publish, content, categories } = post;

  const pageDesc = extractText(content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

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

export default async function Post({ params }) {
  // paramsを持ってくれば勝手にslugゲットできるの便利
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  if (!post.title || !post.publishDate) return null;

  return (
    <Container>
      <article>
        <PostHeader
          title={post.title}
          subtitle="Blog Article"
          publish={post.publishDate}
        />
        <ImageComponent
          imagePath={eyecatch.url}
          imageWidth={eyecatch.width}
          imageHeight={eyecatch.height}
          sizes={"(min-width: 1152px) 1152px, 100vw"}
          isPriority
        />
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
        <Pagenation
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}
