# GSAP Marquee Scroll Animation

A simple web demo that uses GSAP to animate a horizontally scrolling marquee that responds to mouse wheel events.

## Overview
- **Scroll down**: the marquee translates left and the arrow images rotate to 180°.
- **Scroll up**: the marquee resets to the starting position and arrows rotate back to 0°.

## Tech Stack
- HTML
- CSS
- JavaScript
- [GSAP 3](https://greensock.com/gsap/)

## Live Demo (optional)
You can deploy to GitHub Pages or Netlify. For GitHub Pages, push to a repository and enable Pages on the `main` branch.

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser.

No local build step is required because GSAP is loaded from a CDN.

## Project Structure
```
GSAP5.0/
├─ index.html      # Markup for three sections; marquee rows live in #page2/#move
├─ style.css       # Base styles and marquee layout (documented)
├─ script.js       # Wheel event listener + GSAP animations (documented)
└─ README.md       # This file
```

## How It Works
- The marquee rows are repeated to create a continuous scrolling effect.
- `script.js` listens to the `wheel` event and animates `#marque` containers using `gsap.to()`.
- It also rotates the nested arrow image between 0° and 180° based on scroll direction.

## Notes
- Multiple elements use the same `id` (`#marque`) for simplicity. In production, prefer using a class (e.g., `.marque`) and update the selectors accordingly.
- The `ease: "none"` setting ensures a constant velocity marquee. Adjust `duration` and `ease` to taste.

## Customization
- Change the marquee text in `index.html`.
- Adjust the band color, spacing, and fonts in `style.css` (`#move`, `#marque h1`).
- Tweak animation speed/behavior in `script.js` (duration, translate distance, and rotation).

## License
MIT
