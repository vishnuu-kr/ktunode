---
title: "First HTML5 example"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0a1"
status: "completed"
scrapedAt: "2026-05-20T17:12:08.633Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Pages using HTML5

## Topic: First HTML5 Example

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental structure of an HTML5 document.
*   Identify and explain the purpose of key HTML5 elements used in a basic web page.
*   Write and interpret a simple "Hello, World!" HTML5 document.
*   Recognize the role of the `<!DOCTYPE html>` declaration.
*   Understand the function of the `<html>`, `<head>`, and `<body>` elements.
*   Create a title for a web page using the `<title>` element.
*   Add basic text content to a web page using paragraph tags.

---

### 1. Introduction to HTML5

*   **HTML (HyperText Markup Language):** The standard markup language used to create web pages. It provides the **structure and content** of a web page.
*   **HTML5:** The latest version of HTML, introducing new features and improvements to support modern web development.
*   **Web Browser:** Software like Chrome, Firefox, Edge, Safari, etc., that interprets HTML code and displays it as a readable web page.

---

### 2. The Fundamental Structure of an HTML5 Document

Every HTML5 document follows a consistent basic structure. This structure tells the browser how to interpret and display the content.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML5 Page</title>
</head>
<body>

    <!-- Content goes here -->

</body>
</html>
```

---

### 3. Key HTML5 Elements and Their Purpose

Let's break down the essential elements in the basic structure:

#### 3.1. `<!DOCTYPE html>`

*   **Definition:** This declaration is a **processing instruction** that tells the web browser which version of HTML the document is written in.
*   **Purpose:** It ensures that the browser renders the page in **standards mode**, meaning it follows the latest HTML specifications, leading to more consistent rendering across different browsers.
*   **Important Point:** It **must be the very first line** of your HTML document. No other text or characters should precede it.

#### 3.2. `<html>`

*   **Definition:** This is the **root element** of every HTML page. All other HTML elements are contained within this tag.
*   **Purpose:** It signifies the beginning and end of the HTML document.
*   **Attributes:**
    *   `lang`: Specifies the language of the document's content (e.g., `lang="en"` for English). This is important for accessibility and search engines.

    ```html
    <html lang="en">
    ```

#### 3.3. `<head>`

*   **Definition:** This element contains **meta-information** about the HTML document, such as its title, character set, links to stylesheets, and scripts.
*   **Purpose:** The content within the `<head>` is **not directly displayed** on the web page itself, but rather provides instructions and data for the browser and search engines.
*   **Key Elements within `<head>`:**
    *   **`<meta charset="UTF-8">`:**
        *   **Definition:** Specifies the character encoding for the document.
        *   **Purpose:** `UTF-8` is the most common and recommended character encoding, supporting a wide range of characters and symbols from different languages. It prevents display issues with special characters.
    *   **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:**
        *   **Definition:** Configures the viewport, which is the user's visible area of a web page.
        *   **Purpose:** `width=device-width` sets the width of the page to follow the screen-width of the device. `initial-scale=1.0` sets the initial zoom level when the page is first loaded. This is crucial for making web pages **responsive** and look good on different devices (desktops, tablets, phones).
    *   **`<title>`:**
        *   **Definition:** Defines the title of the HTML document.
        *   **Purpose:** The title appears in the browser's title bar or tab, and is used by search engines to display the search result snippet. It's also important for **browser bookmarks**.

#### 3.4. `<body>`

*   **Definition:** This element contains the **visible content** of the HTML document.
*   **Purpose:** Everything that the user sees and interacts with on a web page – text, images, links, tables, etc. – is placed within the `<body>` tags.

---

### 4. Creating a Simple "Hello, World!" HTML5 Example

Let's combine all the elements to create our first functional HTML5 page.

**Example 1: Basic "Hello, World!"**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>

    <h1>Welcome to My Web Page!</h1>
    <p>Hello, World!</p>
    <p>This is my very first HTML5 document.</p>

</body>
</html>
```

**Explanation of New Elements in this Example:**

*   **`<h1>`:**
    *   **Definition:** Defines a **top-level heading**.
    *   **Purpose:** Used for the most important heading on the page. HTML offers heading levels from `<h1>` (most important) to `<h6>` (least important).
*   **`<p>`:**
    *   **Definition:** Defines a **paragraph** of text.
    *   **Purpose:** Used to structure textual content into distinct paragraphs, ensuring proper spacing and readability.

---

### 5. How to View Your HTML File

1.  **Save the code:** Open a plain text editor (like Notepad on Windows, TextEdit on Mac, or VS Code, Sublime Text, Atom) and paste the HTML code. Save the file with a `.html` extension (e.g., `index.html`, `mypage.html`).
2.  **Open in a browser:** Locate the saved `.html` file on your computer and double-click it. It should open automatically in your default web browser.

---

### 6. Practice Questions and Exercises

**Exercise 1: Structure Identification**

Consider the following HTML snippet:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <p>Some content.</p>
</body>
</html>
```

1.  What is the purpose of `<!DOCTYPE html>`?
2.  Which element acts as the root of the entire document?
3.  Where would you typically place information like character encoding or the page title?
4.  What is the primary function of the `<body>` element?

**Exercise 2: Creating Your First Page**

Write an HTML5 document that:

1.  Declares the document type as HTML5.
2.  Sets the language to English.
3.  Has a character encoding of `UTF-8`.
4.  Includes a viewport meta tag for responsiveness.
5.  Sets the page title to "My Awesome Page".
6.  Includes a main heading `<h1>` that says "My First Web Page".
7.  Includes two paragraphs `<p>`:
    *   The first paragraph should say "This is a paragraph of text."
    *   The second paragraph should say "HTML is fun!"

**Exercise 3: Modifying Content**

Take the "Hello, World!" example provided earlier. Modify the content of the `<h1>` tag to "Learning HTML5" and add a third paragraph `<p>` that says "I am learning web programming."

---

### 7. Answers to Practice Questions

**Answers to Exercise 1:**

1.  `<!DOCTYPE html>` tells the browser that the document is written in HTML5, ensuring it's rendered in standards mode.
2.  The `<html>` element is the root element.
3.  The `<head>` section is where you would place information like character encoding and the page title.
4.  The `<body>` element contains all the visible content of the web page that the user sees.

**Answers to Exercise 2:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Page</title>
</head>
<body>

    <h1>My First Web Page</h1>
    <p>This is a paragraph of text.</p>
    <p>HTML is fun!</p>

</body>
</html>
```

**Answers to Exercise 3:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML5 Page</title>
</head>
<body>

    <h1>Learning HTML5</h1>
    <p>Hello, World!</p>
    <p>This is my very first HTML5 document.</p>
    <p>I am learning web programming.</p>

</body>
</html>
```

---

### 8. Important Points to Remember

*   Always start your HTML5 document with `<!DOCTYPE html>`.
*   The `<html>` element encloses all other content.
*   The `<head>` section contains meta-information and is not directly displayed.
*   The `<title>` element is crucial for browser tabs and search results.
*   The `<body>` element contains everything visible to the user.
*   Use meaningful element tags like `<h1>` for headings and `<p>` for paragraphs to structure your content correctly.
*   Save your HTML files with the `.html` extension.
*   Use plain text editors for writing HTML.

---
