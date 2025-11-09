module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk",
  };
};
