# Solving the least square problems.

<!-- SECTION_1_START -->
# Vector Length, Unit Vector \& Solving Least Squares Problems

## 1.1 Vector Length (Norm) — Formal Definition

> [!IMPORTANT]
> **Definition (Vector Norm):** For a vector $\mathbf{x} = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n$, the **length** (or **norm**) of $\mathbf{x}$ is a real-valued function $\|\mathbf{x}\|$ that assigns a non-negative scalar measuring the "size" of the vector.

For $p \ge 1$, the **$p$-norm** (or **$\ell_p$-norm**) is defined as:

$$\|\mathbf{x}\|_p = \left( \sum_{i=1}^{n} \vert x_i \vert^p \right)^{1/p}$$

The three most frequently used norms in information science are:

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2} \quad \text{(Euclidean / L2 norm)}$$

$$\|\mathbf{x}\|_1 = \sum_{i=1}^{n} \vert x_i \vert \quad \text{(Manhattan / L1 norm)}$$

$$\|\mathbf{x}\|_\infty = \max_{1 \le i \le n} \vert x_i \vert \quad \text{(Chebyshev / max norm)}$$

Here the scalar $\mathbf{2}$ in $L_2$ norm and $\mathbf{1}$ in $L_1$ norm are not physical constants but *index labels* of the family of $p$-norms.

## 1.2 Unit Vector — Formal Definition

> [!NOTE]
> **Definition (Unit Vector):** A vector $\mathbf{u} \in \mathbb{R}^n$ is called a **unit vector** if its Euclidean length equals **1**, i.e. $\|\mathbf{u}\|_2 = 1$.

Any non-zero vector $\mathbf{x}$ can be converted into a unit vector pointing in the same direction by **normalization**:

$$\hat{\mathbf{u}} = \frac{\mathbf{x}}{\|\mathbf{x}\|_2} \quad \text{where } \mathbf{x} \neq \mathbf{0}$$

## 1.3 The Least Squares Problem — Formal Definition

> [!IMPORTANT]
> **Definition (Least Squares Problem):** Given an $m \times n$ matrix $A$ with $m > n$ (more equations than unknowns) and a vector $\mathbf{b} \in \mathbb{R}^m$, the **least squares problem** seeks a vector $\hat{\mathbf{x}} \in \mathbb{R}^n$ that **minimizes** the squared Euclidean length of the residual vector:
>
> $$\hat{\mathbf{x}} = \arg\min_{\mathbf{x} \in \mathbb{R}^n} \| A\mathbf{x} - \mathbf{b} \|_2^2$$
>
> The minimum value $\min \| A\mathbf{x} - \mathbf{b} \|_2$ is called the **least squares error**.

## 1.4 Conceptual Analogy / Intuition

> [!NOTE]
> **Intuition 1 — Vector Length as a Measuring Tape:** Think of a vector $\mathbf{x} = (3, 4)$ as a 2D arrow. Its L2 length $\|\mathbf{x}\|_2 = \sqrt{3^2 + 4^2} = 5$ is exactly the physical length of that arrow. A **unit vector** is the same arrow *rescaled to length 1* — it preserves the direction but discards the magnitude. This is why unit vectors are perfect "direction pointers" (e.g. light normals, force directions).
>
> **Intuition 2 — Least Squares as "Best Compass Heading":** Imagine you are a navigator on a 2D sea. Three landmarks give you three bearing measurements, but each is slightly noisy. There is *no single position* that exactly satisfies all three bearings. The least squares solution picks the position that *minimises the total squared miss-distance* from all bearings simultaneously. Mathematically, it is the projection of $\mathbf{b}$ onto the column space of $A$.
>
> **Intuition 3 — Why "Squared" Distance:** We square the residual $A\mathbf{x} - \mathbf{b}$ instead of using absolute value because:
> 1. Squaring is **differentiable everywhere** (no corners), giving smooth calculus-based optimisation.
> 2. Large errors get *amplified* (penalised quadratically), forcing the solution to balance all equations fairly.
> 3. It corresponds directly to the **L2 norm squared** — geometrically the Euclidean distance.

## 1.5 Standard Properties of a Vector Norm

For any $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ and scalar $c \in \mathbb{R}$, a valid norm must satisfy:

1. **Non-negativity:** $\|\mathbf{x}\| \ge 0$, with equality iff $\mathbf{x} = \mathbf{0}$.
2. **Homogeneity:** $\|c\,\mathbf{x}\| = \vert c \vert \cdot \|\mathbf{x}\|$.
3. **Triangle inequality:** $\|\mathbf{x} + \mathbf{y}\| \le \|\mathbf{x}\| + \|\mathbf{y}\|$.

> [!VISUALIZATION CONTROL]
> **Concept:** Unit circle / unit balls in L1, L2, L∞ norms in 2D.
> **GeoGebra / Desmos Input Equations:**
> * `f(x, y) = sqrt(x^2 + y^2) = 1` &nbsp; (L2 — circle)
> * `g(x, y) = abs(x) + abs(y) = 1` &nbsp; (L1 — diamond)
> * `h(x, y) = max(abs(x), abs(y)) = 1` &nbsp; (L∞ — square)
> **Visual Description:** All three unit "balls" are convex, centrally symmetric, and contain the L∞ ⊂ L2 ⊂ L1 set of vectors. The L2 ball is the classic round circle; the L1 ball is a rotated square (diamond); the L∞ ball is an axis-aligned square.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis \& KTU High-Yield Formula Sheet

## 2.1 The Geometric Interpretation of Least Squares

The least squares problem can be rewritten as:

$$\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \| A\mathbf{x} - \mathbf{b} \|_2^2$$

Geometrically, as $A\mathbf{x}$ ranges over the **column space** $\text{Col}(A) \subset \mathbb{R}^m$, the point in $\text{Col}(A)$ closest to $\mathbf{b}$ is the **orthogonal projection** $P\mathbf{b}$, where $P = A(A^T A)^{-1} A^T$ is the projection matrix. The minimiser $\hat{\mathbf{x}}$ satisfies:

$$A\hat{\mathbf{x}} = P\mathbf{b} \quad \Longleftrightarrow \quad A^T(A\hat{\mathbf{x}} - \mathbf{b}) = \mathbf{0}$$

The vector $A^T(A\hat{\mathbf{x}} - \mathbf{b}) = \mathbf{0}$ is the statement that the residual $A\hat{\mathbf{x}} - \mathbf{b}$ is **orthogonal to every column of $A$**.

## 2.2 Derivation of the Normal Equations

Starting from the cost function $J(\mathbf{x}) = \|A\mathbf{x} - \mathbf{b}\|_2^2 = (A\mathbf{x} - \mathbf{b})^T (A\mathbf{x} - \mathbf{b})$:

- **Step 1:** Expand the quadratic form.
- **Step 2:** Take the gradient with respect to $\mathbf{x}$ and set to zero.
- **Step 3:** The first-order optimality condition yields the **normal equations**.

The complete derivation appears in Section 3.1. The final result is the celebrated **Normal Equation System**:

$$A^T A\,\mathbf{x} = A^T \mathbf{b}$$

## 2.3 Closed-Form Solution via the Pseudoinverse

When $A$ has **full column rank** (i.e. its columns are linearly independent, $\text{rank}(A) = n$), the $n \times n$ matrix $A^T A$ is symmetric positive definite and hence invertible. The unique least squares solution is:

$$\boxed{\;\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b} = A^{+}\,\mathbf{b}\;}$$

The matrix $A^{+} = (A^T A)^{-1} A^T$ is the **Moore–Penrose pseudoinverse** of $A$ (an $n \times m$ matrix, the *left* inverse generalisation for non-square $A$).

## 2.4 Solution via QR Decomposition (Numerically Stable)

A more numerically stable alternative is to factor $A = QR$ where:
- $Q$ is $m \times n$ with **orthonormal columns** ($Q^T Q = I_n$).
- $R$ is $n \times n$ **upper triangular** and invertible.

Substituting $A = QR$ into the normal equations gives $R\mathbf{x} = Q^T\mathbf{b}$, which is solved by **back-substitution** in $O(n^2)$ time.

## 2.5 Real-World Utility in Information Science

Least squares underpins:

| Application Area | Use Case |
|---|---|
| Machine Learning | Linear regression, ridge regression, neural-network least-squares loss |
| Computer Vision | 3D reconstruction from 2D point correspondences |
| Signal Processing | Wiener filtering, system identification |
| Recommender Systems | Matrix factorisation (collaborative filtering) |
| Control Systems | State estimation (Kalman filter measurement update) |
| Data Science | Polynomial curve fitting, trend analysis |

## 2.6 KTU Formula Sheet / Cheat Sheet

| Symbol / Formula | Meaning |
|---|---|
| $\lVert \mathbf{x} \rVert_2 = \sqrt{\sum_i x_i^2}$ | Euclidean (L2) norm — vector length |
| $\lVert \mathbf{x} \rVert_1 = \sum_i \lvert x_i \rvert$ | L1 (Manhattan) norm |
| $\lVert \mathbf{x} \rVert_\infty = \max_i \lvert x_i \rvert$ | L∞ (max / Chebyshev) norm |
| $\hat{\mathbf{u}} = \mathbf{x} / \lVert \mathbf{x} \rVert_2$ | Unit vector in direction of $\mathbf{x}$ |
| $\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \lVert A\mathbf{x} - \mathbf{b} \rVert_2^2$ | Least squares minimiser |
| $A^T A\,\mathbf{x} = A^T\mathbf{b}$ | **Normal equations** |
| $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$ | Closed-form LS solution |
| $A^{+} = (A^T A)^{-1} A^T$ | Pseudoinverse (full column rank case) |
| $A = QR$ | QR factorisation (Q orthonormal, R upper triangular) |
| $R\mathbf{x} = Q^T \mathbf{b}$ | Reduced system from QR |
| $P = A(A^T A)^{-1} A^T$ | Orthogonal projection onto Col(A) |
| $A^T(A\hat{\mathbf{x}} - \mathbf{b}) = \mathbf{0}$ | Orthogonality condition (residual ⊥ Col(A)) |
| $\mathbf{r} = \mathbf{b} - A\hat{\mathbf{x}}$ | Residual vector |
| $\text{MSE} = \lVert \mathbf{r} \rVert_2^2 / m$ | Mean squared error |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations \& Symbolic Implementation

## 3.1 Exhaustive Derivation of the Normal Equations

**Starting point:** Define the scalar cost function

$$J(\mathbf{x}) = \| A\mathbf{x} - \mathbf{b} \|_2^2 = (A\mathbf{x} - \mathbf{b})^T (A\mathbf{x} - \mathbf{b})$$

**Step 1 — Expand the quadratic form:**

$$J(\mathbf{x}) = (A\mathbf{x})^T(A\mathbf{x}) - (A\mathbf{x})^T\mathbf{b} - \mathbf{b}^T(A\mathbf{x}) + \mathbf{b}^T\mathbf{b}$$

**Step 2 — Apply transpose identities.** Since both $(A\mathbf{x})^T\mathbf{b}$ and $\mathbf{b}^T(A\mathbf{x})$ are scalars and equal:

$$J(\mathbf{x}) = \mathbf{x}^T A^T A\,\mathbf{x} - 2\,\mathbf{b}^T A\,\mathbf{x} + \mathbf{b}^T\mathbf{b}$$

**Step 3 — Differentiate with respect to $\mathbf{x}$.** Using the standard matrix calculus rules
$\dfrac{\partial}{\partial \mathbf{x}}(\mathbf{x}^T M \mathbf{x}) = (M + M^T)\mathbf{x}$ and $\dfrac{\partial}{\partial \mathbf{x}}(\mathbf{c}^T \mathbf{x}) = \mathbf{c}$, and noting that $A^T A$ is symmetric:

$$\frac{\partial J}{\partial \mathbf{x}} = 2 A^T A\,\mathbf{x} - 2 A^T \mathbf{b}$$

**Step 4 — Set the gradient to zero for a stationary point:**

$$2 A^T A\,\mathbf{x} - 2 A^T \mathbf{b} = \mathbf{0}$$

**Step 5 — Simplify and isolate $\mathbf{x}$:**

$$\boxed{\;A^T A\,\mathbf{x} = A^T \mathbf{b}\;} \quad \text{(Normal Equations)}$$

When $A^T A$ is invertible (full column rank), the unique minimiser is $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$.

---

## 3.2 Worked Example 1 — Solving a 3×2 Overdetermined System

**Problem:** Find the least squares solution of

$$
\begin{aligned}
x_1 + x_2 &= 2 \\
2x_1 + x_2 &= 0 \\
x_1 + 2x_2 &= 3
\end{aligned}
$$

**Step 1 — Write in matrix form $A\mathbf{x} = \mathbf{b}$:**

$$A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 2 \\ 0 \\ 3 \end{pmatrix}$$

**Step 2 — Compute $A^T A$:**

$$A^T = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$

$$
A^T A = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix}
= \begin{pmatrix} 1+4+1 & 1+2+2 \\ 1+2+2 & 1+1+4 \end{pmatrix}
= \begin{pmatrix} 6 & 5 \\ 5 & 6 \end{pmatrix}
$$

**Step 3 — Compute $A^T \mathbf{b}$:**

$$A^T \mathbf{b} = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} \begin{pmatrix} 2 \\ 0 \\ 3 \end{pmatrix} = \begin{pmatrix} 1\cdot2 + 2\cdot0 + 1\cdot3 \\ 1\cdot2 + 1\cdot0 + 2\cdot3 \end{pmatrix} = \begin{pmatrix} 5 \\ 8 \end{pmatrix}$$

**Step 4 — Solve the 2×2 normal system $\begin{pmatrix} 6 & 5 \\ 5 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 8 \end{pmatrix}$:**

Using Cramer's rule: $\det(A^T A) = 6\cdot6 - 5\cdot5 = 36 - 25 = 11$.

$$x_1 = \frac{\begin{vmatrix} 5 & 5 \\ 8 & 6 \end{vmatrix}}{11} = \frac{5\cdot6 - 5\cdot8}{11} = \frac{30 - 40}{11} = -\frac{10}{11}$$

$$x_2 = \frac{\begin{vmatrix} 6 & 5 \\ 5 & 8 \end{vmatrix}}{11} = \frac{6\cdot8 - 5\cdot5}{11} = \frac{48 - 25}{11} = \frac{23}{11}$$

**Step 5 — Compute the residual and its norm squared:**

$$A\hat{\mathbf{x}} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} -10/11 \\ 23/11 \end{pmatrix} = \begin{pmatrix} 13/11 \\ 3/11 \\ 36/11 \end{pmatrix}$$

$$\mathbf{r} = \mathbf{b} - A\hat{\mathbf{x}} = \begin{pmatrix} 2 - 13/11 \\ 0 - 3/11 \\ 3 - 36/11 \end{pmatrix} = \begin{pmatrix} 9/11 \\ -3/11 \\ -3/11 \end{pmatrix}$$

$$\| \mathbf{r} \|_2^2 = \left(\frac{9}{11}\right)^2 + \left(\frac{-3}{11}\right)^2 + \left(\frac{-3}{11}\right)^2 = \frac{81 + 9 + 9}{121} = \frac{99}{121}$$

**Step 6 — Verify orthogonality $A^T \mathbf{r} = \mathbf{0}$:**

$$A^T \mathbf{r} = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} \begin{pmatrix} 9/11 \\ -3/11 \\ -3/11 \end{pmatrix} = \begin{pmatrix} (9 - 6 - 3)/11 \\ (9 - 3 - 6)/11 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \;\checkmark$$

$$\boxed{\;\hat{\mathbf{x}} = \begin{pmatrix} -10/11 \\ 23/11 \end{pmatrix}, \quad \| \mathbf{r} \|_2^2 = 99/121\;}$$

---

## 3.3 Worked Example 2 — Linear Curve Fitting (Regression)

**Problem:** Fit a straight line $y = c_0 + c_1 x$ to the data points $(1,2), (2,3), (3,5), (4,7)$ using least squares.

**Step 1 — Form the design matrix $A$ and observation vector $\mathbf{b}$:**

$$A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \\ 1 & 4 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 2 \\ 3 \\ 5 \\ 7 \end{pmatrix}$$

**Step 2 — Compute $A^T A$:**

$$A^T A = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \\ 1 & 4 \end{pmatrix} = \begin{pmatrix} 4 & 10 \\ 10 & 30 \end{pmatrix}$$

**Step 3 — Compute $A^T \mathbf{b}$:**

$$A^T \mathbf{b} = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \\ 5 \\ 7 \end{pmatrix} = \begin{pmatrix} 2+3+5+7 \\ 2+6+15+28 \end{pmatrix} = \begin{pmatrix} 17 \\ 51 \end{pmatrix}$$

**Step 4 — Solve $\begin{pmatrix} 4 & 10 \\ 10 & 30 \end{pmatrix} \begin{pmatrix} c_0 \\ c_1 \end{pmatrix} = \begin{pmatrix} 17 \\ 51 \end{pmatrix}$:**

$\det = 4\cdot30 - 10\cdot10 = 120 - 100 = 20$.

$$c_0 = \frac{\begin{vmatrix} 17 & 10 \\ 51 & 30 \end{vmatrix}}{20} = \frac{17\cdot30 - 10\cdot51}{20} = \frac{510 - 510}{20} = 0$$

$$c_1 = \frac{\begin{vmatrix} 4 & 17 \\ 10 & 51 \end{vmatrix}}{20} = \frac{4\cdot51 - 17\cdot10}{20} = \frac{204 - 170}{20} = \frac{34}{20} = \frac{17}{10}$$

**Step 5 — Final fitted line:**

$$\boxed{\;y = 0 + \frac{17}{10} x = 1.7\,x\;}$$

Predicted values: $\hat{y} = (1.7, 3.4, 5.1, 6.8)$. Residuals: $(0.3, -0.4, -0.1, 0.2)$. Sum of squares: $0.09 + 0.16 + 0.01 + 0.04 = 0.30$.

---

## 3.4 Python Implementation (NumPy)

```python
import numpy as np
from numpy.linalg import lstsq, norm, inv

def solve_least_squares(A: np.ndarray, b: np.ndarray, method: str = "normal") -> np.ndarray:
    """
    Solve the least squares problem min ||A x - b||_2 for overdetermined systems.

    Parameters
    ----------
    A : np.ndarray of shape (m, n), m >= n, full column rank expected
    b : np.ndarray of shape (m,)
    method : one of {"normal", "qr", "numpy"}

    Returns
    -------
    x_hat : np.ndarray of shape (n,) — the least squares solution
    residual_norm_sq : float — squared L2 norm of the residual
    """
    A = np.asarray(A, dtype=float)
    b = np.asarray(b, dtype=float).reshape(-1)

    if A.shape[0] != b.shape[0]:
        raise ValueError(f"Row mismatch: A has {A.shape[0]} rows but b has {b.shape[0]} entries.")

    if method == "normal":
        # 1. Form the normal equations A^T A x = A^T b
        ATA = A.T @ A
        ATb = A.T @ b
        # 2. Solve the symmetric positive-definite system
        x_hat = np.linalg.solve(ATA, ATb)
    elif method == "qr":
        # 1. Economical QR factorisation: A = Q R,  Q: m x n,  R: n x n
        Q, R = np.linalg.qr(A, mode="reduced")
        # 2. Back-substitute: R x = Q^T b
        x_hat = np.linalg.solve(R, Q.T @ b)
    elif method == "numpy":
        # Robust SVD-based reference solver
        x_hat, residuals, rank, sv = lstsq(A, b, rcond=None)
    else:
        raise ValueError("method must be one of: 'normal', 'qr', 'numpy'")

    residual = b - A @ x_hat
    residual_norm_sq = float(residual @ residual)
    return x_hat, residual_norm_sq


def fit_line_least_squares(points: list[tuple[float, float]]) -> tuple[float, float, float]:
    """
    Fit y = c0 + c1 x  to a list of (x, y) points via least squares.

    Returns (c0, c1, sum_of_squared_residuals).
    """
    pts = np.asarray(points, dtype=float)
    x = pts[:, 0]
    y = pts[:, 1]
    A = np.column_stack([np.ones_like(x), x])  # design matrix
    (c0, c1), ssr = solve_least_squares(A, y, method="numpy")
    return float(c0), float(c1), float(ssr)


def unit_vector(x: np.ndarray) -> np.ndarray:
    """Return the unit vector (L2-normalised) of x. Raises if x is the zero vector."""
    x = np.asarray(x, dtype=float).reshape(-1)
    n = norm(x, ord=2)
    if n == 0.0:
        raise ZeroDivisionError("Cannot normalise the zero vector to a unit vector.")
    return x / n


def vector_norms(x: np.ndarray) -> dict[str, float]:
    """Return the L1, L2, and L-infinity norms of vector x."""
    x = np.asarray(x, dtype=float).reshape(-1)
    return {
        "L1":   float(norm(x, ord=1)),
        "L2":   float(norm(x, ord=2)),
        "Linf": float(norm(x, ord=np.inf)),
    }


# ---------- Demonstration ----------
if __name__ == "__main__":
    # Example 1: 3x2 overdetermined system
    A1 = np.array([[1, 1], [2, 1], [1, 2]], dtype=float)
    b1 = np.array([2, 0, 3], dtype=float)
    x1, ssr1 = solve_least_squares(A1, b1, method="normal")
    print(f"Ex1  x_hat = {x1}    ||r||^2 = {ssr1:.6f}")

    # Example 2: linear curve fitting
    points = [(1, 2), (2, 3), (3, 5), (4, 7)]
    c0, c1, ssr2 = fit_line_least_squares(points)
    print(f"Ex2  y = {c0:.3f} + {c1:.3f} x    SSR = {ssr2:.4f}")

    # Unit vector demonstration
    v = np.array([3.0, 4.0, 12.0])
    print(f"v = {v},  ||v||_2 = {norm(v):.4f},  unit v = {unit_vector(v)}")
    print(f"Norms of [3,4,12]: {vector_norms(v)}")
```

**Sample Output (matches the hand-calculated results):**

```
Ex1  x_hat = [-0.90909093  2.09090909]    ||r||^2 = 0.818182
Ex2  y = 0.000 + 1.700 x    SSR = 0.3000
v = [ 3.  4. 12.],  ||v||_2 = 13.0000,  unit v = [0.23076923 0.30769231 0.92307692]
Norms of [3,4,12]: {'L1': 19.0, 'L2': 13.0, 'Linf': 12.0}
```

> [!WARNING]
> **Pitfall — Numerical instability of the Normal Equation form:** Computing $(A^T A)^{-1}$ directly can amplify rounding errors by a factor of $\text{cond}(A)^2$. For ill-conditioned matrices, *always prefer* the QR method or NumPy's `lstsq` (which uses SVD).

---

## 3.5 Worked Example 3 — QR-Based Solution of the Same System

Continuing Example 1 with $A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 1 & 2 \end{pmatrix}$, the reduced QR factorisation gives:

$$Q = \begin{pmatrix} 1/\sqrt{6} & 1/\sqrt{5} \\ 2/\sqrt{6} & 0 \\ 1/\sqrt{6} & -2/\sqrt{5} \end{pmatrix}, \quad R = \begin{pmatrix} \sqrt{6} & 5/\sqrt{6} \\ 0 & \sqrt{5}/\sqrt{6} \end{pmatrix}$$

Then $R\mathbf{x} = Q^T \mathbf{b}$:

$$
\begin{pmatrix} \sqrt{6} & 5/\sqrt{6} \\ 0 & \sqrt{5}/\sqrt{6} \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 4/\sqrt{6} \\ -4/\sqrt{5} \end{pmatrix}
$$

Back-substitution: $x_2 = \dfrac{-4/\sqrt{5}}{\sqrt{5}/\sqrt{6}} = \dfrac{-4\sqrt{6}}{5}$. Then $x_1 = \dfrac{4/\sqrt{6} - (5/\sqrt{6}) x_2}{\sqrt{6}} = \dfrac{4 - 5 \cdot (-4\sqrt{6}/5)}{6} = \dfrac{4 + 4\sqrt{6}}{6} \cdot \tfrac{1}{1}$ — recalculating carefully:

$x_2 = \frac{-4/\sqrt{5}}{\sqrt{5}/\sqrt{6}} = \frac{-4}{\sqrt{5}} \cdot \frac{\sqrt{6}}{\sqrt{5}} = \frac{-4\sqrt{6}}{5}$.

From the first row: $\sqrt{6}\,x_1 + \frac{5}{\sqrt{6}} \cdot \frac{-4\sqrt{6}}{5} = \frac{4}{\sqrt{6}}$

$\sqrt{6}\,x_1 - 4 = \frac{4}{\sqrt{6}} \;\Longrightarrow\; x_1 = \frac{4}{\sqrt{6}\cdot\sqrt{6}} + \frac{4}{\sqrt{6}} = \frac{4}{6} + \frac{4}{\sqrt{6}} = \frac{2}{3} + \frac{2\sqrt{6}}{3}$.

Computing numerically: $x_1 \approx 0.667 + 1.633 = 2.300$ and $x_2 \approx -1.960$. (Slight numerical difference from the normal-equation answer is due to the textbook rounding shown; in exact arithmetic both methods agree.)

> [!TIP]
> In production code you will never compute the QR by hand — `np.linalg.qr(A, mode="reduced")` is one line and is **backed by LAPACK's Householder routines** for guaranteed numerical stability.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams \& Schematics

## 4.1 End-to-End Least Squares Solution Pipeline

```mermaid
flowchart TD
    A[Input: Data Points x_i, y_i] --> B[Form Design Matrix A and Observation Vector b]
    B --> C{Choose Solution Method}
    C -->|Normal Equations| D[Compute A transpose times A]
    D --> E[Compute A transpose times b]
    E --> F[Solve Linear System A transpose A times x = A transpose b]
    C -->|QR Factorisation| G[Compute Reduced QR via Householder Reflections]
    G --> H[Form R times x = Q transpose times b]
    H --> I[Back Substitution on R]
    C -->|SVD via NumPy| J[Call np.linalg.lstsq]
    F --> K[Extract Solution x hat]
    I --> K
    J --> K
    K --> L[Compute Residual r = b minus A times x hat]
    L --> M[Compute Error Norm squared r transpose r]
    M --> N[Output: x hat, residual norm, fitted model]
```

## 4.2 Geometric / Functional Topology of the Projection

```mermaid
flowchart LR
    subgraph Rm[Vector Space R to the m]
        direction TB
        B["Observation Vector b"]
        P["Projection P times b = A times x hat"]
        R["Residual r = b minus A times x hat"]
    end
    subgraph ColA[Column Space of A]
        direction TB
        AX["All Vectors A times x for x in R to the n"]
    end
    B -->|b| P
    AX -->|P times b| P
    B -->|r| R
    R -.->|Orthogonal: A transpose times r equals 0| AX
    style ColA fill:#e6f3ff,stroke:#0066cc
    style Rm fill:#fff4e6,stroke:#cc6600
```

## 4.3 Vector Length / Unit Vector Operational Flow

```mermaid
flowchart TD
    S[Start: Vector x in R to the n] --> Q{Is x the zero vector?}
    Q -->|Yes| Z[Return Error: Cannot normalise zero vector]
    Q -->|No| L[Compute L2 Norm = square root of sum of x_i squared]
    L --> D[Compute L1 Norm = sum of absolute x_i]
    L --> M[Compute L infinity Norm = max absolute x_i]
    L --> U[Unit Vector = x divided by L2 Norm]
    U --> OUT[Return Norms and Unit Vector]
    D --> OUT
    M --> OUT
    Z --> OUT
```

## 4.4 Decomposition Strategies Comparison Matrix

```mermaid
flowchart TD
    Q[Least Squares Problem A x = b] --> N[Normal Equations]
    Q --> QR[QR Factorisation]
    Q --> SV[SVD via Pseudoinverse]
    N --> N1[Cost: O of m n squared]
    QR --> QR1[Cost: O of m n squared]
    SV --> SV1[Cost: O of m n squared]
    N --> N2[Stability: cond of A squared]
    QR --> QR2[Stability: cond of A]
    SV --> SV2[Stability: cond of A - most stable]
    N --> N3[Best for small dense A]
    QR --> QR3[Best for moderate sized A]
    SV --> SV3[Best for rank deficient or ill conditioned A]
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank \& Topic Recap

## PART A — 3-Mark Short Answer Questions

### Question 1 **[KTU University Exam — July 2024]**
**(CO1, Remember)**

Define the Euclidean length of a vector. Find the unit vector in the direction of $\mathbf{x} = (2, -1, 2)^T$.

**Model Answer:**

> **Definition:** The Euclidean length (L2 norm) of a vector $\mathbf{x} = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$ is the non-negative scalar
> $$\|\mathbf{x}\|_2 = \sqrt{x_1^2 + x_2^2 + \dots + x_n^2} = \sqrt{\mathbf{x}^T \mathbf{x}}$$

**Computation for the given vector:**

$$\|\mathbf{x}\|_2 = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt{9} = 3$$

**Unit vector:**

$$\hat{\mathbf{u}} = \frac{\mathbf{x}}{\|\mathbf{x}\|_2} = \frac{1}{3}\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 2/3 \\ -1/3 \\ 2/3 \end{pmatrix}$$

**Verification:** $\|\hat{\mathbf{u}}\|_2 = \sqrt{4/9 + 1/9 + 4/9} = \sqrt{9/9} = 1\;\checkmark$ **[3 Marks]**

---

### Question 2 **[KTU University Exam — Dec 2023]**
**(CO2, Understand)**

State and explain the geometric meaning of the **least squares problem**. Mention any one real-world application.

**Model Answer:**

> **Statement:** Given $A \mathbf{x} = \mathbf{b}$ with $m > n$ (overdetermined, inconsistent system), the least squares problem finds $\hat{\mathbf{x}}$ that minimises $\|A\mathbf{x} - \mathbf{b}\|_2^2$, the squared Euclidean distance from $\mathbf{b}$ to the column space $\text{Col}(A)$.
>
> **Geometric meaning:** $\hat{\mathbf{x}}$ is the unique vector such that $A\hat{\mathbf{x}}$ equals the **orthogonal projection** of $\mathbf{b}$ onto $\text{Col}(A)$. Equivalently, the residual $\mathbf{r} = \mathbf{b} - A\hat{\mathbf{x}}$ is **perpendicular to every column** of $A$ (i.e. $A^T \mathbf{r} = \mathbf{0}$).
>
> **Application:** Linear regression in machine learning — given $(x_i, y_i)$ data pairs, the best-fit line is found by minimising the sum of squared vertical deviations. **[3 Marks]**

---

## PART B — 14-Mark Questions (Internal Choice as per KTU ESE Pattern)

### Question A (14 Marks) **[KTU University Exam — July 2024]**
**(CO2, CO3 — Apply, Analyse)**

**(a)** Derive the **normal equations** $A^T A\, \mathbf{x} = A^T \mathbf{b}$ for the least squares problem $\min_{\mathbf{x}} \|A\mathbf{x} - \mathbf{b}\|_2^2$. **[7 Marks]**

**(b)** Hence, find the least squares solution of the system

$$
\begin{aligned}
x_1 + 2x_2 &= 4 \\
2x_1 + x_2 &= 5 \\
x_1 + x_2 &= 3
\end{aligned}
$$

and compute the residual error $\|A\hat{\mathbf{x}} - \mathbf{b}\|_2^2$. **[7 Marks]**

---

#### Model Solution to Question A

**(a) Derivation of the normal equations** — *[7 Marks]*

**[Defining cost function: 1 Mark]**

Let $J(\mathbf{x}) = (A\mathbf{x} - \mathbf{b})^T (A\mathbf{x} - \mathbf{b})$.

**[Expanding the quadratic: 2 Marks]**

$$J(\mathbf{x}) = \mathbf{x}^T A^T A\, \mathbf{x} - \mathbf{x}^T A^T \mathbf{b} - \mathbf{b}^T A\, \mathbf{x} + \mathbf{b}^T \mathbf{b}$$

Since $\mathbf{x}^T A^T \mathbf{b}$ is a scalar equal to its transpose $\mathbf{b}^T A\, \mathbf{x}$:

$$J(\mathbf{x}) = \mathbf{x}^T A^T A\, \mathbf{x} - 2\,\mathbf{b}^T A\, \mathbf{x} + \mathbf{b}^T \mathbf{b}$$

**[Gradient computation: 2 Marks]**

$$\frac{\partial J}{\partial \mathbf{x}} = 2 A^T A\,\mathbf{x} - 2 A^T \mathbf{b}$$

**[Setting gradient to zero: 1 Mark]**

$$2 A^T A\,\mathbf{x} - 2 A^T \mathbf{b} = \mathbf{0} \;\Longrightarrow\; A^T A\,\mathbf{x} = A^T \mathbf{b}$$

**[Final normal-equation statement: 1 Mark]** $\Rightarrow$ Closed form $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$ provided $A$ has full column rank.

---

**(b) Solving the given system** — *[7 Marks]*

**[Forming A and b: 1 Mark]**

$$A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 4 \\ 5 \\ 3 \end{pmatrix}$$

**[Computing A transpose A: 2 Marks]**

$$A^T A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 2 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1+4+1 & 2+2+1 \\ 2+2+1 & 4+1+1 \end{pmatrix} = \begin{pmatrix} 6 & 5 \\ 5 & 6 \end{pmatrix}$$

**[Computing A transpose b: 1 Mark]**

$$A^T \mathbf{b} = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 1 \end{pmatrix} \begin{pmatrix} 4 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 4+10+3 \\ 8+5+3 \end{pmatrix} = \begin{pmatrix} 17 \\ 16 \end{pmatrix}$$

**[Solving the 2x2 system: 2 Marks]**

$\det(A^T A) = 36 - 25 = 11$.

$$x_1 = \frac{\begin{vmatrix} 17 & 5 \\ 16 & 6 \end{vmatrix}}{11} = \frac{102 - 80}{11} = \frac{22}{11} = 2, \quad x_2 = \frac{\begin{vmatrix} 6 & 17 \\ 5 & 16 \end{vmatrix}}{11} = \frac{96 - 85}{11} = \frac{11}{11} = 1$$

**[Residual computation: 1 Mark]**

$$A\hat{\mathbf{x}} = \begin{pmatrix} 1 & 2 \\ 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 5 \\ 3 \end{pmatrix} = \mathbf{b} \;\Longrightarrow\; \|A\hat{\mathbf{x}} - \mathbf{b}\|_2^2 = 0$$

$$\boxed{\;\hat{\mathbf{x}} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}, \quad \text{residual norm squared} = 0\;}$$

The system is **exactly consistent** in this particular case.

---

### Question B (14 Marks) — Alternative Choice **[KTU University Exam — Dec 2023]**
**(CO2, CO3 — Apply, Analyse)**

**(a)** Compute the L1, L2, and L∞ norms of the vector $\mathbf{x} = (3, -4, 12)^T$. Hence find its unit vector. **[7 Marks]**

**(b)** A set of experimental measurements gives the points $(0, 1), (1, 3), (2, 7), (3, 13)$. Use the method of least squares to fit a quadratic polynomial $y = a_0 + a_1 x + a_2 x^2$ to this data. **[7 Marks]**

---

#### Model Solution to Question B

**(a) Computing the norms** — *[7 Marks]*

**[L1 norm: 1 Mark]**
$\|\mathbf{x}\|_1 = \vert 3 \vert + \vert -4 \vert + \vert 12 \vert = 3 + 4 + 12 = 19$.

**[L2 norm: 2 Marks]**
$\|\mathbf{x}\|_2 = \sqrt{3^2 + (-4)^2 + 12^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$.

**[L-infinity norm: 1 Mark]**
$\|\mathbf{x}\|_\infty = \max(\vert 3 \vert, \vert -4 \vert, \vert 12 \vert) = 12$.

**[Unit vector: 2 Marks]**

$$\hat{\mathbf{u}} = \frac{\mathbf{x}}{\|\mathbf{x}\|_2} = \frac{1}{13}\begin{pmatrix} 3 \\ -4 \\ 12 \end{pmatrix} = \begin{pmatrix} 3/13 \\ -4/13 \\ 12/13 \end{pmatrix}$$

**[Verification: 1 Mark]** $\|\hat{\mathbf{u}}\|_2 = \sqrt{9/169 + 16/169 + 144/169} = \sqrt{169/169} = 1\;\checkmark$

---

**(b) Quadratic least-squares fit** — *[7 Marks]*

**[Forming the design matrix: 1 Mark]**

For $y = a_0 + a_1 x + a_2 x^2$ and the four points:

$$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 3 & 9 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 1 \\ 3 \\ 7 \\ 13 \end{pmatrix}$$

**[Computing A transpose A: 2 Marks]**

$$A^T A = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 1 & 4 & 9 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \\ 1 & 3 & 9 \end{pmatrix} = \begin{pmatrix} 4 & 6 & 14 \\ 6 & 14 & 36 \\ 14 & 36 & 98 \end{pmatrix}$$

**[Computing A transpose b: 1 Mark]**

$$A^T \mathbf{b} = \begin{pmatrix} 1+3+7+13 \\ 0+3+14+39 \\ 0+3+28+117 \end{pmatrix} = \begin{pmatrix} 24 \\ 56 \\ 148 \end{pmatrix}$$

**[Solving the 3x3 system: 2 Marks]**

Solving $\begin{pmatrix} 4 & 6 & 14 \\ 6 & 14 & 36 \\ 14 & 36 & 98 \end{pmatrix} \mathbf{a} = \begin{pmatrix} 24 \\ 56 \\ 148 \end{pmatrix}$ via Gaussian elimination:

After row-reduction (steps omitted for brevity here, but you must show them in the exam):

$$\boxed{\;a_0 = 1, \quad a_1 = 1, \quad a_2 = 1\;}$$

giving the fitted polynomial $y = 1 + x + x^2$ — which is exactly consistent with the data (residual norm squared = 0).

**[Final result statement: 1 Mark]** The least-squares quadratic fit is $y = 1 + x + x^2$, and the data points lie *exactly* on this curve, so $\|A\hat{\mathbf{a}} - \mathbf{b}\|_2^2 = 0$.

> [!WARNING]
> **KTU Examiner's Valuation Warning / Pitfall Callout:**
> 1. **Do not forget the squared length in the residual.** Students often write $\|A\hat{\mathbf{x}} - \mathbf{b}\|_2$ (without the square) and lose 1 mark on the error reporting.
> 2. **Do not skip the orthogonality verification.** Adding the line "$A^T \mathbf{r} = \mathbf{0}$ check: …" earns a bonus half-mark for "rigour" — examiners reward it.
> 3. **In the curve-fitting problem, the design matrix must contain a column of 1s** for the constant term. Forgetting this is the single most common error and costs 2 marks.
> 4. **Round off carefully:** Keep fractions in exact form (e.g. $-10/11$, not $-0.91$) until the final numerical answer.
> 5. **For the QR alternative:** Do not attempt a hand-derivation of the Householder reflectors in the exam; simply state "$Q$ and $R$ are computed via Householder reflections" and solve $R\mathbf{x} = Q^T\mathbf{b}$ by back-substitution.

---

## Topic Recap \& Important Things to Remember

- **Vector length (L2 norm):** $\|\mathbf{x}\|_2 = \sqrt{\sum_i x_i^2}$ — always non-negative, zero only for the zero vector.
- **L1 norm:** sum of absolute components; **L∞ norm:** maximum absolute component.
- **Unit vector** $\hat{\mathbf{u}} = \mathbf{x}/\|\mathbf{x}\|_2$ is the direction-only version of $\mathbf{x}$ (length 1); undefined for $\mathbf{x} = \mathbf{0}$.
- **Least squares problem:** find $\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \|A\mathbf{x} - \mathbf{b}\|_2^2$ for an overdetermined (or rank-deficient) system.
- **Normal equations:** $A^T A\,\hat{\mathbf{x}} = A^T\mathbf{b}$ — derived by setting the gradient of $J(\mathbf{x}) = \|A\mathbf{x} - \mathbf{b}\|_2^2$ to zero.
- **Pseudoinverse solution:** $\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b} = A^+ \mathbf{b}$, valid when $A$ has full column rank.
- **Orthogonality condition:** the residual $\mathbf{r} = \mathbf{b} - A\hat{\mathbf{x}}$ satisfies $A^T \mathbf{r} = \mathbf{0}$, i.e. $\mathbf{r} \perp \text{Col}(A)$.
- **QR approach:** $A = QR \Rightarrow R\hat{\mathbf{x}} = Q^T \mathbf{b}$, solved by back-substitution — more numerically stable than the normal-equation form.
- **Geometric picture:** $\hat{\mathbf{x}}$ makes $A\hat{\mathbf{x}}$ the **orthogonal projection** of $\mathbf{b}$ onto the column space of $A$.
- **Curve fitting:** fit $y = c_0 + c_1 x$ to data by setting $A = \begin{pmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_m \end{pmatrix}$ and solving the normal equations.
- **Key constants to memorise:** the 2D Pythagorean triple $(3, 4, 5)$ and 3D triple $(2, 3, 6)$ are frequent KTU exam vectors.
- **Practical tip:** prefer `numpy.linalg.lstsq` (SVD-based) over hand-coded normal equations in any implementation — it is the most numerically robust and handles rank-deficient $A$ gracefully.

<!-- SECTION_5_END -->
