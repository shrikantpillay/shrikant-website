export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/images": "images"});
  eleventyConfig.addCollection("posts", collectionApi => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a,b) => b.date - a.date);
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
