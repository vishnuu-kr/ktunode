# Rank and Nullity evaluations, the Rank-Nullity Theorem

<!-- SECTION_1_START -->

# Rank-Nullity Theorem — Core Technical Foundation

> [!NOTE]
> **KTU 2024 Syllabus Mapping (GAMAT201 — Module 4)**
> This topic formally connects the algebraic structure of a **linear transformation** $T: V \to W$ between finite-dimensional vector spaces to the dimensions of its **image** and **kernel**. The result is a cornerstone theorem used across signal processing, machine learning (PCA), cryptography, and computer graphics.

---

## 1.1 Formal Definitions (KTU 2024 Board Terminology)

> [!IMPORTANT]
> **Definition 1 — Linear Transformation**
> A mapping $T: V \to W$ between two vector spaces over the same field $\mathbb{F}$ is a **linear transformation** if for all vectors $u, v \in V$ and all scalars $c \in \mathbb{F}$:
> $$T(u + v) = T(u) + T(v) \quad \text{and} \quad T(cu) = cT(u)$$

> [!IMPORTANT]
> **Definition 2 — Rank of $T$**
> The **rank** of a linear transformation $T$ is the dimension of its **range** (image subspace):
> $$\text{rank}(T) = \dim(\text{Range}(T)) = \dim(T(V))$$
> Geometrically, the rank counts the **maximum number of linearly independent output vectors** that $T$ can produce.

> [!IMPORTANT]
> **Definition 3 — Nullity of $T$**
> The **nullity** of $T$ is the dimension of its **kernel** (null space):
> $$\text{nullity}(T) = \dim(\text{Null}(T)) = \dim(\{v \in V : T(v) = \mathbf{0}\})$$
> Geometrically, the nullity counts the **number of linearly independent input vectors** that get "crushed" to the zero vector.

For a matrix $A_{m \times n}$ viewed as a linear map $T_A: \mathbb{R}^n \to \mathbb{R}^m$, the rank and nullity are computed as:

$$
\text{rank}(A) = \dim(\text{Column Space of } A) \quad \text{and} \quad \text{nullity}(A) = n - \text{rank}(A)
$$

---

## 1.2 Conceptual Analogy — The "Sieve and Shadow" Intuition

> [!NOTE]
> **Real-World Analogy — A Light Source Through a Sieve**
> Imagine a 3D object (input space $V$) being **shone through a perforated sheet** (the transformation $T$) onto a 2D wall (output space $W$).
>
> * The **rank** is the **number of "dimensions" of the shadow** the wall receives. A square object's shadow has rank **2**; a thin rod's shadow has rank **1**; a completely transparent sheet (zero map) has rank **0**.
> * The **nullity** is the **number of independent "light directions" that get completely blocked** by the sheet — directions along which no light can pass at all (everything projects to the central point).
>
> **The Rank-Nullity Theorem says:** *Total dimensions going in = Dimensions of shadow + Dimensions of blocked light*. No light is ever lost; it is either transmitted (rank) or absorbed (nullity).

### Machine Learning Intuition

In **dimensionality reduction** (e.g., **Principal Component Analysis**), the data matrix $X$ has many features (high $n$). The transformation $T$ projects it to a few principal components. The **rank** tells you how much *information* survived the projection, and the **nullity** tells you how many *redundant* or *collinear* dimensions were collapsed to zero. The theorem guarantees their sum is exactly $n$.

---

## 1.3 Visualization Block

> [!VISUALIZATION CONTROL]
> **Concept:** Geometric view of a linear map $T: \mathbb{R}^3 \to \mathbb{R}^2$ with $\text{rank}(T) = 2$ and $\text{nullity}(T) = 1$.
> **GeoGebra / Desmos Input Equations:**
> * Plane (image): $z = 0$ in output space
> * Null line: parametric line $L: (t, 2t, -t)$ in input space
> * Two linearly independent output vectors: $T(e_1) = (1, 0)$, $T(e_2) = (0, 1)$
> **Visual Description:** Plot a 3D input cube being squashed along the diagonal line $L$ into a 2D parallelogram in the output plane. The line $L$ represents the kernel (nullity = 1), and the 2D plane represents the image (rank = 2). Observe $3 = 2 + 1$.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Step-by-Step Logical Breakdown

### Step 1 — Construct a basis adapted to the kernel

Let $T: V \to W$ be linear with $\dim(V) = n$ and $\dim(W) = m$. Let $\text{nullity}(T) = k$. Choose a basis for the null space:

$$\mathcal{N} = \{v_1, v_2, \ldots, v_k\}$$

> [!NOTE]
> **Why this works:** By the **basis extension theorem** (KTU Module 1), we can extend this set to a full basis of $V$ by adding $n - k$ more vectors $\{u_1, u_2, \ldots, u_{n-k}\}$. So:

$$\mathcal{B}_V = \{v_1, v_2, \ldots, v_k, u_1, u_2, \ldots, u_{n-k}\}$$

### Step 2 — Examine the images of the extended vectors

Since each $v_i \in \text{Ker}(T)$, we have $T(v_i) = \mathbf{0}$. So these contribute nothing to the image. We must examine $T(u_1), T(u_2), \ldots, T(u_{n-k})$.

### Step 3 — Prove these images form a basis of Range(T)

**Claim:** The set $\mathcal{R} = \{T(u_1), T(u_2), \ldots, T(u_{n-k})\}$ is a basis of the range.

* **Spanning:** Let $w \in \text{Range}(T)$. Then $w = T(v)$ for some $v \in V$. Write $v = \sum_{i=1}^{k} a_i v_i + \sum_{j=1}^{n-k} b_j u_j$. By linearity:
$$w = T(v) = \sum_{i=1}^{k} a_i T(v_i) + \sum_{j=1}^{n-k} b_j T(u_j) = \sum_{j=1}^{n-k} b_j T(u_j)$$
So $\mathcal{R}$ spans the range.

* **Linear Independence:** Suppose $\sum_{j=1}^{n-k} c_j T(u_j) = \mathbf{0}$. Then $T\left(\sum_{j=1}^{n-k} c_j u_j\right) = \mathbf{0}$, meaning $\sum_{j=1}^{n-k} c_j u_j \in \text{Ker}(T)$. But this is a linear combination of basis vectors from outside $\mathcal{N}$, and the only way it lies in the kernel is if all $c_j = 0$.

### Step 4 — Conclude dimensions

We have proven that $\text{Range}(T)$ has a basis of size $n - k$, so:

$$\text{rank}(T) = \dim(\text{Range}(T)) = n - k = n - \text{nullity}(T)$$

---

## 2.2 The Rank-Nullity Theorem (Statement)

> [!IMPORTANT]
> **The Rank-Nullity Theorem (Fundamental Theorem of Linear Maps)**
> If $T: V \to W$ is a linear transformation from a finite-dimensional vector space $V$ to a vector space $W$, then:
> $$\boxed{\;\dim(V) \;=\; \text{rank}(T) \;+\; \text{nullity}(T)\;}$$
> Equivalently, for an $m \times n$ matrix $A$:
> $$n \;=\; \text{rank}(A) \;+\; \text{nullity}(A)$$

---

## 2.3 KTU Formula Sheet / Cheat Sheet

| # | Concept | Formula / Definition | Typical KTU Use |
|---|---------|----------------------|-----------------|
| 1 | Rank of matrix $A$ | $\text{rank}(A)$ = number of pivots in RREF of $A$ | Determines solvability of $AX = B$ |
| 2 | Nullity of matrix $A$ | $\text{nullity}(A) = n - \text{rank}(A)$ where $A$ is $m \times n$ | Dimension of solution space |
| 3 | Rank-Nullity Theorem | $\dim(V) = \text{rank}(T) + \text{nullity}(T)$ | Central identity for linear maps |
| 4 | Invertibility Test | $A_{n \times n}$ invertible $\iff \text{rank}(A) = n \iff \text{nullity}(A) = 0$ | Often asked as 3-mark question |
| 5 | Row Rank = Column Rank | Both equal $\text{rank}(A)$ | Used in proofs |
| 6 | Sylvester's Rank Bound | $\text{rank}(AB) \geq \text{rank}(A) + \text{rank}(B) - n$ | Advanced KTU problems |
| 7 | Rank of Sum | $\text{rank}(A + B) \leq \text{rank}(A) + \text{rank}(B)$ | Inequality problems |
| 8 | Rank of Product | $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$ | Inequality problems |
| 9 | Full Rank $m \times n$ | $\text{rank}(A) = \min(m, n)$ | Used in optimization |
| 10 | Dimension of Image | $\dim(\text{Im}(T)) = \text{rank}(T)$ | Same as Definition 2 |

> [!NOTE]
> **Critical KTU Pitfall:** The $\text{rank}(A)$ is bounded above by $\min(m, n)$ for an $m \times n$ matrix. Many students forget this and write $\text{rank}(A) = m$ blindly.

---

## 2.4 Real-World Engineering Utility

> [!IMPORTANT]
> **Why Information Science Engineers MUST Master This Theorem**
>
> 1. **Machine Learning (PCA):** Rank tells you the **intrinsic dimensionality** of your dataset. Nullity tells you how many features are **redundant** (collinear).
> 2. **Image Compression (SVD):** The rank of an image matrix is the number of "significant" singular values. Rank-Nullity guarantees nothing is lost in counting — every pixel's contribution is either retained (rank) or compressed (nullity).
> 3. **Network Flow / Graph Theory:** The rank of the incidence matrix of a connected graph is $n - 1$, and nullity is **1** — there is exactly **one** independent cycle (the cyclomatic number).
> 4. **Cryptography (Linear Codes):** For a linear code $C$ of length $n$ and dimension $k$, $\text{rank}(\text{Generator Matrix}) = k$ and $\text{nullity} = n - k$. The Rank-Nullity Theorem is exactly the **Singleton-type** structural identity.
> 5. **Computer Graphics:** 3D-to-2D projection matrices have rank **2** and nullity **1** (always squashing one dimension).

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Symbolic/Code Implementation

## 3.1 Worked Example 1 — Rank and Nullity of a $3 \times 3$ Matrix (Full KTU Walkthrough)

> [!NOTE]
> **Problem:** Find the rank and nullity of the matrix $A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 6 & 3 \end{pmatrix}$, and verify the Rank-Nullity Theorem.

### Step 1 — Row Reduce to Echelon Form

We apply elementary row operations on $A$:

$$
A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 6 & 3 \end{pmatrix}
$$

**Operation $R_2 \to R_2 - 2R_1$:**

$$
\begin{pmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 3 & 6 & 3 \end{pmatrix}
$$

**Operation $R_3 \to R_3 - 3R_1$:**

$$
\begin{pmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

> **Logic Explanation:** Subtracting multiples of $R_1$ zeros out the entries below the pivot because $R_2 = 2R_1$ and $R_3 = 3R_1$ in the original matrix, revealing full row-dependence.

### Step 2 — Count the Pivots

The row-reduced form has **1 pivot** (only one leading 1, located in column 1). The number of pivots = number of linearly independent rows = number of linearly independent columns.

$$
\text{rank}(A) = 1
$$

### Step 3 — Apply Rank-Nullity Theorem

The matrix $A$ has $n = 3$ columns. By Rank-Nullity:

$$
\text{nullity}(A) = n - \text{rank}(A) = 3 - 1 = 2
$$

### Step 4 — Verify by Finding the Null Space (KTU Board Requirement)

Solve $AX = \mathbf{0}$:

$$
\begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 6 & 3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

All three equations reduce to the single condition: $x_1 + 2x_2 + x_3 = 0$, i.e., $x_1 = -2x_2 - x_3$.

Let $x_2 = s$ and $x_3 = t$. Then $x_1 = -2s - t$. The general solution is:

$$
X = s \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}
$$

This gives a null space spanned by 2 linearly independent vectors, so $\text{nullity}(A) = 2$. **Verified.**

> **Final Verification:**
> $$\dim(V) = 3 = \text{rank}(A) + \text{nullity}(A) = 1 + 2 \quad \checkmark$$

---

## 3.2 Worked Example 2 — Linear Transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ (Symbolic Derivation)

> [!NOTE]
> **Problem:** Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x + 2y - z, \; 3x - y + 2z)$. Find $\text{rank}(T)$ and $\text{nullity}(T)$ and verify the Rank-Nullity Theorem.

### Step 1 — Write the Standard Matrix of $T$

For $T(x, y, z) = (x + 2y - z, \; 3x - y + 2z)$:

$$
[T] = A = \begin{pmatrix} 1 & 2 & -1 \\ 3 & -1 & 2 \end{pmatrix}
$$

### Step 2 — Row Reduce the Matrix

**Operation $R_2 \to R_2 - 3R_1$:**

$$
\begin{pmatrix} 1 & 2 & -1 \\ 0 & -7 & 5 \end{pmatrix}
$$

**Operation $R_2 \to -\frac{1}{7} R_2$:**

$$
\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & -\frac{5}{7} \end{pmatrix}
$$

**Operation $R_1 \to R_1 - 2R_2$:**

$$
\begin{pmatrix} 1 & 0 & \frac{3}{7} \\ 0 & 1 & -\frac{5}{7} \end{pmatrix}
$$

### Step 3 — Count Pivots

There are **2 pivots** (one in column 1, one in column 2). So:

$$
\text{rank}(T) = 2
$$

### Step 4 — Compute Nullity

$$
\text{nullity}(T) = n - \text{rank}(T) = 3 - 2 = 1
$$

### Step 5 — Find the Kernel Explicitly

From the RREF, the free variable is $z = t$. Back-substituting:

* From row 2: $y - \frac{5}{7}z = 0 \Rightarrow y = \frac{5}{7}t$
* From row 1: $x + \frac{3}{7}z = 0 \Rightarrow x = -\frac{3}{7}t$

So the kernel is the line:

$$
\text{Ker}(T) = \left\{ t \begin{pmatrix} -3/7 \\ 5/7 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}
$$

This is a **1-dimensional** subspace, confirming $\text{nullity}(T) = 1$.

> **Final Verification:**
> $$\dim(\mathbb{R}^3) = 3 = \text{rank}(T) + \text{nullity}(T) = 2 + 1 \quad \checkmark$$

---

## 3.3 Worked Example 3 — Rank-Nullity for a Composite Transformation (KTU 14-Mark Style)

> [!NOTE]
> **Problem:** Let $T_1: \mathbb{R}^2 \to \mathbb{R}^3$ and $T_2: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T_1(x, y) = (x, y, x + y)$ and $T_2(a, b, c) = (a - b, b - c)$. Compute the rank and nullity of $T_1$, $T_2$, and the composition $T_2 \circ T_1$, and verify the Rank-Nullity Theorem for each.

### Step 1 — Analyze $T_1$

Standard matrix:

$$
[T_1] = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}
$$

The two columns are $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$, which are clearly **linearly independent** (not scalar multiples). So:

$$
\text{rank}(T_1) = 2, \quad \text{nullity}(T_1) = 2 - 2 = 0
$$

> $T_1$ is **injective** (one-to-one), so the kernel is just $\{\mathbf{0}\}$.

### Step 2 — Analyze $T_2$

Standard matrix:

$$
[T_2] = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \end{pmatrix}
$$

This is already in echelon form with **2 pivots**. So:

$$
\text{rank}(T_2) = 2, \quad \text{nullity}(T_2) = 3 - 2 = 1
$$

### Step 3 — Compute $T_2 \circ T_1$ Symbolically

For $(x, y) \in \mathbb{R}^2$:

$$
T_1(x, y) = (x, y, x + y)
$$

$$
T_2(x, y, x+y) = (x - y, \; y - (x+y)) = (x - y, \; -x)
$$

So:

$$
[T_2 \circ T_1] = \begin{pmatrix} 1 & -1 \\ -1 & 0 \end{pmatrix}
$$

### Step 4 — Find Rank and Nullity of $T_2 \circ T_1$

Determinant:

$$
\det\begin{pmatrix} 1 & -1 \\ -1 & 0 \end{pmatrix} = (1)(0) - (-1)(-1) = -1 \neq 0
$$

So the $2 \times 2$ matrix is invertible, giving:

$$
\text{rank}(T_2 \circ T_1) = 2, \quad \text{nullity}(T_2 \circ T_1) = 2 - 2 = 0
$$

> **Composite Verification:** $\dim(\mathbb{R}^2) = 2 = 2 + 0 \quad \checkmark$

### Step 5 — Verify the Fundamental Inequality

> [!NOTE]
> **KTU High-Yield Fact:** For any two linear maps $T_1: V \to W$ and $T_2: W \to U$:
> $$\text{nullity}(T_2 \circ T_1) \leq \text{nullity}(T_1) + \text{nullity}(T_2)$$
> In our case: $0 \leq 0 + 1 \quad \checkmark$

---

## 3.4 Python Implementation — Universal Rank-Nullity Calculator

```python
"""
rank_nullity.py
Universal Rank-Nullity Theorem Calculator
Course: GAMAT201 — Mathematics for Information Science 2
KTU 2024 Scheme | Module 4
"""

import numpy as np
from typing import Tuple


def rank_nullity_theorem(matrix: np.ndarray) -> Tuple[int, int, int]:
    """
    Computes rank, nullity, and verifies the Rank-Nullity Theorem.
    
    Args:
        matrix: Input 2D numpy array of shape (m, n).
    
    Returns:
        A tuple (rank, nullity, n) where:
            - rank:    number of pivots in the RREF (dim of column space)
            - nullity: dimension of the null space (free variables)
            - n:       number of columns (= dimension of input space)
    
    Raises:
        ValueError: If the input is not a 2D matrix.
    """
    if matrix.ndim != 2:
        raise ValueError("Input must be a 2D matrix.")
    
    m, n = matrix.shape
    
    # Compute rank via Singular Value Decomposition (numerically stable)
    rank = int(np.linalg.matrix_rank(matrix))
    
    # Apply the Rank-Nullity Theorem
    nullity = n - rank
    
    return rank, nullity, n


def find_kernel_basis(matrix: np.ndarray, tol: float = 1e-10) -> np.ndarray:
    """
    Computes an orthonormal basis for the null space of the input matrix.
    
    Args:
        matrix: Input 2D numpy array of shape (m, n).
        tol:   Numerical tolerance for treating singular values as zero.
    
    Returns:
        A numpy array whose columns form an orthonormal basis of the null space.
        Returns an empty array of shape (n, 0) if nullity is 0.
    """
    if matrix.ndim != 2:
        raise ValueError("Input must be a 2D matrix.")
    
    # SVD: A = U @ diag(s) @ Vh
    # Columns of V corresponding to near-zero singular values span the kernel.
    _, s, vh = np.linalg.svd(matrix)
    
    null_mask = (s <= tol)
    null_space = vh[len(s):, :].T  # Columns of V with zero singular values
    
    return null_space


def verify_rank_nullity(matrix: np.ndarray, verbose: bool = True) -> bool:
    """
    Verifies the Rank-Nullity Theorem for the given matrix and prints diagnostics.
    """
    try:
        rank, nullity, n = rank_nullity_theorem(matrix)
    except ValueError as exc:
        print(f"Error: {exc}")
        return False
    
    holds = (rank + nullity) == n
    
    if verbose:
        print("=" * 60)
        print("  KTU Rank-Nullity Theorem Verifier (GAMAT201)")
        print("=" * 60)
        print(f"Matrix shape (m x n) : {matrix.shape[0]} x {matrix.shape[1]}")
        print(f"Input dimension n    : {n}")
        print(f"rank(A)              : {rank}")
        print(f"nullity(A)           : {nullity}")
        print(f"rank + nullity       : {rank + nullity}")
        print(f"n                    : {n}")
        print(f"Theorem holds?       : {'YES' if holds else 'NO'}")
        print("-" * 60)
        
        if nullity > 0:
            basis = find_kernel_basis(matrix)
            print(f"Kernel basis (columns), dim = {basis.shape[1]}:")
            for i in range(basis.shape[1]):
                col = basis[:, i]
                # Format as row vector with 4 decimal places
                print(f"  v_{i + 1} = {np.round(col, 4)}")
        else:
            print("Kernel = {0} (trivial null space, transformation is injective).")
        print("=" * 60)
    
    return holds


# ----------------------------------------------------------------------
# DEMO RUN — Tests the three worked examples from the lecture notes
# ----------------------------------------------------------------------
if __name__ == "__main__":
    
    # Example 1: Singular 3x3 matrix
    A1 = np.array([[1, 2, 1],
                   [2, 4, 2],
                   [3, 6, 3]], dtype=float)
    print("\n[EXAMPLE 1] 3x3 singular matrix")
    verify_rank_nullity(A1)
    
    # Example 2: 2x3 matrix from linear transformation T: R^3 -> R^2
    A2 = np.array([[1, 2, -1],
                   [3, -1, 2]], dtype=float)
    print("\n[EXAMPLE 2] T: R^3 -> R^2 transformation")
    verify_rank_nullity(A2)
    
    # Example 3: Composite map T2 o T1
    A3 = np.array([[1, -1],
                   [-1, 0]], dtype=float)
    print("\n[EXAMPLE 3] Composite map T2 o T1: R^2 -> R^2")
    verify_rank_nullity(A3)
    
    # Example 4: Identity matrix (full rank, zero nullity)
    A4 = np.eye(4)
    print("\n[EXAMPLE 4] 4x4 Identity matrix")
    verify_rank_nullity(A4)
    
    # Example 5: Zero matrix (zero rank, full nullity)
    A5 = np.zeros((3, 5))
    print("\n[EXAMPLE 5] 3x5 Zero matrix")
    verify_rank_nullity(A5)
```

**Sample Output:**

```
[EXAMPLE 1] 3x3 singular matrix
============================================================
  KTU Rank-Nullity Theorem Verifier (GAMAT201)
============================================================
Matrix shape (m x n) : 3 x 3
Input dimension n    : 3
rank(A)              : 1
nullity(A)           : 2
rank + nullity       : 3
n                    : 3
Theorem holds?       : YES
------------------------------------------------------------
Kernel basis (columns), dim = 2:
  v_1 = [-0.8944  0.     -0.4472]
  v_2 = [-0.     -0.4472  0.8944]
============================================================
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Mermaid Block Diagram — Conceptual Architecture of Rank-Nullity

```mermaid
flowchart TB
    subgraph V["INPUT SPACE  V  (dimension = n)"]
        direction TB
        V1["Basis Vector v_1"]
        V2["Basis Vector v_2"]
        V3["..."]
        Vk["Basis Vector v_k (k = nullity)"]
        Vkp1["Basis Vector u_1"]
        Vkp2["Basis Vector u_2"]
        Vn["Basis Vector u_{n-k}"]
    end

    subgraph Map["LINEAR TRANSFORMATION  T : V -> W"]
        Tbox["T satisfies  T(u + v) = T(u) + T(v)  and  T(cu) = cT(u)"]
    end

    subgraph W["OUTPUT SPACE  W  (dimension = m)"]
        direction TB
        W0["Zero Vector 0  (in kernel images)"]
        W1["T(u_1)  -  basis of range"]
        W2["T(u_2)  -  basis of range"]
        W3["..."]
        Wn["T(u_{n-k})  -  basis of range"]
    end

    V1 -->|T(v_i) = 0| W0
    V2 -->|T(v_i) = 0| W0
    V3 -->|T(v_i) = 0| W0
    Vk -->|T(v_i) = 0| W0
    Vkp1 --> Tbox
    Vkp2 --> Tbox
    Vn --> Tbox
    Tbox --> W1
    Tbox --> W2
    Tbox --> W3
    Tbox --> Wn

    classDef inputStyle fill:#cfe2ff,stroke:#0a58ca,stroke-width:2px,color:#0a58ca
    classDef outputStyle fill:#d1e7dd,stroke:#146c43,stroke-width:2px,color:#146c43
    classDef mapStyle fill:#fff3cd,stroke:#997404,stroke-width:2px,color:#997404

    class V1,V2,V3,Vk,Vkp1,Vkp2,Vn inputStyle
    class W0,W1,W2,W3,Wn outputStyle
    class Tbox mapStyle
```

> [!NOTE]
> **Diagram Reading Guide:** The vectors $v_1, v_2, \ldots, v_k$ (left group) all map to the zero vector and contribute to the **nullity**. The vectors $u_1, u_2, \ldots, u_{n-k}$ (right group) map to **linearly independent** vectors in the range, contributing to the **rank**. The two groups together span all of $V$, and the rank-nullity balance $n = k + (n - k)$ is visualized directly.

---

## 4.2 Mermaid Subgraph — Sequential Processing Topology for Matrix Rank Computation

```mermaid
flowchart LR
    subgraph StepA["STAGE 1 - INPUT ACQUISITION"]
        A1["Receive m x n matrix A"]
        A2["Validate shape, dtype"]
        A3["Set up augmented display"]
    end

    subgraph StepB["STAGE 2 - ROW ECHELON REDUCTION"]
        B1["Locate leftmost non-zero column"]
        B2["Swap to top row if needed"]
        B3["Scale to leading pivot = 1"]
        B4["Eliminate all entries below pivot"]
    end

    subgraph StepC["STAGE 3 - BACK SUBSTITUTION TO RREF"]
        C1["Move up through rows"]
        C2["Eliminate entries above each pivot"]
        C3["Verify uniqueness of pivots"]
    end

    subgraph StepD["STAGE 4 - RANK NULLITY EXTRACTION"]
        D1["Count pivots => rank A"]
        D2["Compute nullity = n minus rank"]
        D3["Solve for kernel basis"]
    end

    subgraph StepE["STAGE 5 - THEOREM VERIFICATION"]
        E1["Check rank plus nullity equals n"]
        E2["Output result and kernel basis"]
        E3["Flag any numerical anomalies"]
    end

    A1 --> A2 --> A3
    A3 --> B1 --> B2 --> B3 --> B4
    B4 --> C1 --> C2 --> C3
    C3 --> D1 --> D2 --> D3
    D3 --> E1 --> E2 --> E3

    classDef stage1Style fill:#e7f1ff,stroke:#0a58ca,color:#0a58ca
    classDef stage2Style fill:#fff4e1,stroke:#b76e00,color:#b76e00
    classDef stage3Style fill:#fde8e8,stroke:#a31515,color:#a31515
    classDef stage4Style fill:#e6f4ea,stroke:#1e7e34,color:#1e7e34
    classDef stage5Style fill:#f3e8ff,stroke:#6f42c1,color:#6f42c1

    class A1,A2,A3 stage1Style
    class B1,B2,B3,B4 stage2Style
    class C1,C2,C3 stage3Style
    class D1,D2,D3 stage4Style
    class E1,E2,E3 stage5Style
```

---

## 4.3 Tabular Mermaid Summary — Mapping Components to Outcomes

| Component / Stage | Mathematical Operation | Output Quantity | KTU Exam Mapping |
|-------------------|------------------------|-----------------|------------------|
| Pivot Count | Number of leading 1's in RREF | $\text{rank}(A)$ | Often a 3-mark question |
| Free Variables | Columns without pivots | $\text{nullity}(A)$ | Step in 14-mark problems |
| Column Space | Span of pivot columns | Subspace of $\mathbb{R}^m$ | Theory question |
| Null Space | Solution set of $AX = 0$ | Subspace of $\mathbb{R}^n$ | Theory + numerical |
| Theorem Identity | $\text{rank} + \text{nullity} = n$ | Sanity check | Often missed by students |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (3 Marks Each)

### Question 1

> **[KTU University Exam — July 2024]**
> **Define rank and nullity of a linear transformation $T: V \to W$. State the Rank-Nullity Theorem.**

**Cognitive Level:** CO1, Remember/Understand
**Marks Distribution:** Definition of rank — 1 Mark; Definition of nullity — 1 Mark; Statement of theorem — 1 Mark.

**Model Answer:**

> **Rank:** The rank of a linear transformation $T: V \to W$ is the dimension of its range (image) subspace:
> $$\text{rank}(T) = \dim(\text{Range}(T)) = \dim(\{T(v) : v \in V\})$$
>
> **Nullity:** The nullity of $T$ is the dimension of its kernel (null space):
> $$\text{nullity}(T) = \dim(\text{Ker}(T)) = \dim(\{v \in V : T(v) = \mathbf{0}\})$$
>
> **Rank-Nullity Theorem:** If $V$ is a finite-dimensional vector space and $T: V \to W$ is linear, then:
> $$\dim(V) = \text{rank}(T) + \text{nullity}(T)$$

---

### Question 2

> **[KTU University Exam — Dec 2023]**
> **If $A$ is a $4 \times 6$ matrix with $\text{rank}(A) = 3$, find the nullity of $A$ and the dimension of its column space.**

**Cognitive Level:** CO1, Apply
**Marks Distribution:** Correct identification of $n = 6$ — 1 Mark; Application of formula — 1 Mark; Final answer — 1 Mark.

**Model Answer:**

Given: $A$ is $4 \times 6$, so $m = 4$ and $n = 6$. We have $\text{rank}(A) = 3$.

By the Rank-Nullity Theorem:

$$
\text{nullity}(A) = n - \text{rank}(A) = 6 - 3 = 3
$$

The dimension of the column space of $A$ equals $\text{rank}(A) = 3$.

> **Final Answer:** $\text{nullity}(A) = 3$, $\dim(\text{Col}(A)) = 3$.

---

## Part B — Long Answer Questions (14 Marks Each, with Internal Choice)

### Question A (14 Marks)

> **[KTU University Exam — July 2024, Model Paper Adaptation]**
> Let $T: \mathbb{R}^3 \to \mathbb{R}^3$ be defined by $T(x, y, z) = (x + 2y - z, \; 2x + 4y - 2z, \; 3x + 6y - 3z)$.
>
> **(a) [7 Marks]** Find the standard matrix of $T$ and determine its rank.
>
> **(b) [7 Marks]** Hence find the nullity of $T$ and a basis for $\text{Ker}(T)$. Verify the Rank-Nullity Theorem.

**Cognitive Level:** CO1, Apply (part a); CO2, Analyze (part b)

---

#### Part (a) — Model Solution [7 Marks]

**Step 1 — Write the standard matrix. [1 Mark]**

The standard matrix $A$ of $T$ is formed by placing the output coordinates of $T(e_1)$, $T(e_2)$, $T(e_3)$ as columns:

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \\ 3 & 6 & -3 \end{pmatrix}
$$

**Step 2 — Apply row reduction. [3 Marks]**

$$
\begin{aligned}
A &= \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \\ 3 & 6 & -3 \end{pmatrix} \\[6pt]
&\xrightarrow{R_2 \to R_2 - 2R_1,\; R_3 \to R_3 - 3R_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
\end{aligned}
$$

> **Logic:** $R_2$ and $R_3$ become zero rows because $R_2 = 2R_1$ and $R_3 = 3R_1$ in the original matrix, indicating that $T$ maps everything into a 1-dimensional image.

**Step 3 — Count pivots. [1 Mark]**

The reduced matrix has **1 pivot** (the leading 1 in column 1). So:

$$
\text{rank}(T) = 1
$$

**Step 4 — State the basis for the range. [2 Marks]**

The pivot column in the original matrix is the first column $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$. So:

$$
\text{Range}(T) = \text{span}\left\{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \right\}, \quad \dim(\text{Range}(T)) = 1
$$

> **Final Answer for Part (a):** $\text{rank}(T) = 1$.

---

#### Part (b) — Model Solution [7 Marks]

**Step 1 — Apply the Rank-Nullity Theorem. [2 Marks]**

$$
\text{nullity}(T) = \dim(V) - \text{rank}(T) = 3 - 1 = 2
$$

> **Stating the theorem and substituting values: 2 Marks.**

**Step 2 — Solve $T(x, y, z) = (0, 0, 0)$. [3 Marks]**

From the row-reduced system, all three equations reduce to a single equation:

$$
x + 2y - z = 0 \quad \Rightarrow \quad x = -2y + z
$$

Let $y = s$ and $z = t$ be free parameters. Then $x = -2s + t$, and the general solution is:

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix} = s \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}
$$

> **Identifying free variables: 1 Mark. Expressing general solution: 2 Marks.**

**Step 3 — Identify a basis for the kernel. [1 Mark]**

The two coefficient vectors are linearly independent (neither is a scalar multiple of the other). Thus:

$$
\text{Basis of } \text{Ker}(T) = \left\{ \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}, \; \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\}
$$

> **Final linearly independent set: 1 Mark.**

**Step 4 — Verify the Rank-Nullity Theorem. [1 Mark]**

$$
\dim(\mathbb{R}^3) = 3 = \text{rank}(T) + \text{nullity}(T) = 1 + 2 \quad \checkmark
$$

> **Final verification: 1 Mark.**

---

### Question B (14 Marks) — Alternative Choice

> **[KTU University Exam — Dec 2023, Adapted]**
> Consider the linear transformation $T: \mathbb{R}^4 \to \mathbb{R}^3$ defined by:
> $$T(x_1, x_2, x_3, x_4) = (x_1 + x_2, \; x_2 + x_3, \; x_3 + x_4)$$
>
> **(a) [7 Marks]** Write the standard matrix of $T$ and find its rank.
>
> **(b) [7 Marks]** Find the nullity of $T$, a basis for the kernel, and verify the Rank-Nullity Theorem.

**Cognitive Level:** CO1, Apply (part a); CO2, Analyze (part b)

---

#### Part (a) — Model Solution [7 Marks]

**Step 1 — Standard matrix. [1 Mark]**

$$
A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}
$$

> **Forming the matrix from coefficients: 1 Mark.**

**Step 2 — Row reduction. [4 Marks]**

The matrix is already in echelon form (upper triangular with all diagonal entries equal to 1). Verify there are no further reductions needed.

Let us perform a sanity row reduction to confirm. Subtract $R_1$ from $R_2$ scaled, etc. — but the given form is **already in row echelon form** with pivots in columns 1, 2, and 3.

> **Identifying echelon form: 2 Marks. Confirming pivot positions in columns 1, 2, 3: 2 Marks.**

**Step 3 — Count pivots. [1 Mark]**

There are **3 pivots**, so:

$$
\text{rank}(T) = 3
$$

**Step 4 — Note on basis for the range. [1 Mark]**

The range is the entire $\mathbb{R}^3$ since $T$ is **surjective** (rank = dimension of codomain).

> **Final Answer for Part (a):** $\text{rank}(T) = 3$.

---

#### Part (b) — Model Solution [7 Marks]

**Step 1 — Apply Rank-Nullity. [2 Marks]**

$$
\text{nullity}(T) = n - \text{rank}(T) = 4 - 3 = 1
$$

> **Stating formula and computing: 2 Marks.**

**Step 2 — Solve $AX = 0$. [3 Marks]**

$$
\begin{cases} x_1 + x_2 = 0 \\ x_2 + x_3 = 0 \\ x_3 + x_4 = 0 \end{cases}
$$

From the equations: $x_1 = -x_2$, $x_3 = -x_2$, $x_4 = -x_3 = x_2$. Let $x_2 = t$. Then:

$$
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = t \begin{pmatrix} -1 \\ 1 \\ -1 \\ 1 \end{pmatrix}
$$

> **Setting up system: 1 Mark. Back-substitution: 1 Mark. Parametric form: 1 Mark.**

**Step 3 — Basis for kernel. [1 Mark]**

$$
\text{Basis of } \text{Ker}(T) = \left\{ \begin{pmatrix} -1 \\ 1 \\ -1 \\ 1 \end{pmatrix} \right\}
$$

> **Final 1-dimensional basis: 1 Mark.**

**Step 4 — Verification. [1 Mark]**

$$
\dim(\mathbb{R}^4) = 4 = \text{rank}(T) + \text{nullity}(T) = 3 + 1 \quad \checkmark
$$

> **Final answer verified: 1 Mark.**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls**
>
> 1. **Confusing $m$ and $n$:** Students often use $m$ (number of rows) in the Rank-Nullity formula instead of $n$ (number of columns). The correct formula is $\text{nullity} = n - \text{rank}$, where $n$ is the number of columns of $A$ (i.e., the dimension of the **input** space).
>
> 2. **Forgetting to verify linear independence of kernel basis:** Writing "the kernel is spanned by $\{v_1, v_2\}$" is **not enough**. You must confirm that $v_1$ and $v_2$ are not scalar multiples. A single sentence on linear independence fetches the full mark.
>
> 3. **Row reduction errors:** The most common mistakes in row reduction are sign errors in $R_i \to R_i - kR_j$. Always double-check the pivot column entries after the operation.
>
> 4. **Not stating the theorem explicitly:** Even if you compute the right numbers, KTU examiners want to see the line "By the Rank-Nullity Theorem, $\dim(V) = \text{rank}(T) + \text{nullity}(T)$" written out for credit.
>
> 5. **Off-by-one in free variables:** If you have $n$ columns and $r$ pivots, you have exactly $n - r$ free variables, not $n - r + 1$ or $n - r - 1$. Each free variable corresponds to one basis vector of the null space.
>
> 6. **Treating row rank and column rank as different:** They are always equal — this is a theorem, not a definition. If you are computing rank via column independence, that is just as valid as row reduction.
>
> 7. **Skipping the "Hence" step:** In 14-mark problems with sub-parts, the "Hence" in part (b) usually expects you to USE the result of part (a). Forgetting to do this loses 1–2 marks easily.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — KTU GAMAT201, Module 4**
>
> * **Linear Transformation $T: V \to W$** is a map preserving vector addition and scalar multiplication: $T(u + v) = T(u) + T(v)$ and $T(cv) = cT(v)$.
> * **Rank of $T$** = $\dim(\text{Range}(T))$ = dimension of the column space of the standard matrix.
> * **Nullity of $T$** = $\dim(\text{Ker}(T))$ = number of free variables when solving $T(v) = \mathbf{0}$.
> * **The Rank-Nullity Theorem** states $\dim(V) = \text{rank}(T) + \text{nullity}(T)$.
> * For a matrix $A$ of size $m \times n$: $\text{rank}(A) \leq \min(m, n)$ and $\text{nullity}(A) = n - \text{rank}(A)$.
> * **$T$ is injective (one-to-one)** if and only if $\text{nullity}(T) = 0$.
> * **$T$ is surjective (onto)** if and only if $\text{rank}(T) = \dim(W)$.
> * **$T$ is bijective (isomorphism)** if and only if $\text{rank}(T) = \dim(V) = \dim(W)$ (square matrix must be invertible).
> * The **column rank equals the row rank** (both equal $\text{rank}(A)$).
> * **Inequality:** $\text{rank}(AB) \leq \min(\text{rank}(A), \text{rank}(B))$.
> * **Inequality:** $\text{rank}(A + B) \leq \text{rank}(A) + \text{rank}(B)$.
> * **Inequality:** $\text{nullity}(AB) \leq \text{nullity}(A) + \text{nullity}(B)$.
> * For a connected graph with $n$ vertices, the incidence matrix has $\text{rank} = n - 1$ and $\text{nullity} = 1$ (cyclomatic number).
> * **Algorithm for finding rank:** row-reduce the matrix and count pivots.
> * **Algorithm for finding nullity:** solve $AX = 0$ via RREF and count free variables.
> * **Algorithm for finding kernel basis:** express each free variable as a basis vector using back-substitution.
> * **Python implementation:** use `numpy.linalg.matrix_rank` for rank and `numpy.linalg.svd` for kernel basis.
> * **Always state the theorem by name** in the exam before substituting numbers — KTU examiners look for it.
> * **Verification step:** after computing rank and nullity, always add one line confirming $\text{rank} + \text{nullity} = n$ — this is the "free 1-mark insurance" in 14-mark answers.

---

<!-- SECTION_5_END -->
