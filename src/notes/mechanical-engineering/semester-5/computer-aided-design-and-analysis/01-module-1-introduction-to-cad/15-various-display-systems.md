---
title: "various display systems"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 1: Introduction to CAD"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634e9"
status: "completed"
scrapedAt: "2026-05-20T17:58:37.146Z"
---
# Computer Aided Design and Analysis

## Module 1: Introduction to CAD

### Topic: Various Display Systems in CAD

---

**Learning Outcomes:**

*   To understand the fundamental principles of computer graphics relevant to CAD.
*   To explore the various display systems used in CAD, including their working principles and applications.
*   To comprehend the role of input and output devices in a CAD system.
*   To appreciate the evolution and importance of graphical display in the CAD workflow.

---

**Course Outcomes Alignment:**

*   **CO1: Understand the historical developments and industrial applications of CAD, including key components and latest software developments. (Knowledge Level: K1, K2)**
    *   This topic directly contributes to understanding key components of CAD systems, particularly the display system, and its historical evolution.
*   **CO2: Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software. (Knowledge Level: K3)**
    *   While this topic focuses on the display *hardware*, understanding how graphics are rendered on these displays is crucial for applying transformation techniques effectively.
*   **CO3: Apply 3D graphics and solid modeling techniques, such as Bezier and B-spline curves, and their application in creating complex geometric forms. (Knowledge Level: K3)**
    *   The display system is where these complex geometric forms are visualized, making its understanding essential for appreciating their creation and manipulation.
*   **CO4: Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems. (Knowledge Level: K2)**
    *   The results of FEA and FVM are typically visualized on display systems, requiring an understanding of how these complex datasets are presented.

---

### 1. Introduction to Display Systems in CAD

A display system is a crucial component of any Computer-Aided Design (CAD) system, responsible for visualizing the geometric models and related information created or analyzed. It translates the digital data into a visual representation that the user can interact with. The evolution of display systems has significantly impacted the capabilities and usability of CAD software.

**Key Concepts:**

*   **Raster Scan:** A process where the display screen is scanned line by line, from top to bottom and left to right, to draw images.
*   **Vector Scan (Stroke Writing):** A display method where the electron beam directly draws lines on the screen, tracing the path of the image.
*   **Resolution:** The number of pixels that can be displayed on the screen, typically expressed as width x height (e.g., 1920x1080). Higher resolution means more detail.
*   **Refresh Rate:** The number of times the screen is updated or redrawn per second, measured in Hertz (Hz). A higher refresh rate results in smoother motion.
*   **Color Depth:** The number of bits used to represent the color of each pixel, determining the range of colors that can be displayed.
*   **Pixel:** The smallest controllable element of a picture represented on the screen.
*   **Frame Buffer:** A memory area that stores the pixel values of the image to be displayed.

---

### 2. Types of Display Systems

Historically, CAD systems have utilized various display technologies. Modern CAD systems primarily rely on Raster Scan displays.

#### 2.1. Vector Display Systems (Stroke Writing)

*   **Working Principle:**
    *   Uses a directed electron beam to "draw" lines and curves directly onto the phosphor-coated screen.
    *   The beam moves from point to point, illuminating the path it travels.
    *   Requires constant refreshing of the image as the phosphor glow fades.
*   **Advantages:**
    *   Excellent for displaying line drawings and wireframe models.
    *   Very sharp, clear lines with no pixelation artifacts.
    *   Can display complex line drawings without aliasing (jagged edges).
*   **Disadvantages:**
    *   Cannot display solid, shaded, or filled areas effectively.
    *   Image intensity decreases with the number of lines in the display.
    *   Limited color capabilities.
    *   Difficult to update portions of the image without redrawing the entire scene.
*   **Applications in CAD (Historical):**
    *   Early CAD systems used vector displays for drafting and wireframe modeling.
    *   Plotters, which are output devices, still use a similar principle to draw on paper.
*   **Reference:**
    *   Groover & Zimmers (2014) likely discusses the historical context of display technologies in early CAD.
    *   Rogers & Adams (1990) provides foundational principles of computer graphics, including vector graphics.

#### 2.2. Raster Display Systems

*   **Working Principle:**
    *   Divides the screen into a grid of small dots called pixels.
    *   Each pixel can be individually addressed and assigned a color value.
    *   An electron beam (in CRT) or light source (in LCD/LED) scans the grid row by row, illuminating each pixel according to its stored color value.
    *   **Frame Buffer:** A dedicated memory unit that stores the intensity or color value for each pixel on the screen. The graphics controller reads from the frame buffer to refresh the display.
*   **Advantages:**
    *   Can display solid areas, shaded surfaces, and realistic images.
    *   Capable of displaying a wide range of colors.
    *   Easy to update specific parts of the image.
    *   Dominant technology in modern computing.
*   **Disadvantages:**
    *   Can exhibit pixelation or "jaggies" on diagonal or curved lines if the resolution is not high enough.
    *   Requires a frame buffer, which adds to the cost and complexity.
*   **Types of Raster Displays:**
    *   **Cathode Ray Tube (CRT):**
        *   **Working Principle:** An electron gun emits a beam of electrons that is deflected by magnetic fields to scan across the screen, exciting phosphor dots to produce light.
        *   **Components:** Electron gun, deflection yoke, phosphor-coated screen, glass vacuum tube.
        *   **Color CRT:** Uses three electron guns (red, green, blue) and a shadow mask or aperture grille to ensure the electron beams hit the correct color phosphors.
        *   **Applications in CAD:** Widely used in older CAD workstations.
        *   **Reference:** Hearn, Baker, & Carithers (2001) offers detailed explanations of CRT technology and its role in computer graphics.
    *   **Flat Panel Displays:** These have largely replaced CRTs.
        *   **Liquid Crystal Display (LCD):**
            *   **Working Principle:** Uses liquid crystals to control the passage of light from a backlight. Pixels are formed by liquid crystals that can be twisted to block or allow light to pass through polarizing filters.
            *   **Components:** Backlight, polarizing filters, color filters, liquid crystal layer, electrodes.
            *   **Applications in CAD:** The standard for modern monitors, providing high resolution and energy efficiency.
        *   **Light Emitting Diode (LED) Display:**
            *   **Working Principle:** Uses light-emitting diodes as individual pixels that emit light directly. Can be emissive (each pixel is a light source) or use LEDs as a backlight for LCD panels (often marketed as "LED TVs").
            *   **Applications in CAD:** High-quality displays offering excellent contrast and brightness. OLED technology is a further advancement.
        *   **Other Flat Panel Technologies:** Plasma, Thin-Film Transistor (TFT). TFT is commonly used in modern LCDs for faster response times and better control of individual pixels.

**Important Point to Remember:** Modern CAD systems overwhelmingly utilize **Raster Scan display technology**, primarily through high-resolution **Flat Panel Displays (LCD/LED)**.

---

### 3. Input and Output Devices in CAD

While the display system is an output device, CAD systems rely on a combination of input and output devices for full functionality.

#### 3.1. Input Devices

These devices allow the user to provide commands and geometric data to the CAD system.

*   **Keyboard:**
    *   For entering commands, text, numerical values, and alphanumeric data.
    *   **Reference:** Groover & Zimmers (2014) will cover basic CAD system components, including the keyboard.
*   **Pointing Devices:**
    *   **Mouse:** Most common device for selecting objects, placing points, and issuing commands.
    *   **Trackball:** A stationary device with a movable ball that can be rotated to control the cursor.
    *   **Touchpad:** Integrated into laptop computers for cursor control.
*   **Digitizer/Graphics Tablet:**
    *   **Working Principle:** A flat surface where a stylus or puck is used to trace existing drawings or input precise coordinates. The tablet detects the position of the stylus/puck.
    *   **Components:** Tablet surface with a grid of wires, stylus/puck with a sensor.
    *   **Applications in CAD:** Used for converting analog drawings into digital format (digitizing) and for precise freehand input or menu selection.
    *   **Reference:** Groover & Zimmers (2014) may discuss digitizers in the context of CAD input.
*   **Scanner:**
    *   Converts hard-copy drawings or documents into digital raster images. These images can then be further processed (e.g., vectorization).
*   **3D Input Devices:**
    *   **3D Mouse/Space Mouse:** Provides intuitive control of model rotation, panning, and zooming in 3D space.
    *   **3D Scanner:** Captures the geometry of real-world objects to create digital 3D models.
    *   **Stylus on a Graphics Tablet with Tilt/Pressure Sensitivity:** For more natural drawing and sculpting in 3D modeling.

#### 3.2. Output Devices

These devices present the results of the CAD process.

*   **Display Monitor:** (As discussed in Section 2) The primary visual output device.
*   **Plotter:**
    *   **Working Principle:** Primarily mechanical devices that draw lines on paper using pens. Different types exist:
        *   **Pen Plotters:** Draw lines by moving pens across the paper.
        *   **Inkjet Plotters:** Spray ink onto the paper.
        *   **Laser Plotters:** Use laser technology to create printed output.
    *   **Applications in CAD:** Used for producing full-scale technical drawings and blueprints.
    *   **Reference:** Groover & Zimmers (2014) will likely cover plotters as a traditional CAD output device.
*   **Printer:**
    *   Produces hard copies of drawings and reports on paper or transparencies. Includes inkjet and laser printers.
*   **Film Recorder:**
    *   Captures the image from the display screen and records it onto photographic film (e.g., slides for presentations). Less common now.

---

### 4. The Role of Display Systems in CAD Workflow

The display system is central to the entire CAD process.

*   **Model Creation:** Users see the wireframe, surface, or solid models as they are being constructed.
*   **Editing and Manipulation:** Users directly interact with the visual representation to modify geometry, change parameters, or reposition components.
*   **Visualization:**
    *   **Wireframe:** Basic geometric representation.
    *   **Surface Modeling:** Visualizing complex curved surfaces.
    *   **Solid Modeling:** Viewing solid objects with hidden surfaces removed, often with shading.
    *   **Rendering:** Creating photorealistic images of models with realistic lighting and materials.
*   **Analysis (FEA/CFD):**
    *   Displaying the mesh used for discretization.
    *   Visualizing stress contours, displacement plots, temperature distributions, or fluid flow patterns.
    *   **Reference:** Chandrupatla & Belagundu (2001) and Logan (2007) discuss FEA, and their results are visualized on display systems. Hearn, Baker, & Carithers (2001) is key for understanding how these results are rendered.
*   **Drafting and Documentation:** Displaying 2D views, dimensions, and annotations for technical drawings.
*   **Collaboration and Review:** Sharing and reviewing designs on screen.

---

### 5. Evolution of Display Systems in CAD

*   **Early CAD (1960s-1970s):** Dominated by **vector displays** on expensive, specialized workstations (e.g., IBM, DEC). Interaction was limited, and focus was on wireframe drafting.
*   **Mid-CAD (1980s):** Rise of **raster scan CRT displays** with frame buffers. Increased capabilities for shading and solid modeling became available, though often at a high cost. Workstations from Silicon Graphics (SGI) and Sun Microsystems were prominent.
*   **Modern CAD (1990s-Present):** Widespread adoption of high-resolution **color raster displays (CRTs initially, then LCDs/LEDs)**. Graphics accelerators and dedicated GPUs became standard, enabling real-time manipulation of complex shaded and rendered models. Personal computers became powerful enough for sophisticated CAD.

---

### 6. Important Points to Remember

*   **Raster scan is the dominant display technology in modern CAD.**
*   **Resolution and refresh rate are key parameters for display performance in CAD.**
*   **Flat panel displays (LCD, LED) have largely replaced CRTs due to their advantages.**
*   **The display system is integral to all stages of the CAD workflow, from design to analysis.**
*   **Understanding display systems helps in appreciating the visualization of complex geometric and analytical data.**

---

### 7. Practice Questions

**Q1. Differentiate between Vector Display and Raster Display systems. Which one is predominantly used in modern CAD systems and why?**

**Answer:**
*   **Vector Display:** Draws lines directly using an electron beam. Offers sharp lines but cannot display filled areas or complex shading. Historically used for wireframe models.
*   **Raster Display:** Uses a grid of pixels, each with a specific color value stored in a frame buffer. Can display filled areas, shading, and realistic images.
*   **Modern CAD:** Raster display is predominantly used because it can render complex geometries, shaded surfaces, and the results of analyses (like FEA), providing a richer and more informative visualization compared to vector displays. The ability to display color and shaded areas is critical for design and analysis tasks.

**Q2. Explain the working principle of a Raster Scan display system and mention its key components.**

**Answer:**
A Raster Scan display system divides the screen into a matrix of pixels. An electron beam (in CRT) or a light source scans this grid row by row, from top to bottom, illuminating each pixel according to its color information. This color information is stored in a **frame buffer**, which is a dedicated memory area. The graphics controller reads from the frame buffer and controls the intensity and color of each pixel as the beam scans across.
Key components include:
*   **Electron Gun(s):** Emits electrons.
*   **Deflection Yoke:** Controls the direction of the electron beam.
*   **Phosphor-Coated Screen:** Emits light when struck by electrons.
*   **Frame Buffer:** Stores the pixel data for the entire image.
*   **Graphics Controller:** Manages the scanning process and data transfer from the frame buffer.

**Q3. What are the primary input devices used in a CAD system for geometric data entry?**

**Answer:**
The primary input devices for geometric data entry in a CAD system include:
*   **Keyboard:** For entering coordinates, commands, and parameters.
*   **Pointing Devices (Mouse):** For selecting points, objects, and issuing commands.
*   **Digitizer/Graphics Tablet:** For tracing existing drawings or precisely inputting coordinates with a stylus or puck.
*   **3D Input Devices (e.g., 3D mouse):** For intuitive manipulation of 3D models.

**Q4. Why was the transition from Vector to Raster displays significant for CAD technology?**

**Answer:**
The transition was significant because Raster displays enabled:
*   **Shaded Surfaces and Solid Modeling:** Vector displays were limited to line drawings. Raster displays allowed for the visualization of solid objects with hidden surfaces removed and shaded surfaces, which is crucial for realistic design and understanding of form.
*   **Color Capabilities:** Raster displays could display a wide spectrum of colors, improving the clarity and richness of visual information.
*   **Ease of Displaying Complex Scenes:** While early raster systems could be slow, advancements in graphics hardware allowed for smoother manipulation of complex models compared to the intensity limitations of vector displays with many lines.
*   **Integration with Analysis Results:** Visualizing complex data from FEA or CFD simulations, which often involve color maps and filled contours, became possible with raster graphics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
