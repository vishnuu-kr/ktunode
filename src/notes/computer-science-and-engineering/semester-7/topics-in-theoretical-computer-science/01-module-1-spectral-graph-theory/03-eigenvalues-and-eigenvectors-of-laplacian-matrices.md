---
title: "Eigenvalues and Eigenvectors of Laplacian matrices"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 1: Spectral Graph Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3fa"
status: "completed"
scrapedAt: "2026-05-20T17:11:48.875Z"
---
# TOPICS IN THEORETICAL COMPUTER SCIENCE
## Module 1: Spectral Graph Theory
### Topic: Eigenvalues and Eigenvectors of Laplacian Matrices

---

### **1. Introduction to Graph Laplacians**

**1.1 What is a Graph Laplacian?**

*   The Laplacian matrix of a graph is a matrix representation of the graph's connectivity. It's a fundamental tool in spectral graph theory, used to analyze graph properties through its eigenvalues and eigenvectors.
*   It's derived from the adjacency matrix ($A$) and the degree matrix ($D$) of a graph.

**1.2 Definitions**

*   **Adjacency Matrix ($A$):**
    *   For an unweighted graph with $n$ vertices, $A$ is an $n \times n$ matrix where $A_{ij} = 1$ if there's an edge between vertex $i$ and vertex $j$, and $A_{ij} = 0$ otherwise.
    *   For a weighted graph, $A_{ij}$ is the weight of the edge between $i$ and $j$, and 0 if no edge.
*   **Degree Matrix ($D$):**
    *   A diagonal matrix where $D_{ii}$ is the degree (or weighted degree) of vertex $i$. All off-diagonal elements are zero.
    *   $D_{ii} = \sum_{j} A_{ij}$.
*   **Laplacian Matrix ($L$):**
    *   Defined as $L = D - A$.
    *   For an unweighted graph:
        *   $L_{ii} = \text{degree of vertex } i$.
        *   $L_{ij} = -1$ if there's an edge between $i$ and $j$ ($i \neq j$).
        *   $L_{ij} = 0$ if there's no edge between $i$ and $j$ ($i \neq j$).

**1.3 Variations of the Laplacian**

*   **Unnormalized Laplacian ($L$):** $L = D - A$. This is the standard definition.
*   **Normalized Laplacian ($\mathcal{L}$):** Used to normalize the influence of vertex degrees.
    *   **Symmetric Normalized Laplacian ($\mathcal{L}_{sym}$):** $\mathcal{L}_{sym} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} A D^{-1/2}$.
    *   **Random Walk Normalized Laplacian ($\mathcal{L}_{rw}$):** $\mathcal{L}_{rw} = D^{-1} L = I - D^{-1} A$.

---

### **2. Properties of the Laplacian Matrix**

**2.1 Key Properties**

*   **Symmetry:** $L$ is always a symmetric matrix ($L^T = L$). This implies that its eigenvalues are real and its eigenvectors corresponding to distinct eigenvalues are orthogonal.
*   **Positive Semidefinite:** All eigenvalues of $L$ are non-negative ($\lambda_i \ge 0$).
*   **Row and Column Sums are Zero:** For any vertex $i$, the sum of its row (or column) in $L$ is zero.
    *   $\sum_{j} L_{ij} = \sum_{j} (D_{ij} - A_{ij}) = D_{ii} - \sum_{j} A_{ij} = D_{ii} - D_{ii} = 0$.
    *   This property is crucial for understanding the eigenvectors.

**2.2 The Eigenvalue $\lambda_0 = 0$**

*   **Existence:** The Laplacian matrix always has at least one eigenvalue equal to 0.
*   **Reason:** The fact that all row (and column) sums are zero means that the vector $\mathbf{1} = [1, 1, \ldots, 1]^T$ is in the null space of $L$.
    *   $L \mathbf{1} = (D-A)\mathbf{1}$.
    *   For each row $i$: $(L\mathbf{1})_i = \sum_{j} L_{ij} \cdot 1 = \sum_{j} L_{ij} = 0$.
    *   Thus, $L\mathbf{1} = 0 \cdot \mathbf{1}$, which means $\mathbf{1}$ is an eigenvector with eigenvalue 0.

**2.3 Number of Eigenvalues Equal to Zero: The Nullity**

*   **Theorem:** The number of eigenvalues of $L$ that are equal to zero is equal to the number of connected components in the graph.
    *   This is also known as the nullity of $L$.
*   **Connected Graph:** If a graph is connected, it has exactly one eigenvalue equal to 0.
*   **Disconnected Graph:** If a graph has $k$ connected components, it has exactly $k$ eigenvalues equal to 0.

**2.4 Eigenvectors and Graph Structure**

*   **Eigenvector for $\lambda_0 = 0$:** The eigenvector corresponding to the eigenvalue 0 is a constant vector for each connected component. For a connected graph, the eigenvector is proportional to $\mathbf{1}$.
*   **Fiedler Vector (Second Smallest Eigenvalue):**
    *   The eigenvector corresponding to the second smallest eigenvalue ($\lambda_1$) is called the Fiedler vector.
    *   It is particularly useful for graph partitioning and ordering. The values in the Fiedler vector can be used to "order" vertices, bringing similar vertices closer in the ordering.
    *   The smaller $\lambda_1$ is, the more "separable" the graph is into two components.

---

### **3. Eigenvalues and Eigenvectors: Detailed Properties and Interpretation**

**3.1 Eigenvalue Properties Summary**

*   Let $0 = \lambda_0 \le \lambda_1 \le \lambda_2 \le \ldots \le \lambda_{n-1}$ be the eigenvalues of $L$ in non-decreasing order.
*   **$\lambda_0 = 0$:** Always true. The corresponding eigenvector is $\mathbf{1}$.
*   **$\lambda_1$ (The spectral gap):**
    *   Indicates the "connectivity" of the graph.
    *   If $\lambda_1$ is close to 0, the graph is "nearly disconnected" or has a bottleneck.
    *   If $\lambda_1$ is large, the graph is well-connected.
    *   **Cheeger's Inequality:** Relates $\lambda_1$ to the *Cheeger constant* ($h(G)$) of a graph, which measures how "bottlenecked" the graph is.
        *   $h(G) \ge \frac{\lambda_1}{2 \cdot \text{max\_degree}}$ and $h(G) \le 2 \sqrt{\text{max\_degree}} \sqrt{\lambda_1}$.
        *   The Cheeger constant is defined as the minimum ratio of the size of a cut to the size of the smaller partition.
*   **$\lambda_i$ for $i > 1$:** Provide information about higher-order connectivity and structure.

**3.2 Eigenvector Properties Summary**

*   **Orthogonality:** Eigenvectors corresponding to distinct eigenvalues are orthogonal.
*   **Normalization:** Eigenvectors can be normalized to have unit length.
*   **Interpretation of Eigenvectors:**
    *   Eigenvectors of the Laplacian reveal partitions of the graph.
    *   Vertices with similar values in an eigenvector tend to be close in the graph.
    *   The Fiedler vector (for $\lambda_1$) is often used for bipartitioning. If the Fiedler vector has entries that are close to zero, this suggests a natural cut in the graph.

---

### **4. Examples**

**4.1 Example 1: A Simple Path Graph ($P_3$)**

*   Vertices: {1, 2, 3}
*   Edges: {(1, 2), (2, 3)}
*   Adjacency Matrix ($A$):
    $$ A = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix} $$
*   Degree Matrix ($D$):
    $$ D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix} $$
*   Laplacian Matrix ($L$):
    $$ L = D - A = \begin{pmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{pmatrix} $$

*   **Eigenvalues and Eigenvectors:**
    *   To find eigenvalues, solve $\det(L - \lambda I) = 0$.
    *   $\det \begin{pmatrix} 1-\lambda & -1 & 0 \\ -1 & 2-\lambda & -1 \\ 0 & -1 & 1-\lambda \end{pmatrix} = 0$
    *   $(1-\lambda)((2-\lambda)(1-\lambda) - (-1)(-1)) - (-1)((-1)(1-\lambda) - 0) = 0$
    *   $(1-\lambda)(2 - 3\lambda + \lambda^2 - 1) + (-1+\lambda) = 0$
    *   $(1-\lambda)(\lambda^2 - 3\lambda + 1) - 1 + \lambda = 0$
    *   $\lambda^2 - 3\lambda + 1 - \lambda^3 + 3\lambda^2 - \lambda - 1 + \lambda = 0$
    *   $-\lambda^3 + 4\lambda^2 - 3\lambda = 0$
    *   $-\lambda(\lambda^2 - 4\lambda + 3) = 0$
    *   $-\lambda(\lambda - 1)(\lambda - 3) = 0$
    *   **Eigenvalues:** $\lambda_0 = 0, \lambda_1 = 1, \lambda_2 = 3$.

*   **Eigenvectors:**
    *   **For $\lambda_0 = 0$:**
        *   Solve $L\mathbf{v} = 0\mathbf{v} = \mathbf{0}$.
        *   $\begin{pmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
        *   $v_1 - v_2 = 0 \implies v_1 = v_2$
        *   $-v_2 + 2v_2 - v_3 = 0 \implies v_2 = v_3$
        *   $-v_2 + v_3 = 0 \implies v_2 = v_3$
        *   So $v_1 = v_2 = v_3$. An eigenvector is $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$. (This is $\mathbf{1}$, as expected).
    *   **For $\lambda_1 = 1$:**
        *   Solve $(L - I)\mathbf{v} = \mathbf{0}$.
        *   $\begin{pmatrix} 0 & -1 & 0 \\ -1 & 1 & -1 \\ 0 & -1 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
        *   $-v_2 = 0 \implies v_2 = 0$
        *   $-v_1 + v_2 - v_3 = 0 \implies -v_1 + 0 - v_3 = 0 \implies v_1 = -v_3$.
        *   $-v_2 = 0 \implies v_2 = 0$.
        *   An eigenvector is $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$. This is the Fiedler vector. Notice vertex 2 has a value of 0, separating vertices 1 and 3.
    *   **For $\lambda_2 = 3$:**
        *   Solve $(L - 3I)\mathbf{v} = \mathbf{0}$.
        *   $\begin{pmatrix} -2 & -1 & 0 \\ -1 & -1 & -1 \\ 0 & -1 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
        *   $-2v_1 - v_2 = 0 \implies v_2 = -2v_1$
        *   $-v_1 - v_2 - v_3 = 0 \implies -v_1 - (-2v_1) - v_3 = 0 \implies v_1 - v_3 = 0 \implies v_1 = v_3$.
        *   $-v_2 - 2v_3 = 0 \implies -(-2v_1) - 2(v_1) = 0 \implies 2v_1 - 2v_1 = 0$.
        *   An eigenvector is $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$.

**4.2 Example 2: A Disconnected Graph (Two $K_2$ components)**

*   Vertices: {1, 2, 3, 4}
*   Edges: {(1, 2), (3, 4)}
*   Adjacency Matrix ($A$):
    $$ A = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix} $$
*   Degree Matrix ($D$):
    $$ D = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} $$
*   Laplacian Matrix ($L$):
    $$ L = D - A = \begin{pmatrix} 1 & -1 & 0 & 0 \\ -1 & 1 & 0 & 0 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & -1 & 1 \end{pmatrix} $$

*   **Eigenvalues and Eigenvectors:**
    *   The graph has two connected components. We expect two eigenvalues of 0.
    *   The matrix $L$ is block diagonal, so we can find eigenvalues for each block:
        *   Block 1: $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$. Eigenvalues: $\det \begin{pmatrix} 1-\lambda & -1 \\ -1 & 1-\lambda \end{pmatrix} = (1-\lambda)^2 - 1 = 1 - 2\lambda + \lambda^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda-2)$. Eigenvalues are 0 and 2.
        *   Block 2: $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$. Same eigenvalues: 0 and 2.
    *   **Eigenvalues of $L$:** $\{0, 0, 2, 2\}$. (Two eigenvalues of 0, as expected for two connected components).

*   **Eigenvectors:**
    *   **For $\lambda_0 = 0$ (first occurrence):**
        *   This eigenvector will be non-zero only in the first component.
        *   From Block 1: $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 = v_2$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   So, for $L$, an eigenvector is $\begin{pmatrix} 1 \\ 1 \\ 0 \\ 0 \end{pmatrix}$.
    *   **For $\lambda_0 = 0$ (second occurrence):**
        *   This eigenvector will be non-zero only in the second component.
        *   From Block 2: $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} v_3 \\ v_4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_3 = v_4$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        *   So, for $L$, an eigenvector is $\begin{pmatrix} 0 \\ 0 \\ 1 \\ 1 \end{pmatrix}$.
    *   These two eigenvectors are linearly independent and span the null space of $L$.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Consider a graph with 3 vertices and edges (1,2) and (1,3).
a) Write down the adjacency matrix ($A$) and the degree matrix ($D$).
b) Calculate the Laplacian matrix ($L$).
c) Find the eigenvalues and eigenvectors of $L$.
d) How many connected components does this graph have? Does your result match the number of zero eigenvalues?

**Question 2:**
Consider a complete graph $K_3$ (a triangle) with vertices {1, 2, 3} and edges {(1,2), (2,3), (3,1)}.
a) Calculate the Laplacian matrix ($L$).
b) Find the eigenvalues and eigenvectors of $L$.
c) Is the graph connected? How many zero eigenvalues do you expect?

**Question 3:**
Let $L$ be the Laplacian matrix of a connected graph $G$ with $n$ vertices. If $\mathbf{v}$ is an eigenvector of $L$ with eigenvalue $\lambda$, what can you say about the relationship between the values of $\mathbf{v}$ at adjacent vertices?

---

### **6. Answers to Practice Questions**

**Answer 1:**
a) Adjacency Matrix ($A$):
   $$ A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix} $$
   Degree Matrix ($D$):
   $$ D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} $$
b) Laplacian Matrix ($L = D - A$):
   $$ L = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix} $$
c) Eigenvalues and Eigenvectors:
   To find eigenvalues, solve $\det(L - \lambda I) = 0$:
   $\det \begin{pmatrix} 2-\lambda & -1 & -1 \\ -1 & 1-\lambda & 0 \\ -1 & 0 & 1-\lambda \end{pmatrix} = 0$
   $(2-\lambda)[(1-\lambda)^2 - 0] - (-1)[-(1-\lambda) - 0] + (-1)[0 - (-(1-\lambda))] = 0$
   $(2-\lambda)(1-\lambda)^2 + (1-\lambda) - (1-\lambda) = 0$
   $(2-\lambda)(1-\lambda)^2 = 0$
   This gives $\lambda = 2$ and $\lambda = 1$ (with multiplicity 2). Wait, let's recheck the determinant calculation.

   Correct determinant calculation:
   $(2-\lambda)((1-\lambda)(1-\lambda) - 0) - (-1)((-1)(1-\lambda) - 0) + (-1)(0 - (-1)(1-\lambda))$
   $(2-\lambda)(1-\lambda)^2 + (-1+\lambda) - (1-\lambda)$
   $(2-\lambda)(1-2\lambda+\lambda^2) -1+\lambda -1+\lambda$
   $2 - 4\lambda + 2\lambda^2 - \lambda + 2\lambda^2 - \lambda^3 - 2 + 2\lambda$
   $-\lambda^3 + 4\lambda^2 - 3\lambda = 0$
   $-\lambda(\lambda^2 - 4\lambda + 3) = 0$
   $-\lambda(\lambda-1)(\lambda-3) = 0$
   **Eigenvalues:** $\lambda_0 = 0, \lambda_1 = 1, \lambda_2 = 3$.

   Eigenvectors:
   *   **For $\lambda_0 = 0$:**
       Solve $L\mathbf{v} = \mathbf{0}$.
       $\begin{pmatrix} 2 & -1 & -1 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
       $2v_1 - v_2 - v_3 = 0$
       $-v_1 + v_2 = 0 \implies v_1 = v_2$
       $-v_1 + v_3 = 0 \implies v_1 = v_3$
       So $v_1 = v_2 = v_3$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
   *   **For $\lambda_1 = 1$:**
       Solve $(L-I)\mathbf{v} = \mathbf{0}$.
       $\begin{pmatrix} 1 & -1 & -1 \\ -1 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
       $-v_1 = 0 \implies v_1 = 0$
       $v_1 - v_2 - v_3 = 0 \implies 0 - v_2 - v_3 = 0 \implies v_2 = -v_3$.
       Eigenvector: $\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.
   *   **For $\lambda_2 = 3$:**
       Solve $(L-3I)\mathbf{v} = \mathbf{0}$.
       $\begin{pmatrix} -1 & -1 & -1 \\ -1 & -2 & 0 \\ -1 & 0 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
       $-v_1 - v_2 - v_3 = 0$
       $-v_1 - 2v_2 = 0 \implies v_1 = -2v_2$
       $-v_1 - 2v_3 = 0 \implies v_1 = 2v_3$
       So, $-2v_2 = 2v_3 \implies v_2 = -v_3$.
       Substitute into the first equation: $-(-2v_2) - v_2 - v_3 = 0 \implies 2v_2 - v_2 - v_3 = 0 \implies v_2 = v_3$.
       This implies $v_2 = -v_3$ and $v_2 = v_3$, so $v_2 = v_3 = 0$. Then $v_1 = 0$. This cannot be right, as eigenvectors for distinct eigenvalues must be non-zero. Let's re-solve:
       From $-v_1 - 2v_2 = 0 \implies v_1 = -2v_2$.
       From $-v_1 - 2v_3 = 0 \implies v_1 = -2v_3$.
       So, $v_2 = v_3$.
       Substitute into the first equation: $-v_1 - v_2 - v_3 = 0 \implies -v_1 - v_2 - v_2 = 0 \implies -v_1 - 2v_2 = 0$. This is consistent.
       Let $v_2 = 1$, then $v_3 = 1$, and $v_1 = -2$. Eigenvector: $\begin{pmatrix} -2 \\ 1 \\ 1 \end{pmatrix}$.

d) This graph has **one** connected component (vertex 1 is connected to 2 and 3). Your result of one zero eigenvalue matches this.

**Answer 2:**
a) For $K_3$, each vertex has degree 2.
   $$ A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}, \quad D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} $$
   Laplacian Matrix ($L = D - A$):
   $$ L = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix} $$
b) Eigenvalues and Eigenvectors:
   The sum of each row is 0, so $\lambda_0 = 0$ with eigenvector $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
   To find other eigenvalues, solve $\det(L - \lambda I) = 0$:
   $\det \begin{pmatrix} 2-\lambda & -1 & -1 \\ -1 & 2-\lambda & -1 \\ -1 & -1 & 2-\lambda \end{pmatrix} = 0$
   This is the Laplacian of $K_3$. The eigenvalues are $0, 3, 3$.
   *   **For $\lambda_0 = 0$:** $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
   *   **For $\lambda_1 = 3$:**
       Solve $(L-3I)\mathbf{v} = \mathbf{0}$:
       $\begin{pmatrix} -1 & -1 & -1 \\ -1 & -1 & -1 \\ -1 & -1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
       This implies $-v_1 - v_2 - v_3 = 0 \implies v_1 + v_2 + v_3 = 0$.
       Any two linearly independent vectors satisfying this will be eigenvectors. For example:
       $\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.
       These two eigenvectors are orthogonal to the $\lambda_0=0$ eigenvector and to each other.
c) The graph is connected. We expect one zero eigenvalue, which we found.

**Answer 3:**
For a connected graph, the eigenvector $\mathbf{v}$ corresponding to the smallest non-zero eigenvalue $\lambda_1$ (the Fiedler vector) has the property that its entries are non-zero. If the graph has edges $(i, j)$, the values of $\mathbf{v}$ at adjacent vertices $i$ and $j$ tend to be similar if the graph is well-connected. If $\lambda_1$ is small, indicating a near-disconnection, the values of the Fiedler vector might be similar within partitions but dissimilar between partitions. Specifically, for the Laplacian $L=D-A$, if $(i, j)$ is an edge, then $L_{ij} = -1$ (for unweighted graphs). The eigenvalue equation is $L\mathbf{v} = \lambda \mathbf{v}$. For $\lambda_0 = 0$, $L\mathbf{v} = \mathbf{0}$, meaning $D\mathbf{v} = A\mathbf{v}$. For any vertex $i$, $\text{deg}(i) v_i = \sum_{j \sim i} v_j$. For the $\lambda_0=0$ eigenvector (which is $\mathbf{1}$ for a connected graph), $n v_i = \sum_{j \sim i} v_j$. This is consistent with $v_i=1$. For other eigenvectors, the relationship is more complex and depends on the specific eigenvalue. However, a key interpretation is that eigenvectors of the Laplacian reveal "smooth" functions on the graph, and similar values indicate proximity or similar roles within the graph's structure.

---

### **7. Important Points to Remember**

*   **Laplacian $L = D - A$.**
*   **Symmetric, positive semidefinite.**
*   **All eigenvalues $\ge 0$.**
*   **Row and column sums are zero.**
*   **$\lambda_0 = 0$ always, with eigenvector $\mathbf{1}$.**
*   **Number of zero eigenvalues = number of connected components.**
*   **The spectral gap ($\lambda_1$) is a measure of graph connectivity.** Smaller $\lambda_1$ implies a more disconnected graph.
*   **The Fiedler vector (eigenvector for $\lambda_1$) is crucial for graph partitioning and ordering.**
*   **Eigenvectors reveal structural properties and partitions of the graph.**

---
