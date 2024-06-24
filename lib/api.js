import { createClient } from "microcms-js-sdk";

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

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

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return post.contents;
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllCategories ~~");
    console.log(err);
  }
}

export async function getAllPostsByCategories(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        orders: "-publishDate", // エラー吐いてたの、""がなかったからだった〜！
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPostsByCategories ~~");
    console.log(err);
  }
}
