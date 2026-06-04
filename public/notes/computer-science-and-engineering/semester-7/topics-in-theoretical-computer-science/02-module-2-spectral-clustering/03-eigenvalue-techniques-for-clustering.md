---
title: "Eigenvalue Techniques for Clustering"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 2: Spectral Clustering "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c400"
status: "completed"
scrapedAt: "2026-05-20T17:11:53.903Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE
## Module 2: Spectral Clustering

## Topic: Eigenvalue Techniques for Clustering

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental connection between graph partitioning and eigenvalue decomposition.
*   Explain how eigenvalues and eigenvectors of graph matrices can be used to reveal cluster structures.
*   Describe the process of spectral clustering using the Laplacian matrix.
*   Discuss the advantages and disadvantages of spectral clustering compared to other clustering methods.
*   Apply spectral clustering to a small dataset.

---

### 1. Introduction to Clustering and Graph Representation

*   **Clustering:** The task of grouping a set of objects in such a way that objects in the same group (cluster) are more similar to each other than to those in other groups.
*   **Similarity:** In clustering, similarity is often defined by distance. Points close to each other are considered similar.
*   **Graph Representation of Data:**
    *   Data points can be represented as nodes (vertices) in a graph $G = (V, E)$.
    *   Edges represent the similarity between data points.
    *   **Weighted Graph:** Edges have associated weights representing the degree of similarity. A common similarity measure is the Gaussian kernel: $w_{ij} = \exp(-\frac{\|x_i - x_j\|^2}{2\sigma^2})$, where $x_i, x_j$ are data points and $\sigma$ is a bandwidth parameter.
    *   **Unweighted Graph:** Edges exist only if points are "close enough" based on some threshold.
*   **Goal of Clustering (Graph Perspective):** To partition the graph into a set of disjoint subgraphs (clusters) such that:
    *   Nodes within a cluster are "densely" connected (high similarity).
    *   Nodes in different clusters are "sparsely" connected (low similarity).

---

### 2. The Problem of Graph Partitioning

*   **Graph Partitioning:** The problem of dividing the vertices of a graph into $k$ disjoint sets, typically minimizing the "cut" between these sets.
*   **The Cut:**
    *   **Undirected Graph:** For a partition of $V$ into $k$ sets $V_1, V_2, \dots, V_k$, the *cut* is the sum of weights of edges connecting vertices in different sets.
    *   **Common Goal:** Minimize the sum of weights of edges crossing between clusters.
*   **Challenges of Direct Graph Partitioning:**
    *   Finding the optimal partition is NP-hard.
    *   Many graph partitioning algorithms are heuristic.

---

### 3. Eigenvalue Techniques for Clustering

Eigenvalue decomposition provides a powerful mathematical tool to approximate optimal graph partitions, revealing underlying cluster structures. The key idea is to embed the graph into a lower-dimensional space where clusters become more apparent.

#### 3.1. Graph Matrices

We represent the graph using matrices:

*   **Adjacency Matrix (W):** An $n \times n$ matrix where $W_{ij}$ is the weight of the edge between nodes $i$ and $j$, and $W_{ii} = 0$.
    *   $W_{ij} = w_{ij}$ if $i \neq j$, $W_{ii} = 0$.
    *   For an unweighted graph, $W_{ij} = 1$ if an edge exists, $0$ otherwise.

*   **Degree Matrix (D):** A diagonal matrix where $D_{ii}$ is the sum of weights of all edges connected to node $i$ (the degree of node $i$).
    *   $D_{ii} = \sum_{j=1}^n W_{ij}$.
    *   $D_{ij} = 0$ if $i \neq j$.

*   **Laplacian Matrix (L):** A fundamental matrix in spectral graph theory, defined as $L = D - W$.
    *   **Properties of L:**
        *   It is symmetric and positive semi-definite.
        *   Its eigenvalues are non-negative.
        *   The smallest eigenvalue is always 0, with a corresponding eigenvector of all ones.
        *   The number of zero eigenvalues of $L$ equals the number of connected components in the graph.
        *   The eigenvectors corresponding to the smallest eigenvalues tend to capture the global structure of the graph.

#### 3.2. The Normalized Cut (NCut) and its Relation to Eigenvectors

A popular criterion for graph partitioning that is amenable to spectral methods is the **Normalized Cut (NCut)**.

*   **Cut($V_1, \dots, V_k$):** $\sum_{i=1}^k \text{weight}(V_i, V \setminus V_i)$
*   **Volume($V_i$):** Sum of degrees of nodes in $V_i$. $\text{Vol}(V_i) = \sum_{v \in V_i} d_v$.
*   **Normalized Cut (NCut):**
    $$ \text{NCut}(V_1, \dots, V_k) = \sum_{i=1}^k \frac{\text{weight}(V_i, V \setminus V_i)}{\text{Vol}(V_i)} $$
    This normalization aims to prevent small clusters with low connectivity from being favored.

#### 3.3. Spectral Relaxation and Eigenvectors

The problem of minimizing NCut is still NP-hard. However, it can be *relaxed* into a problem that can be solved using eigenvalues.

*   **Key Insight:** The eigenvectors of the graph Laplacian matrix (or related normalized Laplacians) provide a low-dimensional embedding of the graph's nodes, where distances in this embedding reflect the connectivity of the original graph. Nodes that are "close" in the embedding are likely to be in the same cluster.

*   **Eigenvectors of the Laplacian:** Consider the generalized eigenvalue problem associated with NCut, which can be approximated by the standard eigenvalue problem of the **Normalized Laplacian matrices**:

    *   **Symmetric Normalized Laplacian ($L_{sym}$):** $L_{sym} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} W D^{-1/2}$
        *   Eigenvalue problem: $L_{sym} u = \lambda u$
        *   The $i$-th row of $D^{-1/2} W D^{-1/2}$ is $(W_{ii}/\sqrt{d_i d_j})_{j=1}^n$. This represents the normalized connection of node $i$ to other nodes.

    *   **Random Walk Normalized Laplacian ($L_{rw}$):** $L_{rw} = D^{-1} L = I - D^{-1} W$
        *   Eigenvalue problem: $L_{rw} u = \lambda u$
        *   The $i$-th row of $D^{-1} W$ is $(W_{ij}/d_i)_{j=1}^n$. This represents the transition probabilities in a random walk.

    *   **Why these?** The eigenvectors of these normalized Laplacians are crucial. They can be shown to relate to the minimization of cuts. Specifically, the eigenvector corresponding to the *second smallest* eigenvalue of $L_{sym}$ (often called the **Fiedler vector**) provides a good one-dimensional embedding for partitioning the graph into two clusters.

#### 3.4. The Fiedler Vector for Bipartitioning

*   **The Fiedler Vector:** Let $u_2$ be the eigenvector corresponding to the second smallest eigenvalue $\lambda_2$ of $L_{sym}$ (or $L_{rw}$).
*   **Partitioning using the Fiedler Vector:**
    1.  Sort the entries of the Fiedler vector $u_2$.
    2.  Find a threshold (e.g., the median value of the entries).
    3.  Partition the nodes into two sets:
        *   $V_1 = \{i \mid u_{2,i} \ge \text{threshold}\}$
        *   $V_2 = \{i \mid u_{2,i} < \text{threshold}\}$
    4.  This simple thresholding often leads to a good 2-way partition.

#### 3.5. Spectral Clustering for K Clusters

To obtain $k$ clusters, we extend the idea using the first $k$ eigenvectors of the Laplacian.

*   **Process:**
    1.  **Construct the Similarity Graph:** Define the similarity matrix $W$.
    2.  **Compute the Degree Matrix D:** $D_{ii} = \sum_j W_{ij}$.
    3.  **Compute the Normalized Laplacian:** Typically $L_{sym} = I - D^{-1/2} W D^{-1/2}$.
    4.  **Compute Eigenvalues and Eigenvectors:** Find the $k$ smallest eigenvalues $\lambda_1, \dots, \lambda_k$ and their corresponding eigenvectors $u_1, \dots, u_k$.
        *   Note: $\lambda_1 = 0$ and $u_1$ is the all-ones vector. We typically use $u_2, \dots, u_k$.
    5.  **Form the Eigenvector Matrix U:** Create an $n \times k$ matrix $U$ where the $i$-th row is formed by the $i$-th components of the first $k$ eigenvectors (excluding the first all-ones eigenvector). More precisely, let the $i$-th eigenvector be $v_i$. Form a matrix $V = [v_2, \dots, v_k]$. Then for spectral clustering, we use rows of $V$. Let $Y$ be an $n \times k$ matrix where the $i$-th row $y_i^T$ is formed by the $i$-th components of the first $k$ *non-zero* eigenvectors (sorted by eigenvalue).
    6.  **Normalize Rows (Optional but Recommended):** Normalize each row of $Y$ to have unit length. This is often done for $k$-means. Let $T$ be the matrix where the $i$-th row is $y_i^T$. Normalize each row $t_i$ of $T$ to $t_i' = t_i / \|t_i\|$.
    7.  **Cluster the Rows:** Treat each row of $T$ (or $T'$) as a data point in $\mathbb{R}^k$. Apply a standard clustering algorithm (like K-Means) to these $n$ points.
    8.  **Assign Labels:** The cluster assignment of the $i$-th row (data point) is the cluster assignment of the $i$-th data point in the original dataset.

#### 3.6. Choosing the Number of Clusters ($k$)

*   **Eigenvalue Gap Heuristic:** Look for a significant "jump" or gap between consecutive eigenvalues in the sorted list of eigenvalues $\lambda_1 \le \lambda_2 \le \dots \le \lambda_n$. A large gap between $\lambda_i$ and $\lambda_{i+1}$ suggests that $i$ might be a good choice for the number of clusters.
*   **Cross-validation:** Test different values of $k$ and evaluate clustering quality using internal or external validation metrics.
*   **Domain Knowledge:** Sometimes the number of clusters is known beforehand.

---

### 4. Advantages and Disadvantages of Spectral Clustering

#### 4.1. Advantages:

*   **Captures Non-linear Structures:** Excels at finding clusters that are not necessarily convex or well-separated in the original feature space, but are separated by low-weight cuts in the similarity graph.
*   **Robust to Noise:** Can be less sensitive to noise in the data compared to methods that rely on explicit distance calculations in the original space.
*   **Works with Arbitrary Data Shapes:** Can cluster data with complex, non-globular shapes.
*   **Based on Solid Theoretical Foundations:** Rooted in graph theory and spectral decomposition.

#### 4.2. Disadvantages:

*   **Sensitivity to Similarity Measure and Parameters:** The choice of similarity function (e.g., Gaussian kernel) and its parameters (e.g., $\sigma$) can significantly impact the results.
*   **Computational Cost:** Computing eigenvalues and eigenvectors for large graphs can be computationally expensive ($O(n^3)$ for dense graphs, though sparse matrix techniques can improve this).
*   **Difficulty in Choosing $k$:** Selecting the optimal number of clusters can be challenging.
*   **Can Struggle with Density Variations:** May not perform optimally when clusters have very different densities, as the normalized cut can be biased.
*   **Requires Feature Engineering:** Need to first construct a meaningful similarity graph, which might involve feature selection or engineering.

---

### 5. Example: Spectral Clustering on a Simple Graph

Let's consider a graph with 6 nodes and the following adjacency matrix $W$:

$$
W = \begin{pmatrix}
0 & 1 & 1 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 \\
1 & 1 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 & 1 & 0
\end{pmatrix}
$$

We want to cluster this graph into $k=2$ clusters.

**Step 1: Construct the Similarity Graph (Already given by W)**

**Step 2: Compute the Degree Matrix D**

Calculate the row sums of $W$:
$d_1 = 1+1 = 2$
$d_2 = 1+1 = 2$
$d_3 = 1+1+1 = 3$
$d_4 = 1+1+1 = 3$
$d_5 = 1+1 = 2$
$d_6 = 1+1 = 2$

$$
D = \begin{pmatrix}
2 & 0 & 0 & 0 & 0 & 0 \\
0 & 2 & 0 & 0 & 0 & 0 \\
0 & 0 & 3 & 0 & 0 & 0 \\
0 & 0 & 0 & 3 & 0 & 0 \\
0 & 0 & 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 & 0 & 2
\end{pmatrix}
$$

**Step 3: Compute the Normalized Laplacian ($L_{sym}$)**

$L = D - W$
$$
L = \begin{pmatrix}
2 & -1 & -1 & 0 & 0 & 0 \\
-1 & 2 & -1 & 0 & 0 & 0 \\
-1 & -1 & 3 & -1 & 0 & 0 \\
0 & 0 & -1 & 3 & -1 & -1 \\
0 & 0 & 0 & -1 & 2 & -1 \\
0 & 0 & 0 & -1 & -1 & 2
\end{pmatrix}
$$

Calculate $D^{-1/2}$:
$$
D^{-1/2} = \begin{pmatrix}
1/\sqrt{2} & 0 & 0 & 0 & 0 & 0 \\
0 & 1/\sqrt{2} & 0 & 0 & 0 & 0 \\
0 & 0 & 1/\sqrt{3} & 0 & 0 & 0 \\
0 & 0 & 0 & 1/\sqrt{3} & 0 & 0 \\
0 & 0 & 0 & 0 & 1/\sqrt{2} & 0 \\
0 & 0 & 0 & 0 & 0 & 1/\sqrt{2}
\end{pmatrix}
$$

$L_{sym} = D^{-1/2} L D^{-1/2}$

$$
L_{sym} = \begin{pmatrix}
1 & -1/2 & -1/2 & 0 & 0 & 0 \\
-1/2 & 1 & -1/2 & 0 & 0 & 0 \\
-1/2 & -1/2 & 1 & -1/\sqrt{6} & 0 & 0 \\
0 & 0 & -1/\sqrt{6} & 1 & -1/2 & -1/2 \\
0 & 0 & 0 & -1/2 & 1 & -1/2 \\
0 & 0 & 0 & -1/2 & -1/2 & 1
\end{pmatrix}
$$
*(Note: Calculating the exact eigenvalues and eigenvectors can be tedious by hand. For demonstration purposes, we'll assume the structure. The key is how we use them).*

**Step 4: Compute Eigenvalues and Eigenvectors**

We need the $k=2$ smallest eigenvalues and their eigenvectors.
Let's assume the eigenvalues are approximately:
$\lambda_1 = 0$
$\lambda_2 \approx 0.39$
$\lambda_3 \approx 1.13$
...

The corresponding eigenvectors $u_1$ (all ones) and $u_2$ (the Fiedler vector) are approximately:

$u_1 \approx [1, 1, 1, 1, 1, 1]^T$ (eigenvalue $\lambda_1 = 0$)

$u_2 \approx [-0.52, -0.52, -0.43, 0.43, 0.52, 0.52]^T$ (eigenvalue $\lambda_2 \approx 0.39$)

*(These are approximate values. The exact values would be computed using numerical methods.)*

**Step 5: Form the Eigenvector Matrix U**

We use the Fiedler vector $u_2$. For $k=2$, our "embedding" is just the Fiedler vector itself.
Let $Y$ be the matrix where rows are components of eigenvectors:
For $k=2$, we use the second eigenvector $u_2$:
$Y = u_2 \approx [-0.52, -0.52, -0.43, 0.43, 0.52, 0.52]^T$

For $k$ clusters, we'd stack $u_2, \dots, u_k$ as columns and then take rows.
Let $T$ be an $n \times k$ matrix. For $k=2$, $T$ is $6 \times 1$ (essentially $u_2$):
$T = \begin{pmatrix}
-0.52 \\
-0.52 \\
-0.43 \\
0.43 \\
0.52 \\
0.52
\end{pmatrix}$

*(If $k > 2$, $T$ would be $n \times k$. For instance, if we had $u_2, u_3$:
$T = \begin{pmatrix}
u_{2,1} & u_{3,1} \\
u_{2,2} & u_{3,2} \\
\vdots & \vdots \\
u_{2,6} & u_{3,6}
\end{pmatrix}$
)*

**Step 6: Normalize Rows (Optional but Recommended for K-Means)**

Since $T$ is $6 \times 1$, row normalization doesn't change much. If $k > 1$, we'd normalize each row $t_i$ to $t_i / \|t_i\|$.

**Step 7: Cluster the Rows using K-Means**

We have 6 data points (rows of $T$), each in a 1-dimensional space:
$p_1 = -0.52$
$p_2 = -0.52$
$p_3 = -0.43$
$p_4 = 0.43$
$p_5 = 0.52$
$p_6 = 0.52$

We want to cluster these into $k=2$ groups. A natural split would be around 0.
Let's choose a threshold of 0.

*   Cluster 1 (negative values): {$p_1, p_2, p_3$} => Nodes {1, 2, 3}
*   Cluster 2 (positive values): {$p_4, p_5, p_6$} => Nodes {4, 5, 6}

This results in the partition:
Cluster 1: {1, 2, 3}
Cluster 2: {4, 5, 6}

**Step 8: Assign Labels**

Nodes {1, 2, 3} are in Cluster 1.
Nodes {4, 5, 6} are in Cluster 2.

This correctly identifies the two visually obvious components of the graph. The edge between node 3 and 4 is the only edge connecting these two groups.

---

### 6. Practice Questions

1.  **Conceptual:** Explain why the Fiedler vector is useful for bipartitioning a graph. What property of the eigenvector reflects the graph's connectivity structure?
2.  **Definition:** Define the Adjacency Matrix, Degree Matrix, and Normalized Laplacian Matrix ($L_{sym}$).
3.  **Process:** Outline the steps involved in performing spectral clustering for $k$ clusters.
4.  **Calculation (Simplified):** Consider the following graph with 4 nodes:
    $$
    W = \begin{pmatrix}
    0 & 1 & 0 & 0 \\
    1 & 0 & 1 & 0 \\
    0 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix}
    $$
    a) Compute the Degree Matrix $D$.
    b) Compute the Laplacian Matrix $L = D - W$.
    c) Compute the Symmetric Normalized Laplacian $L_{sym} = I - D^{-1/2} W D^{-1/2}$. (You can leave it in this form if exact calculation is too difficult, but show the setup.)
    d) If the Fiedler vector for this graph were approximately $u_2 = [-0.6, -0.4, 0.4, 0.6]^T$, what would be the spectral clustering partition into two clusters?
5.  **Comparison:** Discuss one advantage and one disadvantage of spectral clustering compared to K-Means clustering applied directly to feature vectors.

---

### 7. Answers to Practice Questions

1.  **Conceptual:** The Fiedler vector (the eigenvector corresponding to the second smallest eigenvalue of the Normalized Laplacian) provides a 1-dimensional embedding of the graph's nodes. The values in this vector are ordered such that nodes in one cluster tend to have similar (e.g., all positive or all negative) values, while nodes in another cluster have different values. This reflects the graph's connectivity because edges with low weights (cuts) are prioritized. The eigenvector tries to assign similar values to connected nodes and dissimilar values to disconnected nodes, thus revealing the partition.
2.  **Definition:**
    *   **Adjacency Matrix (W):** $W_{ij} = w_{ij}$ if $i \neq j$ (weight of edge between $i$ and $j$), and $W_{ii} = 0$.
    *   **Degree Matrix (D):** A diagonal matrix where $D_{ii} = \sum_{j=1}^n W_{ij}$ (sum of weights of edges incident to node $i$).
    *   **Symmetric Normalized Laplacian ($L_{sym}$):** $L_{sym} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} W D^{-1/2}$, where $L = D - W$ and $D^{-1/2}$ is the diagonal matrix with entries $1/\sqrt{d_i}$.
3.  **Process:**
    1.  Construct a similarity graph from the data.
    2.  Compute the Adjacency Matrix $W$ and Degree Matrix $D$.
    3.  Compute a Normalized Laplacian matrix (e.g., $L_{sym}$ or $L_{rw}$).
    4.  Calculate the $k$ smallest eigenvalues and their corresponding eigenvectors.
    5.  Form an $n \times k$ matrix $U$ using these $k$ eigenvectors (as columns), typically excluding the first eigenvector (all ones) if $k > 1$.
    6.  Normalize the rows of $U$ (optional but common for K-Means).
    7.  Treat each row of $U$ as a data point in $\mathbb{R}^k$ and apply K-Means (or another clustering algorithm) to these $n$ points.
    8.  Assign the cluster labels obtained from K-Means back to the original data points.
4.  **Calculation (Simplified):**
    $$
    W = \begin{pmatrix}
    0 & 1 & 0 & 0 \\
    1 & 0 & 1 & 0 \\
    0 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix}
    $$
    a) **Degree Matrix D:**
    $d_1 = 1, d_2 = 2, d_3 = 2, d_4 = 1$
    $$
    D = \begin{pmatrix}
    1 & 0 & 0 & 0 \\
    0 & 2 & 0 & 0 \\
    0 & 0 & 2 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}
    $$
    b) **Laplacian Matrix L:**
    $$
    L = D - W = \begin{pmatrix}
    1 & -1 & 0 & 0 \\
    -1 & 2 & -1 & 0 \\
    0 & -1 & 2 & -1 \\
    0 & 0 & -1 & 1
    \end{pmatrix}
    $$
    c) **Symmetric Normalized Laplacian $L_{sym}$:**
    $D^{-1/2} = \text{diag}(1, 1/\sqrt{2}, 1/\sqrt{2}, 1)$
    $$
    L_{sym} = \begin{pmatrix}
    1 & -1/\sqrt{2} & 0 & 0 \\
    -1/\sqrt{2} & 1 & -1/\sqrt{2} & 0 \\
    0 & -1/\sqrt{2} & 1 & -1/\sqrt{2} \\
    0 & 0 & -1/\sqrt{2} & 1
    \end{pmatrix}
    $$
    d) **Spectral Clustering Partition:**
    The Fiedler vector $u_2 \approx [-0.6, -0.4, 0.4, 0.6]^T$.
    We can split by the median value (0) or by observing the sign change.
    *   Nodes with negative values: {1, 2}
    *   Nodes with positive values: {3, 4}
    The spectral clustering partition is **Cluster 1: {1, 2}, Cluster 2: {3, 4}**. This correctly identifies the two pairs of connected nodes.

5.  **Comparison:**
    *   **Advantage:** Spectral clustering can discover clusters with complex shapes (e.g., concentric circles, moons) that are not separable by linear boundaries, which standard K-Means applied to raw features might struggle with.
    *   **Disadvantage:** K-Means is generally much faster for large datasets than spectral clustering because spectral clustering requires computing eigenvalues/eigenvectors, which can be computationally intensive ($O(n^3)$ or $O(n^2 \cdot m)$ for sparse matrices), whereas K-Means is typically $O(n \cdot k \cdot d \cdot i)$ where $i$ is the number of iterations.

---

### 8. Important Points to Remember:

*   **Graph Representation:** Data is first converted into a similarity graph. The quality of clustering heavily depends on the choice of similarity measure and graph construction.
*   **Laplacian Matrix:** The Laplacian matrix (especially normalized versions like $L_{sym}$) is central to spectral clustering. Its eigenvectors reveal the underlying connectivity structure of the graph.
*   **Eigenvectors for Embedding:** The first few non-trivial eigenvectors of the Laplacian provide a low-dimensional embedding of the data. Nodes that are "close" in this spectral embedding are likely to belong to the same cluster.
*   **K-Means on Embeddings:** Spectral clustering then applies a standard algorithm like K-Means to the data points represented by these eigenvectors.
*   **Non-linear Separability:** Its main strength is finding clusters that are not linearly separable in the original feature space.
*   **Computational Cost:** Be mindful of the computational complexity for large datasets.
*   **Parameter Sensitivity:** The choice of $\sigma$ for the Gaussian kernel and the number of clusters $k$ are critical parameters.

---
