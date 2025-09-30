# Mobile Navigation Overlay (GSAP)

A simple, elegant full-screen overlay menu animated with GSAP 3. Click the hamburger icon to open the overlay; click the close icon to dismiss it. Menu items animate in with a stagger for a smooth experience.

## 👩‍💻 Demo
- Open `index.html` directly in your browser.

## ✨ Features
- Overlay panel slides in from the right using a **GSAP timeline**.
- **Staggered** menu item entrance.
- Click handlers to **open** and **close** the menu by playing/reversing the timeline.
- Minimal dependencies via **CDN**.

## 🚀 Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP 3 (CDN)
- Remix Icon (CDN)

## 📂 Project Structure
```
.
├─ index.html    # Markup: nav bar, overlay menu, CDN links
├─ style.css     # Styles: layout, overlay panel, typography
└─ script.js     # Logic: GSAP timeline + click handlers
```

## 👨‍🏫 How it works
- `#full` overlay is positioned off-screen by default: `right: -40%` (see `style.css`).
- A GSAP timeline (`script.js`) controls the sequence:
  - Slide overlay into view.
  - Animate each `#full h4` with stagger and fade.
  - Fade in the close icon.
- The timeline is initially paused. Clicking the hamburger icon plays it; the close icon reverses it.

## 🛠 Getting Started
1. Clone or download this repository.
2. Open `index.html` in a browser (no build step required).
3. Ensure internet access so CDN resources (GSAP, Remix Icon) load.

## ✨ Customization
- Change overlay width by editing `#full { width: 40%; right: -40%; }` in `style.css`.
- Adjust animation timing in `script.js` (`duration`, `stagger`).
- Replace menu items by editing the `<h4>` elements inside `#full` in `index.html`.
- Update background image by editing `#main { background-image: ... }` in `style.css`.

## 👦 Credits
- Animations by [GSAP](https://greensock.com/gsap/)
- Icons by [Remix Icon](https://remixicon.com/)

## 📝 Notes
- Files are commented for clarity:
  - `index.html` documents structure and CDN links.
  - `style.css` explains layout and overlay behavior.
  - `script.js` describes the GSAP timeline and event listeners.
