---
title: "jQuery Selectors"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0d5"
status: "completed"
scrapedAt: "2026-05-20T17:12:58.231Z"
---
# WEB PROGRAMMING - Module 2: Scripting Language

## Topic: jQuery Selectors

---

### 1. Introduction to jQuery Selectors

**Learning Outcome:** Understand the purpose and importance of selectors in jQuery.

*   **What are jQuery Selectors?**
    *   jQuery selectors are powerful tools that allow you to "select" (find and target) HTML elements on a web page.
    *   They are based on CSS selector syntax, making them familiar to web developers.
    *   Once elements are selected, you can perform various actions on them, such as changing their content, style, or behavior.
*   **Why use jQuery Selectors?**
    *   **Efficiency:** Quickly target specific elements without manually iterating through the DOM.
    *   **Simplicity:** Abstract away complex DOM traversal logic.
    *   **Dynamic Web Pages:** Enable manipulation of HTML content and styles in response to user interactions or data changes.
    *   **Foundation for jQuery Methods:** Selectors are the starting point for almost all jQuery operations (e.g., `.hide()`, `.css()`, `.html()`, `.click()`).

---

### 2. Basic Selectors

**Learning Outcome:** Utilize basic CSS selectors (tag, class, ID) with jQuery.

jQuery selectors are wrapped within the `$(selector)` function.

#### 2.1 ID Selector

*   **Syntax:** `$("#elementID")`
*   **Description:** Selects a single element with a specific `id` attribute.
*   **Key Point:** IDs must be unique within an HTML document.
*   **Example:**
    ```html
    <div id="myDiv">This is a div.</div>
    ```
    ```javascript
    // Select the div with id "myDiv"
    $("#myDiv").css("background-color", "yellow");
    ```

#### 2.2 Class Selector

*   **Syntax:** `$(".className")`
*   **Description:** Selects all elements that have a specific `class` attribute.
*   **Key Point:** Classes can be applied to multiple elements.
*   **Example:**
    ```html
    <p class="highlight">First paragraph.</p>
    <p class="highlight">Second paragraph.</p>
    <span class="normal">A span.</span>
    ```
    ```javascript
    // Select all elements with class "highlight"
    $(".highlight").css("font-weight", "bold");
    ```

#### 2.3 Tag Name Selector (Element Selector)

*   **Syntax:** `$("tagName")`
*   **Description:** Selects all elements of a specific HTML tag type.
*   **Example:**
    ```html
    <h1>Main Title</h1>
    <p>A paragraph.</p>
    <p>Another paragraph.</p>
    ```
    ```javascript
    // Select all paragraph elements
    $("p").css("color", "blue");
    ```

#### 2.4 Universal Selector

*   **Syntax:** `$("*")`
*   **Description:** Selects all elements on the page. Use with caution as it can be performance-intensive.
*   **Example:**
    ```javascript
    // Select all elements and add a border
    $("*").css("border", "1px solid black");
    ```

---

### 3. Attribute Selectors

**Learning Outcome:** Select elements based on their attributes and attribute values.

#### 3.1 Select by Attribute Presence

*   **Syntax:** `$("[attributeName]")`
*   **Description:** Selects elements that have a specific attribute, regardless of its value.
*   **Example:**
    ```html
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="Login">
    ```
    ```javascript
    // Select all input elements that have a 'name' attribute
    $("input[name]").css("margin-bottom", "10px");
    ```

#### 3.2 Select by Attribute Value

*   **Syntax:**
    *   `$("[attributeName='value']")`: Selects elements where the attribute's value is exactly "value".
    *   `$("[attributeName!='value']")`: Selects elements where the attribute's value is NOT "value".
    *   `$("[attributeName^='value']")`: Selects elements where the attribute's value begins with "value".
    *   `$("[attributeName$='value']")`: Selects elements where the attribute's value ends with "value".
    *   `$("[attributeName*='value']")`: Selects elements where the attribute's value contains "value".
    *   `$("[attributeName|='value']")`: Selects elements where the attribute's value is exactly "value" or starts with "value-" (useful for language codes like `lang="en-US"`).
    *   `$("[attributeName~='value']")`: Selects elements where the attribute's value is a space-separated list containing "value".

*   **Examples:**
    ```html
    <a href="https://www.example.com">Example Link</a>
    <a href="https://www.google.com">Google</a>
    <a href="/about">About Us</a>
    <img src="logo.png" alt="Company Logo">
    <img src="icon.gif" alt="Info Icon">
    <input type="text" id="user_name" name="username">
    <input type="email" id="user_email" name="email">
    ```
    ```javascript
    // Select links with href ending in .com
    $("a[href$='.com']").css("color", "green");

    // Select all input elements whose name attribute starts with "user_"
    $("input[name^='user_']").css("border-color", "purple");

    // Select images that have an 'alt' attribute containing the word "Logo"
    $("img[alt*='Logo']").css("border", "2px dashed red");

    // Select links that have an href attribute NOT ending in .com
    $("a[href$!='.com']").css("text-decoration", "underline");
    ```

---

### 4. Hierarchical (Relationship) Selectors

**Learning Outcome:** Select elements based on their position and relationship to other elements.

These selectors allow you to traverse the DOM tree.

#### 4.1 Descendant Selector

*   **Syntax:** `$(ancestor descendant)`
*   **Description:** Selects all `descendant` elements that are inside `ancestor` elements. The descendant can be any level down.
*   **Example:**
    ```html
    <div class="container">
        <p>Paragraph inside div.</p>
        <span>
            <p>Another paragraph inside a span inside div.</p>
        </span>
    </div>
    <p>Paragraph outside div.</p>
    ```
    ```javascript
    // Select all <p> elements that are descendants of an element with class "container"
    $(".container p").css("font-style", "italic");
    ```

#### 4.2 Child Selector

*   **Syntax:** `$(parent > child)`
*   **Description:** Selects all direct `child` elements that are immediate children of `parent` elements.
*   **Example:**
    ```html
    <ul class="list">
        <li>Item 1</li>
        <li>
            <span>Sub Item</span>
        </li>
        <li>Item 3</li>
    </ul>
    ```
    ```javascript
    // Select all <li> elements that are direct children of the <ul> with class "list"
    // Note: This will NOT select the <span> inside the second <li> if it were also a direct child of <ul>
    $(".list > li").css("list-style-type", "square");
    ```

#### 4.3 Adjacent Sibling Selector

*   **Syntax:** `$(element + adjacent)`
*   **Description:** Selects the `adjacent` element that immediately follows `element`. Both elements must share the same parent.
*   **Example:**
    ```html
    <h2>Heading</h2>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
    <h3>Another Heading</h3>
    <p>Third paragraph.</p>
    ```
    ```javascript
    // Select the <p> that immediately follows the <h2>
    $("h2 + p").css("margin-top", "0");

    // Select the <p> that immediately follows another <p>
    $("p + p").css("border-top", "1px dashed gray");
    ```

#### 4.4 General Sibling Selector

*   **Syntax:** `$(element ~ siblings)`
*   **Description:** Selects all `siblings` elements that follow `element` and share the same parent.
*   **Example:**
    ```html
    <div>
        <h2>Section Title</h2>
        <p>Introductory paragraph.</p>
        <p>Main content paragraph 1.</p>
        <p>Main content paragraph 2.</p>
        <div>Nested Div</div>
        <p>Final paragraph.</p>
    </div>
    ```
    ```javascript
    // Select all <p> elements that are siblings of and come after the <h2>
    $("h2 ~ p").css("color", "navy");
    ```

---

### 5. Filtering Selectors

**Learning Outcome:** Refine selections using filtering methods to target specific elements within a set.

Filtering selectors are methods called on a jQuery object that has already selected elements. They don't use CSS syntax directly within the `$(...)` but are crucial for refining selections.

#### 5.1 Filtering by Index

*   `.eq(index)`: Selects the element at the specified zero-based `index` within the matched set.
*   `.first()`: Selects the first element in the matched set. Equivalent to `.eq(0)`.
*   `.last()`: Selects the last element in the matched set.
*   `.even()`: Selects elements with an even index (0, 2, 4...).
*   `.odd()`: Selects elements with an odd index (1, 3, 5...).

*   **Examples:**
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    ```
    ```javascript
    // Select the second <li> (index 1)
    $("li").eq(1).css("background-color", "lightblue");

    // Select the first <li>
    $("li").first().css("font-weight", "bold");

    // Select the last <li>
    $("li").last().css("text-decoration", "underline");

    // Select all <li> elements at even positions (0, 2)
    $("li").even().css("color", "green");

    // Select all <li> elements at odd positions (1, 3)
    $("li").odd().css("color", "red");
    ```

#### 5.2 Filtering by Content

*   `.contains(text)`: Selects elements that contain the specified `text`. The text match is case-insensitive.
*   `.empty()`: Selects elements that do not have any child elements (including text nodes).
*   `.has(selector)`: Selects elements that have at least one descendant matching the specified `selector`.

*   **Examples:**
    ```html
    <p>Hello world</p>
    <p>Welcome everyone</p>
    <div>
        <span></span>
    </div>
    <p>Some text</p>
    ```
    ```javascript
    // Select <p> elements containing the word "world"
    $("p").filter(":contains('world')").css("background-color", "lightyellow"); // Using filter for more complex conditions

    // More direct way using contains directly
    $("p:contains('world')").css("font-weight", "bold");

    // Select <p> elements that are empty
    $("p").filter(":empty").css("border", "1px dashed orange");

    // Select <div> elements that have a <span> inside them
    $("div").filter(":has(span)").css("border", "2px solid blue");
    ```

#### 5.3 Filtering by Visibility

*   `.hidden()`: Selects elements that are hidden (e.g., `display: none`, `visibility: hidden`, `opacity: 0`, or input elements with `type="hidden"`).
*   `.visible()`: Selects elements that are visible.

*   **Examples:**
    ```html
    <p style="display: none;">Hidden paragraph 1</p>
    <p>Visible paragraph 1</p>
    <p style="visibility: hidden;">Hidden paragraph 2</p>
    <p style="opacity: 0;">Hidden paragraph 3</p>
    ```
    ```javascript
    // Select all hidden elements
    $(":hidden").css("background-color", "pink");

    // Select all visible elements
    $(":visible").css("color", "purple");
    ```

#### 5.4 Filtering by Attribute Value (Revisited with Filtering Methods)

While attribute selectors can be used directly, you can also combine general selectors with filtering methods for more complex scenarios.

*   `.filter(selector)`: Filters the matched set of elements to retain only those that match the provided selector.
*   `.not(selector)`: Filters out elements that match the provided selector.

*   **Examples:**
    ```html
    <a href="https://www.example.com">Example</a>
    <a href="https://www.google.com">Google</a>
    <a href="/about">About</a>
    ```
    ```javascript
    // Select all links, then filter to keep only those whose href ends with .com
    $("a").filter("[href$='.com']").css("border-bottom", "2px solid red");

    // Select all links, then remove those whose href ends with .com
    $("a").not("[href$='.com']").css("font-style", "italic");
    ```

---

### 6. Form Selectors

**Learning Outcome:** Select form elements and their states.

#### 6.1 Select by Input Type

*   `$(":input")`: Selects all `<input>`, `<textarea>`, `<select>`, and `<button>` elements.
*   `$(":text")`, `$:password`, `$:email`, `$:url`, `$:number`, `$:date`, `$:color`, `$:range`, `$:search`, `$:tel`, `$:time`, `$:file`, `$:checkbox`, `$:radio`, `$:submit`, `$:reset`, `$:button`: Selects specific types of input elements.

*   **Examples:**
    ```html
    <form>
        <input type="text" name="username">
        <input type="password" name="password">
        <button type="submit">Submit</button>
        <textarea></textarea>
    </form>
    ```
    ```javascript
    // Select all form input elements
    $(":input").css("padding", "5px");

    // Select all text input fields
    $(":text").css("border", "1px solid blue");

    // Select all checkboxes
    $(":checkbox").css("margin-right", "5px");
    ```

#### 6.2 Select by Form Element State

*   `$(":enabled")`: Selects enabled form elements.
*   `$(":disabled")`: Selects disabled form elements.
*   `$(":checked")`: Selects checked checkboxes and radio buttons.
*   `$(":selected")`: Selects the selected `<option>` element(s) within a `<select>`.

*   **Examples:**
    ```html
    <form>
        <input type="text" name="user" value="John Doe" disabled>
        <input type="checkbox" name="agree" checked> I agree
        <select>
            <option value="apple">Apple</option>
            <option value="banana" selected>Banana</option>
        </select>
    </form>
    ```
    ```javascript
    // Select all disabled input fields
    $(":disabled").css("background-color", "#eee");

    // Select the checked checkbox
    $(":checked").val("agree"); // Would set the value if it were a form submission

    // Select the currently selected option
    $("select option:selected").text(); // Would return "Banana"
    ```

---

### 7. Grouping Selectors (Multiple Selectors)

**Learning Outcome:** Combine multiple selectors to target various elements simultaneously.

*   **Syntax:** `$(selector1, selector2, selector3)` or `$(selector1 selector2 selector3)` (with space). The comma syntax is for combining different selectors, while space is for descendant.
*   **Description:** Allows you to select elements that match any of the provided selectors.
*   **Example:**
    ```html
    <p class="important">This is important.</p>
    <div id="main">Main content.</div>
    <h1>Section Title</h1>
    ```
    ```javascript
    // Select elements with class "important", the element with id "main", AND all h1 elements
    $(".important, #main, h1").css("border", "1px dotted orange");
    ```

---

### 8. Important Points to Remember

*   **`$(selector)` is the core:** Always wrap your selectors within the jQuery function `$(...)`.
*   **CSS Syntax is King:** Most jQuery selectors are directly derived from CSS syntax. If you know CSS selectors, you're halfway there.
*   **Performance:** While powerful, be mindful of overly broad selectors like `$("div p")` if your DOM is massive. Use specific IDs or classes whenever possible for better performance. The universal selector `$(*)` is the slowest.
*   **Chaining:** jQuery methods can often be chained together. For example: `$("p").addClass("highlight").css("color", "blue");`
*   **Context:** You can specify a context for your selector to search within a specific part of the DOM. `$(selector, context)`.
    ```javascript
    // Search for 'p' elements only within the element with id 'mySection'
    $("p", "#mySection").css("color", "red");
    // Or using .find():
    $("#mySection").find("p").css("color", "red");
    ```
*   **Case Sensitivity:** Attribute selectors (`[attribute='value']`) are case-sensitive for attribute values in HTML. CSS classes and IDs are generally case-sensitive depending on the document type.
*   **Efficiency of Filtering:** Use filtering methods (`.eq()`, `.filter()`, `.not()`, etc.) after an initial selection, rather than trying to build overly complex direct selectors that might be harder to read.

---

### 9. Practice Questions

1.  **Question:** How would you select all `<a>` tags that have an `href` attribute starting with `"https://www."`?
    *   **Answer:** `$("a[href^='https://www.']")`

2.  **Question:** You have a list (`<ul>`) where some list items (`<li>`) have the class `active`. How would you select only the active list items?
    *   **Answer:** `$("li.active")`

3.  **Question:** Given the HTML:
    ```html
    <div id="wrapper">
        <h2>Section 1</h2>
        <p>Content A</p>
        <p>Content B</p>
    </div>
    ```
    How would you select the `<p>` element that is an immediate child of the `div` with `id="wrapper"` and comes directly after an `<h2>` tag?
    *   **Answer:** `$("#wrapper > h2 + p")`

4.  **Question:** You want to select all paragraph elements (`<p>`) on the page that do *not* have the class `info`. How can you achieve this?
    *   **Answer:** `$("p").not(".info")` or `$("p:not(.info)")`

5.  **Question:** How would you select the first paragraph (`<p>`) on the page?
    *   **Answer:** `$("p").first()` or `$("p").eq(0)`

6.  **Question:** You need to select all the checked checkboxes. Which selector would you use?
    *   **Answer:** `$(":checkbox:checked")` or `$(":checked")` (if you are sure you only want checkboxes, otherwise `$(":checkbox")` and then filter for `:checked`). The most precise is `$(":checkbox").filter(":checked")`. However, `:checked` itself works for both checkboxes and radio buttons. A more direct approach is `$("input[type='checkbox']:checked")`.

---

This concludes the notes on jQuery Selectors. Understanding these selectors is fundamental to effectively manipulating web pages with jQuery.
