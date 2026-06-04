---
title: "Graph Partitioning."
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 1: Spectral Graph Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3fc"
status: "completed"
scrapedAt: "2026-05-20T17:11:50.545Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE: Module 1: Spectral Graph Theory - Graph Partitioning

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental problem of graph partitioning and its motivations.
*   Relate graph partitioning to spectral methods, particularly the use of eigenvectors of the Laplacian matrix.
*   Define and understand the concept of graph cuts (e.g., min-cut, normalized cut).
*   Explain how spectral methods can be used to approximate solutions to graph partitioning problems.
*   Understand the relationship between spectral graph partitioning and graph decomposition.
*   Discuss practical applications of graph partitioning.

---

## 1. Introduction to Graph Partitioning

### 1.1 What is Graph Partitioning?

**Definition:** Graph partitioning is the problem of dividing the vertices of a graph into a specified number of disjoint subsets (partitions) such that certain objective functions are optimized. The most common objective is to minimize the number of edges connecting vertices in different partitions.

### 1.2 Motivations and Applications

Graph partitioning is a fundamental problem with wide-ranging applications in:

*   **Parallel and Distributed Computing:**
    *   **Load Balancing:** Distributing computational tasks (vertices) and communication (edges) across processors to minimize communication overhead and balance workload.
    *   **Data Distribution:** Storing data across distributed memory systems to optimize access patterns and minimize data movement.
*   **Network Design and Analysis:**
    *   **Community Detection:** Identifying densely connected groups of nodes in social networks or biological networks.
    *   **Network Reliability:** Identifying critical components or bottlenecks in a network.
    *   **Router Placement:** Optimizing the placement of routers in telecommunication networks.
*   **Computer Graphics and Image Processing:**
    *   **Mesh Partitioning:** Dividing large 3D models or images for efficient processing or rendering.
    *   **Image Segmentation:** Grouping pixels into meaningful regions.
*   **Scientific Computing:**
    *   **Finite Element Methods:** Partitioning computational domains for solving partial differential equations.

---

## 2. Graph Cuts: Quantifying Partition Quality

To partition a graph, we need a way to measure the "quality" of a partition. This is typically done using **graph cuts**.

### 2.1 The Cut Function

Given a graph $G=(V, E)$ and a partition of its vertex set $V$ into $k$ disjoint sets $V_1, V_2, \dots, V_k$ such that $V = \cup_{i=1}^k V_i$ and $V_i \cap V_j = \emptyset$ for $i \neq j$.

**Definition: Cut ($Cut(V_1, \dots, V_k)$):** The cut is the set of edges $(u, v) \in E$ such that $u \in V_i$ and $v \in V_j$ for some $i \neq j$.

**Definition: Size of the Cut ($|Cut(V_1, \dots, V_k)|$):** The number of edges in the cut.

### 2.2 The Min-Cut Problem

**Problem:** Find a partition of $V$ into two sets $V_1$ and $V_2$ ($k=2$) that minimizes $|Cut(V_1, V_2)|$.

**Challenge:** The basic min-cut problem aims to find the cut with the fewest edges, but it can lead to partitions with very small, trivial sets. For instance, isolating a single vertex with many connections would result in a small cut but wouldn't be a useful partition for load balancing.

### 2.3 Normalized Cut (Ncut)

To address the shortcomings of the basic min-cut, we introduce normalized cuts that consider the size of the partitions.

**Definition: Total Weight of a Partition ($W(V_i)$):** The sum of degrees of vertices in partition $V_i$. For an unweighted graph, this is simply the sum of the number of neighbors for each vertex in $V_i$. For a weighted graph, it's the sum of edge weights incident to vertices in $V_i$.

**Definition: Normalized Cut (Ncut):** For a partition into two sets $V_1$ and $V_2$:
$$Ncut(V_1, V_2) = \frac{|Cut(V_1, V_2)|}{W(V_1)} + \frac{|Cut(V_1, V_2)|}{W(V_2)}$$
Or, more generally for $k$ partitions:
$$Ncut(V_1, \dots, V_k) = \sum_{i=1}^k \frac{|Cut(V_i, V \setminus V_i)|}{W(V_i)}$$
where $V \setminus V_i = \cup_{j \neq i} V_j$.

**Motivation for Ncut:** By dividing the cut size by the total weight of the partition, Ncut encourages partitions where the cut edges are small relative to the total connectivity within each partition. This tends to create balanced partitions.

### 2.4 Other Normalized Cut Variants

*   **RatioCut:**
    $$RatioCut(V_1, V_2) = |Cut(V_1, V_2)| \left(\frac{1}{|V_1|} + \frac{1}{|V_2|}\right)$$
    This penalizes small partitions more heavily.

---

## 3. Spectral Graph Theory and Partitioning

Spectral graph theory leverages the eigenvalues and eigenvectors of graph matrices to understand graph properties. The **Laplacian matrix** is particularly useful for partitioning.

### 3.1 The Graph Laplacian Matrix

For a graph $G=(V, E)$ with $n$ vertices:

*   **Adjacency Matrix ($A$):** $A_{ij} = 1$ if $(i, j) \in E$, and $0$ otherwise. For weighted graphs, $A_{ij}$ is the weight of the edge.
*   **Degree Matrix ($D$):** A diagonal matrix where $D_{ii} = deg(i)$ (the degree of vertex $i$). For weighted graphs, $D_{ii}$ is the sum of weights of edges incident to vertex $i$.

**Definition: Laplacian Matrix ($L$):**
$$L = D - A$$

**Properties of the Laplacian:**

*   $L$ is symmetric.
*   $L$ is positive semi-definite (all eigenvalues are non-negative).
*   The smallest eigenvalue of $L$ is always $0$, corresponding to the eigenvector $\mathbf{1}$ (a vector of all ones).
*   The multiplicity of the eigenvalue $0$ (its nullity) is equal to the number of connected components in the graph. This is a crucial property for partitioning.

### 3.2 The Fiedler Vector and Graph Partitioning

The **Fiedler vector** is the eigenvector corresponding to the second smallest eigenvalue (often denoted $\lambda_2$ or $\mu_1$) of the Laplacian matrix.

**Key Insight:** The Fiedler vector provides an embedding of the graph's vertices into a 1-dimensional space. Vertices that are "close" in the graph tend to have similar values in the Fiedler vector. This property can be exploited for partitioning.

**The Spectral Bisection Algorithm (for $k=2$):**

1.  **Compute the Laplacian Matrix $L$** of the graph.
2.  **Compute the eigenvalues and eigenvectors of $L$**.
3.  **Identify the Fiedler vector $\mathbf{v}_2$** (the eigenvector corresponding to $\lambda_2$).
4.  **Sort the vertices** based on their corresponding values in $\mathbf{v}_2$. Let the sorted values be $v_2(1) \le v_2(2) \le \dots \le v_2(n)$.
5.  **Find the optimal split point:** Search for an index $s$ that minimizes the cut size $|Cut(V_1, V_2)|$, where $V_1 = \{1, \dots, s\}$ and $V_2 = \{s+1, \dots, n\}$ in the sorted order.
6.  **Partition the graph:** Create the two partitions $V_1$ and $V_2$ based on the optimal split point $s$.

**Example: Spectral Bisection**

Consider a simple graph with 4 vertices and edges (1,2), (1,3), (2,3), (3,4).

*   **Adjacency Matrix (A):**
    ```
    [[0, 1, 1, 0],
     [1, 0, 1, 0],
     [1, 1, 0, 1],
     [0, 0, 1, 0]]
    ```
*   **Degree Matrix (D):**
    ```
    [[2, 0, 0, 0],
     [0, 2, 0, 0],
     [0, 0, 3, 0],
     [0, 0, 0, 1]]
    ```
*   **Laplacian Matrix (L = D - A):**
    ```
    [[ 2, -1, -1,  0],
     [-1,  2, -1,  0],
     [-1, -1,  3, -1],
     [ 0,  0, -1,  1]]
    ```

Let's assume we compute the Fiedler vector and get something like (values are illustrative):
$\mathbf{v}_2 \approx [-0.5, -0.5, 0.5, 1.0]$

Sorting vertices by Fiedler vector values: Vertex 1 and 2 are similar, then Vertex 3, then Vertex 4.
Let's say the sorted order is (1, 2, 3, 4) based on their Fiedler values.

Now, we try different splits:
*   Split 1: $V_1=\{1\}$, $V_2=\{2,3,4\}$. Cut edges: (1,2), (1,3). Cut size = 2.
*   Split 2: $V_1=\{1,2\}$, $V_2=\{3,4\}$. Cut edges: (1,3), (2,3). Cut size = 2.
*   Split 3: $V_1=\{1,2,3\}$, $V_2=\{4\}$. Cut edges: (3,4). Cut size = 1.

In this simplified example, the best split would be $V_1=\{1,2,3\}$ and $V_2=\{4\}$, minimizing the cut to 1. The Fiedler vector guides us to group vertices 1 and 2 together, and separate vertex 4.

**Important Note:** The spectral bisection algorithm directly finds a partition that minimizes the cut size, which is essentially solving the **min-cut problem**. However, this is generally NP-hard. Spectral methods provide a good approximation.

### 3.3 Normalized Spectral Partitioning (for Ncut)

For minimizing the Normalized Cut (Ncut), the problem becomes more complex. The problem of finding a partition that minimizes Ncut is equivalent to solving a generalized eigenvalue problem.

**The Ncut Problem and its Spectral Relaxation:**

The Ncut problem for $k=2$ can be formulated as:
$$\min_{V_1, V_2} \left( \frac{\sum_{u \in V_1, v \in V_2} A_{uv}}{W(V_1)} + \frac{\sum_{u \in V_1, v \in V_2} A_{uv}}{W(V_2)} \right)$$

This can be rewritten in terms of vertex indicator vectors. Let $\mathbf{x}$ be a vector where $x_i = 1/\sqrt{W(V_1)}$ if $i \in V_1$ and $x_i = -1/\sqrt{W(V_2)}$ if $i \in V_2$. Then the Ncut can be expressed as:

$$Ncut(V_1, V_2) = \frac{\mathbf{x}^T L \mathbf{x}}{\mathbf{x}^T \mathbf{x}}$$

This is a Rayleigh quotient. Minimizing this over all possible vectors $\mathbf{x}$ that represent a partition is still hard. However, by relaxing the constraint that $\mathbf{x}$ must be binary (or $\pm 1$), and allowing $\mathbf{x}$ to be any vector in $\mathbb{R}^n$ with $\mathbf{x}^T \mathbf{D} \mathbf{1} = 0$ (where $\mathbf{1}$ is the vector of all ones), the minimum of the Rayleigh quotient is achieved by the Fiedler vector.

**The Normalized Spectral Clustering Algorithm (for $k=2$):**

1.  **Compute the normalized Laplacian matrix:** There are a few common choices, e.g., $\mathcal{L} = D^{-1/2} L D^{-1/2}$ or $\mathcal{L}_{sym} = D^{-1/2} L D^{-1/2}$. Another common one is $\mathcal{L}_{rw} = D^{-1} L$.
2.  **Compute the eigenvalues and eigenvectors of the chosen normalized Laplacian.**
3.  **Identify the eigenvector $\mathbf{u}_2$ corresponding to the second smallest eigenvalue.** (For $\mathcal{L}_{rw}$, $\lambda_2 = 0$ is the smallest eigenvalue, and the second smallest is still the one we are interested in).
4.  **Use $\mathbf{u}_2$ as feature vectors for the vertices.**
5.  **Apply k-means clustering (or another clustering algorithm) to these feature vectors** to partition the vertices into $k$ clusters. For $k=2$, the standard approach is to find a threshold (e.g., the median of $\mathbf{u}_2$) to split the vertices.

**Why Normalized Laplacian?** Using the normalized Laplacian helps to account for vertex degrees and leads to partitions that minimize the normalized cut, which is often more desirable than minimizing the raw cut.

---

## 4. Multi-way Partitioning (k > 2)

Extending spectral methods to partition a graph into $k > 2$ subsets is a natural progression.

### 4.1 Using Multiple Eigenvectors

**Idea:** Instead of just using the Fiedler vector, use the first $k$ eigenvectors of the Laplacian (or normalized Laplacian) corresponding to the smallest eigenvalues. These $k$ eigenvectors capture more information about the graph's structure.

**Algorithm (Multiway Spectral Partitioning):**

1.  **Compute the Laplacian Matrix $L$** (or a normalized version).
2.  **Compute the first $k$ eigenvectors** $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ corresponding to the $k$ smallest eigenvalues $\{\lambda_1, \dots, \lambda_k\}$. Note that $\mathbf{v}_1$ is the all-ones vector (corresponding to $\lambda_1 = 0$).
3.  **Form a matrix $U$** where the columns are these $k$ eigenvectors. Each row of $U$ is a $k$-dimensional feature vector for a vertex.
4.  **Apply a clustering algorithm (e.g., k-means) to the rows of $U$** to partition the $n$ vertices into $k$ clusters.

**Example: Using k-means with spectral embeddings**

If we have a graph where communities are naturally formed, the first few eigenvectors of the Laplacian will often capture this community structure. The k-means algorithm can then effectively group vertices based on these eigenvector components.

**Important Consideration:** The ordering of vertices within partitions determined by k-means might not directly correspond to the order in any single eigenvector.

### 4.2 Recursive Bisection

Another approach for multi-way partitioning is to repeatedly apply the spectral bisection algorithm.

**Algorithm:**

1.  **Partition the graph into two sets** using spectral bisection.
2.  **Recursively apply spectral bisection to each of the resulting partitions** until $k$ partitions are obtained.

**Trade-offs:**

*   **Recursive bisection:** Simpler to implement, always provides a hierarchy of partitions. However, a poor bisection early on can negatively impact subsequent partitions.
*   **Using k eigenvectors:** Potentially captures global structure better by considering multiple eigenvectors simultaneously. Requires a robust clustering algorithm.

---

## 5. Graph Partitioning and Graph Decomposition

Graph partitioning is a key tool in graph decomposition, which aims to break down a graph into smaller, manageable pieces.

*   **Sparse Matrix Computations:** Partitioning is used to reorder rows and columns of matrices (like the Laplacian) to create block-sparse structures, which are more efficient for solvers.
*   **Domain Decomposition:** In numerical methods, partitioning a mesh or domain is essential for distributing the computation across processors.

---

## 6. Practical Considerations and Advanced Topics

*   **Choice of Laplacian:** Different forms of the Laplacian (unnormalized, normalized) can lead to different partitioning behaviors. The choice depends on the specific application and desired cut measure.
*   **Eigenvector Computation:** For very large graphs, computing all eigenvectors can be computationally expensive. Iterative methods like the Lanczos algorithm are used to find the smallest eigenvalues and their corresponding eigenvectors efficiently.
*   **Graph Partitioning Libraries:** Libraries like METIS, Scotch, and KaHIP provide highly optimized algorithms for graph partitioning.
*   **Dynamic Graph Partitioning:** For graphs that change over time, dynamic partitioning algorithms are needed to repartition the graph efficiently as it evolves.

---

## 7. Practice Questions

1.  **What is the primary goal of graph partitioning?**
2.  **Define the Normalized Cut (Ncut) and explain why it is often preferred over the simple cut size.**
3.  **What matrix is central to spectral graph partitioning, and why?**
4.  **Describe the role of the Fiedler vector in spectral bisection.**
5.  **How can spectral methods be extended to partition a graph into $k > 2$ partitions?**
6.  **Consider a graph with vertices {1, 2, 3, 4} and edges {(1,2), (2,3), (3,1), (3,4)}.**
    *   Construct its Adjacency matrix, Degree matrix, and Laplacian matrix.
    *   Suppose the Fiedler vector values for vertices 1, 2, 3, 4 are [-0.6, -0.4, 0.2, 0.8]. If you were to partition this graph into two sets using spectral bisection, what would be the resulting partitions and the cut size?

---

## 8. Answers to Practice Questions

1.  **What is the primary goal of graph partitioning?**
    The primary goal is to divide the vertices of a graph into a specified number of disjoint subsets (partitions) such that certain objective functions are optimized. Most commonly, this involves minimizing the number of edges connecting vertices in different partitions.

2.  **Define the Normalized Cut (Ncut) and explain why it is often preferred over the simple cut size.**
    The Normalized Cut (Ncut) for a partition $(V_1, V_2)$ is defined as $Ncut(V_1, V_2) = \frac{|Cut(V_1, V_2)|}{W(V_1)} + \frac{|Cut(V_1, V_2)|}{W(V_2)}$, where $W(V_i)$ is the sum of degrees (or edge weights) of vertices in partition $V_i$. Ncut is preferred over the simple cut size because it penalizes partitions that result in very small or isolated components, encouraging more balanced and meaningful partitions by considering the internal connectivity of each partition.

3.  **What matrix is central to spectral graph partitioning, and why?**
    The **Laplacian matrix ($L = D - A$)** is central to spectral graph partitioning. Its eigenvalues and eigenvectors reveal structural properties of the graph. Specifically, the number of zero eigenvalues corresponds to the number of connected components, and the eigenvector corresponding to the second smallest eigenvalue (Fiedler vector) provides an embedding that helps identify dense subgraphs and facilitate partitioning.

4.  **Describe the role of the Fiedler vector in spectral bisection.**
    The Fiedler vector (the eigenvector corresponding to the second smallest eigenvalue of the Laplacian) provides a 1-dimensional embedding of the graph's vertices. Vertices with similar values in the Fiedler vector tend to be "close" in the graph. By sorting vertices based on their Fiedler vector values and finding an optimal split point, spectral bisection can effectively partition the graph into two sets, minimizing the cut size.

5.  **How can spectral methods be extended to partition a graph into $k > 2$ partitions?**
    Spectral methods can be extended to $k > 2$ partitions in two main ways:
    *   **Using the first $k$ eigenvectors:** Compute the first $k$ eigenvectors corresponding to the smallest eigenvalues of the Laplacian. Treat the rows of the matrix formed by these eigenvectors as $k$-dimensional feature vectors for each vertex, and then apply a clustering algorithm like k-means to group these vertices into $k$ partitions.
    *   **Recursive bisection:** Repeatedly apply the spectral bisection algorithm to the graph and its resulting partitions until $k$ partitions are obtained.

6.  **Consider a graph with vertices {1, 2, 3, 4} and edges {(1,2), (2,3), (3,1), (3,4)}.**
    *   **Adjacency Matrix (A):**
        ```
        [[0, 1, 1, 0],
         [1, 0, 1, 0],
         [1, 1, 0, 1],
         [0, 0, 1, 0]]
        ```
    *   **Degree Matrix (D):**
        ```
        [[2, 0, 0, 0],
         [0, 2, 0, 0],
         [0, 0, 3, 0],
         [0, 0, 0, 1]]
        ```
    *   **Laplacian Matrix (L = D - A):**
        ```
        [[ 2, -1, -1,  0],
         [-1,  2, -1,  0],
         [-1, -1,  3, -1],
         [ 0,  0, -1,  1]]
        ```
    *   **Spectral Bisection:**
        Given Fiedler vector values: $v_1 = -0.6$, $v_2 = -0.4$, $v_3 = 0.2$, $v_4 = 0.8$.
        The sorted order of vertices based on Fiedler vector values is (1, 2, 3, 4).
        Let's evaluate potential splits:
        *   Split 1: $V_1=\{1\}$, $V_2=\{2,3,4\}$. Cut edges: (1,2), (1,3). Cut size = 2.
        *   Split 2: $V_1=\{1,2\}$, $V_2=\{3,4\}$. Cut edges: (1,3), (2,3). Cut size = 2.
        *   Split 3: $V_1=\{1,2,3\}$, $V_2=\{4\}$. Cut edges: (3,4). Cut size = 1.

        The optimal split that minimizes the cut size is $V_1=\{1,2,3\}$ and $V_2=\{4\}$. The minimum cut size is 1.

---

## Key Points to Remember:

*   Graph partitioning aims to divide vertices into subsets to optimize edge connections between partitions.
*   Graph cuts (like min-cut and Ncut) quantify the quality of a partition.
*   The Laplacian matrix and its eigenvalues/eigenvectors are fundamental tools in spectral graph partitioning.
*   The Fiedler vector (eigenvector of $\lambda_2$) is crucial for spectral bisection.
*   Normalized Laplacians are often used for normalized cut minimization.
*   Multi-way partitioning can be achieved by using multiple eigenvectors and clustering, or by recursive bisection.
*   Spectral partitioning is an approximation technique for NP-hard problems.
