import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { getAllPosts } from "/lib/api";
import { eyecatchLocal } from "/lib/constants";
import { Posts } from "@/components/Posts";
import { Pagenation } from "@/components/Pagenation";

export default async function Home() {
  const posts = await getAllPosts(4); // await大事

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal; // ここ非常に命令的
    }
  }

  return (
    <>
      <Container>
        <Hero title="cube" subtitle="create output" imageOn />
        <Posts posts={posts} />
        <Pagenation nextUrl="/blog" nextText="More Posts" />
      </Container>
    </>
  );
}
