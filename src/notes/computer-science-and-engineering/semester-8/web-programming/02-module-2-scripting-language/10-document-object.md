---
title: "Document Object"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc2c"
status: "completed"
scrapedAt: "2026-05-20T17:28:19.336Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Document Object Model (DOM)

---

### 1. Introduction to the Document Object Model (DOM)

#### 1.1 What is the DOM?

*   The DOM is a **programming interface for web documents**.
*   It represents the **structure of an HTML or XML document as a tree of objects**.
*   Each object in the tree represents a part of the document, such as an element, an attribute, or text.
*   The DOM allows scripting languages (like JavaScript) to **dynamically access, manipulate, and update the content, structure, and style of a web page**.

#### 1.2 Why is the DOM Important?

*   **Dynamic Content:** Enables the creation of interactive and dynamic web pages that can respond to user actions or data changes without full page reloads.
*   **User Experience:** Improves user experience by allowing for real-time updates, animations, and personalized content.
*   **Accessibility:** Can be used to make web content more accessible by programmatically changing content or providing alternative text.
*   **Data Manipulation:** Allows for the retrieval and manipulation of data from the HTML structure.

#### 1.3 How the DOM Works

*   When a web browser loads an HTML document, it parses the HTML code and builds a **DOM tree**.
*   This tree is a **hierarchical representation** where:
    *   The **`document` object** is the root of the tree.
    *   Each HTML element (like `<html>`, `<body>`, `<h1>`, `<p>`, `<div>`) becomes a **node** (specifically, an **Element node**) in the tree.
    *   Attributes of elements (like `id`, `class`, `href`) become **Attribute nodes**.
    *   The text content within elements becomes **Text nodes**.
*   JavaScript can then interact with this DOM tree by:
    *   **Selecting** specific nodes.
    *   **Modifying** node properties (e.g., changing text content, styles).
    *   **Adding** new nodes.
    *   **Removing** existing nodes.

---

### 2. The DOM as a Tree Structure

#### 2.1 Key Concepts: Nodes and Node Types

*   **Node:** The basic building block of the DOM tree. Everything in the DOM is a node.
*   **Document:** The root node of the entire document.
*   **Element:** Represents an HTML tag (e.g., `<p>`, `<div>`, `<a>`).
*   **Attribute:** Represents an attribute of an HTML element (e.g., `id="myId"`, `class="myClass"`).
*   **Text:** Represents the text content within an HTML element.
*   **Comment:** Represents an HTML comment (`<!-- This is a comment -->`).

#### 2.2 Node Relationships

*   **Parent Node:** A node that directly contains another node.
*   **Child Node:** A node that is directly contained within another node.
*   **Sibling Nodes:** Nodes that share the same parent node.

#### 2.3 Example of a DOM Tree

Consider the following HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="main-heading">Welcome!</h1>
    <p class="content">This is a paragraph.</p>
</body>
</html>
```

The DOM tree for this would look something like this:

```
Document
└── html
    ├── head
    │   └── title
    │       └── "DOM Example" (Text Node)
    └── body
        ├── h1 (Element Node with id="main-heading")
        │   └── "Welcome!" (Text Node)
        └── p (Element Node with class="content")
            └── "This is a paragraph." (Text Node)
```

---

### 3. Accessing DOM Elements

#### 3.1 Methods for Selecting Elements

JavaScript provides several built-in methods to select elements from the DOM:

*   **`document.getElementById(id)`:**
    *   **Purpose:** Returns the **single element** with the specified `id`.
    *   **Key Point:** IDs must be unique within an HTML document.
    *   **Example:**
        ```javascript
        const headingElement = document.getElementById('main-heading');
        console.log(headingElement); // <h1 id="main-heading">Welcome!</h1>
        ```

*   **`document.getElementsByClassName(className)`:**
    *   **Purpose:** Returns an **HTMLCollection** (a live, array-like object) of all elements that have the specified `class name`.
    *   **Key Point:** Can return multiple elements.
    *   **Example:**
        ```javascript
        const contentParagraphs = document.getElementsByClassName('content');
        console.log(contentParagraphs[0]); // <p class="content">This is a paragraph.</p>
        // To iterate:
        for (let i = 0; i < contentParagraphs.length; i++) {
            console.log(contentParagraphs[i].textContent);
        }
        ```

*   **`document.getElementsByTagName(tagName)`:**
    *   **Purpose:** Returns an **HTMLCollection** of all elements with the specified tag name (e.g., 'p', 'div', 'h1').
    *   **Key Point:** Can return multiple elements.
    *   **Example:**
        ```javascript
        const allParagraphs = document.getElementsByTagName('p');
        console.log(allParagraphs); // HTMLCollection of all <p> elements
        ```

*   **`document.querySelector(selector)`:**
    *   **Purpose:** Returns the **first element** within the document that matches the specified CSS selector.
    *   **Key Point:** Very versatile as it uses standard CSS selectors (e.g., `#myId`, `.myClass`, `div`, `p.content`).
    *   **Example:**
        ```javascript
        const firstHeading = document.querySelector('#main-heading'); // Select by ID
        const firstContent = document.querySelector('.content');     // Select by Class
        const firstDiv = document.querySelector('div');            // Select by Tag
        console.log(firstHeading);
        ```

*   **`document.querySelectorAll(selector)`:**
    *   **Purpose:** Returns a **NodeList** (a static, array-like object) of all elements within the document that match the specified CSS selector.
    *   **Key Point:** Returns all matches, not just the first.
    *   **Example:**
        ```javascript
        const allContentElements = document.querySelectorAll('.content');
        console.log(allContentElements); // NodeList of all elements with class "content"
        ```

#### 3.2 Important Distinction: `HTMLCollection` vs. `NodeList`

*   **`HTMLCollection`:**
    *   **Live:** Automatically updates if the DOM changes (e.g., elements are added or removed).
    *   Array-like but not a true array; lacks array methods like `forEach`.
    *   Returned by `getElementsByClassName` and `getElementsByTagName`.
*   **`NodeList`:**
    *   Can be **live** or **static** depending on how it was created. `querySelectorAll` returns a static NodeList.
    *   Static NodeLists are snapshots of the DOM at the time of creation and do not update automatically.
    *   Static NodeLists support the `forEach` method, making iteration easier.

---

### 4. Manipulating DOM Elements

Once you have selected an element, you can modify its properties and content.

#### 4.1 Changing Content

*   **`element.textContent`:**
    *   **Purpose:** Gets or sets the **text content** of an element and all its descendants.
    *   **Key Point:** Treats all HTML tags as plain text; HTML tags within the string are not rendered.
    *   **Example:**
        ```javascript
        const heading = document.getElementById('main-heading');
        heading.textContent = 'New Heading Text'; // Changes the text
        console.log(heading.textContent); // "New Heading Text"
        ```

*   **`element.innerHTML`:**
    *   **Purpose:** Gets or sets the **HTML content** of an element.
    *   **Key Point:** Parses and renders any HTML tags within the string. **Use with caution due to security risks (XSS) if the content comes from user input.**
    *   **Example:**
        ```javascript
        const content = document.querySelector('.content');
        content.innerHTML = 'This is a <strong>bold</strong> paragraph.'; // Adds HTML
        console.log(content.innerHTML); // "This is a <strong>bold</strong> paragraph."
        ```

#### 4.2 Changing Attributes

*   **`element.setAttribute(attributeName, attributeValue)`:**
    *   **Purpose:** Sets the value of an attribute on the specified element.
    *   **Example:**
        ```javascript
        const heading = document.getElementById('main-heading');
        heading.setAttribute('class', 'secondary-heading'); // Adds or changes the class attribute
        console.log(heading.getAttribute('class')); // "secondary-heading"
        ```

*   **Direct Property Access (for common attributes):**
    *   Many attributes can be accessed and modified directly as properties of the DOM element object.
    *   **Example:**
        ```javascript
        const link = document.querySelector('a'); // Assuming an <a> tag exists
        if (link) {
            link.href = 'https://www.example.com'; // Sets the href attribute
            link.textContent = 'Visit Example';    // Sets the text content
        }
        ```

*   **`element.removeAttribute(attributeName)`:**
    *   **Purpose:** Removes the specified attribute from the element.
    *   **Example:**
        ```javascript
        heading.removeAttribute('class');
        ```

#### 4.3 Changing Styles

*   **`element.style` property:**
    *   **Purpose:** Allows you to access and modify the inline styles of an element.
    *   **Key Point:** CSS property names are converted to camelCase (e.g., `background-color` becomes `backgroundColor`).
    *   **Example:**
        ```javascript
        const heading = document.getElementById('main-heading');
        heading.style.color = 'blue';
        heading.style.fontSize = '24px';
        heading.style.backgroundColor = '#f0f0f0';
        ```

*   **`element.classList` property:**
    *   **Purpose:** Provides methods to add, remove, toggle, or check for CSS classes on an element. This is generally the preferred way to manage styles as it keeps styles in your CSS files.
    *   **Methods:**
        *   `add(className)`: Adds a class.
        *   `remove(className)`: Removes a class.
        *   `toggle(className)`: Adds the class if it's not present, removes it if it is.
        *   `contains(className)`: Returns `true` if the element has the specified class, `false` otherwise.
    *   **Example:**
        ```javascript
        const paragraph = document.querySelector('.content');
        paragraph.classList.add('highlight'); // Adds the 'highlight' class
        paragraph.classList.remove('content'); // Removes the 'content' class
        paragraph.classList.toggle('active');  // Toggles the 'active' class
        if (paragraph.classList.contains('highlight')) {
            console.log('The paragraph is highlighted.');
        }
        ```

#### 4.4 Creating and Appending Elements

*   **`document.createElement(tagName)`:**
    *   **Purpose:** Creates a new HTML element with the specified tag name.
    *   **Example:**
        ```javascript
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a newly created paragraph.';
        ```

*   **`parentNode.appendChild(childNode)`:**
    *   **Purpose:** Adds a node as the **last child** of a parent node.
    *   **Example:**
        ```javascript
        const bodyElement = document.body; // Get the body element
        bodyElement.appendChild(newParagraph); // Adds the new paragraph to the end of the body
        ```

*   **`parentNode.insertBefore(newNode, referenceNode)`:**
    *   **Purpose:** Inserts a `newNode` into the `parentNode` before the `referenceNode`.
    *   **Example:**
        ```javascript
        const existingElement = document.getElementById('main-heading');
        const anotherParagraph = document.createElement('p');
        anotherParagraph.textContent = 'This paragraph comes before the heading.';
        existingElement.parentNode.insertBefore(anotherParagraph, existingElement);
        ```

#### 4.5 Removing Elements

*   **`element.remove()`:**
    *   **Purpose:** Removes the element from the DOM.
    *   **Example:**
        ```javascript
        const headingToRemove = document.getElementById('main-heading');
        if (headingToRemove) {
            headingToRemove.remove();
        }
        ```
        *(Note: `element.remove()` is a more modern and simpler way than the older `parentNode.removeChild(element)`)*

---

### 5. Events and Event Handling

#### 5.1 What are Events?

*   **Events** are actions that happen in the browser, such as:
    *   User actions: Clicking a button, typing in an input field, moving the mouse.
    *   Browser actions: The page finishing loading, resizing the window.
    *   Network events: Data being received.

#### 5.2 Event Listeners

*   **Event Listener:** A function that "listens" for a specific event on a specific DOM element and executes code when that event occurs.
*   **`element.addEventListener(eventType, listenerFunction)`:**
    *   **Purpose:** Attaches an event handler to the specified element.
    *   **`eventType`:** A string representing the event type (e.g., 'click', 'mouseover', 'keydown', 'load').
    *   **`listenerFunction`:** The function to be executed when the event fires.
    *   **Example:**
        ```javascript
        const myButton = document.getElementById('myButton'); // Assume a button with id="myButton"
        if (myButton) {
            myButton.addEventListener('click', function() {
                alert('Button clicked!');
            });
        }
        ```

#### 5.3 The Event Object

*   When an event occurs, an **event object** is automatically created and passed as an argument to the event listener function.
*   This object contains information about the event, such as:
    *   `event.target`: The element that triggered the event.
    *   `event.type`: The type of event (e.g., 'click').
    *   `event.clientX`, `event.clientY`: Mouse coordinates.
    *   `event.key`: The key pressed (for keyboard events).
*   **Example:**
    ```javascript
    myButton.addEventListener('click', function(event) {
        console.log('Event type:', event.type); // Outputs: "click"
        console.log('Target element:', event.target); // Outputs the button element
    });
    ```

#### 5.4 `event.preventDefault()`

*   **Purpose:** Stops the browser's default action for an event.
*   **Example:** For a form submission, `event.preventDefault()` will stop the form from submitting and reloading the page, allowing you to handle the submission with JavaScript (e.g., AJAX).
    ```html
    <form id="myForm">
        <input type="text" id="myInput">
        <button type="submit">Submit</button>
    </form>
    ```
    ```javascript
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission
        const inputValue = document.getElementById('myInput').value;
        console.log('Form submitted with value:', inputValue);
    });
    ```

---

### 6. Important Points to Remember

*   **Case Sensitivity:** HTML is generally case-insensitive, but DOM manipulation in JavaScript often involves case-sensitive strings for IDs, class names, and tag names.
*   **Unique IDs:** `document.getElementById()` relies on unique IDs. If you have duplicate IDs, it will only return the first one it finds.
*   **HTMLCollection vs. NodeList:** Be aware of the differences, especially the "liveness" of `HTMLCollection` and the availability of `forEach` on static `NodeList`s.
*   **`textContent` vs. `innerHTML`:** Use `textContent` for plain text and `innerHTML` when you need to insert HTML. Be mindful of security when using `innerHTML` with external data.
*   **`style` vs. `classList`:** Prefer `classList` for managing styles as it promotes cleaner separation of concerns and better maintainability.
*   **DOM is Live:** Changes you make to the DOM are reflected in the browser immediately.
*   **Performance:** Repeatedly accessing the DOM can be slow. Consider caching elements or making changes in batches if performance is critical.
*   **Error Handling:** Always check if an element was found before trying to manipulate it (e.g., `if (myElement) { ... }`) to avoid errors.

---

### Practice Questions & Exercises

**Question 1:**
What is the primary purpose of the Document Object Model (DOM) in web programming?

**Question 2:**
Which method is used to select the *first* element that matches a given CSS selector?
a) `getElementsByClassName()`
b) `querySelector()`
c) `querySelectorAll()`
d) `getElementById()`

**Question 3:**
Explain the difference between `element.textContent` and `element.innerHTML`. When would you prefer one over the other?

**Question 4:**
Write a JavaScript code snippet that:
1. Selects an element with the ID `myImage`.
2. Changes its `src` attribute to `images/new_image.jpg`.
3. Changes its `alt` attribute to `A new description`.

**Question 5:**
Consider the following HTML:
```html
<button id="changeColorBtn">Change Color</button>
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightblue;"></div>
```
Write a JavaScript code snippet that adds an event listener to the button. When the button is clicked, the `background-color` of `myDiv` should change to `lightgreen`.

**Question 6:**
What is `event.preventDefault()` used for? Provide a common scenario where it is useful.

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose of the DOM is to represent the structure of an HTML or XML document as a tree of objects, allowing scripting languages like JavaScript to dynamically access, manipulate, and update the content, structure, and style of a web page.

**Answer 2:**
b) `querySelector()`

**Answer 3:**
*   **`element.textContent`:** Retrieves or sets the *text content* of an element and its descendants. It treats all HTML tags as plain text and does not render them.
*   **`element.innerHTML`:** Retrieves or sets the *HTML content* of an element. It parses and renders any HTML tags within the string.

You would prefer `textContent` when you only want to deal with plain text and want to avoid any potential security risks from executing HTML. You would prefer `innerHTML` when you need to insert actual HTML markup into an element, but you must be cautious about security if the content comes from an untrusted source.

**Answer 4:**
```javascript
const myImage = document.getElementById('myImage');

if (myImage) { // Good practice to check if the element exists
    myImage.setAttribute('src', 'images/new_image.jpg');
    myImage.setAttribute('alt', 'A new description');

    // Alternatively, for common attributes like src and alt, you can use direct property access:
    // myImage.src = 'images/new_image.jpg';
    // myImage.alt = 'A new description';
}
```

**Answer 5:**
```javascript
const changeColorBtn = document.getElementById('changeColorBtn');
const myDiv = document.getElementById('myDiv');

if (changeColorBtn && myDiv) {
    changeColorBtn.addEventListener('click', function() {
        myDiv.style.backgroundColor = 'lightgreen';
    });
}
```

**Answer 6:**
`event.preventDefault()` is used to **stop the browser's default behavior** for a particular event.

A common scenario where it is useful is when handling form submissions. By default, submitting a form reloads the page. If you want to handle the form submission using JavaScript (e.g., sending data via AJAX without a page refresh), you would call `event.preventDefault()` within the submit event listener. Other scenarios include preventing default link behavior (`href`) or default form validation messages.
