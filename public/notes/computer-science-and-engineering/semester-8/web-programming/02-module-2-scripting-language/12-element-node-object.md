---
title: "Element Node Object"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc2e"
status: "completed"
scrapedAt: "2026-05-20T17:28:20.731Z"
---
# Web Programming: Module 2 - Scripting Language

## Topic: Element Node Object

---

### 1. Understanding the Document Object Model (DOM)

Before diving into the Element Node Object, it's crucial to understand the **Document Object Model (DOM)**.

*   **Definition:** The DOM is a programming interface for HTML and XML documents. It represents the structure of the document as a tree of objects, where each object represents a part of the document.
*   **Purpose:** The DOM allows scripts (like JavaScript) to dynamically access and manipulate the content, structure, and style of a web page.
*   **Tree Structure:**
    *   The entire document is the **document node** (the root).
    *   Each HTML element (e.g., `<div>`, `<p>`, `<a>`) is an **element node**.
    *   Text content within an element is a **text node**.
    *   Attributes of an element (e.g., `id`, `class`, `href`) are **attribute nodes**.

#### **Key Concept:** Node Types

The DOM recognizes different types of nodes. The most common are:

*   **Element Node:** Represents an HTML element (e.g., `<div>`, `<span>`, `<img>`).
*   **Text Node:** Represents the text content within an element.
*   **Attribute Node:** Represents an attribute of an element (e.g., `href="index.html"`).
*   **Document Node:** Represents the entire HTML document.
*   **Comment Node:** Represents an HTML comment (`<!-- comment -->`).

#### **Example:**

Consider this HTML snippet:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1 id="main-heading">Welcome!</h1>
    <p class="intro">This is a paragraph.</p>
</body>
</html>
```

This would be represented in the DOM as:

*   **Document Node** (root)
    *   `<!DOCTYPE html>` (DocumentType Node)
    *   `<html>` (Element Node)
        *   `<head>` (Element Node)
            *   `<title>` (Element Node)
                *   "My Page" (Text Node)
        *   `<body>` (Element Node)
            *   `<h1>` (Element Node) - with an attribute node for `id="main-heading"`
                *   "Welcome!" (Text Node)
            *   `<p>` (Element Node) - with an attribute node for `class="intro"`
                *   "This is a paragraph." (Text Node)

---

### 2. The Element Node Object in JavaScript

The **Element Node Object** is the fundamental building block for interacting with HTML elements using JavaScript. It represents a single HTML element and provides methods and properties to manipulate it.

#### **Key Concepts and Definitions:**

*   **Element Node Object:** An object in JavaScript that corresponds to an HTML element in the DOM.
*   **Properties:** Characteristics of the element node (e.g., its tag name, ID, class name, content).
*   **Methods:** Actions that can be performed on the element node (e.g., changing its style, adding event listeners, appending children).

#### **Accessing Element Node Objects**

There are several ways to get a reference to an Element Node Object in JavaScript:

*   **`document.getElementById(id)`:**
    *   **Description:** Returns the element node with the specified `id`.
    *   **Key Point:** IDs must be unique within an HTML document.
    *   **Example:**
        ```javascript
        const mainHeading = document.getElementById('main-heading');
        console.log(mainHeading.tagName); // Output: H1
        ```

*   **`document.getElementsByClassName(className)`:**
    *   **Description:** Returns a **live HTMLCollection** of all elements in the document that have the specified class name.
    *   **Key Point:** It returns a collection, not a single element. You need to access individual elements by their index.
    *   **Example:**
        ```javascript
        const introParagraphs = document.getElementsByClassName('intro');
        console.log(introParagraphs[0].textContent); // Output: This is a paragraph.
        ```

*   **`document.getElementsByTagName(tagName)`:**
    *   **Description:** Returns a **live HTMLCollection** of all elements in the document that have the specified tag name.
    *   **Key Point:** Can be used for any HTML tag (e.g., 'DIV', 'P', 'A', 'IMG').
    *   **Example:**
        ```javascript
        const paragraphs = document.getElementsByTagName('p');
        console.log(paragraphs.length); // Output: (Number of <p> elements)
        ```

*   **`document.querySelector(selector)`:**
    *   **Description:** Returns the **first** element node that matches a specified CSS selector.
    *   **Key Point:** Very powerful as it uses CSS selectors (e.g., `#my-id`, `.my-class`, `div`, `div p`, `div > span`).
    *   **Example:**
        ```javascript
        const firstDiv = document.querySelector('div');
        const introPara = document.querySelector('.intro');
        const headingById = document.querySelector('#main-heading');
        ```

*   **`document.querySelectorAll(selector)`:**
    *   **Description:** Returns a **static NodeList** of all element nodes that match a specified CSS selector.
    *   **Key Point:** Similar to `querySelector` but returns all matches. NodeLists are iterable.
    *   **Example:**
        ```javascript
        const allParagraphs = document.querySelectorAll('p');
        allParagraphs.forEach(p => {
            console.log(p.textContent);
        });
        ```

#### **Important Point to Remember:**

`getElementsByClassName`, `getElementsByTagName`, and `querySelectorAll` return collections. You need to iterate through these collections to access individual element nodes. `querySelector` returns a single element node directly.

---

### 3. Properties of Element Node Objects

Element Node Objects have numerous properties that allow you to inspect and modify their characteristics.

#### **Common Properties:**

*   **`tagName`:**
    *   **Description:** Returns the tag name of the element (e.g., 'DIV', 'P', 'H1'). The name is always uppercase.
    *   **Example:** `element.tagName`

*   **`id`:**
    *   **Description:** Gets or sets the `id` attribute of the element.
    *   **Example:** `element.id = 'new-id';`

*   **`className`:**
    *   **Description:** Gets or sets the `class` attribute of the element. Can be used to add, remove, or replace multiple classes.
    *   **Example:**
        ```javascript
        element.className = 'new-class another-class'; // Replaces all existing classes
        ```

*   **`innerHTML`:**
    *   **Description:** Gets or sets the **HTML content** of the element. This includes any child elements or text.
    *   **Key Point:** Using `innerHTML` to set content can be a security risk if you're inserting user-provided HTML directly, as it can lead to Cross-Site Scripting (XSS) attacks.
    *   **Example:**
        ```javascript
        const myDiv = document.getElementById('my-div');
        myDiv.innerHTML = '<h2>A new heading</h2><p>Some new text.</p>';
        ```

*   **`textContent`:**
    *   **Description:** Gets or sets the **text content** of the element and all its descendants, stripping out any HTML tags.
    *   **Key Point:** Safer than `innerHTML` for inserting plain text. It preserves whitespace.
    *   **Example:**
        ```javascript
        const myParagraph = document.getElementById('my-p');
        myParagraph.textContent = 'This is the new plain text content.';
        ```

*   **`style`:**
    *   **Description:** Returns an object representing the inline styles of the element. You can access and modify CSS properties using camelCase (e.g., `backgroundColor`, `fontSize`).
    *   **Example:**
        ```javascript
        const myElement = document.getElementById('styled-element');
        myElement.style.color = 'blue';
        myElement.style.fontSize = '16px';
        myElement.style.backgroundColor = '#f0f0f0';
        ```

*   **`attributes`:**
    *   **Description:** Returns a `NamedNodeMap` of the element's attributes. You can access specific attributes using their names.
    *   **Example:**
        ```javascript
        const myLink = document.querySelector('a');
        console.log(myLink.attributes.href.value); // Gets the value of the href attribute
        ```

*   **`children`:**
    *   **Description:** Returns a live `HTMLCollection` of the element's child **elements** only (excluding text nodes and comment nodes).
    *   **Example:**
        ```javascript
        const parentDiv = document.getElementById('parent');
        const childElements = parentDiv.children;
        console.log(childElements.length);
        ```

*   **`childNodes`:**
    *   **Description:** Returns a live `NodeList` of all child nodes, including element nodes, text nodes, and comment nodes.
    *   **Example:**
        ```javascript
        const parentDiv = document.getElementById('parent');
        const allChildNodes = parentDiv.childNodes;
        console.log(allChildNodes.length); // Includes text nodes between elements
        ```

#### **Example: Manipulating Element Properties**

```html
<div id="user-info">
    <p class="name">John Doe</p>
    <p class="email">john.doe@example.com</p>
</div>

<button id="change-btn">Change Details</button>
```

```javascript
const userName = document.querySelector('.name');
const userEmail = document.querySelector('.email');
const changeButton = document.getElementById('change-btn');

changeButton.addEventListener('click', () => {
    // Change text content
    userName.textContent = 'Jane Smith';
    userEmail.textContent = 'jane.smith@example.com';

    // Change class
    userEmail.className = 'contact-info'; // Replaces 'email'

    // Change style
    userName.style.fontWeight = 'bold';
    userName.style.color = 'green';

    // Add an attribute (e.g., a data attribute)
    userName.setAttribute('data-user-status', 'active');
});
```

---

### 4. Methods of Element Node Objects

Element Node Objects provide methods to manipulate the DOM structure and attributes.

#### **Common Methods:**

*   **`setAttribute(name, value)`:**
    *   **Description:** Sets a new attribute or changes the value of an existing attribute on the element.
    *   **Example:** `element.setAttribute('data-custom', 'some-value');`

*   **`getAttribute(name)`:**
    *   **Description:** Returns the value of a specified attribute on the element.
    *   **Example:** `const dataVal = element.getAttribute('data-custom');`

*   **`removeAttribute(name)`:**
    *   **Description:** Removes a specified attribute from the element.
    *   **Example:** `element.removeAttribute('data-custom');`

*   **`appendChild(newNode)`:**
    *   **Description:** Adds a node (usually an element node) as the **last child** of the current element.
    *   **Key Point:** The `newNode` must be a valid Node object (e.g., created with `document.createElement()`).
    *   **Example:**
        ```javascript
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a newly added paragraph.';
        const parentDiv = document.getElementById('my-container');
        parentDiv.appendChild(newParagraph);
        ```

*   **`insertBefore(newNode, referenceNode)`:**
    *   **Description:** Inserts a `newNode` before a `referenceNode` which is a child of the current element.
    *   **Example:**
        ```javascript
        const existingElement = document.getElementById('existing');
        const newFirstElement = document.createElement('div');
        newFirstElement.textContent = 'This is the new first element.';
        const parent = existingElement.parentNode; // Get the parent of the existing element
        parent.insertBefore(newFirstElement, existingElement);
        ```

*   **`removeChild(childNode)`:**
    *   **Description:** Removes a specified child node from the current element.
    *   **Example:**
        ```javascript
        const itemToRemove = document.getElementById('item-to-delete');
        const parentList = itemToRemove.parentNode;
        parentList.removeChild(itemToRemove);
        ```

*   **`replaceChild(newNode, oldChild)`:**
    *   **Description:** Replaces an existing `oldChild` node with a `newNode` within the current element.
    *   **Example:**
        ```javascript
        const oldParagraph = document.getElementById('old-para');
        const newHeading = document.createElement('h3');
        newHeading.textContent = 'Replaced Content';
        const parent = oldParagraph.parentNode;
        parent.replaceChild(newHeading, oldParagraph);
        ```

*   **`createElement(tagName)`:**
    *   **Description:** Creates a new element node with the specified tag name. The element is created but not yet added to the document.
    *   **Example:** `const newDiv = document.createElement('div');`

*   **`cloneNode(deep)`:**
    *   **Description:** Creates a copy of the element node.
        *   `deep = true`: Clones the node and all its descendants (children).
        *   `deep = false`: Clones only the node itself, without its children.
    *   **Example:**
        ```javascript
        const originalElement = document.getElementById('original');
        const clonedElement = originalElement.cloneNode(true); // Deep clone
        document.body.appendChild(clonedElement);
        ```

#### **Example: Manipulating DOM Structure**

```html
<ul id="my-list">
    <li id="item1">Item 1</li>
    <li id="item2">Item 2</li>
</ul>

<button id="add-item-btn">Add Item</button>
<button id="remove-item-btn">Remove Item 2</button>
<button id="replace-item-btn">Replace Item 1</button>
```

```javascript
const myList = document.getElementById('my-list');
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const replaceItemBtn = document.getElementById('replace-item-btn');

// Add Item
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${myList.children.length + 1}`;
    myList.appendChild(newItem);
});

// Remove Item 2
removeItemBtn.addEventListener('click', () => {
    const itemToRemove = document.getElementById('item2');
    if (itemToRemove) { // Check if the item exists
        myList.removeChild(itemToRemove);
    }
});

// Replace Item 1
replaceItemBtn.addEventListener('click', () => {
    const oldItem = document.getElementById('item1');
    if (oldItem) {
        const newItem = document.createElement('li');
        newItem.textContent = 'Replaced Item 1';
        myList.replaceChild(newItem, oldItem);
    }
});
```

---

### 5. Working with Element Attributes

Element attributes can be manipulated in several ways.

#### **Methods for Attribute Manipulation:**

*   **`setAttribute(name, value)`** (already covered)
*   **`getAttribute(name)`** (already covered)
*   **`removeAttribute(name)`** (already covered)

#### **Direct Property Access for Common Attributes:**

Many common HTML attributes have direct JavaScript properties that offer a more convenient way to access/modify them.

*   **`id`**
*   **`className`**
*   **`src`** (for `<img>` tags)
*   **`href`** (for `<a>` tags)
*   **`alt`** (for `<img>` tags)
*   **`value`** (for `<input>`, `<select>`, `<textarea>`)
*   **`disabled`** (for form elements)

**Example:**

```html
<img id="my-image" src="default.jpg" alt="A default image">
<a href="https://example.com" id="my-link">Visit Example</a>
<input type="text" id="my-input" value="Initial Value">
```

```javascript
const image = document.getElementById('my-image');
const link = document.getElementById('my-link');
const inputField = document.getElementById('my-input');

// Changing attributes via properties
image.src = 'new-image.png';
image.alt = 'A new descriptive image';
link.href = 'https://developer.mozilla.org';
inputField.value = 'Updated Text';

// Using setAttribute for less common attributes
image.setAttribute('width', '200');

// Using getAttribute to retrieve
console.log(link.getAttribute('href')); // https://developer.mozilla.org
console.log(image.alt); // A new descriptive image
```

#### **Important Point to Remember:**

While `setAttribute` and `getAttribute` are general-purpose, using direct property access (like `element.id`, `element.src`) is often cleaner for standard attributes. However, `setAttribute` is essential for custom `data-*` attributes or attributes that don't have direct JS property mappings.

---

### 6. Element Traversal and Navigation

You can navigate between related element nodes using properties that represent their relationships in the DOM tree.

#### **Traversal Properties:**

*   **`parentNode`:**
    *   **Description:** Returns the parent node of the current node. If the node is the root, it returns `null`.
    *   **Example:** `const parent = element.parentNode;`

*   **`children`:** (already covered)
    *   **Description:** Returns a live `HTMLCollection` of the element's child **elements**.

*   **`childNodes`:** (already covered)
    *   **Description:** Returns a live `NodeList` of all child nodes (elements, text, comments).

*   **`firstChild`:**
    *   **Description:** Returns the first child node of the current node. If no children, returns `null`.
    *   **Example:** `const firstChild = element.firstChild;`

*   **`lastChild`:**
    *   **Description:** Returns the last child node of the current node. If no children, returns `null`.
    *   **Example:** `const lastChild = element.lastChild;`

*   **`nextSibling`:**
    *   **Description:** Returns the next node at the same level (sibling). If there is no next sibling, returns `null`.
    *   **Example:** `const nextSibling = element.nextSibling;`

*   **`previousSibling`:**
    *   **Description:** Returns the previous node at the same level (sibling). If there is no previous sibling, returns `null`.
    *   **Example:** `const prevSibling = element.previousSibling;`

*   **`nextElementSibling`:**
    *   **Description:** Returns the next **element** sibling of the current node. This is often more useful than `nextSibling` as it skips text and comment nodes.
    *   **Example:** `const nextElement = element.nextElementSibling;`

*   **`previousElementSibling`:**
    *   **Description:** Returns the previous **element** sibling of the current node. Skips text and comment nodes.
    *   **Example:** `const prevElement = element.previousElementSibling;`

#### **Example: Navigating the DOM**

```html
<div id="container">
    <p id="first-p">First paragraph</p>
    <span>Some text</span>
    <p id="second-p">Second paragraph</p>
</div>
```

```javascript
const container = document.getElementById('container');
const firstP = document.getElementById('first-p');
const secondP = document.getElementById('second-p');

// Navigate from firstP to container
console.log(firstP.parentNode === container); // true

// Navigate from container to its children elements
const childrenElements = container.children;
console.log(childrenElements[0].id); // 'first-p'
console.log(childrenElements[1].tagName); // 'SPAN'
console.log(childrenElements[2].id); // 'second-p'

// Navigate from firstP to next sibling element
const nextSiblingElement = firstP.nextElementSibling;
console.log(nextSiblingElement.tagName); // 'SPAN'

// Navigate from SPAN to previous sibling element
const prevSiblingElement = nextSiblingElement.previousElementSibling;
console.log(prevSiblingElement.id); // 'first-p'

// Navigate from secondP to parent
console.log(secondP.parentNode.id); // 'container'
```

---

### 7. Creating and Manipulating Nodes

This section reiterates and expands on creating and manipulating nodes, which are fundamental for dynamic content generation.

#### **Creating Nodes:**

*   **`document.createElement(tagName)`:** Creates an element node (e.g., `<div>`, `<p>`).
*   **`document.createTextNode(text)`:** Creates a text node.
*   **`document.createAttribute(name)`:** Creates an attribute node (less commonly used directly; often done via `setAttribute`).

#### **Adding Nodes:**

*   **`appendChild(newNode)`:** Adds to the end.
*   **`insertBefore(newNode, referenceNode)`:** Inserts before a specific node.

#### **Removing Nodes:**

*   **`removeChild(childNode)`:** Removes a specific child.
*   **`element.remove()`:** A simpler, more modern way to remove an element directly (supported in modern browsers).
    ```javascript
    const elementToRemove = document.getElementById('item-to-delete');
    elementToRemove.remove(); // Removes the element itself
    ```

#### **Replacing Nodes:**

*   **`replaceChild(newNode, oldChild)`:** Replaces a child.

#### **Example: Building a Dynamic List**

```html
<div id="dynamic-list-container">
    <h2>My Dynamic List</h2>
    <ul id="dynamic-ul">
        </ul>
    <button id="add-dynamic-item-btn">Add New Item</button>
</div>
```

```javascript
const dynamicUl = document.getElementById('dynamic-ul');
const addDynamicItemBtn = document.getElementById('add-dynamic-item-btn');

let itemCount = 0;

addDynamicItemBtn.addEventListener('click', () => {
    itemCount++;
    // 1. Create the new list item element
    const newItem = document.createElement('li');

    // 2. Create the text node for the item
    const itemText = document.createTextNode(`Dynamic Item ${itemCount}`);

    // 3. Append the text node to the list item
    newItem.appendChild(itemText);

    // 4. Set an ID for easy future reference (optional but good practice)
    newItem.id = `dynamic-item-${itemCount}`;

    // 5. Append the new list item to the unordered list
    dynamicUl.appendChild(newItem);
});
```

---

### Practice Questions/Exercises

**Question 1:**
Write JavaScript code to select the HTML element with the ID `myParagraph` and change its `textContent` to "Hello DOM!".

**Question 2:**
Given an HTML structure with a `div` containing multiple `p` tags, write JavaScript to select all `p` tags within that `div` and add the class `highlight` to each of them.

**Question 3:**
Create a new `<img>` element in JavaScript, set its `src` attribute to `"images/logo.png"` and its `alt` attribute to `"Company Logo"`, and then append it to the `body` of the document.

**Question 4:**
Find the first `<li>` element inside an unordered list with the ID `taskList`. Then, insert a new `<li>` element with the text "Important Task" *before* the first `<li>`.

**Question 5:**
Select an element with the class `card` and remove its `border` style property.

---

### Answers

**Answer 1:**

```javascript
const myParagraph = document.getElementById('myParagraph');
if (myParagraph) { // Always good to check if the element was found
    myParagraph.textContent = "Hello DOM!";
}
```

**Answer 2:**

```javascript
const containerDiv = document.querySelector('.container-class'); // Assuming the div has a class 'container-class'
if (containerDiv) {
    const paragraphs = containerDiv.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.classList.add('highlight'); // Using classList.add is generally preferred for managing classes
        // Alternatively: p.className += ' highlight';
    });
}
```

**Answer 3:**

```javascript
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/logo.png');
newImage.setAttribute('alt', 'Company Logo');
// Or using direct property access:
// newImage.src = 'images/logo.png';
// newImage.alt = 'Company Logo';

document.body.appendChild(newImage);
```

**Answer 4:**

```javascript
const taskList = document.getElementById('taskList');
if (taskList) {
    const firstLi = taskList.querySelector('li'); // Get the first <li>

    const newTask = document.createElement('li');
    newTask.textContent = 'Important Task';

    if (firstLi) {
        // Insert the new task before the first existing <li>
        taskList.insertBefore(newTask, firstLi);
    } else {
        // If there are no <li> elements, just append it
        taskList.appendChild(newTask);
    }
}
```

**Answer 5:**

```javascript
const cardElement = document.querySelector('.card');
if (cardElement) {
    cardElement.style.border = 'none'; // Or cardElement.style.removeProperty('border');
}
```

---

### Important Points to Remember:

*   **Case Sensitivity:** Tag names are typically returned in uppercase (`H1`, `DIV`).
*   **Live vs. Static Collections:** `getElementsByClassName` and `getElementsByTagName` return *live* `HTMLCollection`s, meaning they update automatically if the DOM changes. `querySelectorAll` returns a *static* `NodeList`.
*   **`innerHTML` vs. `textContent`:** Use `textContent` for plain text to avoid security risks. Use `innerHTML` when you need to insert or retrieve HTML markup.
*   **DOM Manipulation Methods:** Understand the difference between `appendChild`, `insertBefore`, `removeChild`, and `replaceChild`. The `remove()` method is a modern shortcut for removing an element.
*   **Traversal:** `nextElementSibling` and `previousElementSibling` are often more practical than `nextSibling` and `previousSibling` when you only care about element nodes.
*   **Error Handling:** Always consider checking if an element was successfully found before attempting to manipulate it (e.g., `if (element)`).
*   **Best Practices:** Use `classList` for managing CSS classes (e.g., `element.classList.add('my-class')`, `element.classList.remove('my-class')`, `element.classList.toggle('my-class')`) as it's cleaner and safer than directly manipulating `className`.

---
