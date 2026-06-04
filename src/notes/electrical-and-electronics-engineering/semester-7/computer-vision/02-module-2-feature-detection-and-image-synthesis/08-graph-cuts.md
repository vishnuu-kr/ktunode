---
title: "Graph cuts"
subject: "COMPUTER VISION"
module: "Module 2: Feature Detection and Image Synthesis"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a39"
status: "completed"
scrapedAt: "2026-05-23T16:32:47.919Z"
---
# Computer Vision: Module 2 - Feature Detection and Image Synthesis

## Topic: Graph Cuts

### 1. Introduction to Graph Cuts

**What are Graph Cuts?**

Graph cuts are a powerful and versatile tool in computer vision for solving optimization problems that can be framed as finding a minimum cut in a graph. A minimum cut is a partition of the graph's vertices into two sets such that the sum of the weights of edges connecting vertices in different sets is minimized. This concept is fundamental to solving a wide range of problems, from image segmentation to object recognition and stereo matching.

**Key Concepts:**

*   **Graph:** A data structure consisting of a set of **vertices (nodes)** and a set of **edges** that connect pairs of vertices.
*   **Weighted Graph:** A graph where each edge has an associated numerical weight.
*   **Cut:** A partition of the vertices of a graph into two disjoint sets, typically denoted as $S$ and $T$, such that the **source** vertex is in $S$ and the **sink** vertex is in $T$.
*   **Capacity of an Edge:** The weight assigned to an edge, representing the "cost" of cutting that edge.
*   **Capacity of a Cut:** The sum of the capacities of all edges that connect a vertex in $S$ to a vertex in $T$.
*   **Minimum Cut:** The cut with the smallest capacity.

**The Max-Flow Min-Cut Theorem:**

This theorem is central to understanding graph cuts. It states that in any network (a directed graph with capacities), the maximum flow that can pass from a source to a sink is equal to the minimum capacity of a cut separating the source from the sink. This theorem allows us to solve minimization problems by transforming them into maximum flow problems.

*   **Max-Flow Problem:** Finding the maximum amount of "flow" (e.g., data, probability) that can be sent from a source vertex to a sink vertex in a network, subject to edge capacity constraints.
*   **Min-Cut Problem:** Finding a partition of vertices that minimizes the sum of capacities of edges crossing the partition.

**Intuition:** Imagine "cutting" the graph into two pieces. The capacity of the cut is the sum of the "costs" of the edges you had to break to separate the two pieces. The minimum cut finds the cheapest way to separate the graph.

**Textbook References:**

*   **Davies (2012), Chapter 11 (Graph Theory and Applications):** Likely discusses the fundamental principles of graph theory and may introduce basic graph algorithms.
*   **Szeliski (2011), Chapter 14 (Probabilistic Graphical Models) / Chapter 15 (Image Segmentation):** Szeliski often uses graph-based methods for segmentation and may cover min-cut algorithms in that context.
*   **Forsyth & Ponce (2002), Chapter 12 (Segmentation):** Might discuss graph-based segmentation methods, including those solvable by graph cuts.

### 2. Graph Cuts for Image Segmentation

Image segmentation is a primary application of graph cuts in computer vision. The goal is to partition an image into meaningful regions, often foreground and background.

**Formulating Segmentation as a Min-Cut Problem:**

1.  **Graph Construction:**
    *   **Nodes:**
        *   **Pixel Nodes:** Each pixel in the image is represented by a node in the graph.
        *   **Source Node (S):** Represents the "foreground" or "object" class.
        *   **Sink Node (T):** Represents the "background" or "non-object" class.
    *   **Edges:**
        *   **Terminal Edges (t-links):** Edges connecting the source node ($S$) to pixel nodes, and pixel nodes to the sink node ($T$). These edges encode the *unary potentials* or the likelihood of a pixel belonging to the foreground or background.
            *   **S-to-pixel edge capacity:** High capacity if the pixel is likely foreground, low if likely background.
            *   **Pixel-to-T edge capacity:** High capacity if the pixel is likely background, low if likely foreground.
        *   **Neighborhood Edges (n-links):** Edges connecting adjacent pixel nodes. These edges encode the *pairwise potentials* or the cost of assigning different labels (foreground/background) to neighboring pixels. The capacity of these edges is higher if the neighboring pixels are similar (e.g., same color), encouraging them to be in the same segment, and lower if they are dissimilar, allowing for segmentation boundaries.

2.  **Cost Function (Energy Function):**
    The objective is to minimize an energy function that typically has two components:

    $E(\mathbf{l}) = \sum_{p \in \text{Pixels}} D_p(l_p) + \sum_{(p,q) \in \text{Neighbors}} V_{p,q}(l_p, l_q)$

    Where:
    *   $l_p$ is the label assigned to pixel $p$ (e.g., 0 for background, 1 for foreground).
    *   $D_p(l_p)$ is the *data term* or *unary cost*: The cost of assigning label $l_p$ to pixel $p$. This is related to the terminal edge capacities.
        *   $D_p(\text{foreground})$ corresponds to the capacity of the edge from pixel $p$ to $T$.
        *   $D_p(\text{background})$ corresponds to the capacity of the edge from $S$ to pixel $p$.
    *   $V_{p,q}(l_p, l_q)$ is the *smoothness term* or *pairwise cost*: The cost of assigning different labels to neighboring pixels $p$ and $q$. This is related to the neighborhood edge capacities.
        *   $V_{p,q}(\text{foreground}, \text{background})$ or $V_{p,q}(\text{background}, \text{foreground})$ corresponds to the capacity of the edge between pixel $p$ and pixel $q$.

3.  **Mapping to Min-Cut:**
    A specific formulation of the energy function allows it to be directly mapped to a min-cut problem on the constructed graph. The min-cut will partition the pixel nodes into two sets: those connected to $S$ (assigned foreground label) and those connected to $T$ (assigned background label).

    *   Cutting an S-to-pixel edge means assigning that pixel to the background. The cost is $D_p(\text{background})$.
    *   Cutting a pixel-to-T edge means assigning that pixel to the foreground. The cost is $D_p(\text{foreground})$.
    *   Cutting an edge between two pixels means they are in different segments. The cost is $V_{p,q}$.

    The minimum cut will thus minimize the total energy function.

**Example: Interactive Segmentation (GrabCut-like)**

Imagine an image where you roughly mark a region as "object" and another as "background."

*   **S-links:** Pixels marked as object get a very high capacity S-to-pixel link. Pixels marked as background get a very low capacity S-to-pixel link.
*   **T-links:** Pixels marked as object get a very low capacity pixel-to-T link. Pixels marked as background get a very high capacity pixel-to-T link.
*   **N-links:** For un-marked pixels, capacities are based on color similarity. If adjacent pixels have similar colors, the n-link capacity is high, making it costly to separate them. If colors are dissimilar, the n-link capacity is low, making it easy to put them in different segments.

The min-cut then finds the optimal segmentation that respects these user constraints and the image's local texture.

**Textbook References:**

*   **Szeliski (2011), Chapter 15 (Image Segmentation):** This is a prime reference. Szeliski likely details the graph construction and energy minimization for segmentation.
*   **Prince (2012), Chapter 13 (Image Segmentation):** Prince might provide a probabilistic perspective on segmentation, linking it to graphical models and min-cut.

### 3. Max-Flow Algorithms

To find the minimum cut, we use a maximum flow algorithm. Common algorithms include:

*   **Edmonds-Karp Algorithm:** A simple but potentially slow algorithm that repeatedly finds augmenting paths in the residual graph using Breadth-First Search (BFS).
*   **Dinic's Algorithm:** More efficient than Edmonds-Karp, it uses BFS to find blocking flows.
*   **Push-Relabel Algorithms:** A class of algorithms that are generally the most efficient for dense graphs.

**Key Concepts for Max-Flow:**

*   **Flow Network:** A directed graph where each edge has a capacity.
*   **Flow:** An assignment of flow values to edges such that:
    *   **Capacity Constraint:** Flow on an edge does not exceed its capacity.
    *   **Flow Conservation:** For any vertex other than the source and sink, the total incoming flow equals the total outgoing flow.
*   **Residual Graph:** A graph that represents the remaining capacity on edges and the possibility of "undoing" flow.
*   **Augmenting Path:** A path from the source to the sink in the residual graph with positive residual capacity.

**Textbook References:**

*   **Davies (2012), Chapter 11 (Graph Theory and Applications):** May introduce basic flow algorithms.
*   **Szeliski (2011), Appendix A (Graph Cuts):** Szeliski often includes appendices for advanced topics, and max-flow algorithms might be covered there.

### 4. Applications Beyond Segmentation

Graph cuts are not limited to segmentation and can be applied to various computer vision tasks:

*   **Object Recognition/Detection:** Formulating likelihoods and spatial constraints.
*   **Stereo Vision:** Finding corresponding pixels in stereo images by minimizing disparity errors and enforcing smoothness. Each pixel pair can be an edge, and the source/sink represent disparities.
*   **Image Denoising:** Treating pixels as nodes and minimizing an energy function that penalizes noise and enforces spatial consistency.
*   **Image Inpainting/Completion:** Filling in missing parts of an image by propagating information from existing regions.
*   **Multiple View Geometry:** Reconstructing 3D scenes or estimating camera poses.

**Example: Stereo Vision**

*   **Graph Construction:**
    *   Nodes: Source, Sink, nodes for each pixel in the left image, and nodes for each pixel in the right image.
    *   Edges:
        *   **Terminal Edges:** Connect pixels to disparities. A pixel in the left image is connected to potential disparities (e.g., by assigning a cost based on pixel intensity difference to the corresponding pixel in the right image at that disparity).
        *   **Neighbor Edges:** Connect adjacent pixels to penalize large changes in disparity for neighboring pixels.
*   **Min-Cut:** The min-cut finds the optimal disparity assignment for each pixel, minimizing a global energy function that includes data fidelity and smoothness.

**Textbook References:**

*   **Szeliski (2011), Chapter 11 (Stereo Vision):** Likely discusses graph-based approaches for stereo.
*   **Szeliski (2011), Chapter 14 (Probabilistic Graphical Models):** Can provide a broader context for using graphical models, including those solved by graph cuts.
*   **Baggio et al. (2012), Mastering OpenCV:** May have practical examples of using graph-cut-based techniques in OpenCV for tasks like segmentation or stereo.

### 5. Advanced Graph Cut Techniques and Considerations

*   **Alpha-Expansion/Alpha-Beta Swap:** For problems with more than two labels (e.g., multi-class segmentation), these are approximation algorithms that use pairwise min-cut computations to optimize the labeling.
*   **Boykov-Kolmogorov Algorithm:** A more recent and efficient max-flow algorithm specifically designed for computer vision problems with grid-like graph structures.
*   **Real-time Performance:** For real-time applications, efficient max-flow implementations and careful graph construction are crucial.
*   **Graph Cut vs. Other Methods:** Graph cuts offer a principled way to enforce global consistency and smoothness, which can be advantageous over local methods. However, they can be computationally intensive.

**Textbook References:**

*   **Szeliski (2011), Chapter 15 (Image Segmentation):** May discuss advanced techniques for multi-label problems.
*   **Prince (2012), Chapter 13 (Image Segmentation):** Could delve into more advanced probabilistic formulations.

---

### Learning Outcomes Coverage:

*   **CO1: Understand digital filtering operations for CV applications.**
    *   *Relevance:* While not directly filtering, graph cuts utilize edge weights that can be derived from filtering operations (e.g., Gaussian smoothing for n-link capacities). The similarity measures are often based on filtered image properties.
*   **CO2: Apply basic morphological and boundary operators for Computer vision applications.**
    *   *Relevance:* Graph cuts provide a mechanism to define and enforce smooth boundaries. The smoothness terms in the energy function relate to how likely a boundary is to occur between pixels, similar to how boundary operators identify edges.
*   **CO3: Apply edge, corner detection algorithms to locate objects in an image.**
    *   *Relevance:* Graph cuts, particularly in segmentation, aim to find object boundaries. While edge/corner detectors are often local, graph cuts can use these local cues (e.g., high gradient strength could influence n-link capacities) to inform global segmentation.
*   **CO4: Apply optical flow algorithms to detect moving objects in a video.**
    *   *Relevance:* Graph cuts can be used in optical flow estimation to enforce smoothness and consistency of motion across pixels.
*   **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.**
    *   *Relevance:* Graph cuts are a powerful tool for scene analysis, enabling robust object detection and segmentation by optimizing a global objective function. Implementing them efficiently is key for practical applications.

---

### Important Points to Remember:

*   **Graph cuts are primarily used for optimization problems in computer vision.**
*   **The Max-Flow Min-Cut theorem is the theoretical foundation.**
*   **Image segmentation is a classic application, formulated by creating a graph where pixel labels are determined by a min-cut.**
*   **Terminal edges (t-links) represent unary potentials (pixel-wise likelihoods).**
*   **Neighborhood edges (n-links) represent pairwise potentials (smoothness costs).**
*   **The capacity of edges is crucial and often derived from image properties (color, texture, gradients).**
*   **Various max-flow algorithms exist, with efficiency being a key concern for practical use.**
*   **Graph cuts can be extended to multi-label problems (e.g., using alpha-expansion).**

---

### Practice Questions:

**Question 1:** Explain how the Max-Flow Min-Cut theorem is applied to solve the image segmentation problem using graph cuts. What do the source and sink nodes represent, and how are the edge capacities typically defined for terminal and neighborhood links?

**Answer:**
The Max-Flow Min-Cut theorem states that the maximum flow from a source to a sink in a graph is equal to the capacity of a minimum cut separating the source from the sink. In image segmentation, we construct a graph where:
*   **Source (S):** Represents the "foreground" class.
*   **Sink (T):** Represents the "background" class.
*   **Pixel Nodes:** Each pixel in the image is a node.
*   **Terminal Links (t-links):**
    *   An edge from $S$ to a pixel node has a capacity representing the *penalty* for assigning that pixel to the *background*. High capacity means it's unlikely to be background.
    *   An edge from a pixel node to $T$ has a capacity representing the *penalty* for assigning that pixel to the *foreground*. High capacity means it's unlikely to be foreground.
*   **Neighborhood Links (n-links):** Edges between adjacent pixel nodes have capacities representing the *penalty* for assigning different labels to those pixels. High capacity for similar pixels encourages them to be in the same segment.

The min-cut partitions the pixel nodes into two sets: those connected to $S$ (foreground) and those connected to $T$ (background). The capacity of the cut corresponds to the total penalty (energy) of the segmentation. By minimizing the cut capacity, we minimize the energy function, thus finding the optimal segmentation.

**Question 2:** Consider a binary image segmentation task where you want to segment a bright object on a dark background.
*   How would you define the capacities of the terminal edges (S-to-pixel and pixel-to-T) for a pixel with a very bright intensity?
*   How would you define the capacities for a pixel with a very dark intensity?
*   What kind of values would you assign to the neighborhood edges to encourage smooth object boundaries?

**Answer:**
*   **Very Bright Pixel:**
    *   **S-to-pixel capacity:** High. This means it's costly to assign this pixel to the background.
    *   **Pixel-to-T capacity:** Low. This means it's cheap to assign this pixel to the foreground.
*   **Very Dark Pixel:**
    *   **S-to-pixel capacity:** Low. This means it's cheap to assign this pixel to the background.
    *   **Pixel-to-T capacity:** High. This means it's costly to assign this pixel to the foreground.
*   **Neighborhood Edges:** To encourage smooth boundaries, the capacity of edges between adjacent pixels should be:
    *   **High:** If the two pixels have similar intensities (e.g., both bright or both dark). This penalizes cutting the edge between them, keeping them in the same segment.
    *   **Low:** If the two pixels have significantly different intensities (e.g., one bright, one dark). This makes it less costly to place a boundary between them. This cost can be inversely proportional to the intensity difference or directly proportional to a similarity measure.

**Question 3:** True or False: The Max-Flow Min-Cut theorem is only applicable to directed graphs.

**Answer:**
**True.** The Max-Flow Min-Cut theorem is stated for flow networks, which are directed graphs. While undirected graphs can be converted into directed graphs for max-flow computations (by replacing each undirected edge with two directed edges in opposite directions), the theorem itself applies to directed graphs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
