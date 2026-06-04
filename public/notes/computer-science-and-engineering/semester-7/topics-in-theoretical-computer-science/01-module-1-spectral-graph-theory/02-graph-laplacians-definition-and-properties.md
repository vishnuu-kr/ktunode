---
title: "Graph Laplacians: Definition and Properties"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 1: Spectral Graph Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3f9"
status: "completed"
scrapedAt: "2026-05-20T17:11:48.075Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE - Module 1: Spectral Graph Theory

## Topic: Graph Laplacians: Definition and Properties

---

### 1. Introduction to Graph Laplacians

Spectral Graph Theory uses the eigenvalues and eigenvectors of matrices associated with a graph to understand its structure and properties. The **Graph Laplacian** is a fundamental matrix in this field, providing a rich source of information about graph connectivity, partitioning, and random walks.

---

### 2. Definitions of Graph Laplacians

There are several related matrices that are collectively referred to as "Graph Laplacians." We will focus on the most common ones.

#### 2.1. The Adjacency Matrix ($A$)

While not a Laplacian itself, the adjacency matrix is a precursor and provides foundational information.

*   **Definition:** For a graph $G = (V, E)$, the adjacency matrix $A$ is an $n \times n$ matrix where $n = |V|$, such that:
    *   $A_{ij} = 1$ if there is an edge between vertex $i$ and vertex $j$.
    *   $A_{ij} = 0$ otherwise.
    *   For undirected graphs, $A$ is symmetric ($A_{ij} = A_{ji}$).
    *   For simple graphs, the diagonal elements are zero ($A_{ii} = 0$).

*   **Example:**
    Consider a graph with vertices {1, 2, 3, 4} and edges {(1,2), (1,3), (2,3), (3,4)}.

    $A = \begin{pmatrix}
    0 & 1 & 1 & 0 \\
    1 & 0 & 1 & 0 \\
    1 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix}$

#### 2.2. The Degree Matrix ($D$)

*   **Definition:** For a graph $G = (V, E)$, the degree matrix $D$ is an $n \times n$ diagonal matrix where:
    *   $D_{ii}$ is the degree of vertex $i$ (the number of edges incident to it).
    *   $D_{ij} = 0$ for $i \neq j$.

*   **Example (using the same graph as above):**
    *   Degree of vertex 1: 2
    *   Degree of vertex 2: 2
    *   Degree of vertex 3: 3
    *   Degree of vertex 4: 1

    $D = \begin{pmatrix}
    2 & 0 & 0 & 0 \\
    0 & 2 & 0 & 0 \\
    0 & 0 & 3 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}$

#### 2.3. The Combinatorial Laplacian ($L$)

This is the most common and widely used Laplacian.

*   **Definition:** The combinatorial Laplacian $L$ of a graph $G = (V, E)$ is defined as:
    $L = D - A$

    where $D$ is the degree matrix and $A$ is the adjacency matrix.

*   **Properties:**
    *   $L_{ij} = \text{deg}(i)$ if $i=j$.
    *   $L_{ij} = -1$ if there is an edge between $i$ and $j$.
    *   $L_{ij} = 0$ otherwise.
    *   $L$ is a symmetric matrix.
    *   $L$ is positive semi-definite.
    *   The rows and columns of $L$ sum to zero.

*   **Example (using the same graph as above):**

    $L = D - A = \begin{pmatrix}
    2 & 0 & 0 & 0 \\
    0 & 2 & 0 & 0 \\
    0 & 0 & 3 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix} - \begin{pmatrix}
    0 & 1 & 1 & 0 \\
    1 & 0 & 1 & 0 \\
    1 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix} = \begin{pmatrix}
    2 & -1 & -1 & 0 \\
    -1 & 2 & -1 & 0 \\
    -1 & -1 & 3 & -1 \\
    0 & 0 & -1 & 1
    \end{pmatrix}$

#### 2.4. The Normalized Laplacian ($L_{sym}$ or $\mathcal{L}_{sym}$)

This version is obtained by normalizing the combinatorial Laplacian. It's particularly useful for understanding random walks and spectral clustering.

*   **Definition:** The symmetric normalized Laplacian $L_{sym}$ is defined as:
    $L_{sym} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} A D^{-1/2}$

    where $D^{-1/2}$ is a diagonal matrix with $(D^{-1/2})_{ii} = 1/\sqrt{\text{deg}(i)}$.

*   **Properties:**
    *   $L_{sym}$ is also symmetric and positive semi-definite.
    *   The eigenvalues of $L_{sym}$ are between 0 and 2.
    *   The diagonal entries are $1 - A_{ii}/\text{deg}(i) = 1$ (since $A_{ii}=0$).
    *   Off-diagonal entries $L_{sym, ij} = -1/\sqrt{\text{deg}(i)\text{deg}(j)}$ if $(i,j) \in E$.

*   **Example (using the same graph as above):**

    $D^{-1/2} = \begin{pmatrix}
    1/\sqrt{2} & 0 & 0 & 0 \\
    0 & 1/\sqrt{2} & 0 & 0 \\
    0 & 0 & 1/\sqrt{3} & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}$

    $D^{-1/2} A D^{-1/2} = \begin{pmatrix}
    1/\sqrt{2} & 0 & 0 & 0 \\
    0 & 1/\sqrt{2} & 0 & 0 \\
    0 & 0 & 1/\sqrt{3} & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix} \begin{pmatrix}
    0 & 1 & 1 & 0 \\
    1 & 0 & 1 & 0 \\
    1 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix} \begin{pmatrix}
    1/\sqrt{2} & 0 & 0 & 0 \\
    0 & 1/\sqrt{2} & 0 & 0 \\
    0 & 0 & 1/\sqrt{3} & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}$

    $D^{-1/2} A D^{-1/2} = \begin{pmatrix}
    0 & 1/\sqrt{2} & 1/\sqrt{2} & 0 \\
    1/\sqrt{2} & 0 & 1/\sqrt{2} & 0 \\
    1/\sqrt{3} & 1/\sqrt{3} & 0 & 1/\sqrt{3} \\
    0 & 0 & 1 & 0
    \end{pmatrix} \begin{pmatrix}
    1/\sqrt{2} & 0 & 0 & 0 \\
    0 & 1/\sqrt{2} & 0 & 0 \\
    0 & 0 & 1/\sqrt{3} & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix} = \begin{pmatrix}
    0 & 1/2 & 1/\sqrt{6} & 0 \\
    1/2 & 0 & 1/\sqrt{6} & 0 \\
    1/\sqrt{6} & 1/\sqrt{6} & 0 & 1/\sqrt{3} \\
    0 & 0 & 1/\sqrt{3} & 0
    \end{pmatrix}$

    $L_{sym} = I - D^{-1/2} A D^{-1/2} = \begin{pmatrix}
    1 & -1/2 & -1/\sqrt{6} & 0 \\
    -1/2 & 1 & -1/\sqrt{6} & 0 \\
    -1/\sqrt{6} & -1/\sqrt{6} & 1 & -1/\sqrt{3} \\
    0 & 0 & -1/\sqrt{3} & 1
    \end{pmatrix}$

#### 2.5. The Random Walk Laplacian ($L_{rw}$ or $\mathcal{L}_{rw}$)

This Laplacian is related to the transition probabilities of a random walk on the graph.

*   **Definition:** The random walk Laplacian $L_{rw}$ is defined as:
    $L_{rw} = D^{-1} L = I - D^{-1} A$

*   **Properties:**
    *   The diagonal entries are $1 - A_{ii}/\text{deg}(i) = 1$.
    *   Off-diagonal entries $L_{rw, ij} = -1/\text{deg}(i)$ if $(i,j) \in E$.
    *   The rows sum to zero, but columns might not.
    *   The eigenvalues of $L_{rw}$ are related to the stationary distribution of a random walk.

*   **Example (using the same graph as above):**

    $D^{-1} = \begin{pmatrix}
    1/2 & 0 & 0 & 0 \\
    0 & 1/2 & 0 & 0 \\
    0 & 0 & 1/3 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}$

    $D^{-1} A = \begin{pmatrix}
    1/2 & 0 & 0 & 0 \\
    0 & 1/2 & 0 & 0 \\
    0 & 0 & 1/3 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix} \begin{pmatrix}
    0 & 1 & 1 & 0 \\
    1 & 0 & 1 & 0 \\
    1 & 1 & 0 & 1 \\
    0 & 0 & 1 & 0
    \end{pmatrix} = \begin{pmatrix}
    0 & 1/2 & 1/2 & 0 \\
    1/2 & 0 & 1/2 & 0 \\
    1/3 & 1/3 & 0 & 1/3 \\
    0 & 0 & 1 & 0
    \end{pmatrix}$

    $L_{rw} = I - D^{-1} A = \begin{pmatrix}
    1 & -1/2 & -1/2 & 0 \\
    -1/2 & 1 & -1/2 & 0 \\
    -1/3 & -1/3 & 1 & -1/3 \\
    0 & 0 & -1 & 1
    \end{pmatrix}$

---

### 3. Key Properties of Graph Laplacians (Focus on Combinatorial Laplacian $L$)

#### 3.1. Eigenvalues and Eigenvectors

*   **Eigenvalue Decomposition:** For any graph Laplacian $L$, we can write $L = U \Lambda U^T$, where $U$ is an orthogonal matrix whose columns are the eigenvectors of $L$, and $\Lambda$ is a diagonal matrix containing the corresponding eigenvalues.

*   **Real and Symmetric:** Since $L$ is symmetric, its eigenvalues are real, and its eigenvectors corresponding to distinct eigenvalues are orthogonal.

*   **Positive Semi-Definite:** All eigenvalues $\lambda_i$ of $L$ are non-negative ($\lambda_i \ge 0$).

*   **The Smallest Eigenvalue ($\lambda_0$)**:
    *   **Value:** $\lambda_0 = 0$.
    *   **Eigenvector:** The eigenvector corresponding to $\lambda_0=0$ is the vector of all ones, $\mathbf{1} = (1, 1, ..., 1)^T$. This is because the rows of $L$ sum to zero: $(L\mathbf{1})_i = \sum_j L_{ij} \cdot 1 = \sum_j L_{ij} = 0$.

*   **The Number of Zero Eigenvalues (Nullity of L)**:
    *   **Property:** The nullity of $L$ (the number of zero eigenvalues) is equal to the number of connected components in the graph $G$.
    *   **Significance:** A graph is connected if and only if $\lambda_1 > 0$. The value of $\lambda_1$ (the second smallest eigenvalue) is known as the **algebraic connectivity** or **Fiedler value**. A larger $\lambda_1$ implies a more connected graph.

#### 3.2. Quadratic Form: $\mathbf{x}^T L \mathbf{x}$

The expression $\mathbf{x}^T L \mathbf{x}$ has a very intuitive meaning.

*   **Definition:** For any vector $\mathbf{x} \in \mathbb{R}^n$,
    $\mathbf{x}^T L \mathbf{x} = \sum_{(i,j) \in E} (\mathbf{x}_i - \mathbf{x}_j)^2$

*   **Proof:**
    $\mathbf{x}^T L \mathbf{x} = \mathbf{x}^T (D - A) \mathbf{x}$
    $= \mathbf{x}^T D \mathbf{x} - \mathbf{x}^T A \mathbf{x}$
    $= \sum_{i=1}^n \text{deg}(i) \mathbf{x}_i^2 - \sum_{i \neq j} A_{ij} \mathbf{x}_i \mathbf{x}_j$
    $= \sum_{i=1}^n \text{deg}(i) \mathbf{x}_i^2 - \sum_{(i,j) \in E, i \neq j} 2 \mathbf{x}_i \mathbf{x}_j$ (since $A_{ij}=1$ and $A_{ii}=0$)
    $= \sum_{i=1}^n \mathbf{x}_i^2 \sum_{j: (i,j) \in E} 1 - \sum_{(i,j) \in E} 2 \mathbf{x}_i \mathbf{x}_j$
    $= \sum_{(i,j) \in E} (\mathbf{x}_i^2 + \mathbf{x}_j^2) - \sum_{(i,j) \in E} 2 \mathbf{x}_i \mathbf{x}_j$
    $= \sum_{(i,j) \in E} (\mathbf{x}_i^2 - 2\mathbf{x}_i \mathbf{x}_j + \mathbf{x}_j^2)$
    $= \sum_{(i,j) \in E} (\mathbf{x}_i - \mathbf{x}_j)^2$

*   **Significance:** This quadratic form represents the **total variation** of the vector $\mathbf{x}$ over the edges of the graph. It measures how much the values in $\mathbf{x}$ change across adjacent vertices.

#### 3.3. Relationship to Spectral Clustering and Graph Cuts

The eigenvalues and eigenvectors of the Laplacian are intimately related to graph partitioning and minimum cut problems.

*   **Fiedler Vector:** The eigenvector corresponding to the second smallest eigenvalue ($\lambda_1$) is called the **Fiedler vector**. This vector often reveals important bisections of the graph.

*   **Spectral Bisection:** Values of the Fiedler vector can be used to partition the graph into two sets of vertices. Vertices with positive entries in the Fiedler vector form one partition, and those with negative entries form the other.

*   **Min-Cut:** The value of $\lambda_1$ is related to the **min-cut** of the graph. Specifically, the **Cheeger inequality** connects the algebraic connectivity to the graph's edge expansion.

#### 3.4. Properties of Normalized Laplacians

*   **Eigenvalues of $L_{sym}$:** $0 = \mu_0 \le \mu_1 \le \dots \le \mu_{n-1} \le 2$.
*   **Eigenvector $\mathbf{v}_0$ for $L_{sym}$:** The eigenvector corresponding to $\mu_0=0$ is $\mathbf{v}_0 = D^{1/2} \mathbf{1}$. This is because $(L_{sym} D^{1/2} \mathbf{1})_i = \sum_j (L_{sym})_{ij} (D^{1/2} \mathbf{1})_j = \sum_j (L_{sym})_{ij} \sqrt{\text{deg}(j)}$. The row sums of $L_{sym}$ are not generally zero, but $\mathbf{1}^T L_{sym} \mathbf{1} = 0$.

#### 3.5. Properties of Random Walk Laplacian ($L_{rw}$)

*   **Eigenvalues of $L_{rw}$:** $0 = \nu_0 \le \nu_1 \le \dots \le \nu_{n-1}$.
*   **Eigenvector $\mathbf{v}_0$ for $L_{rw}$:** The eigenvector corresponding to $\nu_0=0$ is $\mathbf{v}_0 = \mathbf{1}$. This is because the rows of $L_{rw}$ sum to zero.
*   **Stationary Distribution:** The stationary distribution of a random walk on a graph is related to the right eigenvectors of the transition matrix $P = D^{-1}A$. The eigenvalues of $L_{rw}$ are $1-\lambda_i(D^{-1}A)$, where $\lambda_i(D^{-1}A)$ are the eigenvalues of $D^{-1}A$. The stationary distribution is the left eigenvector of $P$ corresponding to the eigenvalue 1.

---

### 4. Important Points to Remember

*   **Laplacians capture connectivity:** The eigenvalues, especially the smallest ones, reveal information about how connected a graph is.
*   **$\lambda_0=0$ always:** The smallest eigenvalue of any Laplacian is zero, and its eigenvector is the all-ones vector for $L$ and $L_{rw}$.
*   **Nullity = Connected Components:** The number of zero eigenvalues directly indicates the number of connected components.
*   **$\lambda_1 > 0$ for connected graphs:** A graph is connected if and only if its second smallest eigenvalue is positive.
*   **Quadratic Form:** $\mathbf{x}^T L \mathbf{x}$ is the sum of squared differences of vector values across edges. This is crucial for understanding graph partitioning.
*   **Normalized Laplacians:** Useful for probability-based analyses (random walks) and spectral clustering, as their eigenvalues are bounded.
*   **Fiedler Vector:** The eigenvector for $\lambda_1$ is a powerful tool for graph bipartitioning.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the following graph:

```
1 -- 2
|    |
4 -- 3
```

a) Write down its adjacency matrix ($A$).
b) Write down its degree matrix ($D$).
c) Compute the combinatorial Laplacian ($L = D - A$).
d) Find the eigenvalues of $L$.
e) Determine if the graph is connected.

**Question 2:**
For a graph with $n$ vertices and no edges (an empty graph):
a) What is the adjacency matrix?
b) What is the degree matrix?
c) What is the combinatorial Laplacian?
d) What are its eigenvalues and eigenvectors?

**Question 3:**
Consider the path graph $P_3$ with vertices {1, 2, 3} and edges {(1,2), (2,3)}.
a) Compute the combinatorial Laplacian $L$.
b) Compute the normalized Laplacian $L_{sym}$.
c) Compute the random walk Laplacian $L_{rw}$.
d) Verify that $\mathbf{x}^T L \mathbf{x} = \sum_{(i,j) \in E} (\mathbf{x}_i - \mathbf{x}_j)^2$ for an arbitrary vector $\mathbf{x} = (x_1, x_2, x_3)^T$.

**Question 4:**
Let $G$ be a graph with $k$ connected components. What can you say about the eigenvalues of its combinatorial Laplacian $L$? Specifically, how many eigenvalues are equal to zero?

---

### 6. Answers to Practice Questions

**Answer 1:**
Graph vertices: {1, 2, 3, 4}, Edges: {(1,2), (2,3), (3,4), (4,1)} (This is a cycle graph $C_4$)

a) Adjacency Matrix $A$:
$A = \begin{pmatrix}
0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0
\end{pmatrix}$

b) Degree Matrix $D$:
All vertices have degree 2.
$D = \begin{pmatrix}
2 & 0 & 0 & 0 \\
0 & 2 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 2
\end{pmatrix}$

c) Combinatorial Laplacian $L$:
$L = D - A = \begin{pmatrix}
2 & -1 & 0 & -1 \\
-1 & 2 & -1 & 0 \\
0 & -1 & 2 & -1 \\
-1 & 0 & -1 & 2
\end{pmatrix}$

d) Eigenvalues of $L$ for $C_4$:
The eigenvalues of the Laplacian of a cycle graph $C_n$ are $2 - 2\cos(2\pi k / n)$ for $k = 0, 1, \dots, n-1$.
For $n=4$:
*   $k=0$: $2 - 2\cos(0) = 2 - 2(1) = 0$
*   $k=1$: $2 - 2\cos(\pi/2) = 2 - 2(0) = 2$
*   $k=2$: $2 - 2\cos(\pi) = 2 - 2(-1) = 4$
*   $k=3$: $2 - 2\cos(3\pi/2) = 2 - 2(0) = 2$
So the eigenvalues are $\{0, 2, 2, 4\}$.

e) Connectedness:
Since there is only one eigenvalue equal to zero ($\lambda_0 = 0$) and the next smallest eigenvalue ($\lambda_1 = 2$) is positive, the graph is connected.

**Answer 2:**
For a graph with $n$ vertices and no edges:

a) Adjacency Matrix: $A$ is the $n \times n$ zero matrix.
$A = \begin{pmatrix}
0 & 0 & \dots & 0 \\
0 & 0 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & 0
\end{pmatrix}$

b) Degree Matrix: All vertices have degree 0.
$D = \begin{pmatrix}
0 & 0 & \dots & 0 \\
0 & 0 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & 0
\end{pmatrix}$

c) Combinatorial Laplacian: $L = D - A = \mathbf{0}$ (the zero matrix).

d) Eigenvalues and Eigenvectors:
Since $L$ is the zero matrix, every vector is an eigenvector with an eigenvalue of 0. Thus, there are $n$ linearly independent eigenvectors, all with eigenvalue 0. The set of standard basis vectors $\{e_1, e_2, \dots, e_n\}$ forms a basis for the eigenspace.

**Answer 3:**
Path graph $P_3$: Vertices {1, 2, 3}, Edges {(1,2), (2,3)}.

a) Combinatorial Laplacian $L$:
Degrees: deg(1)=1, deg(2)=2, deg(3)=1.
$A = \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}$, $D = \begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 1
\end{pmatrix}$
$L = D - A = \begin{pmatrix}
1 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix}$

b) Normalized Laplacian $L_{sym}$:
$D^{-1/2} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/\sqrt{2} & 0 \\
0 & 0 & 1
\end{pmatrix}$
$D^{-1/2} A D^{-1/2} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/\sqrt{2} & 0 \\
0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/\sqrt{2} & 0 \\
0 & 0 & 1
\end{pmatrix} = \begin{pmatrix}
0 & 1 & 0 \\
1/\sqrt{2} & 0 & 1/\sqrt{2} \\
0 & 1 & 0
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/\sqrt{2} & 0 \\
0 & 0 & 1
\end{pmatrix} = \begin{pmatrix}
0 & 1 & 0 \\
1/\sqrt{2} & 0 & 1/\sqrt{2} \\
0 & 1/\sqrt{2} & 0
\end{pmatrix}$
$L_{sym} = I - D^{-1/2} A D^{-1/2} = \begin{pmatrix}
1 & -1 & 0 \\
-1/\sqrt{2} & 1 & -1/\sqrt{2} \\
0 & -1/\sqrt{2} & 1
\end{pmatrix}$

c) Random Walk Laplacian $L_{rw}$:
$D^{-1} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/2 & 0 \\
0 & 0 & 1
\end{pmatrix}$
$D^{-1} A = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1/2 & 0 \\
0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix} = \begin{pmatrix}
0 & 1 & 0 \\
1/2 & 0 & 1/2 \\
0 & 1 & 0
\end{pmatrix}$
$L_{rw} = I - D^{-1} A = \begin{pmatrix}
1 & -1 & 0 \\
-1/2 & 1 & -1/2 \\
0 & -1 & 1
\end{pmatrix}$

d) Verification of $\mathbf{x}^T L \mathbf{x}$:
$\mathbf{x}^T L \mathbf{x} = \begin{pmatrix} x_1 & x_2 & x_3 \end{pmatrix} \begin{pmatrix}
1 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 1
\end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$
$= \begin{pmatrix} x_1 & x_2 & x_3 \end{pmatrix} \begin{pmatrix} x_1 - x_2 \\ -x_1 + 2x_2 - x_3 \\ -x_2 + x_3 \end{pmatrix}$
$= x_1(x_1 - x_2) + x_2(-x_1 + 2x_2 - x_3) + x_3(-x_2 + x_3)$
$= x_1^2 - x_1x_2 - x_1x_2 + 2x_2^2 - x_2x_3 - x_2x_3 + x_3^2$
$= x_1^2 + 2x_2^2 + x_3^2 - 2x_1x_2 - 2x_2x_3$

Now, let's compute $\sum_{(i,j) \in E} (\mathbf{x}_i - \mathbf{x}_j)^2$:
Edges are (1,2) and (2,3).
For (1,2): $(x_1 - x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2$
For (2,3): $(x_2 - x_3)^2 = x_2^2 - 2x_2x_3 + x_3^2$
Sum = $(x_1^2 - 2x_1x_2 + x_2^2) + (x_2^2 - 2x_2x_3 + x_3^2)$
= $x_1^2 + 2x_2^2 + x_3^2 - 2x_1x_2 - 2x_2x_3$
This matches $\mathbf{x}^T L \mathbf{x}$.

**Answer 4:**
If a graph $G$ has $k$ connected components, its combinatorial Laplacian $L$ will have exactly $k$ eigenvalues equal to zero. The eigenvectors corresponding to these zero eigenvalues form a basis for the space spanned by indicator vectors of the connected components. For example, if $C_1, C_2, \dots, C_k$ are the vertex sets of the connected components, then vectors like $(1, \dots, 1, 0, \dots, 0)^T$ (where the first $k_1$ entries are 1 and the rest are 0, indicating membership in the first component), and so on, are eigenvectors with eigenvalue 0.

---

This concludes the notes for Graph Laplacians: Definition and Properties. Remember to practice these concepts with different graph structures!
