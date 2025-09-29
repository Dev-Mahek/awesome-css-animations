/**
 * GSAP5.0 - Interactive Marquee Animation
 * 
 * This script creates an interactive marquee that responds to mouse wheel events.
 * When scrolling down, the marquee moves left with a 180-degree rotation of its image.
 * When scrolling up, the marquee resets to its original position and rotation.
 * 
 * Dependencies:
 * - GSAP (GreenSock Animation Platform) library
 * 
 * @version 1.0.0
 * @license MIT
 */

/**
 * Event listener for mouse wheel events on the window
 * @param {WheelEvent} dets - The wheel event object containing deltaY property
 */
window.addEventListener("wheel", function (dets) {
  // Check if scrolling down (deltaY > 0)
  if (dets.deltaY > 0) {
    // Animate the marquee to move left (-200% of its width)
    gsap.to("#marque", {
      transform: "translateX(-200%)",  // Move element 200% of its width to the left
      duration: 3,                    // Animation duration in seconds
      repeat: -1,                     // Infinite loop
      ease: "none",                   // Linear animation without easing
    });

    gsap.to("#marque img", {
      rotate: 180,
    });
  } else {
    gsap.to("#marque", {
      transform: "translateX(0%)",    // Return to original position
      duration: 3,                    // Animation duration in seconds
      repeat: -1,                     // Infinite loop
      ease: "none",                   // Linear animation without easing
    });
    
    // Reset image rotation to 0 degrees
    gsap.to("#marque img", {
      rotate: 0,
    });
  }
});
