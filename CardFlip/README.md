# 🎴 3D Flip Card Component

A simple yet elegant **3D flip card** built with **React** and **TailwindCSS**.
Hover over the card to see it flip smoothly in 3D, revealing content on the back side.
Perfect for portfolio cards, product displays, or any interactive UI element.

---

## 🚀 Demo

[https://github.com/yourusername/3d-flip-card/assets/demo-preview.gif](https://github.com/yourusername/3d-flip-card/assets/demo-preview.gif)
*(Add your preview GIF or screenshot here)*

---

## 🧩 Features

* 🎬 Smooth 3D flip animation using CSS transforms
* 💨 Powered entirely by TailwindCSS utilities
* 🧱 Responsive and centered layout
* ⚛️ Simple React component — easy to integrate anywhere
* 🪄 Customizable colors, sizes, and flip directions

---

## 🛠️ Technologies Used

* **React** – For building the interactive component
* **TailwindCSS** – For styling and 3D transformation utilities

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/3d-flip-card.git
cd 3d-flip-card
```

### 2. Install dependencies

Make sure you have Node.js and npm/yarn installed.

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm start
# or
yarn start
```

---

## 🧱 Code Overview

Below is the complete component code:

```jsx
import React from "react";

// Simple 3D flip card built with TailwindCSS utilities
const Card = () => {
  return (
    // Fullscreen container centering the card
    <div className="min-h-screen p-6 flex justify-center items-center">
      {/* Group provides hover state; perspective gives 3D depth */}
      <div className="group [perspective:1000px]">
        {/* Card flips 180° on hover; preserve-3d keeps faces in 3D space */}
        <div className="relative w-64 h-64 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front face; hidden when rotated due to backface-visibility */}
          <div className="absolute inset-0 bg-yellow-300 rounded-lg shadow-lg [backface-visibility:hidden] flex items-center justify-center font-bold text-xl">
            Front Side
          </div>
          {/* Back face; rotated 180° so it becomes visible when parent flips */}
          <div className="absolute inset-0 bg-orange-300 rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center font-bold text-xl">
            Back Side
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
```

---

## 🧭 Usage

Import and use the component inside your React app:

```jsx
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
```

---

## 🎨 Customization

| Option             | Description              | Example                             |
| ------------------ | ------------------------ | ----------------------------------- |
| **Colors**         | Change background colors | `bg-blue-400`, `bg-pink-300`        |
| **Size**           | Adjust card width/height | `w-80 h-80`                         |
| **Flip Direction** | Rotate along X or Y axis | `rotateX(180deg)` for vertical flip |
| **Speed**          | Control animation speed  | Modify `duration-500`               |

---

## 🧠 Use Cases

* Portfolio or profile cards
* Product previews or info cards
* Flashcards and quiz components
* Any interactive, hover-based UI element

---

## 📜 License

This project is licensed under the **MIT Li
