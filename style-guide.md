# Frontend Style Guide

The Tip Calculator should be responsive across all devices.

- Mobile: 320px
- Tablet: 768px;
- Desktop: 1440px

## Colors

```css
--black: hsl(0, 0%, 0%);
--white: hsl(0, 100%, 100%);
--orange: hsl(13, 70%, 60%);
--green-200: hsl(173, 61%, 77%);
--green-400: hsl(172, 67%, 45%);
--green-750: hsl(183, 79%, 24%);
--green-800: hsl(183, 85%, 21%);
--green-900: hsl(183, 100%, 15%);
--grey-50: hsl(189, 47%, 97%);
--grey-200: hsl(185, 41%, 84%);
--grey-300: hsl(184, 19%, 68%);
--grey-400: hsl(184, 14%, 56%);
--grey-500: hsl(186, 14%, 43%);
--grey-550: hsl(180, 18%, 40%);
--grey-600: hsl(180, 25%, 32%);
```

## Spacing

```css
--spacing-0: calc(0 / 16 * 1rem);
--spacing-100: calc(8 / 16 * 1rem);
--spacing-200: calc(16 / 16 * 1rem);
--spacing-300: calc(24 / 16 * 1rem);
--spacing-400: calc(32 / 16 * 1rem):
--spacing-600: calc(48 / 16 * 1rem);
--spacing-1000: calc(80 / 16 * 1rem);
--spacing-1200: calc(96 / 16 * 1rem);
--spacing-1500: calc(120 / 16 * 1rem);
--spacing-1600: calc(128 / 16 * 1rem);
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-0: 0; 
--radius-7: 4px;
--radius-8: 6px;
--radius-9: 8px;
--radius-10:10px;
--radius-11: 12px;
--radius-12: 15px;
--radius-13: 20px;
--radius-14: 24px;
--radius-15: 26px;
--radius-16: 28px;
--radius-17: 30px;
--radius-18: 34px;
--radius-19: 36px;
--radius-20: 38px;
--radius-21: 40px;
--radius-full: 999px; 
```

## Favicon Links

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/assets/favicons/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/assets/favicons/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/assets/favicons/favicon-16x16.png"
/>
<link rel="manifest" href="/assets/favicons/site.webmanifest" />
```

## Duration
```css
--motion-duration: 4s;
--motion-preferred-duration: 0.00001s;
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

```css
--ff-space-mono-monospace: var(--ff-space-mono), monospace;
--ff-space-mono: 'Space Mono';
--font-size-text-preset-1: calc(48 / 16 * 1rem);
--font-size-text-preset-2: calc(32 / 16 * 1rem);
--font-size-text-preset-3: calc(24 / 16 * 1rem);
--font-size-text-preset-4: calc(20 / 16 * 1rem);
--font-size-text-preset-5: calc(16 / 16 * 1rem):
--font-size-text-preset-6: calc(13 / 16 * 1rem):
--letter-spacing-text-preset-1: calc(-1 / 16 * 1rem);
--letter-spacing-text-preset-2: calc(-0.67 / 16 * 1rem);
--line-height-text-preset-1: 1.48;
--line-height-text-preset-2: 1.47; 
--line-height-text-preset-3-5: 1.5; 
--line-height-text-preset-6: 1.46;
```

## Screen Readers

```css
	
	/* screen readers */
  --sr-only-width: 1px; 
  --sr-only-height: 1px; 
  --sr-only-padding: 0px; 
  --sr-only-margin: -1px; 
  --sr-only-border-width: 0; 
  --sr-only-left: -1000px; 
  --sr-only-top: auto;

.sr-only {
	position: absolute; 
	white-space: nowrap; 
	overflow: hidden; 
	width: var(--sr-only-width); 
	height: var(--sr-only-height); 
	padding: var(--sr-only-padding);
	margin: var(--sr-only-margin); 
	border-width: var(--sr-only-border-width); 
	top: var(--sr-only-top); 
	left: var(--sr-only-left); 
}
```

## Resets

```css
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  overflow: hidden;
  /* The style below prevents font-style inflation */
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Avoid text overflow */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* Balance text wrappings on the heading */
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/* Improve line wrapping */
p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Improve media defaults */
img,
picture,
video,
canvas,
svg {
  max-width: 100%;
  height: auto;
  display: var(--block);
}

body {
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

/* All buttons should have this style */
button {
  appearance: none;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}

/* Inherits fonts for input and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove the text-decoration style for all anchor elements */
a {
  text-decoration: none;
  color: inherit;
}

/* Remove the mark of the list items */
li {
  list-style-type: none;
  color: inherit;
}

/* We make sure that the text areas without rows are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* All anchor and button elements have an outline of none when focused */
a:focus,
button:focus {
  outline: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Anything that has been anchored to should have an extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: var(--motion-preferred-duration) !important;
    animation-iteration-count: 1 !important;
    transition-duration: var(--motion-preferred-duration) !important;
    scroll-behavior: auto !important;
  }
}
```