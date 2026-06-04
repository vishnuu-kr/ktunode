---
title: "Structuring Data"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc1e"
status: "completed"
scrapedAt: "2026-05-20T17:28:10.653Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Structuring Data

---

### Learning Outcomes:

*   Understand the importance of structuring data on a web page.
*   Identify and use semantic HTML5 elements for structuring content.
*   Create lists (ordered, unordered, and definition lists) to organize information.
*   Use tables to present tabular data effectively.
*   Create forms to gather user input.

---

### 1. Introduction to Structuring Data on the Web

**Why is structuring data important?**

Structuring data is crucial for several reasons:

*   **Readability and Understandability:** Well-structured content is easier for humans to read and comprehend. It guides the user through the information logically.
*   **Accessibility:** Semantic HTML elements are understood by assistive technologies (like screen readers for visually impaired users) and web browsers, ensuring content is accessible to everyone.
*   **Search Engine Optimization (SEO):** Search engines use the structure of your HTML to understand the content's meaning and relevance, which helps in ranking your pages higher in search results.
*   **Maintainability:** Organized code is easier to update, debug, and manage in the long run.
*   **Responsiveness:** Proper structure allows for easier adaptation of content to different screen sizes (desktops, tablets, mobiles).

---

### 2. Semantic HTML5 Elements for Structuring Content

Semantic HTML elements provide meaning and purpose to the content they enclose. They tell the browser and other machines (like search engines) what kind of content it is, rather than just how it looks.

#### Key Semantic Elements:

*   **`<header>`:** Represents introductory content, typically a group of introductory or navigational aids. It might contain headings, logos, navigation menus, etc.
    *   **Example:**
        ```html
        <header>
          <h1>My Awesome Website</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        ```

*   **`<nav>`:** Represents a section of a page that links to other pages or to parts within the page. It's primarily used for site navigation.
    *   **Example:** (See `<header>` example above)

*   **`<main>`:** Represents the dominant content of the `<body>` of a document. The content within the `<main>` element should be unique to the document.
    *   **Important:** There should only be one `<main>` element per document.
    *   **Example:**
        ```html
        <main>
          <article>
            <h2>Latest News</h2>
            <p>Content of the latest news article...</p>
          </article>
        </main>
        ```

*   **`<article>`:** Represents a self-contained piece of content in a document, page, application, or site, which is intended to be independently distributable or reusable. Examples include a forum post, a magazine or newspaper article, a blog post, an interactive widget, etc.
    *   **Example:** (See `<main>` example above)

*   **`<aside>`:** Represents a portion of a document that is conceptually related to the content around it, but which can be considered separate from that content. Asides are often presented as sidebars or call-out boxes.
    *   **Example:**
        ```html
        <article>
          <h2>Main Content</h2>
          <p>This is the main content of the article.</p>
          <aside>
            <h3>Related Links</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </ul>
          </aside>
        </article>
        ```

*   **`<footer>`:** Represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of a section, copyright data, or links to related documents.
    *   **Example:**
        ```html
        <footer>
          <p>&copy; 2023 My Awesome Website. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </footer>
        ```

*   **`<section>`:** Represents a standalone section of a document, which doesn't have a more specific semantic element to represent it. For example, the table of contents, the chapter headings, the page header, or any other kind of grouping of content.
    *   **Example:**
        ```html
        <section>
          <h2>Chapter 1</h2>
          <p>Content of chapter 1...</p>
        </section>
        <section>
          <h2>Chapter 2</h2>
          <p>Content of chapter 2...</p>
        </section>
        ```

*   **`<strong>`:** Indicates that the enclosed text has strong importance, seriousness, or urgency. Browsers typically render text within `<strong>` elements as bold.
*   **`<em>`:** Indicates that the enclosed text has stress emphasis. Browsers typically render text within `<em>` elements as italic.
*   **`<blockquote>`:** Indicates that the enclosed text is an extended quotation. It often renders with an indent.
*   **`<q>`:** Indicates that the enclosed text is a short inline quotation. Browsers typically render this with quotation marks.

#### Non-semantic Elements (for styling and grouping without inherent meaning):

*   **`<div>`:** A generic container for flow content. It's often used for grouping elements for styling purposes (e.g., with CSS) when no more semantic element is appropriate.
*   **`<span>`:** A generic inline container for phrasing content. It's often used for styling parts of text.

---

### 3. Lists for Organizing Information

Lists are fundamental for presenting related items in an organized manner.

#### 3.1. Unordered Lists (`<ul>`)

*   Used to present a list of items where the order of items does not matter.
*   Each item in an unordered list is marked with a list item (`<li>`) tag.
*   By default, list items are typically displayed with bullet points.

    *   **Syntax:**
        ```html
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        ```

    *   **Example:**
        ```html
        <h2>Grocery List</h2>
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Milk</li>
          <li>Bread</li>
        </ul>
        ```

#### 3.2. Ordered Lists (`<ol>`)

*   Used to present a list of items where the order of items is important.
*   Each item is marked with a list item (`<li>`) tag.
*   By default, list items are typically displayed with numbers (1, 2, 3...).

    *   **Syntax:**
        ```html
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
        ```

    *   **Example:**
        ```html
        <h2>Steps to Bake a Cake</h2>
        <ol>
          <li>Preheat oven to 350°F (175°C).</li>
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients and mix well.</li>
          <li>Pour batter into a greased pan.</li>
          <li>Bake for 30-35 minutes.</li>
        </ol>
        ```

#### 3.3. Definition Lists (`<dl>`)

*   Used to present a list of terms and their definitions.
*   Consists of a `<dl>` element containing zero or more definition description terms (`<dt>`) and definition descriptions (`<dd>`).

    *   **Syntax:**
        ```html
        <dl>
          <dt>Term 1</dt>
          <dd>Definition of Term 1</dd>
          <dt>Term 2</dt>
          <dd>Definition of Term 2</dd>
        </dl>
        ```

    *   **Example:**
        ```html
        <h2>HTML Glossary</h2>
        <dl>
          <dt>HTML</dt>
          <dd>HyperText Markup Language. The standard markup language for documents designed to be displayed in a web browser.</dd>
          <dt>CSS</dt>
          <dd>Cascading Style Sheets. A style sheet language used for describing the presentation of a document written in a markup language like HTML.</dd>
        </dl>
        ```

---

### 4. Tables for Tabular Data

Tables are used to present data in a structured grid format, with rows and columns.

#### Key Table Elements:

*   **`<table>`:** The container for the entire table.
*   **`<thead>`:** Groups the header content in a table. It contains one or more `<tr>` elements.
*   **`<tbody>`:** Groups the body content in a table. It contains one or more `<tr>` elements.
*   **`<tfoot>`:** Groups the footer content in a table. It contains one or more `<tr>` elements.
*   **`<tr>`:** Defines a row in the table.
*   **`<th>`:** Defines a header cell in a table. Text in `<th>` elements is typically bold and centered. Usually placed within `<thead>`.
*   **`<td>`:** Defines a standard data cell in a table.

#### Table Attributes:

*   **`scope` attribute for `<th>`:** Helps assistive technologies understand which cells a header cell relates to.
    *   `scope="col"`: The header applies to the entire column.
    *   `scope="row"`: The header applies to the entire row.
*   **`colspan` attribute for `<td>` and `<th>`:** Allows a cell to span multiple columns.
*   **`rowspan` attribute for `<td>` and `<th>`:** Allows a cell to span multiple rows.

    *   **Example:**
        ```html
        <table>
          <caption>Monthly Sales Data</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Sales (USD)</th>
              <th scope="col">Units Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>15,000</td>
              <td>750</td>
            </tr>
            <tr>
              <td>February</td>
              <td>18,000</td>
              <td>900</td>
            </tr>
            <tr>
              <td>March</td>
              <td>22,000</td>
              <td>1100</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>55,000</td>
              <td>2750</td>
            </tr>
          </tfoot>
        </table>
        ```

---

### 5. Forms for User Input

Forms are essential for collecting data from users, such as login credentials, contact information, search queries, etc.

#### Key Form Elements:

*   **`<form>`:** The container for all form elements.
    *   **`action` attribute:** Specifies the URL where the form data will be sent when submitted.
    *   **`method` attribute:** Specifies the HTTP method to use when submitting the form data (typically `GET` or `POST`).
        *   `GET`: Appends form data to the URL. Good for search queries, data that doesn't change the server state. Limited in data size.
        *   `POST`: Sends form data in the HTTP request body. Good for sensitive data, submitting changes, or larger amounts of data.

*   **`<input>`:** The most versatile form element. Its behavior is determined by the `type` attribute.
    *   **Common `type` values:**
        *   `text`: A single-line text input field.
        *   `password`: A text input field where characters are masked.
        *   `email`: A text input field optimized for email addresses.
        *   `number`: A text input field optimized for numbers.
        *   `date`: A date picker.
        *   `submit`: A button that submits the form.
        *   `reset`: A button that resets all form fields to their default values.
        *   `checkbox`: A checkbox that can be checked or unchecked.
        *   `radio`: A radio button. Radio buttons in the same group (sharing the same `name` attribute) allow only one selection.
        *   `button`: A clickable button with no default behavior.
        *   `file`: A file-select field.
        *   `search`: A single-line text input field for search queries.
        *   `tel`: A text input field optimized for telephone numbers.
        *   `url`: A text input field optimized for URLs.

    *   **Important attributes for `<input>`:**
        *   `name`: **Crucial!** Identifies the form data when submitted to the server. Each input field that should send data needs a unique `name`.
        *   `value`: The initial value of the input field. For submit buttons, it's the text displayed on the button.
        *   `placeholder`: Provides a hint to the user about what to enter.
        *   `required`: Makes the field mandatory; the form cannot be submitted if it's empty.
        *   `disabled`: Prevents the user from interacting with the input.
        *   `maxlength`, `minlength`: Sets the maximum/minimum number of characters allowed.
        *   `pattern`: Specifies a regular expression that the input's value must match.

*   **`<textarea>`:** For multi-line text input.
    *   **Attributes:**
        *   `rows`: Specifies the visible number of lines in a text area.
        *   `cols`: Specifies the visible width of a text area in characters.
        *   `name`, `value` (initial content), `required`, `placeholder`, `disabled` also apply.

*   **`<label>`:** Provides a caption for an `<input>`, `<textarea>`, or `<select>` element.
    *   **Purpose:** Improves usability and accessibility. Clicking a label associated with an input field will focus or activate that input.
    *   **`for` attribute:** Links the label to an input element by matching the `id` attribute of the input.

*   **`<select>`:** Creates a drop-down list.
    *   **`<option>`:** Defines an option within a `<select>` list.
        *   **`value` attribute:** The value that is sent to the server when this option is selected.
        *   **`selected` attribute:** Makes an option pre-selected.
    *   **`multiple` attribute:** Allows the user to select multiple options.

*   **`<fieldset>`:** Groups related elements in a form.
*   **`<legend>`:** Provides a caption for a `<fieldset>`.

    *   **Example:**
        ```html
        <form action="/submit-feedback" method="post">
          <fieldset>
            <legend>Your Feedback</legend>

            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="userName" placeholder="Enter your name" required>
            </div>

            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="userEmail" placeholder="Enter your email" required>
            </div>

            <div>
              <label for="message">Message:</label>
              <textarea id="message" name="userMessage" rows="4" placeholder="Your feedback here..." required></textarea>
            </div>

            <div>
              <p>Rate our service:</p>
              <input type="radio" id="rating1" name="rating" value="1">
              <label for="rating1">1</label>

              <input type="radio" id="rating2" name="rating" value="2">
              <label for="rating2">2</label>

              <input type="radio" id="rating3" name="rating" value="3" checked>
              <label for="rating3">3</label>

              <input type="radio" id="rating4" name="rating" value="4">
              <label for="rating4">4</label>

              <input type="radio" id="rating5" name="rating" value="5">
              <label for="rating5">5</label>
            </div>

            <div>
              <label for="topics">Choose a topic:</label>
              <select id="topics" name="feedbackTopic">
                <option value="">--Select a topic--</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="general">General Feedback</option>
              </select>
            </div>

            <div>
              <input type="checkbox" id="agree" name="agreement" value="yes" required>
              <label for="agree">I agree to the terms and conditions</label>
            </div>

          </fieldset>

          <div>
            <input type="submit" value="Send Feedback">
            <input type="reset" value="Clear Form">
          </div>
        </form>
        ```

---

### Practice Questions & Exercises

**Question 1:**
What is the primary purpose of using semantic HTML5 elements like `<header>`, `<nav>`, and `<main>`?

**Question 2:**
Which HTML element is used to create an unordered list, and what character typically precedes each list item by default?

**Question 3:**
You need to display a list of steps for a recipe, where the order is important. Which list element should you use?

**Question 4:**
Which attribute is crucial for associating a `<label>` element with its corresponding `<input>` element?

**Question 5:**
Consider the following HTML snippet for a table. What is the purpose of the `scope="col"` attribute on the `<th>` elements?

```html
<table>
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$1200</td>
    </tr>
  </tbody>
</table>
```

**Question 6:**
When submitting form data, which `method` is generally preferred for sensitive information like passwords, and why?

**Question 7:**
You want to create a form field for a user's age, and you only want to accept numerical input. Which `type` attribute should you use for the `<input>` element?

**Question 8:**
Write the HTML code for a definition list that defines the terms "HTML" and "CSS".

**Question 9:**
You have a website with a main content area, a header, and a footer. Use semantic HTML5 elements to structure these sections.

**Question 10:**
Create a simple form with two text input fields: "Username" and "Password", both of which are required. Ensure the "Password" field masks the input. Use appropriate labels and `name` attributes.

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose is to give meaning and structure to the content, improving readability for humans, accessibility for assistive technologies, and SEO for search engines.

**Answer 2:**
The `<ul>` element is used for unordered lists. By default, list items are typically preceded by bullet points.

**Answer 3:**
You should use the `<ol>` (ordered list) element.

**Answer 4:**
The `for` attribute on the `<label>` element is crucial for associating it with an input element via the `id` attribute of the input.

**Answer 5:**
The `scope="col"` attribute indicates that the header cell applies to the entire column, informing assistive technologies and browsers that "Product Name" and "Price" are column headers.

**Answer 6:**
The `POST` method is generally preferred for sensitive information because it sends the data in the HTTP request body, making it less visible than `GET`, which appends data to the URL.

**Answer 7:**
You should use the `type="number"` attribute for the `<input>` element.

**Answer 8:**
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

**Answer 9:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Structure</title>
</head>
<body>

  <header>
    <h1>My Website Title</h1>
    <nav>
      <!-- Navigation links here -->
    </nav>
  </header>

  <main>
    <section>
      <h2>Main Content Section</h2>
      <p>This is the primary content of the page.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 My Website</p>
  </footer>

</body>
</html>
```

**Answer 10:**
```html
<form action="/login" method="post">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </div>
  <button type="submit">Login</button>
</form>
```

---

### Important Points to Remember:

*   **Semantics over Presentation:** Always prioritize using semantic HTML elements to convey meaning. Styling should be handled by CSS.
*   **`name` Attribute is Key for Forms:** Without a `name` attribute, form data will not be sent to the server.
*   **`label` for Accessibility:** Always associate labels with form controls using the `for` attribute.
*   **Unique `id`s:** Each `id` attribute on a page must be unique.
*   **One `<main>` per Document:** Ensure only one `<main>` element is used per HTML document.
*   **Tables for Tabular Data:** Use tables for data that is inherently tabular, not for layout purposes.
*   **`<thead>`, `<tbody>`, `<tfoot>` for Better Structure:** These elements improve table semantics and accessibility.
*   **`GET` vs. `POST`:** Understand the differences and choose the appropriate method for form submissions.
