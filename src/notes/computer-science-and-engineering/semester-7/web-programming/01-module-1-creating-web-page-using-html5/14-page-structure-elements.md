---
title: "Page-Structure Elements"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0ad"
status: "completed"
scrapedAt: "2026-05-20T17:12:20.496Z"
---
# WEB PROGRAMMING: Module 1 - Creating Web Pages using HTML5

## Topic: Page-Structure Elements

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and usage of fundamental HTML5 page-structure elements.
*   Create a well-structured HTML document using semantic elements.
*   Differentiate between block-level and inline elements and their impact on layout.
*   Utilize headings, paragraphs, and lists to organize content effectively.
*   Implement links and images to enhance web page interactivity and visual appeal.

---

### 1. Introduction to HTML5 Page Structure

HTML (HyperText Markup Language) is the foundation of all web pages. It uses **elements** (or **tags**) to define the content and structure of a web page. HTML5 introduced semantic elements that provide meaning to the content, making web pages more understandable for both browsers and developers.

**Key Concepts:**

*   **Elements:** Consist of an opening tag, content, and a closing tag (e.g., `<p>This is a paragraph.</p>`).
*   **Tags:** The keywords enclosed in angle brackets (e.g., `<p>`, `<h1>`).
*   **Attributes:** Provide additional information about an element, placed within the opening tag (e.g., `<a href="https://www.example.com">`).
*   **Semantic Elements:** Elements that convey meaning about their content, improving accessibility and SEO (Search Engine Optimization).

---

### 2. Essential HTML5 Document Structure

Every HTML5 document follows a basic structure.

**Key Concepts:**

*   **`<!DOCTYPE html>`:** Declares the document type and version of HTML. It's crucial for the browser to render the page correctly.
*   **`<html>`:** The root element of every HTML page. All other elements are nested within it.
    *   **`lang` attribute:** Specifies the language of the document (e.g., `<html lang="en">`). This is important for accessibility and search engines.
*   **`<head>`:** Contains meta-information about the HTML document, such as the title, character set, links to stylesheets, and scripts. This content is not displayed directly on the page.
    *   **`<meta charset="UTF-8">`:** Specifies the character encoding for the document. UTF-8 is the standard and supports a wide range of characters.
    *   **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:** Configures the viewport for responsive web design, ensuring the page scales properly on different devices.
    *   **`<title>`:** Defines the title of the web page, which appears in the browser tab or window title bar.
*   **`<body>`:** Contains all the visible content of the HTML document, such as headings, paragraphs, images, links, etc.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML5 Page</title>
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>
```

---

### 3. Semantic Page-Structure Elements

HTML5 introduced several semantic elements that define different sections of a web page, improving the structure and meaning of the content.

**Key Concepts:**

*   **`<h1>` to `<h6>` (Headings):** Used to define headings and subheadings. `<h1>` is the main heading, and the numbers increase for subheadings. There should ideally be only one `<h1>` per page for SEO and semantic clarity.
    *   **Purpose:** To structure content logically and indicate the hierarchy of information.
*   **`<p>` (Paragraph):** Used to define a paragraph of text. Browsers typically add some vertical space before and after each paragraph.
    *   **Purpose:** To group sentences into logical blocks of text.
*   **`<div>` (Division):** A generic container element used to group other elements for styling or structural purposes. It's a block-level element.
    *   **Purpose:** To divide the HTML document into sections. Often used with CSS for layout.
*   **`<span>`:** A generic inline container element used to group inline elements or parts of text.
    *   **Purpose:** To apply styles or manipulate specific parts of text without creating a new block.

**Examples:**

```html
<body>
    <h1>Welcome to My Website</h1>
    <p>This is the first paragraph of my introductory content.</p>
    <p>Here's another paragraph, providing more details.</p>

    <div>
        <h2>About Us</h2>
        <p>We are a company dedicated to...</p>
    </div>

    <div>
        <h3>Our Services</h3>
        <p>We offer a range of services including <span style="color: blue;">web design</span> and development.</p>
    </div>
</body>
```

**Important Point to Remember:** Use headings hierarchically. Don't skip heading levels (e.g., don't go from `<h2>` directly to `<h4>`).

---

### 4. Structuring Content with Lists

Lists are used to present information in an organized, often hierarchical, manner.

**Key Concepts:**

*   **`<ul>` (Unordered List):** Displays list items using bullet points.
*   **`<ol>` (Ordered List):** Displays list items using numbers or letters (depending on CSS styling).
*   **`<li>` (List Item):** Used within `<ul>` or `<ol>` to define each item in the list.

**Examples:**

**Unordered List:**

```html
<h2>My Hobbies</h2>
<ul>
    <li>Reading</li>
    <li>Hiking</li>
    <li>Coding</li>
</ul>
```

**Ordered List:**

```html
<h2>Steps to Bake a Cake</h2>
<ol>
    <li>Preheat oven to 180°C.</li>
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients and mix well.</li>
    <li>Pour batter into a greased pan.</li>
    <li>Bake for 30-35 minutes.</li>
</ol>
```

---

### 5. Navigation and Linking

Links are essential for navigating between different web pages or resources.

**Key Concepts:**

*   **`<a>` (Anchor) Element:** Creates a hyperlink.
    *   **`href` attribute:** Specifies the URL (Uniform Resource Locator) of the destination.
    *   **`target` attribute:** Specifies where to open the linked document (e.g., `_blank` opens in a new tab/window).
*   **`<nav>` (Navigation) Element:** Represents a section of a page that links to other pages or to parts within the page.
    *   **Purpose:** To group navigation links, improving accessibility and SEO.

**Examples:**

**Linking to another page:**

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html" target="_blank">Contact</a></li>
    </ul>
</nav>
```

**Linking to a specific section on the same page (using fragment identifiers):**

```html
<nav>
    <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
    </ul>
</nav>

<h2 id="section1">Section One</h2>
<p>Content for section one...</p>

<h2 id="section2">Section Two</h2>
<p>Content for section two...</p>
```
*Note: The `id` attribute is used to create an anchor point for the link.*

---

### 6. Adding Images

Images make web pages more visually engaging.

**Key Concepts:**

*   **`<img>` (Image) Element:** Embeds an image into the HTML document.
    *   **`src` attribute:** Specifies the path (URL) to the image file.
    *   **`alt` attribute:** Provides alternative text for the image. This is crucial for accessibility (screen readers) and if the image fails to load.
    *   **`width` and `height` attributes:** Specify the dimensions of the image (optional, but recommended for performance).
*   **`figure` and `figcaption`:**
    *   **`<figure>`:** Represents self-contained content, often an illustration, diagram, photo, code listing, etc., that is referenced in the main text.
    *   **`<figcaption>`:** Provides a caption for the content in the `<figure>` element.

**Examples:**

```html
<img src="images/logo.png" alt="Company Logo" width="150" height="50">

<figure>
    <img src="images/data-visualization.jpg" alt="Graph showing data trends">
    <figcaption>Figure 1: Annual sales performance graph.</figcaption>
</figure>
```

**Important Point to Remember:** Always provide meaningful `alt` text for your images.

---

### 7. Block-Level vs. Inline Elements

Understanding the display behavior of elements is crucial for layout.

**Key Concepts:**

*   **Block-Level Elements:**
    *   Always start on a new line.
    *   Take up the full width available (by default).
    *   Can have `width`, `height`, `margin`, and `padding` applied.
    *   **Examples:** `<h1>` to `<h6>`, `<p>`, `<div>`, `<ul>`, `<ol>`, `<li>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`.
*   **Inline Elements:**
    *   Do not start on a new line.
    *   Only take up as much width as necessary.
    *   Can have `margin-left`, `margin-right`, `padding-left`, and `padding-right` applied, but `margin-top`, `margin-bottom`, `padding-top`, and `padding-bottom` have no effect.
    *   Cannot have `width` or `height` applied directly.
    *   **Examples:** `<a>`, `<span>`, `<strong>`, `<em>`, `<img>` (though it behaves a bit like a block element in some contexts).

**Example Illustrating Difference:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Block vs Inline</title>
    <style>
        span {
            background-color: yellow;
            margin: 10px; /* This margin-top/bottom won't be visually apparent */
            padding: 5px;
        }
        div {
            background-color: lightblue;
            margin: 10px; /* This margin will be visible */
            padding: 10px;
        }
    </style>
</head>
<body>
    <div>This is a block element.</div>
    <div>This is another block element.</div>

    <p>This is a paragraph with <span>an inline element</span> inside it.</p>
    <p>And here is <span>another span</span>.</p>
</body>
</html>
```
In the above example, the `<div>` elements will appear on separate lines, each taking full width and showing their margins. The `<span>` elements will appear within the text flow, and while they have margins and padding, the top/bottom margins won't affect their vertical positioning relative to other lines.

---

### 8. New Semantic HTML5 Structural Elements

HTML5 introduced more specific semantic elements to further define the structure of a web page.

**Key Concepts:**

*   **`<header>`:** Represents introductory content, typically a group of introductory or navigational aids. It can contain heading elements, logos, search forms, etc.
*   **`<nav>`:** (Already discussed) Used for navigation links.
*   **`<main>`:** Represents the dominant content of the `<body>` of a document. There should only be one `<main>` element per document.
*   **`<article>`:** Represents a self-contained piece of content in a document, page, application, or site, which is intended to be independently distributable or reusable. (e.g., a blog post, a news story, a forum post).
*   **`<section>`:** Represents a generic section of a document, which doesn't have a more specific semantic element to represent it.
*   **`<aside>`:** Represents a portion of a document that is content which is only indirectly related to the main content of the document (e.g., sidebars, related links, definitions).
*   **`<footer>`:** Represents a footer for its nearest sectioning content or root element. It typically contains information about the author, copyright data, or links to related documents.

**Example of a well-structured HTML5 page:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Structured Web Page</title>
</head>
<body>

    <header>
        <h1>My Awesome Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>A Fascinating Article</h2>
            <p>This is the main content of the article. It discusses...</p>
            <img src="images/article-image.jpg" alt="An illustration related to the article">
            <section>
                <h3>Sub-section 1</h3>
                <p>Details about the first sub-section.</p>
            </section>
            <section>
                <h3>Sub-section 2</h3>
                <p>Details about the second sub-section.</p>
            </section>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 My Awesome Website. All rights reserved.</p>
    </footer>

</body>
</html>
```

**Important Point to Remember:** Use semantic elements whenever possible. They improve accessibility, SEO, and make your code more readable and maintainable.

---

### Practice Questions and Exercises:

**Question 1:** What is the purpose of the `<!DOCTYPE html>` declaration?
    *   a) To define the character encoding.
    *   b) To declare the document type and HTML version.
    *   c) To specify the page title.
    *   d) To link external stylesheets.

**Question 2:** Which HTML element is used to create a hyperlink?
    *   a) `<link>`
    *   b) `<img>`
    *   c) `<a>`
    *   d) `<href>`

**Question 3:** Explain the difference between `<ul>` and `<ol>`. Provide an example of when you might use each.

**Question 4:** What is the semantic difference between `<article>` and `<section>`?

**Question 5:** What are the two essential attributes for the `<img>` tag and why are they important?

**Question 6:** Create an HTML snippet that includes:
    *   A main heading (`<h1>`).
    *   A paragraph with a sentence highlighted using a `<span>` with a blue color.
    *   An unordered list of your three favorite fruits.
    *   A link to "https://www.google.com" that opens in a new tab.

---

### Answers:

**Answer 1:**
    *   b) To declare the document type and HTML version.

**Answer 2:**
    *   c) `<a>`

**Answer 3:**
    *   `<ul>` is for unordered lists, typically displayed with bullet points. You would use it for lists where the order doesn't matter, like a list of ingredients for a recipe before they are prepared.
    *   `<ol>` is for ordered lists, typically displayed with numbers or letters. You would use it for lists where the sequence is important, like a set of instructions or steps.

**Answer 4:**
    *   `<article>` represents a self-contained, independently distributable piece of content (e.g., a blog post, a news article).
    *   `<section>` represents a generic grouping of content within a document that doesn't have a more specific semantic element. It's often used to group related content.

**Answer 5:**
    *   `src`: Specifies the path or URL of the image file. It tells the browser where to find the image.
    *   `alt`: Provides alternative text for the image. This is crucial for accessibility (screen readers read this text to visually impaired users) and also displays if the image fails to load.

**Answer 6:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Practice Snippet</title>
</head>
<body>
    <h1>My Favorite Things</h1>
    <p>I love to eat <span style="color: blue;">apples</span>, bananas, and oranges.</p>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
    <p><a href="https://www.google.com" target="_blank">Visit Google</a></p>
</body>
</html>
```

---

### Key Points to Remember:

*   **`<!DOCTYPE html>` is essential for modern web pages.**
*   **The `<html>`, `<head>`, and `<body>` tags form the basic structure.**
*   **Use semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) to give meaning to your page structure.**
*   **Headings (`<h1>`-`<h6>`) should be used hierarchically.**
*   **`<a>` tags with the `href` attribute create links.**
*   **`<img>` tags with `src` and `alt` attributes display images.**
*   **Block-level elements start on new lines and take full width; inline elements flow within text.**
*   **`alt` text for images is critical for accessibility.**
*   **Use `target="_blank"` with caution, as it can sometimes disrupt user experience if overused.**
