import { evaluate } from "@mdx-js/mdx";
import * as runtime from "astro/jsx-runtime";
import RedText from "../../components/red-text.astro";
import { config as mdxConfig } from '../../config/mdx.config';

function useMDXComponents() {
  return {
    RedText,
  };
}

export function processMdx(content: string) {
  // @ts-expect-error
  return evaluate(content, { ...runtime, ...mdxConfig, useMDXComponents });
}
