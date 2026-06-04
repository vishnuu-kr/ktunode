---
title: "Media Types and Media Queries"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0ba"
status: "completed"
scrapedAt: "2026-05-20T17:12:32.907Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Media Types and Media Queries

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of media types and their purpose in web development.
*   Apply different media types to deliver content optimized for various devices and output methods.
*   Understand the concept of media queries and their role in responsive web design.
*   Write media queries to apply CSS styles conditionally based on device characteristics.
*   Create responsive web pages that adapt their layout and appearance to different screen sizes and devices.

---

### 1. Understanding Media Types

#### 1.1 What are Media Types?

*   **Definition:** Media types are keywords used to specify the type of output device or medium for which a document is intended. They allow web developers to tailor content delivery and presentation for different contexts.
*   **Purpose:** To ensure that web content is accessible and appears correctly across a wide range of devices and output methods, from traditional computer screens to printers, screen readers, and mobile devices.

#### 1.2 Common Media Types

Here are some of the most commonly used media types:

*   **`all`**:
    *   **Description:** Applies to all media types. This is the default if no media type is specified.
    *   **Example:** `link rel="stylesheet" href="styles.css"` (equivalent to `media="all"`)

*   **`screen`**:
    *   **Description:** Applies to color computer screens, tablets, and similar devices. This is the most frequently used media type for typical web browsing.
    *   **Example:** `link rel="stylesheet" href="screen.css" media="screen"`

*   **`print`**:
    *   **Description:** Applies to printers. Used to define styles for when a page is printed, often optimizing for readability, removing navigation, and adjusting margins.
    *   **Example:**
        ```html
        <link rel="stylesheet" href="print.css" media="print">
        ```

*   **`speech`**:
    *   **Description:** Applies to speech synthesizers (screen readers). Used to provide alternative text descriptions or modify the presentation for auditory output.
    *   **Example:**
        ```html
        <link rel="stylesheet" href="speech.css" media="speech">
        ```

*   **`braille`**:
    *   **Description:** Applies to braille tactile feedback devices.
    *   **Example:**
        ```html
        <link rel="stylesheet" href="braille.css" media="braille">
        ```

*   **`projection`**:
    *   **Description:** Applies to projected presentations, such as slideshows.
    *   **Example:**
        ```html
        <link rel="stylesheet" href="projection.css" media="projection">
        ```

*   **`aural` (Deprecated, `speech` is preferred)**:
    *   **Description:** Formerly used for speech synthesizers.

#### 1.3 Applying Media Types

You can apply media types in several ways:

*   **Using the `<link>` tag in the `<head>`:**
    ```html
    <link rel="stylesheet" href="style.css" media="screen">
    <link rel="stylesheet" href="print.css" media="print">
    ```

*   **Using the `<style>` tag in the `<head>`:**
    ```html
    <style media="screen">
      /* Styles for screens */
      body {
        font-family: Arial, sans-serif;
      }
    </style>
    <style media="print">
      /* Styles for printing */
      body {
        font-size: 12pt;
        color: black;
      }
      nav, footer {
        display: none; /* Hide navigation and footer when printing */
      }
    </style>
    ```

*   **Using the `@import` rule in CSS:**
    ```css
    @import url("screen.css") screen;
    @import url("print.css") print;
    ```

---

### 2. Understanding Media Queries

#### 2.1 What are Media Queries?

*   **Definition:** Media queries are a CSS technique that allows you to apply CSS styles conditionally based on the characteristics of the device or viewport. They are a fundamental part of responsive web design.
*   **Purpose:** To create layouts and styles that adapt to different screen sizes, resolutions, orientations, and other device features, providing an optimal viewing experience across a wide range of devices.

#### 2.2 Media Query Syntax

A media query consists of:

1.  **A Media Type:** (e.g., `screen`, `print`, `all`)
2.  **A Media Feature:** (e.g., `width`, `height`, `orientation`, `resolution`)
3.  **A Value:** (e.g., `max-width: 768px`, `orientation: landscape`)
4.  **Logical Operators:** (`and`, `or`, `not`)

**General Syntax:**

```css
@media media-type and (media-feature: value) {
  /* CSS rules to apply when the condition is met */
  selector {
    property: value;
  }
}
```

#### 2.3 Common Media Features

Here are some of the most useful media features:

*   **`width` / `height`**:
    *   **Description:** Refers to the width or height of the viewport.
    *   **Usage:**
        *   `width`: The width of the viewport.
        *   `height`: The height of the viewport.
    *   **Prefixes:**
        *   `min-width`: Applies styles when the viewport width is *at least* the specified value.
        *   `max-width`: Applies styles when the viewport width is *no more than* the specified value.
        *   `min-height`: Applies styles when the viewport height is *at least* the specified value.
        *   `max-height`: Applies styles when the viewport height is *no more than* the specified value.

*   **`orientation`**:
    *   **Description:** Checks the orientation of the device.
    *   **Values:** `portrait` or `landscape`.

*   **`resolution`**:
    *   **Description:** Refers to the resolution of the output device.
    *   **Usage:**
        *   `min-resolution`: Applies styles when the resolution is *at least* the specified value.
        *   `max-resolution`: Applies styles when the resolution is *no more than* the specified value.
    *   **Units:** `dpi` (dots per inch), `dpcm` (dots per centimeter), `dppx` (dots per pixel).

*   **`aspect-ratio`**:
    *   **Description:** Refers to the ratio of the width to the height of the viewport.
    *   **Usage:**
        *   `min-aspect-ratio`: Applies styles when the aspect ratio is *at least* the specified value.
        *   `max-aspect-ratio`: Applies styles when the aspect ratio is *no more than* the specified value.

*   **`color`**:
    *   **Description:** Refers to the number of bits per color channel of the output device.
    *   **Usage:**
        *   `min-color`: Applies styles when the color capability is *at least* the specified value.
        *   `max-color`: Applies styles when the color capability is *no more than* the specified value.
    *   **Units:** `bits` (e.g., `color: 24` for 24-bit color).

*   **`hover`**:
    *   **Description:** Checks if the user input mechanism supports hovering.
    *   **Values:** `hover` or `none`.

*   **`pointer`**:
    *   **Description:** Checks the capabilities of the primary input mechanism.
    *   **Values:** `fine` (e.g., touch screen), `coarse` (e.g., mouse).

#### 2.4 Examples of Media Queries

*   **Applying styles for screens wider than 768px:**
    ```css
    @media screen and (min-width: 768px) {
      .container {
        width: 960px;
        margin: 0 auto;
      }
      .sidebar {
        float: left;
        width: 200px;
      }
      .main-content {
        margin-left: 220px;
      }
    }
    ```

*   **Applying styles for screens up to 480px wide (mobile devices):**
    ```css
    @media screen and (max-width: 480px) {
      body {
        font-size: 14px;
      }
      .nav ul {
        flex-direction: column; /* Stack navigation items vertically */
      }
      .nav li {
        margin-bottom: 10px;
      }
      .main-content, .sidebar {
        float: none; /* Remove floats for stacking */
        width: auto; /* Allow content to take full width */
        margin-left: 0;
      }
    }
    ```

*   **Applying styles for landscape orientation:**
    ```css
    @media screen and (orientation: landscape) {
      header {
        padding: 10px 20px;
      }
    }
    ```

*   **Combining media features using `and`:**
    ```css
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      .container {
        width: 80%; /* Fluid width between 768px and 1024px */
      }
    }
    ```

*   **Applying styles for print:**
    ```css
    @media print {
      body {
        font-family: "Times New Roman", serif;
        line-height: 1.5;
      }
      nav, footer, button {
        display: none; /* Hide navigation, footer, and buttons on print */
      }
      a::after {
        content: " (" attr(href) ")"; /* Show URL for links */
      }
    }
    ```

#### 2.5 Responsive Web Design Principles

*   **Mobile-First Approach:** Design and style for smaller screens first, then progressively enhance for larger screens. This ensures a good experience on mobile devices by default and avoids overwhelming larger screens with mobile-specific styles.
*   **Fluid Grids:** Use relative units like percentages (`%`) for widths instead of fixed units like pixels (`px`) for layout elements. This allows containers and elements to resize proportionally.
*   **Flexible Images and Media:** Ensure images and media scale within their containing elements.
    ```css
    img, video, iframe {
      max-width: 100%; /* Prevents media from overflowing its container */
      height: auto;    /* Maintains aspect ratio */
    }
    ```
*   **Media Queries:** As discussed, used to apply different styles based on device characteristics.
*   **Viewport Meta Tag:** Crucial for mobile devices to render the page correctly.
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    *   `width=device-width`: Sets the width of the viewport to the device's screen width.
    *   `initial-scale=1.0`: Sets the initial zoom level when the page is loaded.

---

### 3. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of media types in HTML?

**Answer 1:**
The primary purpose of media types is to specify the type of output device or medium for which a web document is intended, allowing developers to tailor content and presentation for different contexts like screens, printers, or screen readers.

---

**Question 2:**
Which media type would you use to apply styles specifically for printing a web page?

**Answer 2:**
You would use the `print` media type.

---

**Question 3:**
Write a CSS rule that applies a background color of `lightblue` to the `body` element only when the screen width is 600px or less.

**Answer 3:**
```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

---

**Question 4:**
What is the role of the `max-width` media feature?

**Answer 4:**
The `max-width` media feature applies styles when the viewport width is *no more than* the specified value. It's commonly used to define styles for smaller screens or devices.

---

**Question 5:**
How would you create a responsive layout where a two-column layout is used for screens wider than 992px, and a single-column layout for screens 992px or narrower? Provide the HTML and CSS snippets.

**Answer 5:**

**HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="column left-column">
            <h2>Left Column</h2>
            <p>This is the content for the left column. It might contain navigation or less critical information.</p>
        </div>
        <div class="column right-column">
            <h2>Right Column</h2>
            <p>This is the main content area. It should be prominent and easily readable.</p>
        </div>
    </div>
</body>
</html>
```

**CSS (`style.css`):**
```css
/* Basic styling for all devices */
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%; /* Responsive width for all sizes */
    margin: 20px auto;
    border: 1px solid #ccc;
}

.column {
    padding: 15px;
    box-sizing: border-box; /* Include padding in the element's total width and height */
}

.left-column {
    background-color: #f0f0f0;
}

.right-column {
    background-color: #ffffff;
}

/* Media Query for larger screens (two-column layout) */
@media screen and (min-width: 992px) {
    .container {
        display: flex; /* Use flexbox for columns */
        width: 992px; /* Fixed width for larger screens if desired, or keep % */
    }

    .column {
        flex: 1; /* Each column takes equal width */
        padding: 20px;
    }

    .left-column {
        width: 30%; /* Example: Left column is 30% */
        margin-right: 20px; /* Space between columns */
        flex: none; /* Override flex: 1 if using specific widths */
    }

    .right-column {
        flex: 1; /* Right column takes the remaining space */
    }
}

/* Media Query for smaller screens (single-column layout - optional, as it's default) */
/* If you had specific styles to override from the desktop version, they'd go here */
/* For example, if the default was flexbox and you wanted blocks:
@media screen and (max-width: 991px) {
    .container {
        display: block;
    }
    .column {
        width: auto;
        margin-right: 0;
        margin-bottom: 20px;
    }
    .right-column {
        margin-bottom: 0;
    }
}
*/
```

---

### 4. Important Points to Remember

*   **Viewport Meta Tag:** Always include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in your HTML `<head>` for proper rendering on mobile devices.
*   **Mobile-First:** Consider designing for mobile screens first and then expanding for larger screens. This often leads to cleaner, more performant code.
*   **Units:** Use relative units (`%`, `em`, `rem`, `vw`, `vh`) for widths, margins, and font sizes to ensure flexibility. Use `px` for specific elements like borders or when absolute precision is needed.
*   **`box-sizing: border-box;`**: This is a lifesaver for responsive layouts as it includes padding and borders in the element's total width and height, making calculations much easier.
*   **`max-width: 100%; height: auto;` for Images:** Essential for ensuring images scale down gracefully and maintain their aspect ratio.
*   **Breakpoints:** Choose `min-width` and `max-width` values (breakpoints) that make sense for your content and design, rather than adhering to specific device sizes. Common breakpoints might include around 480px, 768px, 992px, and 1200px.
*   **Testing:** Test your responsive designs on actual devices or use browser developer tools to simulate different screen sizes and orientations.

---

This concludes Module 1, Topic: Media Types and Media Queries. You now have the foundational knowledge to start creating web pages that adapt to various devices and contexts.
