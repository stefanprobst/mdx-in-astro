import type { ProcessorOptions } from "@mdx-js/mdx";
import withSyntaxHighlighter from "@shikijs/rehype";
import withFrontmatter from "remark-frontmatter";
import withGfm from "remark-gfm";
import withMdxFrontmatter from "remark-mdx-frontmatter";
import withTypographicQuotes from "remark-smartypants";
import withHeadingIds from "rehype-slug";

import { config as shikiConfig } from "./syntax-highlighter.config";

export const config: ProcessorOptions = {
  elementAttributeNameCase: "html",
  remarkPlugins: [
    withFrontmatter,
    withMdxFrontmatter,
    withGfm,
    withTypographicQuotes,
  ],
  rehypePlugins: [withHeadingIds, [withSyntaxHighlighter, shikiConfig]],
};
