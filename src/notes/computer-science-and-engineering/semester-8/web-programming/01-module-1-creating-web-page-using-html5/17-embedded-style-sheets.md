---
title: "Embedded Style Sheets"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc10"
status: "completed"
scrapedAt: "2026-05-20T17:28:01.038Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Page using HTML5

## Topic: Embedded Style Sheets

---

### 1. Introduction to CSS and Styling Web Pages

*   **What is CSS?**
    *   CSS stands for **Cascading Style Sheets**.
    *   It's a language used to describe the **presentation** of a document written in a markup language like HTML.
    *   CSS controls how HTML elements are displayed on the screen, paper, or in other media.
    *   It separates the content (HTML) from the presentation (CSS), making web development more organized and maintainable.

*   **Why Use CSS?**
    *   **Consistent Look and Feel:** Apply styles to multiple elements and pages for a unified design.
    *   **Easier Maintenance:** Change styles in one place, and it updates everywhere.
    *   **Improved Accessibility:** Control font sizes, colors, and layout for better readability.
    *   **Reduced File Size:** Styles are often linked or embedded, reducing repetitive styling within HTML.
    *   **Enhanced Design Capabilities:** Achieve complex layouts, animations, and visual effects.

*   **The Three Ways to Apply CSS:**
    1.  **Inline Styles:** Applied directly to an HTML element using the `style` attribute. (Generally discouraged for larger projects).
    2.  **Embedded Style Sheets:** Styles are placed within the `<style>` tag in the `<head>` section of an HTML document. (Good for single-page styling or small projects).
    3.  **External Style Sheets:** Styles are written in a separate `.css` file and linked to the HTML document using the `<link>` tag. (The most common and recommended method).

---

### 2. Embedded Style Sheets: The `<style>` Tag

*   **Definition:** Embedded style sheets allow you to include CSS rules directly within your HTML document.
*   **Placement:** The `<style>` tag is placed within the `<head>` section of the HTML document.
*   **Structure:**
    *   The `<style>` tag opens and closes the CSS code block.
    *   Inside the `<style>` tag, you write CSS **rules**.

*   **CSS Rule Structure:**
    *   A CSS rule consists of two main parts:
        *   **Selector:** Identifies the HTML element(s) you want to style.
        *   **Declaration Block:** Contains one or more **declarations**, enclosed in curly braces `{}`.
            *   **Declaration:** A property-value pair separated by a colon `:`, ending with a semicolon `;`.
                *   **Property:** The CSS attribute you want to change (e.g., `color`, `font-size`, `background-color`).
                *   **Value:** The specific setting for the property (e.g., `blue`, `16px`, `#f0f0f0`).

    ```css
    selector {
        property: value;
        another-property: another-value;
    }
    ```

---

### 3. Common Selectors Used in Embedded Styles

*   **Element Selectors (Type Selectors):** Select all instances of a specific HTML element.
    *   **Syntax:** `element_name`
    *   **Example:**
        ```css
        p {
            color: navy; /* Styles all <p> elements */
        }
        h1 {
            text-align: center; /* Styles all <h1> elements */
        }
        ```

*   **Class Selectors:** Select elements that have a specific `class` attribute.
    *   **Syntax:** `.class_name` (note the leading dot)
    *   **Example:**
        ```html
        <p class="highlight">This text will be highlighted.</p>
        <p>This text will not be highlighted.</p>
        ```
        ```css
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
        ```
    *   **Important:** A class can be applied to multiple elements.

*   **ID Selectors:** Select a single, unique element that has a specific `id` attribute.
    *   **Syntax:** `#id_name` (note the leading hash symbol)
    *   **Example:**
        ```html
        <div id="main-content">
            <h2>Welcome!</h2>
        </div>
        ```
        ```css
        #main-content {
            border: 1px solid #ccc;
            padding: 20px;
        }
        ```
    *   **Important:** An ID should only be used for one element on a page.

*   **Universal Selector (`*`):** Selects all HTML elements on the page.
    *   **Use Case:** Often used for resetting default browser styles or applying a base style to everything.
    *   **Example:**
        ```css
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; /* A common reset */
        }
        ```

---

### 4. Common CSS Properties for Styling

*   **Text Formatting:**
    *   `color`: Sets the color of the text.
        *   Example: `color: blue;`, `color: #0000FF;`, `color: rgb(0, 0, 255);`
    *   `font-family`: Specifies the font for the text.
        *   Example: `font-family: Arial, sans-serif;` (provides fallback fonts)
    *   `font-size`: Sets the size of the text.
        *   Example: `font-size: 16px;`, `font-size: 1.2em;`, `font-size: large;`
    *   `font-weight`: Sets the boldness of the text.
        *   Example: `font-weight: bold;`, `font-weight: 700;`, `font-weight: normal;`
    *   `font-style`: Sets the style of the font (e.g., italic).
        *   Example: `font-style: italic;`, `font-style: normal;`
    *   `text-decoration`: Adds or removes decorations like underlines.
        *   Example: `text-decoration: underline;`, `text-decoration: none;`
    *   `text-align`: Aligns text horizontally.
        *   Example: `text-align: left;`, `text-align: center;`, `text-align: right;`, `text-align: justify;`

*   **Backgrounds:**
    *   `background-color`: Sets the background color of an element.
        *   Example: `background-color: lightgray;`
    *   `background-image`: Sets an image as the background.
        *   Example: `background-image: url('background.jpg');`
    *   `background-repeat`: Controls how a background image repeats.
        *   Example: `background-repeat: no-repeat;`, `background-repeat: repeat-x;`
    *   `background-position`: Sets the starting position of a background image.
        *   Example: `background-position: center top;`

*   **Box Model (Layout & Spacing):**
    *   `width`: Sets the width of an element's content area.
        *   Example: `width: 100%;`, `width: 300px;`
    *   `height`: Sets the height of an element's content area.
        *   Example: `height: 150px;`
    *   `padding`: Creates space *inside* the border, between the content and the border.
        *   Example: `padding: 10px;` (applies to all sides)
        *   Example: `padding: 5px 10px;` (top/bottom 5px, left/right 10px)
        *   Example: `padding: 5px 10px 15px 20px;` (top, right, bottom, left)
    *   `margin`: Creates space *outside* the border, separating the element from other elements.
        *   Example: `margin: 15px;`
        *   Example: `margin: 0 auto;` (centers a block element with a defined width)
    *   `border`: Sets the border around an element.
        *   Example: `border: 2px solid black;` (width, style, color)
        *   Can also be set individually: `border-width`, `border-style`, `border-color`.

*   **Display Properties:**
    *   `display`: Specifies how an element should be displayed.
        *   `block`: Takes up the full width available, starts on a new line (e.g., `<div>`, `<p>`, `<h1>`).
        *   `inline`: Does not start on a new line, only takes up as much width as necessary (e.g., `<span>`, `<a>`, `<strong>`).
        *   `inline-block`: Like inline, but can have width and height set (e.g., `<img>`, `<button>`).
        *   `none`: Hides the element completely.

---

### 5. How Embedded Styles Cascade

*   **What is Cascading?**
    *   The "Cascading" in CSS refers to the **order** in which CSS rules are applied.
    *   When multiple rules apply to the same HTML element, the browser determines which rule to "win" based on a set of priorities.

*   **The Cascade Order (from least to most specific/important):**
    1.  **Browser Default Styles:** Styles applied by the browser unless overridden.
    2.  **User Stylesheets:** Styles defined by the user (less common in general web browsing).
    3.  **Author Stylesheets:** Styles written by the web developer (your CSS).
        *   **Importance within Author Stylesheets:**
            *   **Inline Styles:** Have the highest specificity within the author's styles.
            *   **Embedded Stylesheets (`<style>` tag):** Applied based on specificity and order.
            *   **External Stylesheets (`.css` file):** Applied based on specificity and order.
        *   **Specificity:** How specific a selector is.
            *   ID selectors are more specific than Class selectors.
            *   Class selectors are more specific than Element selectors.
            *   The more specific a selector, the higher its priority.
        *   **Source Order:** If two rules have the same specificity, the one that appears **later** in the code (or in a later linked stylesheet) wins.

    4.  **`!important`:** Rules marked with `!important` override all other rules, regardless of specificity or source order. (Use with extreme caution as it can make debugging difficult).

*   **Example of Cascading:**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cascade Example</title>
        <style>
            /* Rule 1: Element Selector */
            p {
                color: blue; /* Will be overridden by Rule 3 */
            }

            /* Rule 2: Class Selector */
            .special-text {
                color: green;
            }

            /* Rule 3: ID Selector */
            #unique-paragraph {
                color: red; /* Will override Rule 1 and Rule 2 */
            }

            /* Rule 4: Inline Style */
            /* <p style="color: orange;">...</p> */ /* This would override Rule 1, 2, and 3 */

            /* Rule 5: Using !important */
            #unique-paragraph {
                color: purple !important; /* This will win! */
            }
        </style>
    </head>
    <body>
        <p>This is a regular paragraph.</p>
        <p class="special-text">This is a special paragraph.</p>
        <p id="unique-paragraph" style="color: orange;">This is a unique paragraph with an inline style.</p>
    </body>
    </html>
    ```

    In the example above:
    *   The first `<p>` will be blue.
    *   The second `<p>` will be green (class selector wins over element selector).
    *   The third `<p>` will be **purple** because the ID selector (`#unique-paragraph`) is more specific than the class selector, AND the `!important` flag gives it the highest priority. If the `!important` was removed, the inline style `color: orange;` would win.

---

### 6. Advantages and Disadvantages of Embedded Styles

*   **Advantages:**
    *   **Convenience for Single Pages:** Easy to apply styles to a single HTML document without creating a separate CSS file.
    *   **Good for Testing:** Quickly test CSS ideas on a single page.
    *   **Self-Contained:** The HTML and CSS are in one file, making it easy to share a single piece of code.

*   **Disadvantages:**
    *   **Maintenance Issues:** If you need to apply the same styles to multiple pages, you'll have to copy and paste the `<style>` block, which is inefficient and error-prone.
    *   **Increased HTML File Size:** Larger HTML files can slow down page loading.
    *   **Poor Reusability:** Styles are not easily reused across different projects.
    *   **Not Scalable:** Becomes unmanageable for larger websites.

---

### 7. Learning Outcomes Covered

This topic provides notes that cover:

1.  **Understanding the purpose of CSS for styling web pages.**
2.  **Identifying embedded style sheets as one method of applying CSS.**
3.  **Knowing where to place the `<style>` tag within an HTML document.**
4.  **Understanding the basic structure of a CSS rule (selector, property, value).**
5.  **Using common CSS selectors (element, class, ID, universal).**
6.  **Applying common CSS properties for text, backgrounds, and box model.**
7.  **Explaining the concept of cascading and specificity in CSS.**
8.  **Recognizing the advantages and disadvantages of using embedded style sheets.**

---

### 8. Practice Questions/Exercises

**Question 1:**
Where should the `<style>` tag be placed in an HTML document for embedded stylesheets?
a) In the `<body>` section, before any content.
b) In the `<head>` section.
c) At the very end of the `<body>` section.
d) You can place it anywhere in the HTML document.

**Question 2:**
Which of the following CSS code snippets correctly styles all paragraphs to be blue and bold?
a)
```css
p {
    color: blue;
    font-weight: bold;
}
```
b)
```css
P {
    color: blue;
    font-weight: bold;
}
```
c)
```css
.p {
    color: blue;
    font-weight: bold;
}
```
d)
```css
#p {
    color: blue;
    font-weight: bold;
}
```

**Question 3:**
What is the primary advantage of using a class selector (`.className`) over an ID selector (`#idName`)?
a) Class selectors are more specific.
b) Class selectors can be applied to multiple elements, while IDs should be unique.
c) ID selectors are always preferred for styling.
d) Class selectors can only style text, not backgrounds.

**Question 4:**
Consider the following HTML and CSS:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Styling</title>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: darkgreen;
        }
        .intro {
            font-size: 18px;
        }
        #main-title {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1 id="main-title">Welcome to My Page</h1>
    <p class="intro">This is the introduction.</p>
    <p>This is another paragraph.</p>
</body>
</html>
```
Describe how the `<h1>` element will be styled.

**Question 5:**
What is the CSS property used to add space *outside* the border of an element?
a) `padding`
b) `margin`
c) `border`
d) `outline`

---

### 9. Answers to Practice Questions

**Answer 1:**
**b) In the `<head>` section.**
The `<style>` tag is part of the document's metadata and should be placed within the `<head>` section.

**Answer 2:**
**a) `p { color: blue; font-weight: bold; }`**
`p` is the correct element selector for paragraph tags. The case of element names in CSS selectors is generally ignored, but lowercase is the convention. `.p` targets a class named "p", and `#p` targets an ID named "p".

**Answer 3:**
**b) Class selectors can be applied to multiple elements, while IDs should be unique.**
This is the fundamental difference and a key concept in HTML and CSS. IDs are for unique identifiers, classes are for grouping elements that share common styling or behavior.

**Answer 4:**
The `<h1>` element with the ID `main-title` will have:
*   Its background color set to `lightblue` (inherited from the `body` styling).
*   Its text color set to `darkgreen` (from the `h1` element selector).
*   Its text alignment set to `center` (from the `#main-title` ID selector, which is more specific and thus wins over the generic `h1` selector for `text-align`).

**Answer 5:**
**b) `margin`**
`margin` creates space outside the border, while `padding` creates space inside the border.

---

### 10. Important Points to Remember

*   **`<style>` tag belongs in the `<head>` section.**
*   **CSS Rule = Selector + Declaration Block (`{ property: value; }`)**
*   **Selectors are crucial for targeting specific HTML elements.**
    *   `element_name` (e.g., `p`)
    *   `.class_name` (e.g., `.highlight`)
    *   `#id_name` (e.g., `#main-content`)
*   **Specificity matters!** IDs > Classes > Elements.
*   **Source order matters!** If specificity is equal, the last rule wins.
*   **`!important` is powerful but dangerous.** Use it sparingly.
*   **Embedded styles are good for single pages or quick tests, but external stylesheets are best for larger, maintainable websites.**
*   **The Box Model (margin, border, padding) is fundamental for layout.**

---
