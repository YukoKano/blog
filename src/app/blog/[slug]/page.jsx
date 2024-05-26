import { getPostBySlug } from "../../../../lib/api";
import { Container } from "@/components/Container";
import { PostHeader } from "@/components/PostHeader";

export default async function Schedule() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);

  return (
    <Container>
      <article>
        <PostHeader
          title={post.title}
          subtitle="Blog Article"
          publish={post.publishDate}
        />
      </article>
    </Container>
  );
}
