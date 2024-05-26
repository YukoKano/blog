import { createClient } from "microcms-js-sdk";

// if (!process.env.SERVICE_DOMAIN) {
//   throw new Error("MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.API_KEY) {
//   throw new Error("MICROCMS_API_KEY is required");
// }

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN, // process.envはNode.jsで環境変数を扱うAPI
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    //指定したslugの記事データを取得して返す
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (error) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}
