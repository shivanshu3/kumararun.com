const fs = require("node:fs");
const path = require("node:path");

const baseDir = path.join(__dirname, "..", "assets", "images", "finished_cases_sliders");

const sanitizeName = (name) =>
  name
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

module.exports = () => {
  const directories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((a, b) => {
      const numA = parseInt(a.split(" - ")[0], 10);
      const numB = parseInt(b.split(" - ")[0], 10);
      return numA - numB;
    });

  return directories.map((dirName) => {
    const [number, ...rest] = dirName.split(" - ");
    const name = rest.join(" - ").trim();
    const sanitized = sanitizeName(name);
    return {
      number: number.trim(),
      name,
      link: `/finished-cases/${number.trim()}_${sanitized}`,
      image: `/assets/images/finished_cases_sliders/${dirName}/slider_image_2.png`,
    };
  });
};
