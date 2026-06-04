---
title: "Images"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc04"
status: "completed"
scrapedAt: "2026-05-20T17:27:52.739Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Images

### 1. Introduction to Images in Web Pages

Images are crucial for making web pages visually appealing, informative, and engaging. They can convey complex ideas quickly, break up text, and establish a brand identity. HTML5 provides a powerful and flexible way to incorporate images into your web pages.

### 2. Learning Outcomes

By the end of this topic, you will be able to:

*   **Identify and explain the purpose of the `<img>` tag.**
*   **Specify the source of an image using the `src` attribute.**
*   **Provide alternative text for images using the `alt` attribute for accessibility and SEO.**
*   **Control the dimensions of an image using the `width` and `height` attributes.**
*   **Understand the concept of relative and absolute image paths.**
*   **Explain the importance of image optimization for web performance.**
*   **Implement responsive images using the `<picture>` element and `srcset` attribute.**

### 3. Key Concepts and Definitions

#### 3.1. The `<img>` Tag

The `<img>` tag is the fundamental element used to embed an image into an HTML document. It is a **void element**, meaning it doesn't have a closing tag and doesn't contain any content itself.

*   **Purpose:** To display an image on a web page.

#### 3.2. The `src` Attribute

The `src` attribute is **mandatory** for the `<img>` tag. It specifies the **Uniform Resource Locator (URL)** of the image file.

*   **Purpose:** To tell the browser where to find the image.

#### 3.3. The `alt` Attribute

The `alt` attribute is **crucial** for accessibility and search engine optimization (SEO). It provides **alternative text** for the image. This text is displayed if the image cannot be loaded or if the user is using a screen reader.

*   **Purpose:**
    *   **Accessibility:** Describes the image content for visually impaired users.
    *   **SEO:** Helps search engines understand the image content.
    *   **Fallback:** Displays if the image fails to load.

#### 3.4. The `width` and `height` Attributes

These attributes are used to specify the **dimensions** of the image in pixels. While you can set these, it's often recommended to handle sizing with CSS for better control and responsiveness.

*   **Purpose:** To define the displayed width and height of the image.
*   **Important Note:** Setting these attributes can help the browser reserve space for the image while it's loading, preventing layout shifts.

#### 3.5. Image Paths (URLs)

URLs specify the location of the image file. There are two main types:

*   **Relative Paths:**
    *   Refer to images located within the same website.
    *   They are relative to the current HTML file's location.
    *   **Example:**
        *   `images/my-photo.jpg` (Image is in an `images` folder in the same directory as the HTML file)
        *   `../images/logo.png` (Image is in an `images` folder one directory up from the current HTML file)
        *   `about.html` (Image is in the same directory as the HTML file)

*   **Absolute Paths:**
    *   Refer to images located on external websites or a specific path on the server.
    *   They include the full URL.
    *   **Example:**
        *   `https://www.example.com/images/banner.gif` (Image hosted on another website)
        *   `/images/background.jpg` (Image located in the `images` folder at the root of the website)

#### 3.6. Image Optimization

Optimizing images is vital for improving website performance. Large image files can slow down page load times, leading to a poor user experience and potentially lower search engine rankings.

*   **Key Optimization Techniques:**
    *   **Choose the right file format:**
        *   **JPEG (`.jpg`, `.jpeg`):** Best for photographs and images with many colors and gradients. Supports lossy compression.
        *   **PNG (`.png`):** Best for graphics, logos, and images with transparency. Supports lossless compression.
        *   **GIF (`.gif`):** Best for simple animations and images with limited colors. Supports transparency and animation.
        *   **SVG (`.svg`):** Scalable Vector Graphics. Ideal for logos and icons as they are resolution-independent and can be scaled without losing quality.
    *   **Compress images:** Use image editing software or online tools to reduce file size without significant loss of quality.
    *   **Resize images:** Ensure images are sized appropriately for their display on the web. Don't upload a 4K image if it will only be displayed as a small thumbnail.

#### 3.7. Responsive Images

Responsive images ensure that images adapt their size and resolution to the user's device and screen size, providing an optimal viewing experience across desktops, tablets, and mobile phones.

*   **The `<picture>` Element:**
    *   Allows you to define multiple image sources for different screen sizes or resolutions.
    *   It contains one or more `<source>` elements and a single `<img>` element.
    *   The browser selects the first `<source>` element that matches the media conditions and displays the `<img>` element.

    ```html
    <picture>
      <source srcset="large-image.jpg" media="(min-width: 1024px)">
      <source srcset="medium-image.jpg" media="(min-width: 768px)">
      <img src="small-image.jpg" alt="A descriptive alt text">
    </picture>
    ```

*   **The `srcset` Attribute:**
    *   Used within the `<img>` tag or `<source>` element to provide a set of image sources with associated descriptors.
    *   The browser can then choose the most appropriate image based on screen size and pixel density.
    *   **Descriptors:**
        *   **`w` descriptor (width descriptor):** Specifies the intrinsic width of the image file (e.g., `image-300w.jpg`).
        *   **`x` descriptor (pixel density descriptor):** Specifies the pixel density of the image (e.g., `image-2x.jpg` for a retina display).

    ```html
    <img src="default.jpg"
         srcset="small.jpg 500w,
                 medium.jpg 1000w,
                 large.jpg 1500w"
         alt="A responsive image">
    ```

### 4. Examples

#### 4.1. Basic Image Embedding

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page with Images</title>
</head>
<body>

  <h1>Welcome to My Website!</h1>

  <img src="images/my-photo.jpg" alt="A professional photo of me smiling">

  <p>This is a paragraph of text. Here's another image:</p>

  <img src="https://via.placeholder.com/150" alt="A placeholder image" width="150" height="150">

</body>
</html>
```

**Explanation:**

*   The first `<img>` tag uses a relative path to an image named `my-photo.jpg` located in an `images` folder.
*   The `alt` attribute provides a descriptive text.
*   The second `<img>` tag uses an absolute URL to a placeholder image service and explicitly sets the `width` and `height`.

#### 4.2. Using `<picture>` for Responsive Images

Let's say you have different image sizes for different screen widths.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Responsive Images</title>
  <style>
    /* Basic styling for demonstration */
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>

  <h1>See how the image changes!</h1>

  <picture>
    <source srcset="images/landscape-large.jpg" media="(min-width: 1200px)">
    <source srcset="images/landscape-medium.jpg" media="(min-width: 768px)">
    <img src="images/landscape-small.jpg" alt="A beautiful landscape scene">
  </picture>

</body>
</html>
```

**Explanation:**

*   If the screen width is 1200px or more, `landscape-large.jpg` will be loaded.
*   If the screen width is between 768px and 1199px, `landscape-medium.jpg` will be loaded.
*   For screens smaller than 768px, `landscape-small.jpg` will be loaded.

### 5. Practice Questions and Exercises

#### **Question 1:**

What is the purpose of the `alt` attribute in the `<img>` tag, and why is it important?

**Answer:**
The `alt` attribute provides alternative text for an image. It's important for accessibility (describing the image for visually impaired users using screen readers), SEO (helping search engines understand image content), and as a fallback if the image fails to load.

#### **Question 2:**

Write an HTML snippet to display an image named `logo.png` located in a folder named `assets` one directory above the current HTML file. Ensure it has an `alt` text of "Company Logo".

**Answer:**
```html
<img src="../assets/logo.png" alt="Company Logo">
```

#### **Question 3:**

Explain the difference between relative and absolute image paths with examples.

**Answer:**
*   **Relative paths** specify the location of an image relative to the current HTML file. They are used for images within the same website.
    *   Example: `images/photo.jpg` (image in an `images` folder in the same directory)
    *   Example: `../styles/icon.png` (image in a `styles` folder one directory up)
*   **Absolute paths** specify the full URL or file system path to an image. They are used for images on other websites or at a specific location on the server.
    *   Example: `https://www.example.com/images/banner.jpg`
    *   Example: `/var/www/html/images/background.gif` (less common in web development for direct embedding)

#### **Question 4 (Exercise):**

Create an HTML file that displays three images:
1.  A locally stored image named `flower.jpg` (assume it's in an `images` folder in the same directory).
2.  An image from an external website (you can use a placeholder image URL like `https://via.placeholder.com/200`).
3.  The first image (`flower.jpg`) should also have its `width` set to 200 pixels and `height` set to 150 pixels.

Provide the HTML code for this.

**Answer:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Practice</title>
</head>
<body>

  <h1>My Image Collection</h1>

  <!-- Local Image -->
  <img src="images/flower.jpg" alt="A beautiful red flower" width="200" height="150">

  <br><br> <!-- For spacing -->

  <!-- External Image -->
  <img src="https://via.placeholder.com/200" alt="Placeholder image from external URL">

</body>
</html>
```

#### **Question 5 (Challenge):**

Imagine you want to display a high-resolution image on large screens and a smaller, optimized version on smaller screens. Using the `<picture>` element and `srcset` attribute, create a snippet that achieves this. Assume you have `desktop-hero.jpg` (2000px wide), `tablet-hero.jpg` (1000px wide), and `mobile-hero.jpg` (600px wide).

**Answer:**
```html
<picture>
  <source srcset="images/desktop-hero.jpg" media="(min-width: 1024px)">
  <source srcset="images/tablet-hero.jpg" media="(min-width: 768px)">
  <img src="images/mobile-hero.jpg" alt="Hero image for the website">
</picture>
```

### 6. Important Points to Remember

*   **`<img>` tag is for displaying images.** It's a void element.
*   **`src` attribute is mandatory** to specify the image source.
*   **`alt` attribute is crucial** for accessibility, SEO, and as a fallback. Always provide descriptive `alt` text.
*   Use **relative paths** for images within your website and **absolute paths** for external images.
*   **Optimize images** for web performance by choosing the right format, compressing, and resizing.
*   **Responsive images** using `<picture>` and `srcset` are essential for a good user experience on all devices.
*   While `width` and `height` attributes can be used, **CSS is preferred** for image styling and responsiveness.
*   **SVG is excellent** for logos and icons due to its scalability.

This concludes the topic on Images in HTML5. Remember to practice these concepts to solidify your understanding!
