import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ymxd5ehd", // 👈 from sanity.config.js
  dataset: "production", // or whatever dataset you use
  apiVersion: "2025-01-01", // any recent date
  useCdn: true, // `true` for faster, cached reads
});
