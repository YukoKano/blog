import { ConvertBody } from "@/components/ConvertBody";
import { getPostBySlug } from "../../../../lib/api";
import { Container } from "@/components/Container";
import { PostBody } from "@/components/PostBody";
import { PostHeader } from "@/components/PostHeader";
import {
  TwoColumns,
  TwoColumnsMain,
  TwoColumnsSidebar,
} from "@/components/TwoColumns";
import Image from "next/image";
import { PostCategory } from "@/components/PostCategory";

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
