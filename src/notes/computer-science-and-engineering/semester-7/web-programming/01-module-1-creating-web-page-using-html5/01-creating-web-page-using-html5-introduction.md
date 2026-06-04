---
title: "Creating Web Page using HTML5  - Introduction"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0a0"
status: "completed"
scrapedAt: "2026-05-20T17:12:07.668Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Creating Web Page using HTML5 - Introduction

---

### 1. Introduction to Web Pages and the World Wide Web

The **World Wide Web (WWW)** is a global information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.

A **web page** is a document that can be displayed in a web browser. It's essentially a file written in a markup language, most commonly HTML, that tells the browser how to display content like text, images, and links.

**Key Concepts:**

*   **Client-Server Model:** The web operates on a client-server model.
    *   **Client:** Your web browser (e.g., Chrome, Firefox, Safari) requests information.
    *   **Server:** A computer that stores web pages and responds to client requests.
*   **HTTP/HTTPS:** The **Hypertext Transfer Protocol (HTTP)** and its secure version **HTTPS** are the underlying protocols used to transfer data between clients and servers.
*   **URLs (Uniform Resource Locators):** The unique address of a web resource (e.g., `https://www.example.com/index.html`).

---

### 2. What is HTML?

**HTML (Hypertext Markup Language)** is the standard markup language for documents designed to be displayed in a web browser. It's not a programming language; it's a **markup language**, meaning it uses tags to describe the structure and content of a web page.

**Key Concepts:**

*   **Markup:** The process of adding annotations to text to indicate its structure, formatting, or relationship to other text.
*   **Tags:** HTML uses tags enclosed in angle brackets (`<tagname>`) to mark up elements.
    *   **Opening Tag:** Marks the beginning of an element (e.g., `<p>`).
    *   **Closing Tag:** Marks the end of an element (e.g., `</p>`). The closing tag always has a forward slash `/` before the tag name.
    *   **Empty/Void Elements:** Elements that do not require a closing tag and do not have content (e.g., `<br>`, `<img>`, `<hr>`).
*   **Elements:** An HTML element consists of a start tag, content, and an end tag.
    *   Example: `<p>This is a paragraph.</p>` (The entire thing is the `<p>` element).
*   **Attributes:** Provide additional information about an HTML element. They are always specified in the start tag and usually come in name/value pairs (e.g., `name="value"`).
    *   Example: `<a href="https://www.example.com">Click here</a>` ( `href` is an attribute of the `<a>` tag).

---

### 3. Evolution of HTML (Briefly)

*   **HTML 1.0:** Basic text formatting, limited features.
*   **HTML 2.0:** Introduced more structure and interactivity.
*   **HTML 3.2:** Added tables and improved styling capabilities.
*   **HTML 4.01:** Introduced frames, more robust form controls, and better semantic markup.
*   **XHTML:** A stricter, XML-based version of HTML.
*   **HTML5:** The latest version, introduced new semantic elements, multimedia support (audio, video), drawing APIs (Canvas), local storage, and improved form input types.

---

### 4. Why HTML5?

HTML5 is the current standard for creating web pages and offers significant advantages:

**Key Features and Benefits of HTML5:**

*   **Semantic Elements:** Provides new elements that clearly define the meaning of the content (e.g., `<header>`, `<footer>`, `<nav>`, `<article>`, `<aside>`, `<section>`). This improves SEO (Search Engine Optimization) and accessibility.
*   **Multimedia Support:** Native support for audio (`<audio>`) and video (`<video>`) without requiring plugins like Flash.
*   **Graphics and Drawing:**
    *   **`<canvas>` element:** Allows for drawing graphics, animations, and games using JavaScript.
    *   **SVG (Scalable Vector Graphics):** Inline SVG support for vector-based graphics.
*   **Offline Capabilities:**
    *   **Application Cache:** Allows web applications to work offline.
    *   **Web Storage (localStorage and sessionStorage):** Enables storing data locally in the browser.
*   **Improved Forms:** New input types (e.g., `email`, `number`, `date`, `color`) and attributes (e.g., `required`, `placeholder`) for richer user input.
*   **Geolocation API:** Allows web applications to access the user's location.
*   **Better Browser Compatibility:** Designed for more consistent rendering across different browsers.
*   **Performance Improvements:** Optimized for faster loading and rendering.

---

### 5. Your First HTML5 Web Page

Every HTML document has a basic structure.

**Essential Components of an HTML5 Document:**

*   **`<!DOCTYPE html>`:** The document type declaration. It tells the browser that the document is an HTML5 document. This **must** be the very first line of code.
*   **`<html>` tag:** The root element of an HTML page. All other elements are contained within this tag.
*   **`<head>` tag:** Contains meta-information about the HTML document, such as the title, character set, links to stylesheets, and scripts. This content is not directly displayed on the web page.
    *   **`<meta charset="UTF-8">`:** Specifies the character encoding for the document. UTF-8 is the recommended standard for worldwide compatibility.
    *   **`<title>` tag:** Sets the title of the web page, which appears in the browser tab or window title bar.
*   **`<body>` tag:** Contains the visible content of the HTML document – the text, images, links, tables, etc., that the user sees.

**Example: A Simple HTML5 Page**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
</head>
<body>

    <h1>Welcome to My Web Page!</h1>
    <p>This is a simple paragraph of text.</p>

</body>
</html>
```

**How to Create and View an HTML File:**

1.  **Open a text editor:** Use Notepad (Windows), TextEdit (macOS), VS Code, Sublime Text, Atom, etc.
2.  **Type or paste the HTML code.**
3.  **Save the file:**
    *   Choose a descriptive name (e.g., `index.html`, `about.html`).
    *   **Crucially, save it with the `.html` or `.htm` extension.**
    *   Ensure the file type is set to "All Files" if using Notepad to avoid saving as `.txt`.
4.  **Open the file in a web browser:** Double-click the saved `.html` file, or drag and drop it into your web browser window.

---

### 6. Basic HTML Tags for Content

HTML provides various tags to structure and display content.

**Commonly Used Tags:**

*   **Headings:**
    *   `<h1>` to `<h6>`: Define headings. `<h1>` is the most important heading, and `<h6>` is the least important.
    *   Example: `<h1>Main Heading</h1>`, `<h2>Subheading</h2>`
*   **Paragraphs:**
    *   `<p>`: Defines a paragraph of text.
    *   Example: `<p>This is a paragraph about web programming.</p>`
*   **Line Breaks:**
    *   `<br>`: Inserts a single line break. Useful for poem lines or addresses.
    *   Example:
        ```html
        <p>
            This is line one.<br>
            This is line two.
        </p>
        ```
*   **Horizontal Rules:**
    *   `<hr>`: Creates a thematic break between paragraph-level elements, displayed as a horizontal line.
    *   Example: `<p>Some content.</p><hr><p>More content.</p>`
*   **Text Formatting:**
    *   `<strong>` or `<b>`: Bold text. `<strong>` indicates strong importance.
    *   `<em>` or `<i>`: Italic text. `<em>` indicates emphasis.
    *   `<u>`: Underlined text (use with caution, as it can be confused with links).
    *   `<sub>`: Subscript text (e.g., H₂O).
    *   `<sup>`: Superscript text (e.g., x²).
    *   Example: `<p>This text is <strong>important</strong> and <em>emphasized</em>.</p>`
*   **Links (Hyperlinks):**
    *   `<a>`: Creates a hyperlink to another web page, file, or location within the same page.
    *   **`href` attribute:** Specifies the URL of the linked resource.
    *   Example: `<a href="https://www.google.com">Go to Google</a>`
    *   **Links to other pages in your site:** `<a href="about.html">About Us</a>`
    *   **Links to a specific section on the same page (using IDs):** `<a href="#section2">Jump to Section 2</a>`
*   **Images:**
    *   `<img>`: Embeds an image into the HTML document. This is an empty/void element.
    *   **`src` attribute:** Specifies the path to the image file.
    *   **`alt` attribute:** Provides alternative text for the image. **Crucial for accessibility and SEO.** Displayed if the image cannot be loaded.
    *   Example: `<img src="images/logo.png" alt="Company Logo">`
*   **Unordered Lists:**
    *   `<ul>`: Defines an unordered list (bullet points).
    *   `<li>`: Defines a list item within `<ul>` or `<ol>`.
    *   Example:
        ```html
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        ```
*   **Ordered Lists:**
    *   `<ol>`: Defines an ordered list (numbered or lettered).
    *   `<li>`: Defines a list item.
    *   Example:
        ```html
        <ol>
            <li>First step</li>
            <li>Second step</li>
            <li>Third step</li>
        </ol>
        ```
*   **Tables:**
    *   `<table>`: Defines an HTML table.
    *   `<tr>`: Defines a table row.
    *   `<th>`: Defines a table header cell. Usually bold and centered by default.
    *   `<td>`: Defines a standard table data cell.
    *   Example:
        ```html
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Alice</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </table>
        ```

---

### 7. Best Practices and Important Points to Remember

*   **Always start with `<!DOCTYPE html>`**.
*   **Use `<html>`, `<head>`, and `<body>` tags correctly.**
*   **Use `UTF-8` character encoding:** `<meta charset="UTF-8">`.
*   **Provide meaningful `title` for your pages.**
*   **Use semantic HTML5 elements** (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.) for better structure, accessibility, and SEO.
*   **Always include the `alt` attribute for `<img>` tags.**
*   **Close all tags properly**, except for void/empty elements like `<br>`, `<img>`, `<hr>`.
*   **Indent your code** to make it readable.
*   **Validate your HTML** using online validators (like the W3C Markup Validation Service) to catch errors.
*   **Keep your HTML focused on content structure**, while styling is handled by CSS and interactivity by JavaScript.

---

### Practice Questions / Exercises

**Question 1:**

What is the primary purpose of HTML in web programming?

**Question 2:**

What is the mandatory first line of every HTML5 document?

**Question 3:**

Which tag is used to define the title of a web page, displayed in the browser tab?

**Question 4:**

Provide an example of an HTML tag that is an "empty" or "void" element.

**Question 5:**

Explain the difference between `<strong>` and `<em>` tags in terms of their semantic meaning.

**Question 6:**

Write the HTML code to create a link that points to `https://www.example.com` and displays the text "Visit Example.com".

**Question 7:**

Write the HTML code to display an image named `photo.jpg` located in an `images` folder, with the alternative text "A scenic view".

**Question 8:**

What is the semantic HTML5 element used to define the main content of a document?

**Question 9:**

Create a simple HTML5 page that includes:
*   A main heading: "My Awesome Page"
*   A paragraph: "This is the first paragraph."
*   An unordered list with two items: "Apple" and "Banana".

**Question 10:**

What does the `alt` attribute in an `<img>` tag do, and why is it important?

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose of HTML is to structure the content of a web page and define its meaning using markup tags. It tells the browser what elements are headings, paragraphs, links, images, etc.

**Answer 2:**
The mandatory first line is `<!DOCTYPE html>`.

**Answer 3:**
The `<title>` tag is used to define the title of a web page.

**Answer 4:**
An example of an empty/void element is `<br>` (line break), `<img>` (image), or `<hr>` (horizontal rule).

**Answer 5:**
*   `<strong>` is used to indicate content that has strong importance, seriousness, or urgency. Browsers typically render it as bold text.
*   `<em>` is used to indicate emphasis on text, suggesting stress or a different tone. Browsers typically render it as italic text.

**Answer 6:**
```html
<a href="https://www.example.com">Visit Example.com</a>
```

**Answer 7:**
```html
<img src="images/photo.jpg" alt="A scenic view">
```

**Answer 8:**
The semantic HTML5 element used to define the main content of a document is `<main>`.

**Answer 9:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Awesome Page</title>
</head>
<body>

    <h1>My Awesome Page</h1>
    <p>This is the first paragraph.</p>

    <ul>
        <li>Apple</li>
        <li>Banana</li>
    </ul>

</body>
</html>
```

**Answer 10:**
The `alt` attribute in an `<img>` tag provides alternative text for the image. It is important because:
*   **Accessibility:** Screen readers read the `alt` text to visually impaired users, describing the image content.
*   **Image Loading Issues:** If the image file cannot be loaded (e.g., broken link, slow connection), the `alt` text is displayed in its place.
*   **SEO:** Search engines can use the `alt` text to understand the image content and index it accordingly.

---
This concludes the introduction to creating web pages using HTML5. You've learned about the fundamentals of the web, what HTML is, why HTML5 is important, the basic structure of an HTML document, and some common tags for content creation.
