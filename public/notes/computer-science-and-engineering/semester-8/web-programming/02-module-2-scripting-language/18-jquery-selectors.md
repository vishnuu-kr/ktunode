---
title: "jQuery Selectors"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc34"
status: "completed"
scrapedAt: "2026-05-20T17:28:24.864Z"
---
# WEB PROGRAMMING: Module 2: Scripting Language - jQuery Selectors

## Introduction to jQuery Selectors

jQuery selectors are the heart of jQuery. They allow you to efficiently select HTML elements on a web page, providing a powerful way to access and manipulate them. Think of them as powerful search queries for your HTML document.

### Learning Outcomes:

*   Understand the purpose and importance of jQuery selectors.
*   Learn to use various types of jQuery selectors.
*   Be able to combine selectors to target specific elements.
*   Understand how to select elements based on attributes.
*   Learn to select elements based on their state or position.
*   Be able to use pseudo-selectors for advanced selection.

---

### 1. What are jQuery Selectors?

*   **Definition:** jQuery selectors are patterns used to select HTML elements on a web page. They are based on CSS selectors but offer extended capabilities.
*   **Purpose:** To find and access specific HTML elements so that you can perform actions on them, such as changing their content, style, or behavior.
*   **Syntax:** The basic syntax for a jQuery selector is `$(selector)`. The `$` is an alias for the `jQuery` object, and the `selector` is a string representing the CSS selector pattern.

---

### 2. Types of jQuery Selectors

jQuery provides a wide range of selectors, categorized as follows:

#### 2.1. Basic Selectors

These are the most fundamental selectors, directly mirroring CSS selectors.

*   **Element Selector:** Selects all elements of a specific tag name.
    *   **Syntax:** `$("tagname")`
    *   **Example:** `$("p")` - Selects all `<p>` elements.

*   **ID Selector:** Selects a single element with a specific `id` attribute. IDs are unique within a document.
    *   **Syntax:** `$("#id")`
    *   **Example:** `$("#myDiv")` - Selects the element with `id="myDiv"`.

*   **Class Selector:** Selects all elements with a specific `class` attribute. Classes can be applied to multiple elements.
    *   **Syntax:** `$(".classname")`
    *   **Example:** `$(".highlight")` - Selects all elements with `class="highlight"`.

*   **Universal Selector:** Selects all elements in the document.
    *   **Syntax:** `$("*")`
    *   **Example:** `$("body").css("background-color", "lightblue");` - Changes the background color of the entire page.

#### 2.2. Attribute Selectors

These selectors target elements based on their attributes and attribute values.

*   **Attribute Presence:** Selects elements that have a specific attribute, regardless of its value.
    *   **Syntax:** `$("[attribute]")`
    *   **Example:** `$("input[type]")` - Selects all `<input>` elements that have a `type` attribute.

*   **Attribute Value:** Selects elements where an attribute has a specific value.
    *   **Syntax:** `$("[attribute='value']")`
    *   **Example:** `$("a[target='_blank']")` - Selects all `<a>` elements with `target="_blank"`.

*   **Attribute Starts With:** Selects elements where an attribute's value begins with a specific string.
    *   **Syntax:** `$("[attribute^='value']")`
    *   **Example:** `$("input[name^='user']")` - Selects all `<input>` elements whose `name` attribute starts with "user".

*   **Attribute Ends With:** Selects elements where an attribute's value ends with a specific string.
    *   **Syntax:** `$("[attribute$='value']")`
    *   **Example:** `$("img[src$='.jpg']")` - Selects all `<img>` elements whose `src` attribute ends with ".jpg".

*   **Attribute Contains:** Selects elements where an attribute's value contains a specific string.
    *   **Syntax:** `$("[attribute*='value']")`
    *   **Example:** `$("div[class*='container']")` - Selects all `<div>` elements whose `class` attribute contains "container".

*   **Attribute Not Equal:** Selects elements where an attribute's value is not equal to a specific value.
    *   **Syntax:** `$("[attribute!='value']")`
    *   **Example:** `$("input[type!='password']")` - Selects all `<input>` elements that are not of type "password".

*   **Attribute Value Not Equal (Multiple Values):** Selects elements where an attribute's value is not equal to any of the specified values.
    *   **Syntax:** `$("[attribute!='value1'][attribute!='value2']")`
    *   **Example:** `$("select[name!='country'][name!='state']")`

#### 2.3. Hierarchical/Combinator Selectors

These selectors allow you to select elements based on their relationship to other elements.

*   **Descendant Selector:** Selects all elements that are descendants of a specified ancestor element (children, grandchildren, etc.).
    *   **Syntax:** `ancestor descendant`
    *   **Example:** `$("div p")` - Selects all `<p>` elements that are inside a `<div>` element.

*   **Child Selector:** Selects direct children of a specified parent element.
    *   **Syntax:** `parent > child`
    *   **Example:** `$("ul > li")` - Selects all `<li>` elements that are direct children of a `<ul>` element.

*   **Adjacent Sibling Selector:** Selects an element that is immediately preceded by a specified sibling.
    *   **Syntax:** `prev + next`
    *   **Example:** `$("h2 + p")` - Selects the `<p>` element that immediately follows an `<h2>` element.

*   **General Sibling Selector:** Selects all sibling elements that follow a specified element.
    *   **Syntax:** `prev ~ siblings`
    *   **Example:** `$("h2 ~ p")` - Selects all `<p>` elements that are siblings of an `<h2>` and appear after it.

#### 2.4. Pseudo-Class Selectors

These selectors allow you to select elements based on their state, position, or other properties not represented by attributes or tag names.

*   **`:first`**: Selects the first element in the selected set.
    *   **Syntax:** `selector:first`
    *   **Example:** `$("li:first")` - Selects the first `<li>` element within its parent.

*   **`:last`**: Selects the last element in the selected set.
    *   **Syntax:** `selector:last`
    *   **Example:** `$("li:last")` - Selects the last `<li>` element within its parent.

*   **`:even`**: Selects elements with an even index (0-based index).
    *   **Syntax:** `selector:even`
    *   **Example:** `("tr:even")` - Selects `<tr>` elements at index 0, 2, 4, etc.

*   **`:odd`**: Selects elements with an odd index (0-based index).
    *   **Syntax:** `selector:odd`
    *   **Example:** `("tr:odd")` - Selects `<tr>` elements at index 1, 3, 5, etc.

*   **`:eq(index)`**: Selects an element at a specific index (0-based index) within the selected set.
    *   **Syntax:** `selector:eq(index)`
    *   **Example:** `("li:eq(2)")` - Selects the third `<li>` element.

*   **`:gt(index)`**: Selects elements with an index greater than the specified index (0-based index).
    *   **Syntax:** `selector:gt(index)`
    *   **Example:** `("li:gt(1)")` - Selects all `<li>` elements after the second one.

*   **`:lt(index)`**: Selects elements with an index less than the specified index (0-based index).
    *   **Syntax:** `selector:lt(index)`
    *   **Example:** `("li:lt(3)")` - Selects all `<li>` elements up to, but not including, the fourth one.

*   **`:first-child`**: Selects elements that are the first child of their parent.
    *   **Syntax:** `selector:first-child`
    *   **Example:** `("li:first-child")` - Selects `<li>` elements that are the first child.

*   **`:last-child`**: Selects elements that are the last child of their parent.
    *   **Syntax:** `selector:last-child`
    *   **Example:** `("li:last-child")` - Selects `<li>` elements that are the last child.

*   **`:only-child`**: Selects elements that are the only child of their parent.
    *   **Syntax:** `selector:only-child`
    *   **Example:** `("li:only-child")` - Selects `<li>` elements that have no siblings.

*   **`:empty`**: Selects elements that have no children (including text nodes).
    *   **Syntax:** `selector:empty`
    *   **Example:** `("div:empty")` - Selects `<div>` elements that are completely empty.

*   **`:contains(text)`**: Selects elements that contain specific text. Case-sensitive.
    *   **Syntax:** `selector:contains(text)`
    *   **Example:** `("p:contains('Hello')")` - Selects `<p>` elements containing the text "Hello".

*   **Form Selectors:** These are specific to form elements.
    *   **`:input`**: Selects all `<input>`, `<textarea>`, `<select>`, and `<button>` elements.
        *   **Syntax:** `$:input`
        *   **Example:** `("$:input")`
    *   **`:text`**: Selects all text input fields (`<input type="text">`).
        *   **Syntax:** `$:text`
        *   **Example:** `("$:text")`
    *   **`:password`**: Selects all password fields (`<input type="password">`).
        *   **Syntax:** `$:password`
        *   **Example:** `("$:password")`
    *   **`:checkbox`**: Selects all checkboxes (`<input type="checkbox">`).
        *   **Syntax:** `$:checkbox`
        *   **Example:** `("$:checkbox")`
    *   **`:radio`**: Selects all radio buttons (`<input type="radio">`).
        *   **Syntax:** `$:radio`
        *   **Example:** `("$:radio")`
    *   **`:submit`**: Selects all submit buttons (`<input type="submit">` or `<button type="submit">`).
        *   **Syntax:** `$:submit`
        *   **Example:** `("$:submit")`
    *   **`:checked`**: Selects checked elements (checkboxes, radio buttons).
        *   **Syntax:** `selector:checked`
        *   **Example:** `("input:checked")`
    *   **`:disabled`**: Selects disabled form elements.
        *   **Syntax:** `selector:disabled`
        *   **Example:** `("$:disabled")`
    *   **`:enabled`**: Selects enabled form elements.
        *   **Syntax:** `selector:enabled`
        *   **Example:** `("$:enabled")`

#### 2.5. Custom Selectors (using `.filter()` and `.is()`)

While jQuery provides many built-in selectors, you can also filter existing jQuery objects using custom logic.

*   **`.filter(selector)`**: Reduces the set of matched elements to those that match the selector.
    *   **Example:** `$("li").filter(":even").css("background-color", "lightgray");`

*   **`.filter(function)`**: Reduces the set of matched elements to those for which the function returns `true`.
    *   **Example:** `$("li").filter(function() { return $(this).text().length > 10; }).addClass("long-text");`

*   **`.is(selector)`**: Checks if any element in the set matches the selector. Returns `true` or `false`.
    *   **Example:** `if ($("#myButton").is(":disabled")) { alert("Button is disabled!"); }`

---

### 3. Combining Selectors

You can combine selectors to create more specific and powerful selections.

*   **Multiple Selectors (Comma-Separated):** Selects elements matching any of the individual selectors.
    *   **Syntax:** `selector1, selector2, selector3`
    *   **Example:** `$("h1, h2, p.intro")` - Selects all `<h1>`, `<h2>`, and `<p>` elements with the class "intro".

*   **Chaining Selectors:** Applying multiple selectors sequentially to narrow down the selection.
    *   **Example:** `$("#myList li.active")` - Selects all `<li>` elements with the class "active" that are descendants of an element with `id="myList"`.

---

### 4. Important Points to Remember

*   **Performance:** While jQuery selectors are generally efficient, overly complex or broad selectors can impact performance. Aim for specificity where possible.
*   **DOM Ready:** Ensure your jQuery code runs after the DOM (Document Object Model) is fully loaded. Use `$(document).ready(function() { ... });` or the shorthand `$(function() { ... });`.
*   **Case Sensitivity:** Attribute selectors are generally case-sensitive.
*   **CSS Familiarity:** A good understanding of CSS selectors will greatly aid in using jQuery selectors effectively.
*   **`$(this)`:** Inside event handlers, `$(this)` refers to the specific element that triggered the event, making it easy to manipulate that element.

---

### 5. Practice Questions and Exercises

**HTML Structure for Practice:**

```html
<!DOCTYPE html>
<html>
<head>
<title>jQuery Selectors Practice</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<style>
  .highlight { background-color: yellow; }
  .special { color: blue; }
  .even-row { background-color: lightgray; }
  .odd-row { background-color: white; }
  .bordered { border: 1px solid black; }
</style>
</head>
<body>

  <div id="main-container">
    <h1>Welcome to jQuery Selectors!</h1>
    <p class="intro">This is an introductory paragraph.</p>
    <p>This is another paragraph.</p>

    <ul id="item-list">
      <li class="item">Item 1</li>
      <li class="item highlight">Item 2</li>
      <li class="item">Item 3</li>
      <li class="item special">Item 4</li>
      <li class="item">Item 5</li>
    </ul>

    <div class="content">
      <h3>Section 1</h3>
      <p>Content for section 1.</p>
      <input type="text" name="username" value="user1">
      <input type="password" name="password">
    </div>

    <div class="content bordered">
      <h3>Section 2</h3>
      <p>Content for section 2.</p>
      <button>Click Me</button>
      <img src="image.jpg" alt="Sample Image">
      <a href="#section3">Go to Section 3</a>
    </div>

    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr class="even-row">
          <td>Data 1.1</td>
          <td>Data 1.2</td>
        </tr>
        <tr class="odd-row">
          <td>Data 2.1</td>
          <td>Data 2.2</td>
        </tr>
        <tr class="even-row">
          <td>Data 3.1</td>
          <td>Data 3.2</td>
        </tr>
      </tbody>
    </table>

    <form>
      <label>Name:</label>
      <input type="text" name="fullName">
      <br>
      <label>Email:</label>
      <input type="email" name="emailAddress">
      <br>
      <input type="checkbox" name="terms" checked> Accept Terms
      <br>
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female" checked> Female
      <br>
      <button type="submit" disabled>Submit</button>
    </form>

    <div id="empty-div"></div>

  </div>

  <script>
    $(document).ready(function() {
      // Add your jQuery code here for exercises
    });
  </script>

</body>
</html>
```

---

**Exercises:**

1.  **Select and highlight all paragraphs with the class "intro".**
2.  **Select and change the text color to red for all list items (`<li>`) that have the class "special".**
3.  **Select the `<h1>` element and change its background color to yellow.**
4.  **Select all `<li>` elements that are direct children of the element with `id="item-list"`.**
5.  **Select all `<p>` elements that are descendants of the `div` with `class="content"`.**
6.  **Select the first `<li>` element within the `<ul>` with `id="item-list"`.**
7.  **Select the last `<li>` element within the `<ul>` with `id="item-list"`.**
8.  **Select all `<tr>` elements that have an even index in the table body.**
9.  **Select the third `<li>` element (index 2) within the `<ul>` with `id="item-list"`.**
10. **Select all `input` elements that have a `type` attribute.**
11. **Select all `<a>` elements where the `href` attribute starts with "#".**
12. **Select all `<img>` elements where the `src` attribute ends with ".jpg".**
13. **Select all `div` elements that have the class "content" and add the class "bordered" to them.**
14. **Select all `input` elements of type "password".**
15. **Select all checked checkboxes.**
16. **Select all disabled form elements.**
17. **Select all `p` elements that contain the text "Section 2".**
18. **Select the `div` with `id="empty-div"` and check if it's empty. If it is, add a border to it.**
19. **Select all `input` elements (except password fields) within the form and log their names to the console.**
20. **Select all `<li>` elements and then filter them to select only those that have the class "highlight".**

---

**Answers:**

1.  `$("p.intro").css("background-color", "yellow");`
2.  `$("li.special").css("color", "red");`
3.  `$("h1").css("background-color", "yellow");`
4.  `$("#item-list > li").css("font-weight", "bold");`
5.  `$(".content p").css("font-style", "italic");`
6.  `$("#item-list li:first").css("border-left", "3px solid green");`
7.  `$("#item-list li:last").css("border-right", "3px solid green");`
8.  `$("tbody tr:even").addClass("even-row");` (Assuming the class is already defined, otherwise use `.css()`)
9.  `$("#item-list li:eq(2)").css("text-decoration", "underline");`
10. `$("input[type]").css("border", "1px solid blue");`
11. `$("a[href^='#']").css("color", "purple");`
12. `$("img[src$='.jpg']").css("border", "2px dashed red");`
13. `$(".content").filter(function() { return $(this).hasClass("content"); }).addClass("bordered");` or more simply: `$(".content").addClass("bordered");` (if the html doesn't already have it for the second div)
14. `$("input:password").css("background-color", "lightpink");`
15. `$("input:checkbox:checked").css("outline", "2px solid red");`
16. `$("input:disabled").css("opacity", "0.5");`
17. `$("p:contains('Section 2')").css("background-color", "lightblue");`
18. `if ($("#empty-div").is(":empty")) { $("#empty-div").css("border", "2px dashed red"); }`
19. `$("form input:not(:password)").each(function() { console.log($(this).attr('name')); });`
20. `$("li").filter(".highlight").css("font-weight", "bold");`

---
