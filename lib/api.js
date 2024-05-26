import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN, // process.envはNode.jsで環境変数を扱うAPI
  apiKey: process.env.API_KEY,
});
