import { Container } from "@/components/Container";
import { PostHeader } from "@/components/PostHeader";
import { getAllCategories } from "../../../../../lib/api";

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCategories = await getAllCategories();

  // returnいるんだ
  return allCategories.map(({ slug }) => {
    return { slug: slug };
  });
}

export default async function Category({ params }) {
  const slug = params.slug;

  const allCategories = await getAllCategories();
  const category = allCategories.find(
    ({ slug: categorySlug }) => categorySlug === slug // ここの書き方合ってるか自信ない
  );

  return (
    <Container>
      <PostHeader title={category.name} subtitle="Blog Category" />
    </Container>
  );
}
