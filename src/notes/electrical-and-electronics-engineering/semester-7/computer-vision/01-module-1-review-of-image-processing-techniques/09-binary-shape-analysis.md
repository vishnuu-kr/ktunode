---
title: "Binary shape analysis"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a26"
status: "completed"
scrapedAt: "2026-05-23T16:32:20.589Z"
---
## Computer Vision: Module 1 - Review of Image Processing Techniques
### Topic: Binary Shape Analysis

---

### Introduction to Binary Shape Analysis

Binary images are images where each pixel has only two possible values, typically 0 (background) and 1 (foreground), or black and white. Binary shape analysis is a fundamental step in many computer vision tasks, allowing us to extract meaningful information about the shapes of objects in an image. This topic builds upon basic image processing techniques and forms the foundation for more complex object recognition and analysis.

**Key Concepts:**

*   **Binary Image:** An image with a pixel depth of 1 bit, resulting in only two possible pixel values.
*   **Foreground/Background Segmentation:** The process of separating the objects of interest (foreground) from the rest of the image (background). This is often a prerequisite for binary shape analysis.
*   **Connected Components:** Sets of pixels that are connected to each other based on a connectivity rule (e.g., 4-connectivity or 8-connectivity).

**Relevance to Course Outcomes:**

*   This topic directly supports **CO2: Apply basic morphological and boundary operators for Computer vision applications.** Binary shape analysis heavily relies on these operators.
*   It also contributes to **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.** Understanding shape properties is crucial for object detection and recognition.

---

### 1. Connected Components Labeling

Connected components labeling (CCL) is an algorithm that finds all connected regions of foreground pixels in a binary image. Each connected region is assigned a unique label.

**Key Concepts:**

*   **Connectivity:**
    *   **4-Connectivity:** Pixels are considered connected if they share an edge (horizontally or vertically).
    *   **8-Connectivity:** Pixels are considered connected if they share an edge or a corner (diagonally).
*   **Algorithm Steps (Two-Pass Algorithm):**
    1.  **First Pass (Labeling):**
        *   Scan the image pixel by pixel (e.g., row by row, left to right).
        *   If a foreground pixel is encountered:
            *   Check its already processed neighbors (typically above and to the left for 4-connectivity, or above, left, and upper-left/upper-right for 8-connectivity).
            *   If no foreground neighbors exist, assign a new label.
            *   If one foreground neighbor exists, assign its label to the current pixel.
            *   If multiple foreground neighbors exist with different labels, assign one of the labels and record an equivalence between the different labels.
    2.  **Second Pass (Equivalence Resolution):**
        *   Scan the image again.
        *   For each labeled pixel, check its neighbors. If a neighbor has a different label, resolve the equivalence by assigning the smaller of the two labels to all pixels with the larger label. This process is often done using a Disjoint Set Union (DSU) data structure.

**Example:**

Consider a simple binary image:

```
0 1 1 0
0 1 0 0
0 0 1 1
```

Using 4-connectivity:

*   Pixel (0,1) gets label 1.
*   Pixel (0,2) has neighbor (0,1) with label 1, so it gets label 1.
*   Pixel (1,1) has neighbor (0,1) with label 1, so it gets label 1.
*   Pixel (2,2) gets label 2.
*   Pixel (2,3) has neighbor (2,2) with label 2, so it gets label 2.

After the first pass, we might have:

```
0 1 1 0
0 1 0 0
0 0 2 2
```

The second pass would confirm these labels.

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Likely covers connected components as a post-segmentation step).
*   **Szeliski (2011), Chapter 4: Image Segmentation** (Discusses region-based segmentation, which includes CCL).

**Relevance to Course Outcomes:**

*   **CO2:** CCL is a fundamental operator for analyzing regions, which are the basis of shapes.
*   **CO5:** Identifying distinct objects (components) is the first step in analyzing a scene.

---

### 2. Shape Descriptors

Once objects are identified as connected components, we can extract various features or descriptors that characterize their shape. These descriptors can be used for object recognition, classification, and comparison.

#### 2.1. Area

The number of foreground pixels in a connected component.

**Formula:**
Area = Sum of all foreground pixels in the component.

**Example:**
In the previous example, the area of the first component is 3 pixels, and the second is 2 pixels.

**Relevance to Course Outcomes:**

*   **CO2:** A basic geometric property.
*   **CO5:** Helps distinguish objects based on their size.

#### 2.2. Perimeter

The length of the boundary of a connected component.

**Key Concepts:**

*   **Boundary Pixels:** Pixels that have at least one foreground neighbor.
*   **Approximation Methods:**
    *   **Pixel Counting:** Summing the number of boundary pixels. This is sensitive to connectivity and pixel resolution.
    *   **Chain Code:** Representing the boundary as a sequence of directional codes (e.g., 0 for right, 1 for up-right, etc.). The perimeter can be approximated by the number of steps in the chain code.

**Example:**
For a 3x3 square of foreground pixels, the perimeter using pixel counting (4-connectivity) is 12.

**Textbook References:**

*   **Schalkoff (2004), Chapter 4: Image Segmentation and Feature Extraction** (Likely discusses perimeter calculation).

**Relevance to Course Outcomes:**

*   **CO2:** A fundamental boundary property.
*   **CO5:** Can help differentiate between compact and elongated shapes.

#### 2.3. Centroid (Center of Mass)

The average coordinate of all foreground pixels in a component.

**Formula:**
$C_x = \frac{1}{N} \sum_{i=1}^{N} x_i$
$C_y = \frac{1}{N} \sum_{i=1}^{N} y_i$
where $N$ is the total number of foreground pixels and $(x_i, y_i)$ are the coordinates of each pixel.

**Example:**
For a component with pixels at (1,1), (1,2), (2,1):
$N=3$
$C_x = \frac{1+1+2}{3} = \frac{4}{3} \approx 1.33$
$C_y = \frac{1+2+1}{3} = \frac{4}{3} \approx 1.33$

**Relevance to Course Outcomes:**

*   **CO2:** A basic shape property.
*   **CO5:** Useful for object localization and tracking.

#### 2.4. Bounding Box

The smallest rectangle aligned with the image axes that encloses the entire connected component.

**Key Concepts:**

*   Defined by `xmin`, `xmax`, `ymin`, `ymax` coordinates of the component's pixels.

**Example:**
For pixels at (1,1), (1,2), (2,1), (3,3):
`xmin = 1`, `xmax = 3`
`ymin = 1`, `ymax = 3`
The bounding box would be a rectangle from (1,1) to (3,3).

**Relevance to Course Outcomes:**

*   **CO2:** A basic enclosing property.
*   **CO5:** Essential for object detection and display.

#### 2.5. Eccentricity

A measure of how elongated an object is. It's the ratio of the length of the major axis to the length of the minor axis of an ellipse that has the same moments as the object.

**Key Concepts:**

*   **Moments:** Statistical measures derived from the pixel distribution.
    *   **Central Moments:** Moments calculated with respect to the centroid.
    *   **Second-Order Central Moments (Hu Moments):** Invariants to translation, scale, and rotation. `μ_pq = Σ_x Σ_y (x-Cx)^p (y-Cy)^q * I(x,y)` where `I(x,y)` is the pixel intensity.
*   **Calculation:** Involves calculating the moments of inertia of the shape and then finding the eigenvalues of the covariance matrix formed by the second-order central moments.

**Example:**
A perfect circle has an eccentricity of 0 (major and minor axes are equal). A long, thin line has an eccentricity close to 1.

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Might discuss moments for shape description).
*   **Szeliski (2011), Chapter 4: Image Segmentation** (May cover feature extraction including moments).

**Relevance to Course Outcomes:**

*   **CO2:** Quantifies a specific shape characteristic.
*   **CO5:** Useful for distinguishing between round and elongated objects in a scene.

#### 2.6. Aspect Ratio

The ratio of the width to the height of the bounding box.

**Formula:**
Aspect Ratio = `(xmax - xmin) / (ymax - ymin)`

**Example:**
A square bounding box has an aspect ratio of 1. A wide rectangle will have an aspect ratio > 1, and a tall rectangle will have an aspect ratio < 1.

**Relevance to Course Outcomes:**

*   **CO2:** A simple geometric ratio.
*   **CO5:** Easy way to characterize object proportions.

#### 2.7. Solidity

The ratio of the object's area to the area of its convex hull.

**Key Concepts:**

*   **Convex Hull:** The smallest convex polygon that encloses all points of the object.

**Formula:**
Solidity = Area / Area of Convex Hull

**Example:**
A solid disk has a solidity of 1. A star shape will have a solidity less than 1 because its convex hull is a polygon encompassing its outer points, with significant area enclosed by the hull but not the object itself.

**Textbook References:**

*   **Szeliski (2011), Chapter 4: Image Segmentation** (Convex hull is often discussed in the context of shape analysis).
*   **Forsyth & Ponce (2002), Chapter 10: Shape from Shading** (While focused on shading, they might touch upon shape properties like convexity).

**Relevance to Course Outcomes:**

*   **CO2:** Measures concavity/convexity of a shape.
*   **CO5:** Helps distinguish between convex and concave objects.

#### 2.8. Hu Moments (Image Moments Invariants)

A set of seven moments that are invariant to translation, scale, and rotation. They are derived from the central moments.

**Key Concepts:**

*   **Invariants:** Features that do not change when the object undergoes certain transformations.
*   **Calculation:** Involves calculating normalized central moments and then applying specific formulas to derive the seven Hu moments.

**Formulae (Simplified for illustration, actual derivation involves normalized central moments):**
*   $\phi_1 = \eta_{20} + \eta_{02}$
*   $\phi_2 = (\eta_{20} - \eta_{02})^2 + (2\eta_{11})^2$
*   ... and so on for $\phi_3$ to $\phi_7$.

**Example:**
If you have an image of a character 'L' and its rotated version, their Hu moments should be very similar, allowing for recognition despite the rotation.

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Moments are often discussed as shape features).
*   **Szeliski (2011), Chapter 4: Image Segmentation** (Invariants like Hu moments are standard for shape description).
*   **Schalkoff (2004), Chapter 4: Image Segmentation and Feature Extraction** (Likely provides detailed derivations).

**Relevance to Course Outcomes:**

*   **CO2:** Advanced shape descriptors providing robustness.
*   **CO5:** Crucial for invariant object recognition, making analysis reliable under varying conditions.

---

### 3. Boundary Analysis

Analyzing the contour or boundary of shapes.

#### 3.1. Boundary Following (Contour Tracing)

Algorithms that trace the boundary pixels of a connected component.

**Key Concepts:**

*   **Moore Neighbor Tracing:** A common algorithm that starts at a boundary pixel and follows the boundary by checking neighbors in a specific order. It guarantees finding all boundary pixels and is often used to generate chain codes.
*   **Chain Code:** A sequence of numbers representing the direction of movement from one boundary pixel to the next (e.g., 0 for East, 1 for North-East, 2 for North, etc.).

**Example:**
Tracing the boundary of a square. Starting at the bottom-left corner and moving clockwise might produce a chain code like 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 1.

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Boundary tracing is a standard technique).
*   **Szeliski (2011), Chapter 4: Image Segmentation** (Contour analysis is a key topic).
*   **Schalkoff (2004), Chapter 4: Image Segmentation and Feature Extraction** (Detailed description of contour tracing).

**Relevance to Course Outcomes:**

*   **CO2:** Directly applies boundary operators.
*   **CO5:** Provides detailed shape information for analysis.

#### 3.2. Fourier Descriptors

Representing the boundary shape in the frequency domain using the Discrete Fourier Transform (DFT) of the boundary coordinates (often after converting to polar coordinates or using chain codes).

**Key Concepts:**

*   **Transform:** Apply DFT to the sequence of boundary points (e.g., x and y coordinates as functions of the arc length parameter).
*   **Invariance:** Can be made invariant to translation, scale, and rotation by appropriately processing the Fourier coefficients. For example, dividing higher-frequency coefficients by lower-frequency ones can achieve scale and rotation invariance.

**Example:**
The boundary of a circle will have a very simple Fourier descriptor with a strong peak at a specific frequency. The boundary of a complex shape will have a more complex spectrum.

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Frequency domain analysis for shapes).
*   **Szeliski (2011), Chapter 4: Image Segmentation** (Frequency-based shape representations).

**Relevance to Course Outcomes:**

*   **CO2:** Advanced boundary analysis techniques.
*   **CO5:** Provides robust shape descriptors that can be invariant to transformations.

---

### 4. Morphological Operations for Shape Analysis

Morphological operations are fundamental for processing and analyzing shapes in binary images. They are based on set theory and operations with a structuring element.

**Key Concepts:**

*   **Structuring Element (SE):** A small binary image (kernel) used to probe and transform the input image. Common shapes are squares, disks, and lines.
*   **Foreground/Background:** In binary morphology, the SE probes for foreground pixels.

#### 4.1. Erosion

Shrinks the foreground regions of an image. The output pixel is 1 only if the structuring element, when centered on that pixel, is entirely contained within the foreground of the input image.

**Effect:** Removes small objects, breaks thin connections, thins object boundaries.

**Formula:**
$A \ominus B = \{z \mid B_z \subseteq A\}$
where $A$ is the input image, $B$ is the structuring element, and $B_z$ is $B$ translated by $z$.

**Example:**
Eroding a thin line will make it thinner, potentially breaking it into small segments.

#### 4.2. Dilation

Expands the foreground regions of an image. The output pixel is 1 if any pixel of the structuring element, when centered on that pixel, overlaps with a foreground pixel of the input image.

**Effect:** Grows foreground regions, fills small holes, connects broken objects.

**Formula:**
$A \oplus B = \{z \mid B_z \cap A \neq \emptyset\}$

**Example:**
Dilating a thin line will make it thicker.

#### 4.3. Opening

An erosion followed by a dilation, using the same structuring element.

**Effect:** Removes small objects (noise), smooths contours from the inside, but doesn't significantly change the size of larger objects. It's good for removing "salt" noise and separating objects that are close to each other.

**Formula:**
$A \circ B = (A \ominus B) \oplus B$

**Example:**
Opening with a small disk SE will remove small spurious foreground pixels.

#### 4.4. Closing

A dilation followed by an erosion, using the same structuring element.

**Effect:** Fills small holes within foreground objects, connects closely spaced foreground objects, smooths contours from the outside. It's good for removing "pepper" noise and filling gaps.

**Formula:**
$A \bullet B = (A \oplus B) \ominus B$

**Example:**
Closing with a small disk SE can fill small holes inside a circle.

#### 4.5. Morphological Gradient

The difference between the dilation and erosion of an image.

**Effect:** Highlights the boundaries of objects, as dilation expands and erosion shrinks.

**Formula:**
$A \nabla B = A \oplus B - A \ominus B$

**Textbook References:**

*   **Davies (2012), Chapter 7: Image Segmentation** (Comprehensive coverage of morphology).
*   **Szeliski (2011), Chapter 3: Image Filtering** (Discusses morphological filters).
*   **Forsyth & Ponce (2002), Chapter 2: Image Filtering** (Introduces basic filtering, including morphological concepts).
*   **Schalkoff (2004), Chapter 5: Morphological Image Processing** (Dedicated chapter on morphology).
*   **Solem (2012), Chapter 4: Image Filtering and Feature Extraction** (Likely covers morphological operations).

**Relevance to Course Outcomes:**

*   **CO2:** Core topic, directly applying morphological operators.
*   **CO5:** Crucial for pre-processing before shape analysis and for noise reduction in object detection.

---

### 5. Convexity and Concavity Analysis

**Key Concepts:**

*   **Convex Shape:** A shape where the line segment connecting any two points within the shape is entirely contained within the shape.
*   **Concave Shape:** A shape that is not convex, meaning there exists at least one pair of points within the shape such that the line segment connecting them goes outside the shape.

**Techniques:**

*   **Convex Hull:** As mentioned before, comparing the object's area to its convex hull area gives Solidity. A solidity of 1 indicates a convex shape.
*   **Concavity Defects:** The regions between the object's boundary and its convex hull. Analyzing these defects can help characterize the degree of concavity.

**Relevance to Course Outcomes:**

*   **CO2:** Understanding convexity is a fundamental geometric property.
*   **CO5:** Distinguishing convex and concave objects is important for recognition (e.g., a hand is concave, a coin is convex).

---

### Practice Questions

1.  **Question:** What is the difference between 4-connectivity and 8-connectivity in connected components labeling? Which one is generally preferred for shape analysis and why?
    **Answer:**
    *   **4-connectivity:** Pixels are connected if they share an edge (horizontally or vertically).
    *   **8-connectivity:** Pixels are connected if they share an edge or a corner (diagonally).
    *   **Preference:** 8-connectivity is generally preferred for shape analysis because it forms more compact and representative connected regions, especially for diagonally oriented shapes. 4-connectivity can lead to fragmented components for diagonal lines.

2.  **Question:** Explain how erosion and dilation affect the area and perimeter of a binary object.
    **Answer:**
    *   **Erosion:** Decreases the area and perimeter of a binary object. It "shrinks" the object.
    *   **Dilation:** Increases the area and perimeter of a binary object. It "grows" the object.

3.  **Question:** You are given a binary image containing several circular objects. Which shape descriptor would be most suitable to differentiate between a perfect circle and an ellipse with a slightly elongated shape?
    **Answer:**
    *   **Eccentricity** or **Aspect Ratio** of the bounding box. A perfect circle will have an eccentricity close to 0 and an aspect ratio close to 1. An ellipse will have a non-zero eccentricity and an aspect ratio different from 1. **Hu Moments** would also be effective as they are invariant to rotation and scale, providing a robust descriptor.

4.  **Question:** What is the purpose of opening and closing operations in binary shape analysis?
    **Answer:**
    *   **Opening:** Used to remove small objects (noise) and to smooth the contours of objects from the inside. It's effective against "salt" noise.
    *   **Closing:** Used to fill small holes within objects and to connect nearby objects. It's effective against "pepper" noise.

5.  **Question:** If a binary object has a solidity of 0.8, what does this imply about its shape?
    **Answer:**
    A solidity of 0.8 means that the object's area is 80% of the area of its convex hull. This implies that the object is not perfectly convex and has some degree of concavity or indentation.

6.  **Question:** How can you make shape descriptors invariant to rotation?
    **Answer:**
    *   Using **Hu Moments**, which are inherently rotation-invariant.
    *   For other descriptors like Fourier Descriptors, specific normalization techniques applied to the Fourier coefficients can achieve rotation invariance.
    *   For simple descriptors like aspect ratio or area, they are not rotation invariant. However, if we consider properties derived from moments of inertia (eigenvalues), they can be made rotation invariant.

---

### Important Points to Remember

*   **Binary images are the foundation:** Many advanced computer vision tasks start by converting color or grayscale images into binary representations through segmentation.
*   **Connectivity matters:** The choice of connectivity (4 or 8) in CCL can significantly impact the perceived shapes and their properties.
*   **Shape descriptors provide quantitative information:** They allow us to move from visual perception to numerical analysis for tasks like object recognition and classification.
*   **Morphological operations are powerful tools:** They are essential for pre-processing, noise reduction, and refining shapes before or during analysis.
*   **Invariants are key for robustness:** Descriptors that are invariant to transformations (scale, rotation, translation) are crucial for reliable object recognition in real-world scenarios.

---

This concludes the study notes for Binary Shape Analysis. These concepts are vital for understanding how computers perceive and interpret the geometric properties of objects in images.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
