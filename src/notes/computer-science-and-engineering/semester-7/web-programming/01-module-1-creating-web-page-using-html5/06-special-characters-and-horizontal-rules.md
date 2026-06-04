---
title: "Special Characters and Horizontal Rules"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0a5"
status: "completed"
scrapedAt: "2026-05-20T17:12:12.549Z"
---
# WEB PROGRAMMING - Module 1: Creating Web Page using HTML5

## Topic: Special Characters and Horizontal Rules

### 1. Introduction to Special Characters in HTML

Web pages are built using HTML (HyperText Markup Language). HTML uses certain characters, such as `<`, `>`, and `&`, to define tags and attributes. These characters have special meanings within the HTML structure. If you want to display these characters literally on your web page (e.g., showing the `<` symbol in text), you need to use special character entities.

**Key Concept:** HTML entities are codes that represent characters that might otherwise be interpreted as HTML code.

### 2. Why Use Special Characters (HTML Entities)?

*   **Preventing Interpretation as HTML Code:** If you want to display characters like `<`, `>`, `&`, or `"`, you must use their corresponding entities. Otherwise, the browser will interpret them as the start of a tag or attribute, leading to unexpected rendering or errors.
*   **Displaying Reserved Characters:** Characters that have a special meaning in HTML cannot be directly typed into your HTML document to be displayed as plain text.
*   **Representing Non-Standard Characters:** HTML entities are also used to represent characters that are not available on a standard keyboard, such as accented letters, currency symbols, and emojis.

### 3. Common Special Character Entities

HTML entities are typically represented in one of two ways:

*   **Named Entities:** Start with an ampersand (`&`), followed by a name, and end with a semicolon (`;`). These are easier to remember.
*   **Numeric Entities:** Start with an ampersand (`&`), followed by a hash (`#`), then a number (decimal or hexadecimal), and end with a semicolon (`;`).

Here are some of the most common and important special character entities:

| Character | HTML Entity (Named) | HTML Entity (Numeric Decimal) | HTML Entity (Numeric Hexadecimal) | Description                               | Example Usage                                                                      |
| :-------- | :------------------ | :---------------------------- | :------------------------------ | :---------------------------------------- | :--------------------------------------------------------------------------------- |
| `<`       | `&lt;`              | `&#60;`                       | `&#x3C;`                        | Less Than                                 | `The tag starts with &lt;p&gt;.`                                                     |
| `>`       | `&gt;`              | `&#62;`                       | `&#x3E;`                        | Greater Than                              | `The tag ends with &lt;/p&gt;.`                                                      |
| `&`       | `&amp;`             | `&#38;`                       | `&#x26;`                        | Ampersand                                 | `Terms &amp; conditions apply.`                                                    |
| `"`       | `&quot;`            | `&#34;`                       | `&#x22;`                        | Double Quote                              | `She said, &quot;Hello!&quot;`                                                      |
| `'`       | `&apos;`            | `&#39;`                       | `&#x27;`                        | Single Quote (Apostrophe)                 | `It's a beautiful day.` (While `&apos;` is valid, browsers often handle `'` fine) |
| `©`       | `&copy;`            | `&#169;`                      | `&#xA9;`                        | Copyright Symbol                          | `© 2023 Your Company.`                                                             |
| `®`       | `&reg;`             | `&#174;`                      | `&#xAE;`                        | Registered Trademark Symbol               | `BrandName &reg;`                                                                  |
| `™`       | `&trade;`           | `&#8482;`                     | `&#x2122;`                      | Trademark Symbol                          | `ProductX &trade;`                                                                 |
| `€`       | `&euro;`            | `&#8364;`                     | `&#x20AC;`                      | Euro Currency Symbol                      | `The price is 100 &euro;.`                                                         |
| ` ` (non-breaking space) | `&nbsp;`            | `&#160;`                       | `&#xA0;`                        | Non-Breaking Space                        | `This helps keep words together, like in 10&nbsp;km.`                              |

**Important Note on Non-Breaking Space (`&nbsp;`):**
Browsers typically collapse multiple whitespace characters (spaces, tabs, newlines) into a single space. `&nbsp;` is used to insert a space that the browser will *not* collapse, ensuring that the text on either side of it remains on the same line. This is useful for keeping units of measurement with their numbers (e.g., "10 km" where you don't want "10" on one line and "km" on the next).

### 4. Using Special Characters in HTML: Examples

**Example 1: Displaying HTML Tags**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Special Characters Example</title>
</head>
<body>

    <h1>Displaying HTML Tags</h1>
    <p>To create a paragraph, you use the &lt;p&gt; tag.</p>
    <p>The tag is closed with &lt;/p&gt;.</p>
    <p>This demonstrates the use of &amp;lt; and &amp;gt; entities.</p>

</body>
</html>
```

**Output:**

```
Displaying HTML Tags
To create a paragraph, you use the <p> tag.
The tag is closed with </p>.
This demonstrates the use of < and > entities.
```

**Example 2: Displaying Copyright Symbol and Non-Breaking Space**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Special Characters Example 2</title>
</head>
<body>

    <h1>Copyright and Spacing</h1>
    <p>All rights reserved &copy; 2023 Company Name.</p>
    <p>Distance: 5&nbsp;miles</p>
    <p>If you type five spaces here:     they might be collapsed by the browser.</p>
    <p>But this will maintain the spacing: Five&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spaces.</p>

</body>
</html>
```

**Output:**

```
Copyright and Spacing
All rights reserved © 2023 Company Name.
Distance: 5 miles
If you type five spaces here:      they might be collapsed by the browser.
But this will maintain the spacing: Five     spaces.
```

### 5. Horizontal Rules (`<hr>`)

**Key Concept:** The `<hr>` tag (short for "horizontal rule") is used to create a thematic break between paragraph-level content. Visually, it's typically rendered as a horizontal line.

**Purpose:**

*   **Separation:** It's used to visually separate different sections of content on a web page.
*   **Thematic Break:** It signifies a change in topic or a shift in the content's focus.

**Syntax:**

The `<hr>` tag is an **empty element** (or self-closing element), meaning it doesn't have a closing tag.

```html
<hr>
```

**Attributes (HTML5):**

While older versions of HTML allowed attributes like `size`, `width`, and `color` directly in the `<hr>` tag, these are now considered obsolete and should be managed using CSS for better styling and maintainability.

*   **`align` (Obsolete):** Specifies the alignment of the horizontal rule (left, center, right).
*   **`color` (Obsolete):** Specifies the color of the horizontal rule.
*   **`size` (Obsolete):** Specifies the thickness (height) of the horizontal rule.
*   **`width` (Obsolete):** Specifies the width of the horizontal rule.

**Modern Approach: Styling with CSS**

It is best practice to style `<hr>` elements using CSS.

**Example 1: Basic Horizontal Rule**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Horizontal Rule Example</title>
</head>
<body>

    <h1>Section 1</h1>
    <p>This is the content of the first section. It discusses the basics of HTML.</p>

    <hr> <!-- This will create a horizontal line -->

    <h2>Section 2</h2>
    <p>This is the content of the second section. It goes into more detail about specific tags and concepts.</p>

    <hr>

    <h3>Section 3</h3>
    <p>Here is some more content, further down the page.</p>

</body>
</html>
```

**Output:**

(Visually, you'd see a horizontal line separating Section 1 and Section 2, and another between Section 2 and Section 3).

**Example 2: Styling Horizontal Rules with CSS**

You can add CSS directly in the `<style>` tags within the `<head>` section or in an external CSS file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Styled Horizontal Rule Example</title>
    <style>
        hr {
            border: none; /* Remove the default border */
            height: 3px; /* Set the thickness */
            background-color: #007bff; /* Set the color */
            margin: 20px 0; /* Add some space above and below */
            width: 50%; /* Make it 50% of the container width */
            margin-left: auto; /* Center the element */
            margin-right: auto; /* Center the element */
        }

        .dashed-line {
            border: none;
            border-top: 2px dashed #ffc107; /* Dashed border with a color */
            margin: 30px 0;
        }
    </style>
</head>
<body>

    <h1>Styled Sections</h1>
    <p>This section is separated by a standard styled horizontal rule.</p>

    <hr> <!-- Uses the default hr style defined in CSS -->

    <h2>Another Section</h2>
    <p>This section is separated by a dashed horizontal rule.</p>

    <hr class="dashed-line"> <!-- Uses the dashed-line class for styling -->

    <h3>Final Thoughts</h3>
    <p>Content at the end of the page.</p>

</body>
</html>
```

**Output:**

(Visually, you'd see a blue, 3px thick, centered horizontal line, and below it, a yellow, dashed horizontal line).

### 6. Practice Questions

1.  **Why do we need to use HTML entities for characters like `<` and `&`?**
    *   A) To make them appear in a different color.
    *   B) Because the browser might interpret them as HTML code.
    *   C) To make the web page load faster.
    *   D) They are optional and don't affect the page.

2.  **Which HTML entity represents the copyright symbol `©`?**
    *   A) `&copyr;`
    *   B) `&#169;`
    *   C) `&cr;`
    *   D) `&copy`

3.  **What is the purpose of the `&nbsp;` entity?**
    *   A) To create a new line.
    *   B) To insert a regular space that collapses with other spaces.
    *   C) To insert a space that prevents a line break.
    *   D) To make text bold.

4.  **What is the primary function of the `<hr>` tag?**
    *   A) To create a hyperlink.
    *   B) To define a heading.
    *   C) To create a horizontal rule for visual separation.
    *   D) To insert an image.

5.  **Which of the following is the correct way to represent the `<` character in HTML?**
    *   A) `<`
    *   B) `&lt;`
    *   C) `&less`
    *   D) `&#<;`

### 7. Practice Questions - Answers

1.  **B) Because the browser might interpret them as HTML code.**
    *   *Explanation:* Characters like `<` and `&` have special meanings in HTML for defining tags and entities. Using their entities ensures they are displayed as literal characters.

2.  **B) `&#169;`**
    *   *Explanation:* While `&copy;` is the named entity for copyright, `&#169;` is its numeric decimal equivalent, both of which are valid.

3.  **C) To insert a space that prevents a line break.**
    *   *Explanation:* `&nbsp;` (non-breaking space) is used to ensure that the content around it stays on the same line, unlike regular spaces which can be collapsed by the browser.

4.  **C) To create a horizontal rule for visual separation.**
    *   *Explanation:* The `<hr>` tag is specifically designed to create a thematic break, commonly displayed as a horizontal line.

5.  **B) `&lt;`**
    *   *Explanation:* `&lt;` is the standard HTML entity for the "less than" symbol.

### 8. Important Points to Remember

*   **Reserved Characters:** Always use HTML entities for characters that have special meaning in HTML (`<`, `>`, `&`, `"`).
*   **Named vs. Numeric Entities:** Both work, but named entities are often more readable (`&copy;` vs. `&#169;`).
*   **`&nbsp;`:** Use for spaces you don't want collapsed or broken across lines.
*   **`<hr>` Tag:** Use for thematic breaks and visual separation of content.
*   **CSS for Styling:** Avoid using obsolete attributes like `size`, `color`, and `width` directly on `<hr>`. Style them using CSS for better control and maintainability.
