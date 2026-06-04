---
title: "Boundary descriptors – Chain codes"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a2d"
status: "completed"
scrapedAt: "2026-05-23T16:32:32.096Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques

## Topic: Boundary Descriptors – Chain Codes

### 1. Introduction to Boundary Descriptors

**1.1 What are Boundary Descriptors?**

*   Boundary descriptors are quantitative methods used to represent the shape of an object's boundary (contour) in an image.
*   They are crucial for object recognition, matching, and analysis in computer vision tasks.
*   The goal is to extract features from the boundary that are invariant to transformations like translation, rotation, and scaling (to some extent).

**1.2 Why are Boundary Descriptors Important?**

*   **Object Recognition:** By describing the shape of an object's boundary, we can compare it to known shapes in a database to identify it.
*   **Shape Analysis:** They help in understanding and categorizing different shapes.
*   **Pattern Matching:** Essential for finding specific patterns or objects within an image.
*   **Data Compression:** Representing a boundary efficiently can reduce storage requirements.

**1.3 Types of Boundary Descriptors:**

*   **Chain Codes:** Sequence of codes representing the direction of movement between consecutive boundary points.
*   **Fourier Descriptors:** Represent the boundary in the frequency domain.
*   **Moments:** Mathematical descriptors derived from the pixel distribution of a shape.
*   **Other methods:** Polygon approximation, signature based methods.

### 2. Chain Codes: A Detailed Study

**2.1 Definition of Chain Codes**

*   A chain code represents a boundary as a sequence of integers. Each integer (code) signifies the direction of movement from one boundary pixel to the next adjacent boundary pixel.
*   This technique traces the contour of an object by encoding the relative position of consecutive boundary pixels.

**2.2 How Chain Codes Work**

1.  **Start Point Selection:**
    *   An arbitrary starting point on the boundary is chosen. This point is usually the topmost, leftmost pixel of the boundary.
    *   **Davies (2012), Chapter 9:** Emphasizes the importance of a consistent starting point for reproducible chain codes.

2.  **Traversal:**
    *   Starting from the selected point, the algorithm moves to the next adjacent boundary pixel.
    *   The direction of this move is encoded with a numerical code.
    *   The process continues, moving from one boundary pixel to the next, encoding each step until the entire boundary is traversed and the starting point is reached again.

3.  **Encoding Scheme:**
    *   A common scheme uses 4-connectivity or 8-connectivity.
    *   **4-Connectivity:**
        *   0: Move right (R)
        *   1: Move up (U)
        *   2: Move left (L)
        *   3: Move down (D)
    *   **8-Connectivity:** (More common for smoother representation)
        *   0: East (R)
        *   1: Northeast (NE)
        *   2: North (U)
        *   3: Northwest (NW)
        *   4: West (L)
        *   5: Southwest (SW)
        *   6: South (D)
        *   7: Southeast (SE)

    *   **Example (8-Connectivity):** Imagine a boundary pixel at (x, y). The next boundary pixel could be at (x+1, y), (x+1, y-1), (x, y-1), etc. The chain code would represent the direction from (x, y) to that next pixel.

**2.3 Generating a Chain Code**

*   **Algorithm (using 4-connectivity for simplicity):**
    1.  Find the topmost, leftmost pixel of the object's boundary. Let this be the starting pixel $P_0$.
    2.  From $P_0$, move to the next adjacent boundary pixel in a predetermined order (e.g., right, up, left, down). Let this be $P_1$. Record the code for this move.
    3.  From $P_1$, move to the next adjacent boundary pixel following the contour. Let this be $P_2$. Record the code for this move.
    4.  Continue this process until you return to $P_0$.
    5.  The sequence of codes generated forms the chain code.

*   **Example:** Consider a simple square boundary.
    *   Let the pixels be at (0,0), (1,0), (2,0), (2,1), (2,2), (1,2), (0,2), (0,1).
    *   Starting point: (0,0) (topmost, leftmost).
    *   From (0,0) to (0,1): Down (Code 3)
    *   From (0,1) to (1,1): Right (Code 0) - *Correction: Assuming a square with clockwise traversal, let's re-evaluate the pixels for a standard square.*

    **Revised Example: A simple 3x3 square boundary**
    Pixels: (0,0), (1,0), (2,0), (2,1), (2,2), (1,2), (0,2), (0,1)

    Let's trace clockwise starting from the top-leftmost pixel: (0,0).

    *   Start at (0,0).
    *   Move to (1,0): This is a "Right" move. Let's assign 0 to Right. Code: **0**
    *   Move to (2,0): Another "Right" move. Code: **0**
    *   Move to (2,1): This is a "Down" move. Let's assign 3 to Down. Code: **3**
    *   Move to (2,2): Another "Down" move. Code: **3**
    *   Move to (1,2): This is a "Left" move. Let's assign 2 to Left. Code: **2**
    *   Move to (0,2): Another "Left" move. Code: **2**
    *   Move to (0,1): This is an "Up" move. Let's assign 1 to Up. Code: **1**
    *   Move to (0,0): Another "Up" move. Code: **1**

    The chain code would be: **00332211**.

    **Important Note:** The choice of traversal direction (clockwise vs. counter-clockwise) and the starting point will affect the generated chain code. However, the *length* of the code will be the same for a given boundary.

**2.4 Properties of Chain Codes**

*   **Sensitivity to Noise:** Chain codes are sensitive to small variations or noise on the boundary, leading to changes in the code.
*   **Boundary Length:** The length of the chain code is proportional to the perimeter of the object.
*   **Transformations:**
    *   **Translation:** Chain codes are invariant to translation because they only encode relative directions.
    *   **Rotation:** Rotation of the object will result in a cyclic shift of the chain code. For example, if the code is C = (c1, c2, ..., cn), a rotation might result in C' = (c2, c3, ..., cn, c1).
    *   **Scaling:** Scaling of the object will change the relative distances between boundary pixels and thus alter the chain code significantly.
    *   **Reflection:** Reflection will invert the order of the codes and potentially change some codes.

**2.5 Normalization of Chain Codes**

To make chain codes comparable under rotation, they need to be normalized.

*   **Method:** Generate the chain code, then generate all its cyclic shifts. Choose the lexicographically smallest (or largest) as the canonical representation.

*   **Example (continued):** For the code **00332211**
    *   **00332211**
    *   03322110
    *   33221100
    *   32211003
    *   22110033
    *   21100332
    *   11003322
    *   10033221

    The lexicographically smallest code is **00332211**. This would be the normalized chain code for this square.

*   **Szeliski (2011), Chapter 6:** Discusses feature normalization techniques to handle variations due to transformations.

**2.6 Applications of Chain Codes**

*   **Object Boundary Representation:** Simple and efficient representation of object contours.
*   **Shape Matching:** Comparing chain codes (after normalization) to find similar shapes.
*   **Image Retrieval:** Searching for images containing objects with specific shapes.
*   **Recognition of Simple Shapes:** Effective for distinguishing basic geometric shapes.
*   **CO2 (Apply basic morphological and boundary operators for Computer vision applications):** Chain codes directly fall under boundary operators.
*   **CO1 (Understand digital filtering operations for CV applications):** While not direct filtering, the process of extracting a boundary often involves filtering (e.g., edge detection).

**2.7 Advantages of Chain Codes**

*   **Simplicity:** Easy to understand and implement.
*   **Efficiency:** Relatively compact representation of a boundary.
*   **Translation Invariance:** Inherently invariant to translation.

**2.8 Disadvantages of Chain Codes**

*   **Sensitivity to Noise:** Prone to errors from noisy boundaries.
*   **Rotation Dependence:** Requires normalization to handle rotations.
*   **Scaling Dependence:** Not invariant to scaling.
*   **Limited Discriminative Power:** May not be sufficient for complex shapes or subtle differences.

### 3. Practice Questions and Exercises

**Question 1:**
Consider a boundary pixel at coordinates (5, 3). If the next boundary pixel in an 8-connected chain code representation is at (6, 4), what is the chain code for this step?
*(Assume the 8-connectivity scheme: 0-East, 1-Northeast, 2-North, 3-Northwest, 4-West, 5-Southwest, 6-South, 7-Southeast)*

**Answer 1:**
The move is from (5, 3) to (6, 4). This is a move one step to the East (x increases) and one step to the North (y decreases). This corresponds to the Northeast direction. In the given scheme, Northeast is code **1**.

**Question 2:**
What are the advantages and disadvantages of using chain codes for shape description?

**Answer 2:**
**Advantages:**
*   Simple to understand and implement.
*   Compact representation of a boundary.
*   Invariant to translation.

**Disadvantages:**
*   Sensitive to noise.
*   Requires normalization to handle rotation.
*   Not invariant to scaling.
*   Limited discriminative power for complex shapes.

**Question 3:**
Given a chain code **22110033** (using the 4-connectivity scheme: 0-Right, 1-Up, 2-Left, 3-Down), what transformation would likely result in the chain code **11003322**? Explain your reasoning.

**Answer 3:**
The chain code **22110033** starts with '2' (Left).
The chain code **11003322** starts with '1' (Up).

Let's look at the sequence:
Original: 2, 2, 1, 1, 0, 0, 3, 3
Transformed: 1, 1, 0, 0, 3, 3, 2, 2

The transformed sequence is a cyclic shift of the original sequence. If we shift **22110033** to the left by two positions, we get **11003322**. A cyclic shift of a chain code indicates a **rotation** of the object.

**Question 4:**
Imagine you are tasked with recognizing simple geometric shapes like squares and circles from binary images. Would chain codes be a suitable descriptor? If so, how would you handle variations in orientation? (Relates to CO2, CO5)

**Answer 4:**
Yes, chain codes can be suitable for recognizing simple geometric shapes like squares and circles, especially for tasks that fall under CO2 and CO5.

*   **Squares:** A square would have a chain code with pairs of codes representing horizontal and vertical movements (e.g., two '0's for right, two '3's for down, two '2's for left, two '1's for up in a specific order for 4-connectivity).
*   **Circles:** A circle would ideally have a chain code with many small steps in sequence, indicating gradual changes in direction.

To handle variations in orientation, **normalization** is crucial. As discussed, generating all cyclic shifts of the chain code and selecting the lexicographically smallest one provides a canonical representation that is invariant to rotation. This normalized chain code can then be used for matching against a database of known shapes. For CO5, this normalized descriptor could be part of a larger recognition pipeline.

### 4. Key Points to Remember

*   Chain codes are sequences of integers representing the direction of movement between consecutive boundary pixels.
*   They are useful for representing and comparing shapes.
*   **Translation Invariance:** Chain codes are naturally invariant to translation.
*   **Rotation:** Rotation leads to a cyclic shift in the chain code.
*   **Scaling:** Chain codes are sensitive to scaling.
*   **Normalization:** To compare shapes under different orientations, chain codes must be normalized by finding their lexicographically smallest cyclic shift.
*   **Sensitivity:** Chain codes can be sensitive to noise in the image boundary.
*   **Connectivity:** The choice of 4-connectivity or 8-connectivity affects the number of possible codes and the representation detail. 8-connectivity provides a smoother contour description.
*   **Starting Point:** A consistent starting point selection is important for reproducible chain code generation.

### 5. Alignment with Course Outcomes

*   **CO1 (Understand digital filtering operations for CV applications):** While chain codes are boundary descriptors, their extraction typically follows an edge detection or segmentation step, which involves digital filtering.
*   **CO2 (Apply basic morphological and boundary operators for Computer vision applications):** Chain codes are a fundamental type of boundary descriptor, directly fulfilling this outcome. Understanding how to generate and use them is key.
*   **CO3 (Apply edge, corner detection algorithms to locate objects in an image):** Chain codes are often applied *after* edge detection. Understanding boundary descriptors helps in appreciating the output of edge detection.
*   **CO5 (Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications):** Chain codes can be a component in a simple object recognition system, especially for basic shapes. Their efficiency can be leveraged for real-time applications if the object shapes are suitable.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. References

*   **Computer and Machine Vision by E. R. Davies (2012):** Davies often provides detailed explanations of image processing primitives like boundary tracing and descriptors, including chain codes, in chapters related to shape analysis and object recognition.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (2011):** Szeliski's book, particularly in sections on shape representation and matching, would likely cover chain codes as a basic descriptor, potentially discussing their normalization.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (2002):** This textbook would also cover foundational image processing techniques, including contour representation methods like chain codes.
*   **Digital Image Processing and Computer Vision by R. J. Schalkoff (2004):** Schalkoff's work is known for its practical approach to digital image processing, and chain codes would be a natural inclusion when discussing shape analysis.