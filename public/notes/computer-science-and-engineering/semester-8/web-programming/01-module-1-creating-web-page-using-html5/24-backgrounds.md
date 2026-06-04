---
title: "Backgrounds"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc17"
status: "completed"
scrapedAt: "2026-05-20T17:28:05.728Z"
---
# Web Programming: Module 1 - Creating Web Pages with HTML5

## Topic: Backgrounds

### Introduction

The background of a web page is a fundamental aspect of its visual design. It sets the tone and can significantly impact user experience. In HTML5, along with CSS, we have powerful tools to control the background of various HTML elements, from the entire page to specific sections. This topic will explore how to apply and manipulate backgrounds using HTML and CSS.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the purpose and importance of backgrounds in web design.
*   Apply background colors to HTML elements.
*   Apply background images to HTML elements.
*   Control the repetition and positioning of background images.
*   Understand and utilize the shorthand `background` property.
*   Create visually appealing and well-designed backgrounds for web pages.

---

### Key Concepts and Definitions

*   **Background Color:** The solid color that fills the background of an element.
*   **Background Image:** An image file that is displayed as the background of an element.
*   **CSS (Cascading Style Sheets):** A stylesheet language used for describing the presentation of a document written in HTML. CSS is the primary tool for controlling backgrounds.
*   **`background-color` Property:** CSS property to set the background color of an element.
*   **`background-image` Property:** CSS property to set one or more background images for an element.
*   **`background-repeat` Property:** CSS property to control how background images repeat.
*   **`background-position` Property:** CSS property to set the initial starting position for each background image.
*   **`background-size` Property:** CSS property to resize background images.
*   **`background-attachment` Property:** CSS property to specify whether the background image should scroll with the rest of the page or remain fixed.
*   **Shorthand `background` Property:** A single CSS property that allows you to set multiple background properties at once.
*   **HTML Element:** A fundamental building block of an HTML document, such as `<p>`, `<div>`, `<body>`, etc.

---

### Applying Background Colors

The most basic way to style a background is by applying a solid color. This is achieved using the `background-color` CSS property.

#### How to Apply Background Colors

You can apply background colors to any HTML element using CSS.

**Methods:**

1.  **Inline Styles:** Directly within the HTML tag using the `style` attribute. (Generally discouraged for larger projects).
2.  **Internal Stylesheet:** Within the `<head>` section of your HTML document using `<style>` tags.
3.  **External Stylesheet:** In a separate `.css` file linked to your HTML document. (Recommended for maintainability).

**Color Values:**

*   **Color Names:** e.g., `red`, `blue`, `green`, `lightblue`.
*   **Hexadecimal Codes:** e.g., `#FF0000` (red), `#0000FF` (blue), `#008000` (green).
*   **RGB Values:** e.g., `rgb(255, 0, 0)` (red), `rgb(0, 0, 255)` (blue).
*   **RGBA Values:** e.g., `rgba(255, 0, 0, 0.5)` (semi-transparent red).
*   **HSL/HSLA Values:** Hue, Saturation, Lightness, and Alpha.

**Example (Using Internal Stylesheet):**

```html
<!DOCTYPE html>
<html>
<head>
<title>Background Color Example</title>
<style>
  body {
    background-color: lightblue; /* Sets background color for the entire page */
  }

  h1 {
    background-color: yellow; /* Sets background color for the h1 element */
    color: darkblue; /* Changes text color for better contrast */
  }

  p {
    background-color: lightgreen;
    padding: 10px; /* Adds some space around the paragraph content */
  }
</style>
</head>
<body>

  <h1>Welcome to My Page!</h1>
  <p>This paragraph has a light green background.</p>
  <p>This is another paragraph.</p>

</body>
</html>
```

---

### Applying Background Images

Background images add visual richness to web pages. The `background-image` CSS property is used for this purpose.

#### How to Apply Background Images

You can set a background image using the `url()` function within the `background-image` property.

**Syntax:**

```css
selector {
  background-image: url('path/to/your/image.jpg');
}
```

*   `path/to/your/image.jpg`: The relative or absolute path to your image file.

**Example (Using External Stylesheet):**

**style.css:**

```css
body {
  background-image: url('images/background.jpg'); /* Assuming 'background.jpg' is in an 'images' folder */
  background-repeat: no-repeat; /* Prevents the image from repeating by default */
  background-size: cover; /* Scales the image to cover the entire background */
  background-attachment: fixed; /* Keeps the background image fixed while scrolling */
}

.content-box {
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background for content */
  padding: 20px;
  margin: 50px;
  border-radius: 10px;
}
```

**index.html:**

```html
<!DOCTYPE html>
<html>
<head>
<title>Background Image Example</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="content-box">
    <h1>Beautiful Background</h1>
    <p>This page has a background image applied to the body. The content is placed within a semi-transparent box to ensure readability.</p>
    <p>Scroll down to see the effect of `background-attachment: fixed;`.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

</body>
</html>
```

---

### Controlling Background Repetition and Positioning

When a background image is smaller than the element it's applied to, it can repeat. The `background-repeat` and `background-position` properties allow you to control this behavior.

#### `background-repeat` Property

This property determines if and how a background image will be repeated.

**Values:**

*   `repeat` (default): The background image repeats both horizontally and vertically.
*   `repeat-x`: The background image repeats only horizontally.
*   `repeat-y`: The background image repeats only vertically.
*   `no-repeat`: The background image does not repeat.

#### `background-position` Property

This property sets the starting position of a background image.

**Values:**

*   **Keywords:**
    *   `top`, `bottom`, `left`, `right`, `center`
    *   Can be combined: `top left`, `bottom right`, `center center`
*   **Percentages:** `50% 50%` (center the image). The first value is for the horizontal position, the second for the vertical.
*   **Lengths:** `10px 20px` (horizontal offset of 10px, vertical offset of 20px from the top-left corner).

**Example:**

```css
.repeat-example {
  background-image: url('images/pattern.png');
  background-repeat: repeat-x; /* Repeats horizontally */
  height: 200px;
  border: 1px solid black;
}

.no-repeat-center {
  background-image: url('images/logo.png');
  background-repeat: no-repeat;
  background-position: center center; /* Centers the image horizontally and vertically */
  height: 200px;
  border: 1px solid black;
}

.custom-position {
  background-image: url('images/icon.png');
  background-repeat: no-repeat;
  background-position: 20px 50px; /* 20px from left, 50px from top */
  height: 200px;
  border: 1px solid black;
}
```

---

### Advanced Background Properties

#### `background-size` Property

This property allows you to resize background images.

**Values:**

*   **Keywords:**
    *   `auto` (default): Resizes the image to its original size.
    *   `cover`: Resizes the image to fill the entire background area, cropping if necessary to maintain aspect ratio.
    *   `contain`: Resizes the image to fit within the background area, ensuring the entire image is visible without cropping, potentially leaving empty space.
*   **Lengths:** `200px 100px` (sets width to 200px and height to 100px).
*   **Percentages:** `50% auto` (sets width to 50% of the container, height adjusts automatically to maintain aspect ratio).

#### `background-attachment` Property

This property determines whether the background image scrolls with the content or remains fixed.

**Values:**

*   `scroll` (default): The background image scrolls with the element.
*   `fixed`: The background image is fixed relative to the viewport.
*   `local`: The background image scrolls with the element's contents.

#### `background-origin` Property

This property specifies the origin position of a background image.

**Values:**

*   `border-box` (default): The background image starts from the border edge.
*   `padding-box`: The background image starts from the padding edge.
*   `content-box`: The background image starts from the content edge.

#### `background-clip` Property

This property specifies how background painting should be clipped.

**Values:**

*   `border-box` (default): The background is painted to the outside edge of the border.
*   `padding-box`: The background is painted to the outside edge of the padding.
*   `content-box`: The background is painted to the content element's edge.

**Example:**

```css
.cover-background {
  background-image: url('images/large-image.jpg');
  background-size: cover; /* Fills the entire area */
  background-attachment: fixed; /* Fixed when scrolling */
  height: 500px;
  border: 2px dashed red;
  color: white;
  text-align: center;
  padding-top: 100px;
}

.contain-background {
  background-image: url('images/small-logo.png');
  background-size: contain; /* Fits the image within the area */
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  border: 2px dotted blue;
}

.clip-example {
  background-image: url('images/texture.png');
  background-repeat: repeat;
  background-clip: padding-box; /* Clips the background to the padding edge */
  padding: 30px;
  border: 20px solid transparent; /* Transparent border to show clipping */
  border-image: url('images/border-image.png') 30 round; /* Example border image */
  height: 200px;
  width: 300px;
}
```

---

### The Shorthand `background` Property

The `background` property is a shorthand that allows you to set multiple background-related properties in a single declaration. This makes your CSS more concise.

**Order of Values (Recommended, though not strictly enforced by all browsers, it's good practice):**

`background: [background-color] [background-image] [background-repeat] [background-attachment] [background-position] / [background-size] [background-origin] [background-clip];`

**Note:** The `/` is used to separate `background-position` from `background-size`.

**Examples:**

```css
/* Setting background color and image */
.shorthand1 {
  background: lightyellow url('images/banner.jpg');
}

/* Setting background image, repeat, and position */
.shorthand2 {
  background: url('images/pattern.png') repeat-x top left;
}

/* Setting all properties */
.shorthand3 {
  background: #f0f0f0 url('images/hero.jpg') no-repeat center center / cover fixed;
}

/* Resetting all background properties */
.reset-background {
  background: none; /* Or background: transparent; */
}
```

**Important:** When using the shorthand, be aware that if you only specify certain values, other properties might be reset to their default values. For example, if you only set `background: url('image.jpg');`, properties like `background-repeat` will revert to `repeat`.

---

### Best Practices for Backgrounds

*   **Readability:** Ensure text is easily readable against the background. Use sufficient contrast.
*   **Performance:** Optimize background images for the web (e.g., use JPEG for photos, PNG for graphics with transparency, SVG for scalable vector graphics). Large, unoptimized images can slow down page loading.
*   **Consistency:** Maintain a consistent background style across your website for a cohesive look and feel.
*   **Responsiveness:** Consider how backgrounds will appear on different screen sizes. Use `background-size: cover` or `contain` for better adaptability.
*   **Accessibility:** Avoid using backgrounds that make it difficult for users with visual impairments to read content. Provide alternative text for images where appropriate.
*   **Gradients:** While not covered in detail here, CSS gradients (linear and radial) are also used for backgrounds and offer sophisticated visual effects.

---

### Practice Questions and Exercises

**Question 1:**

Which CSS property is used to set the background color of an HTML element?

a) `color`
b) `background-color`
c) `bgcolor`
d) `background`

**Question 2:**

How do you prevent a background image from repeating?

a) `background-repeat: repeat;`
b) `background-repeat: no-repeat;`
c) `background-repeat: once;`
d) `background-repeat: fixed;`

**Question 3:**

What does `background-size: cover;` do?

a) Resizes the image to its original size.
b) Resizes the image to fit within the element without cropping.
c) Resizes the image to fill the entire background area, cropping if necessary.
d) Repeats the image horizontally.

**Question 4:**

Which of the following is a valid way to specify a background color using Hexadecimal?

a) `background-color: blue;`
b) `background-color: #00f;`
c) `background-color: rgb(0,0,255);`
d) `background-color: 0,0,255;`

**Question 5:**

Write a CSS rule that applies a background image named `stars.jpg` to the `body` element, makes it not repeat, and centers it horizontally.

**Exercise 1: Simple Background Color**

Create an HTML file named `background_color.html` and a CSS file named `style.css`.
In `background_color.html`:
*   Set the background color of the `body` to `seashell`.
*   Create an `<h1>` with the text "Colorful Page" and set its background color to `cadetblue` and text color to `white`.
*   Create two `<p>` tags with some text, and give them different background colors.

In `style.css`, link it to your HTML file.

**Exercise 2: Background Image with Control**

Create an HTML file named `background_image.html` and a CSS file named `style.css`.
In `background_image.html`:
*   Set the background image for the `body` to `background.jpg` (assume it's in the same directory).
*   Make the background image repeat horizontally only (`repeat-x`).
*   Position the background image at the top left.
*   Create a `div` with a class `content-area`. Add some text inside it.
*   Give the `content-area` a semi-transparent white background (`rgba(255, 255, 255, 0.8)`) and some padding.

In `style.css`, link it to your HTML file.

---

### Answers to Practice Questions

1.  **b) `background-color`**
2.  **b) `background-repeat: no-repeat;`**
3.  **c) Resizes the image to fill the entire background area, cropping if necessary.**
4.  **b) `background-color: #00f;`** (This is a shorthand hex code for blue)
5.  ```css
    body {
      background-image: url('stars.jpg');
      background-repeat: no-repeat;
      background-position: center center; /* or just center */
    }
    ```

---

### Important Points to Remember

*   **CSS is Key:** Most background styling is done with CSS, not directly in HTML tags (except for legacy inline styles).
*   **File Paths:** Ensure your background image paths are correct relative to your CSS file.
*   **Contrast is Crucial:** Always prioritize readability by ensuring sufficient contrast between background and foreground elements.
*   **Shorthand Efficiency:** Use the `background` shorthand property to write cleaner CSS.
*   **`background-size: cover` vs. `contain`:** Understand the difference and when to use each. `cover` is great for full-page backgrounds, while `contain` is useful for logos or images that must be fully visible.
*   **`background-attachment: fixed`:** Creates a parallax-like effect, making the background image stationary while content scrolls.

---
