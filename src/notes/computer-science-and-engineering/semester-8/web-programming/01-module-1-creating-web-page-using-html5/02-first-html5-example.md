---
title: "First HTML5 example"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc01"
status: "completed"
scrapedAt: "2026-05-20T17:27:50.810Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: First HTML5 Example

This module introduces you to the foundational language of the web: HyperText Markup Language (HTML). We'll begin by understanding the basic structure of an HTML document and explore a simple, yet fundamental, example to get you started on your web development journey.

---

### Learning Outcomes Covered:

*   **Understand the fundamental structure of an HTML5 document:** We will dissect the essential tags that form the skeleton of any web page.
*   **Identify and explain the purpose of key HTML5 elements:** You will learn about common tags like `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, and `<body>` and what they do.
*   **Create a basic HTML5 web page:** By the end of this topic, you'll be able to write and save your first simple HTML file.
*   **View an HTML5 page in a web browser:** We'll cover how to open and see your created HTML file rendered correctly.
*   **Explain the role of HTML in web development:** You'll grasp how HTML is the building block for all web content.

---

### 1. Introduction to HTML5

**HTML** stands for **HyperText Markup Language**. It is the standard markup language used to create and structure content on the World Wide Web. Think of it as the blueprint of a web page.

*   **Markup Language:** HTML uses tags to define the structure and content of a web page. These tags tell the browser how to display the information.
*   **HyperText:** This refers to the links that connect web pages to one another, allowing users to navigate between them.

**HTML5** is the latest major version of HTML, introducing new features and semantic elements to improve web page structure, accessibility, and functionality.

---

### 2. The Fundamental Structure of an HTML5 Document

Every HTML5 document follows a specific, standardized structure. This structure ensures that web browsers can correctly interpret and render the content.

Here's a breakdown of the essential components:

#### 2.1. `<!DOCTYPE html>` Declaration

*   **Purpose:** This declaration tells the web browser which version of HTML the document is written in.
*   **Key Concept:** For HTML5, it's a simplified declaration: `<!DOCTYPE html>`.
*   **Importance:** It's crucial for ensuring that the browser renders the page in "standards mode," which leads to more consistent rendering across different browsers.

#### 2.2. `<html>` Element (Root Element)

*   **Purpose:** This is the root element of every HTML page. All other HTML elements are contained within the `<html>` tags.
*   **Syntax:**
    ```html
    <!DOCTYPE html>
    <html>
        <!-- Content goes here -->
    </html>
    ```
*   **Attribute:** It often includes a `lang` attribute to specify the language of the document (e.g., `lang="en"` for English).

#### 2.3. `<head>` Element

*   **Purpose:** This element contains meta-information about the HTML document, which is not displayed directly on the page itself.
*   **Key Information within `<head>`:**
    *   **`<title>`:** Defines the title of the web page. This title is displayed in the browser's title bar or tab.
    *   **`<meta>` tags:** Provide metadata about the HTML document, such as character encoding, description, keywords, and viewport settings.
    *   **`<link>` tags:** Used to link external resources like CSS stylesheets and favicons.
    *   **`<style>` tags:** Used to embed CSS directly within the HTML document.
    *   **`<script>` tags:** Used to embed or link JavaScript code.

#### 2.4. `<title>` Element

*   **Purpose:** Specifies the title for the document.
*   **Example:**
    ```html
    <head>
        <title>My First HTML Page</title>
    </head>
    ```

#### 2.5. `<body>` Element

*   **Purpose:** This element contains the visible content of the HTML document. Everything that the user sees on the web page – text, images, links, tables, etc. – resides within the `<body>` tags.

---

### 3. Your First HTML5 Example

Let's put all these elements together to create a very basic HTML5 web page.

**Example Code (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML5 Page</title>
</head>
<body>
    <h1>Welcome to my First Web Page!</h1>
    <p>This is a simple paragraph of text. HTML is fun!</p>
</body>
</html>
```

**Explanation of New Elements in the Example:**

*   **`<meta charset="UTF-8">`:**
    *   **Purpose:** Specifies the character encoding for the document. `UTF-8` is the recommended encoding for modern web pages, supporting a wide range of characters.
*   **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:**
    *   **Purpose:** This is crucial for responsive web design. It tells the browser to set the width of the page to the width of the device and to set the initial zoom level to 1.0. This ensures your page looks good on various screen sizes, especially mobile devices.
*   **`<h1>`:**
    *   **Purpose:** Defines a top-level heading. HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important).
*   **`<p>`:**
    *   **Purpose:** Defines a paragraph of text.

---

### 4. Viewing Your HTML5 Page in a Web Browser

Once you have created your HTML file (e.g., `index.html`), you need to open it with a web browser to see how it looks.

**Steps:**

1.  **Save the file:** Ensure your code is saved in a plain text file with the `.html` extension (e.g., `index.html`).
2.  **Locate the file:** Find where you saved the `index.html` file on your computer.
3.  **Open with a browser:**
    *   **Windows:** Double-click the file, or right-click and choose "Open with" and select your preferred browser (Chrome, Firefox, Edge, etc.).
    *   **macOS:** Double-click the file, or right-click and choose "Open With" and select your preferred browser.
    *   **Linux:** Similar to Windows and macOS, you can usually double-click or right-click to open.

You should now see your web page displayed in the browser, with the heading and paragraph as you defined them.

---

### 5. The Role of HTML in Web Development

*   **Structure and Content:** HTML is the backbone of any web page. It provides the semantic structure and organizes the content.
*   **Browser Interpretation:** Web browsers read HTML files and interpret the tags to render the content visually.
*   **Foundation for Styling and Interactivity:** HTML works hand-in-hand with CSS (Cascading Style Sheets) for styling the appearance of web pages and JavaScript for adding interactivity and dynamic behavior.

---

### 6. Important Points to Remember

*   **Case Insensitivity (Mostly):** HTML tags are generally not case-sensitive (`<p>` is the same as `<P>`), but it's a best practice to use lowercase for consistency.
*   **Closing Tags:** Most HTML elements require a closing tag (e.g., `<p>...</p>`). Some elements are "empty" and do not have a closing tag (e.g., `<br>`, `<hr>`, `<img>` in older HTML, but self-closing tags are the norm now like `<img src="..." alt="...">`).
*   **Indentation:** While not strictly required for rendering, proper indentation makes your HTML code much more readable and maintainable.
*   **Semantics:** HTML5 encourages the use of semantic elements (like `<article>`, `<nav>`, `<header>`, `<footer>`) that describe the meaning of their content, improving accessibility and SEO. We'll explore these more in later modules.
*   **Text Editors:** Use a plain text editor (like Notepad, VS Code, Sublime Text, Atom) to write your HTML code, not a word processor (like Microsoft Word).

---

### Practice Questions/Exercises

**Question 1:**
What is the primary purpose of HTML in web programming?

**Question 2:**
Which declaration must be at the beginning of every HTML5 document?

**Question 3:**
What is the purpose of the `<title>` tag in an HTML document, and where is its content typically displayed?

**Question 4:**
Fill in the blanks to complete the basic HTML5 structure:
```html
<!DOCTYPE html>
____ lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    ____ This is my practice paragraph.
</body>
</html>
```

**Question 5:**
Explain the role of the `<meta name="viewport"...>` tag.

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose of HTML in web programming is to structure and organize the content of a web page. It defines the elements like headings, paragraphs, images, links, etc., and their relationships.

**Answer 2:**
The declaration that must be at the beginning of every HTML5 document is `<!DOCTYPE html>`.

**Answer 3:**
The `<title>` tag defines the title of the web page. Its content is typically displayed in the browser's title bar or in the tab of the browser window.

**Answer 4:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p> This is my practice paragraph.</p>
</body>
</html>
```
*Note: The blank in the `<body>` needed the closing `</p>` tag as well, which was implicitly required by the structure.*

**Answer 5:**
The `<meta name="viewport"...>` tag is used for responsive web design. It tells the browser to control the page's dimensions and scaling, ensuring that it displays correctly on different devices, especially mobile phones. `width=device-width` sets the width to the device's screen width, and `initial-scale=1.0` sets the initial zoom level when the page is first loaded.
