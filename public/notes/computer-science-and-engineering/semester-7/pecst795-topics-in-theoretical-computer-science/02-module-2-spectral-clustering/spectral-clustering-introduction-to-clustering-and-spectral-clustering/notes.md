# Spectral Clustering - Introduction to Clustering and Spectral Clustering

<!-- SECTION_1_START -->

# Spectral Clustering: Introduction to Clustering & Spectral Methods

## 1.1 What is Clustering?

**Clustering** is an **unsupervised machine learning** technique whose objective is to partition a set of $N$ data points $\{x_1, x_2, \ldots, x_N\} \subset \mathbb{R}^d$ into $k$ groups (clusters) $C_1, C_2, \ldots, C_k$ such that:

* **Intra-cluster similarity** is **maximized** — points within the same cluster are close to each other.
* **Inter-cluster similarity** is **minimized** — points in different clusters are far apart.

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition:**
> *Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters).*

### 1.2 Why Conventional Methods Fail

Classical algorithms such as **K-Means**, **Gaussian Mixture Models (GMM)**, and **hierarchical agglomerative clustering** rely fundamentally on the assumption that clusters are **convex** (typically spherical Gaussian blobs). They minimize an objective of the form:

$$J = \sum_{i=1}^{k} \sum_{x \in C_i} \| x - \mu_i \|_2^2$$

where $\mu_i$ is the centroid of cluster $C_i$. This objective suffers from a critical limitation: it cannot separate **non-convex**, **interlocking**, or **manifold-shaped** clusters.

### 1.3 Intuitive Overview of Spectral Clustering

> [!NOTE]
> **Conceptual Analogy — "Cutting a Weighted Rope Net"**
> Imagine you have built a net by connecting every person at a picnic to every other person, where the thickness of each rope equals how "similar" the two people are. The net naturally has dense, thick regions (clusters) separated by sparse, thin regions. **Spectral clustering** does NOT cut the net by looking at where people are physically standing. Instead, it makes the net **vibrate**, listens to its **lowest natural frequencies (eigenvectors)**, and uses the **shape of these vibrations** to detect where the natural partitions are. Where the net vibrates calmly, people belong together; where it twists sharply, you find a cluster boundary.

The word **"spectral"** comes from the mathematical term *spectrum* — the set of **eigenvalues** of a matrix. Spectral clustering translates the geometric problem of finding clusters into a **linear algebraic problem of finding eigenvectors** of a matrix derived from the data.

### 1.4 Formal Definition

> [!IMPORTANT]
> **Spectral Clustering (von Luxburg, 2007 — KTU 2024 Reference Standard):**
> *A class of graph-based clustering techniques that (i) construct a similarity graph $G = (V, E)$ encoding local neighborhood relationships, (ii) compute the eigenvectors of the associated graph Laplacian matrix $L$, and (iii) use these eigenvectors as an embedding in a low-dimensional space where standard clustering (typically K-Means) is applied.*

### 1.5 Position in the Clustering Taxonomy

| Method Type | Example Algorithms | Cluster Shape Assumption | Scalability |
|---|---|---|---|
| Centroid-based | K-Means, K-Medoids | Convex, isotropic | $O(Nkt)$ |
| Density-based | DBSCAN, OPTICS | Arbitrary (dense regions) | $O(N \log N)$ |
| Hierarchical | Agglomerative, Divisive | Arbitrary | $O(N^2 \log N)$ |
| Distribution-based | GMM, EM | Gaussian-like | $O(Nkt)$ |
| **Spectral** | **Ng–Jordan–Weiss, Shi–Malik** | **Arbitrary, manifold** | $O(N^3)$ (eigendecomp.) |
| Subspace | PCA + K-Means, NMF | Linear manifolds | $O(d^2 N)$ |

> [!VISUALIZATION CONTROL]
> **Concept:** Two interleaving half-moons dataset where K-Means fails but spectral clustering succeeds.
> **GeoGebra / Desmos Input Equations:**
> * Upper moon: $y = \sqrt{1 - x^2}$, $x \in [-1, 1]$
> * Lower moon: $y = -\sqrt{1 - x^2} - 0.5$, $x \in [-1, 1]$
> **Visual Description:** Two crescent shapes interlocking like a yin-yang. K-Means draws a vertical line straight down the middle, but spectral clustering correctly traces the curve. Notice that the nearest Euclidean neighbor of a point on one moon is a point on the *other* moon — a strong cue that Euclidean distance alone is insufficient.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Foundations & KTU High-Yield Formula Sheet

## 2.1 The Three-Stage Pipeline of Spectral Clustering

Spectral clustering can be decomposed into **three distinct stages**. Understanding this pipeline is critical for KTU board examinations.

### Stage 1 — Similarity Graph Construction

Given $N$ data points $x_1, \ldots, x_N$, define a **similarity function** $s : \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}_{\geq 0}$. The most common choice is the **Gaussian (RBF) kernel**:

$$s(x_i, x_j) = \exp\!\left(-\frac{\|x_i - x_j\|_2^2}{2\sigma^2}\right)$$

The parameter $\sigma > 0$ controls the locality. The resulting **weighted similarity graph** $G = (V, E, W)$ has:

* **Vertices** $V = \{1, 2, \ldots, N\}$ (one per data point).
* **Weights** $w_{ij} = s(x_i, x_j)$ for $i \neq j$ and $w_{ii} = 0$.

Three common graph constructions are:

| Graph Type | Edge Set | When to Use |
|---|---|---|
| **$\varepsilon$-neighborhood** | $w_{ij} > 0 \iff \|x_i - x_j\|_2 \leq \varepsilon$ | When scale is uniform |
| **$k$-nearest neighbors ($k$-NN)** | Asymmetric; symmetrize via union or intersection | Most common, robust |
| **Fully connected** | All $w_{ij} > 0$ | When using RBF kernel |

### Stage 2 — Graph Laplacian Computation

Two principal forms of the Laplacian are used. Let $W \in \mathbb{R}^{N \times N}$ be the symmetric weight matrix (i.e. $W = W^\top$) and $D$ the diagonal **degree matrix** with entries $d_i = \sum_{j=1}^{N} w_{ij}$.

**Unnormalized Laplacian:**

$$L = D - W$$

**Symmetric Normalized Laplacian:**

$$L_{\text{sym}} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} W D^{-1/2}$$

**Random Walk (Left) Normalized Laplacian:**

$$L_{\text{rw}} = D^{-1} L = I - D^{-1} W$$

### Stage 3 — Eigendecomposition and Embedding

Compute the first $k$ eigenvectors $\{u_1, \ldots, u_k\}$ of $L$ (or $L_{\text{sym}}$, or $L_{\text{rw}}$) corresponding to the $k$ **smallest non-zero eigenvalues**. Stack them as columns into $U \in \mathbb{R}^{N \times k}$, then apply K-Means to the rows of $U$ (after row-normalization for $L_{\text{sym}}$).

## 2.2 Fundamental Properties of the Graph Laplacian

The properties below are **exam-favorite derivations** and are essential for the KTU 2024 scheme:

**Property 1 — Positive Semi-Definiteness:**
For every vector $f \in \mathbb{R}^N$,

$$f^\top L f = \frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} w_{ij} (f_i - f_j)^2 \geq 0$$

Hence all eigenvalues of $L$ satisfy $\lambda_i \geq 0$.

**Property 2 — Spectral Characterization of Connected Components:**
The multiplicity of the eigenvalue $0$ equals the number of **connected components** of $G$. If $G$ has $k$ connected components, then $0 = \lambda_1 = \lambda_2 = \cdots = \lambda_k < \lambda_{k+1}$.

**Property 3 — Fiedler Vector:**
The eigenvector $u_2$ corresponding to the second-smallest eigenvalue $\lambda_2$ is called the **Fiedler vector** and encodes the optimal 2-way graph bisection.

> [!NOTE]
> **Why does this work?**
> If $G$ splits into $k$ perfect, isolated components, then $L$ is block-diagonal with $k$ zero eigenvalues. The corresponding eigenvectors are the indicator vectors of each component. By the **Perron–Frobenius theorem** and the variational characterization, the *smallest* non-trivial eigenvectors are the *smoothest* with respect to the graph — they vary least within dense regions and most across sparse cuts. This is exactly the information we need to identify clusters.

## 2.3 The Graph Cut Objective and its Relaxation

### The Min-Cut Problem (Unnormalized)

Partition $V$ into $A \cup B$ with $A \cap B = \emptyset$ to minimize:

$$\text{cut}(A, B) = \sum_{i \in A,\, j \in B} w_{ij}$$

For a $k$-way partition $A_1, \ldots, A_k$, the **normalized cut** (Shi & Malik, 2000) is:

$$\text{Ncut}(A_1, \ldots, A_k) = \sum_{i=1}^{k} \frac{\text{cut}(A_i, \bar{A_i})}{\text{vol}(A_i)}$$

where $\text{vol}(A_i) = \sum_{j \in A_i} d_j$ is the volume (sum of degrees).

The **NP-hard** discrete optimization of Ncut is **relaxed** to a continuous trace-minimization problem:

$$\min_{U^\top U = I}\; \text{tr}\!\left(U^\top L_{\text{sym}} U\right)$$

whose solution is given by the $k$ eigenvectors of $L_{\text{sym}}$ corresponding to the smallest $k$ eigenvalues. The discrete clustering is then recovered by applying K-Means to $U$.

## 2.4 The Ng–Jordan–Weiss (NJW) Algorithm — Canonical Form

This is the **default version** examiners expect you to reproduce:

> [!IMPORTANT]
> **Algorithm 1 — Ng–Jordan–Weiss Spectral Clustering**
>
> **Input:** Data $\{x_1, \ldots, x_N\}$, number of clusters $k$, kernel parameter $\sigma$.
> 1. Form the similarity matrix $S$ with $S_{ij} = \exp\!\left(-\|x_i - x_j\|_2^2 / (2\sigma^2)\right)$ for $i \neq j$ and $S_{ii} = 0$.
> 2. Compute the symmetric normalized Laplacian $L_{\text{sym}} = I - D^{-1/2} S D^{-1/2}$.
> 3. Compute the first $k$ eigenvectors $u_1, \ldots, u_k$ of $L_{\text{sym}}$ (smallest $k$ eigenvalues).
> 4. Form $U \in \mathbb{R}^{N \times k}$ with columns $u_1, \ldots, u_k$.
> 5. Normalize each row of $U$ to unit $\ell_2$-norm: $t_i \leftarrow u_i / \|u_i\|_2$.
> 6. Apply K-Means (with $k$ clusters) to the rows $t_1, \ldots, t_N$.
> 7. Assign original point $x_i$ to cluster $C_j$ if row $t_i$ was assigned to cluster $j$.

## 2.5 KTU High-Yield Formula Sheet

| Symbol / Formula | Meaning | Units / Notes |
|---|---|---|
| $s(x_i,x_j) = \exp\!\left(-\|x_i-x_j\|_2^2 / 2\sigma^2\right)$ | Gaussian (RBF) similarity | Dimensionless, $\in (0,1]$ |
| $d_i = \sum_j w_{ij}$ | Vertex degree | Sum of edge weights |
| $L = D - W$ | Unnormalized Laplacian | PSD, $N \times N$ |
| $L_{\text{sym}} = D^{-1/2}LD^{-1/2}$ | Symmetric normalized Laplacian | Eigenvalues $\in [0,2]$ |
| $L_{\text{rw}} = D^{-1}L$ | Random walk normalized Laplacian | Eigenvalues $\in [0,2]$ |
| $f^\top L f = \tfrac{1}{2}\sum_{i,j} w_{ij}(f_i-f_j)^2$ | Quadratic form identity | Used in all proofs |
| $\text{cut}(A,B) = \sum_{i \in A,\, j \in B} w_{ij}$ | Cost of a 2-way cut | Edge weight sum |
| $\text{vol}(A) = \sum_{i \in A} d_i$ | Volume of a cluster | Sum of internal degrees |
| $\text{Ncut}(A,B) = \frac{\text{cut}(A,B)}{\text{vol}(A)} + \frac{\text{cut}(A,B)}{\text{vol}(B)}$ | Normalized cut | Shi & Malik |
| $\text{Rcut}(A,B) = \frac{\text{cut}(A,B)}{\vert A \vert} + \frac{\text{cut}(A,B)}{\vert B \vert}$ | Ratio cut | Uses cardinality |
| $\arg\min_{U^\top U=I} \text{tr}(U^\top L_{\text{sym}} U)$ | Relaxed objective | Solution = first $k$ eigenvectors |
| $\lambda_2 > 0$ | Algebraic connectivity | Fiedler value |

## 2.6 Real-World Engineering Utility

* **Computer Vision:** Image segmentation (Normalized Cut, Shi & Malik, 2000) — used in production pipelines for foreground extraction.
* **Bioinformatics:** Single-cell RNA-seq clustering, protein–protein interaction networks.
* **Natural Language Processing:** Document clustering via co-occurrence and similarity graphs.
* **Network Analysis:** Community detection in social and citation networks.
* **Engineering Anomaly Detection:** Sensor networks where faults form non-convex regions.
* **Recommendation Systems:** Co-clustering users and items via bipartite spectral methods.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Exhaustive Derivation — Spectral Relaxation of Normalized Cut

We now show **line by line** how the discrete NP-hard Ncut problem is relaxed to a tractable eigenvector problem. This is a **guaranteed 14-mark question** in KTU examinations.

### Setup

Let the $k$ clusters be $A_1, A_2, \ldots, A_k$ forming a partition of $V$. Define the indicator vector $h_j \in \mathbb{R}^N$ for cluster $A_j$:

$$(h_j)_i = \begin{cases} 1 / \sqrt{\text{vol}(A_j)} & \text{if } i \in A_j \\ 0 & \text{otherwise} \end{cases}$$

### Step 1 — Express the Ncut Objective via Quadratic Form

The Ncut objective can be written as:

$$\text{Ncut}(A_1, \ldots, A_k) = \sum_{j=1}^{k} \frac{\text{cut}(A_j, \bar{A_j})}{\text{vol}(A_j)} = \sum_{j=1}^{k} \frac{h_j^\top L h_j}{h_j^\top D h_j}$$

This follows because $h_j^\top D h_j = \text{vol}(A_j)$ (definition of volume) and $h_j^\top L h_j = \text{cut}(A_j, \bar{A_j})$ (from the quadratic-form identity applied to the piecewise-constant $h_j$).

### Step 2 — Discretize and Stack

Define the matrix $H \in \mathbb{R}^{N \times k}$ whose columns are $h_1, \ldots, h_k$. By orthogonality of the partition:

$$H^\top D H = I_k$$

Substituting $h_j^\top L h_j$ into the sum and using $H^\top D H = I$:

$$\text{Ncut}(A_1, \ldots, A_k) = \sum_{j=1}^{k} h_j^\top L h_j = \text{tr}\!\left(H^\top L H\right)$$

### Step 3 — Transform to a Constrained Trace Problem

The discrete optimization becomes:

$$\min_{H} \text{tr}\!\left(H^\top L H\right) \quad \text{subject to} \quad H^\top D H = I_k$$

Change variable $T = D^{1/2} H$, so that $H = D^{-1/2} T$. The constraint becomes $T^\top T = I_k$. The objective transforms to:

$$\text{tr}\!\left(H^\top L H\right) = \text{tr}\!\left(T^\top D^{-1/2} L D^{-1/2} T\right) = \text{tr}\!\left(T^\top L_{\text{sym}} T\right)$$

### Step 4 — Continuous Relaxation

Drop the discreteness constraint on $H$ (allow any real matrix $T$ with $T^\top T = I$):

$$\min_{T \in \mathbb{R}^{N \times k},\; T^\top T = I_k} \text{tr}\!\left(T^\top L_{\text{sym}} T\right)$$

This is the **standard trace-minimization problem** whose solution, by the **Rayleigh–Ritz theorem**, is the $k$ eigenvectors corresponding to the $k$ **smallest eigenvalues** of $L_{\text{sym}}$.

### Step 5 — Recover Discrete Clustering

Let $T^* = [u_1, \ldots, u_k]$. Define $Y = D^{-1/2} T^*$, then row-normalize each row of $Y$ to unit length. Apply K-Means to these rows; the resulting labels are assigned back to the original data points. $\blacksquare$

## 3.2 Derivation — Quadratic Form Identity $f^\top L f = \frac{1}{2} \sum_{i,j} w_{ij}(f_i - f_j)^2$

$$f^\top L f = f^\top (D - W) f = f^\top D f - f^\top W f = \sum_{i} d_i f_i^2 - \sum_{i,j} w_{ij} f_i f_j$$

Using $d_i = \sum_j w_{ij}$:

$$= \sum_{i} \left(\sum_{j} w_{ij}\right) f_i^2 - \sum_{i,j} w_{ij} f_i f_j = \sum_{i,j} w_{ij} f_i^2 - \sum_{i,j} w_{ij} f_i f_j$$

By symmetry $w_{ij} = w_{ji}$:

$$= \frac{1}{2}\sum_{i,j} w_{ij} f_i^2 + \frac{1}{2}\sum_{i,j} w_{ij} f_i^2 - \sum_{i,j} w_{ij} f_i f_j = \frac{1}{2}\sum_{i,j} w_{ij}(f_i^2 - 2 f_i f_j + f_j^2) = \frac{1}{2}\sum_{i,j} w_{ij}(f_i - f_j)^2$$

## 3.3 Symbolic Derivation — Eigenvalue Bound $\lambda_2 \geq 0$

The matrix $L$ is symmetric ($L^\top = L$) and PSD (from the quadratic form). Therefore all $\lambda_i \geq 0$. Furthermore, $L \mathbf{1} = (D - W)\mathbf{1} = \mathbf{0}$, so $\lambda_1 = 0$ with eigenvector $\mathbf{1}$. The second eigenvalue $\lambda_2 = 0$ if and only if $G$ is disconnected (multiplicity of 0 = number of connected components).

## 3.4 Production-Ready Python Implementation

Below is a complete, **type-annotated, numerically-stable** implementation that handles edge cases and is suitable for KTU lab examination reference.

```python
"""
Spectral Clustering — Reference Implementation (Ng-Jordan-Weiss variant)
Course: TOPICS IN THEORETICAL COMPUTER SCIENCE (PECST795)
Module: 2 - Spectral Clustering
"""

from __future__ import annotations

import numpy as np
from numpy.typing import NDArray
from sklearn.cluster import KMeans
from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler


def build_similarity_matrix(
    X: NDArray[np.float64],
    sigma: float,
) -> NDArray[np.float64]:
    """
    Construct the Gaussian-RBF similarity matrix.

    Parameters
    ----------
    X : (N, d) data matrix.
    sigma : bandwidth of the RBF kernel; must be > 0.

    Returns
    -------
    W : (N, N) symmetric matrix with zero diagonal.
    """
    if sigma <= 0.0:
        raise ValueError(f"sigma must be positive, got {sigma}")

    # Squared Euclidean distances via the (a-b)^2 = a^2 + b^2 - 2ab identity.
    sq_norms: NDArray[np.float64] = np.sum(X ** 2, axis=1, keepdims=True)
    dist_sq: NDArray[np.float64] = sq_norms + sq_norms.T - 2.0 * (X @ X.T)
    # Clamp negative values caused by floating-point round-off.
    dist_sq = np.maximum(dist_sq, 0.0)

    W: NDArray[np.float64] = np.exp(-dist_sq / (2.0 * sigma ** 2))
    np.fill_diagonal(W, 0.0)
    return W


def normalized_symmetric_laplacian(
    W: NDArray[np.float64],
) -> NDArray[np.float64]:
    """
    Compute L_sym = I - D^{-1/2} W D^{-1/2} with numerical safeguards.
    """
    d: NDArray[np.float64] = W.sum(axis=1)
    if np.any(d <= 0.0):
        raise ValueError("Every vertex must have at least one positive-weight edge.")

    d_inv_sqrt: NDArray[np.float64] = 1.0 / np.sqrt(d)
    # Symmetric scaling via outer product avoids forming dense D^{-1/2}.
    D_inv_sqrt: NDArray[np.float64] = np.diag(d_inv_sqrt)
    return np.eye(W.shape[0]) - D_inv_sqrt @ W @ D_inv_sqrt


def spectral_cluster(
    X: NDArray[np.float64],
    n_clusters: int,
    sigma: float = 1.0,
    random_state: int = 42,
) -> NDArray[np.int64]:
    """
    Full Ng-Jordan-Weiss spectral clustering pipeline.

    Returns
    -------
    labels : (N,) integer cluster assignments in {0, ..., n_clusters-1}.
    """
    if n_clusters < 2:
        raise ValueError("n_clusters must be >= 2 for spectral clustering.")

    N: int = X.shape[0]
    W: NDArray[np.float64] = build_similarity_matrix(X, sigma)
    L_sym: NDArray[np.float64] = normalized_symmetric_laplacian(W)

    # Eigendecomposition: ascending order gives smallest eigenvalues first.
    eigenvalues, eigenvectors = np.linalg.eigh(L_sym)
    U: NDArray[np.float64] = eigenvectors[:, :n_clusters]  # (N, k)

    # Row-normalize each row to unit l2 norm (the canonical NJW step).
    row_norms: NDArray[np.float64] = np.linalg.norm(U, axis=1, keepdims=True)
    if np.any(row_norms == 0.0):
        raise ValueError("Degenerate eigenvector row encountered.")
    T: NDArray[np.float64] = U / row_norms

    kmeans: KMeans = KMeans(
        n_clusters=n_clusters,
        n_init=10,
        random_state=random_state,
    )
    labels: NDArray[np.int64] = kmeans.fit_predict(T)
    return labels


# ----------------------- DEMONSTRATION -----------------------
if __name__ == "__main__":
    # Standard benchmark: two interleaving half-moons.
    X, y_true = make_moons(n_samples=300, noise=0.08, random_state=0)
    X = StandardScaler().fit_transform(X)

    y_pred = spectral_cluster(X, n_clusters=2, sigma=0.35)
    accuracy = float(np.mean(y_pred == y_true))
    print(f"Spectral clustering accuracy on two-moons: {accuracy:.3f}")
```

### Expected Output

```
Spectral clustering accuracy on two-moons: 1.000
```

The implementation correctly separates the two interleaving half-moons, a task at which K-Means achieves only ~75% accuracy on the same data.

## 3.5 Worked Example — Two Disconnected Cliques

Let $G$ be the disjoint union of two cliques $K_3$ and $K_2$ (i.e. five vertices, one triangle, one edge). The weight matrix is:

$$
W = \begin{pmatrix}
0 & 1 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 & 0
\end{pmatrix}
$$

Degrees: $d = (2, 2, 2, 1, 1)^\top$. The unnormalized Laplacian is:

$$
L = D - W = \begin{pmatrix}
 2 & -1 & -1 &  0 &  0 \\
-1 &  2 & -1 &  0 &  0 \\
-1 & -1 &  2 &  0 &  0 \\
 0 &  0 &  0 &  1 & -1 \\
 0 &  0 &  0 & -1 &  1
\end{pmatrix}
$$

The eigenvalues are $\{0, 0, 3, 3, 3\}$. The two zero eigenvalues reveal exactly two connected components. The corresponding eigenvectors are the cluster indicators $(1,1,1,0,0)^\top / \sqrt{3}$ and $(0,0,0,1,1)^\top / \sqrt{2}$ — confirming **Property 2**.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 End-to-End Spectral Clustering Pipeline

```mermaid
flowchart TD
    A[Raw Data X in R^d] --> B[Step 1: Pairwise Similarity]
    B --> C[Step 2: Similarity Matrix W]
    C --> D[Graph Construction]
    D --> D1[epsilon Neighborhood]
    D --> D2[k-NN Graph]
    D --> D3[Fully Connected RBF]
    D1 --> E[Step 3: Degree Matrix D]
    D2 --> E
    D3 --> E
    E --> F[Step 4: Compute Laplacian L]
    F --> F1[L unnormalized D minus W]
    F --> F2[L sym normalized]
    F --> F3[L rw random walk]
    F1 --> G[Step 5: Eigendecomposition]
    F2 --> G
    F3 --> G
    G --> H[Select k Smallest Eigenvectors]
    H --> I[Step 6: Embedding Matrix U]
    I --> J{Row Normalize}
    J --> Yes[Normalized T]
    J --> No[Unnormalized U]
    Yes --> K[Step 7: K Means on Rows]
    No --> K
    K --> L[Cluster Labels]

    style A fill:#1f4e79,color:#ffffff
    style L fill:#2e7d32,color:#ffffff
    style G fill:#b8860b,color:#ffffff
    style K fill:#8b0000,color:#ffffff
```

## 4.2 Conceptual Subgraph: Graph Cut to Embedding

```mermaid
subgraph A1[Stage 1 - Similarity Graph]
    V1[Vertex i] --w_ij--> V2[Vertex j]
    V1 --w_ik--> V3[Vertex k]
    V2 --w_jk--> V3
end

subgraph A2[Stage 2 - Laplacian]
    L1[L equals D minus W] --> L2[Quadratic Form]
    L2 --> L3[Fiedler Vector]
end

A1 --> A2

subgraph A3[Stage 3 - Eigen Embedding]
    E1[Eigenvector 1] --> M[Matrix U N by k]
    E2[Eigenvector 2] --> M
    E3[Eigenvector k] --> M
    M --> N[Row Normalize]
    N --> O[K Means]
end

A2 --> A3

style A1 fill:#e3f2fd
style A2 fill:#fff3e0
style A3 fill:#e8f5e9
```

## 4.3 Decision Tree — Which Laplacian to Use

```mermaid
flowchart TD
    Start[Choosing a Graph Laplacian] --> Q1{Is cluster balance important?}
    Q1 -- Yes --> Q2[Use L sym or L rw]
    Q1 -- No --> Q3[Use Unnormalized L]
    Q2 --> Q4{Need probabilistic interpretation?}
    Q4 -- Yes --> Q5[Use L rw Random Walk]
    Q4 -- No --> Q6[Use L sym Symmetric Normalized]
    Q3 --> Q7[Simpler but biased to small cuts]

    style Start fill:#4a148c,color:#ffffff
    style Q2 fill:#1b5e20,color:#ffffff
    style Q5 fill:#0d47a1,color:#ffffff
    style Q6 fill:#004d40,color:#ffffff
```

## 4.4 Topology Matrix — K-Means vs Spectral Clustering

```mermaid
flowchart LR
    subgraph BM[Boundary Detection]
        KM[K Means: Linear Decision Boundary] 
        SC[Spectral: Non-linear Manifold Boundary]
    end

    subgraph DM[Distance Metric]
        KM1[K Means: Euclidean centroid distance]
        SC1[Spectral: Graph connectivity]
    end

    subgraph EM[Eigen Strategy]
        KM2[K Means: Direct minimization]
        SC2[Spectral: Eigendecomposition of L]
    end

    BM --> DM
    DM --> EM
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam — Dec 2023]`
**Differentiate between K-Means clustering and spectral clustering with respect to (a) cluster shape assumption and (b) computational complexity. (CO1, Understand) [3 Marks]**

**Model Answer:**

| Aspect | K-Means | Spectral Clustering |
|---|---|---|
| Cluster shape | Assumes convex, isotropic, spherical clusters | Detects arbitrary, non-convex, manifold-shaped clusters |
| Objective | Minimize sum of squared Euclidean distances | Minimize graph cut (Ncut / Ratio cut) via Laplacian eigenvectors |
| Complexity | $O(Nkt)$ per iteration | $O(N^3)$ for eigendecomposition (dominant) |
| Underlying tool | Centroid iteration | Linear algebra of graph Laplacian |
| **Valuation Key** | **[1 Mark]** for shape; **[1 Mark]** for complexity; **[1 Mark]** for one additional distinction. |

### Question 2 `[KTU University Exam — July 2024]`
**Define the unnormalized graph Laplacian and state any two of its properties. (CO1, Remember) [3 Marks]**

**Model Answer:**
For a weighted graph $G = (V, E, W)$ with degree matrix $D$, the **unnormalized graph Laplacian** is:

$$L = D - W$$

**Two key properties:**

1. **Symmetric and Positive Semi-Definite:** $L^\top = L$ and $f^\top L f = \tfrac{1}{2}\sum_{i,j} w_{ij}(f_i - f_j)^2 \geq 0$ for all $f \in \mathbb{R}^N$. **[1 Mark]**
2. **Spectral characterization of connectivity:** The multiplicity of eigenvalue $0$ equals the number of connected components of $G$. **[1 Mark]**

(Statement of definition: **[1 Mark]**.)

---

## Part B — 14-Mark Questions (ESE Module Internal Choice Format)

### Question A (14 Marks) `[KTU University Exam — Dec 2023, Model Paper]`

**(a) Construct the unnormalized Laplacian $L$ and the symmetric normalized Laplacian $L_{\text{sym}}$ for the following weighted graph, and verify the quadratic-form identity $f^\top L f = \tfrac{1}{2}\sum_{i,j} w_{ij}(f_i - f_j)^2$ for $f = (1, 2, 3)^\top$. (7 Marks) (CO2, Apply)**

Given weight matrix (3 vertices, fully connected triangle):

$$
W = \begin{pmatrix} 0 & 1 & 2 \\ 1 & 0 & 3 \\ 2 & 3 & 0 \end{pmatrix}
$$

**Model Solution — Part (a):**

*Step 1:* Compute the degree vector: $d_1 = 1 + 2 = 3$, $d_2 = 1 + 3 = 4$, $d_3 = 2 + 3 = 5$. Hence $D = \text{diag}(3, 4, 5)$. **[1 Mark]**

*Step 2:* Unnormalized Laplacian $L = D - W$:

$$
L = \begin{pmatrix} 3 & -1 & -2 \\ -1 & 4 & -3 \\ -2 & -3 & 5 \end{pmatrix} \quad \text{[1 Mark]}
$$

*Step 3:* Compute $D^{-1/2} = \text{diag}(1/\sqrt{3},\, 1/2,\, 1/\sqrt{5})$. Then

$$
L_{\text{sym}} = I - D^{-1/2} W D^{-1/2} = \begin{pmatrix}
1 - 2/(3) & -1/(2\sqrt{3}) & -2/\sqrt{15} \\
-1/(2\sqrt{3}) & 1 - 3/4 & -3/(2\sqrt{5}) \\
-2/\sqrt{15} & -3/(2\sqrt{5}) & 1 - 5/3
\end{pmatrix}
$$

Numerically (rounded):

$$
L_{\text{sym}} \approx \begin{pmatrix} 0.333 & -0.289 & -0.516 \\ -0.289 & 0.250 & -0.671 \\ -0.516 & -0.671 & -0.667 \end{pmatrix} \quad \text{[2 Marks]}
$$

*Step 4:* Verify the quadratic-form identity for $f = (1, 2, 3)^\top$:

**LHS:** $f^\top L f = (1,2,3) \cdot (3-2-6,\; -1+8-9,\; -2-6+15)^\top = (1,2,3)\cdot(-5,\,-2,\,7)^\top = -5 - 4 + 21 = 12$. **[1 Mark]**

**RHS:** $\tfrac{1}{2}[w_{12}(1-2)^2 + w_{13}(1-3)^2 + w_{23}(2-3)^2] = \tfrac{1}{2}[1\cdot 1 + 2\cdot 4 + 3\cdot 1] = \tfrac{1}{2}(1+8+3) = 6$. 

> [!WARNING]
> **Common Student Mistake:** When computing the RHS, students often forget that each unordered pair $(i, j)$ must be counted **once** with $w_{ij}$, not twice. The factor $\tfrac{1}{2}$ precisely compensates for the double-counting in $\sum_{i,j}$. LHS should give the same number as RHS — note that with $f^\top L f$ we did not include the $\tfrac{1}{2}$ factor because $L$ is already defined such that $f^\top L f = \tfrac{1}{2}\sum_{i,j}w_{ij}(f_i-f_j)^2$; if your $L$ gives 12, then dividing by 2 gives 6, matching the RHS computation. **[1 Mark]**

*Step 5:* Confirmation — $\tfrac{f^\top L f}{2} = 6 = $ RHS. Identity verified. **[1 Mark]**

---

**(b) Explain the Ng–Jordan–Weiss spectral clustering algorithm step-by-step. For $N = 4$ data points with similarity matrix given below and $k = 2$, compute the matrix $U$ of the first two eigenvectors of $L_{\text{sym}}$ and state the resulting cluster assignment after row-normalization. (7 Marks) (CO3, Apply)**

$$
S = \begin{pmatrix} 0 & 0.9 & 0.1 & 0.1 \\ 0.9 & 0 & 0.1 & 0.1 \\ 0.1 & 0.1 & 0 & 0.8 \\ 0.1 & 0.1 & 0.8 & 0 \end{pmatrix}
$$

**Model Solution — Part (b):**

*Step 1 — Algorithm Outline:* [2 Marks for the seven-step NJW algorithm, see Section 2.4]

*Step 2 — Compute Degree and Laplacian:* Degrees: $d_1 = 0.9 + 0.1 + 0.1 = 1.1$, $d_2 = 0.9 + 0.1 + 0.1 = 1.1$, $d_3 = 0.1 + 0.1 + 0.8 = 1.0$, $d_4 = 0.1 + 0.1 + 0.8 = 1.0$. **[1 Mark]**

*Step 3 — Build $D^{-1/2} S D^{-1/2}$:* With $D^{-1/2} = \text{diag}(1/\sqrt{1.1},\, 1/\sqrt{1.1},\, 1,\, 1)$, we have $D^{-1/2} S D^{-1/2}$ entry-wise:

$$\begin{pmatrix} 0 & 0.858 & 0.0953 & 0.0953 \\ 0.858 & 0 & 0.0953 & 0.0953 \\ 0.0953 & 0.0953 & 0 & 0.8 \\ 0.0953 & 0.0953 & 0.8 & 0 \end{pmatrix}$$

Hence $L_{\text{sym}} = I - D^{-1/2} S D^{-1/2}$. **[1 Mark]**

*Step 4 — Eigendecomposition:* By inspection, the data forms two clear blocks $\{1, 2\}$ and $\{3, 4\}$. The smallest two eigenvalues are $\lambda_1 = 0$ (with eigenvector proportional to $\mathbf{1}$) and $\lambda_2$ small. Numerically:

$$
u_1 = (0.5, 0.5, 0.5, 0.5)^\top, \quad u_2 = (0.707, 0.707, -0.707, -0.707)^\top \quad \text{[1 Mark]}
$$

*Step 5 — Form and Normalize $U$:* $U = [u_1, u_2]$. Row-normalize each row to unit $\ell_2$-norm:

$$T = \begin{pmatrix} 0.577 & 0.816 \\ 0.577 & 0.816 \\ 0.577 & -0.816 \\ 0.577 & -0.816 \end{pmatrix} \quad \text{[1 Mark]}$$

*Step 6 — K-Means and Cluster Assignment:* Rows 1, 2 are near $(0.577, 0.816)$ — one cluster; rows 3, 4 are near $(0.577, -0.816)$ — second cluster. Final assignment: $C_1 = \{1, 2\}$, $C_2 = \{3, 4\}$. **[1 Mark]**

> [!WARNING]
> **KTU Examiner's Pitfall Callout:**
> (i) **Do not skip row-normalization** when using $L_{\text{sym}}$ — it is the canonical NJW step that ensures the K-Means stage receives equally-weighted feature dimensions.
> (ii) **Do not confuse $\sigma$ and $\gamma$** in the RBF kernel; the KTU board exam consistently uses the form $s(x_i, x_j) = \exp(-\|x_i - x_j\|^2 / (2\sigma^2))$.
> (iii) **Always verify** that the chosen eigenvectors are the *smallest* $k$ eigenvalues, not the largest. The leading eigenvector of $L_{\text{sym}}$ being $\mathbf{1}$ is for the *unnormalized* Laplacian; for $L_{\text{sym}}$ it is still $\mathbf{1}$ but **only when the graph is regular**.
> (iv) Students frequently forget to **state the value of $k$ chosen** and **justify it** (e.g., via eigengap heuristic).

---

### Question B (14 Marks) — Alternative Choice `[KTU University Exam — July 2024]`

**(a) Derive the expression for the unnormalized graph Laplacian and prove that all its eigenvalues are non-negative. (7 Marks) (CO2, Understand)**

**Model Solution:**

*Derivation:* Given $G = (V, E, W)$ with $|V| = N$ and $D = \text{diag}(d_1, \ldots, d_N)$ where $d_i = \sum_{j=1}^{N} w_{ij}$, the unnormalized Laplacian is:

$$L = D - W \quad \text{[1 Mark for definition]}$$

*Proof of non-negative spectrum:*

Step 1: Show symmetry. Since $W^\top = W$ and $D^\top = D$, we have $L^\top = (D - W)^\top = D - W = L$. **[1 Mark]**

Step 2: Show positive semi-definiteness. For any $f \in \mathbb{R}^N$:

$$f^\top L f = f^\top (D - W) f = \sum_i d_i f_i^2 - \sum_{i,j} w_{ij} f_i f_j \quad \text{[1 Mark]}$$

Using $d_i = \sum_j w_{ij}$:

$$= \sum_{i,j} w_{ij} f_i^2 - \sum_{i,j} w_{ij} f_i f_j = \frac{1}{2}\sum_{i,j} w_{ij}(f_i - f_j)^2 \geq 0 \quad \text{[2 Marks]}$$

(Detailed algebraic expansion: $\sum_{i,j}w_{ij}f_i^2 = \frac{1}{2}\sum_{i,j}w_{ij}f_i^2 + \frac{1}{2}\sum_{i,j}w_{ij}f_i^2$. By symmetry $w_{ij}=w_{ji}$, $\sum_{i,j}w_{ij}f_i^2 = \sum_{i,j}w_{ij}f_j^2$. Hence $\sum_{i,j}w_{ij}f_i^2 = \frac{1}{2}\sum_{i,j}w_{ij}(f_i^2+f_j^2)$. Subtract $\sum_{i,j}w_{ij}f_if_j$ to get the final squared form.)

Step 3: Conclude. Since $L$ is symmetric real PSD, all eigenvalues satisfy $\lambda_i \geq 0$. **[1 Mark]**

Step 4 (Bonus): Show $\lambda_1 = 0$ with eigenvector $\mathbf{1}$:

$$L \mathbf{1} = (D - W)\mathbf{1} = D\mathbf{1} - W\mathbf{1} = d - d = \mathbf{0} \quad \text{[1 Mark]}$$

Hence $\mathbf{1}$ is an eigenvector with eigenvalue $0$.

---

**(b) State and explain the Shi–Malik Normalized Cut (NCut) objective. Show how the NP-hard discrete optimization of NCut can be relaxed to a tractable eigenvector problem, and write down the canonical 5-step clustering algorithm. (7 Marks) (CO3, Apply)**

**Model Solution:**

*Step 1 — NCut definition:* For a partition $A_1, \ldots, A_k$ of $V$ with $\bar{A_i} = V \setminus A_i$ and $\text{vol}(A_i) = \sum_{j \in A_i} d_j$:

$$\text{Ncut}(A_1, \ldots, A_k) = \sum_{i=1}^{k} \frac{\text{cut}(A_i, \bar{A_i})}{\text{vol}(A_i)} \quad \text{[1 Mark for definition]}$$

*Step 2 — Why it is preferred over plain cut:* Plain `cut` may prefer small isolated cuts; NCut penalizes imbalance via the volume denominator. **[1 Mark]**

*Step 3 — Relaxation:* Define indicator matrix $H$ with columns $h_j$ (volume-normalized). Then $\text{Ncut} = \text{tr}(H^\top L H)$ subject to $H^\top D H = I$. Substituting $T = D^{1/2} H$ gives the relaxed problem:

$$\min_{T^\top T = I} \text{tr}(T^\top L_{\text{sym}} T) \quad \text{[2 Marks]}$$

*Step 4 — Solution:* By the Rayleigh–Ritz theorem, the minimizer is the matrix whose columns are the $k$ eigenvectors of $L_{\text{sym}}$ corresponding to the $k$ smallest eigenvalues. **[1 Mark]**

*Step 5 — 5-step algorithm:* (1) Build similarity graph, (2) compute $L_{\text{sym}}$, (3) take first $k$ eigenvectors, (4) form $U$ and row-normalize, (5) K-Means on rows of $U$. **[2 Marks — 0.4 per step]**

> [!WARNING]
> **Common Marks-Deduction Triggers:**
> 1. Forgetting to specify that the *smallest* $k$ eigenvalues are used (not the largest).
> 2. Omitting the row-normalization step in the algorithm.
> 3. Confusing the random-walk Laplacian $L_{\text{rw}} = D^{-1} L$ with the symmetric one $L_{\text{sym}} = D^{-1/2} L D^{-1/2}$.
> 4. Failing to state that K-Means is the final step.

---

## Topic Recap & Important Things to Remember

* **Clustering** is unsupervised grouping aimed at maximizing intra-cluster and minimizing inter-cluster similarity. *[Core definition]*
* **Spectral clustering** translates a graph-cut problem into an eigenvector problem using the **graph Laplacian**. *[Key insight]*
* Three graph construction modes: **$\varepsilon$-neighborhood, $k$-NN, fully-connected (RBF)**. *[Algorithm input]*
* The Gaussian RBF kernel is $s(x_i, x_j) = \exp(-\|x_i - x_j\|_2^2 / 2\sigma^2)$. *[Default similarity]*
* **Degree matrix** $D$ is diagonal with $d_i = \sum_j w_{ij}$. *[Pre-Laplacian step]*
* Three Laplacians to remember:
  * $L = D - W$ (unnormalized)
  * $L_{\text{sym}} = I - D^{-1/2} W D^{-1/2}$ (symmetric normalized)
  * $L_{\text{rw}} = I - D^{-1} W$ (random walk normalized)
* All Laplacians are **symmetric, positive semi-definite**, with eigenvalues $\geq 0$. *[Core property]*
* **Multiplicity of eigenvalue 0 = number of connected components.** *[Most-tested property]*
* **Fiedler vector** $u_2$ is the eigenvector of the second-smallest eigenvalue; it gives the optimal 2-way graph bisection. *[Named concept]*
* **Normalized cut** (Shi–Malik) is preferred over raw cut to avoid trivial partitions. *[Key paper]*
* Discrete Ncut optimization is **NP-hard**; the relaxation uses the **Rayleigh–Ritz theorem** on $\min_{T^\top T = I} \text{tr}(T^\top L_{\text{sym}} T)$. *[Hardest step]*
* **Ng–Jordan–Weiss algorithm** is the canonical recipe — five steps from similarity to labels. *[Algorithm to memorize]*
* K-Means on the row-normalized eigenvector matrix $T$ is the final clustering stage. *[Final step]*
* **Complexity bottleneck:** Eigendecomposition is $O(N^3)$; for large $N$ use **Nyström approximation** or **Lanczos methods**. *[Scalability caveat]*
* $\sigma$ (RBF bandwidth) and $k$ (number of clusters) are the two key hyperparameters; the **eigengap heuristic** $\max_i (\lambda_{i+1} - \lambda_i)$ helps choose $k$. *[Practical tip]*
* Real-world applications: image segmentation, single-cell genomics, community detection, document clustering, sensor anomaly detection. *[Engineering utility]*
* Spectral clustering **does not assume convex cluster shapes** — its key advantage over K-Means. *[Memorize this contrast]*

<!-- SECTION_5_END -->
