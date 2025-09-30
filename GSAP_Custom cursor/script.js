// Grab references to key DOM elements
// `#main` is the full-page container we listen on for mouse movement
let mai = document.querySelector("#main");
// `#cursor` is the custom element that follows the mouse
let cur = document.querySelector("#cursor");
// `#image` is the wrapper containing the image and overlay, used for hover effects
let imag = document.querySelector("#image");

// Move the custom cursor to the current mouse position across the main area
// Using GSAP for smoother, GPU-accelerated animations
mai.addEventListener("mousemove", function (val) {
  gsap.to(cur, {
    x: val.x,
    y: val.y,
    // ease: "back.out",
  });
});

// When the cursor enters the image area, show text and emphasize the cursor
imag.addEventListener("mouseenter", function () {
  cur.innerHTML = "View More";
  gsap.to(cur, {
    scale: 3, // enlarge cursor for emphasis
    backgroundColor: "#ffffff8c", // semi-transparent white
  });
});

// When leaving the image area, reset the cursor to default state
imag.addEventListener("mouseleave", function () {
  cur.innerHTML = ""; // clear CTA text
  gsap.to(cur, {
    scale: 1, // back to normal size
    backgroundColor: "#fff", // solid white
  });
});
