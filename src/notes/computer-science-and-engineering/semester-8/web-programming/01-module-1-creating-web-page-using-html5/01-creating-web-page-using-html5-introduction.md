---
title: "Creating Web Page using HTML5  - Introduction"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc00"
status: "completed"
scrapedAt: "2026-05-20T17:27:50.170Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Pages using HTML5

## Topic: Creating Web Pages using HTML5 - Introduction

### 1. Understanding the Basics of Web Pages and HTML

**What is the World Wide Web (WWW)?**

*   A vast interconnected network of documents and other resources, linked by hyperlinks and URLs.
*   Accessed via the internet.
*   It's not the same as the Internet itself, but rather a service that runs on the Internet.

**What is a Web Page?**

*   A document or resource that can be accessed on the World Wide Web.
*   Typically written in HTML (HyperText Markup Language).
*   Can contain text, images, videos, audio, links, and other multimedia elements.

**What is HTML?**

*   **H**yper**T**ext **M**arkup **L**anguage.
*   The standard markup language used to create web pages.
*   It's a **markup language**, not a programming language, meaning it describes the structure and content of a document rather than defining computational logic.
*   Uses **tags** enclosed in angle brackets (`<tag>`) to mark up content.
*   Tags tell the web browser how to display the content.

### 2. Evolution of HTML

*   **HTML (1991):** The first version, very basic, allowed for simple text and links.
*   **HTML+ (1993):** Introduced features like tables and forms.
*   **HTML 2.0 (1995):** Standardized many of the features introduced in HTML+.
*   **HTML 3.2 (1997):** Introduced new elements like `<font>`, `<body>`, and support for tables with borders.
*   **HTML 4.01 (1999):** Introduced features like frames, layers, and improved accessibility.
*   **XHTML (2000):** A stricter, XML-based version of HTML.
*   **HTML5 (2014 - W3C Recommendation):** The current standard. A significant update with new features for multimedia, semantics, and mobile development.

### 3. Key Features and Advantages of HTML5

*   **Semantic Markup:** Introduces new semantic elements like `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, and `<aside>` that provide meaning to the content, improving SEO and accessibility.
*   **Multimedia Support:** Native support for audio (`<audio>`) and video (`<video>`) elements, eliminating the need for plugins like Flash.
*   **Graphics:**
    *   **Canvas:** A JavaScript API for drawing graphics, animations, and games.
    *   **SVG (Scalable Vector Graphics):** A vector image format for scalable graphics.
*   **Offline Storage:**
    *   **Web Storage (localStorage and sessionStorage):** Allows websites to store data locally on the user's browser, enabling offline functionality and faster loading.
*   **Application Cache:** Allows web applications to cache resources for offline use.
*   **Forms 2.0:** Enhancements to form elements, including new input types (e.g., `email`, `date`, `number`) and attributes for validation.
*   **Drag and Drop API:** Allows users to drag and drop elements on a web page.
*   **Geolocation API:** Allows web applications to access the user's location with their permission.
*   **Web Workers:** Allow scripts to run in the background without blocking the user interface.
*   **New Elements:**
    *   `<main>`: Represents the dominant content of the `<body>` of a document.
    *   `<figure>` and `<figcaption>`: For embedding images, charts, photos, code listings, etc., along with their captions.
    *   `<mark>`: Highlights text.
    *   `<time>`: Represents a specific period in time or a date/time.

### 4. Setting Up Your Development Environment

To start creating web pages, you need two fundamental tools:

1.  **Text Editor:**
    *   Used to write and edit HTML code.
    *   Examples:
        *   **Simple Editors:** Notepad (Windows), TextEdit (macOS)
        *   **Code Editors (Recommended):** Visual Studio Code (VS Code), Sublime Text, Atom, Notepad++
    *   **Key Features of Code Editors:** Syntax highlighting, autocompletion, code snippets, integrated terminal.

2.  **Web Browser:**
    *   Used to render and display your HTML code.
    *   Examples: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.
    *   **Developer Tools:** Most modern browsers have built-in developer tools (often accessed by pressing `F12` or right-clicking and selecting "Inspect") that are crucial for debugging and inspecting your web pages.

### 5. Anatomy of an HTML5 Document

A basic HTML5 document has a specific structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website!</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

Let's break down each part:

*   `<!DOCTYPE html>`:
    *   **Declaration:** Declares the document type and version of HTML.
    *   In HTML5, it's simply `<!DOCTYPE html>`. This tells the browser to render the page in "standards mode."
*   `<html lang="en">`:
    *   **Root Element:** The root element of every HTML page.
    *   `lang="en"`: An attribute that specifies the language of the document (in this case, English). This is important for accessibility and search engines.
*   `<head>`:
    *   **Container for Metadata:** Contains meta-information about the HTML document that is not displayed directly on the page.
    *   Includes:
        *   `<meta charset="UTF-8">`:
            *   **Character Encoding:** Specifies the character encoding for the document. `UTF-8` is the universal standard and supports a wide range of characters.
        *   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`:
            *   **Viewport Meta Tag:** Essential for responsive web design. It tells the browser to set the width of the page to the device's width and the initial zoom level to 1.0.
        *   `<title>My First Web Page</title>`:
            *   **Document Title:** Specifies the title of the HTML document, which appears in the browser tab or window title bar.
*   `<body>`:
    *   **Document Body:** Contains the visible content of the HTML document.
    *   This is where all the text, images, links, and other elements that users see are placed.

### 6. Creating Your First HTML5 File

**Steps:**

1.  **Open your text editor.**
2.  **Type or paste the basic HTML5 structure** shown above.
3.  **Save the file** with an `.html` extension (e.g., `index.html`, `my_page.html`).
    *   **Important:** `index.html` is conventionally used as the homepage of a website.
4.  **Open the saved HTML file in your web browser.** You can usually do this by double-clicking the file, or by using the "File > Open File" option in your browser.

---

### Practice Questions & Exercises

**Question 1:**
What does HTML stand for?
a) Hyperlink and Text Markup Language
b) HyperText Markup Language
c) High-Level Text Machine Language
d) Hyper Transfer Markup Language

**Question 2:**
Which of the following is the declaration that tells the browser to render the page in standards mode in HTML5?
a) `<!DOCTYPE html>`
b) `<!DOCTYPE html5>`
c) `<DOCTYPE html>`
d) `<!HTML5>`

**Question 3:**
What is the purpose of the `<head>` section in an HTML document?
a) To contain the visible content of the web page.
b) To define the structure of the document.
c) To contain metadata about the HTML document, not displayed on the page.
d) To link to external CSS or JavaScript files.

**Question 4:**
Which HTML5 element is used to embed video content?
a) `<video>`
b) `<movie>`
c) `<media>`
d) `<play>`

**Question 5:**
What is the recommended character encoding for modern web pages?
a) ASCII
b) ISO-8859-1
c) UTF-8
d) Unicode

**Exercise 1: Create a Simple "About Me" Page**

1.  Open your text editor.
2.  Create a new file.
3.  Use the basic HTML5 structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
4.  In the `<head>` section:
    *   Set the character encoding to `UTF-8`.
    *   Set the viewport meta tag.
    *   Set the title to "About Me - [Your Name]".
5.  In the `<body>` section:
    *   Add a main heading (`<h1>`) with your name.
    *   Add a paragraph (`<p>`) introducing yourself.
    *   Add another paragraph (`<p>`) with a fun fact about you.
6.  Save the file as `about_me.html`.
7.  Open `about_me.html` in your web browser to view your page.

---

### Answers

**Answer 1:**
b) HyperText Markup Language

**Answer 2:**
a) `<!DOCTYPE html>`

**Answer 3:**
c) To contain metadata about the HTML document, not displayed on the page. (Note: While `<head>` can contain links to external files like CSS and JS, its primary purpose is metadata.)

**Answer 4:**
a) `<video>`

**Answer 5:**
c) UTF-8

**Answer for Exercise 1:**
The output in the browser should display your name as a main heading, followed by two paragraphs of text. The browser tab should show "About Me - [Your Name]".

---

### Important Points to Remember

*   **HTML is a markup language, not a programming language.** It describes content structure.
*   **HTML5 is the current standard**, offering significant improvements over previous versions.
*   Always start your HTML5 document with `<!DOCTYPE html>`.
*   Use the `<html lang="...">` attribute to declare the document's language.
*   The `<head>` section contains metadata, while the `<body>` section contains visible content.
*   The `<title>` tag is crucial for the browser tab/window.
*   Use semantic HTML5 elements (`<header>`, `<footer>`, `<nav>`, etc.) for better structure and accessibility.
*   A `.html` extension is required when saving HTML files.
*   Developer tools in your browser are essential for inspecting and debugging your code.
