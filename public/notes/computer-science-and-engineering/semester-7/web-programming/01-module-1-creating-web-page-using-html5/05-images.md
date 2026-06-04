---
title: "Images"
subject: "WEB PROGRAMMING"
module: "Module 1: Creating Web Page using HTML5  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0a4"
status: "completed"
scrapedAt: "2026-05-20T17:12:11.526Z"
---
# Web Programming: Module 1 - Creating Web Pages using HTML5

## Topic: Images

---

### 1. Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the importance of images in web design.
*   Use the `<img>` tag to insert images into an HTML document.
*   Specify the source of an image using the `src` attribute.
*   Provide alternative text for images using the `alt` attribute.
*   Control the dimensions of an image using the `width` and `height` attributes.
*   Create image links by nesting an `<img>` tag within an `<a>` tag.
*   Understand image formats suitable for the web (JPEG, PNG, GIF, SVG).
*   Explore advanced image techniques like image maps and the `<picture>` element.

---

### 2. Introduction to Images in Web Design

Images play a crucial role in making web pages visually appealing, engaging, and informative. They can:

*   **Enhance Visual Appeal:** Break up large blocks of text, add color, and create a more dynamic look.
*   **Convey Information:** Illustrate concepts, showcase products, or provide visual context.
*   **Improve User Experience:** Guide users, highlight important elements, and make content more digestible.
*   **Build Brand Identity:** Use logos and brand imagery to establish recognition.

**Important Point:** While visually appealing, overuse of images or using unoptimized images can negatively impact page load times and user experience.

---

### 3. The `<img>` Tag: Inserting Images

The fundamental HTML element for displaying images is the `<img>` tag. It is an **empty element**, meaning it does not have a closing tag and does not enclose any content directly.

**Syntax:**

```html
<img src="path/to/your/image.jpg" alt="Description of the image">
```

---

### 4. Key Attributes of the `<img>` Tag

#### 4.1. `src` Attribute (Source)

*   **Purpose:** Specifies the **Uniform Resource Locator (URL)** of the image file. This tells the browser where to find the image.
*   **Types of Paths:**
    *   **Absolute Path:** A full URL pointing to an image on another website or a specific location on the internet.
        *   **Example:** `src="https://www.example.com/images/logo.png"`
    *   **Relative Path:** A path relative to the current HTML file. This is the most common and recommended approach for images within your own website.
        *   **From the same directory:** `src="my-image.jpg"`
        *   **In a subdirectory:** `src="images/photo.png"`
        *   **In a parent directory:** `src="../assets/icons/icon.gif"`

**Example:**

```html
<!-- Image from another website -->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML5 Logo">

<!-- Image from a local folder named 'images' -->
<img src="images/nature.jpg" alt="A beautiful natural landscape">
```

---

#### 4.2. `alt` Attribute (Alternative Text)

*   **Purpose:** Provides **alternative text** for the image. This text is displayed if the image cannot be loaded (e.g., broken link, slow connection, user has images turned off) and is crucial for **accessibility**. Screen readers use `alt` text to describe images to visually impaired users.
*   **Best Practices:**
    *   Be descriptive and concise.
    *   Convey the *meaning* or *purpose* of the image.
    *   If the image is purely decorative, use an empty `alt` attribute (`alt=""`).
    *   Do not start with "image of" or "picture of."

**Example:**

```html
<img src="images/product-photo.jpg" alt="Red leather wallet with multiple card slots">
<img src="images/decorative-border.png" alt=""> <!-- Purely decorative -->
```

**Important Point:** The `alt` attribute is mandatory for accessibility and SEO (Search Engine Optimization).

---

#### 4.3. `width` and `height` Attributes

*   **Purpose:** Specify the desired **dimensions** (width and height) of the image in pixels. This helps the browser reserve space for the image while it's loading, preventing content shifts.
*   **Units:** These attributes accept a numerical value representing pixels.
*   **Aspect Ratio:** If you only specify one dimension (e.g., `width`), the browser will automatically calculate the other to maintain the image's aspect ratio. If both are specified and don't match the image's original aspect ratio, the image will be distorted.

**Example:**

```html
<!-- Specifying only width -->
<img src="images/small-icon.png" alt="Information icon" width="24">

<!-- Specifying both width and height -->
<img src="images/banner.jpg" alt="Website promotional banner" width="800" height="300">
```

**Note on CSS:** While these attributes can be used, it's generally considered **better practice** to control image dimensions using CSS for more flexibility and separation of concerns.

```css
img {
  width: 100%; /* Makes image responsive to its container */
  height: auto; /* Maintains aspect ratio */
}
```

---

### 5. Image Formats for the Web

Choosing the right image format is essential for web performance and quality.

#### 5.1. JPEG (or JPG)

*   **Best for:** Photographs, images with many colors and gradients.
*   **Compression:** Uses **lossy compression**, meaning some image data is discarded to reduce file size. You can control the level of compression.
*   **Transparency:** Does **not support transparency**.
*   **File Size:** Generally smaller for photographic images compared to other formats.

#### 5.2. PNG (Portable Network Graphics)

*   **Best for:** Graphics, logos, icons, images requiring transparency, images with sharp lines and text.
*   **Compression:** Uses **lossless compression**, meaning no image data is lost.
*   **Transparency:** **Supports transparency**, making it ideal for logos that need to sit on different backgrounds.
*   **File Size:** Can be larger than JPEGs for photographic images but better for graphics with sharp details.

#### 5.3. GIF (Graphics Interchange Format)

*   **Best for:** Simple animations, graphics with limited colors (e.g., line art, simple logos).
*   **Compression:** Uses **lossless compression**.
*   **Transparency:** **Supports simple transparency** (binary transparency - either fully transparent or fully opaque, no partial transparency).
*   **Color Depth:** Limited to 256 colors.
*   **File Size:** Can be large for complex images or long animations.

#### 5.4. SVG (Scalable Vector Graphics)

*   **Best for:** Logos, icons, illustrations, graphics that need to scale without losing quality.
*   **Format:** **Vector-based**, meaning it's defined by mathematical equations, not pixels.
*   **Scalability:** Can be scaled to any size without pixelation or loss of quality.
*   **File Size:** Typically very small.
*   **Interactivity:** Can be manipulated with CSS and JavaScript.
*   **Browser Support:** Widely supported by modern browsers.

**Important Point:** For photographs, use JPEG. For graphics with transparency or sharp details, use PNG. For simple animations, consider GIF. For logos and icons that need to be scalable, use SVG.

---

### 6. Creating Image Links

You can make an image clickable by wrapping it inside an anchor (`<a>`) tag. Clicking the image will then navigate the user to the URL specified in the `<a>` tag.

**Syntax:**

```html
<a href="destination-url.html">
  <img src="images/clickable-image.jpg" alt="Link to another page">
</a>
```

**Example:**

```html
<a href="about.html">
  <img src="images/company-logo.png" alt="Go to the About Us page">
</a>
```

---

### 7. Advanced Image Techniques

#### 7.1. Image Maps

*   **Purpose:** Allows specific areas of an image to be clickable, linking to different destinations.
*   **How it works:** Uses the `map` and `area` elements.
    1.  The `<img>` tag has a `usemap` attribute pointing to the `id` of a `map` element.
    2.  The `map` element contains `area` elements, each defining a clickable region (shape, coordinates, and `href`).
*   **Shapes:** `rect` (rectangle), `circle` (circle), `poly` (polygon).
*   **Example:**

    ```html
    <img src="images/world-map.png" alt="World Map with clickable countries" usemap="#map">

    <map name="map">
      <area shape="rect" coords="0,0,100,150" href="europe.html" alt="Europe">
      <area shape="circle" coords="150,100,50" href="asia.html" alt="Asia">
    </map>
    ```

**Note:** Image maps are less common now due to the rise of responsive design and the complexity of defining coordinates. CSS and JavaScript offer more flexible alternatives.

#### 7.2. The `<picture>` Element (Responsive Images)

*   **Purpose:** Provides a more robust way to serve different image versions based on screen size, resolution, or other conditions. It allows for **responsive images**.
*   **How it works:**
    *   The `<picture>` element acts as a container.
    *   It contains multiple `<source>` elements.
    *   Each `<source>` element can specify a different image file based on `media` queries (e.g., screen width) or `srcset` attribute (different resolutions).
    *   The browser selects the first `<source>` that matches the current conditions.
    *   An `<img>` tag is required as the last child of `<picture>` to provide the actual image to display and fallback content.
*   **Example:**

    ```html
    <picture>
      <source srcset="images/large-hero.jpg" media="(min-width: 992px)">
      <source srcset="images/medium-hero.jpg" media="(min-width: 768px)">
      <img src="images/small-hero.jpg" alt="Hero image for the website">
    </picture>
    ```

**Explanation of the example:**
*   If the screen width is 992px or larger, `large-hero.jpg` is displayed.
*   If the screen width is between 768px and 991px, `medium-hero.jpg` is displayed.
*   Otherwise (screens smaller than 768px), `small-hero.jpg` is displayed.

**Important Point:** The `<picture>` element is crucial for optimizing image loading on different devices and improving performance.

---

### 8. Practice Questions / Exercises

**Question 1:**
What is the primary purpose of the `alt` attribute in an `<img>` tag?

**Question 2:**
Which image format is generally recommended for photographs, and why?

**Question 3:**
How would you make an image named `logo.png` that is located in an `assets/images` folder clickable, linking to `index.html`?

**Question 4:**
Explain the benefit of using the `width` and `height` attributes on an `<img>` tag.

**Question 5:**
When would you consider using the `<picture>` element instead of a single `<img>` tag?

---

### 9. Answers

**Answer 1:**
The primary purpose of the `alt` attribute is to provide descriptive alternative text for an image. This is crucial for accessibility (screen readers for visually impaired users) and for displaying text when the image cannot be loaded.

**Answer 2:**
JPEG (or JPG) is generally recommended for photographs because it uses lossy compression, which effectively reduces the file size of images with many colors and complex details, leading to faster page load times.

**Answer 3:**
```html
<a href="index.html">
  <img src="assets/images/logo.png" alt="Company Logo">
</a>
```

**Answer 4:**
Using `width` and `height` attributes helps the browser reserve space for the image before it has fully loaded. This prevents content from jumping around on the page as images load, improving the user experience.

**Answer 5:**
You would consider using the `<picture>` element when you need to serve different image versions based on specific conditions, such as screen size (for responsive design), resolution, or even image format support. This allows for better optimization, ensuring users download only the most appropriate image file.

---

### 10. Key Points to Remember

*   Use the `<img>` tag to insert images.
*   The `src` attribute specifies the image source (URL).
*   The `alt` attribute is essential for accessibility and fallback content.
*   Use `width` and `height` for layout stability, but prefer CSS for styling.
*   Choose image formats wisely: JPEG for photos, PNG for graphics/transparency, GIF for simple animations, SVG for scalable vector graphics.
*   Nest `<img>` within `<a>` to create image links.
*   The `<picture>` element is key for responsive images.
