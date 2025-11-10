const sanitizeName = (name) =>
  name
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const cases = [
  { number: "01", name: "Class III" },
  { number: "02", name: "Anterior Crossbite" },
  { number: "03", name: "Class II Div 1" },
  { number: "04", name: "Class II Div 1" },
  { number: "05", name: "Class II Div 2" },
  { number: "06", name: "Ectopic Eruption" },
  { number: "07", name: "Class II Div 2" },
  { number: "08", name: "Class II Div 1" },
  { number: "09", name: "Class II Div 2" },
  { number: "10", name: "Class I Type 2" },
  { number: "11", name: "Class II Div 1" },
  { number: "12", name: "Class II Div 1" },
  { number: "13", name: "Anterior Deepbite" },
  { number: "14", name: "Anterior Deepbite" },
  { number: "15", name: "Class I Type 1" },
  { number: "16", name: "Class II Div 1 (Bimaxillary)" },
  { number: "17", name: "Class II Div 1 Subdivision" },
];

module.exports = () =>
  cases.map((finishedCase) => {
    const sanitized = sanitizeName(finishedCase.name);
    const slug = `${finishedCase.number}_${sanitized}`;
    return {
      number: finishedCase.number,
      name: finishedCase.name,
      link: `/finished-cases/${slug}`,
      image: `/assets/images/finished_cases_sliders/${slug}/slider_image_2.png`,
    };
  });
