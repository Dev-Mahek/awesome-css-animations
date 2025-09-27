# GSAP Text Animation

A simple, lightweight demo that uses GSAP to split an `<h1>` heading into individual characters and animate them with a staggered entrance effect.

## Preview

Open `index.html` in a browser. You should see the heading characters slide in from below with a mirrored stagger.

## Project Structure

- `index.html` – Base markup, includes GSAP via CDN and loads the project script.
- `style.css` – Styles for layout and typography. Comments explain key properties.
- `script.js` – Splits heading text into characters and animates them with GSAP. Fully commented for clarity.

## Getting Started

1. Download or clone this repository.
2. Open `index.html` in your browser.

No build tools or local server are required. Internet access is needed to load the GSAP CDN.

## How It Works

- In `script.js`, we:
  - Select the `<h1>` element and read its text.
  - Split the text into characters and wrap each in a `<span>`.
  - Assign the first half of characters the class `firsthalf` and the remainder `remaining`.
  - Use `gsap.from()` to animate both groups from `y: 70` to their natural position.
  - Apply positive stagger to the first half and negative stagger to the remaining half to create a mirrored wave effect.

- In `style.css`:
  - We reset margins/padding and set `box-sizing: border-box`.
  - Center the content vertically and horizontally on a black background.
  - Set `overflow: hidden` on `h1` so the characters can slide up from below without showing outside the container.

## Customization

- Change the text by editing the `<h1>` inside `index.html`.
- Tweak animation values in `script.js`:
  - `y`: start offset (e.g., 50–120)
  - `duration`: speed of each character (e.g., 0.4–1)
  - `delay`: initial delay before animations start
  - `stagger`: spacing between character starts; negative values reverse the order
- Adjust the look in `style.css` by modifying font, size, and colors.

## Dependencies

- [GSAP 3](https://greensock.com/gsap/) via CDN (pinned at `3.13.0`).

## License

This project is open source under the MIT License. Feel free to use and modify it.
