import { Container } from "@/components/Container";
import { PostHeader } from "@/components/PostHeader";
import {
  getAllCategories,
  getAllPostsByCategories,
} from "../../../../../lib/api";
import { eyecatchLocal } from "../../../../../lib/constants";
import { Posts } from "@/components/Posts";

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCategories = await getAllCategories();

  // returnいるんだ
  return allCategories.map(({ slug }) => {
    return { slug: slug };
  });
}

export default async function Category({ params }) {
  const catSlug = params.slug;

  const allCategories = await getAllCategories();
  const category = allCategories.find(({ slug }) => slug === catSlug);

  const name = category.name;

  // const posts = await getAllPostsByCategories(category.id); // こいつが配列じゃないらしい？エラー出て困ってる idが違う？
  // for (const post of posts) {
  //   if (!post.hasOwnProperty("eyecatch")) {
  //     post.eyecatch = eyecatchLocal;
  //   }
  // }

  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
      {/* <Posts posts={posts} /> */}
    </Container>
  );
}
