---
title: "span"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc16"
status: "completed"
scrapedAt: "2026-05-20T17:28:05.032Z"
---
# Web Programming: Module 1 - Creating Web Pages with HTML5

## Topic: The `<span>` Tag

### 1. Introduction to the `<span>` Tag

The `<span>` tag is an **inline container** in HTML5. It's used to group and apply styles or perform operations on a **specific portion of text or other inline elements** within a larger block of content. Unlike block-level elements (like `<div>`) that create a new line and occupy the full width available, `<span>` does not inherently change the layout of the page.

**Key Concept:** Inline Element

*   **Inline elements** flow with the text and only take up as much width as their content requires. They don't start a new line.

### 2. Purpose and Use Cases of `<span>`

The primary purpose of the `<span>` tag is to provide a hook for applying specific styling or scripting to a targeted segment of content. Common use cases include:

*   **Styling specific words or phrases:** Changing the color, font size, or applying other CSS properties to a small part of a sentence.
*   **Applying JavaScript manipulation:** Targeting a specific piece of text to update its content or trigger an action.
*   **Grouping inline elements:** Although less common, you can group multiple inline elements together using `<span>`.

### 3. Syntax of the `<span>` Tag

The `<span>` tag is a generic container with opening (`<span>`) and closing (`</span>`) tags. Any HTML content can be placed between these tags.

**Basic Syntax:**

```html
<span>Content to be styled or manipulated</span>
```

### 4. `<span>` vs. `<div>`

It's crucial to understand the difference between `<span>` and `<div>`:

| Feature         | `<span>`                                | `<div>`                                       |
| :-------------- | :---------------------------------------- | :-------------------------------------------- |
| **Type**        | Inline Container                          | Block-level Container                         |
| **Layout Impact** | Does not start a new line, flows with text | Starts a new line, occupies full width      |
| **Primary Use** | Styling/manipulating small text segments  | Structuring and grouping larger content blocks |
| **Styling**     | Typically used for inline styles        | Typically used for block-level styles/layout  |

**Example:**

```html
<p>
  This is a <span style="color: blue;">blue</span> word.
</p>

<div>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
</div>
```

In the example above, the word "blue" will be colored blue, but the sentence will remain on a single line. The `<div>` will group the two paragraphs, and each paragraph will start on a new line.

### 5. Applying Styles with `<span>` using CSS

The most common way to use `<span>` is in conjunction with CSS to apply specific styles.

**Methods of Applying CSS:**

*   **Inline Styles (using the `style` attribute):** This is good for quick, one-off styling.

    ```html
    <p>The weather is <span style="color: green; font-weight: bold;">pleasant</span> today.</p>
    ```

*   **Internal Stylesheets (using `<style>` tag in `<head>`):** Define styles in the `<head>` section and use classes or IDs on `<span>`.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Span Styling</title>
        <style>
            .highlight {
                background-color: yellow;
                font-style: italic;
            }
            #important-note {
                color: red;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <p>This sentence has a <span class="highlight">highlighted word</span>.</p>
        <p>Please remember this <span id="important-note">important information</span>.</p>
    </body>
    </html>
    ```

*   **External Stylesheets (linking a `.css` file):** The preferred method for larger projects.

    **HTML File (`index.html`):**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Span Styling</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p>This sentence has a <span class="highlight">highlighted word</span>.</p>
        <p>Please remember this <span id="important-note">important information</span>.</p>
    </body>
    </html>
    ```

    **CSS File (`styles.css`):**

    ```css
    .highlight {
        background-color: yellow;
        font-style: italic;
    }
    #important-note {
        color: red;
        text-decoration: underline;
    }
    ```

### 6. Using `<span>` with JavaScript

`<span>` tags are invaluable when you need to select and manipulate specific pieces of text using JavaScript. You can assign an `id` or `class` to a `<span>` and then use JavaScript's DOM manipulation methods to:

*   Change the text content.
*   Modify its styles.
*   Add or remove classes.
*   Respond to events.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Span with JavaScript</title>
</head>
<body>
    <p>The current count is: <span id="counter">0</span></p>
    <button onclick="incrementCounter()">Increment</button>

    <script>
        function incrementCounter() {
            var counterSpan = document.getElementById("counter");
            var currentCount = parseInt(counterSpan.innerText);
            counterSpan.innerText = currentCount + 1;
        }
    </script>
</body>
</html>
```

In this example, the `<span>` with `id="counter"` holds the current count. The `incrementCounter` JavaScript function targets this `<span>` by its ID, reads its content, increments it, and updates the `<span>`'s text.

### 7. Important Points to Remember

*   **`<span>` is an inline element.** It doesn't create new lines or affect the overall page layout by default.
*   Its primary purpose is to **group small pieces of content** for styling or scripting.
*   Use **`class` or `id` attributes** on `<span>` to target it effectively with CSS and JavaScript.
*   Avoid using `<span>` for semantic grouping; use more specific HTML5 tags (like `<article>`, `<nav>`, `<aside>`) when appropriate.
*   While you *can* use inline styles directly on `<span>`, it's generally better practice to use CSS classes or IDs for maintainability.

---

### Practice Questions & Exercises

**Question 1:**

What is the primary characteristic of the `<span>` tag in HTML5?

a) It is a block-level element that creates a new line.
b) It is an inline element used for grouping small segments of text or other inline elements.
c) It is used for creating navigation menus.
d) It is used for embedding multimedia content.

**Question 2:**

Which of the following HTML code snippets correctly applies a red color to the word "important" using the `<span>` tag and inline CSS?

a) `<p>This is <span color="red">important</span> information.</p>`
b) `<p>This is <span style="color: red;">important</span> information.</p>`
c) `<p>This is <span class="red">important</span> information.</p>`
d) `<p>This is <span id="red">important</span> information.</p>`

**Question 3:**

Imagine you have the following HTML:

```html
<p>Welcome to our <span class="service-name">web programming</span> course!</p>
```

How would you write CSS to make the text "web programming" have a blue background?

a)
```css
.service-name {
  background: blue;
}
```
b)
```css
span {
  background-color: blue;
}
```
c)
```css
#service-name {
  background-color: blue;
}
```
d) Both a and b are correct.

**Question 4:**

What is the main difference between `<span>` and `<div>`?

**Exercise 1:**

Create a simple HTML page that displays the following text:

"The quick brown fox jumps over the lazy dog."

Make the word "quick" appear in blue and the word "lazy" appear in bold. Use the `<span>` tag and inline CSS for this.

---

### Answers to Practice Questions & Exercises

**Answer 1:**

b) It is an inline element used for grouping small segments of text or other inline elements.

**Answer 2:**

b) `<p>This is <span style="color: red;">important</span> information.</p>`
*(Explanation: The `style` attribute is used for inline CSS, and `color: red;` is the correct property-value pair.)*

**Answer 3:**

a)
```css
.service-name {
  background: blue;
}
```
*(Explanation: The `<span>` has a `class` attribute set to "service-name", so the CSS rule targeting `.service-name` will apply. Option b would style *all* spans, which might not be desired. Option c is incorrect because `service-name` is a class, not an ID.)*

**Answer 4:**

The `<span>` tag is an **inline** element, meaning it flows with the text and only takes up the width of its content. It does not start a new line. The `<div>` tag is a **block-level** element, meaning it starts on a new line and takes up the full width available to it. `<span>` is typically used for styling or manipulating small segments of text, while `<div>` is used for structuring larger sections of a web page.

**Answer to Exercise 1:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Span Exercise</title>
</head>
<body>
    <p>
        The <span style="color: blue;">quick</span> brown fox jumps over the <span style="font-weight: bold;">lazy</span> dog.
    </p>
</body>
</html>
