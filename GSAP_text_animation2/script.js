// Select the single heading we want to animate
let h1 = document.querySelector("h1");
// Read the original text content from the heading
let heading = h1.textContent;

// Break the text into an array of individual characters
let splittedtext = heading.split("");
// We'll rebuild the inner HTML with spans around each character
let clutter = "";
// Compute the mid point so we can tag the first half vs the remaining half
let halfvalue = splittedtext.length / 2;

// Wrap each character in a span, assigning different classes based on index
// This lets us animate the two halves in opposite stagger directions
splittedtext.forEach(function (elem, idx) {
  if (idx < halfvalue) {
    clutter += `<span class="firsthalf">${elem}</span>`;
  } else {
    clutter += `<span class="remaining">${elem}</span>`;
  }
});
h1.innerHTML = clutter;

// Animate the first half of the characters rising into place
// - y: start 70px below and move to natural position
// - stagger: each char follows the previous by 0.15s for a wave effect
// - opacity: fade in from 0
gsap.from("h1 .firsthalf", {
  y: 70,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

// Animate the remaining half similarly but with a negative stagger
// Negative stagger makes the last element start first, creating a mirrored effect
gsap.from("h1 .remaining", {
  y: 70,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
