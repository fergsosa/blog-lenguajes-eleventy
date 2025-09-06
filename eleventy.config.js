import { EleventyHtmlBasePlugin, IdAttributePlugin } from "@11ty/eleventy";
import metadata from "./code/_data/metadata.js";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("code");
  eleventyConfig.setOutputDirectory("docs");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(IdAttributePlugin);

  eleventyConfig.addPassthroughCopy({
    "code/public/": "/",
  });
}

export const config = {
  pathPrefix: metadata.pathPrefix,
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
