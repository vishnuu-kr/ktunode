---
title: "Normalized Cut"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 2: Spectral Clustering "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3ff"
status: "completed"
scrapedAt: "2026-05-20T17:11:52.772Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE - Module 2: Spectral Clustering

## Topic: Normalized Cut

---

### 1. Introduction to Normalized Cut

Spectral clustering has emerged as a powerful technique for clustering data, particularly when dealing with complex relationships and non-globular cluster shapes. The Normalized Cut (Ncut) algorithm is a principled approach within spectral clustering that aims to optimize a specific objective function for graph partitioning.

#### 1.1. The Goal of Graph Partitioning

*   **Problem:** Given a set of data points (represented as nodes in a graph), we want to partition these points into a specified number of clusters ($k$).
*   **Graph Representation:** Data points are nodes in a graph. Edges represent the similarity or affinity between data points. The weight of an edge indicates the strength of the connection.
*   **Desired Outcome:** Points within the same cluster should be highly connected (strong edge weights), while points in different clusters should be sparsely connected (weak or no edge weights).

#### 1.2. Limitations of Traditional Cut Metrics

*   **Min-Cut:** A simple approach is to find a cut that minimizes the sum of edge weights crossing the partition.
    *   **Problem with Min-Cut:** Min-Cut tends to favor partitions that create very small, isolated clusters, as these often have minimal cut weight. It doesn't consider the size of the partitions, potentially leading to unbalanced clusters.

#### 1.3. The Normalized Cut (Ncut) Objective

*   **Motivation:** To overcome the bias of Min-Cut towards small clusters, Ncut introduces a normalization factor based on the "association" of each partition with the entire graph. This encourages balanced partitions.
*   **Definition of Cut:** For a graph $G=(V, E)$ and a partition of vertices into two sets $A$ and $B$ ($V = A \cup B, A \cap B = \emptyset$), the cut is defined as:
    $$ \text{cut}(A, B) = \sum_{u \in A, v \in B} w(u, v) $$
    where $w(u, v)$ is the weight of the edge between nodes $u$ and $v$.

*   **Definition of Association:** The association of a set of nodes $S$ with the entire graph $V$ is defined as:
    $$ \text{assoc}(S, V) = \sum_{u \in S, v \in V} w(u, v) $$
    This is essentially the sum of weights of all edges connected to nodes in $S$. For a partition $(A, B)$, this would be $\text{assoc}(A, V)$ and $\text{assoc}(B, V)$.

*   **Normalized Cut (Ncut):** The normalized cut for a partition $(A, B)$ is defined as:
    $$ \text{Ncut}(A, B) = \frac{\text{cut}(A, B)}{\text{assoc}(A, V)} + \frac{\text{cut}(A, B)}{\text{assoc}(B, V)} $$

*   **Key Insight:** Ncut aims to *minimize* this ratio. By dividing the cut by the association, we penalize cuts that disconnect a large portion of the graph. This encourages partitions where the total "connection" within each partition is high relative to the cut.

---

### 2. Mathematical Formulation and Solution

The Normalized Cut problem is NP-hard. However, it can be approximated by solving a generalized eigenvalue problem.

#### 2.1. Relating Ncut to an Eigenvalue Problem

*   **Adjacency Matrix (W):** Let $W$ be the weighted adjacency matrix of the graph, where $W_{ij} = w(i, j)$ if there's an edge between $i$ and $j$, and $0$ otherwise.
*   **Degree Matrix (D):** Let $D$ be the diagonal degree matrix, where $D_{ii} = \sum_{j} W_{ij}$ (the sum of weights of edges connected to node $i$).
*   **Laplacian Matrix (L):** The unnormalized graph Laplacian is $L = D - W$.

Now, consider the Ncut formulation for a partition $(A, B)$:

$$ \text{Ncut}(A, B) = \frac{\sum_{u \in A, v \in B} W_{uv}}{\sum_{u \in A} D_{uu}} + \frac{\sum_{u \in A, v \in B} W_{uv}}{\sum_{v \in B} D_{vv}} $$

Let $\mathbf{x}$ be a vector in $\{-1, +1\}^{|V|}$ where $x_i = 1$ if node $i \in A$ and $x_i = -1$ if node $i \in B$.
Then:

*   $\text{cut}(A, B) = \frac{1}{4} \sum_{i, j} W_{ij} (1 - x_i x_j)$
*   $\text{assoc}(A, V) = \sum_{i \in A} D_{ii}$
*   $\text{assoc}(B, V) = \sum_{i \in B} D_{ii}$

The Ncut can be rewritten as minimizing:

$$ \text{Ncut} = \sum_{i \in A, j \in B} \frac{W_{ij}}{D_i} + \sum_{i \in A, j \in B} \frac{W_{ij}}{D_j} $$

However, the exact minimization of Ncut is still difficult. The breakthrough by Shi and Malik (2000) showed that Ncut can be *approximated* by minimizing:

$$ \text{Ncut}(\mathbf{x}) = \frac{\mathbf{x}^T (D - W) \mathbf{x}}{\mathbf{x}^T D \mathbf{x}} = \frac{\mathbf{x}^T L \mathbf{x}}{\mathbf{x}^T D \mathbf{x}} $$
where $\mathbf{x}$ is a vector representing the partition. This formulation is for *two* clusters.

#### 2.2. The Generalized Eigenvalue Problem

Minimizing the ratio $\frac{\mathbf{x}^T L \mathbf{x}}{\mathbf{x}^T D \mathbf{x}}$ is related to the **generalized eigenvalue problem**: $L \mathbf{y} = \lambda D \mathbf{y}$.

*   **Smallest Eigenvalue:** The smallest eigenvalue of the *unnormalized* Laplacian ($L$) is 0, corresponding to the eigenvector $\mathbf{1}$ (a vector of all ones). This eigenvector does not give a meaningful partition.
*   **Second Smallest Eigenvalue:** The second smallest eigenvalue of the unnormalized Laplacian is often associated with the "best" cut. However, it still suffers from the Min-Cut bias.
*   **The Ncut Solution:** The objective function for Ncut can be reformulated as minimizing:

    $$ \frac{\mathbf{x}^T L \mathbf{x}}{\mathbf{x}^T D \mathbf{x}} $$
    subject to $\mathbf{x}^T D \mathbf{1} = 0$ (to ensure the cut is not trivial or biased towards one side).

    This minimization problem is solved by finding the eigenvector $\mathbf{y}$ corresponding to the **second smallest eigenvalue** of the **generalized eigenvalue problem**: $L \mathbf{y} = \lambda D \mathbf{y}$.

    *   **Note:** This assumes we are dealing with a *normalized* graph Laplacian, often denoted $\mathcal{L} = D^{-1/2} L D^{-1/2}$. For the normalized cut, we actually solve the standard eigenvalue problem $D^{-1/2} L D^{-1/2} \mathbf{z} = \mu \mathbf{z}$ and find the eigenvector $\mathbf{z}$ corresponding to the second smallest eigenvalue $\mu$. The vector $\mathbf{y}$ in $L \mathbf{y} = \lambda D \mathbf{y}$ is related to $\mathbf{z}$ by $\mathbf{y} = D^{-1/2} \mathbf{z}$.

    For simplicity, many sources refer to solving $L \mathbf{y} = \lambda D \mathbf{y}$ for the second smallest eigenvalue and its corresponding eigenvector $\mathbf{y}$.

#### 2.3. Algorithms based on Ncut

The process to find clusters using Ncut generally involves these steps:

1.  **Construct the Affinity Graph:** Create a graph where nodes represent data points and edge weights represent similarity. Common affinity functions include:
    *   Gaussian similarity: $w(u, v) = \exp(-\|u - v\|^2 / (2\sigma^2))$
    *   k-NN graph: Connect each node to its $k$ nearest neighbors.

2.  **Compute the Matrices:** Calculate the adjacency matrix ($W$), degree matrix ($D$), and the graph Laplacian ($L = D - W$).

3.  **Solve the Generalized Eigenvalue Problem:** Find the eigenvalues and eigenvectors of $L \mathbf{y} = \lambda D \mathbf{y}$ (or the equivalent normalized Laplacian problem).

4.  **Select the Eigenvector:** Identify the eigenvector $\mathbf{y}$ corresponding to the **second smallest eigenvalue**. This eigenvector provides a real-valued representation for each data point, encoding information about its position in the graph structure.

5.  **Partition the Eigenvector:** The values in the selected eigenvector are used to partition the data.
    *   **For two clusters ($k=2$):** A simple thresholding can be applied to the eigenvector. For example, if the eigenvector is $\mathbf{y}$, points $i$ where $y_i > \text{median}(y)$ go into one cluster, and points where $y_i \le \text{median}(y)$ go into the other.
    *   **For more than two clusters ($k > 2$):** Use the first $k$ eigenvectors (corresponding to the $k$ smallest eigenvalues). These eigenvectors form a new feature space. Then, apply a standard clustering algorithm (like k-means) to the rows of the matrix formed by these eigenvectors.

---

### 3. Practical Implementation Aspects

#### 3.1. Choosing the Affinity Function and Parameters

*   **Similarity Measure:** The choice of how to define similarity between data points is crucial. Euclidean distance is common, but other measures might be more appropriate depending on the data.
*   **$\sigma$ in Gaussian Similarity:** This parameter controls the "locality" of the connections. A small $\sigma$ leads to a sparse graph with local connections, while a large $\sigma$ leads to a denser graph with more global connections. It often needs to be tuned.
*   **k in k-NN Graph:** This parameter determines how many neighbors each node is connected to.

#### 3.2. Handling the Eigenvalue Problem

*   **Numerical Stability:** For large graphs, calculating all eigenvalues and eigenvectors can be computationally expensive and numerically unstable. Techniques like iterative methods (e.g., Lanczos algorithm) are often used to find specific eigenvalues and eigenvectors.
*   **Software Libraries:** Libraries like NumPy/SciPy in Python, or specialized graph libraries, provide efficient functions for solving eigenvalue problems.

#### 3.3. Post-processing and Clustering

*   **k-means on Eigenvectors:** Applying k-means to the feature vectors derived from the eigenvectors is a standard approach for $k > 2$. The initial cluster assignments from k-means can be sensitive to initialization, so multiple runs with different random seeds are recommended.
*   **Thresholding for Binary Cuts:** For $k=2$, simple median-based thresholding is often used. Other thresholding strategies exist.

---

### 4. Example: Two-Cluster Partition

Consider a simple graph with 4 nodes and the following adjacency matrix $W$:

$$ W = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix} $$

1.  **Calculate Degree Matrix D:**
    $$ D = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} $$

2.  **Calculate Laplacian Matrix L:**
    $$ L = D - W = \begin{pmatrix} 1 & -1 & 0 & 0 \\ -1 & 2 & -1 & 0 \\ 0 & -1 & 2 & -1 \\ 0 & 0 & -1 & 1 \end{pmatrix} $$

3.  **Solve Generalized Eigenvalue Problem:** $L \mathbf{y} = \lambda D \mathbf{y}$.
    This involves solving $\det(L - \lambda D) = 0$. For this small example, we can find eigenvalues and eigenvectors directly.

    The eigenvalues of $D^{-1/2} L D^{-1/2}$ are approximately:
    $\mu_0 \approx 0.0$
    $\mu_1 \approx 0.38$
    $\mu_2 \approx 1.0$
    $\mu_3 \approx 2.62$

    The eigenvalues of $L \mathbf{y} = \lambda D \mathbf{y}$ are approximately:
    $\lambda_0 = 0.0$
    $\lambda_1 \approx 0.19$
    $\lambda_2 \approx 0.50$
    $\lambda_3 \approx 1.31$

    We are interested in the eigenvector corresponding to the second smallest eigenvalue.
    *   **Eigenvector for $\lambda_0=0$:** $\mathbf{y}_0 = (1, 1, 1, 1)^T$ (or any scalar multiple).
    *   **Eigenvector for $\lambda_1 \approx 0.19$:** Let's say (after scaling and normalization) it is approximately $\mathbf{y}_1 \approx (0.65, 0.27, -0.27, -0.65)^T$.

4.  **Partition using $\mathbf{y}_1$:**
    *   The median of $\mathbf{y}_1$ is roughly 0.
    *   Nodes with $y_i > 0$: Nodes 0 and 1. Cluster A = {0, 1}.
    *   Nodes with $y_i \le 0$: Nodes 2 and 3. Cluster B = {2, 3}.

5.  **Check the Cut:**
    *   $\text{cut}(A, B) = w(0,2) + w(0,3) + w(1,2) + w(1,3) = 0 + 0 + 1 + 0 = 1$.
    *   $\text{assoc}(A, V) = D_0 + D_1 = 1 + 2 = 3$.
    *   $\text{assoc}(B, V) = D_2 + D_3 = 2 + 1 = 3$.
    *   $\text{Ncut}(A, B) = \frac{1}{3} + \frac{1}{3} = \frac{2}{3}$.

    This partition (0,1) and (2,3) splits the graph into two segments of the line, which is a reasonable clustering.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary limitation of the Min-Cut algorithm for graph partitioning that the Normalized Cut (Ncut) aims to address?

**Question 2:**
Define the Normalized Cut (Ncut) for a partition $(A, B)$ of a graph $G=(V,E)$ with edge weights $W$.

**Question 3:**
Which eigenvalue problem is typically solved to approximate the Normalized Cut for a graph? What is the significance of the eigenvalue you choose?

**Question 4:**
Consider a graph with 3 nodes and the following adjacency matrix $W$:
$$ W = \begin{pmatrix} 0 & 2 & 0 \\ 2 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix} $$
Calculate the degree matrix $D$ and the Laplacian matrix $L$.

**Question 5 (Conceptual):**
If you have a graph with a single node highly connected to a large cluster of weakly connected nodes, and you want to partition it into two clusters, how might Min-Cut and Ncut behave differently?

---

### 6. Answers to Practice Questions

**Answer 1:**
The primary limitation of Min-Cut is its tendency to favor partitions that create very small, isolated clusters. This is because the sum of edge weights crossing the cut can be minimized by simply isolating a single node or a very small group of nodes, regardless of the overall graph structure or balance of the resulting partitions.

**Answer 2:**
For a partition $(A, B)$ of a graph $G=(V,E)$ with edge weights $W$ and degree matrix $D$, the Normalized Cut is defined as:
$$ \text{Ncut}(A, B) = \frac{\text{cut}(A, B)}{\text{assoc}(A, V)} + \frac{\text{cut}(A, B)}{\text{assoc}(B, V)} $$
where:
*   $\text{cut}(A, B) = \sum_{u \in A, v \in B} W_{uv}$ is the sum of edge weights between nodes in $A$ and $B$.
*   $\text{assoc}(A, V) = \sum_{u \in A} D_{uu}$ is the sum of degrees of nodes in $A$.
*   $\text{assoc}(B, V) = \sum_{v \in B} D_{vv}$ is the sum of degrees of nodes in $B$.

**Answer 3:**
To approximate the Normalized Cut, the **generalized eigenvalue problem** $L \mathbf{y} = \lambda D \mathbf{y}$ is solved, where $L$ is the graph Laplacian and $D$ is the degree matrix. The eigenvector $\mathbf{y}$ corresponding to the **second smallest eigenvalue** $\lambda$ is used for partitioning. The second smallest eigenvalue is significant because it often captures the most "balanced" cut that minimizes the Ncut objective.

**Answer 4:**
Given $W = \begin{pmatrix} 0 & 2 & 0 \\ 2 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$:

*   **Degree Matrix D:**
    The degrees are: $D_{00} = 2$, $D_{11} = 2+1 = 3$, $D_{22} = 1$.
    $$ D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix} $$

*   **Laplacian Matrix L:** $L = D - W$
    $$ L = \begin{pmatrix} 2 & -2 & 0 \\ -2 & 3 & -1 \\ 0 & -1 & 1 \end{pmatrix} $$

**Answer 5:**
*   **Min-Cut:** Min-Cut would likely isolate the single, highly connected node into its own cluster. The other two weakly connected nodes would form the second cluster. This would result in a very small cut weight (possibly zero if the node is isolated from the other two).

*   **Ncut:** Ncut would consider the "association" of each partition. Isolating the single node would result in a small cut, but also a small association for the single-node partition. The larger cluster would have a larger association. The Ncut ratio would likely be higher compared to a more balanced partition. Ncut would favor partitioning the graph into two more balanced sets, perhaps splitting the larger cluster if that leads to a better overall Ncut score, even if the cut value is slightly higher than the Min-Cut's trivial isolation. This is because Ncut penalizes imbalances.

---

### 7. Important Points to Remember

*   **Ncut as an Approximation:** The minimization of Ncut is NP-hard. The spectral approach provides a relaxation and approximation.
*   **Second Smallest Eigenvalue:** For two clusters, the eigenvector associated with the second smallest eigenvalue of $L \mathbf{y} = \lambda D \mathbf{y}$ (or its normalized Laplacian equivalent) is key.
*   **Generalization to k Clusters:** For $k > 2$, use the first $k$ eigenvectors and then apply k-means (or another clustering algorithm) to the rows of the matrix formed by these eigenvectors.
*   **Affinity Matrix is Crucial:** The quality of the clustering heavily depends on how the affinity matrix (and thus the Laplacian) is constructed.
*   **Balance:** Ncut explicitly optimizes for balanced partitions, unlike Min-Cut.
*   **Computational Cost:** Solving eigenvalue problems can be computationally intensive for large graphs.
