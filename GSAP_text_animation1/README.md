# GSAP Text Animation

A smooth and elegant text animation effect using GSAP (GreenSock Animation Platform) that animates individual characters of text with a staggered entrance effect.

## 🎯 Features

- **Character-by-character animation**: Each letter animates individually for a dynamic effect
- **Smooth transitions**: Uses GSAP's powerful animation engine for buttery smooth animations
- **Staggered timing**: Letters appear in sequence with customizable delay
- **Responsive design**: Works across different screen sizes
- **Lightweight**: Minimal code with maximum visual impact

## 🚀 Demo

The animation creates a stunning entrance effect where each character of the text "Dev_Mahek" slides up from below with a fade-in effect, creating a typewriter-like appearance.

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and layout
- **JavaScript (ES6)**: DOM manipulation and animation logic
- **GSAP 3.13.0**: Animation library via CDN

## 📁 Project Structure

```
GSAP_text_animation1/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # Animation logic
└── README.md           # Project documentation
```

## 🎨 How It Works

1. **Text Splitting**: The JavaScript code takes the text content from the `<h1>` element and splits it into individual characters
2. **Span Wrapping**: Each character is wrapped in a `<span>` element for individual animation control
3. **GSAP Animation**: Uses GSAP's `from()` method to animate each span from an initial state (below and transparent) to the final state (in position and visible)
4. **Staggered Effect**: The `stagger` property creates a sequential animation effect

## 🔧 Installation & Setup

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Enjoy** the animation!

No build process or dependencies required - it's ready to run!

## ⚙️ Customization

### Animation Parameters

You can customize the animation by modifying the values in `script.js`:

```javascript
gsap.from("h1 span", {
  y: 70,           // Vertical offset (pixels)
  opacity: 0,      // Starting opacity (0-1)
  duration: 0.5,   // Animation duration per character (seconds)
  delay: 0.5,      // Initial delay before animation starts (seconds)
  stagger: 0.15,   // Delay between each character animation (seconds)
});
```

### Text Content

Change the text by modifying the content in `index.html`:

```html
<h1>Your Custom Text</h1>
```

### Styling

Customize the appearance by editing `style.css`:

- Font size: Modify `font-size` in the `h1` selector
- Colors: Change `color` and `background-color` properties
- Font family: Update the `font-family` property

## 🎯 Animation Properties Explained

| Property | Description | Default Value |
|----------|-------------|---------------|
| `y` | Vertical starting position offset | `70px` |
| `opacity` | Starting transparency | `0` (invisible) |
| `duration` | Time for each character to animate | `0.5s` |
| `delay` | Wait time before animation starts | `0.5s` |
| `stagger` | Time between each character's animation | `0.15s` |

## 🌟 Browser Compatibility

This project works in all modern browsers that support:
- ES6 JavaScript features
- CSS Flexbox
- GSAP 3.x

## 📝 Code Explanation

### JavaScript Logic

1. **DOM Selection**: Gets the `<h1>` element and its text content
2. **Text Processing**: Splits the text into individual characters
3. **HTML Generation**: Creates span elements for each character
4. **Animation**: Applies GSAP animation with staggered timing

### CSS Highlights

- **Flexbox centering**: Centers the text both horizontally and vertically
- **Inline-block spans**: Allows individual character positioning
- **Overflow hidden**: Ensures clean animation boundaries

## 🚀 Performance

- **Lightweight**: Minimal JavaScript code
- **GPU Accelerated**: GSAP uses hardware acceleration for smooth animations
- **Optimized**: No unnecessary DOM queries or loops during animation

## 🔮 Future Enhancements

- Add multiple animation presets
- Include hover effects
- Add animation controls (play/pause/reverse)
- Create different entrance/exit animations
- Add sound effects synchronization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📞 Contact

Created by **Dev_Mahek** - feel free to reach out for any questions or suggestions!

---

⭐ If you found this project helpful, please give it a star!

