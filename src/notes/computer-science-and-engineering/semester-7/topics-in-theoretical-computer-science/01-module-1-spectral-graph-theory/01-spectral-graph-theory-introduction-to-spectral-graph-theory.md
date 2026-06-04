---
title: "Spectral Graph Theory - Introduction to Spectral Graph Theory"
subject: "TOPICS IN THEORETICAL COMPUTER SCIENCE"
module: "Module 1: Spectral Graph Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c3f8"
status: "completed"
scrapedAt: "2026-05-20T17:11:47.276Z"
---
# Topics in Theoretical Computer Science: Module 1: Spectral Graph Theory

## Topic: Spectral Graph Theory - Introduction to Spectral Graph Theory

### 1. Introduction to Spectral Graph Theory

Spectral Graph Theory is a subfield of graph theory that studies the properties of graphs by analyzing their associated matrices, most notably the **adjacency matrix** and the **Laplacian matrix**. The "spectrum" refers to the set of eigenvalues of these matrices. This field connects graph structures to linear algebra, allowing us to derive combinatorial properties of graphs from algebraic properties of their matrices.

### Learning Outcomes Covered:

*   **Understanding the foundational concepts of spectral graph theory, including adjacency matrix, Laplacian matrix, and their eigenvalues.**
*   **Relating the eigenvalues of graph matrices to fundamental graph properties such as connectivity, expansion, and robustness.**
*   **Exploring the use of spectral methods for graph partitioning, clustering, and community detection.**
*   **Understanding the significance of random walks on graphs and their connection to spectral properties.**
*   **Grasping the basics of spectral embeddings and their applications.**

---

### 2. Key Concepts and Definitions

#### 2.1. Graph Representation using Matrices

A graph $G = (V, E)$ with $n$ vertices can be represented by matrices.

*   **Adjacency Matrix ($A$)**:
    *   An $n \times n$ matrix where $A_{ij} = 1$ if there is an edge between vertex $i$ and vertex $j$, and $A_{ij} = 0$ otherwise.
    *   For undirected graphs, $A$ is symmetric ($A = A^T$).
    *   For simple graphs (no self-loops), the diagonal elements are zero ($A_{ii} = 0$).

    **Example**:
    Consider a path graph $P_3$ with vertices $\{1, 2, 3\}$ and edges $\{(1,2), (2,3)\}$.
    The adjacency matrix is:
    $$
    A = \begin{pmatrix}
    0 & 1 & 0 \\
    1 & 0 & 1 \\
    0 & 1 & 0
    \end{pmatrix}
    $$

*   **Degree Matrix ($D$)**:
    *   An $n \times n$ diagonal matrix where $D_{ii}$ is the degree of vertex $i$ (the number of edges incident to it), and $D_{ij} = 0$ for $i \neq j$.

    **Example (for $P_3$ above)**:
    Degrees: deg(1)=1, deg(2)=2, deg(3)=1
    $$
    D = \begin{pmatrix}
    1 & 0 & 0 \\
    0 & 2 & 0 \\
    0 & 0 & 1
    \end{pmatrix}
    $$

*   **Laplacian Matrix ($L$)**:
    *   Defined as $L = D - A$.
    *   Properties:
        *   $L$ is always symmetric for undirected graphs.
        *   The diagonal elements are $L_{ii} = \text{deg}(i)$.
        *   Off-diagonal elements are $L_{ij} = -1$ if there's an edge between $i$ and $j$, and $0$ otherwise.
        *   The sum of each row (and column) is zero.
        *   $L$ is positive semi-definite.

    **Example (for $P_3$ above)**:
    $$
    L = D - A = \begin{pmatrix}
    1 & 0 & 0 \\
    0 & 2 & 0 \\
    0 & 0 & 1
    \end{pmatrix} - \begin{pmatrix}
    0 & 1 & 0 \\
    1 & 0 & 1 \\
    0 & 1 & 0
    \end{pmatrix} = \begin{pmatrix}
    1 & -1 & 0 \\
    -1 & 2 & -1 \\
    0 & -1 & 1
    \end{pmatrix}
    $$

#### 2.2. Eigenvalues and Eigenvectors

*   For a square matrix $M$, a non-zero vector $v$ is an eigenvector if $Mv = \lambda v$ for some scalar $\lambda$.
*   The scalar $\lambda$ is the corresponding eigenvalue.
*   The set of all eigenvalues of a matrix is its **spectrum**.

#### 2.3. Eigenvalues of the Adjacency Matrix ($A$)

*   **Properties**:
    *   For an undirected graph, eigenvalues are real.
    *   If $\lambda$ is an eigenvalue, then $-\lambda$ is also an eigenvalue (due to the symmetry of $A$).
    *   The sum of eigenvalues is always 0 (trace of $A$ is 0 for simple graphs).
    *   The largest eigenvalue, $\lambda_1$, is related to the maximum degree of the graph. For a connected graph, $\lambda_1 \ge \sqrt{\Delta}$, where $\Delta$ is the maximum degree.
    *   The smallest eigenvalue, $\lambda_n$, is related to the connectivity of the graph.

#### 2.4. Eigenvalues of the Laplacian Matrix ($L$)

*   **Properties**:
    *   All eigenvalues $\mu_i$ are non-negative ($L$ is positive semi-definite).
    *   The eigenvalues are real and can be ordered: $0 = \mu_1 \le \mu_2 \le \dots \le \mu_n$.
    *   **The smallest eigenvalue $\mu_1$ is always 0.** An eigenvector corresponding to $\mu_1=0$ is the all-ones vector $\mathbf{1} = (1, 1, \dots, 1)^T$. This is because $\mathbf{1}^T L = \mathbf{0}^T$.
    *   **The multiplicity of the eigenvalue 0 is equal to the number of connected components in the graph.** For a connected graph, $\mu_1=0$ is a simple eigenvalue (multiplicity 1).
    *   The **algebraic connectivity** (or **Fiedler value**) is the second smallest eigenvalue, $\mu_2$. This is a crucial spectral property.

---

### 3. Relating Eigenvalues to Graph Properties

#### 3.1. Connectivity

*   **Laplacian Eigenvalues and Connectivity**:
    *   A graph is connected if and only if $\mu_2 > 0$.
    *   The value of $\mu_2$ provides a measure of how "well-connected" the graph is. A larger $\mu_2$ generally indicates better connectivity.
    *   **Cheeger's Inequality**: Connects the expansion properties of a graph to its Fiedler value. For a graph $G$, the Cheeger constant $h(G)$ is defined as $h(G) = \min_{S \subset V, 1 \le |S| \le n/2} \frac{|\delta(S)|}{|S|}$, where $\delta(S)$ is the set of edges with one endpoint in $S$ and the other outside $S$. Cheeger's inequality states:
        $$
        \frac{\mu_2}{2 \Delta} \le h(G) \le \sqrt{2 \Delta \mu_2}
        $$
        where $\Delta$ is the maximum degree. This shows that a large Fiedler value implies good expansion properties.

*   **Adjacency Eigenvalues and Connectivity**:
    *   For connected graphs, the largest eigenvalue $\lambda_1$ is typically related to the average degree.
    *   The **spectral gap** ($\lambda_1 - \lambda_2$ for undirected graphs) can also indicate connectivity and mixing properties of random walks. A larger gap often suggests better connectivity.

#### 3.2. Graph Expansion

*   **Expansion** is a measure of how "spread out" the graph is, i.e., how many edges cross any partition of the vertex set.
*   The **Fiedler value ($\mu_2$)** and the **Cheeger constant** are directly related to expansion. Graphs with high expansion are often called expander graphs.

#### 3.3. Robustness

*   Robustness can be thought of as how well the graph maintains its connectivity or other properties when vertices or edges are removed.
*   Spectral properties, particularly the eigenvalues of the Laplacian, can provide insights into robustness. For instance, a graph with a larger $\mu_2$ might be more robust to vertex failures.

---

### 4. Spectral Methods for Graph Partitioning and Clustering

Spectral methods are powerful tools for dividing a graph into smaller, well-connected subgraphs. This is essential for tasks like partitioning large networks or finding communities.

#### 4.1. Graph Partitioning

*   **Goal**: Divide the vertices $V$ into $k$ disjoint sets $V_1, \dots, V_k$ such that the number of edges between these sets (the "cut") is minimized.
*   **The Fiedler Vector (Eigenvector of $\mu_2$)**: The eigenvector $v_2$ corresponding to the second smallest eigenvalue $\mu_2$ of the Laplacian matrix provides information about the best partition of a graph into two sets. The signs of the entries in $v_2$ can be used to assign vertices to one of two partitions. Vertices with positive entries go to one set, and those with negative entries go to the other.
*   **Recursive Partitioning**: This process can be applied recursively to find partitions into more than two sets.

#### 4.2. Clustering and Community Detection

*   **Goal**: Identify groups of vertices that are more densely connected to each other than to vertices outside their group.
*   **Spectral Clustering**: A popular algorithm that uses the eigenvectors of the Laplacian (or normalized Laplacian) to embed the graph into a lower-dimensional space. Clustering algorithms (like k-means) are then applied to these embedded points.
    *   **K-means on Eigenvectors**: For $k$ clusters, one typically uses the $k$ eigenvectors corresponding to the $k$ smallest non-zero eigenvalues. These eigenvectors form the columns of a matrix. The rows of this matrix (representing each vertex's embedding) are then clustered using k-means.

---

### 5. Random Walks on Graphs and Spectral Properties

*   **Random Walk**: A process that moves from a vertex to an adjacent vertex with a certain probability.
*   **Transition Matrix ($P$)**: For a random walk on an undirected graph, the transition matrix $P$ is defined as $P = D^{-1}A$, where $D$ is the degree matrix. $P_{ij} = 1/\text{deg}(i)$ if $(i,j) \in E$, and $0$ otherwise.
*   **Stationary Distribution**: As a random walk progresses, the probability distribution of being at each vertex converges to a stationary distribution $\pi$. For a connected, undirected graph, the stationary distribution is proportional to the degrees: $\pi_i = \text{deg}(i) / (2|E|)$.
*   **Mixing Rate**: The rate at which the random walk converges to its stationary distribution. This is related to the eigenvalues of the transition matrix $P$.
    *   The eigenvalues of $P$ are related to the eigenvalues of $A$ by $\lambda_i(P) = \lambda_i(A) / \sqrt{\text{deg}(i) \text{deg}(j)}$ (for normalized Laplacian related analysis) or more directly $\lambda_i(P) = \lambda_i(A) / \lambda_1(A)$ if normalized appropriately.
    *   The second largest eigenvalue of $P$, denoted $\rho$, is a key indicator of mixing. The smaller $\rho$ is (closer to 0), the faster the random walk mixes.
    *   **Spectral Gap of $P$**: $1 - \rho$. A larger spectral gap implies faster mixing. This is directly related to the Fiedler value of the Laplacian.

---

### 6. Spectral Embeddings

*   **Goal**: Represent vertices of a graph as points (vectors) in a lower-dimensional Euclidean space, preserving some notion of graph structure.
*   **Laplacian Eigenmaps**: A method that uses the eigenvectors of the Laplacian matrix to create embeddings. For a $d$-dimensional embedding, one uses the $d$ eigenvectors corresponding to the $d$ smallest eigenvalues (excluding the first one for connected graphs).
*   **Applications**:
    *   **Visualization**: Plotting vertices in 2D or 3D.
    *   **Machine Learning**: As features for downstream tasks like classification or regression.
    *   **Dimensionality Reduction**: Compressing graph information.

---

### 7. Practice Questions and Exercises

**Question 1**:
Consider a complete graph $K_3$ with vertices $\{1, 2, 3\}$ and edges $\{(1,2), (1,3), (2,3)\}$.
(a) Write down its adjacency matrix $A$.
(b) Write down its degree matrix $D$.
(c) Write down its Laplacian matrix $L$.
(d) Calculate the eigenvalues of $A$.
(e) Calculate the eigenvalues of $L$.
(f) Is the graph connected? How do the Laplacian eigenvalues confirm this?

**Answer 1**:
(a) Adjacency Matrix:
$$
A = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0
\end{pmatrix}
$$
(b) Degree Matrix: Each vertex has degree 2.
$$
D = \begin{pmatrix}
2 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 2
\end{pmatrix}
$$
(c) Laplacian Matrix:
$$
L = D - A = \begin{pmatrix}
2 & -1 & -1 \\
-1 & 2 & -1 \\
-1 & -1 & 2
\end{pmatrix}
$$
(d) Eigenvalues of $A$: For $K_n$, the eigenvalues of $A$ are $n-1$ (with multiplicity 1) and $-1$ (with multiplicity $n-1$). For $K_3$: $2$ (multiplicity 1) and $-1$ (multiplicity 2).
Let's verify:
$A \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \\ 2 \end{pmatrix} = 2 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ (eigenvalue 2)
$A \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} = -1 \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ (eigenvalue -1)
$A \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = -1 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ (eigenvalue -1)

(e) Eigenvalues of $L$: For $K_n$, the eigenvalues of $L$ are $n$ (with multiplicity $n-1$) and $0$ (with multiplicity 1). For $K_3$: $3$ (multiplicity 2) and $0$ (multiplicity 1).
Let's verify:
$L \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} = 0 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ (eigenvalue 0)
$L \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ -3 \\ 0 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ (eigenvalue 3)
$L \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \\ -3 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ (eigenvalue 3)

(f) The graph is connected. The fact that the second smallest eigenvalue of $L$ is $\mu_2=3 > 0$ confirms its connectivity. A connected graph has $\mu_2 > 0$.

**Question 2**:
What does the second smallest eigenvalue of the Laplacian matrix ($\mu_2$) measure?

**Answer 2**:
The second smallest eigenvalue of the Laplacian matrix, $\mu_2$, is known as the **algebraic connectivity** or the **Fiedler value**. It measures how well-connected the graph is. A larger $\mu_2$ indicates better connectivity and expansion properties for the graph. For a connected graph, $\mu_2 > 0$, and for disconnected graphs, $\mu_2 = 0$.

**Question 3**:
Explain briefly how the Fiedler vector can be used for graph partitioning.

**Answer 3**:
The Fiedler vector is the eigenvector corresponding to the second smallest eigenvalue ($\mu_2$) of the Laplacian matrix. For a connected graph, this eigenvector's entries vary the most across the "cut" that best separates the graph into two components. By looking at the signs of the entries in the Fiedler vector, vertices can be assigned to one of two partitions: those with positive entries form one partition, and those with negative entries form the other. This partitioning aims to minimize the number of edges cut.

---

### 8. Important Points to Remember

*   **Spectral Graph Theory**: Bridges graph theory and linear algebra via matrix eigenvalues.
*   **Adjacency Matrix ($A$)**: $A_{ij}=1$ if edge $(i,j)$ exists, $0$ otherwise.
*   **Laplacian Matrix ($L = D - A$)**: Key for spectral analysis. Its eigenvalues reveal structural properties.
*   **Laplacian Eigenvalues ($0 = \mu_1 \le \mu_2 \le \dots \le \mu_n$)**:
    *   $\mu_1 = 0$ for all graphs. Multiplicity of $\mu_1=0$ equals the number of connected components.
    *   $\mu_2 > 0$ if and only if the graph is connected.
    *   **Algebraic Connectivity ($\mu_2$)**: A measure of how well-connected the graph is.
*   **Fiedler Vector**: Eigenvector corresponding to $\mu_2$. Used for graph partitioning and embedding.
*   **Cheeger's Inequality**: Relates $\mu_2$ to the expansion of a graph.
*   **Random Walks**: Mixing time is related to the spectral gap of the transition matrix, which is connected to Laplacian eigenvalues.
*   **Spectral Clustering**: Uses graph embeddings derived from eigenvectors for clustering.
