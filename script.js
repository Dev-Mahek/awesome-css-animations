let h1 = document.querySelector("h1");
let heading = h1.textContent;

let splittedtext = heading.split("");
let clutter = "";

splittedtext.forEach(function (elem) {
  clutter += `<span>${elem}</span>`;
});
h1.innerHTML = clutter;

gsap.from("h1 span", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15,
});
