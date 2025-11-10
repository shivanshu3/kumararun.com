const fs = require("node:fs");
const path = require("node:path");

const sanitizeName = (name) =>
  name
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const cases = [
  { number: "01", name: "Class III", highlight_slider_image: "slider_image_2.png" },
  { number: "02", name: "Anterior Crossbite", highlight_slider_image: "slider_image_1.png" },
  { number: "03", name: "Class II Div 1", highlight_slider_image: "slider_image_2.png" },
  { number: "04", name: "Class II Div 1", highlight_slider_image: "slider_image_2.png" },
  { number: "05", name: "Class II Div 2", highlight_slider_image: "slider_image_2.png" },
  { number: "06", name: "Ectopic Eruption", highlight_slider_image: "slider_image_2.png" },
  { number: "07", name: "Class II Div 2", highlight_slider_image: "slider_image_2.png" },
  { number: "08", name: "Class II Div 1", highlight_slider_image: "slider_image_2.png" },
  { number: "09", name: "Class II Div 2", highlight_slider_image: "slider_image_2.png" },
  { number: "10", name: "Class I Type 2", highlight_slider_image: "slider_image_1.png" },
  { number: "11", name: "Class II Div 1", highlight_slider_image: "slider_image_2.png" },
  { number: "12", name: "Class II Div 1", highlight_slider_image: "slider_image_2.png" },
  { number: "13", name: "Anterior Deepbite", highlight_slider_image: "slider_image_2.png" },
  { number: "14", name: "Anterior Deepbite", highlight_slider_image: "slider_image_2.png" },
  { number: "15", name: "Class I Type 1", highlight_slider_image: "slider_image_1.png" },
  { number: "16", name: "Class II Div 1 (Bimaxillary)", highlight_slider_image: "slider_image_2.png" },
  { number: "17", name: "Class II Div 1 Subdivision", highlight_slider_image: "slider_image_1.png" },
];

const baseDir = path.join(__dirname, "..", "assets", "images", "finished_cases_sliders");

const getImages = (slug) => {
  const dir = path.join(baseDir, slug);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => `/assets/images/finished_cases_sliders/${slug}/${entry.name}`);
};

module.exports = () =>
  cases.map((finishedCase) => {
    const sanitized = sanitizeName(finishedCase.name);
    const slug = `${finishedCase.number}_${sanitized}`;
    return {
      number: finishedCase.number,
      name: finishedCase.name,
      link: `/finished-cases/${slug}/`,
      image: `/assets/images/finished_cases_sliders/${slug}/${finishedCase.highlight_slider_image}`,
      images: getImages(slug),
    };
  });
