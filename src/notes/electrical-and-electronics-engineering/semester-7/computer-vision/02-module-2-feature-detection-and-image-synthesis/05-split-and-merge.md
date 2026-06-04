---
title: "Split and merge"
subject: "COMPUTER VISION"
module: "Module 2: Feature Detection and Image Synthesis"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a36"
status: "completed"
scrapedAt: "2026-05-23T16:32:43.698Z"
---
# Module 2: Feature Detection and Image Synthesis - Split and Merge

## Topic: Split and Merge Algorithm

This module explores fundamental techniques in computer vision for analyzing and manipulating image features. The Split and Merge algorithm is a powerful technique for **image segmentation**, a process of partitioning an image into multiple segments or sets of pixels. This algorithm is particularly useful for grouping pixels with similar characteristics, such as color, intensity, or texture.

### Learning Outcomes Addressed:

*   **Segmentation of images using split and merge approaches.** (This is the core of the topic)
*   **Understanding the principles of region-based segmentation.** (Split and Merge is a region-based approach)
*   **Analyzing the trade-offs between segmentation accuracy and computational complexity in split and merge.**

### Key Concepts and Definitions:

*   **Image Segmentation:** The process of dividing a digital image into multiple segments (sets of pixels, also known as image objects or regions). The goal is to simplify or change the representation of an image into something more meaningful and easier to analyze.
*   **Region-Based Segmentation:** A class of segmentation techniques that aim to group pixels based on their similarity within a region. This contrasts with edge-based segmentation which focuses on finding boundaries between regions.
*   **Homogeneity Criteria:** A rule or set of rules used to determine whether a region of pixels can be considered uniform or homogeneous. Common criteria include:
    *   **Intensity/Color Similarity:** Pixels within a region have similar intensity values (grayscale) or color values (RGB).
    *   **Texture Similarity:** Pixels within a region exhibit similar textural patterns.
    *   **Geometric Similarity:** Pixels within a region form a geometrically coherent shape.
*   **Quadtree:** A tree data structure in which each internal node has exactly four children. Quadtrees are often used in computer graphics and image processing for spatial indexing and hierarchical decomposition. In the context of split and merge, a quadtree is used to represent the hierarchical partitioning of an image.
*   **Predicate Function (or Homogeneity Predicate):** A function that takes a region of pixels as input and returns `TRUE` if the region is homogeneous according to the defined criteria, and `FALSE` otherwise.

### The Split and Merge Algorithm:

The Split and Merge algorithm is an iterative process that combines a top-down (splitting) approach with a bottom-up (merging) approach to achieve image segmentation.

#### 1. Splitting Phase (Top-Down):

*   **Initialization:** The entire image is considered as a single region.
*   **Recursive Splitting:** The algorithm recursively checks if the current region is homogeneous.
    *   If the region is **homogeneous** according to the defined predicate function, it is not split further. It becomes a segment.
    *   If the region is **inhomogeneous**, it is split into smaller sub-regions. The most common splitting strategy is to divide the region into four equal-sized, non-overlapping quadrants (quadtree decomposition).
*   **Termination:** This splitting process continues until all regions are homogeneous or until a minimum region size is reached.

#### 2. Merging Phase (Bottom-Up):

*   **Objective:** To correct for over-segmentation that might occur during the splitting phase, where small, adjacent homogeneous regions might have been separated.
*   **Process:** The algorithm examines adjacent regions. If two adjacent regions are found to be homogeneous with respect to each other (i.e., their combined region also satisfies the homogeneity criteria), they are merged into a single larger region.
*   **Iteration:** This merging process can be performed iteratively until no more merges are possible.

### Pseudocode Representation:

```
function SplitAndMerge(Image, Predicate):
    Regions = []
    // Start with the entire image as one region
    Regions.add(Image)

    // Splitting Phase
    SplitRegions = []
    for each Region in Regions:
        if not Predicate(Region):
            // Split the region into 4 sub-regions
            sub_regions = SplitIntoFour(Region)
            for each sub_region in sub_regions:
                SplitRegions.add(sub_region)
        else:
            SplitRegions.add(Region)

    // Recursive Splitting (if not all regions are processed)
    // A more efficient implementation would use a recursive function directly.

    // Merging Phase
    MergedRegions = []
    // Initialize with the split regions
    MergedRegions = SplitRegions

    Repeat:
        MergesOccurred = FALSE
        NewMergedRegions = []
        processed_regions = set()

        for i from 0 to len(MergedRegions) - 1:
            if i in processed_regions:
                continue

            current_region = MergedRegions[i]
            merged_with_neighbor = FALSE

            for j from i + 1 to len(MergedRegions) - 1:
                if j in processed_regions:
                    continue

                neighbor_region = MergedRegions[j]

                // Check if current_region and neighbor_region are adjacent
                if AreAdjacent(current_region, neighbor_region):
                    // Check if merging them is homogeneous
                    if Predicate(Union(current_region, neighbor_region)):
                        merged_region = Union(current_region, neighbor_region)
                        NewMergedRegions.add(merged_region)
                        processed_regions.add(i)
                        processed_regions.add(j)
                        MergesOccurred = TRUE
                        merged_with_neighbor = TRUE
                        break // Move to the next region to process

            if not merged_with_neighbor:
                NewMergedRegions.add(current_region)
                processed_regions.add(i)

        MergedRegions = NewMergedRegions
    Until not MergesOccurred

    Return MergedRegions

// Helper functions:
// Predicate(Region) -> boolean (checks homogeneity)
// SplitIntoFour(Region) -> list of 4 sub-regions
// AreAdjacent(Region1, Region2) -> boolean
// Union(Region1, Region2) -> combined region
```

### Example: Splitting and Merging Based on Intensity

Consider a grayscale image.

*   **Predicate Function:** A region is homogeneous if the difference between the maximum and minimum intensity values within that region is less than a predefined threshold `T`.

**Initial Image (e.g., 8x8):**

```
[10 12 85 90 | 92 95 98 100]
[15 18 88 93 | 94 96 99 102]
[20 25 30 35 | 110 112 115 118]
[22 28 33 38 | 113 116 119 120]
---------------------------------
[40 45 50 55 | 130 135 140 145]
[42 48 52 58 | 133 138 142 148]
[50 55 60 65 | 150 155 160 165]
[53 58 63 68 | 153 158 162 168]
```

**Splitting Phase (assuming `T = 20` and the entire image is inhomogeneous):**

1.  **Split 1:** The image is split into four 4x4 quadrants.
    *   Top-Left (TL): Intensities range from 10 to 38. Max-Min = 28. **Inhomogeneous.**
    *   Top-Right (TR): Intensities range from 85 to 102. Max-Min = 17. **Homogeneous.**
    *   Bottom-Left (BL): Intensities range from 20 to 68. Max-Min = 48. **Inhomogeneous.**
    *   Bottom-Right (BR): Intensities range from 110 to 168. Max-Min = 58. **Inhomogeneous.**

2.  **Further Splitting:** The inhomogeneous quadrants are further split into four 2x2 quadrants.

    *   **TL (4x4):**
        *   TL-TL (2x2): 10-25, Max-Min = 15. **Homogeneous.**
        *   TL-TR (2x2): 85-93, Max-Min = 8. **Homogeneous.**
        *   TL-BL (2x2): 20-35, Max-Min = 15. **Homogeneous.**
        *   TL-BR (2x2): 35-38, Max-Min = 3. **Homogeneous.**

    *   **BL (4x4):**
        *   BL-TL (2x2): 20-55, Max-Min = 35. **Inhomogeneous.**
        *   BL-TR (2x2): 55-68, Max-Min = 13. **Homogeneous.**
        *   BL-BL (2x2): 40-65, Max-Min = 25. **Inhomogeneous.**
        *   BL-BR (2x2): 58-68, Max-Min = 10. **Homogeneous.**

    *   **BR (4x4):**
        *   BR-TL (2x2): 110-145, Max-Min = 35. **Inhomogeneous.**
        *   BR-TR (2x2): 98-102, Max-Min = 4. **Homogeneous.**
        *   BR-BL (2x2): 130-165, Max-Min = 35. **Inhomogeneous.**
        *   BR-BR (2x2): 150-168, Max-Min = 18. **Homogeneous.**

3.  **And so on...** This continues until all regions are homogeneous or reach a minimum size. Let's assume for simplicity, after further splitting, we end up with several small homogeneous regions.

**Example of regions after splitting (simplified):**

*   Region A (2x2): All 10-18
*   Region B (2x2): All 85-102
*   Region C (2x2): All 20-38
*   Region D (2x2): All 110-120
*   Region E (2x2): All 130-145
*   Region F (2x2): All 150-168
*   Region G (2x2): Mix of 20s and 50s (inhomogeneous)
*   Region H (2x2): Mix of 50s and 60s (inhomogeneous)

**Merging Phase:**

Now, we look at adjacent regions. Let's assume we have these resulting regions and their properties:

*   Region A (2x2, mean intensity 15)
*   Region B (2x2, mean intensity 95)
*   Region C (2x2, mean intensity 30)
*   Region D (2x2, mean intensity 115)
*   Region E (2x2, mean intensity 137)
*   Region F (2x2, mean intensity 159)
*   Region G (2x2, mixed values)
*   Region H (2x2, mixed values)

Suppose the splitting stopped at 2x2 blocks, and we have the following adjacent homogeneous regions:

*   A (2x2, values 10-18) is adjacent to a portion of C (2x2, values 20-38).
*   A (2x2, values 10-18) is also adjacent to a portion of the original BL quadrant that was split further.

Let's consider a simplified scenario after splitting where we have the following homogeneous 2x2 regions:

| R1 (10-18) | R2 (85-102) |
|------------|-------------|
| R3 (20-38) | R4 (35-38)  |
| R5 (40-55) | R6 (55-68)  |
| R7 (20-35) | R8 (45-58)  |

Let's say the splitting process results in the following regions:

*   **Reg1:** 2x2, intensity range [10, 18], mean=14
*   **Reg2:** 2x2, intensity range [85, 102], mean=93.5
*   **Reg3:** 2x2, intensity range [20, 38], mean=29
*   **Reg4:** 2x2, intensity range [110, 120], mean=115
*   **Reg5:** 2x2, intensity range [130, 145], mean=137.5
*   **Reg6:** 2x2, intensity range [150, 168], mean=159

Now, let's check for merging. Suppose the predicate function is: "difference between max and min intensity in the combined region is less than 20".

*   **Reg1 and Reg3:** Are adjacent. Their union would contain intensities from [10, 38]. Max-Min = 28. **Cannot merge.**
*   **Reg3 and Reg4:** Are adjacent. Their union would contain intensities from [20, 120]. Max-Min = 100. **Cannot merge.**
*   **Reg5 and Reg6:** Are adjacent. Their union would contain intensities from [130, 168]. Max-Min = 38. **Cannot merge.**

However, if our predicate was less strict, say Max-Min < 40, then Reg5 and Reg6 *could* be merged.

The merging phase ensures that if, for instance, two 2x2 regions were separated by the splitting but are actually part of the same larger homogeneous area, they will be recombined.

### Advantages of Split and Merge:

*   **Handles complex region shapes:** Unlike methods that rely solely on finding boundaries, split and merge can adapt to irregular region shapes.
*   **Provides a hierarchical representation:** The quadtree structure naturally lends itself to multi-resolution analysis.
*   **Relatively simple to implement:** The core logic is straightforward.

### Disadvantages of Split and Merge:

*   **Sensitive to the choice of predicate function:** The quality of segmentation heavily depends on the homogeneity criteria.
*   **Over-segmentation potential:** The splitting phase can create many small regions, requiring a careful merging phase.
*   **Sensitivity to noise:** Noise can cause a region to be incorrectly classified as inhomogeneous, leading to unnecessary splits.
*   **Computational cost:** Especially in the merging phase, checking all adjacent regions can be computationally expensive.

### Relation to Course Outcomes:

*   **CO1: Understand digital filtering operations for CV applications.**
    *   While not directly a filtering operation, the homogeneity predicate often implicitly involves calculations similar to those used in filters (e.g., calculating mean, variance, or differences across a region). The choice of predicate influences how regions are grouped based on pixel properties.
*   **CO2: Apply basic morphological and boundary operators for Computer vision applications.**
    *   The concept of "adjacency" used in the merging phase is related to connectivity and neighborhood operations, which are fundamental to morphological operations.
*   **CO3: Apply edge, corner detection algorithms to locate objects in an image.**
    *   Split and Merge is a **region-based** segmentation technique, contrasting with edge-based methods. However, understanding where edges *might* exist is crucial for defining inhomogeneity. If a region has strong edges within it, it's likely to be inhomogeneous.
*   **CO4: Apply optical flow algorithms to detect moving objects in a video.**
    *   This topic is primarily focused on static image segmentation. Optical flow deals with motion and is a different area of computer vision.
*   **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.**
    *   Split and Merge is a fundamental technique for scene analysis by segmenting it into meaningful regions. These regions can then be further analyzed for object detection and recognition. For real-time applications, optimization of the predicate function and merging strategy is crucial.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbook and Reference Integration:

*   **Computer and Machine Vision by E. R. Davies (2012):** Davies's book likely covers region-based segmentation techniques, including split and merge, in its chapters on image segmentation. It would provide a solid foundation on the underlying principles of grouping pixels based on properties like intensity, color, and texture.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (2011):** Szeliski's comprehensive text is an excellent resource for segmentation algorithms. It would detail various homogeneity criteria, the quadtree structure's role, and practical considerations for implementing split and merge. Chapter 6, "Segmentation," would be particularly relevant.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (2002):** Forsyth and Ponce would likely discuss segmentation as a core component of visual understanding, detailing how to partition an image into meaningful regions. They might frame split and merge within the broader context of hierarchical image decomposition.
*   **Deep Learning, by Goodfellow, Bengio, and Courville (2006):** While this book focuses on deep learning, it provides a foundational understanding of image representations and how features are learned. For contrast, understanding traditional methods like split and merge helps appreciate the advancements in deep learning-based segmentation.
*   **Digital Image Processing and Computer Vision, by R. J. Schalkoff (2004):** Schalkoff's book would offer detailed explanations of image segmentation techniques, including region-growing and hierarchical methods like split and merge, often with practical algorithmic descriptions.

### Important Points to Remember:

*   **Split and Merge is a hybrid approach:** Combines top-down splitting with bottom-up merging.
*   **Homogeneity Predicate is Key:** The success of the algorithm hinges on a well-defined and appropriate homogeneity criterion.
*   **Quadtree Structure:** Commonly used for partitioning, facilitating recursive splitting.
*   **Over-segmentation is a challenge:** The merging phase is crucial to correct for it.
*   **Parameter Tuning:** The threshold for homogeneity and minimum region size are critical parameters to tune.
*   **Applications:** Scene segmentation, object recognition preprocessing, image compression (hierarchical representation).

### Practice Questions:

**Question 1:**
What is the primary goal of the splitting phase in the Split and Merge algorithm?
a) To combine similar adjacent regions.
b) To recursively divide the image into smaller regions until they are homogeneous.
c) To identify the boundaries between different objects.
d) To reduce the noise in the image.

**Question 2:**
Which of the following is NOT typically used as a homogeneity criterion in the Split and Merge algorithm for grayscale images?
a) The range of intensity values within a region.
b) The average intensity of pixels within a region.
c) The texture characteristics of the region.
d) The presence of sharp edges within a region.

**Question 3:**
Explain why the merging phase is necessary in the Split and Merge algorithm. What problem does it aim to solve?

**Question 4:**
Imagine a 4x4 grayscale image with the following values, and a homogeneity predicate defined as "Max Intensity - Min Intensity <= 10".

```
[ 5  7  15 18 ]
[ 6  8  16 20 ]
[ 25 28 35 40 ]
[ 27 30 38 42 ]
```

Describe the first step of the splitting phase. Will the entire image be split? If so, what are the four sub-regions, and what are their respective Max-Min intensity differences?

---

### Answers to Practice Questions:

**Answer 1:**
b) To recursively divide the image into smaller regions until they are homogeneous.

**Answer 2:**
d) The presence of sharp edges within a region. (While the presence of sharp edges might *indicate* inhomogeneity, the criterion itself typically looks at the *distribution* or *range* of pixel values, not the detection of edges per se. Edge detection is a different category of algorithms.)

**Answer 3:**
The merging phase is necessary to correct for **over-segmentation**. The splitting phase can sometimes divide regions that are actually part of the same larger homogeneous area, especially if the homogeneity predicate is too strict or if there is minor noise. The merging phase examines adjacent regions and combines them if their union still satisfies the homogeneity criteria, thereby producing larger, more meaningful segments and reducing the number of fragmented regions.

**Answer 4:**
Yes, the entire image will be split in the first step because the entire 4x4 image is inhomogeneous.

The four sub-regions are the four 2x2 quadrants:

1.  **Top-Left Quadrant:**
    ```
    [ 5  7 ]
    [ 6  8 ]
    ```
    *   Intensities: {5, 7, 6, 8}
    *   Min Intensity: 5
    *   Max Intensity: 8
    *   **Max-Min Difference: 8 - 5 = 3** (Homogeneous)

2.  **Top-Right Quadrant:**
    ```
    [ 15 18 ]
    [ 16 20 ]
    ```
    *   Intensities: {15, 18, 16, 20}
    *   Min Intensity: 15
    *   Max Intensity: 20
    *   **Max-Min Difference: 20 - 15 = 5** (Homogeneous)

3.  **Bottom-Left Quadrant:**
    ```
    [ 25 28 ]
    [ 27 30 ]
    ```
    *   Intensities: {25, 28, 27, 30}
    *   Min Intensity: 25
    *   Max Intensity: 30
    *   **Max-Min Difference: 30 - 25 = 5** (Homogeneous)

4.  **Bottom-Right Quadrant:**
    ```
    [ 35 40 ]
    [ 38 42 ]
    ```
    *   Intensities: {35, 40, 38, 42}
    *   Min Intensity: 35
    *   Max Intensity: 42
    *   **Max-Min Difference: 42 - 35 = 7** (Homogeneous)

In this specific case, all the first-level quadrants happen to be homogeneous according to the predicate. The algorithm would then stop splitting these regions. If any of these quadrants had a Max-Min difference greater than 10, they would be further split into four 1x1 regions (which are always homogeneous).