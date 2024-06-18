import { Container } from "@/components/Container";
import { getAllPosts } from "../../../lib/api";
import { Posts } from "@/components/Posts";

import { Hero } from "@/components/Hero";
import { eyecatchLocal } from "../../../lib/constants";

export default async function Blog() {
  const posts = await getAllPosts();
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal; // ここ非常に命令的
    }
  }

  return (
    <Container>
      <Hero title="blog" subtitle="recent posts" />
      <Posts posts={posts} />
    </Container>
  );
}
