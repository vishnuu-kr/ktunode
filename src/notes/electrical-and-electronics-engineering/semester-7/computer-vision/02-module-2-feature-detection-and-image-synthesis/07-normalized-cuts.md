---
title: "Normalized cuts"
subject: "COMPUTER VISION"
module: "Module 2: Feature Detection and Image Synthesis"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a38"
status: "completed"
scrapedAt: "2026-05-23T16:32:46.627Z"
---
# Computer Vision: Module 2 - Feature Detection and Image Synthesis

## Topic: Normalized Cuts

### Learning Outcomes Addressed:

*   **Understanding segmentation as a form of grouping pixels with similar properties.**
*   **Understanding the principles of graph-based segmentation.**
*   **Understanding the concept of spectral clustering and its relation to Normalized Cuts.**
*   **Understanding the formulation of Normalized Cuts as a graph partitioning problem.**
*   **Understanding the practical implementation challenges and approximate solutions for Normalized Cuts.**
*   **Analyzing and evaluating segmentation results based on Normalized Cuts.**

### Course Outcomes Alignment:

*   **CO1: Understand digital filtering operations for CV applications. (K2)** - While not directly about filtering, understanding how image properties (like color, texture) are used to build the affinity graph indirectly relates to feature extraction, which is often enabled by filtering.
*   **CO2: Apply basic morphological and boundary operators for Computer vision applications (K3)** - Segmentation with Normalized Cuts can be seen as a higher-level application that builds upon understanding of pixel properties and spatial relationships, which morphological/boundary operators also deal with.
*   **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications. (K4)** - Normalized Cuts is a powerful segmentation technique that can be a crucial step in analyzing a scene for object detection/recognition.

---

### 1. Introduction to Segmentation

**Definition:** Image segmentation is the process of partitioning an image into multiple segments (sets of pixels, also known as image objects or regions). The goal is to simplify or change the representation of an image into something more meaningful and easier to analyze. Ideally, each segment corresponds to a distinct object or part of an object.

**Why is Segmentation Important in Computer Vision?**

*   **Object Recognition:** Before recognizing an object, it needs to be isolated from the background.
*   **Image Analysis:** Understanding the composition of an image (e.g., identifying different regions in a medical scan).
*   **Scene Understanding:** Breaking down a scene into constituent parts to understand relationships between objects.
*   **Image Editing:** Manipulating specific parts of an image (e.g., background removal).

---

### 2. Traditional Segmentation Approaches and Their Limitations

Before diving into Normalized Cuts, it's helpful to understand why more sophisticated methods are needed.

*   **Thresholding:** Simple, but sensitive to illumination changes and noise.
*   **Region Growing:** Requires a seed point and a similarity criterion; can lead to oversegmentation or undersegmentation.
*   **Edge Detection:** Detects boundaries, but edges don't always form closed contours, and linking edges can be difficult.
*   **Clustering (e.g., K-Means on pixel values):** Treats pixels independently, ignoring spatial context.

These methods often struggle with:
*   **Coherent Regions:** Grouping pixels that belong to the same object but have variations in color/intensity due to lighting or texture.
*   **Contextual Information:** Leveraging relationships between neighboring pixels.
*   **Ambiguity:** Dealing with complex scenes where boundaries are not always sharp.

---

### 3. Graph-Based Segmentation

Normalized Cuts is a prominent example of graph-based image segmentation.

**Core Idea:** Represent the image as a graph where:
*   **Nodes (Vertices):** Correspond to pixels or regions of pixels.
*   **Edges:** Connect nodes, representing relationships or similarity between them.
*   **Edge Weights:** Quantify the similarity or affinity between connected nodes. Higher weights indicate stronger similarity.

**Segmentation as Graph Partitioning:** The problem of image segmentation is then framed as partitioning this graph into subgraphs (segments). The objective is to find partitions that are "good" according to some criteria.

---

### 4. Normalized Cuts: The Concept

Normalized Cuts, introduced by Shi and Malik (2000), is a graph partitioning algorithm designed to address the limitations of traditional methods by optimizing a global objective function that balances two criteria:

1.  **Goodness of the Cut (Minimizing Disassociation):** The sum of edge weights *across* the cut should be minimized. This means we want to cut edges that connect dissimilar regions.
2.  **Cuteness (Maximizing Association within Segments):** The sum of edge weights *within* each segment should be maximized. This ensures that the segments themselves are internally coherent and strongly connected.

**The Problem with Simple Minimum Cut:**
A simple minimum cut (like Karger's algorithm for graph cuts) might result in cutting off a single pixel or a small group of pixels from the rest of the image, as this minimizes the cut while maximizing the internal association of the large remaining segment. This leads to trivial and uninformative partitions.

**Normalized Cuts Solution:**
Normalized Cuts addresses this by normalizing the cut value by the total "association" of the segments being cut off. This discourages cutting off small, isolated nodes.

---

### 5. Mathematical Formulation of Normalized Cuts

Let the image be represented by a graph $G = (V, E)$, where $V$ is the set of pixels and $E$ is the set of edges. Each edge $(u, v)$ has a weight $w(u, v)$ representing the similarity between pixels $u$ and $v$.

*   **Partitioning:** We want to partition the graph into two disjoint sets, $A$ and $B$, such that $A \cup B = V$ and $A \cap B = \emptyset$.

*   **Cut of a Partition:** The "cut" of a partition $(A, B)$ is the sum of weights of edges connecting nodes in $A$ to nodes in $B$.
    $Cut(A, B) = \sum_{u \in A, v \in B} w(u, v)$

*   **Association of a Segment:** The "association" of a set of nodes $S$ is the sum of weights of edges connecting nodes within $S$.
    $assoc(S) = \sum_{u, v \in S} w(u, v)$

*   **Normalized Cut (Ncut):**
    $Ncut(A, B) = \frac{Cut(A, B)}{assoc(A)} + \frac{Cut(A, B)}{assoc(B)}$

**The Objective:** Find the partition $(A, B)$ that minimizes $Ncut(A, B)$.

This objective function encourages cutting edges that lead to a small proportion of the total association of the original graph in each of the resulting segments.

---

### 6. From Normalized Cuts to Spectral Clustering

The problem of minimizing $Ncut(A, B)$ is NP-hard. However, it can be approximated by solving a generalized eigenvalue problem. This connects Normalized Cuts to **spectral clustering**.

**The Connection:**
Minimizing $Ncut(A, B)$ is equivalent to solving the following problem:

$\min \frac{x^T (D - W) x}{x^T D x}$ subject to $x^T D \mathbf{1} = 0$, where $\mathbf{1}$ is a vector of all ones.

Here:
*   $W$ is the weighted adjacency matrix of the graph.
*   $D$ is the diagonal matrix where $D_{ii} = \sum_{j} w(i, j)$ (the sum of weights of all edges connected to node $i$).
*   $x$ is a vector representing the partition (typically $\{-1, 1\}$ for a binary partition). For relaxation, $x$ can take real values.

This is the **Generalized Eigenvalue Problem:**
$(D - W)x = \lambda D x$

The solution to this involves finding the eigenvector corresponding to the **second smallest eigenvalue** of the **Laplacian matrix** $L = D - W$.

*   **The Laplacian Matrix ($L$):** $L = D - W$.
*   **The Normalized Laplacian Matrix ($L_{sym}$ or $L_{norm}$):** Various forms exist, but a common one for this problem is $L_{sym} = I - D^{-1/2} W D^{-1/2}$, or equivalently, solving $(D-W)x = \lambda D x$ is related to finding eigenvectors of $D^{-1}L = I - D^{-1}W$.

**Key Insight:** The eigenvector corresponding to the second smallest eigenvalue of the graph Laplacian (or related matrices) provides a continuous "soft" assignment of pixels to segments. Thresholding this eigenvector allows us to obtain a binary segmentation.

---

### 7. Building the Affinity Graph for Images

The quality of the segmentation heavily depends on how the affinity graph is constructed.

**Common Approaches for Edge Weights $w(u, v)$:**

*   **Similarity based on Pixel Intensity/Color:**
    $w(u, v) = e^{-\frac{||I(u) - I(v)||^2}{2\sigma^2}}$
    where $I(u)$ and $I(v)$ are the intensity or color vectors of pixels $u$ and $v$, and $\sigma$ is a parameter controlling sensitivity to color/intensity differences.

*   **Similarity based on Spatial Proximity:** Pixels that are closer in space should have higher affinity (unless they are very dissimilar in appearance). This is often implicitly handled by only connecting neighboring pixels (e.g., 4-connectivity or 8-connectivity).

*   **Combining Factors:** Weights can be a combination of color/intensity similarity and spatial proximity.

**Important Considerations for Graph Construction:**

*   **Sparsity:** For efficiency, only connect neighboring pixels or pixels within a certain distance.
*   **$\sigma$ Parameter:** Crucial for determining the scale of features to be segmented. A small $\sigma$ will segment based on fine details, while a large $\sigma$ will segment based on broader regions.
*   **Color Spaces:** Using color spaces like Lab might provide more perceptually uniform differences than RGB.

---

### 8. Hierarchical Segmentation using Normalized Cuts

Normalized Cuts naturally provides a way to recursively partition the image.

**The Process:**

1.  **Initial Partition:** Solve the generalized eigenvalue problem for the entire image graph. Obtain the eigenvector corresponding to the second smallest eigenvalue. Threshold this eigenvector to get an initial binary partition (segment $A$ and segment $B$).
2.  **Recursive Partitioning:**
    *   If a segment (or its corresponding graph) meets certain criteria (e.g., size, internal coherence), stop.
    *   Otherwise, treat the pixels within that segment as a new image and construct a new affinity graph for these pixels.
    *   Repeat step 1 on this new graph to further subdivide the segment.

This recursive process allows for a **hierarchical segmentation** of the image, where segments are progressively broken down into smaller, more homogeneous regions.

---

### 9. Practical Implementation and Challenges

*   **Graph Size:** For an image of size $N \times M$, the graph can have $NM$ nodes. This can become computationally prohibitive for large images, especially when calculating eigenvectors.
*   **Eigenvector Computation:** Finding eigenvectors for large matrices is computationally expensive. Approximate methods or techniques like Nyström approximation might be necessary.
*   **Parameter Tuning:** The choice of $\sigma$ (for similarity) and the method of thresholding the eigenvector are critical and often require tuning.
*   **Number of Segments:** Normalized Cuts itself doesn't directly specify the number of segments. The recursive partitioning process determines this, or post-processing steps are needed.
*   **Defining Similarity:** The choice of similarity metric significantly impacts the segmentation outcome.

---

### 10. Examples and Applications

*   **Object Segmentation:** Isolating objects of interest from the background (e.g., segmenting a person from a photograph).
*   **Image Understanding:** Identifying distinct regions in medical images (e.g., tumors in MRI scans) or satellite imagery.
*   **Video Segmentation:** Tracking and segmenting moving objects in a video sequence.
*   **Content-Based Image Retrieval:** Segmenting images into meaningful parts for searching similar images.

**Example Scenario:**
Consider an image of a green tree against a blue sky.
*   **Graph Construction:** Pixels representing the tree would have high affinity among themselves (similar green colors), and pixels representing the sky would have high affinity among themselves (similar blue colors). Edges between a tree pixel and a sky pixel would have low weights.
*   **Normalized Cut:** The algorithm would find a cut that separates the tree pixels from the sky pixels, as this cut minimizes the Normalized Cut objective. The edges between tree and sky are few and between dissimilar regions.

---

### 11. Relating to Textbook Concepts

*   **Computer and Machine Vision by E. R. Davies:**
    *   Chapter 7 (Segmentation): Davies discusses various segmentation techniques. Normalized Cuts can be seen as a sophisticated graph-based method that optimizes a global criterion, offering a more robust approach than simple region-based or edge-based methods. The book's emphasis on image properties (color, texture) is foundational to defining the graph weights.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski:**
    *   Chapter 4 (Image Segmentation): Szeliski provides a comprehensive overview of segmentation. Normalized Cuts is a key algorithm presented in the context of graph-based and spectral methods. The book likely details the eigenvalue decomposition aspect and practical considerations.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce:**
    *   While possibly less focused on spectral methods explicitly in older editions, the underlying principles of grouping pixels based on similarity are a core theme. The book's treatment of image primitives and feature grouping would provide context for why sophisticated grouping methods like Normalized Cuts are developed.

---

### 12. Important Points to Remember

*   **Global Optimization:** Normalized Cuts optimizes a global objective function, leading to more coherent and meaningful segments compared to local methods.
*   **Graph Representation:** Images are modeled as graphs where nodes are pixels and edge weights represent similarity.
*   **Spectral Clustering:** The problem is approximated by solving a generalized eigenvalue problem, linking it to spectral clustering.
*   **Second Smallest Eigenvalue:** The eigenvector corresponding to the second smallest eigenvalue of the Laplacian matrix is crucial.
*   **Normalization:** Normalization prevents trivial cuts and favors balanced partitions.
*   **Recursive Application:** Can be applied recursively for hierarchical segmentation.
*   **Parameter Sensitivity:** Choice of similarity metric and parameters significantly impacts results.
*   **Computational Cost:** Can be computationally intensive for large images.

---

### Practice Questions and Exercises

**Question 1:** What is the fundamental problem with simple minimum cut algorithms in image segmentation, and how does Normalized Cuts address it?

**Answer:** Simple minimum cut algorithms can lead to trivial segmentations by isolating small groups of pixels. Normalized Cuts addresses this by normalizing the cut cost by the total association of the segments, penalizing cuts that isolate small portions of the graph. This encourages partitions that are globally balanced in terms of association.

**Question 2:** Explain the role of the graph Laplacian and its eigenvectors in the Normalized Cuts algorithm.

**Answer:** The Normalized Cuts problem can be relaxed and approximated by solving a generalized eigenvalue problem related to the graph Laplacian. The eigenvector corresponding to the second smallest eigenvalue of the Laplacian matrix provides a continuous representation of the optimal bipartition. Thresholding this eigenvector allows for the extraction of segment boundaries.

**Question 3:** Describe two common ways to define edge weights in an affinity graph for image segmentation using Normalized Cuts.

**Answer:**
1.  **Intensity/Color Similarity:** Using a Gaussian function based on the difference in pixel intensity or color values: $w(u, v) = e^{-\frac{||I(u) - I(v)||^2}{2\sigma^2}}$.
2.  **Spatial Proximity:** While often implicitly handled by connecting neighbors, explicit weights could also favor closer pixels, potentially combined with appearance similarity.

**Question 4 (Conceptual):** Imagine an image with two distinct blobs of color, one red and one blue, with a clear boundary between them. How would Normalized Cuts likely segment this image?

**Answer:** The affinity graph would have high edge weights between pixels within the red blob and between pixels within the blue blob. Edges between red and blue pixels would have low weights. Normalized Cuts would find a cut that separates the red pixels from the blue pixels, as this cut minimizes the total weight of edges between the two regions and the normalized cost would be low due to the large internal associations of each blob.

---

This concludes the study notes on Normalized Cuts for Module 2. Remember to consult the provided textbooks for deeper theoretical insights and detailed mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
