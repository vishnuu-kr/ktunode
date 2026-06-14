# Diagonalization process of similarity transformations ($P \cdot D \cdot P^{-1}$), calculating powers of matrices

<!-- SECTION_1_START -->

# Diagonalization and Matrix Powers

> [!NOTE]
> **KTU 2024 Scheme | GAMAT201 – Module 1 | Course Outcome: CO1 | Cognitive Domain: Apply / Analyze**

## 1.1 Formal Academic Definition

**Diagonalization** is a similarity transformation process in which a square matrix $A \in \mathbb{R}^{n \times n}$ is decomposed into a product of three matrices — an invertible modal matrix $P$, a diagonal spectral matrix $D$, and the inverse $P^{-1}$ — such that the relationship

$$A = P \cdot D \cdot P^{-1}$$

holds. The matrix $A$ is then said to be **diagonalizable**.

Equivalently, $D$ is the matrix representation of the linear transformation defined by $A$ in the **eigenvector basis** (also called the canonical basis of eigenvectors). The operation $P^{-1} A P$ (or $P A P^{-1}$, depending on the convention) performs a *change of basis* that aligns the principal axes of the transformation with the standard coordinate axes.

A matrix $A$ is diagonalizable **if and only if** it possesses $n$ linearly independent eigenvectors, where $n$ is the order of $A$. This condition is also equivalent to stating that for every eigenvalue $\lambda_i$, the geometric multiplicity equals the algebraic multiplicity.

## 1.2 Intuitive Overview and Conceptual Analogy

> [!IMPORTANT]
> **Core Idea (in plain English):** Diagonalization is the matrix equivalent of *putting on the right pair of glasses*. When you look at a complex object (matrix $A$) directly, its components (rows and columns) are mixed and confusing. But if you rotate your perspective to align with the object's natural axes (eigenvectors), the object suddenly looks "diagonal" — simple, decoupled, and easy to work with.

**Geometric Analogy — Rotating a Tilted Ellipse:**
Consider an ellipse tilted at some angle in the 2D plane. Its equation in standard coordinates $xy$ contains a cross-term $Bxy$ that makes calculations cumbersome. However, if we **rotate the coordinate axes** to align with the principal axes of the ellipse, the equation becomes beautifully simple:

$$\frac{x'^2}{a^2} + \frac{y'^2}{b^2} = 1$$

There are **no cross-terms** — the equation is now in "diagonal form." The rotation matrix that performed this change of basis is exactly the modal matrix $P$, and the new simplified representation is the diagonal matrix $D$.

**Why It Matters in Information Science:**
In data science and machine learning, a covariance matrix of a dataset is often diagonalized to identify the **principal components** (this is precisely **Principal Component Analysis — PCA**). The eigenvectors form the principal axes, and the eigenvalues represent the variance along each direction. Diagonal matrices are trivial to raise to powers, invert, and exponentiate — making diagonalization the backbone of algorithms like Google's **PageRank**, **Markov chain steady-state analysis**, **image compression (SVD/PCA)**, and the **fast exponentiation of transition matrices**.

> [!VISUALIZATION CONTROL]
> **Concept:** Geometric effect of diagonalization on a 2x2 matrix transformation.
> **GeoGebra Input Equations:**
> * `A = {{2, 1}, {1, 2}}` (sample symmetric matrix)
> * `eigenvalues: λ₁ = 1, λ₂ = 3`
> * `eigenvector1: (1, -1) / √2`
> * `eigenvector2: (1, 1) / √2`
> **Visual Description:** Plot the unit circle, then apply the matrix transformation $A$ — it stretches into a tilted ellipse. Now apply the change of basis $P^{-1}$ first, then $A$, then $P$ — the resulting transformation in the eigenvector basis is a pure stretch along the $x'$ and $y'$ axes (no rotation), which is the diagonal form $D$.

## 1.3 Key Terminology Snapshot

| Term | Mathematical Object | Role in Diagonalization |
| :--- | :--- | :--- |
| **Modal Matrix** | $P$ | Columns are the **linearly independent eigenvectors** of $A$ |
| **Spectral Matrix** | $D$ | Diagonal entries are the **eigenvalues** of $A$ (in matching order) |
| **Spectral Mapping Theorem** | $A \mathbf{v}_i = \lambda_i \mathbf{v}_i$ | The fundamental equation that powers the entire process |
| **Characteristic Polynomial** | $\det(A - \lambda I) = 0$ | Source equation for the eigenvalues |
| **Geometric Multiplicity** | $\dim(\text{Null}(A - \lambda_i I))$ | Number of independent eigenvectors per eigenvalue |

> [!TIP]
> **Memory Hook:** *"**P**ulls the eigenvectors into columns, **D**isplays eigenvalues on the diagonal"* — the order matters! The $i$-th column of $P$ corresponds to the $i$-th eigenvalue placed at $D_{ii}$.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis and KTU High-Yield Formula Sheet

## 2.1 Theoretical Foundations

The diagonalization theorem rests on the following logical chain:

1. **Spectral Equation Foundation:** If $\mathbf{v}_i$ is an eigenvector of $A$ with eigenvalue $\lambda_i$, then $A \mathbf{v}_i = \lambda_i \mathbf{v}_i$. Writing this compactly for $n$ such pairs:
$$A \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \end{bmatrix} = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix}$$

2. **Matrix Form Recognition:** Defining $P = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \end{bmatrix}$ and $D = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$, the above equation reduces to:
$$A P = P D$$

3. **Invertibility Requirement:** Since the eigenvectors are linearly independent, $\det(P) \neq 0$, so $P^{-1}$ exists. Multiplying both sides of $AP = PD$ on the right by $P^{-1}$:
$$A = P D P^{-1}$$

This is the **canonical diagonalization identity**.

## 2.2 Necessary and Sufficient Conditions for Diagonalization

A matrix $A \in \mathbb{R}^{n \times n}$ is diagonalizable if and only if **any one** of the following equivalent conditions holds:

- **(C1)** $A$ has $n$ linearly independent eigenvectors.
- **(C2)** The geometric multiplicity of every eigenvalue equals its algebraic multiplicity.
- **(C3)** The sum of the dimensions of all eigenspaces equals $n$.
- **(C4)** (For real symmetric matrices) Every real symmetric matrix is orthogonally diagonalizable: $A = Q \Lambda Q^T$, where $Q$ is orthogonal.

> [!WARNING]
> **Common KTU Pitfall:** Having $n$ distinct eigenvalues is a **sufficient** but not **necessary** condition. A matrix with repeated eigenvalues can still be diagonalizable (e.g., the identity matrix $I = I \cdot I \cdot I^{-1}$). Conversely, a matrix with all distinct eigenvalues is **always** diagonalizable.

## 2.3 The Step-by-Step Diagonalization Procedure

**Step 1 — Characteristic Equation:** Compute the eigenvalues by solving
$$\det(A - \lambda I) = 0$$
where $I$ is the $n \times n$ identity matrix. The roots of this polynomial (possibly repeated) are the eigenvalues.

**Step 2 — Eigenspace Construction:** For each distinct eigenvalue $\lambda_i$, solve the homogeneous system
$$(A - \lambda_i I) \mathbf{x} = \mathbf{0}$$
The set of all solutions forms the eigenspace $E_{\lambda_i} = \text{Null}(A - \lambda_i I)$.

**Step 3 — Basis Selection:** Select a basis of $n$ linearly independent eigenvectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$ — one (or more) from each eigenspace, ensuring the total count reaches $n$.

**Step 4 — Assemble $P$ and $D$:** Place eigenvectors as **columns** of $P$ in the same order as the corresponding eigenvalues placed on the **diagonal** of $D$.

**Step 5 — Verify:** Confirm $AP = PD$ (and equivalently, $A = PDP^{-1}$). Compute $P^{-1}$ only when needed.

## 2.4 Matrix Powers via Diagonalization

The single most important **engineering utility** of diagonalization is the effortless computation of $A^n$ for any positive integer $n$ (or even $n \in \mathbb{Z}$ if $A$ is invertible, and $n \in \mathbb{R}$ via matrix exponentiation $e^{At}$).

**The Recursive Multiplication Argument:**

$$A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PDIDP^{-1} = PD^2P^{-1}$$

By induction, the inner $P^{-1}P$ pairs collapse to $I$ at each step, leaving:

$$\boxed{A^n = P D^n P^{-1}}$$

where $D^n$ is computed by raising **each diagonal entry** to the $n$-th power:
$$D^n = \begin{bmatrix} \lambda_1^n & 0 & \cdots & 0 \\ 0 & \lambda_2^n & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n^n \end{bmatrix}$$

## 2.5 KTU Formula Sheet / Cheat Sheet

| \# | Formula / Identity | Description | Engineering Use Case |
| :--- | :--- | :--- | :--- |
| 1 | $A = P D P^{-1}$ | The diagonalization identity | Core theoretical statement |
| 2 | $\det(A - \lambda I) = 0$ | Characteristic equation | Eigenvalue computation |
| 3 | $A \mathbf{v}_i = \lambda_i \mathbf{v}_i$ | Spectral mapping | Eigenspace generation |
| 4 | $A^n = P D^n P^{-1}$ | Power formula | Fast matrix exponentiation |
| 5 | $D^n = \text{diag}(\lambda_1^n, \lambda_2^n, \ldots, \lambda_n^n)$ | Diagonal power rule | Sequential algorithm evaluation |
| 6 | $A^{-1} = P D^{-1} P^{-1}$ | Inverse via diagonalization | Solving linear systems efficiently |
| 7 | $e^{A} = P \, e^{D} \, P^{-1}$ where $e^{D} = \text{diag}(e^{\lambda_i})$ | Matrix exponential | Continuous-time Markov chains, ODEs |
| 8 | $\text{tr}(A) = \sum \lambda_i = \text{tr}(D)$ | Trace invariance | Sanity check on eigenvalues |
| 9 | $\det(A) = \prod \lambda_i = \det(D)$ | Determinant as eigenvalue product | Sanity check on eigenvalues |
| 10 | $A^T = A \Rightarrow A = Q \Lambda Q^T$ | Spectral theorem (symmetric case) | PCA, SVD, quadratic forms |

> [!TIP]
> **Cross-Verification Rule:** Always validate your diagonalization using $\text{tr}(A) = \sum \lambda_i$ and $\det(A) = \prod \lambda_i$. If these don't match, the eigenvalues are wrong and the entire $P$ and $D$ are invalid.

## 2.6 Real-World Engineering Applications

- **Markov Chains (Steady State):** A transition matrix $T$ converges as $T^n \to T^{\infty}$, where the dominant eigenvalue $\lambda_1 = 1$ gives the stationary distribution.
- **Google PageRank:** The hyperlink matrix is diagonalized to find the dominant eigenvector — the page ranking vector.
- **Recurrence Relations:** The Fibonacci sequence matrix $\begin{bmatrix} F_{n+1} \\ F_n \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}^n \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ is closed-form via diagonalization (Binet's formula).
- **Differential Equations:** Systems $\mathbf{x}'(t) = A \mathbf{x}(t)$ are solved by $e^{At} = P \, e^{Dt} \, P^{-1}$.
- **Quantum Computing:** Unitary operators are diagonalized in the eigenbasis to compute gate action efficiently.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations and Symbolic Implementation

## 3.1 Comprehensive Worked Example — Full Diagonalization

**Problem:** Diagonalize the matrix
$$A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$$
and use the result to compute $A^5$.

### Step A: Compute the Characteristic Polynomial

We form $A - \lambda I$ and compute its determinant:
$$A - \lambda I = \begin{bmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{bmatrix}$$

$$\det(A - \lambda I) = (4 - \lambda)(3 - \lambda) - (1)(2)$$

Expanding:
$$= 12 - 4\lambda - 3\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10$$

Setting this equal to zero:
$$\lambda^2 - 7\lambda + 10 = 0$$

Factoring:
$$(\lambda - 5)(\lambda - 2) = 0 \quad \Longrightarrow \quad \lambda_1 = 5, \quad \lambda_2 = 2$$

**Validation using the Trace-Determinant Sanity Check:**
- $\text{tr}(A) = 4 + 3 = 7$, and $\lambda_1 + \lambda_2 = 5 + 2 = 7$ ✓
- $\det(A) = (4)(3) - (1)(2) = 10$, and $\lambda_1 \cdot \lambda_2 = 5 \times 2 = 10$ ✓

### Step B: Find the Eigenvector for $\lambda_1 = 5$

We solve $(A - 5I) \mathbf{v} = \mathbf{0}$:
$$\begin{bmatrix} 4 - 5 & 1 \\ 2 & 3 - 5 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \quad \Longrightarrow \quad \begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

From the first row: $-x + y = 0 \Rightarrow y = x$. Choosing $x = 1$:
$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

> [!NOTE]
> **Row-Reduction Note:** The second row $2x - 2y = 0$ is just twice the first row, confirming we have one free variable and the eigenspace is 1-dimensional (correct since $\lambda_1$ has algebraic multiplicity 1).

### Step C: Find the Eigenvector for $\lambda_2 = 2$

We solve $(A - 2I) \mathbf{v} = \mathbf{0}$:
$$\begin{bmatrix} 4 - 2 & 1 \\ 2 & 3 - 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \quad \Longrightarrow \quad \begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

From the first row: $2x + y = 0 \Rightarrow y = -2x$. Choosing $x = 1$:
$$\mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$$

### Step D: Assemble the Modal Matrix $P$ and the Spectral Matrix $D$

$$P = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}, \qquad D = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$$

**Computing $P^{-1}$:** The determinant is $\det(P) = (1)(-2) - (1)(1) = -2 - 1 = -3$. The adjugate matrix is:
$$\text{adj}(P) = \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$$

Therefore:
$$P^{-1} = \frac{1}{-3} \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{bmatrix}$$

### Step E: Verify the Diagonalization $A = P D P^{-1}$

First, compute $P D$:
$$P D = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 5 & 2 \\ 5 & -4 \end{bmatrix}$$

Next, compute $(P D) P^{-1}$:
$$\begin{bmatrix} 5 & 2 \\ 5 & -4 \end{bmatrix} \begin{bmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{bmatrix} = \begin{bmatrix} (5)(2/3) + (2)(1/3) & (5)(1/3) + (2)(-1/3) \\ (5)(2/3) + (-4)(1/3) & (5)(1/3) + (-4)(-1/3) \end{bmatrix}$$

$$= \begin{bmatrix} 10/3 + 2/3 & 5/3 - 2/3 \\ 10/3 - 4/3 & 5/3 + 4/3 \end{bmatrix} = \begin{bmatrix} 12/3 & 3/3 \\ 6/3 & 9/3 \end{bmatrix} = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} = A \quad \checkmark$$

### Step F: Compute $A^5$ via the Diagonalization Power Formula

$$A^5 = P D^5 P^{-1}$$

Since $D = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$, we get:
$$D^5 = \begin{bmatrix} 5^5 & 0 \\ 0 & 2^5 \end{bmatrix} = \begin{bmatrix} 3125 & 0 \\ 0 & 32 \end{bmatrix}$$

Now compute $P D^5$:
$$P D^5 = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} 3125 & 0 \\ 0 & 32 \end{bmatrix} = \begin{bmatrix} 3125 & 32 \\ 3125 & -64 \end{bmatrix}$$

Now compute $A^5 = (P D^5) P^{-1}$:
$$\begin{bmatrix} 3125 & 32 \\ 3125 & -64 \end{bmatrix} \begin{bmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{bmatrix}$$

**Entry (1,1):** $(3125)(2/3) + (32)(1/3) = 6250/3 + 32/3 = 6282/3 = 2094$
**Entry (1,2):** $(3125)(1/3) + (32)(-1/3) = 3125/3 - 32/3 = 3093/3 = 1031$
**Entry (2,1):** $(3125)(2/3) + (-64)(1/3) = 6250/3 - 64/3 = 6186/3 = 2062$
**Entry (2,2):** $(3125)(1/3) + (-64)(-1/3) = 3125/3 + 64/3 = 3189/3 = 1063$$

$$\boxed{A^5 = \begin{bmatrix} 2094 & 1031 \\ 2062 & 1063 \end{bmatrix}}$$

> [!IMPORTANT]
> **Engineering Insight:** Computing $A^5$ by direct multiplication would require 4 successive $2 \times 2$ matrix multiplications. Using diagonalization, we needed only one matrix inverse, two cheap multiplications, and a power of scalars on the diagonal — a dramatic efficiency gain that becomes exponential in $n$ (the matrix order).

## 3.2 Python Implementation (Production-Grade)

```python
import numpy as np
from typing import Tuple, Optional

def diagonalize_matrix(A: np.ndarray, verbose: bool = True) -> Tuple[Optional[np.ndarray], Optional[np.ndarray], bool]:
    """
    Diagonalizes a square matrix A via spectral decomposition.
    
    Computes P and D such that A = P @ D @ P^{-1}.
    
    Args:
        A: A square (n x n) NumPy array.
        verbose: If True, prints diagnostic information.
    
    Returns:
        A tuple (P, D, success_flag). P and D are None if A is not diagonalizable.
    """
    # --- Input validation ---
    if A.ndim != 2 or A.shape[0] != A.shape[1]:
        raise ValueError("Input matrix A must be a square 2D array.")
    
    n = A.shape[0]
    
    # --- Step 1: Compute eigenvalues and eigenvectors ---
    eigenvalues, eigenvectors = np.linalg.eig(A)
    
    if verbose:
        print(f"[INFO] Computed eigenvalues: {eigenvalues}")
        print(f"[INFO] Eigenvector matrix shape: {eigenvectors.shape}")
    
    # --- Step 2: Check linear independence of eigenvectors ---
    if np.linalg.matrix_rank(eigenvectors) < n:
        if verbose:
            print("[WARNING] Eigenvectors are linearly dependent. Matrix is NOT diagonalizable.")
        return None, None, False
    
    # --- Step 3: Assemble P and D ---
    P = eigenvectors
    D = np.diag(eigenvalues).real  # Real part for safety with near-zero imag components
    
    # --- Step 4: Verify reconstruction ---
    P_inv = np.linalg.inv(P)
    reconstruction_error = np.linalg.norm(A - (P @ D @ P_inv), ord='fro')
    
    if verbose:
        print(f"[INFO] Reconstruction error (Frobenius norm): {reconstruction_error:.2e}")
        if reconstruction_error < 1e-8:
            print("[SUCCESS] Diagonalization verified: A ≈ P @ D @ P^{-1}.")
        else:
            print("[CAUTION] Reconstruction error is large; check numerical stability.")
    
    return P, D, True


def matrix_power_via_diagonalization(A: np.ndarray, n: int) -> np.ndarray:
    """
    Computes A^n using diagonalization: A^n = P @ D^n @ P^{-1}.
    
    Args:
        A: Square (n x n) NumPy array.
        n: Non-negative integer power to compute.
    
    Returns:
        The matrix A raised to the n-th power.
    """
    if n < 0:
        raise ValueError("Negative powers require A to be invertible; use np.linalg.matrix_power(A, n) instead.")
    
    if n == 0:
        return np.eye(A.shape[0])
    
    P, D, success = diagonalize_matrix(A, verbose=False)
    
    if not success:
        print("[FALLBACK] Matrix not diagonalizable; using iterative multiplication.")
        result = np.eye(A.shape[0])
        for _ in range(n):
            result = result @ A
        return result
    
    D_n = np.diag(np.diag(D) ** n)
    return P @ D_n @ np.linalg.inv(P)


# ===== Demonstration on the worked example =====
if __name__ == "__main__":
    A = np.array([[4, 1],
                  [2, 3]], dtype=float)
    
    print("=" * 60)
    print("DEMONSTRATION: Diagonalization and Matrix Powers")
    print("=" * 60)
    
    P, D, ok = diagonalize_matrix(A, verbose=True)
    print(f"\nModal matrix P:\n{P}\n")
    print(f"Spectral matrix D:\n{D}\n")
    
    A5_diagonal = matrix_power_via_diagonalization(A, 5)
    A5_direct = np.linalg.matrix_power(A.astype(int), 5)
    
    print(f"A^5 via diagonalization:\n{A5_diagonal.astype(int)}\n")
    print(f"A^5 via direct NumPy computation:\n{A5_direct}\n")
    
    assert np.allclose(A5_diagonal, A5_direct), "Mismatch between methods!"
    print("[VERIFIED] Diagonalization method matches direct computation.")
```

**Expected Output (truncated):**
```
[INFO] Computed eigenvalues: [5. 2.]
[INFO] Eigenvector matrix shape: (2, 2)
[INFO] Reconstruction error (Frobenius norm): 0.00e+00
[SUCCESS] Diagonalization verified.

A^5 via diagonalization:
[[2094 1031]
 [2062 1063]]

[VERIFIED] Diagonalization method matches direct computation.
```

## 3.3 Edge Cases and Special Scenarios

| Scenario | Behaviour | Example |
| :--- | :--- | :--- |
| **Repeated eigenvalues, full eigenspace** | Diagonalizable | $A = I_n$ (identity) |
| **Repeated eigenvalues, deficient eigenspace** | **NOT** diagonalizable | $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ (defective) |
| **Complex eigenvalues (real matrix)** | Diagonalizable over $\mathbb{C}$ | Rotation matrices |
| **Zero determinant** | $0$ is an eigenvalue; $A$ singular but may still diagonalize | Projection matrices |
| **All distinct eigenvalues** | Always diagonalizable | Generic $n \times n$ random matrix |

> [!WARNING]
> **Defective Matrix Pitfall:** For a Jordan block like $\begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}$, the geometric multiplicity of $\lambda$ is 1 but the algebraic multiplicity is 2. Such matrices are **not** diagonalizable in the classical sense — they require the **Jordan Normal Form** as a generalization.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams and Schematics

## 4.1 Diagonalization Process Flow

The following Mermaid flowchart maps the entire algorithmic decision flow for determining whether a given matrix is diagonalizable and producing the $P$ and $D$ matrices.

```mermaid
flowchart TD
    startA([Start: Input Matrix A]) --> inputCheck{"Is A<br>square?"}
    inputCheck -- No --> errExit1[/"Error:<br>Non-square input"/]
    inputCheck -- Yes --> charPoly[Compute characteristic<br>polynomial det A minus lambda I]
    charPoly --> eigenSolve[Solve det A minus lambda I = 0<br>to find eigenvalues]
    eigenSolve --> distinctCount{"Are all n<br>eigenvalues<br>distinct?"}
    distinctCount -- Yes --> fullIndep[Obtain n linearly<br>independent eigenvectors]
    distinctCount -- No --> multCheck[For each repeated eigenvalue:<br>compute geometric<br>multiplicity]
    multCheck --> multDecision{"Geometric mult =<br>Algebraic mult<br>for ALL eigenvalues?"}
    multDecision -- No --> notDiag[/"A is NOT diagonalizable<br>Return failure"/]
    multDecision -- Yes --> fullIndep
    fullIndep --> buildP[Form modal matrix P<br>eigenvectors as columns]
    buildP --> buildD[Form spectral matrix D<br>eigenvalues on diagonal<br>in matching order]
    buildD --> verifyStep[Verify: A P equals P D]
    verifyStep --> verifyQ{"Reconstruction<br>error less than 1e-8?"}
    verifyQ -- No --> numWarn[/"Numerical instability:<br>Re-examine with care"/]
    verifyQ -- Yes --> powerReady[Ready: A equals P D P inverse]
    powerReady --> powerUse["Compute A to the n:<br>A to the n equals P D to the n P inverse<br>D to the n: raise each diagonal entry"]
    powerUse --> endA([End: Output P, D, A to the n])
    numWarn --> endA
    notDiag --> endA
    errExit1 --> endA

    style startA fill:#4A90E2,stroke:#2C5F8D,color:#FFFFFF
    style endA fill:#4A90E2,stroke:#2C5F8D,color:#FFFFFF
    style powerReady fill:#7ED321,stroke:#4A8B0F,color:#FFFFFF
    style powerUse fill:#7ED321,stroke:#4A8B0F,color:#FFFFFF
    style notDiag fill:#D0021B,stroke:#7A0113,color:#FFFFFF
    style errExit1 fill:#D0021B,stroke:#7A0113,color:#FFFFFF
    style numWarn fill:#F5A623,stroke:#A06B0C,color:#FFFFFF
```

## 4.2 Sequential Processing Topology for Matrix Power Computation

This diagram illustrates the computational pipeline when computing $A^n$ for large $n$ (e.g., $n = 1000$) — a critical use case in cryptography, Markov chains, and graph algorithms.

```mermaid
flowchart LR
    inputA[Input: Matrix A] --> eigenDecomp[Step 1: Diagonalize A<br>Compute eigenvalues and eigenvectors]
    eigenDecomp --> modSpec[Step 2: Extract P and D]
    modSpec --> powerD[Step 3: Compute D to the k<br>Raise each diagonal entry<br>to the power k]
    powerD --> recon[Step 4: Reconstruct<br>P times D to the k times P inverse]
    recon --> outputAk[Output: A to the k]

    subgraph "Numerical Stability Layer"
        condCheck{Is condition number<br>of P less than 1e10?}
        condCheck -- No --> regWarn[Apply regularization<br>or use iterative method]
        condCheck -- Yes --> recon
        regWarn --> recon
    end

    powerD --> condCheck

    style inputA fill:#4A90E2,stroke:#2C5F8D,color:#FFFFFF
    style outputAk fill:#7ED321,stroke:#4A8B0F,color:#FFFFFF
    style powerD fill:#F8E71C,stroke:#9C9A0F,color:#000000
    style condCheck fill:#F5A623,stroke:#A06B0C,color:#FFFFFF
```

## 4.3 Functional Architecture: Diagonalization in an Information Science Pipeline

```mermaid
flowchart TB
    subgraph DataInput["Data Acquisition Layer"]
        rawData[Raw Dataset X] --> covComp[Compute Covariance Matrix<br>Sigma equals 1 over N times X transpose X]
    end

    subgraph DiagEngine["Diagonalization Engine"]
        covComp --> eigDecomp2[Eigendecomposition of Sigma<br>Sigma equals V Lambda V transpose]
        eigDecomp2 --> sortEigen[Sort eigenvalues descending<br>Select top k components]
    end

    subgraph DownstreamApp["Downstream Application"]
        sortEigen --> pcaOut[Principal Components:<br>Reduced representation]
        sortEigen --> clusterOut[Clustering Input<br>Spectral clustering]
        sortEigen --> classifyOut[Feature Vector<br>for classification]
    end

    style rawData fill:#9013FE,stroke:#5A0F8C,color:#FFFFFF
    style covComp fill:#4A90E2,stroke:#2C5F8D,color:#FFFFFF
    style eigDecomp2 fill:#7ED321,stroke:#4A8B0F,color:#FFFFFF
    style sortEigen fill:#F8E71C,stroke:#9C9A0F,color:#000000
    style pcaOut fill:#50E3C2,stroke:#2E9B8C,color:#000000
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank and Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam – Dec 2023]`
**CO1 | RBT Level: Remember**

**State the necessary and sufficient condition for a square matrix to be diagonalizable. If $A = \begin{bmatrix} 3 & 4 \\ 1 & 0 \end{bmatrix}$, verify whether the condition is satisfied.**

**Model Answer:**

A square matrix $A$ of order $n$ is diagonalizable **if and only if** it possesses $n$ linearly independent eigenvectors, which is equivalent to saying that the geometric multiplicity of every eigenvalue equals its algebraic multiplicity.

*Step 1 — Find eigenvalues of $A$:*
$$\det(A - \lambda I) = \det\begin{bmatrix} 3 - \lambda & 4 \\ 1 & -\lambda \end{bmatrix} = (3 - \lambda)(-\lambda) - 4 = \lambda^2 - 3\lambda - 4$$

*Step 2 — Solve:*
$$\lambda^2 - 3\lambda - 4 = 0 \quad \Rightarrow \quad (\lambda - 4)(\lambda + 1) = 0 \quad \Rightarrow \quad \lambda_1 = 4, \, \lambda_2 = -1$$

Since the two eigenvalues are distinct, the matrix automatically has 2 linearly independent eigenvectors. **The condition is satisfied**, and $A$ is diagonalizable.

*Valuation Key:* [Condition statement: 1 Mark] [Characteristic polynomial: 1 Mark] [Distinct eigenvalues conclusion: 1 Mark]

### Question 2 `[KTU University Exam – July 2024]`
**CO1 | RBT Level: Understand**

**Explain in 4-5 lines how diagonalization simplifies the computation of $A^{10}$ for a $3 \times 3$ matrix.**

**Model Answer:**

If a matrix $A$ can be written as $A = P D P^{-1}$, where $D$ is a diagonal matrix with eigenvalues $\lambda_1, \lambda_2, \lambda_3$ on its diagonal, then raising $A$ to the $n$-th power yields $A^n = P D^n P^{-1}$. The matrix $D^n$ is obtained simply by raising each diagonal entry to the $n$-th power: $D^n = \text{diag}(\lambda_1^n, \lambda_2^n, \lambda_3^n)$. This avoids the need to perform 9 tedious multiplications of $A$ with itself ten times. Instead, we compute one matrix inverse, two matrix multiplications, and three scalar exponentiations — a vastly more efficient approach.

*Valuation Key:* [Formula $A^n = P D^n P^{-1}$: 1 Mark] [Diagonal power rule: 1 Mark] [Efficiency explanation: 1 Mark]

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question A `[KTU University Exam – Dec 2023 | Module 1]`
**CO1, CO2 | RBT Levels: Understand (Part a) + Apply (Part b)**

**Diagonalize the matrix**
$$A = \begin{bmatrix} 6 & -2 & 2 \\ -2 & 3 & -1 \\ 2 & -1 & 3 \end{bmatrix}$$
and hence compute $A^4$.

#### Part (a) — Diagonalization [7 Marks]

**Step 1: Characteristic Equation** `[Computing $\det(A - \lambda I)$: 1 Mark]`

$$A - \lambda I = \begin{bmatrix} 6 - \lambda & -2 & 2 \\ -2 & 3 - \lambda & -1 \\ 2 & -1 & 3 - \lambda \end{bmatrix}$$

Expanding along the first row:
$$\det(A - \lambda I) = (6 - \lambda)[(3 - \lambda)(3 - \lambda) - (-1)(-1)] - (-2)[(-2)(3 - \lambda) - (-1)(2)] + 2[(-2)(-1) - (3 - \lambda)(2)]$$

$$= (6 - \lambda)[(3 - \lambda)^2 - 1] + 2[-2(3 - \lambda) + 2] + 2[2 - 2(3 - \lambda)]$$

$$= (6 - \lambda)[\lambda^2 - 6\lambda + 8] + 2[-6 + 2\lambda + 2] + 2[2 - 6 + 2\lambda]$$

$$= (6 - \lambda)(\lambda^2 - 6\lambda + 8) + 2(2\lambda - 4) + 2(2\lambda - 4)$$

$$= (6 - \lambda)(\lambda^2 - 6\lambda + 8) + 4(2\lambda - 4)$$

$$= 6\lambda^2 - 36\lambda + 48 - \lambda^3 + 6\lambda^2 - 8\lambda + 8\lambda - 16$$

$$= -\lambda^3 + 12\lambda^2 - 36\lambda + 32$$

Setting this to zero:
$$\lambda^3 - 12\lambda^2 + 36\lambda - 32 = 0$$

**Step 2: Solving the cubic** `[Factoring the polynomial: 1 Mark]`

Testing $\lambda = 2$: $8 - 48 + 72 - 32 = 0$ ✓. Factoring out $(\lambda - 2)$:
$$\lambda^3 - 12\lambda^2 + 36\lambda - 32 = (\lambda - 2)(\lambda^2 - 10\lambda + 16) = (\lambda - 2)(\lambda - 2)(\lambda - 8) = (\lambda - 2)^2(\lambda - 8)$$

Thus the eigenvalues are: $\lambda_1 = 2$ (algebraic multiplicity 2) and $\lambda_2 = 8$ (algebraic multiplicity 1). `[Stating eigenvalues: 1 Mark]`

**Step 3: Eigenspace for $\lambda_1 = 2$** `[Solving $(A - 2I)\mathbf{x} = \mathbf{0}$: 1 Mark]`

$$A - 2I = \begin{bmatrix} 4 & -2 & 2 \\ -2 & 1 & -1 \\ 2 & -1 & 1 \end{bmatrix}$$

Row-reducing: $R_2 \to 2R_2 + R_1$ gives $\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}$, and $R_3 \to R_3 - \frac{1}{2} R_1$ gives $\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}$. So the rank is 1, and the null space has dimension 2.

The reduced system is $4x - 2y + 2z = 0$, i.e., $2x - y + z = 0$, giving $y = 2x + z$.

Choosing $x = 1, z = 0$: $\mathbf{v}_1 = (1, 2, 0)^T$. Choosing $x = 0, z = 1$: $\mathbf{v}_2 = (0, 1, 1)^T$.

**Geometric multiplicity = 2 = Algebraic multiplicity** ✓ (diagonalizable).

**Step 4: Eigenspace for $\lambda_2 = 8$** `[Solving $(A - 8I)\mathbf{x} = \mathbf{0}$: 1 Mark]`

$$A - 8I = \begin{bmatrix} -2 & -2 & 2 \\ -2 & -5 & -1 \\ 2 & -1 & -5 \end{bmatrix}$$

Adding $R_1$ to $R_2$: $\begin{bmatrix} -4 & -7 & 1 \end{bmatrix}$. Adding $R_1$ to $R_3$: $\begin{bmatrix} 0 & -3 & -3 \end{bmatrix}$, i.e., $y = -z$.

From $R_1$: $-2x - 2(-z) + 2z = 0 \Rightarrow -2x + 4z = 0 \Rightarrow x = 2z$. Choosing $z = 1$: $\mathbf{v}_3 = (2, -1, 1)^T$.

**Step 5: Assembling $P$ and $D$** `[Forming matrices: 2 Marks]`

$$P = \begin{bmatrix} 1 & 0 & 2 \\ 2 & 1 & -1 \\ 0 & 1 & 1 \end{bmatrix}, \qquad D = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 8 \end{bmatrix}$$

---

#### Part (b) — Computing $A^4$ [7 Marks]

**Step 1: Computing $D^4$** `[Diagonal power rule: 1 Mark]`

$$D^4 = \begin{bmatrix} 2^4 & 0 & 0 \\ 0 & 2^4 & 0 \\ 0 & 0 & 8^4 \end{bmatrix} = \begin{bmatrix} 16 & 0 & 0 \\ 0 & 16 & 0 \\ 0 & 0 & 4096 \end{bmatrix}$$

**Step 2: Computing $P^{-1}$** `[Inverse computation: 2 Marks]`

$\det(P) = 1(1 \cdot 1 - (-1) \cdot 1) - 0 + 2(2 \cdot 1 - 1 \cdot 0) = 1(2) + 2(2) = 6$.

$$P^{-1} = \frac{1}{6} \begin{bmatrix} 2 & 2 & -2 \\ -2 & 1 & 5 \\ 2 & -1 & 1 \end{bmatrix}$$

**Step 3: Computing $P D^4$** `[Matrix multiplication: 1 Mark]`

$$P D^4 = \begin{bmatrix} 1 & 0 & 2 \\ 2 & 1 & -1 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} 16 & 0 & 0 \\ 0 & 16 & 0 \\ 0 & 0 & 4096 \end{bmatrix} = \begin{bmatrix} 16 & 0 & 8192 \\ 32 & 16 & -4096 \\ 0 & 16 & 4096 \end{bmatrix}$$

**Step 4: Computing $A^4 = P D^4 P^{-1}$** `[Final multiplication: 2 Marks] [Simplification: 1 Mark]$$

$$A^4 = \frac{1}{6} \begin{bmatrix} 16 & 0 & 8192 \\ 32 & 16 & -4096 \\ 0 & 16 & 4096 \end{bmatrix} \begin{bmatrix} 2 & 2 & -2 \\ -2 & 1 & 5 \\ 2 & -1 & 1 \end{bmatrix}$$

Computing entry by entry (using $\frac{1}{6}$ factor at the end):

- **(1,1):** $16(2) + 0(-2) + 8192(2) = 32 + 16384 = 16416$; divided by 6: $2736$
- **(1,2):** $16(2) + 0(1) + 8192(-1) = 32 - 8192 = -8160$; divided by 6: $-1360$
- **(1,3):** $16(-2) + 0(5) + 8192(1) = -32 + 8192 = 8160$; divided by 6: $1360$
- **(2,1):** $32(2) + 16(-2) + (-4096)(2) = 64 - 32 - 8192 = -8160$; divided by 6: $-1360$
- **(2,2):** $32(2) + 16(1) + (-4096)(-1) = 64 + 16 + 4096 = 4176$; divided by 6: $696$
- **(2,3):** $32(-2) + 16(5) + (-4096)(1) = -64 + 80 - 4096 = -4080$; divided by 6: $-680$
- **(3,1):** $0(2) + 16(-2) + 4096(2) = -32 + 8192 = 8160$; divided by 6: $1360$
- **(3,2):** $0(2) + 16(1) + 4096(-1) = 16 - 4096 = -4080$; divided by 6: $-680$
- **(3,3):** $0(-2) + 16(5) + 4096(1) = 80 + 4096 = 4176$; divided by 6: $696$

$$\boxed{A^4 = \begin{bmatrix} 2736 & -1360 & 1360 \\ -1360 & 696 & -680 \\ 1360 & -680 & 696 \end{bmatrix}}$$

---

### Question B `[KTU University Exam – July 2024 | Module 1]`
**CO1, CO2 | RBT Levels: Apply (Part a) + Analyze (Part b)**

**Verify that the matrix $A = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 2 \end{bmatrix}$ is defective (NOT diagonalizable) using the eigenvalue test, and explain why the Jordan Normal Form would be required for computing $A^4$ in this case.**

#### Part (a) — Eigenvalue and Eigenvector Analysis [7 Marks]

**Step 1: Characteristic Polynomial** `[Determinant expansion: 2 Marks]`

Since $A$ is lower triangular, the eigenvalues are the diagonal entries:
$$\lambda_1 = 1, \quad \lambda_2 = 2, \quad \lambda_3 = 2$$

So $\lambda = 2$ has algebraic multiplicity 2. `[Eigenvalue statement: 1 Mark]`

**Step 2: Eigenspace for $\lambda_1 = 1$** `[Solving $(A - I)\mathbf{x} = 0$: 1 Mark]`

$$A - I = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{bmatrix}$$

From $R_2$: $x + y = 0 \Rightarrow y = -x$. From $R_3$: $y + z = 0 \Rightarrow z = -y = x$. So $\mathbf{v}_1 = (1, -1, 1)^T$. The eigenspace is 1-dimensional.

**Step 3: Eigenspace for $\lambda_2 = 2$** `[Solving $(A - 2I)\mathbf{x} = 0$: 2 Marks]`

$$A - 2I = \begin{bmatrix} -1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$$

From $R_1$: $x = 0$. From $R_2$: trivially satisfied. From $R_3$: $y = 0$. The variable $z$ is free.

So the eigenspace is spanned by $\mathbf{v}_2 = (0, 0, 1)^T$, and its dimension (geometric multiplicity) is 1. `[Geometric mult statement: 1 Mark]`

**Conclusion:** Since geometric multiplicity (1) $\neq$ algebraic multiplicity (2) for $\lambda = 2$, the matrix $A$ is **defective** and **NOT diagonalizable**. `[Defectiveness conclusion: 0 Marks — implicit]`

---

#### Part (b) — Jordan Normal Form and Power Computation [7 Marks]

**Step 1: Jordan Block Structure** `[Identifying Jordan form: 1 Mark]`

The Jordan Normal Form of $A$ is:
$$J = P^{-1} A P = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{bmatrix}$$

with one $1 \times 1$ block and one $2 \times 2$ Jordan block for $\lambda = 2$.

**Step 2: Generalized Eigenvector Computation** `[Finding generalized eigenvector: 2 Marks]`

We need a generalized eigenvector $\mathbf{w}$ such that $(A - 2I)\mathbf{w} = \mathbf{v}_2 = (0, 0, 1)^T$.

$$\begin{bmatrix} -1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} w_1 \\ w_2 \\ w_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$$

From $R_1$: $w_1 = 0$. From $R_2$: satisfied. From $R_3$: $w_2 = 1$. So $\mathbf{w} = (0, 1, 0)^T$.

**Step 3: Form the Generalized Modal Matrix** `[Assembling $P$ and $J$: 1 Mark]`

$$P = \begin{bmatrix} 1 & 0 & 0 \\ -1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}, \qquad A = P J P^{-1}$$

**Step 4: Computing $J^4$** `[Jordan power formula: 2 Marks]`

For a $2 \times 2$ Jordan block $J_2 = \lambda I + N$ where $N = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$ and $N^2 = 0$:
$$J_2^n = \lambda^n I + n \lambda^{n-1} N = \begin{bmatrix} \lambda^n & n\lambda^{n-1} \\ 0 & \lambda^n \end{bmatrix}$$

For $\lambda = 2$, $n = 4$:
$$J_2^4 = \begin{bmatrix} 16 & 4 \cdot 8 \\ 0 & 16 \end{bmatrix} = \begin{bmatrix} 16 & 32 \\ 0 & 16 \end{bmatrix}$$

So:
$$J^4 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 16 & 32 \\ 0 & 0 & 16 \end{bmatrix}$$

**Step 5: Reconstruct $A^4 = P J^4 P^{-1}$** `[Final computation: 1 Mark]`

After performing the matrix multiplication (verification step in the KTU answer script), one obtains $A^4$ using the Jordan form. The full numerical result is left as an exercise for the student, but the structural insight is that **even defective matrices have well-defined powers** through the Jordan decomposition. `[Verifying: 1 Mark]`

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Loss Zones in Diagonalization Questions:**
> 1. **Order mismatch between $P$ and $D$:** The $i$-th column of $P$ MUST correspond to the $i$-th diagonal entry of $D$. Reversing this order breaks the relation $AP = PD$. Lose 1-2 marks.
> 2. **Failing to verify linear independence:** If you compute eigenvectors and find fewer than $n$ independent ones, the matrix is not diagonalizable — do not force a $P$ that is singular. Lose 2-3 marks if you ignore this.
> 3. **Sign errors in $P^{-1}$:** Computing $P^{-1}$ for a $3 \times 3$ matrix manually is error-prone. Always cross-check using $\det(P) \cdot \det(P^{-1}) = 1$ or verify $P \cdot P^{-1} = I$. Lose 1-2 marks for sloppy inverses.
> 4. **Forgetting to raise $D$ to the power $n$ in matrix power questions:** Students often compute $A^n$ by direct multiplication even after going through the diagonalization. This defeats the purpose. Always use $A^n = P D^n P^{-1}$. Lose up to 4 marks.
> 5. **Not stating the diagonalizability condition explicitly:** When asked to "verify" diagonalizability, you must explicitly state the theorem you are using (e.g., "since geometric multiplicity equals algebraic multiplicity..."). Lose 1 mark for implicit reasoning.

---

## 5.4 Topic Recap and Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist — Diagonalization and Matrix Powers**

- **Core Identity:** $A = P D P^{-1}$ — the three matrices are $P$ (eigenvectors as columns), $D$ (eigenvalues on diagonal), and $P^{-1}$ (the inverse of $P$).
- **Diagonalizability Theorem:** A matrix is diagonalizable **iff** it has $n$ linearly independent eigenvectors, equivalently, **iff** geometric multiplicity equals algebraic multiplicity for every eigenvalue.
- **Distinct Eigenvalues Theorem:** If all $n$ eigenvalues are distinct, the matrix is **automatically** diagonalizable (sufficient, not necessary).
- **Order Invariant:** Eigenvalues may be ordered arbitrarily in $D$, **provided** the columns of $P$ are reordered to match.
- **Power Formula:** $A^n = P D^n P^{-1}$, where $D^n = \text{diag}(\lambda_1^n, \lambda_2^n, \ldots, \lambda_n^n)$.
- **Inverse Formula:** $A^{-1} = P D^{-1} P^{-1}$, where $D^{-1} = \text{diag}(1/\lambda_i)$ — only valid if all $\lambda_i \neq 0$.
- **Exponential Formula:** $e^{A} = P \, e^{D} \, P^{-1}$, where $e^{D} = \text{diag}(e^{\lambda_i})$.
- **Spectral Theorem:** Every real symmetric matrix is orthogonally diagonalizable: $A = Q \Lambda Q^T$ with $Q^T Q = I$.
- **Sanity Checks:** Always validate using $\text{tr}(A) = \sum \lambda_i$ and $\det(A) = \prod \lambda_i$.
- **Defective Matrices:** A matrix with geometric multiplicity < algebraic multiplicity for some eigenvalue is NOT diagonalizable in the classical sense — use **Jordan Normal Form** as the generalization.
- **Key Algorithm:** (1) Find eigenvalues from $\det(A - \lambda I) = 0$; (2) Find eigenvectors from $(A - \lambda I)\mathbf{x} = 0$; (3) Assemble $P$ and $D$; (4) Verify $AP = PD$; (5) Use $A^n = P D^n P^{-1}$ for powers.
- **Engineering Significance:** PCA, PageRank, Markov chains, Fibonacci closed form, system of ODEs, quantum gate operations, image compression — all rely fundamentally on diagonalization.

<!-- SECTION_5_END -->
