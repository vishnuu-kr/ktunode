---
title: "JavaScript library - jQuery - jQuery Foundations - Including jQuery"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0d4"
status: "completed"
scrapedAt: "2026-05-20T17:12:57.356Z"
---
# WEB PROGRAMMING: Module 2: Scripting Language

## Topic: JavaScript Library - jQuery - jQuery Foundations - Including jQuery

---

### **1. Introduction to jQuery**

#### **1.1 What is a JavaScript Library?**

*   **Definition:** A JavaScript library is a collection of pre-written JavaScript code that provides ready-to-use functions and methods to simplify common web development tasks.
*   **Purpose:**
    *   **Abstraction:** Hides complex JavaScript code and provides simpler, more intuitive syntax.
    *   **Efficiency:** Reduces the amount of code developers need to write.
    *   **Cross-browser Compatibility:** Handles differences in how browsers interpret JavaScript, ensuring consistent behavior.
    *   **Reusability:** Provides reusable components for various functionalities.

#### **1.2 What is jQuery?**

*   **Definition:** jQuery is a fast, small, and feature-rich JavaScript library. It simplifies HTML document traversal and manipulation, event handling, animation, and Ajax.
*   **Tagline:** "Write less, do more."
*   **Key Philosophy:** To make it easier to use JavaScript on a website.

#### **1.3 Why Use jQuery?**

*   **Simplicity:** Its syntax is more concise and easier to learn than plain JavaScript for many tasks.
*   **DOM Manipulation:** Excellent for selecting, modifying, and adding/removing elements from the HTML Document Object Model (DOM).
*   **Event Handling:** Provides a simplified and consistent way to attach event listeners.
*   **AJAX Support:** Makes it easier to perform asynchronous requests to the server without reloading the page.
*   **Animations:** Offers built-in animation effects and a framework for creating custom animations.
*   **Plugin Ecosystem:** A vast collection of plugins extend jQuery's functionality for almost any need (e.g., sliders, galleries, form validation).
*   **Browser Compatibility:** Handles cross-browser inconsistencies automatically.

---

### **2. Including jQuery in your Project**

To use jQuery, you need to include it in your HTML file. There are two primary methods:

#### **2.1 Using a Content Delivery Network (CDN)**

*   **What is a CDN?** A network of distributed servers that deliver web content (like JavaScript files) to users based on their geographic location.
*   **Advantages of CDN:**
    *   **Faster Loading:** Users might already have the jQuery file cached in their browser from visiting other websites that use the same CDN.
    *   **Reduced Server Load:** Your web server doesn't have to serve the jQuery file.
    *   **Reliability:** CDNs are generally highly available.
*   **How to include:** Add a `<script>` tag in the `<head>` or, preferably, just before the closing `</body>` tag of your HTML document.

    **Example (using Google CDN):**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>My jQuery Page</title>
        <!-- Include jQuery from Google CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    </head>
    <body>

        <h1>Hello, jQuery!</h1>
        <p id="myParagraph">This is a paragraph.</p>

        <script>
            // Your jQuery code will go here
        </script>

    </body>
    </html>
    ```

    **Explanation:**
    *   `src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"`: This attribute points to the location of the jQuery file on the Google CDN. Replace `3.7.1` with the desired version.
    *   `.min.js`: Indicates the minified version of the jQuery file. Minification removes unnecessary characters (whitespace, comments) to reduce file size, leading to faster downloads.
    *   **Placement:** Including the script tag just before `</body>` ensures that the HTML content is loaded and available in the DOM before the JavaScript tries to interact with it.

#### **2.2 Downloading jQuery and Hosting Locally**

*   **When to use:** If you need offline access, have specific security concerns, or want complete control over the file.
*   **How to download:**
    1.  Go to the official jQuery website: [https://jquery.com/download/](https://jquery.com/download/)
    2.  Download the desired version (e.g., the latest stable release). You'll typically choose between the "compressed, production" (minified) and "uncompressed, development" (readable) versions.
    3.  Save the downloaded `.js` file into your project's directory (e.g., in a `js` subfolder).
*   **How to include:** Add a `<script>` tag with the `src` attribute pointing to your local file.

    **Example (assuming jQuery is in a `js` folder):**

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>My jQuery Page</title>
    </head>
    <body>

        <h1>Hello, jQuery!</h1>
        <p id="myParagraph">This is a paragraph.</p>

        <!-- Include jQuery from local file -->
        <script src="js/jquery-3.7.1.min.js"></script>
        <script>
            // Your jQuery code will go here
        </script>

    </body>
    </html>
    ```

    **Explanation:**
    *   `src="js/jquery-3.7.1.min.js"`: This tells the browser to look for the `jquery-3.7.1.min.js` file within a `js` folder located in the same directory as your HTML file.

---

### **3. The jQuery() Function and the `$` Alias**

#### **3.1 The `jQuery()` Function**

*   **Purpose:** The fundamental function in jQuery. It's used to select HTML elements and wrap them in a jQuery object.
*   **Syntax:** `jQuery(selector)` or `jQuery(html)` or `jQuery(callback)`

#### **3.2 The `$` Alias**

*   **What it is:** A shorthand or alias for the `jQuery()` function. It's the most common way you'll see and write jQuery code.
*   **Why use it:** Brevity and ease of typing.
*   **Syntax:** `$(selector)` or `$(html)` or `$(callback)`

    **Example:**

    ```javascript
    // Selecting an element with ID 'myParagraph' using jQuery()
    jQuery('#myParagraph').hide();

    // Selecting the same element using the $ alias
    $('#myParagraph').hide(); // This is the preferred and more common way
    ```

#### **3.3 Understanding Selectors**

*   **Purpose:** Selectors are patterns used to find specific HTML elements. jQuery uses CSS selectors.
*   **Common Selectors:**
    *   **By ID:** `$('#elementId')` - Selects an element with a specific ID.
    *   **By Class:** `$('.className')` - Selects all elements with a specific class.
    *   **By Tag Name:** `$('tagName')` - Selects all elements with a specific tag name (e.g., `$('p')`, `$('div')`).
    *   **Attribute Selectors:** `$('input[type="text"]')` - Selects input elements with the type attribute set to "text".
    *   **Descendant Selectors:** `$('div p')` - Selects all `<p>` elements that are descendants of a `<div>` element.
    *   **Child Selectors:** `$('ul > li')` - Selects all `<li>` elements that are direct children of a `<ul>` element.
    *   **Universal Selector:** `$(' * ')` - Selects all elements (use with caution, can be performance intensive).

    **Example:**

    ```html
    <p class="highlight">This is a highlighted paragraph.</p>
    <div>
        <p>This paragraph is inside a div.</p>
    </div>
    <input type="text" name="username">
    ```

    ```javascript
    $(document).ready(function() {
        // Select the paragraph with the class "highlight"
        $('.highlight').css('color', 'blue');

        // Select all paragraphs inside a div
        $('div p').css('font-weight', 'bold');

        // Select the input element with name "username"
        $('input[name="username"]').val('Default Value');
    });
    ```

---

### **4. The `$(document).ready()` Method**

#### **4.1 Purpose**

*   **Definition:** Ensures that your jQuery code runs only after the entire HTML document has been loaded and is ready for manipulation. This is crucial because if you try to select and manipulate an element that hasn't been parsed yet, your code will fail.
*   **Analogy:** It's like waiting for all the bricks to be laid before you start painting the walls.

#### **4.2 Syntax**

There are two common ways to write `$(document).ready()`:

1.  **Standard Syntax:**

    ```javascript
    $(document).ready(function() {
        // Your jQuery code goes here
        // This code will execute when the DOM is ready
    });
    ```

2.  **Shorthand Syntax:**

    ```javascript
    $(function() {
        // Your jQuery code goes here
        // This code will execute when the DOM is ready
    });
    ```
    This shorthand is functionally identical to the standard syntax and is widely used for its conciseness.

#### **4.3 Example**

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Document Ready Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>

    <h1 id="mainHeading">Welcome!</h1>
    <p id="intro">This is the introduction.</p>

    <script>
        // jQuery code will be placed here
    </script>

</body>
</html>
```

**JavaScript (within the `<script>` tags):**

```javascript
$(document).ready(function() {
    // This code will run only after the DOM is fully loaded
    $('#mainHeading').text('jQuery is Ready!');
    $('#intro').css('color', 'green');
});

// Or using the shorthand:
/*
$(function() {
    $('#mainHeading').text('jQuery is Ready!');
    $('#intro').css('color', 'green');
});
*/
```

**Explanation:**
When the `index.html` page loads, the browser first downloads the jQuery library. Then, it parses the HTML. The `$(document).ready()` function acts as a gatekeeper. It waits until the `<h1>` and `<p>` elements are fully parsed and available in the DOM. Once they are ready, the code inside the `ready()` function executes, changing the text of the `<h1>` and the color of the `<p>`.

---

### **5. Basic jQuery Operations**

Once jQuery is included and you're within a `$(document).ready()` block, you can start performing operations.

#### **5.1 Getting and Setting Text/HTML Content**

*   **`.text()`:** Gets or sets the *text* content of selected elements. It strips out any HTML tags.
*   **`.html()`:** Gets or sets the *HTML* content of selected elements. It preserves HTML tags.

    **Example:**

    ```html
    <p id="textPara">This is <strong>bold</strong> text.</p>
    <div id="htmlContainer"></div>
    ```

    ```javascript
    $(document).ready(function() {
        // Get text content
        let paragraphText = $('#textPara').text();
        console.log(paragraphText); // Output: This is bold text.

        // Get HTML content
        let paragraphHtml = $('#textPara').html();
        console.log(paragraphHtml); // Output: This is <strong>bold</strong> text.

        // Set text content
        $('#textPara').text('This text replaced the original.');

        // Set HTML content
        $('#htmlContainer').html('<h2>A new heading</h2><p>And a new paragraph!</p>');
    });
    ```

#### **5.2 Getting and Setting Attribute Values**

*   **`.attr(attributeName)`:** Gets the value of a specified attribute.
*   **`.attr(attributeName, value)`:** Sets the value of a specified attribute.

    **Example:**

    ```html
    <img id="myImage" src="logo.png" alt="Company Logo">
    <a id="myLink" href="https://www.example.com">Visit Example</a>
    ```

    ```javascript
    $(document).ready(function() {
        // Get the 'src' attribute of the image
        let imageSource = $('#myImage').attr('src');
        console.log(imageSource); // Output: logo.png

        // Get the 'href' attribute of the link
        let linkUrl = $('#myLink').attr('href');
        console.log(linkUrl); // Output: https://www.example.com

        // Change the 'src' attribute of the image
        $('#myImage').attr('src', 'new_logo.png');

        // Change the 'href' attribute of the link
        $('#myLink').attr('href', 'https://www.google.com');
        $('#myLink').text('Go to Google');
    });
    ```

#### **5.3 Modifying CSS Styles**

*   **`.css(propertyName)`:** Gets the value of a CSS property.
*   **`.css(propertyName, value)`:** Sets a single CSS property.
*   **`.css({propertyName1: value1, propertyName2: value2})`:** Sets multiple CSS properties using an object.

    **Example:**

    ```html
    <div id="styledDiv">This div needs styling.</div>
    ```

    ```javascript
    $(document).ready(function() {
        // Get the color property
        let originalColor = $('#styledDiv').css('color');
        console.log(originalColor); // Output: (e.g., 'rgb(0, 0, 0)')

        // Set a single CSS property
        $('#styledDiv').css('background-color', 'yellow');

        // Set multiple CSS properties
        $('#styledDiv').css({
            'font-size': '20px',
            'border': '1px solid black',
            'padding': '10px'
        });
    });
    ```

#### **5.4 Adding and Removing CSS Classes**

*   **`.addClass(className)`:** Adds one or more classes to the selected elements.
*   **`.removeClass(className)`:** Removes one or more classes from the selected elements.
*   **`.toggleClass(className)`:** Adds the class if it's not present, removes it if it is.
*   **`.hasClass(className)`:** Checks if any of the selected elements have the specified class (returns `true` or `false`).

    **Example:**

    ```html
    <style>
        .highlight-blue {
            color: blue;
            font-weight: bold;
        }
        .bordered {
            border: 2px dashed red;
        }
    </style>

    <p id="myParaToStyle">This paragraph will be styled.</p>
    ```

    ```javascript
    $(document).ready(function() {
        // Add a class
        $('#myParaToStyle').addClass('highlight-blue');

        // Add multiple classes
        $('#myParaToStyle').addClass('bordered');

        // Remove a class
        $('#myParaToStyle').removeClass('bordered');

        // Toggle a class (let's imagine a button click event here)
        // For demonstration, let's just toggle it twice
        $('#myParaToStyle').toggleClass('highlight-blue'); // Removes highlight-blue
        $('#myParaToStyle').toggleClass('highlight-blue'); // Adds highlight-blue back

        // Check if a class exists
        if ($('#myParaToStyle').hasClass('highlight-blue')) {
            console.log('The paragraph has the highlight-blue class.');
        }
    });
    ```

---

### **6. Practice Questions and Exercises**

---

#### **Practice Question 1:**

**Scenario:** You have an HTML file with a heading `<h1>My Website</h1>` and a paragraph `<p id="message">Loading...</p>`. You want to change the heading's text to "Welcome to jQuery!" and change the paragraph's text color to green using jQuery.

**Task:** Write the necessary HTML and JavaScript code to achieve this.

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>jQuery Practice 1</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>

    <h1>My Website</h1>
    <p id="message">Loading...</p>

    <script>
        // JavaScript code goes here
    </script>

</body>
</html>
```

**JavaScript Solution:**

```javascript
$(document).ready(function() {
    // Change the heading's text
    $('h1').text('Welcome to jQuery!');

    // Change the paragraph's text color
    $('#message').css('color', 'green');
    $('#message').text('Content is ready!'); // Optional: also update the text
});
```

---

#### **Practice Question 2:**

**Scenario:** You have an image tag `<img id="productImage" src="default.jpg" alt="Product Image">` and a link `<a id="infoLink" href="#">More Info</a>`. You want to change the image source to `featured.jpg`, update the alt text to "Featured Product", and change the link's URL to `https://www.example.com`.

**Task:** Write the jQuery code (assuming the HTML is already present and jQuery is included) to perform these attribute modifications.

**JavaScript Solution:**

```javascript
$(document).ready(function() {
    // Change image attributes
    $('#productImage').attr('src', 'featured.jpg');
    $('#productImage').attr('alt', 'Featured Product');

    // Change link attributes
    $('#infoLink').attr('href', 'https://www.example.com');
    $('#infoLink').text('Visit Example.com'); // Update link text as well
});
```

---

#### **Practice Question 3:**

**Scenario:** You have a `<div>` with the ID `contentBox`. You want to add a class `highlight-text` to it, which makes the text bold and blue, and then later remove that class.

**Task:** Write the jQuery code to add the `highlight-text` class, then check if it exists, and finally remove it.

**HTML (with CSS):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>jQuery Practice 3</title>
    <style>
        .highlight-text {
            font-weight: bold;
            color: blue;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>

    <div id="contentBox">This is the content box.</div>

    <script>
        // JavaScript code goes here
    </script>

</body>
</html>
```

**JavaScript Solution:**

```javascript
$(document).ready(function() {
    // Add the 'highlight-text' class
    $('#contentBox').addClass('highlight-text');
    console.log('Class added.');

    // Check if the class exists
    if ($('#contentBox').hasClass('highlight-text')) {
        console.log('The contentBox has the highlight-text class.');
    } else {
        console.log('The contentBox does NOT have the highlight-text class.');
    }

    // Simulate removing the class after some time (or based on an event)
    setTimeout(function() {
        $('#contentBox').removeClass('highlight-text');
        console.log('Class removed.');

        if ($('#contentBox').hasClass('highlight-text')) {
            console.log('The contentBox still has the highlight-text class.');
        } else {
            console.log('The contentBox does NOT have the highlight-text class anymore.');
        }
    }, 3000); // Remove after 3 seconds
});
```

---

### **7. Important Points to Remember**

*   **Include jQuery First:** Always include the jQuery library file *before* any of your custom JavaScript code that uses jQuery.
*   **`$(document).ready()` is Essential:** Wrap your jQuery code in `$(document).ready()` (or its shorthand `$(function() { ... })`) to ensure the DOM is ready.
*   **`$` is Your Friend:** Use the `$` alias for `jQuery()` for brevity.
*   **Selectors are Powerful:** Master CSS selectors to efficiently target HTML elements.
*   **Minified vs. Uncompressed:** Use the minified (`.min.js`) version for production to improve load times. Use the uncompressed version for debugging.
*   **CDN vs. Local:** CDNs offer speed and reliability, while local hosting provides control and offline capability. Choose based on your project needs.
*   **Chainability:** jQuery methods often return the jQuery object itself, allowing you to chain multiple methods together (e.g., `$('#myElement').hide().addClass('hidden');`).

---

This concludes the foundational study notes for jQuery. Understanding these core concepts is essential before moving on to more advanced jQuery features like event handling, AJAX, and animations.
