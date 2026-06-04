---
title: "Random and  Raster scan displays and systems."
subject: "COMPUTER GRAPHICS"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd4f"
status: "completed"
scrapedAt: "2026-05-20T17:24:26.560Z"
---
# COMPUTER GRAPHICS: Module 1 - Basics of Computer Graphics
## Topic: Random and Raster Scan Displays and Systems

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental differences between random scan and raster scan display systems.
*   Explain the working principles of each display system.
*   Identify the components and architecture of each system.
*   Compare and contrast the advantages and disadvantages of random and raster scan displays.
*   Appreciate the applications of each display technology.

---

### 1. Introduction to Display Technologies

Computer graphics displays are devices that convert digital information into visual images. The way this conversion happens fundamentally categorizes display systems into two main types: **Random Scan** and **Raster Scan**. Understanding these two approaches is crucial for grasping how images are formed and manipulated on a screen.

---

### 2. Random Scan Displays (Vector Displays)

#### 2.1. Key Concepts and Definitions

*   **Random Scan:** Also known as a vector display, this system works by directly addressing specific points on the screen. It "draws" lines or vectors between these points, effectively drawing the image as a series of lines.
*   **Vector Graphics:** Images are represented as a set of geometric primitives (lines, curves, polygons) defined by mathematical equations.
*   **Beam Penetration:** In older color random scan displays, different colors were produced by accelerating the electron beam to strike phosphors of different colors.
*   **Color-Gun Assemblies:** More advanced random scan systems used multiple electron guns, each targeting a specific color phosphor, providing better color purity and resolution.

#### 2.2. Working Principle

1.  **Direct Addressing:** The graphics controller (or CPU) sends commands to the display system, specifying the starting and ending coordinates of each line segment.
2.  **Electron Beam Movement:** The electron beam is directed to the specified starting point on the CRT screen.
3.  **Line Drawing:** The beam is then "deflected" directly to the ending point, illuminating the phosphors along the path, thereby drawing a line.
4.  **Repainting:** The entire picture is redrawn many times per second (refresh rate) to maintain a steady image. This involves re-executing the sequence of line commands.

#### 2.3. System Architecture

*   **Frame Buffer:** Unlike raster scan, random scan *does not* typically use a frame buffer to store pixel information. Instead, it uses a **display list** or **refresh display file**.
*   **Display List/Refresh Display File:** This is a memory area that stores a set of commands for drawing the graphics primitives (e.g., "draw a line from (x1, y1) to (x2, y2)").
*   **Graphics Controller:** Responsible for interpreting the display list and generating the deflection signals for the electron beam.
*   **CRT (Cathode Ray Tube):** The display device itself. The electron beam is steered by deflection coils.

#### 2.4. Advantages

*   **High Resolution for Lines:** Capable of displaying very sharp, high-resolution lines with no jagged edges (aliasing).
*   **Smooth Curves:** Excellent for drawing smooth curves and lines.
*   **Flicker-Free:** If the refresh rate is high enough, the image appears flicker-free.
*   **Efficient for Line Drawings:** Very efficient for applications dominated by line drawings, such as CAD and early computer games.

#### 2.5. Disadvantages

*   **Limited Complexity:** Can only display a limited number of lines before flicker becomes noticeable due to the time it takes to redraw the entire picture.
*   **Cannot Display Solid Areas or Realistic Images:** Primarily designed for drawing lines and outlines, not for filling areas with solid colors or displaying photographic images.
*   **Cost:** Older random scan systems could be more expensive due to specialized hardware.
*   **Not Suitable for Pixel-Based Graphics:** Not suited for pixel-level manipulation or representing images as grids of pixels.

#### 2.6. Examples/Applications

*   **CAD (Computer-Aided Design):** Drafting and architectural design.
*   **Early Arcade Games:** Games like "Asteroids" and "Battlezone."
*   **Oscilloscopes:** Used for displaying waveforms.
*   **Text Displays:** Early character-based terminals.

---

### 3. Raster Scan Displays (Raster Displays)

#### 3.1. Key Concepts and Definitions

*   **Raster Scan:** This system scans the screen a row at a time (a "raster"), from top to bottom, left to right. The image is formed by illuminating pixels (picture elements) at specific locations.
*   **Pixel:** The smallest addressable element on a display screen. Each pixel has a specific color and intensity.
*   **Frame Buffer:** A dedicated memory area that stores the color (or intensity) information for each pixel on the screen. The resolution of the display is directly related to the size of the frame buffer.
*   **Refreshing:** The electron beam scans the screen row by row, and the color information for each pixel is read from the frame buffer and used to control the intensity of the beam, thus displaying the image.
*   **Resolution:** The number of pixels in the horizontal and vertical directions (e.g., 1920x1080).
*   **Persistence:** The property of phosphors to emit light for a short period after being excited by the electron beam.
*   **Refresh Rate:** The number of times the entire screen is repainted per second.

#### 3.2. Working Principle

1.  **Frame Buffer Storage:** The graphics system stores the intensity or color value for each pixel in the frame buffer.
2.  **Electron Beam Scanning:** A single electron beam starts at the top-left corner of the screen.
3.  **Row-by-Row Scan:** The beam is deflected horizontally across the screen to scan one row of pixels.
4.  **Vertical Sweep:** After completing a row, the beam is moved rapidly back to the left edge and down to the start of the next row (horizontal retrace).
5.  **Pixel Intensity Control:** As the beam moves across each row, the intensity of the beam is modulated according to the pixel values stored in the frame buffer for that row.
6.  **Refreshing:** This entire scanning process is repeated many times per second (e.g., 60 Hz, 75 Hz) to maintain a continuous image.

#### 3.3. System Architecture

*   **Frame Buffer:** The core component. Its size determines the display resolution and color depth.
    *   *Example:* For a 640x480 display with 24-bit color (8 bits for R, G, B), the frame buffer would need $640 \times 480 \times 24$ bits of memory.
*   **Video Controller/Display Controller:** Manages the reading of pixel data from the frame buffer and sends it to the monitor. It controls the scanning process (horizontal and vertical deflection).
*   **Rasterization Unit:** A hardware unit that converts geometric primitives (lines, polygons) into pixel values that are stored in the frame buffer.
*   **CRT/Monitor:** The display device that receives the signal from the video controller.

#### 3.4. Advantages

*   **Realistic Images:** Capable of displaying solid areas, shading, and complex, realistic images with high detail.
*   **Color Depth:** Supports a wide range of colors and smooth transitions.
*   **Flexibility:** Easily handles pixel-level operations, making it suitable for painting, image editing, and video.
*   **Cost-Effective for Complex Images:** Generally more cost-effective for displaying complex images compared to random scan for similar capabilities.
*   **Ubiquitous:** The dominant display technology used today (LCD, LED, OLED displays are all based on raster principles).

#### 3.5. Disadvantages

*   **Jagged Edges (Aliasing):** Lines and curves can appear jagged or stair-stepped because they are approximated by discrete pixels.
*   **Line Thickness:** Lines have a fixed pixel width.
*   **Memory Intensive:** Requires a significant amount of memory for the frame buffer, especially for high resolutions and color depths.
*   **Less Efficient for Pure Line Drawings:** Can be less efficient than random scan for applications solely focused on drawing lines, as it needs to fill pixels even for thin lines.

#### 3.6. Examples/Applications

*   **Personal Computers:** All modern PCs use raster scan displays.
*   **Televisions:** Standard televisions are raster scan systems.
*   **Digital Cameras and Scanners:** Capture and process images as grids of pixels.
*   **Image Editing Software (Photoshop, GIMP):** Work directly with pixels.
*   **Web Browsers:** Display websites with images and text.

---

### 4. Comparison: Random Scan vs. Raster Scan

| Feature              | Random Scan (Vector)                               | Raster Scan                                           |
| :------------------- | :------------------------------------------------- | :---------------------------------------------------- |
| **Image Formation**  | Draws lines between specified points.              | Scans row by row, illuminating pixels.                |
| **Display File**     | Display List / Refresh Display File                | Frame Buffer                                          |
| **Image Content**    | Primarily lines, curves, wireframes.               | Pixels, solid areas, realistic images, photos.        |
| **Resolution**       | High for lines, defined by beam control.           | Defined by the number of pixels (frame buffer size). |
| **Detail/Complexity**| Limited by refresh rate; flicker with complexity.  | Can display high detail and complexity.               |
| **Flicker**          | Can be an issue if refresh rate is too low.        | Controlled by refresh rate; usually flicker-free.     |
| **Color Handling**   | Limited (older types), good purity (color guns).   | Excellent, wide color depth and smooth gradients.     |
| **Memory Usage**     | Low for simple drawings, high for complex lists.   | High, scales with resolution and color depth.         |
| **Applications**     | CAD, early games, oscilloscopes.                   | PCs, TVs, digital imaging, web, modern games.         |
| **Aliasing**         | Minimal for lines.                                 | Significant for lines and curves (jaggies).          |

---

### 5. Practice Questions and Exercises

**Question 1:** What is the primary difference in how a random scan display and a raster scan display draw an image?
    *   **Answer:** A random scan display directly draws lines and vectors between specified points, while a raster scan display scans the screen row by row and illuminates individual pixels based on information stored in a frame buffer.

**Question 2:** Which type of display system uses a frame buffer, and what is its purpose?
    *   **Answer:** Raster scan display systems use a frame buffer. Its purpose is to store the color or intensity information for every pixel on the screen.

**Question 3:** List two advantages of random scan displays over raster scan displays.
    *   **Answer:**
        1.  Higher resolution for lines and curves (no jaggies).
        2.  More efficient for applications dominated by line drawings.

**Question 4:** List two advantages of raster scan displays over random scan displays.
    *   **Answer:**
        1.  Ability to display realistic images with solid areas, shading, and complex colors.
        2.  Greater flexibility for pixel-level manipulation and image editing.

**Question 5:** Imagine you are designing a system for interactive architectural drafting where sharp lines and curves are paramount. Which display system would you initially consider, and why?
    *   **Answer:** I would initially consider a **random scan display**. This is because random scan systems excel at drawing very precise, smooth lines and curves without the jagged edges (aliasing) that can be problematic for raster displays. This is crucial for detailed architectural drawings.

**Question 6:** You need to display a photograph on a screen. Which display system is more suitable, and what are the key components involved?
    *   **Answer:** A **raster scan display** is more suitable. The key components involved would be:
        *   **Frame Buffer:** To store the pixel data of the photograph.
        *   **Video Controller:** To read data from the frame buffer and control the scanning of the electron beam (or pixel activation in modern displays).
        *   **Monitor:** The display device itself.

**Question 7:** What causes "jaggies" in raster scan displays?
    *   **Answer:** "Jaggies" (aliasing) are caused by the discrete nature of pixels. When a line or curve that is not perfectly horizontal or vertical is represented on a pixel grid, it must be approximated by illuminating a series of pixels, leading to a stair-stepped appearance.

---

### 6. Important Points to Remember

*   **Random Scan = Vector = Lines:** Think of drawing with a pen on paper, directly connecting points.
*   **Raster Scan = Pixel Grid = Pixels:** Think of a mosaic or a grid of colored tiles.
*   **Frame Buffer is key for Raster:** It's the memory holding every pixel's color.
*   **Display List is key for Random:** It's the list of drawing commands.
*   **Resolution in Raster is Frame Buffer Size:** More pixels = higher resolution.
*   **Resolution in Random is line clarity:** Less about pixel count, more about beam precision.
*   **Raster is dominant today:** Due to its ability to display realistic and complex images.
*   **Random Scan excels at pure line art:** Hence its use in early CAD and some niche applications.

---
