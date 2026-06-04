---
title: "Backgrounds"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0b7"
status: "completed"
scrapedAt: "2026-05-20T17:12:30.085Z"
---
# WEB PROGRAMMING: Module 1 - Creating Web Pages using HTML5

## Topic: Backgrounds

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand and apply the concept of backgrounds in web pages.
*   Set a solid color as the background for an HTML element.
*   Set an image as the background for an HTML element.
*   Control the repetition of background images.
*   Position background images.
*   Fix background images to the viewport.
*   Apply multiple background images.
*   Understand the use of the `background` shorthand property.

---

### 1. Introduction to Backgrounds in Web Pages

The background of an HTML element is the area behind its content and padding. It's a crucial aspect of web design for visual appeal and readability. In HTML5, backgrounds are primarily controlled using CSS (Cascading Style Sheets).

**Key Concepts:**

*   **Element:** Any part of an HTML document (e.g., `<body>`, `<div>`, `<p>`, `<h1>`).
*   **CSS:** A language used for describing the presentation of a document written in a markup language like HTML.

---

### 2. Setting a Solid Color Background

You can set a solid color as the background for any HTML element. This is achieved using the `background-color` CSS property.

**Key Concepts & Definitions:**

*   **`background-color`:** This CSS property sets the background color of an element.
*   **Color Values:** Colors can be specified in several ways:
    *   **Color Names:** Predefined names like `red`, `blue`, `green`, `yellow`, `white`, `black`, etc.
    *   **Hexadecimal (Hex) Codes:** A six-digit code preceded by a `#`, representing Red, Green, and Blue (RGB) values (e.g., `#FF0000` for red).
    *   **RGB Values:** Specify the intensity of Red, Green, and Blue, each from 0 to 255 (e.g., `rgb(255, 0, 0)` for red).
    *   **RGBA Values:** Similar to RGB but includes an alpha channel for transparency (0 for fully transparent, 1 for fully opaque) (e.g., `rgba(255, 0, 0, 0.5)` for semi-transparent red).

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Solid Color Backgrounds</title>
  <style>
    body {
      background-color: lightblue; /* Setting background color for the entire page */
    }
    .content-box {
      background-color: #f0f0f0; /* Light gray background for a div */
      padding: 20px;
      margin-top: 20px;
    }
    p {
      background-color: rgba(255, 255, 0, 0.7); /* Semi-transparent yellow background for a paragraph */
    }
  </style>
</head>
<body>

  <h1>Page Title</h1>
  <p>This paragraph has a semi-transparent yellow background.</p>

  <div class="content-box">
    <h2>Content Box</h2>
    <p>This div has a light gray background.</p>
  </div>

</body>
</html>
```

---

### 3. Setting an Image as the Background

You can use an image file (like JPG, PNG, GIF, SVG) as the background for an HTML element using the `background-image` CSS property.

**Key Concepts & Definitions:**

*   **`background-image`:** This CSS property sets one or more background images for an element.
*   **`url()` function:** Used within `background-image` to specify the path to the image file. The path can be relative to the CSS file or an absolute URL.

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Backgrounds</title>
  <style>
    body {
      background-image: url('images/background.jpg'); /* Assuming 'background.jpg' is in an 'images' folder */
      /* If the image is in the same directory as the HTML file: */
      /* background-image: url('background.jpg'); */
    }
    .card {
      background-image: url('https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Card+Background'); /* Using an online placeholder image */
      background-color: white; /* Fallback color if image doesn't load */
      padding: 20px;
      margin: 20px;
      width: 300px;
      height: 200px;
      color: black; /* Text color for readability */
    }
  </style>
</head>
<body>

  <h1>Welcome!</h1>
  <p>This page has a background image applied to the body.</p>

  <div class="card">
    <h2>Card Element</h2>
    <p>This card has its own background image.</p>
  </div>

</body>
</html>
```

**Important Point to Remember:**
*   Ensure the image path is correct. If the image is not found, the background will not display, and the `background-color` (if set) will be used as a fallback.

---

### 4. Controlling Background Image Repetition

By default, background images repeat to fill the entire element. You can control this behavior using the `background-repeat` property.

**Key Concepts & Definitions:**

*   **`background-repeat`:** Controls how background images are repeated.
    *   **`repeat` (default):** The image repeats both horizontally and vertically.
    *   **`repeat-x`:** The image repeats only horizontally.
    *   **`repeat-y`:** The image repeats only vertically.
    *   **`no-repeat`:** The image does not repeat at all. It displays only once.

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Background Image Repetition</title>
  <style>
    .repeat-all {
      background-image: url('images/pattern.png');
      background-repeat: repeat; /* Default behavior */
      background-color: #eee;
      padding: 30px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .repeat-x {
      background-image: url('images/pattern.png');
      background-repeat: repeat-x; /* Repeats horizontally */
      background-color: #eee;
      padding: 30px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .repeat-y {
      background-image: url('images/pattern.png');
      background-repeat: repeat-y; /* Repeats vertically */
      background-color: #eee;
      padding: 30px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .no-repeat {
      background-image: url('images/logo.png');
      background-repeat: no-repeat; /* No repetition */
      background-color: #ddd;
      padding: 30px;
      margin: 20px;
      border: 1px solid #ccc;
      background-position: center; /* Center the single image */
    }
  </style>
</head>
<body>

  <div class="repeat-all">
    <h3>Repeating Background (default)</h3>
    <p>This background image repeats in all directions.</p>
  </div>

  <div class="repeat-x">
    <h3>Horizontal Repetition (repeat-x)</h3>
    <p>This background image repeats only horizontally.</p>
  </div>

  <div class="repeat-y">
    <h3>Vertical Repetition (repeat-y)</h3>
    <p>This background image repeats only vertically.</p>
  </div>

  <div class="no-repeat">
    <h3>No Repetition (no-repeat)</h3>
    <p>This background image appears only once.</p>
  </div>

</body>
</html>
```
*(Note: Replace `images/pattern.png` and `images/logo.png` with actual image paths or URLs.)*

---

### 5. Positioning Background Images

The `background-position` property allows you to control the starting position of a background image within an element.

**Key Concepts & Definitions:**

*   **`background-position`:** Sets the initial position of a background image.
*   **Position Values:**
    *   **Keywords:** `left`, `center`, `right` (horizontal) and `top`, `center`, `bottom` (vertical). Combinations like `top left`, `center right` are also valid.
    *   **Percentages:** Specify the position as a percentage of the element's width and height. `0% 0%` is the top-left corner, `100% 100%` is the bottom-right corner. `50% 50%` centers the image.
    *   **Absolute Lengths:** Specify the exact distance from the top-left corner using units like pixels (`px`), ems (`em`), etc. (e.g., `20px 30px`).

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Background Image Positioning</title>
  <style>
    .pos-top-left {
      background-image: url('images/icon.png');
      background-repeat: no-repeat;
      background-position: top left; /* Image at top-left corner */
      background-color: #f9f9f9;
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .pos-center-center {
      background-image: url('images/icon.png');
      background-repeat: no-repeat;
      background-position: center center; /* Image centered both ways */
      background-color: #f9f9f9;
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .pos-bottom-right {
      background-image: url('images/icon.png');
      background-repeat: no-repeat;
      background-position: bottom right; /* Image at bottom-right corner */
      background-color: #f9f9f9;
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .pos-percentage {
      background-image: url('images/icon.png');
      background-repeat: no-repeat;
      background-position: 75% 25%; /* Image at 75% right, 25% down */
      background-color: #f9f9f9;
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
    }
    .pos-absolute {
      background-image: url('images/icon.png');
      background-repeat: no-repeat;
      background-position: 100px 150px; /* Image at 100px right, 150px down */
      background-color: #f9f9f9;
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <div class="pos-top-left">
    <h3>Top Left</h3>
    <p>Icon is at the top-left.</p>
  </div>

  <div class="pos-center-center">
    <h3>Center Center</h3>
    <p>Icon is centered.</p>
  </div>

  <div class="pos-bottom-right">
    <h3>Bottom Right</h3>
    <p>Icon is at the bottom-right.</p>
  </div>

  <div class="pos-percentage">
    <h3>75% Right, 25% Down</h3>
    <p>Icon position is defined by percentages.</p>
  </div>

  <div class="pos-absolute">
    <h3>100px Right, 150px Down</h3>
    <p>Icon position is defined by absolute pixel values.</p>
  </div>

</body>
</html>
```
*(Note: Replace `images/icon.png` with an actual image path or URL. A small icon is recommended for `background-position` demonstrations.)*

---

### 6. Fixing Background Images to the Viewport (Parallax Effect)

The `background-attachment` property determines whether the background image scrolls with the content or remains fixed in place.

**Key Concepts & Definitions:**

*   **`background-attachment`:** Specifies whether the background image should scroll with the element or be fixed.
    *   **`scroll` (default):** The background image scrolls with the element.
    *   **`fixed`:** The background image is fixed relative to the viewport. It does not move when the page content scrolls. This creates a "parallax" effect.
    *   **`local`:** The background image scrolls with the element's content. (Less commonly used than `scroll` or `fixed`).

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Background Attachment</title>
  <style>
    .scrolling-background {
      background-image: url('images/landscape.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: scroll; /* Default */
      height: 400px; /* Needs height to show scrolling */
      background-color: #ccc;
      color: black;
      padding: 20px;
    }
    .fixed-background {
      background-image: url('images/galaxy.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed; /* Creates a parallax effect */
      height: 400px; /* Needs height to show scrolling */
      background-color: #000;
      color: white;
      padding: 20px;
    }
    .content-below {
      height: 800px; /* Make the page scrollable */
      background-color: #f0f0f0;
      padding: 20px;
    }
  </style>
</head>
<body>

  <div class="scrolling-background">
    <h2>Scrolling Background</h2>
    <p>This background image will scroll with the content.</p>
    <p>Scroll down to see the effect...</p>
  </div>

  <div class="fixed-background">
    <h2>Fixed Background (Parallax)</h2>
    <p>This background image will stay fixed relative to the viewport.</p>
    <p>Scroll down to see the effect...</p>
  </div>

  <div class="content-below">
    <h2>More Content</h2>
    <p>This is additional content to make the page scrollable.</p>
    <p>Notice how the "Scrolling Background" section moves with the page, while the "Fixed Background" section remains stationary.</p>
  </div>

</body>
</html>
```
*(Note: Replace `images/landscape.jpg` and `images/galaxy.jpg` with actual image paths or URLs. Larger images are better for observing the `fixed` effect.)*

---

### 7. Applying Multiple Background Images

You can apply multiple background images to a single element by separating them with commas in the `background-image` property. The first image listed is the topmost layer.

**Key Concepts & Definitions:**

*   **Layering:** When multiple images are used, they are stacked on top of each other.
*   **Comma Separation:** Images are separated by commas, with the first image in the list appearing on top.

**Examples:**

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Multiple Background Images</title>
  <style>
    .multi-background {
      background-image: url('images/overlay.png'), url('images/base.jpg'); /* overlay.png on top of base.jpg */
      background-repeat: no-repeat, repeat; /* No repeat for overlay, repeat for base */
      background-position: center center, top left; /* Center overlay, top-left for base */
      background-color: lightcoral; /* Fallback color */
      padding: 50px;
      margin: 20px;
      border: 1px solid #ccc;
      color: white;
      text-shadow: 1px 1px 2px black; /* Improve readability */
    }
  </style>
</head>
<body>

  <div class="multi-background">
    <h2>Multiple Backgrounds</h2>
    <p>This element has two background images layered.</p>
    <p>A translucent overlay on top of a repeating base image.</p>
  </div>

</body>
</html>
```
*(Note: Replace `images/overlay.png` and `images/base.jpg` with actual image paths or URLs. `overlay.png` should ideally be semi-transparent.)*

---

### 8. The `background` Shorthand Property

The `background` property is a shorthand that allows you to set multiple background properties in a single declaration. This can make your CSS more concise.

**Key Concepts & Definitions:**

*   **Shorthand Property:** A single CSS property that sets multiple individual properties.
*   **Order (Recommended):** While not strictly enforced for all properties, a common and readable order is:
    `background-color background-image background-repeat background-attachment background-position / background-size`
    *(Note: `background-size` is often included, but we'll cover it in a future module. The `/` is used to separate `background-position` from `background-size` if both are present.)*

**Examples:**

Instead of:

```css
.my-element {
  background-color: #f0f0f0;
  background-image: url('images/pattern.png');
  background-repeat: repeat-x;
  background-position: center top;
  background-attachment: scroll;
}
```

You can use the shorthand:

```css
.my-element {
  background: #f0f0f0 url('images/pattern.png') repeat-x center top scroll;
}
```

Or even more concisely if some properties are default:

```css
.my-element {
  background: url('images/pattern.png') repeat-x center top; /* color and attachment are default */
}
```

**Important Point to Remember:**
*   When using the `background` shorthand, any properties you *don't* explicitly set will be reset to their default values. Be mindful of this if you're overriding existing styles.

---

### Practice Questions & Exercises

**Question 1:**

Which CSS property is used to set a solid color as the background of an element?

a) `background-image`
b) `background-color`
c) `background-style`
d) `color`

**Answer:** b) `background-color`

---

**Question 2:**

What does the `background-repeat: repeat-x;` value do?

a) Repeats the background image vertically only.
b) Repeats the background image horizontally only.
c) Repeats the background image in both directions.
d) Does not repeat the background image.

**Answer:** b) Repeats the background image horizontally only.

---

**Question 3:**

How can you make a background image stay fixed in place and not scroll with the content? Which CSS property and value would you use?

**Answer:** You would use the `background-attachment` property with the value `fixed`.
Example: `background-attachment: fixed;`

---

**Question 4:**

Write the CSS code to set a background image named `my-bg.jpg` to an element with the class `hero-section`, ensure it does not repeat, and center it both horizontally and vertically.

**CSS Code:**

```css
.hero-section {
  background-image: url('my-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
}
```

---

**Question 5:**

What is the primary advantage of using the `background` shorthand property?

a) It makes the CSS code longer.
b) It allows for more complex styling of backgrounds.
c) It makes the CSS code more concise and easier to read.
d) It automatically fixes all background issues.

**Answer:** c) It makes the CSS code more concise and easier to read.

---

### Summary and Key Takeaways

*   Backgrounds are styled using CSS properties.
*   `background-color` sets solid colors.
*   `background-image` uses the `url()` function to apply images.
*   `background-repeat` controls image tiling (`repeat`, `repeat-x`, `repeat-y`, `no-repeat`).
*   `background-position` determines where the image starts (`top`, `center`, `bottom`, percentages, lengths).
*   `background-attachment: fixed;` creates a parallax effect by fixing the image to the viewport.
*   Multiple background images can be layered using comma separation in `background-image`.
*   The `background` shorthand property combines multiple background properties for conciseness.

---
This concludes Module 1: Backgrounds. You should now be comfortable with basic background styling in HTML5.
