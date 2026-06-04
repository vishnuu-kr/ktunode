---
title: "Styling Web Page using CSS  - Introduction"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0ae"
status: "completed"
scrapedAt: "2026-05-20T17:12:21.410Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Pages using HTML5

## Topic: Styling Web Pages using CSS - Introduction

### 1. What is CSS?

*   **Definition:** CSS stands for **Cascading Style Sheets**. It's a style sheet language used for describing the presentation of a document written in a markup language like HTML.
*   **Purpose:** CSS controls the layout, colors, fonts, and overall visual appearance of web pages. It separates the content (HTML) from its presentation (CSS).
*   **Analogy:** Think of HTML as the skeleton of a house (the structure and content), and CSS as the paint, wallpaper, furniture, and decorations that make it look good.

### 2. Why use CSS?

*   **Separation of Concerns:**
    *   Keeps HTML clean and focused on content.
    *   Makes it easier to manage and update the styling of a website.
*   **Consistency:** Apply the same styles across multiple pages of a website, ensuring a unified look and feel.
*   **Efficiency:**
    *   Write styles once and apply them to many elements.
    *   Reduces code duplication, leading to smaller file sizes and faster loading times.
*   **Maintainability:** Changes to styles can be made in one place (a CSS file) and reflected everywhere.
*   **Responsiveness:** CSS is crucial for creating responsive web designs that adapt to different screen sizes (desktops, tablets, mobile phones).
*   **Accessibility:** Proper use of CSS can improve website accessibility for users with disabilities.

### 3. How CSS Works: Selectors, Properties, and Values

CSS works by selecting HTML elements and applying styles to them. This is done using the following syntax:

```css
selector {
  property: value;
}
```

*   **Selector:**
    *   **Definition:** A pattern that selects the HTML element(s) you want to style.
    *   **Examples:**
        *   `p` (selects all `<p>` elements)
        *   `h1` (selects all `<h1>` elements)
        *   `.className` (selects elements with the class attribute)
        *   `#idName` (selects the element with the id attribute)
        *   `div p` (selects `<p>` elements that are descendants of `<div>` elements)
*   **Property:**
    *   **Definition:** The specific characteristic of an element you want to change (e.g., color, font-size, background).
    *   **Examples:** `color`, `font-size`, `background-color`, `margin`, `padding`, `border`.
*   **Value:**
    *   **Definition:** The setting you want to apply to the property.
    *   **Examples:** `blue`, `16px`, `#333`, `10px`, `solid black 1px`.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Styled Page</title>
  <style>
    h1 {
      color: navy; /* Sets the color of all h1 elements to navy */
      text-align: center; /* Centers the text within h1 elements */
    }
    p {
      font-size: 18px; /* Sets the font size of all p elements to 18 pixels */
      line-height: 1.5; /* Sets the spacing between lines of text */
    }
    .highlight {
      background-color: yellow; /* Sets the background color of elements with class 'highlight' */
      font-weight: bold; /* Makes the text bold */
    }
  </style>
</head>
<body>
  <h1>Welcome to My Styled Page!</h1>
  <p>This is a paragraph of text. It will be styled using CSS.</p>
  <p class="highlight">This paragraph has a special class called 'highlight' and will appear with a yellow background and bold text.</p>
</body>
</html>
```

### 4. Ways to Include CSS in HTML

There are three primary ways to include CSS in your HTML document:

#### a) Inline Styles

*   **Description:** Applying CSS directly to an individual HTML element using the `style` attribute.
*   **Syntax:**
    ```html
    <element style="property: value;">Content</element>
    ```
*   **Example:**
    ```html
    <p style="color: green; font-weight: bold;">This text is green and bold.</p>
    ```
*   **Pros:** Quick for single, specific styles.
*   **Cons:** Not recommended for general styling as it mixes content and presentation, making it hard to maintain and less efficient.

#### b) Internal (Embedded) Styles

*   **Description:** Placing CSS rules within the `<style>` tag in the `<head>` section of an HTML document.
*   **Syntax:**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Internal Styles</title>
      <style>
        selector {
          property: value;
        }
        /* More CSS rules here */
      </style>
    </head>
    <body>
      <!-- HTML content -->
    </body>
    </html>
    ```
*   **Example:** (See the example in Section 3)
*   **Pros:** Useful for single-page websites or when a small amount of CSS is needed.
*   **Cons:** Styles are specific to that one HTML file. For multi-page sites, you'd have to repeat the same styles in each file, which is inefficient.

#### c) External Stylesheets

*   **Description:** Storing CSS rules in a separate `.css` file and linking it to the HTML document. This is the **most recommended** and widely used method.
*   **How to:**
    1.  Create a new file with a `.css` extension (e.g., `styles.css`).
    2.  Write all your CSS rules in this file.
    3.  Link the CSS file in the `<head>` section of your HTML document using the `<link>` tag.
*   **Syntax (in HTML):**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>External Styles</title>
      <link rel="stylesheet" href="path/to/your/styles.css">
    </head>
    <body>
      <!-- HTML content -->
    </body>
    </html>
    ```
*   **Syntax (in `styles.css`):**
    ```css
    h1 {
      color: purple;
      font-size: 36px;
    }
    body {
      font-family: Arial, sans-serif;
    }
    ```
*   **Pros:**
    *   **Best for maintainability and efficiency.**
    *   Separates concerns perfectly.
    *   Styles can be reused across multiple HTML pages.
    *   Browser caches the CSS file, leading to faster loading times on subsequent page visits.
*   **Cons:** Requires an extra HTTP request to download the CSS file (though this is generally negligible due to caching).

### 5. Basic CSS Properties to Get Started

Here are some fundamental CSS properties you'll encounter:

*   **`color`:** Sets the color of text.
    *   Example: `color: blue;` or `color: #0000FF;`
*   **`background-color`:** Sets the background color of an element.
    *   Example: `background-color: lightgray;` or `background-color: rgb(200, 200, 200);`
*   **`font-family`:** Sets the font for text.
    *   Example: `font-family: Arial, sans-serif;` (Arial is preferred, if not available, use a generic sans-serif font)
*   **`font-size`:** Sets the size of the font.
    *   Example: `font-size: 16px;` or `font-size: 1.2em;`
*   **`text-align`:** Aligns text within an element.
    *   Example: `text-align: center;` or `text-align: left;`
*   **`font-weight`:** Sets the thickness of the font (e.g., bold).
    *   Example: `font-weight: bold;` or `font-weight: normal;`
*   **`margin`:** Creates space around an element, outside of its border.
    *   Example: `margin: 10px;` (applies 10px to all sides)
    *   Example: `margin-top: 5px;`
*   **`padding`:** Creates space within an element, between the content and its border.
    *   Example: `padding: 15px;` (applies 15px to all sides)
    *   Example: `padding-left: 20px;`
*   **`border`:** Sets a border around an element.
    *   Example: `border: 1px solid black;` (1px width, solid style, black color)

### 6. The Cascade and Specificity (Introduction)

*   **The Cascade:** When multiple CSS rules apply to the same HTML element, the browser uses a set of rules to determine which style to apply. This is called the "cascade." The order of rules, their origin (browser default, user, author), and their specificity all play a role.
*   **Specificity:** A measure of how precisely a selector matches an element. More specific selectors generally override less specific ones.
    *   Inline styles are the most specific.
    *   IDs (`#id`) are more specific than classes (`.class`).
    *   Classes (`.class`) are more specific than element types (`p`, `h1`).
    *   Browser default styles are the least specific.

**(This is an introductory overview; detailed specificity will be covered in later modules.)**

### 7. Practice Questions/Exercises

**Question 1:**
What does CSS stand for?

**Answer 1:**
CSS stands for Cascading Style Sheets.

---

**Question 2:**
List three benefits of using CSS for styling web pages.

**Answer 2:**
*   Separation of Concerns (keeps HTML clean)
*   Consistency across pages
*   Efficiency (reduces code duplication) / Maintainability / Responsiveness

---

**Question 3:**
Explain the difference between `margin` and `padding`.

**Answer 3:**
*   `margin` creates space **outside** an element's border.
*   `padding` creates space **inside** an element's border, between the content and the border.

---

**Question 4:**
Write the CSS rule to make all `<p>` elements have blue text and a font size of 1em.

**Answer 4:**
```css
p {
  color: blue;
  font-size: 1em;
}
```

---

**Question 5:**
What is the recommended way to include CSS in a multi-page website? Explain why.

**Answer 5:**
The recommended way is to use **external stylesheets**. This is because it allows you to write styles once in a separate `.css` file and link it to all your HTML pages. This makes the website easier to maintain, ensures consistency, and improves loading performance due to browser caching.

---

**Question 6:**
Create a simple HTML file and an external CSS file to style it.
*   **HTML (index.html):**
    *   A main heading `<h1>` with the text "My Awesome Page".
    *   A paragraph `<p>` with the text "This is the first paragraph."
    *   Another paragraph `<p>` with the class `special` and text "This paragraph is special."
*   **CSS (styles.css):**
    *   Style the `<h1>` to be centered and purple.
    *   Style all `<p>` elements to have a font size of 16px and a line height of 1.6.
    *   Style elements with the class `special` to have a yellow background.

**Answer 6:**

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Styled Page Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My Awesome Page</h1>
  <p>This is the first paragraph.</p>
  <p class="special">This paragraph is special.</p>
</body>
</html>
```

**styles.css:**
```css
h1 {
  text-align: center;
  color: purple;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

.special {
  background-color: yellow;
}
```

### 8. Important Points to Remember

*   **CSS is for presentation, HTML is for structure/content.** Keep them separate!
*   **External stylesheets (`.css` files linked via `<link>`) are the best practice.**
*   Understand the `selector { property: value; }` syntax.
*   `margin` is outside the border, `padding` is inside.
*   The browser follows a "cascade" to decide which styles to apply when multiple rules conflict. Specificity matters!

---
