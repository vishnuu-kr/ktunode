---
title: "Embedded Style Sheets"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0b0"
status: "completed"
scrapedAt: "2026-05-20T17:12:23.357Z"
---
# WEB PROGRAMMING: Module 1: Creating Web Pages using HTML5

## Topic: Embedded Style Sheets

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept and purpose of embedded style sheets.
*   Apply embedded style sheets to HTML elements.
*   Distinguish between embedded style sheets and other CSS application methods (inline and external).
*   Utilize selectors to target specific HTML elements for styling.
*   Apply basic CSS properties to alter the appearance of HTML content.

---

### 1. Introduction to Embedded Style Sheets

#### What are Style Sheets?

Style sheets are used to control the presentation and layout of web pages. They allow you to separate the content (HTML) from the design (CSS), making your web pages more maintainable and visually appealing.

#### What are Embedded Style Sheets?

Embedded style sheets, also known as **internal style sheets**, are CSS rules that are placed directly within the `<style>` tag in the `<head>` section of an HTML document. This method allows you to apply styles to a single HTML page.

**Purpose:**

*   **Single-page styling:** Ideal for styling a single HTML document where styles are not needed on other pages.
*   **Quick experimentation:** Useful for quickly testing CSS rules on a specific page.
*   **Limited scope:** Styles are confined to the specific HTML file they are embedded in.

#### Key Concept: The `<style>` Tag

The `<style>` tag is the fundamental element used for embedded style sheets. It encloses all your CSS rules for that specific HTML document.

**Syntax:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Embedded Styles Example</title>
  <style>
    /* CSS rules go here */
  </style>
</head>
<body>
  <!-- HTML content goes here -->
</body>
</html>
```

---

### 2. Applying Embedded Style Sheets

Embedded style sheets work by defining **rules** that consist of a **selector** and a **declaration block**.

#### 2.1 Selectors

Selectors are patterns used to select the HTML elements you want to style.

*   **Element Selector (Type Selector):** Selects all elements of a specific type.
    *   **Syntax:** `elementName { property: value; }`
    *   **Example:**
        ```html
        <style>
          p {
            color: blue; /* Makes all <p> elements blue */
          }
        </style>
        ```

*   **Class Selector:** Selects elements that have a specific `class` attribute. You can apply the same class to multiple elements.
    *   **Syntax:** `.className { property: value; }`
    *   **Example:**
        ```html
        <style>
          .highlight {
            background-color: yellow;
            font-weight: bold; /* Makes elements with class="highlight" yellow and bold */
          }
        </style>
        <p class="highlight">This text will be highlighted.</p>
        <div class="highlight">This div will also be highlighted.</div>
        ```

*   **ID Selector:** Selects a single element with a specific `id` attribute. IDs must be unique within an HTML document.
    *   **Syntax:** `#idName { property: value; }`
    *   **Example:**
        ```html
        <style>
          #main-heading {
            font-size: 32px;
            text-align: center; /* Styles the element with id="main-heading" */
          }
        </style>
        <h1 id="main-heading">Welcome to My Page</h1>
        ```

*   **Universal Selector (`*`):** Selects all HTML elements on the page.
    *   **Syntax:** `* { property: value; }`
    *   **Example:**
        ```html
        <style>
          * {
            margin: 0;
            padding: 0; /* Resets margin and padding for all elements */
          }
        </style>
        ```

#### 2.2 Declaration Blocks and Properties

A declaration block contains one or more declarations, separated by semicolons. Each declaration consists of a **property** and its **value**, separated by a colon.

*   **Property:** The CSS attribute you want to change (e.g., `color`, `font-size`, `background-color`).
*   **Value:** The setting for the property (e.g., `blue`, `16px`, `#f0f0f0`).

**Example Declaration Block:**

```css
{
  color: green;           /* Property: color, Value: green */
  font-size: 1.2em;       /* Property: font-size, Value: 1.2em */
  border: 1px solid black; /* Property: border, Value: 1px solid black */
}
```

#### 2.3 CSS Properties for Basic Styling

Here are some common CSS properties you can use with embedded style sheets:

*   **`color`**: Sets the text color.
    *   Example: `color: red;`
*   **`font-family`**: Sets the font for text.
    *   Example: `font-family: Arial, sans-serif;`
*   **`font-size`**: Sets the size of the font.
    *   Example: `font-size: 16px;` or `font-size: 1.5em;`
*   **`text-align`**: Aligns text within an element.
    *   Possible values: `left`, `right`, `center`, `justify`.
    *   Example: `text-align: center;`
*   **`background-color`**: Sets the background color of an element.
    *   Example: `background-color: lightblue;`
*   **`margin`**: Sets the space outside an element's border.
    *   Can be set for all sides: `margin: 10px;`
    *   Can be set for individual sides: `margin-top: 5px;`, `margin-right: 10px;`, `margin-bottom: 15px;`, `margin-left: 20px;`
*   **`padding`**: Sets the space between an element's content and its border.
    *   Similar to margin, can be set for all sides or individual sides.
    *   Example: `padding: 15px;`
*   **`border`**: Sets the border of an element.
    *   Shorthand property: `border: width style color;`
    *   Example: `border: 2px dashed red;`
*   **`width`**: Sets the width of an element.
    *   Example: `width: 200px;`
*   **`height`**: Sets the height of an element.
    *   Example: `height: 100px;`

---

### 3. Comparison with Other CSS Application Methods

It's important to understand where embedded style sheets fit in the broader CSS landscape.

| Method             | Location of CSS                                          | Scope of Styles                                | Best Use Cases                                                |
| :----------------- | :------------------------------------------------------- | :--------------------------------------------- | :------------------------------------------------------------ |
| **Inline Styles**  | Directly within an HTML element's `style` attribute.     | Affects only that specific element.            | Quick, one-off styling for a single element.                  |
| **Embedded Styles**| Within the `<style>` tag in the `<head>` section.        | Affects all elements in that specific HTML file. | Styling for a single web page.                                |
| **External Styles**| In a separate `.css` file, linked via `<link>` in `<head>`. | Affects multiple HTML pages that link to it.  | Consistent styling across an entire website.                  |

**Example of Inline Style:**

```html
<p style="color: purple; font-size: 20px;">This text has inline styles.</p>
```

**Example of External Style (in `styles.css`):**

```html
<!-- In your HTML file -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- In styles.css -->
body {
  background-color: #eee;
}
```

**When to use Embedded Styles:**

*   When you have a single, self-contained HTML page that requires specific styling.
*   For quick prototyping or testing of CSS rules on a particular page.
*   When you don't need to reuse the styles across multiple pages of a website.

---

### 4. Understanding Specificity and Inheritance (Brief Introduction)

While this module focuses on embedded styles, it's good to be aware of how CSS determines which style to apply when there are multiple conflicting rules.

*   **Specificity:** Determines which CSS rule will be applied if more than one rule matches an element. More specific selectors (like ID selectors) override less specific ones (like element selectors).
*   **Inheritance:** Some CSS properties are inherited by child elements from their parent elements (e.g., `color`, `font-family`).

**Important Point:** Embedded styles have higher specificity than inline styles applied to the *same* element if the inline style's selector is less specific. However, inline styles generally have the highest specificity because they are applied directly to the element.

---

### 5. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of using embedded style sheets?
A. To style an entire website consistently.
B. To style a single HTML page.
C. To style individual HTML elements directly.
D. To create external CSS files.

**Question 2:**

Which HTML tag is used to embed CSS rules within the `<head>` section of a document?
A. `<link>`
B. `<meta>`
C. `<style>`
D. `<script>`

**Question 3:**

Consider the following HTML and CSS code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Practice</title>
  <style>
    .special-text {
      color: green;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
    #unique-para {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This is a regular paragraph.</p>
  <p class="special-text">This paragraph has special text.</p>
  <p id="unique-para">This is a unique paragraph.</p>
</body>
</html>
```

What will be the color of the text in the paragraph with `id="unique-para"`?
A. Green
B. Black
C. Blue
D. Inherited

**Question 4:**

Write an embedded style sheet that makes all `<h2>` elements have a red color and all paragraphs with the class `intro` have a font size of 18px and are centered.

**Exercise:**

Create an HTML file named `my_embedded_page.html`.
1.  Include a title: "My Embedded Styles Page".
2.  Inside the `<head>` section, create an embedded style sheet.
3.  Make all `<h1>` elements have a navy blue color.
4.  Make all `<h2>` elements have a border-bottom of `1px solid gray`.
5.  Make all paragraphs (`<p>`) have a light gray background color and some padding.
6.  Create a `div` with the id `main-content` and apply a font family of `Verdana` to it.
7.  Add an `<h1>` heading, an `<h2>` heading, and a couple of paragraphs inside the `main-content` div.

---

### 6. Answers to Practice Questions

**Answer 1:**
B. To style a single HTML page.

**Answer 2:**
C. `<style>`

**Answer 3:**
C. Blue. The ID selector `#unique-para` has higher specificity than the element selector `p` and will override the `color` property.

**Answer 4:**

```html
<style>
  h2 {
    color: red;
  }
  .intro {
    font-size: 18px;
    text-align: center;
  }
</style>
```

---

### 7. Important Points to Remember

*   **Location Matters:** Embedded styles **must** be placed within the `<style>` tag inside the `<head>` section of your HTML document.
*   **Single-Page Focus:** They are ideal for styling a *single* HTML page. For consistent styling across multiple pages, use external style sheets.
*   **Selectors are Key:** Master the different types of selectors (element, class, ID, universal) to target the exact elements you want to style.
*   **Syntax:** Remember the `selector { property: value; }` structure and use semicolons to separate multiple declarations within a block.
*   **Specificity:** Be aware that different selectors have different levels of specificity, which determines which rule wins in case of conflict.

---
