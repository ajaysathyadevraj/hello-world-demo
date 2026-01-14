# Hello World - Graphics Design Course Landing Page

A modern, responsive landing page for a graphics design course built with semantic HTML5, CSS3, and vanilla JavaScript.

## Features

- **Split-screen Layout**: Asymmetric grid layout (60/40 split) with content on the left and visual gallery on the right
- **Responsive Design**: Fully responsive with mobile-first approach, includes hamburger menu for mobile devices
- **Fluid Typography**: Uses CSS `clamp()` and `vw` units for optimal scaling across all screen sizes and zoom levels
- **Counter Animation**: Animated statistics that count up when scrolled into view using Intersection Observer API
- **Interactive Elements**: Hover effects on navigation links and buttons
- **Semantic HTML**: Proper use of semantic tags (`header`, `main`, `section`, `aside`, `nav`)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS features including Grid, Flexbox, CSS Variables, and `clamp()`
- **JavaScript (ES6+)**: Vanilla JS for hamburger menu toggle and counter animations
- **Google Fonts**: Nunito font family
- **lite-server**: Development server for live reloading

## Project Structure

```
hello-world-demo/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet with fluid typography
├── js/
│   └── script.js       # JavaScript for interactions
├── images/             # Image assets
└── package.json        # NPM dependencies
```

## Key CSS Features

- **CSS Variables**: Custom properties for colors and theming
- **Fluid Typography**: `font-size: clamp(10px, 0.8vw, 16px)` for responsive text scaling
- **Responsive Spacing**: `clamp()` functions for padding and gaps that scale with viewport
- **Responsive Layout**: Breakpoints at 990px and 1440px for tablet and desktop

## JavaScript Features

- **Hamburger Menu**: Toggle navigation on mobile devices
- **Counter Animation**: Smooth counting animation using `requestAnimationFrame`
- **Intersection Observer**: Triggers counter animation when stats section is visible

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open browser at `http://localhost:3000`

