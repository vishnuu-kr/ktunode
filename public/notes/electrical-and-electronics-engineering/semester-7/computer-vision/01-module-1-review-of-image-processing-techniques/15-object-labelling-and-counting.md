---
title: "object labelling and counting"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a2c"
status: "completed"
scrapedAt: "2026-05-23T16:32:30.065Z"
---
# Computer Vision: Module 1 - Review of Image Processing Techniques
## Topic: Object Labelling and Counting

---

### **Introduction**

Object labelling and counting are fundamental tasks in Computer Vision, enabling us to understand the composition of an image by identifying distinct objects and determining their quantity. These techniques form the bedrock for more complex analyses, such as object recognition, tracking, and scene understanding. This topic builds upon basic image processing concepts reviewed in Module 1, particularly focusing on connected component analysis and segmentation.

---

### **Learning Outcomes Covered:**

*   **LO1: Understand digital filtering operations for CV applications.** (K2) - While not directly object labelling/counting, filtering (e.g., noise reduction) often precedes these tasks.
*   **LO2: Apply basic morphological and boundary operators for Computer vision applications.** (K3) - Essential for refining segmented regions and identifying object boundaries.
*   **LO3: Apply edge, corner detection algorithms to locate objects in an image.** (K3) - Can be a precursor to identifying potential object regions.
*   **LO4: Apply optical flow algorithms to detect moving objects in a video.** (K3) - Relevant for counting dynamic objects in video streams.
*   **LO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.** (K4) - Object labelling and counting are direct components of scene analysis and object detection.

---

### **Key Concepts and Definitions**

*   **Image Segmentation:** The process of partitioning a digital image into multiple segments (sets of pixels, also known as superpixels). The goal is to simplify or change the representation of an image into something that is more meaningful and easier to analyze. Object labelling and counting heavily rely on effective segmentation.
    *   *Example:* Segmenting an image of a fruit bowl to isolate each individual fruit.
*   **Connected Components Analysis (CCA):** A fundamental algorithm in image processing used to identify and label contiguous regions of pixels that share a common attribute (e.g., intensity, color, or a specific value after thresholding).
    *   **Connectivity:** Refers to how pixels are considered "connected." Common types include:
        *   **4-connectivity:** Pixels are connected if they share an edge (horizontally or vertically).
        *   **8-connectivity:** Pixels are connected if they share an edge or a corner (diagonally).
    *   *Textbook Reference:* Davies (2012) extensively covers connected components analysis as a core segmentation technique.
*   **Label:** An identifier assigned to each distinct connected component (object) in an image.
*   **Object Counting:** The process of determining the number of distinct objects present in an image.
*   **Blob Analysis:** A broader term that often encompasses connected components analysis, particularly when dealing with regions of pixels that are distinct from the background.
*   **Binary Image:** An image where each pixel has only one of two possible values, typically black or white (0 or 1). Most object labelling and counting techniques are applied to binary images.
*   **Foreground/Background Separation:** The crucial step of distinguishing the objects of interest (foreground) from the surrounding area (background). This is often achieved through thresholding.
*   **Thresholding:** A simple image segmentation method that partitions image pixels into regions based on whether their intensity values are above or below a certain threshold.
    *   **Global Thresholding:** A single threshold value is applied across the entire image.
    *   **Local/Adaptive Thresholding:** Threshold values are calculated dynamically for different regions of the image.
    *   *Course Outcome Alignment:* CO1 (digital filtering for CV applications) can be relevant here if filtering is used to improve thresholding results.
*   **Morphological Operations:** Operations that process image data based on shape. They are particularly useful for cleaning up binary images after thresholding, filling holes, or separating connected objects.
    *   **Erosion:** Shrinks the boundaries of foreground objects.
    *   **Dilation:** Expands the boundaries of foreground objects.
    *   **Opening:** Erosion followed by dilation. Used to remove small noise specks and thin protrusions.
    *   **Closing:** Dilation followed by erosion. Used to fill small holes within foreground objects and connect nearby components.
    *   *Textbook Reference:* Szeliski (2011) and Forsyth & Ponce (2002) discuss morphology in detail.
    *   *Course Outcome Alignment:* CO2 (Apply basic morphological and boundary operators) is directly applicable.
*   **Boundary Tracing:** Algorithms that identify and trace the outer contour of connected components. This can be useful for more precise object definition and analysis.
    *   *Course Outcome Alignment:* CO2 (boundary operators) is relevant.

---

### **Object Labelling Techniques**

The primary goal of object labelling is to assign a unique identifier to each distinct connected component in a segmented image.

#### **Two-Pass Connected Components Labelling Algorithm**

This is a classic and widely used algorithm for labelling connected components in binary images. It works in two passes:

**Pass 1: First Label Assignment**

1.  **Initialization:** Create an output image of the same size as the input binary image, initialized with zeros. Also, maintain a list of equivalences (e.g., a union-find data structure).
2.  **Scan:** Iterate through each pixel of the input binary image (typically row by row, from left to right).
3.  **Processing a Foreground Pixel:** If the current pixel `p` is a foreground pixel (e.g., intensity > threshold):
    *   **Check Neighbors:** Examine its connected neighbors that have already been processed. For 8-connectivity, these are the neighbors above and to the left.
    *   **Case 1: No labeled neighbors:** Assign a new, unique label to pixel `p`.
    *   **Case 2: One labeled neighbor:** Assign the same label as the labeled neighbor to pixel `p`.
    *   **Case 3: Multiple labeled neighbors:** Assign the smallest label among the labeled neighbors to pixel `p`. Record the equivalences between the labels of these neighbors in the equivalence list. For example, if neighbors have labels `L1` and `L2`, record that `L1` and `L2` are equivalent.
4.  **Label Management:** Maintain a counter for new labels.

**Pass 2: Label Resolution and Relabelling**

1.  **Equivalence Resolution:** Process the equivalence list to resolve chains of equivalences. This is typically done using a Union-Find (or Disjoint-Set Union) data structure. For each equivalence pair (label A, label B), unite their sets. After processing all equivalences, each set represents a single connected component.
2.  **Relabelling:** Iterate through the output image from Pass 1. For each foreground pixel, find the representative label of its equivalence set (the root of its tree in the Union-Find structure). Replace the pixel's current label with this representative label. This ensures that all pixels belonging to the same connected component have the same final label.
3.  **Counting:** The number of unique representative labels (excluding 0, the background label) is the total count of connected objects.

*   *Textbook Reference:* Davies (2012) provides a detailed explanation of this algorithm.
*   *Course Outcome Alignment:* CO5 (Analyse a given scene...) is directly supported as this is a core analysis technique.

#### **Example of Two-Pass Labelling (Simplified 4-connectivity):**

Consider the following binary image snippet:

```
0 1 1 0
0 1 0 1
0 0 1 1
```

Assume we are using 4-connectivity and scanning row by row.

**Pass 1:**

| Pixel (row, col) | Value | Neighbors (Left, Up) | Labeled Neighbors | Min Label | New Label/Equivalence | Output Image (Labels) |
| :--------------- | :---- | :------------------- | :---------------- | :-------- | :-------------------- | :-------------------- |
| (0, 1)           | 1     | 0, 0                 | None              | -         | New Label 1           | 1                     |
| (0, 2)           | 1     | 1, 0                 | 1                 | 1         | Label 1               | 1                     |
| (1, 1)           | 1     | 0, 1                 | 1                 | 1         | Label 1               | 1                     |
| (1, 3)           | 1     | 0, 0                 | None              | -         | New Label 2           | 2                     |
| (2, 2)           | 1     | 0, 1                 | 1                 | 1         | Label 1               | 1                     |
| (2, 3)           | 1     | 1, 2                 | 1, 2              | 1, 2      | Min(1, 2) = 1, Equiv(1,2) | 1                     |

*Intermediate Output Image (Labels):*
```
0 1 1 0
0 1 0 2
0 0 1 1
```
*Equivalence List:* `[1, 2]`

**Pass 2:**

Resolve equivalences: `1` and `2` are equivalent. Let's choose `1` as the representative.

Relabel the output image:

```
0 1 1 0
0 1 0 1  (2 becomes 1)
0 0 1 1
```

The final labeled image shows two connected components (both labeled 1). The count is 1.

*Important Note:* The choice of connectivity (4 vs. 8) significantly impacts the labelling outcome. 8-connectivity generally leads to fewer components being labeled separately when objects touch diagonally.

---

### **Object Counting**

Once objects are labelled, counting becomes straightforward: simply count the number of unique non-zero labels in the labelled image.

#### **Steps for Object Counting:**

1.  **Preprocessing:**
    *   **Noise Reduction:** Apply filters (e.g., Gaussian blur, median filter) to remove noise that could lead to spurious small components or broken object segments.
        *   *Course Outcome Alignment:* CO1 (digital filtering operations).
    *   **Color to Grayscale (if applicable):** Convert color images to grayscale if color is not a distinguishing feature.
2.  **Segmentation:**
    *   **Thresholding:** Convert the (preprocessed) image into a binary image by separating foreground (objects) from background.
        *   *Course Outcome Alignment:* CO1.
    *   **Morphological Operations:** Apply opening and closing to clean the binary image.
        *   Opening can remove small background noise.
        *   Closing can fill small holes within objects or reconnect slightly broken parts.
        *   *Course Outcome Alignment:* CO2.
3.  **Object Labelling:** Apply a connected components labelling algorithm (e.g., two-pass algorithm).
4.  **Counting:** Count the number of distinct labels (excluding the background label).

#### **Advanced Counting Scenarios and Techniques:**

*   **Overlapping Objects:** Standard connected components labelling will treat overlapping objects as a single component. More advanced segmentation techniques (e.g., watershed segmentation, distance transform-based methods) are needed to separate touching objects.
    *   *Textbook Reference:* Szeliski (2011) discusses watershed segmentation.
*   **Counting in Video:**
    *   **Frame-by-Frame Counting:** Apply the above techniques to each frame. This can be noisy due to flicker or slight object movement.
    *   **Object Tracking:** Track detected objects across frames. This helps maintain identity and prevents double-counting or missing objects due to temporary occlusions or detection failures. Optical flow can be used to estimate object motion.
        *   *Course Outcome Alignment:* CO4 (Apply optical flow algorithms).
    *   **Background Subtraction:** Identify moving objects by comparing the current frame with a background model. This is effective for stationary cameras.
*   **Counting by Detection:** Instead of general segmentation, train a specific object detector (e.g., Haar Cascades, HOG+SVM, Deep Learning detectors like YOLO, Faster R-CNN) to find and count specific types of objects. This is more robust for recognizing specific object classes.
    *   *Textbook Reference:* Goodfellow et al. (2016) on Deep Learning is highly relevant for modern object detection.
    *   *Course Outcome Alignment:* CO5 (detect/recognize objects).

---

### **Practical Considerations and Implementation Notes**

*   **Choice of Threshold:** Selecting the optimal threshold is critical. Otsu's method is a popular automatic thresholding technique.
*   **Connectivity Choice:** 8-connectivity is generally preferred for most object counting tasks as it's more intuitive to consider diagonally adjacent pixels as part of the same object.
*   **Data Structures:** For efficient labelling, a Union-Find data structure is highly recommended for the equivalence resolution step.
*   **Libraries:** Most computer vision libraries (e.g., OpenCV, scikit-image in Python) provide built-in functions for connected components analysis, morphological operations, and thresholding, significantly simplifying implementation.
    *   *Reference Book:* Baggio et al. (2012) (Mastering OpenCV) would provide practical examples using OpenCV. Solem (2012) (Programming Computer Vision with Python) is also excellent for practical implementation.
*   **Performance:** For real-time applications, efficient algorithms and optimized implementations are crucial. Parallel processing can also be beneficial.

---

### **Practice Questions**

1.  **Question:** Explain the difference between 4-connectivity and 8-connectivity in the context of connected components analysis. How might this difference affect the outcome of object labelling and counting?
    *   **Answer:** 4-connectivity considers only horizontal and vertical adjacency, while 8-connectivity includes diagonal adjacency. This means that objects touching diagonally might be considered a single component with 8-connectivity but separate components with 4-connectivity. Consequently, 8-connectivity might result in a lower object count compared to 4-connectivity for the same image.
    *   *Course Outcome Alignment:* LO2.

2.  **Question:** Describe the two main passes of the standard connected components labelling algorithm. What is the purpose of the equivalence list?
    *   **Answer:** **Pass 1:** Pixels are scanned, and initial labels are assigned based on their labeled neighbors. When multiple labels are found among neighbors, an equivalence list is created to record that these labels belong to the same component. **Pass 2:** The equivalence list is processed (e.g., using Union-Find) to resolve all equivalences. The image is then relabeled using the unique representative labels for each component. The equivalence list's purpose is to track relationships between different labels that actually belong to the same object, allowing for their consolidation into a single label.
    *   *Course Outcome Alignment:* CO5.

3.  **Question:** You are given a binary image with several small white dots (noise) and a few larger white blobs. How would you use morphological operations to clean up the image before counting the blobs?
    *   **Answer:** Apply an **opening** operation (erosion followed by dilation) with a small structuring element. The erosion step will shrink the small dots (noise) to the point where they disappear entirely. The subsequent dilation step will restore the size of the larger blobs, which were less affected by the initial erosion due to their size. This effectively removes the small noise elements while preserving the larger objects.
    *   *Course Outcome Alignment:* CO2.

4.  **Question:** Consider a scenario where you need to count people in a crowded street scene captured by a fixed camera. What are some challenges, and what techniques might you employ beyond simple thresholding and connected components?
    *   **Answer:**
        *   **Challenges:** People are not uniformly shaped, they overlap significantly, lighting conditions vary, background clutter is high, and motion blur can occur.
        *   **Techniques:**
            *   **Advanced Segmentation:** Watershed segmentation or methods based on the distance transform could help separate overlapping individuals.
            *   **Object Detection:** Train a specialized person detector (e.g., using HOG features, Haar cascades, or deep learning models like YOLO) to directly identify and bound individuals.
            *   **Tracking (for video):** If it's a video, optical flow or other tracking algorithms can help maintain the identity of individuals as they move, reducing false positives and improving robustness against temporary occlusions.
            *   **Density Estimation:** In extremely dense crowds, counting individual people might be infeasible. Density estimation techniques that predict the number of people in regions can be more effective.
    *   *Course Outcome Alignment:* CO3, CO4, CO5.

---

### **Important Points to Remember**

*   Object labelling and counting are heavily reliant on effective **segmentation**, often achieved through **thresholding** and **morphological operations**.
*   **Connected Components Analysis** is the core algorithm for identifying and labelling distinct regions.
*   The choice of **connectivity** (4 vs. 8) impacts the labelling outcome.
*   **Two-pass labelling** with an **equivalence list** is a standard and robust method.
*   For real-world scenarios, **preprocessing** (noise reduction) and **post-processing** (morphological cleanup) are crucial.
*   **Overlapping objects** require more advanced segmentation techniques than basic connected components.
*   In **video**, **tracking** and **background subtraction** are valuable additions for counting dynamic objects.
*   For specific object types, **object detection** models offer higher accuracy and specificity.

---
This concludes the notes for Object Labelling and Counting. Remember to refer to the provided textbooks for deeper theoretical understanding and practical implementation details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
