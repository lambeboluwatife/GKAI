const themes = document.querySelectorAll(".theme");
const body = document.querySelector(".body");
const headings = document.querySelectorAll(".heading");
const darkHrs = document.querySelectorAll(".darkHr");
const whiteHrs = document.querySelectorAll(".whiteHr");
const level = document.querySelector(".level");
const bgDark = document.querySelector(".bg1");
const bgDanger = document.querySelector(".bg2");
const bgWhite = document.querySelector(".bg3");

themes[0].addEventListener("click", () => {
  level.classList.remove("btn-dark");
  level.classList.add("btn-light", "text-dark");
  bgDark.style.display = "none";
  bgWhite.style.display = "inline-block";
  body.classList.add("bg-dark");
  headings.forEach(heading => {
    heading.classList.add("text-white");
  });

  darkHrs.forEach(darkHr => {
    darkHr.style.display = "none";
  });

  whiteHrs.forEach(whiteHr => {
    whiteHr.style.display = "block";
  });
});

themes[2].addEventListener("click", () => {
  location.reload();
});

themes[1].addEventListener("click", () => {
  bgDanger.style.display = "none";
  bgWhite.style.display = "inline-block";
  body.classList.add("bg-danger");
  headings.forEach(heading => {
    heading.classList.add("text-white");
  });

  darkHrs.forEach(darkHr => {
    darkHr.style.display = "none";
  });

  whiteHrs.forEach(whiteHr => {
    whiteHr.style.display = "block";
  });
});

const text = "1234";
console.log(text);

[...text].forEach((c, index) => {
  console.log(index);
});

// for (const c of text) {
//   console.log(c);
// }
