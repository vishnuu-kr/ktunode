---
title: "Document Object"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0cc"
status: "completed"
scrapedAt: "2026-05-20T17:12:49.517Z"
---
# WEB PROGRAMMING: Module 2 - Scripting Language

## Topic: Document Object Model (DOM)

### 1. Introduction to the DOM

*   **What is the DOM?**
    *   The Document Object Model (DOM) is a **programming interface for web documents**. It represents the structure of an XML or HTML document as a tree of nodes.
    *   Each node represents a part of the document, such as an element, attribute, or text.
    *   The DOM allows scripting languages (like JavaScript) to **dynamically access and manipulate the content, structure, and style of a web page**.

*   **Why is the DOM important?**
    *   **Dynamic Content:** Enables web pages to change and update without requiring a full page reload.
    *   **Interactivity:** Allows for user interactions, like responding to button clicks or form submissions.
    *   **Structure and Style Manipulation:** Provides a way to alter the HTML structure and CSS styles of a page on the fly.

*   **How the DOM represents an HTML document:**
    *   Imagine an HTML document as a family tree.
    *   The `<html>` element is the root node.
    *   `head` and `body` are child nodes of `<html>`.
    *   Elements within `body` (like `<h1>`, `<p>`, `<div>`) are children of `body`, and so on.
    *   Attributes (like `id`, `class`, `src`) are properties of element nodes.
    *   Text content within elements are text nodes.

### 2. Core Concepts of the DOM

*   **Nodes:**
    *   The fundamental building blocks of the DOM.
    *   Everything in an HTML document is a node.
    *   **Types of Nodes:**
        *   **Document Node:** Represents the entire document (the root).
        *   **Element Node:** Represents an HTML tag (e.g., `<div>`, `<p>`, `<a>`).
        *   **Text Node:** Represents the text content within an element.
        *   **Attribute Node:** Represents an attribute of an element (e.g., `id="myDiv"`).
        *   **Comment Node:** Represents an HTML comment (`<!-- This is a comment -->`).

*   **The DOM Tree:**
    *   A hierarchical structure representing the relationships between nodes.
    *   **Parent Node:** A node that has another node as its child.
    *   **Child Node:** A node that is directly contained within another node.
    *   **Sibling Node:** Nodes that share the same parent.
    *   **Root Node:** The topmost node in the tree (the `document` object itself).

*   **The `document` Object:**
    *   The entry point to the DOM.
    *   It's a global object available in the browser's JavaScript environment.
    *   Represents the entire HTML document.
    *   Provides methods and properties to access and manipulate the DOM.

### 3. Accessing DOM Elements

*   **Methods for selecting elements:**
    *   `document.getElementById('elementId')`
        *   Selects a single element by its unique `id` attribute.
        *   **Returns:** An `Element` object or `null` if no element with the specified ID is found.
        *   **Example:**
            ```html
            <p id="myParagraph">This is a paragraph.</p>
            ```
            ```javascript
            const paragraphElement = document.getElementById('myParagraph');
            console.log(paragraphElement.textContent); // Output: This is a paragraph.
            ```

    *   `document.getElementsByClassName('className')`
        *   Selects all elements with a specific `class` attribute.
        *   **Returns:** An `HTMLCollection` (a live, array-like object) of elements.
        *   **Example:**
            ```html
            <div class="highlight">First highlight</div>
            <div class="highlight">Second highlight</div>
            ```
            ```javascript
            const highlightedDivs = document.getElementsByClassName('highlight');
            for (let i = 0; i < highlightedDivs.length; i++) {
                console.log(highlightedDivs[i].textContent);
            }
            // Output:
            // First highlight
            // Second highlight
            ```

    *   `document.getElementsByTagName('tagName')`
        *   Selects all elements with a specific tag name (e.g., 'p', 'div', 'a').
        *   **Returns:** An `HTMLCollection` of elements.
        *   **Example:**
            ```html
            <p>First paragraph</p>
            <p>Second paragraph</p>
            ```
            ```javascript
            const paragraphs = document.getElementsByTagName('p');
            console.log(paragraphs.length); // Output: 2
            ```

    *   `document.querySelector('selector')`
        *   Selects the **first** element that matches a specified CSS selector.
        *   Can use any valid CSS selector (e.g., `#myId`, `.myClass`, `div`, `p.intro`, `div > span`).
        *   **Returns:** An `Element` object or `null`.
        *   **Example:**
            ```html
            <div id="container">
                <p class="text">Some text.</p>
            </div>
            ```
            ```javascript
            const firstText = document.querySelector('.text');
            console.log(firstText.textContent); // Output: Some text.

            const containerDiv = document.querySelector('#container');
            console.log(containerDiv.tagName); // Output: DIV
            ```

    *   `document.querySelectorAll('selector')`
        *   Selects **all** elements that match a specified CSS selector.
        *   **Returns:** A `NodeList` (a static, array-like object) of elements.
        *   **Example:**
            ```html
            <ul>
                <li class="item">Item 1</li>
                <li class="item">Item 2</li>
            </ul>
            ```
            ```javascript
            const listItems = document.querySelectorAll('.item');
            listItems.forEach(item => {
                console.log(item.textContent);
            });
            // Output:
            // Item 1
            // Item 2
            ```

### 4. Manipulating DOM Elements

*   **Changing Content:**
    *   `element.textContent`: Gets or sets the text content of an element and all its descendants. It ignores HTML tags.
    *   `element.innerHTML`: Gets or sets the HTML content within an element. Be cautious when setting HTML from untrusted sources to prevent XSS attacks.
    *   **Example:**
        ```html
        <p id="contentChanger">Original Text</p>
        ```
        ```javascript
        const p = document.getElementById('contentChanger');

        // Using textContent
        p.textContent = "New plain text content.";
        console.log(p.innerHTML); // Output: New plain text content.

        // Using innerHTML
        p.innerHTML = "New <strong>bold</strong> text.";
        console.log(p.textContent); // Output: New bold text.
        ```

*   **Changing Attributes:**
    *   `element.getAttribute('attributeName')`: Gets the value of an attribute.
    *   `element.setAttribute('attributeName', 'newValue')`: Sets the value of an attribute.
    *   `element.removeAttribute('attributeName')`: Removes an attribute.
    *   **Example:**
        ```html
        <img id="myImage" src="old.jpg" alt="Old Image">
        ```
        ```javascript
        const img = document.getElementById('myImage');

        console.log(img.getAttribute('src')); // Output: old.jpg

        img.setAttribute('src', 'new.jpg');
        img.setAttribute('alt', 'New Image Description');
        img.removeAttribute('alt'); // Removes the alt attribute
        ```

*   **Changing Styles:**
    *   `element.style.propertyName`: Accesses and modifies inline styles. Property names are camelCased (e.g., `backgroundColor`, `fontSize`).
    *   `element.style.cssText`: Sets all inline styles at once (overwrites existing ones).
    *   **Example:**
        ```html
        <div id="styleBox">This is a box.</div>
        ```
        ```javascript
        const box = document.getElementById('styleBox');

        // Using individual style properties
        box.style.backgroundColor = 'lightblue';
        box.style.fontSize = '18px';
        box.style.padding = '10px';

        // Using cssText
        box.style.cssText = 'border: 1px solid black; margin-top: 5px;';
        ```
    *   **Note:** For more complex styling or to avoid inline styles, it's better to manipulate CSS classes.

*   **Manipulating Classes:**
    *   `element.classList`: Provides methods to add, remove, toggle, and check for the presence of CSS classes.
        *   `element.classList.add('className')`: Adds a class.
        *   `element.classList.remove('className')`: Removes a class.
        *   `element.classList.toggle('className')`: Adds the class if it's not present, removes it if it is.
        *   `element.classList.contains('className')`: Returns `true` if the element has the class, `false` otherwise.
    *   **Example:**
        ```html
        <div id="classManipulator" class="base-style">Styled Div</div>
        ```
        ```css
        .base-style {
            padding: 5px;
            background-color: lightgray;
        }
        .active {
            border: 2px solid blue;
            font-weight: bold;
        }
        ```
        ```javascript
        const div = document.getElementById('classManipulator');

        div.classList.add('active'); // Adds the 'active' class
        // div.classList.remove('base-style'); // Removes the 'base-style' class
        div.classList.toggle('active'); // Removes the 'active' class if present

        if (div.classList.contains('active')) {
            console.log("The div has the 'active' class.");
        }
        ```

### 5. Creating and Appending Elements

*   **Creating new elements:**
    *   `document.createElement('tagName')`: Creates a new HTML element with the specified tag name.
    *   **Returns:** An `Element` object.
    *   **Example:**
        ```javascript
        const newParagraph = document.createElement('p');
        newParagraph.textContent = "This is a newly created paragraph.";
        ```

*   **Appending elements:**
    *   `parentNode.appendChild(childNode)`: Adds a node as the **last child** of a parent node.
    *   `parentNode.insertBefore(newNode, referenceNode)`: Inserts `newNode` before `referenceNode` within `parentNode`. If `referenceNode` is `null`, it inserts at the end.
    *   **Example:**
        ```html
        <div id="parentDiv">
            <p>Existing paragraph.</p>
        </div>
        ```
        ```javascript
        const parentDiv = document.getElementById('parentDiv');

        // Create a new paragraph
        const newP = document.createElement('p');
        newP.textContent = "This is appended.";

        // Append the new paragraph to parentDiv
        parentDiv.appendChild(newP);
        // parentDiv now contains: <p>Existing paragraph.</p><p>This is appended.</p>

        // Create another element
        const anotherP = document.createElement('p');
        anotherP.textContent = "This is inserted before.";

        // Insert it before the first existing paragraph
        const firstExistingP = parentDiv.querySelector('p');
        parentDiv.insertBefore(anotherP, firstExistingP);
        // parentDiv now contains: <p>This is inserted before.</p><p>Existing paragraph.</p><p>This is appended.</p>
        ```

*   **Removing elements:**
    *   `parentNode.removeChild(childNode)`: Removes a child node from its parent.
    *   `element.remove()`: A simpler way to remove an element from the DOM (modern browsers).
    *   **Example:**
        ```html
        <div id="container">
            <p id="toRemove">Remove me!</p>
        </div>
        ```
        ```javascript
        const container = document.getElementById('container');
        const pToRemove = document.getElementById('toRemove');

        // Using removeChild
        // container.removeChild(pToRemove);

        // Using remove()
        pToRemove.remove();
        ```

### 6. DOM Events

*   **What are DOM Events?**
    *   Events are actions that occur on a web page, usually initiated by the user (e.g., clicking a button, typing in an input field, moving the mouse) or by the browser itself (e.g., page load, window resize).
    *   The DOM provides a way to listen for these events and execute JavaScript code in response.

*   **Event Listeners:**
    *   The `addEventListener()` method is the standard way to attach event handlers to elements.
    *   `element.addEventListener('eventType', handlerFunction, useCapture)`
        *   `eventType`: The type of event to listen for (e.g., `'click'`, `'mouseover'`, `'keydown'`, `'submit'`).
        *   `handlerFunction`: The function to execute when the event occurs. This function automatically receives an `Event` object as an argument.
        *   `useCapture`: (Optional) A boolean indicating whether to use event capturing (defaults to `false` for bubbling).

*   **Common Event Types:**
    *   **Mouse Events:** `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
    *   **Keyboard Events:** `keydown`, `keyup`, `keypress`
    *   **Form Events:** `submit`, `change`, `focus`, `blur`
    *   **Document/Window Events:** `load`, `unload`, `resize`, `scroll`

*   **The Event Object:**
    *   When an event occurs, an `Event` object is created and passed to the event handler.
    *   This object contains information about the event, such as:
        *   `event.target`: The element that triggered the event.
        *   `event.type`: The type of event.
        *   `event.preventDefault()`: Prevents the default browser action for the event (e.g., preventing a form submission that causes a page reload).
        *   `event.stopPropagation()`: Stops the event from bubbling up or capturing down the DOM tree.

*   **Example:**
    ```html
    <button id="myButton">Click Me</button>
    <input type="text" id="myInput">
    ```
    ```javascript
    const button = document.getElementById('myButton');
    const input = document.getElementById('myInput');

    // Click event listener on the button
    button.addEventListener('click', function(event) {
        alert('Button clicked!');
        console.log('Event target:', event.target); // The button element
    });

    // Input event listener on the input field
    input.addEventListener('input', function(event) {
        console.log('Input value:', event.target.value);
    });

    // Form submission example
    const myForm = document.getElementById('myForm'); // Assuming a form with id="myForm"
    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default page reload
        alert('Form submitted (without reload)!');
    });
    ```

### 7. Important Points to Remember

*   **DOM is a Tree Structure:** Understand the parent-child-sibling relationships between nodes.
*   **`document` is Your Entry Point:** Use it to access other nodes.
*   **Selectors are Key:** Master `querySelector` and `querySelectorAll` for efficient element selection.
*   **`textContent` vs. `innerHTML`:** Use `textContent` for plain text to enhance security. Use `innerHTML` carefully when inserting HTML.
*   **`classList` is Preferred:** Manipulating classes is generally better for styling than directly using `element.style`.
*   **Event Listeners for Interactivity:** Use `addEventListener` to make your pages dynamic.
*   **`event.preventDefault()` is Crucial:** Use it to control default browser behavior, especially for forms.
*   **Browser Compatibility:** While most DOM methods are widely supported, always be aware of potential differences in older browsers. Modern JavaScript features often have polyfills.

### 8. Practice Questions and Exercises

**Question 1:**
Given the following HTML, write a JavaScript code snippet to:
a) Select the `<h1>` element.
b) Change its `textContent` to "Welcome to DOM Manipulation!".
c) Add a CSS class named `main-title` to it.

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Practice</title>
    <style>
        .main-title {
            color: navy;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Initial Title</h1>
    <p class="content">Some content here.</p>
</body>
</html>
```

**Answer 1:**
```javascript
// a) Select the <h1> element
const headingElement = document.querySelector('h1');

// b) Change its textContent
headingElement.textContent = "Welcome to DOM Manipulation!";

// c) Add a CSS class named main-title
headingElement.classList.add('main-title');
```

---

**Question 2:**
Write a JavaScript code snippet to find all elements with the class `content` and change their background color to `yellow`.

**Answer 2:**
```javascript
const contentElements = document.getElementsByClassName('content'); // Or document.querySelectorAll('.content');

for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].style.backgroundColor = 'yellow';
}
```

---

**Question 3:**
Consider this HTML:
```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<button id="addItemBtn">Add Item</button>
```
Write JavaScript to:
a) Get a reference to the button and the list.
b) Add an event listener to the button so that when clicked, a new list item (`<li>`) with the text "New Item" is appended to the `<ul>`.

**Answer 3:**
```javascript
const list = document.getElementById('myList');
const addButton = document.getElementById('addItemBtn');

addButton.addEventListener('click', function() {
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';

    // Append it to the list
    list.appendChild(newItem);
});
```

---

**Question 4:**
What is the difference between `document.getElementById()` and `document.querySelector()`?

**Answer 4:**
*   `document.getElementById('elementId')`: Selects a **single** element based on its `id` attribute. It's generally faster for ID lookups.
*   `document.querySelector('selector')`: Selects the **first** element that matches a specified CSS selector. This can be an ID (`#myId`), a class (`.myClass`), a tag name (`div`), or a more complex combination of selectors. It's more versatile.

---

**Question 5:**
What is the purpose of `event.preventDefault()` within an event listener, and provide an example scenario?

**Answer 5:**
`event.preventDefault()` is used to stop the browser's default behavior associated with an event.

**Example Scenario:** When a user submits an HTML form, the default behavior is for the browser to send the form data to the server and often reload the page. If you want to handle the form submission using JavaScript (e.g., validate the data, send it via AJAX), you would use `event.preventDefault()` inside the `submit` event listener for the form to prevent this default page reload.

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)
    // Your custom form submission logic here (e.g., validation, AJAX)
    alert('Form submission handled by JavaScript!');
});
