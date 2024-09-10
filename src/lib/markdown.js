// lib/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getMarkdownContent(fileSlug) {
  const filePath = path.join(process.cwd(), `content/${fileSlug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}
