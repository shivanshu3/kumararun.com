const sanitizeName = (name) =>
  name
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const cases = [{
    number: "01",
    name: "Class III",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "02",
    name: "Anterior Crossbite",
    highlight_slider_image: "slider_image_1.png"
  }, {
    number: "03",
    name: "Class II Div 1",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "04",
    name: "Class II Div 1",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "05",
    name: "Class II Div 2",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "06",
    name: "Ectopic Eruption",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "07",
    name: "Class II Div 2",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "08",
    name: "Class II Div 1",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "09",
    name: "Class II Div 2",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "10",
    name: "Class I Type 2",
    highlight_slider_image: "slider_image_1.png"
  }, {
    number: "11",
    name: "Class II Div 1",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "12",
    name: "Class II Div 1",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "13",
    name: "Anterior Deepbite",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "14",
    name: "Anterior Deepbite",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "15",
    name: "Class I Type 1",
    highlight_slider_image: "slider_image_1.png"
  }, {
    number: "16",
    name: "Class II Div 1 (Bimaxillary)",
    highlight_slider_image: "slider_image_2.png"
  }, {
    number: "17",
    name: "Class II Div 1 Subdivision",
    highlight_slider_image: "slider_image_1.png"
  }];

module.exports = () =>
  cases.map((finishedCase) => {
    const sanitized = sanitizeName(finishedCase.name);
    const slug = `${finishedCase.number}_${sanitized}`;
    return {
      number: finishedCase.number,
      name: finishedCase.name,
      link: `/finished-cases/${slug}`,
      image: `/assets/images/finished_cases_sliders/${slug}/${finishedCase.highlight_slider_image}`,
    };
  });
