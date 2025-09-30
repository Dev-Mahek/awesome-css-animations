# GSAP Cursor Hover Demo

A simple HTML/CSS/JS demo that uses GSAP to animate a custom cursor. The cursor follows the mouse across the page and enlarges with a call-to-action when hovering over an image.

## 👩‍💻 Live Behavior
- **Custom cursor** follows the mouse via GSAP animations.
- **Hover emphasis**: On entering the image area, the cursor scales up and shows "View More"; on leaving, it resets.

## 🚀 Tech Stack
- **HTML**: Structure (`index.html`)
- **CSS**: Layout and styles (`style.css`)
- **JavaScript**: Interactivity and animations (`script.js`)
- **GSAP**: Animation library loaded from CDN

## 👉 Project Structure
```
.
├── index.html   # Markup and external script/style references
├── style.css    # Layout, custom cursor, and image/overlay styling
└── script.js    # GSAP-driven cursor tracking and hover interactions
```

## 🛠 Getting Started
1. Clone or download this repository.
2. Open `index.html` directly in your browser.
   - No build steps are required; assets are loaded via CDN and local files.

## 👨‍🏫 How It Works
- `#cursor` is a fixed-position div that we animate to the mouse coordinates using `gsap.to(...)`.
- Mouse move events are attached to `#main` to update the `x` and `y` of `#cursor`.
- `#image` (with a transparent `#overlay`) is used as the hover target to scale and recolor the cursor and show a small CTA text.

## 📂 Key Files
- `index.html`:
  - Loads GSAP from a CDN and includes `script.js`.
  - Contains `#cursor`, `#main`, and an image wrapped inside `#image` with an `#overlay` for hover.
- `style.css`:
  - Resets base styles, sets dark theme, centers content.
  - Styles the custom cursor, image container, and overlay.
- `script.js`:
  - Subscribes to mouse events and performs GSAP animations for position and hover effects.

## ✨ Customization
- **Cursor size**: Adjust base size in `#cursor` styles (height/width) and hover `scale` in `script.js`.
- **Speed/Easing**: Add GSAP `duration` or `ease` to `gsap.to(...)` for different motion.
- **CTA text**: Change the `innerHTML` in the `mouseenter` handler.
- **Image**: Replace the `src` in `index.html` with your own image URL or local asset.

## 🔧 Accessibility Notes
- The cursor is decorative; ensure important interactions remain accessible via keyboard and standard focus styles if extended.
- Provide meaningful `alt` text for non-decorative images.

## 👦 Credits
- Image via Unsplash (linked in `index.html`).
- Animations powered by [GSAP](https://greensock.com/gsap/).

## 📃 License
This project is open-sourced under the MIT License.
