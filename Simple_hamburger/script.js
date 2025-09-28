/**
  * Mobile Navigation Overlay Animation
  * - Opens a full-screen overlay menu on hamburger click
  * - Animates menu items and close icon
  * - Closes overlay on close icon click by reversing the timeline
  *
  * Dependencies: GSAP 3 (https://greensock.com/gsap/)
  * Expected DOM:
  *   #nav i    -> the hamburger/menu icon
  *   #full     -> the full-screen overlay container (positioned off-screen initially)
  *   #full h4  -> the menu items within the overlay
  *   #full i   -> the close icon within the overlay
  */
 // Select the menu icon inside the top navigation bar
 let menu = document.querySelector("#nav i");
 // Select the close icon inside the full-screen overlay menu
 let cross = document.querySelector("#full i");

 // Create a GSAP timeline to orchestrate the open/close animations
 let tl = gsap.timeline();

 // Slide the overlay into view from the right
 tl.to("#full", {
   right: 0,
   duration: 0.5,
 });

 // Animate the menu items in from the right with a staggered delay
 tl.from("#full h4", {
   x: 150,
   duration: 0.5,
   stagger: 0.3,
   opacity: 0,
 });
 // Animate the close icon fade in
 tl.from("#full i", {
   opacity: 0,
 });

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
