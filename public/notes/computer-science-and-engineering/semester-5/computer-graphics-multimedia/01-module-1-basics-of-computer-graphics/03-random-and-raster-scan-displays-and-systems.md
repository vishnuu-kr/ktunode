---
title: "Random and  Raster scan displays and systems."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b81b"
status: "completed"
scrapedAt: "2026-05-20T16:43:15.596Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 1: Basics of Computer Graphics - Random and Raster Scan Displays and Systems

These notes cover Random Scan and Raster Scan displays and systems, which are fundamental concepts in computer graphics.

**Learning Outcomes:**

*   Understand the fundamental differences between raster scan and random scan display technologies.
*   Describe the architecture and working principles of raster scan display systems.
*   Describe the architecture and working principles of random scan display systems.
*   Compare and contrast the advantages and disadvantages of raster scan and random scan display systems.
*   Identify appropriate applications for each display technology.

## 1. Introduction to Display Technologies

Computer graphics output devices convert digital data into a visual representation on a display screen.  Two primary technologies dominate the early landscape of display systems: Raster Scan and Random Scan (also known as Vector Scan or Calligraphic Scan).

## 2. Raster Scan Display Systems

### 2.1 Definition

*   **Raster Scan:**  In raster scan systems, the electron beam sweeps across the screen, one row at a time, from top to bottom.  The intensity of the electron beam is turned on or off to create the pattern of illuminated pixels.

### 2.2 Working Principle

*   The screen is divided into a matrix of pixels (picture elements).
*   The electron beam scans the screen row by row, also known as a scan line.
*   The beam starts at the top left corner of the screen and moves horizontally to the right.
*   At the end of each scan line, the beam returns to the left side of the screen (horizontal retrace) and moves down to the next scan line.
*   This process continues until the beam reaches the bottom right corner of the screen.  Then, the beam returns to the top left corner (vertical retrace).
*   The intensity of the electron beam is controlled by the **frame buffer**, which is a memory area that stores the color values for each pixel on the screen.
*   The frame buffer is constantly refreshed (typically at a rate of 60-85 Hz) to maintain the image on the screen.  This refresh rate is the **refresh rate** or **frame rate.**

### 2.3 Architecture

*   **Frame Buffer:** The core component, holding the pixel data to be displayed.  Its size determines the display's resolution and color depth.
*   **Display Controller:** Reads data from the frame buffer and controls the electron beam's intensity and position to draw the image.  Handles the scan conversion process, converting geometric primitives into pixel data.
*   **Video Controller (optional but often included):** Manages the interface between the CPU, memory, and the display controller.

### 2.4 Types of Raster Scan Systems

*   **Monochrome Raster Scan:**  Uses only one bit per pixel in the frame buffer.  Represents only two colors (e.g., black and white).
*   **Grayscale Raster Scan:** Uses multiple bits per pixel to represent different shades of gray. More bits per pixel allows for more shades.
*   **Color Raster Scan:** Uses multiple bits per pixel to represent a range of colors.  Commonly uses 24 bits per pixel (8 bits for Red, 8 bits for Green, 8 bits for Blue - RGB), allowing for 16.7 million colors.

### 2.5 Advantages of Raster Scan

*   **Realistic images:**  Can display complex scenes with filled areas and shading effectively.
*   **Cost-effective:**  Relatively inexpensive due to mass production.
*   **Brightness control:**  Pixel intensities can be easily controlled, providing good control over brightness and color.

### 2.6 Disadvantages of Raster Scan

*   **Resolution limited:** The resolution is determined by the number of pixels on the screen, which is fixed.
*   **Aliasing (stair-stepping effect):** Diagonal lines and curves may appear jagged due to the pixel grid.
*   **Frame buffer memory:** Requires a large frame buffer to store the pixel data, especially for high resolutions and color depths.
*   **Lower image quality for line drawings:**  Lines and curves appear as a series of discrete pixels, leading to a less smooth appearance than vector displays.

## 3. Random Scan (Vector Scan) Display Systems

### 3.1 Definition

*   **Random Scan (Vector Scan):**  The electron beam is directed to draw the image line by line, only drawing the lines and curves that make up the image. It directly traces the path of the lines to be displayed, unlike raster scan which scans the entire screen.

### 3.2 Working Principle

*   The display controller directly controls the electron beam to draw lines between specified points.
*   The beam moves directly from one point to another, drawing a line.
*   Only the parts of the screen where lines are to be drawn are illuminated.
*   The image is refreshed repeatedly to maintain the image on the screen.
*   Drawing instructions are stored in a **display list** (or refresh display file) containing the coordinates of the endpoints of lines.

### 3.3 Architecture

*   **Display List (Refresh Display File):** Stores drawing instructions (coordinates and attributes) for the image.
*   **Display Processor:** Interprets the display list and generates control signals to drive the electron beam. Performs transformations, clipping, and other display operations.
*   **Display Controller:**  Generates the signals necessary to deflect the electron beam to the specified coordinates.

### 3.4 Advantages of Random Scan

*   **High resolution:** Lines are drawn smoothly, with no pixelation, offering high resolution.
*   **No aliasing:**  Diagonal lines and curves appear smooth and continuous.
*   **Smaller memory requirements:** Requires less memory than raster scan, as only the drawing instructions need to be stored, not the entire image.
*   **Easier zooming and scaling:**  Geometric transformations (zooming, scaling, rotation) can be applied directly to the drawing instructions.

### 3.5 Disadvantages of Random Scan

*   **Limited color range:** Typically limited to a small number of colors.  Difficult to display realistic images with filled areas and shading.
*   **Complexity:** More complex and expensive to manufacture than raster scan displays.
*   **Refresh rate limitations:**  As the complexity of the scene increases, the refresh rate can decrease, leading to flicker.  The more lines in the display list, the longer it takes to refresh the screen.
*   **Difficult to display realistic scenes:** Primarily suitable for line drawings and simple geometric shapes, not well-suited for complex, realistic images.

## 4. Comparison Table: Raster Scan vs. Random Scan

| Feature           | Raster Scan                        | Random Scan (Vector Scan)              |
| ----------------- | ----------------------------------- | ---------------------------------------- |
| Image Formation    | Pixel-based (scan lines)           | Line-based (direct drawing)            |
| Resolution        | Limited by pixel grid              | High (smooth lines)                    |
| Aliasing          | Present (stair-stepping)           | Absent (smooth lines)                    |
| Memory Requirements | High (frame buffer)              | Lower (display list)                     |
| Color Range        | Wide (millions of colors)         | Limited                                |
| Realism           | Excellent (filled areas & shading) | Poor (difficult to fill areas)         |
| Cost             | Lower                              | Higher                                  |
| Complexity        | Simpler                             | More Complex                           |
| Applications       | TVs, monitors, gaming              | CAD/CAM, Engineering Drawings (historically) |

## 5. Applications

*   **Raster Scan:** Televisions, computer monitors, printers, scanners, digital cameras, and modern game consoles all rely on raster scan technology. Any application needing realistic images with colors and shading heavily utilizes raster scan.

*   **Random Scan:** Historically used in CAD/CAM applications, vector graphics displays, and oscilloscope-like devices.  While less common as a primary display technology now, the principles are still relevant to understanding how vector graphics are rendered and manipulated. SVG (Scalable Vector Graphics) are based on this concept.

## 6. Important Points to Remember

*   **Raster scan** sweeps across the entire screen, row by row.
*   **Random scan** draws lines directly between specified points.
*   **Frame buffer** is the memory that stores pixel data in raster scan systems.
*   **Display list** is the list of drawing instructions in random scan systems.
*   **Resolution** is higher in random scan systems.
*   **Raster scan** is better for displaying realistic images.
*   **Random scan** is better for line drawings.
*   Modern displays predominantly use raster scan technology.

## 7. Practice Questions / Exercises

**1.  Explain the difference between a raster scan and a random scan display.**

    *Answer:* Raster scan systems sweep across the entire screen row by row, illuminating pixels based on data in the frame buffer. Random scan systems directly draw lines between specified points based on instructions in a display list.

**2.  What is a frame buffer and what is its purpose in a raster scan system?**

    *Answer:* A frame buffer is a memory area that stores the color values for each pixel on the screen in a raster scan system. It determines the color and intensity of each pixel and is continuously refreshed to maintain the image on the screen.

**3.  What are the advantages and disadvantages of using a random scan display system?**

    *Answer:*
    *Advantages:* High resolution, no aliasing, smaller memory requirements, easier zooming and scaling.
    *Disadvantages:* Limited color range, complexity, refresh rate limitations, difficult to display realistic scenes.

**4.  Which display technology is more suitable for displaying realistic images with filled areas and shading?  Explain why.**

    *Answer:* Raster scan is more suitable because it can control the intensity of each pixel individually, allowing for complex shading and color variations to create realistic-looking images.  Random scan struggles with filling areas effectively.

**5.  What is the purpose of a display list in a random scan system?**

    *Answer:* The display list stores the drawing instructions (coordinates and attributes) for the image in a random scan system. The display processor interprets these instructions to generate control signals to drive the electron beam.

**6. You are designing a display system for an engineering CAD application.  Which display technology would you choose and why (considering historical context and modern equivalents)?**

    *Answer:* Historically, random scan would have been the ideal choice due to its ability to display clean, high-resolution lines without aliasing, crucial for precise engineering drawings. However, modern CAD applications typically utilize raster scan displays with antialiasing techniques and powerful graphics processors to overcome the limitations of raster displays. These applications utilize vector graphics representation internally, but output on raster displays. In essence, the **raster scan display** coupled with powerful graphics hardware and anti-aliasing algorithms provides a better overall solution for modern CAD applications.

**7. What is the relationship between the frame buffer size and the resolution and color depth of a raster scan display?**

*Answer:* The frame buffer size is directly related to the resolution and color depth. Resolution (number of pixels) and color depth (number of bits per pixel) determine the overall memory needed for the frame buffer.  Higher resolution and higher color depth require a larger frame buffer. For example, a 1024x768 display with 24-bit color requires a frame buffer of 1024 * 768 * 3 bytes (approximately 2.25 MB).
