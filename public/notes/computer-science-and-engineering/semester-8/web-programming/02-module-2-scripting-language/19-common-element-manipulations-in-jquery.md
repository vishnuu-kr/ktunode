---
title: "Common Element Manipulations in jQuery"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc35"
status: "completed"
scrapedAt: "2026-05-20T17:28:25.561Z"
---
# WEB PROGRAMMING: Module 2: Scripting Language

## Topic: Common Element Manipulations in jQuery

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental concepts of jQuery for manipulating HTML elements.
*   Select HTML elements using various jQuery selectors.
*   Modify the content of HTML elements (text and HTML).
*   Change attributes of HTML elements (e.g., `src`, `href`, `class`, `id`).
*   Alter the style of HTML elements using CSS properties.
*   Add, remove, and toggle CSS classes.
*   Insert and remove HTML elements dynamically.
*   Manipulate the DOM structure by appending, prepending, and replacing elements.
*   Understand event handling in jQuery to trigger manipulations based on user actions.

---

### 1. Introduction to jQuery Element Manipulations

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

#### Key Concepts:

*   **DOM (Document Object Model):** A programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. jQuery simplifies interacting with the DOM.
*   **Selectors:** Powerful ways to select HTML elements based on their tags, IDs, classes, attributes, and relationships to other elements.
*   **Chaining:** jQuery allows you to chain multiple methods together on the same selection, making code more concise.
*   **Encapsulation:** jQuery methods operate on jQuery objects, providing a consistent interface.

#### **Important Point to Remember:**

Always ensure the jQuery library is included in your HTML file *before* your custom JavaScript code that uses jQuery.

```html
<!DOCTYPE html>
<html>
<head>
    <title>jQuery Manipulations</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        // Your jQuery code will go here
    </script>
</head>
<body>
    <!-- HTML content will go here -->
</body>
</html>
```

---

### 2. Selecting HTML Elements in jQuery

Selectors are the foundation of jQuery. They allow you to target specific elements on your webpage.

#### Key Concepts & Definitions:

*   **`$()` function (jQuery wrapper):** The primary function used to select elements. It takes a selector string as an argument and returns a jQuery object containing the matched elements.
*   **Element Selector:** Selects elements by their tag name (e.g., `$('p')`).
*   **ID Selector:** Selects elements by their `id` attribute (e.g., `$('#myId')`). IDs must be unique.
*   **Class Selector:** Selects elements by their `class` attribute (e.g., `$('.myClass')`). Classes can be applied to multiple elements.
*   **Attribute Selector:** Selects elements based on their attributes and values (e.g., `$('a[target="_blank"]')` selects all `<a>` tags with a `target` attribute set to `_blank`).
*   **Hierarchical Selectors:**
    *   **Descendant Selector:** Selects all elements that are descendants of a specified element (e.g., `$('div p')` selects all `<p>` elements inside any `<div>`).
    *   **Child Selector:** Selects direct children of an element (e.g., `$('ul > li')` selects all `<li>` elements that are direct children of a `<ul>`).
    *   **Adjacent Sibling Selector:** Selects elements immediately following another element (e.g., `$('h1 + p')` selects the `<p>` element immediately after an `<h1>`).
    *   **General Sibling Selector:** Selects all sibling elements that follow another element (e.g., `$('h1 ~ p')` selects all `<p>` elements that are siblings of an `<h1>`).
*   **Basic Filter Selectors:**
    *   `:first`, `:last`: Selects the first or last element in a set.
    *   `:even`, `:odd`: Selects even or odd elements in a set (zero-based index).
    *   `:eq(index)`: Selects the element at a specific index.
    *   `:not(selector)`: Selects elements that *do not* match the specified selector.

#### Examples:

```html
<div id="main-content">
    <p class="intro">This is an introductory paragraph.</p>
    <p>Another paragraph.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
<p class="outro">This is an outro paragraph.</p>
```

```javascript
$(document).ready(function() {
    // Select all paragraph elements
    var allParagraphs = $('p');
    console.log(allParagraphs); // jQuery object containing all <p> elements

    // Select the element with id "main-content"
    var mainDiv = $('#main-content');
    console.log(mainDiv);

    // Select all elements with class "intro"
    var introParagraphs = $('.intro');
    console.log(introParagraphs);

    // Select the first paragraph within the main-content div
    var firstParaInMain = $('#main-content > p:first');
    console.log(firstParaInMain);

    // Select all list items within the main-content div
    var listItems = $('#main-content li');
    console.log(listItems);

    // Select the second list item (index 1)
    var secondListItem = $('li:eq(1)');
    console.log(secondListItem);

    // Select paragraphs that are NOT the intro paragraph
    var nonIntroParagraphs = $('p:not(.intro)');
    console.log(nonIntroParagraphs);
});
```

---

### 3. Manipulating Element Content

jQuery provides easy ways to get and set the text or HTML content of elements.

#### Key Concepts & Definitions:

*   **`.text()`:** Gets or sets the *text* content of selected elements. It will strip any HTML tags.
*   **`.html()`:** Gets or sets the *HTML* content of selected elements. It preserves HTML formatting.
*   **`.val()`:** Gets or sets the value of form elements (e.g., `<input>`, `<textarea>`, `<select>`).

#### Examples:

```html
<div id="content-box">
    <p>This is the <strong>original</strong> content.</p>
    <input type="text" value="Initial Value">
    <textarea>Some multi-line text.</textarea>
</div>
```

```javascript
$(document).ready(function() {
    // Get the text content of the div
    var divText = $('#content-box').text();
    console.log("Text content:", divText); // Output: This is the original content.

    // Get the HTML content of the div
    var divHtml = $('#content-box').html();
    console.log("HTML content:", divHtml); // Output: <p>This is the <strong>original</strong> content.</p>

    // Set new text content
    $('#content-box p').text("This is the new text content.");

    // Set new HTML content (note the strong tag will be rendered)
    $('#content-box p').html("This is the <em>new</em> <strong>HTML</strong> content.");

    // Get the value of the input field
    var inputValue = $('#content-box input[type="text"]').val();
    console.log("Input value:", inputValue); // Output: Initial Value

    // Set the value of the input field
    $('#content-box input[type="text"]').val("Updated Value");

    // Get the value of the textarea
    var textareaValue = $('#content-box textarea').val();
    console.log("Textarea value:", textareaValue);

    // Set the value of the textarea
    $('#content-box textarea').val("New content for the textarea.");
});
```

---

### 4. Manipulating Element Attributes

You can easily get, set, or remove attributes from HTML elements.

#### Key Concepts & Definitions:

*   **`.attr(attributeName)`:** Gets the value of a specific attribute.
*   **`.attr(attributeName, value)`:** Sets the value of a specific attribute.
*   **`.attr({ attributeName1: value1, attributeName2: value2 })`:** Sets multiple attributes at once.
*   **`.removeAttr(attributeName)`:** Removes a specific attribute.

#### Examples:

```html
<img id="myImage" src="image1.jpg" alt="A sample image" width="100">
<a id="myLink" href="http://example.com" target="_blank">Visit Example.com</a>
```

```javascript
$(document).ready(function() {
    // Get the src attribute of the image
    var imageSrc = $('#myImage').attr('src');
    console.log("Image source:", imageSrc); // Output: image1.jpg

    // Set the src and alt attributes of the image
    $('#myImage').attr({
        'src': 'new_image.png',
        'alt': 'A new updated image'
    });

    // Remove the width attribute from the image
    $('#myImage').removeAttr('width');

    // Get the href attribute of the link
    var linkHref = $('#myLink').attr('href');
    console.log("Link href:", linkHref); // Output: http://example.com

    // Change the href and remove the target attribute
    $('#myLink').attr('href', 'https://www.google.com');
    $('#myLink').removeAttr('target');
});
```

---

### 5. Manipulating Element Styles (CSS)

jQuery simplifies applying and modifying CSS styles directly to elements.

#### Key Concepts & Definitions:

*   **`.css(propertyName)`:** Gets the computed value of a CSS property.
*   **`.css(propertyName, value)`:** Sets the value of a single CSS property.
*   **`.css({ propertyName1: value1, propertyName2: value2 })`:** Sets multiple CSS properties at once.
*   **Note:** When setting CSS properties with hyphens (e.g., `background-color`), use camelCase in JavaScript (e.g., `backgroundColor`).

#### Examples:

```html
<div id="style-box">This text will be styled.</div>
```

```javascript
$(document).ready(function() {
    // Get the current color of the div
    var divColor = $('#style-box').css('color');
    console.log("Initial color:", divColor); // Will likely be black or inherited

    // Set single CSS properties
    $('#style-box').css('color', 'blue');
    $('#style-box').css('font-size', '20px');

    // Set multiple CSS properties
    $('#style-box').css({
        'background-color': 'yellow',
        'padding': '15px',
        'border': '1px solid black'
    });

    // Set a property using camelCase for hyphenated names
    $('#style-box').css('fontSize', '24px'); // Equivalent to 'font-size'
});
```

---

### 6. Manipulating CSS Classes

Managing CSS classes is a common task for controlling the appearance and behavior of elements. jQuery makes this very easy.

#### Key Concepts & Definitions:

*   **`.addClass(className)`:** Adds one or more classes to selected elements.
*   **`.removeClass(className)`:** Removes one or more classes from selected elements.
*   **`.toggleClass(className)`:** Adds the class if it's not present, and removes it if it is present.
*   **`.hasClass(className)`:** Checks if any of the selected elements have the specified class. Returns `true` or `false`.

#### Examples:

```html
<p id="statusMessage" class="info">This is a status message.</p>
<button id="toggleButton">Toggle Highlight</button>
```

```css
/* In your CSS file or <style> tag */
.highlight {
    background-color: yellow;
    font-weight: bold;
}
.error {
    color: red;
}
```

```javascript
$(document).ready(function() {
    // Add a class
    $('#statusMessage').addClass('highlight'); // Now the paragraph will be yellow and bold

    // Add another class
    $('#statusMessage').addClass('error'); // Now it will also be red

    // Remove a class
    $('#statusMessage').removeClass('info'); // Removes the 'info' class

    // Toggle a class when a button is clicked
    $('#toggleButton').click(function() {
        $('#statusMessage').toggleClass('highlight');
    });

    // Check if an element has a class
    if ($('#statusMessage').hasClass('error')) {
        console.log("The message has the error class.");
    }
});
```

---

### 7. Inserting and Removing HTML Elements

jQuery allows you to dynamically add and remove content from the DOM.

#### Key Concepts & Definitions:

*   **`.append(content)`:** Inserts content at the *end* of the selected elements.
*   **`.prepend(content)`:** Inserts content at the *beginning* of the selected elements.
*   **`.after(content)`:** Inserts content *after* the selected elements.
*   **`.before(content)`:** Inserts content *before* the selected elements.
*   **`.remove()`:** Removes the selected elements from the DOM.
*   **`.empty()`:** Removes all child elements and content from the selected elements.

#### Examples:

```html
<div id="container">
    <p>Existing paragraph.</p>
</div>
<button id="addContent">Add Content</button>
```

```javascript
$(document).ready(function() {
    $('#addContent').click(function() {
        // Append content to the end of the container
        $('#container').append('<p>New paragraph appended.</p>');

        // Prepend content to the beginning of the container
        $('#container').prepend('<h2>New Heading Prepend</h2>');

        // Insert a new paragraph after the container
        $('#container').after('<p>Paragraph after container.</p>');

        // Insert a new paragraph before the container
        $('#container').before('<p>Paragraph before container.</p>');

        // You can also append to specific elements within the container
        $('#container > p:last').append(' <span>Added to last paragraph.</span>');

        // To remove the entire container:
        // $('#container').remove();

        // To remove only the content within the container (leaving the container itself):
        // $('#container').empty();
    });
});
```

---

### 8. Manipulating DOM Structure (Moving and Replacing Elements)

Beyond just inserting, you can move or replace existing elements.

#### Key Concepts & Definitions:

*   **`.appendTo(target)`:** Appends the selected element(s) to the end of the target element(s).
*   **`.prependTo(target)`:** Prepends the selected element(s) to the beginning of the target element(s).
*   **`.insertAfter(target)`:** Inserts the selected element(s) after the target element(s).
*   **`.insertBefore(target)`:** Inserts the selected element(s) before the target element(s).
*   **`.replaceWith(content)`:** Replaces the selected elements with new content.
*   **`.replaceAll(target)`:** Replaces the target elements with the selected elements.

#### Examples:

```html
<div id="source">This content will be moved.</div>
<div id="destination"></div>
<p id="targetParagraph">Original paragraph.</p>
```

```javascript
$(document).ready(function() {
    // Move the source div to be appended to the destination div
    $('#source').appendTo('#destination');

    // Move the target paragraph to be prepended to the main container (assuming one exists)
    // $('#targetParagraph').prependTo('#container');

    // Move the target paragraph to be inserted after the destination div
    $('#targetParagraph').insertAfter('#destination');

    // Replace the paragraph with a new heading
    $('#targetParagraph').replaceWith('<h1>Replaced Heading</h1>');

    // Replace all paragraph elements with the content of the source div
    // $('p').replaceAll('#source'); // This would move the content of '#source' into each <p> and remove them.
});
```

---

### 9. Event Handling for Manipulations

Triggering element manipulations based on user actions (events) is a core part of web interactivity.

#### Key Concepts & Definitions:

*   **`.on(eventName, handler)`:** The primary method for attaching event handlers.
*   **`.click(handler)`:** A shorthand for `$(selector).on('click', handler)`.
*   **`.mouseover(handler)`:** A shorthand for `$(selector).on('mouseover', handler)`.
*   **`.submit(handler)`:** Attaches an event handler to the `submit` event of a form.
*   **Event Delegation:** Attaching event handlers to parent elements that can then manage events for their descendant elements (useful for dynamically added elements). This is often done using `$(parentSelector).on(eventName, childSelector, handler)`.

#### Examples:

```html
<button id="changeTextBtn">Change Text</button>
<div id="interactive-box">Click me!</div>
<form id="myForm">
    <input type="text" id="inputField">
    <button type="submit">Submit</button>
</form>
<div id="output"></div>
```

```javascript
$(document).ready(function() {
    // Change text when button is clicked
    $('#changeTextBtn').click(function() {
        $('#interactive-box').text('Text changed!');
    });

    // Change style when mouse hovers over the box
    $('#interactive-box').mouseover(function() {
        $(this).css('background-color', 'lightblue'); // 'this' refers to the element that triggered the event
    });

    // Reset style when mouse leaves the box
    $('#interactive-box').mouseout(function() {
        $(this).css('background-color', ''); // Reset to default
    });

    // Handle form submission
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission (page reload)
        var inputValue = $('#inputField').val();
        $('#output').text('You entered: ' + inputValue);
        $('#inputField').val(''); // Clear the input field
    });

    // Example of event delegation (if we were adding new list items dynamically)
    // $('ul').on('click', 'li', function() {
    //     $(this).toggleClass('selected');
    // });
});
```

---

### Practice Questions and Exercises

**Questions:**

1.  What is the primary function in jQuery used to select elements?
2.  Differentiate between `.text()` and `.html()`.
3.  How would you select all `<a>` tags that have a `target` attribute set to `_blank`?
4.  What is the jQuery method to add a CSS class named `active` to an element with the ID `nav-item`?
5.  If you want to insert a new paragraph *after* an existing `div` with the ID `myDiv`, which jQuery method would you use?
6.  What is the purpose of `event.preventDefault()` in a form submission handler?
7.  Explain the difference between `.append()` and `.appendTo()`.
8.  How would you change the `src` attribute of an image with the ID `productImage` to `images/new_product.jpg`?
9.  What jQuery method would remove all child elements from a `div` with the ID `results`?
10. How can you apply both `color: green;` and `font-weight: bold;` to a paragraph with the class `message` simultaneously using jQuery?

**Exercises:**

1.  **Create a simple HTML page with a heading, a paragraph, and a button.**
    *   When the button is clicked, change the text of the paragraph to "Button was clicked!".
    *   When the mouse hovers over the heading, change its text color to blue.
    *   When the mouse leaves the heading, revert its text color to black.

2.  **Create an HTML list (`<ul>` with `<li>` items).**
    *   Add a button that, when clicked, adds a new list item at the end with the text "New Item".
    *   Add another button that removes the *last* list item.

3.  **Create a simple form with a text input and a submit button.**
    *   When the form is submitted, prevent the default submission.
    *   Get the value from the text input and display it in a `div` below the form.
    *   Clear the text input after submission.

4.  **Create an image tag with an ID `profilePic`.**
    *   Add a button that, when clicked, changes the `src` of `profilePic` to a different image file and adds a CSS class `bordered` (you'll need to define `.bordered` in your CSS).
    *   Add another button that removes the `bordered` class.

---

### Answers to Practice Questions

1.  The primary function is `$()`.
2.  `.text()` gets or sets plain text content, stripping HTML. `.html()` gets or sets content as HTML, rendering tags.
3.  `$('a[target="_blank"]')`
4.  `$('#nav-item').addClass('active');`
5.  `$('#myDiv').after('<p>New paragraph</p>');`
6.  `event.preventDefault()` stops the browser from performing its default action for the event, such as submitting a form and reloading the page.
7.  `.append()` inserts content *into* a selected element at the end. `.appendTo()` takes a selected element and inserts it *into* a target element at the end. They achieve the same result but are called on different elements.
    *   `$('#container').append('<span>New text</span>');`
    *   `$('<span>New text</span>').appendTo('#container');`
8.  `$('#profilePic').attr('src', 'images/new_product.jpg');`
9.  `$('#results').empty();`
10. `$('.message').css({ 'color': 'green', 'font-weight': 'bold' });`

---

### Answers to Exercises

**Exercise 1 (HTML Structure):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercise 1</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        .blue-text { color: blue; }
    </style>
    <script>
        $(document).ready(function() {
            // Change paragraph text on button click
            $('#changeTextBtn').click(function() {
                $('p').text('Button was clicked!');
            });

            // Change heading color on hover
            $('h1').hover(
                function() { // Mouseenter
                    $(this).css('color', 'blue');
                },
                function() { // Mouseleave
                    $(this).css('color', 'black'); // Revert to black
                }
            );
        });
    </script>
</head>
<body>
    <h1>Hover over me!</h1>
    <p>This is the original paragraph.</p>
    <button id="changeTextBtn">Click to Change Text</button>
</body>
</html>
```

**Exercise 2 (HTML Structure):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercise 2</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            // Add new list item
            $('#addItemBtn').click(function() {
                $('#myList').append('<li>New Item</li>');
            });

            // Remove last list item
            $('#removeItemBtn').click(function() {
                $('#myList li:last').remove(); // Select the last li and remove it
            });
        });
    </script>
</head>
<body>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="addItemBtn">Add Item</button>
    <button id="removeItemBtn">Remove Last Item</button>
</body>
</html>
```

**Exercise 3 (HTML Structure):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercise 3</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#myForm').submit(function(event) {
                event.preventDefault(); // Prevent default page reload
                var userInput = $('#textInput').val(); // Get value from input
                $('#displayArea').text('You entered: ' + userInput); // Display it
                $('#textInput').val(''); // Clear the input
            });
        });
    </script>
</head>
<body>
    <form id="myForm">
        <input type="text" id="textInput" placeholder="Enter text">
        <button type="submit">Submit</button>
    </form>
    <div id="displayArea"></div>
</body>
</html>
```

**Exercise 4 (HTML Structure):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercise 4</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        .bordered {
            border: 3px solid green;
            padding: 10px;
        }
    </style>
    <script>
        $(document).ready(function() {
            $('#changePicBtn').click(function() {
                $('#profilePic').attr('src', 'https://via.placeholder.com/150/0000FF/FFFFFF?text=New+Image'); // Example placeholder image
                $('#profilePic').addClass('bordered');
            });

            $('#removeBorderBtn').click(function() {
                $('#profilePic').removeClass('bordered');
            });
        });
    </script>
</head>
<body>
    <img id="profilePic" src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Original+Image" alt="Profile Picture">
    <br><br>
    <button id="changePicBtn">Change Picture & Border</button>
    <button id="removeBorderBtn">Remove Border</button>
</body>
</html>
