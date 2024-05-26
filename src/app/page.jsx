import { client } from "../../lib/api";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

export default async function Home() {
  // ページコンポーネントを非同期関数に変更
  // const resPromise = client.get({
  //   endpoint: "blogs",
  // });

  // resPromise
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));

  // try {
  //   const res = await resPromise;
  //   console.log(res);
  // } catch (err) {
  //   console.log(err);
  // }

  // const posts = await getAllPost(4);

  // for (const post of posts) {
  //   if (!post.hasOwnProperty("eyecatch")) {
  //     post.eyecatch = eyecatchLocal;
  //   }
  //   const { base64 } = await getPlaiceholder(post.eyecatch.url);
  //   post.eyecatch.blurDataURL = base64;
  // }

  return (
    <>
      <Container>
        <Hero title="cube" subtitle="create output" imageOn />
        {/* <Posts posts={posts} /> */}
      </Container>
    </>
  );
}
