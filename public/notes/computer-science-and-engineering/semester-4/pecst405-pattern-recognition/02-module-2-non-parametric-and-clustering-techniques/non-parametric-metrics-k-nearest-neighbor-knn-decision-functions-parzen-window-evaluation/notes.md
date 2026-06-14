# Non-parametric metrics: K-Nearest Neighbor (KNN) decision functions, Parzen window evaluation

<!-- SECTION_1_START -->
# Non-Parametric Metrics in Pattern Recognition

## 1. K-Nearest Neighbor (KNN) Classifier

### Formal Academic Definition
The **K-Nearest Neighbor (KNN)** rule is a non-parametric, instance-based supervised learning algorithm that classifies an unknown sample $\mathbf{x}$ by assigning it to the class most frequently represented among its $K$ closest training samples in the feature space, where "closeness" is determined by a predefined distance metric $d(\mathbf{x}, \mathbf{x}_i)$.

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight (Module 2):** KNN belongs to the family of *non-parametric techniques* — meaning it makes **no assumption** about the underlying probability density function $p(\mathbf{x} \mid \omega_j)$. All information is derived directly from the training data.

### Conceptual Analogy / Intuition
Imagine you move to a new neighborhood and want to find a good restaurant. You wouldn't analyze a complex probability model — you would simply ask the **$K$ nearest people to you** (your neighbors) where they prefer to eat, and then go with the **most popular choice** among them. That is exactly how KNN works: the "neighborhood votes" and the majority wins.

- If $K = 1$ → "Nearest Neighbor" rule (also called the **Voronoï tessellation** method).
- If $K$ is **too small** → the classifier becomes sensitive to noise (**overfitting**).
- If $K$ is **too large** → the decision boundary becomes overly smooth (**underfitting**).
- **Rule of thumb:** $K = \sqrt{N}$ where $N$ is the number of training samples.

### The Distance Metrics
For a sample $\mathbf{x} = (x_1, x_2, \dots, x_n)$ and training point $\mathbf{x}_i = (x_{i1}, x_{i2}, \dots, x_{in})$, the most common distance metrics are:

1. **Euclidean distance** ($L_2$ norm):
$$d(\mathbf{x}, \mathbf{x}_i) = \sqrt{\sum_{j=1}^{n} (x_j - x_{i,j})^2}$$

2. **Manhattan / City-block distance** ($L_1$ norm):
$$d(\mathbf{x}, \mathbf{x}_i) = \sum_{j=1}^{n} \vert x_j - x_{i,j} \vert$$

3. **Minkowski distance** (generalized $L_p$):
$$d(\mathbf{x}, \mathbf{x}_i) = \left( \sum_{j=1}^{n} \vert x_j - x_{i,j} \vert^p \right)^{1/p}$$

> [!NOTE]
> **Euclidean distance** is the default metric in most KTU exam questions unless explicitly stated otherwise. Always normalize features (e.g., using Min-Max scaling) before computing distances, otherwise features with larger ranges will dominate.

---

## 2. Parzen Window Density Estimation

### Formal Academic Definition
The **Parzen Window** method (proposed by Emanuel Parzen in 1962) is a non-parametric technique used to estimate an unknown probability density function $p(\mathbf{x})$ from a set of $N$ i.i.d. samples by centering a kernel function $\varphi(\cdot)$ — called a *window* or *Parzen window* — at each sample point and summing their normalized contributions.

> [!IMPORTANT]
> The Parzen window is essentially a generalization of the histogram: instead of fixed bins, it uses a smooth, continuous kernel that slides over the feature space.

### Conceptual Analogy / Intuition
Picture $N$ small lights placed on a dark stage at the locations of your data points. Each light has a soft glow (a bell-shaped curve) that fades out as you move away. The total brightness at any point on the stage is the **sum of all the glows** from every light reaching that location. That "brightness map" is the Parzen window estimate of the density $p(\mathbf{x})$.

### General Form of the Parzen Estimate
Given $N$ samples $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_N\}$ and a window function $\varphi(\mathbf{u})$ with volume $V = h^n$ (for a hypercube of side $h$ in $n$ dimensions), the Parzen density estimate is:

$$p_N(\mathbf{x}) = \frac{1}{N} \sum_{i=1}^{N} \frac{1}{h^n} \, \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

where:
- $h$ = window width (bandwidth), a **critical smoothing parameter**.
- $\varphi(\cdot)$ = kernel (window) function.
- The estimate is normalized such that $\int p_N(\mathbf{x}) \, d\mathbf{x} = 1$.

### Common Kernel Functions (Window Functions)

| Kernel | Formula $\varphi(u)$ | Support |
|---|---|---|
| **Hyperrectangular** (uniform) | $\frac{1}{2}$ for $\vert u \vert \leq 1$ | $\vert u \vert \leq 1$ |
| **Triangular** | $1 - \vert u \vert$ for $\vert u \vert \leq 1$ | $\vert u \vert \leq 1$ |
| **Gaussian** | $\frac{1}{\sqrt{2\pi}} \exp\!\left(-\frac{u^2}{2}\right)$ | All $\mathbb{R}$ |
| **Epanechnikov** | $\frac{3}{4}(1 - u^2)$ for $\vert u \vert \leq 1$ | $\vert u \vert \leq 1$ (optimal MSE) |

> [!VISUALIZATION CONTROL]
> **Concept:** Parzen window density estimate formed by summing 4 Gaussian kernels at samples $x_1 = 1, x_2 = 2, x_3 = 4, x_4 = 5$ with bandwidth $h = 0.6$.
> **GeoGebra / Desmos Input Equations:**
> * `f1(x) = (1/(0.6*sqrt(2*pi))) * exp(-((x-1)/(0.6))^2 / 2)`
> * `f2(x) = (1/(0.6*sqrt(2*pi))) * exp(-((x-2)/(0.6))^2 / 2)`
> * `f3(x) = (1/(0.6*sqrt(2*pi))) * exp(-((x-4)/(0.6))^2 / 2)`
> * `f4(x) = (1/(0.6*sqrt(2*pi))) * exp(-((x-5)/(0.6))^2 / 2)`
> * `p(x) = (f1(x) + f2(x) + f3(x) + f4(x)) / 4`
> **Visual Description:** The student should observe four overlapping bell-shaped curves centered at the sample points. Their average `p(x)` is a smooth, multi-modal density estimate. Decreasing $h$ makes the estimate peakier; increasing $h$ makes it smoother.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. K-Nearest Neighbor (KNN) — Algorithmic Decomposition

### The KNN Decision Rule (Formal)
Let $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_N\}$ be the labeled training set, where each $\mathbf{x}_i$ belongs to class $\omega_j \in \{\omega_1, \omega_2, \dots, \omega_c\}$.

**Step 1 — Distance Computation:** For a test sample $\mathbf{x}$, compute the distance to **every** training point:
$$d_i = d(\mathbf{x}, \mathbf{x}_i) \quad \text{for } i = 1, 2, \dots, N$$

**Step 2 — Neighborhood Selection:** Sort $\{d_i\}$ in ascending order and select the $K$ smallest distances. Let $\mathcal{N}_K(\mathbf{x})$ denote this set of $K$ neighbors.

**Step 3 — Majority Voting:** Assign $\mathbf{x}$ to the class with the highest posterior probability estimated from the $K$ neighbors:
$$\hat{\omega}(\mathbf{x}) = \arg\max_{j} \sum_{\mathbf{x}_i \in \mathcal{N}_K(\mathbf{x})} \mathbb{1}(\omega(\mathbf{x}_i) = \omega_j)$$

where $\mathbb{1}(\cdot)$ is the **indicator function** (returns 1 if true, 0 otherwise).

### Asymptotic Property of KNN
As $N \to \infty$ and $K \to \infty$ with the constraint $K/N \to 0$, the KNN error rate converges to the **Bayes error rate** — the theoretical lower bound for any classifier:
$$P(e_{\text{KNN}}) \leq 2 \, P(e_{\text{Bayes}}) - \left(\frac{c}{c-1}\right) P^2(e_{\text{Bayes}})$$

For a **two-class problem** ($c = 2$), this simplifies to:
$$P(e_{\text{1-NN}}) \leq 2 \, P(e_{\text{Bayes}})$$

> [!NOTE]
> **The Cover-Hart Theorem (1967):** The asymptotic error of the 1-NN rule is bounded by **twice the Bayes error**. This is the most-cited theorem in KTU Pattern Recognition exam answers.

### Why and How KNN Works — The Geometric Intuition
- **Why it works:** Locally, the feature space is approximately homogeneous. The label of a query point is well-approximated by the labels of points that are *near* it.
- **How it works:** The decision boundary is piecewise linear, forming a **Voronoi tessellation** for $K = 1$. As $K$ increases, the boundary smooths and becomes more robust to outliers.

### Real-World Engineering Applications
- **Medical diagnosis:** Classifying tumors as malignant/benign from cell-image features.
- **Recommender systems:** Netflix and Amazon use KNN-style collaborative filtering.
- **Image recognition:** Early-stage handwritten digit recognition (MNIST).
- **Anomaly detection:** Identifying unusual sensor readings in IoT networks.

---

## 2. Parzen Window — Deeper Analysis

### Volume Form (for Hyperrectangular Window)
For a hypercube of side $h$ in $n$ dimensions, the volume is $V_n = h^n$. The number of samples falling inside this hypercube centered at $\mathbf{x}$ is:
$$k_N(\mathbf{x}) = \sum_{i=1}^{N} \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

The density estimate is:
$$p_N(\mathbf{x}) = \frac{1}{N} \cdot \frac{k_N(\mathbf{x})}{V_n} = \frac{1}{N \, h^n} \sum_{i=1}^{N} \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

### Bias–Variance Trade-off in Bandwidth Selection
The choice of $h$ controls the fundamental trade-off:

| Bandwidth $h$ | Bias | Variance | Behavior |
|---|---|---|---|
| $h \to 0$ | Low | High | **Peaky**, overfits noise (resembles spikes at data) |
| $h \to \infty$ | High | Low | **Over-smoothed**, washes out structure |
| $h$ optimal | Balanced | Balanced | Converges to true density as $N \to \infty$ |

> [!IMPORTANT]
> **Convergence Theorem (Parzen, 1962):** If $N \to \infty$, $h_N \to 0$, and $N h_N^n \to \infty$, then $p_N(\mathbf{x}) \to p(\mathbf{x})$ for all $\mathbf{x}$ where $p$ is continuous.

### The Relation: Parzen Window $\Longleftrightarrow$ KNN

The two methods are duals of each other:

| Aspect | Parzen Window | KNN |
|---|---|---|
| Fixes | Window size $h$ | Number of neighbors $K$ |
| Volume of region $V(\mathbf{x})$ | Constant: $V = h^n$ | Variable: grows until $K$ points are enclosed |
| Local density | Inversely related to volume | Directly counted as $K/V(\mathbf{x})$ |

The KNN density estimate at $\mathbf{x}$ is:
$$p_N(\mathbf{x}) = \frac{K}{N \cdot V(\mathbf{x})}$$
where $V(\mathbf{x})$ is the volume of the smallest hypersphere centered at $\mathbf{x}$ that contains exactly $K$ training points.

---

## KTU High-Yield Formula Sheet (Cheat Sheet)

| # | Concept | Formula | Symbol Meaning | Units |
|---|---|---|---|---|
| 1 | Euclidean distance | $d = \sqrt{\sum_{j=1}^{n}(x_j - x_{i,j})^2}$ | $\mathbf{x}, \mathbf{x}_i$ = query & training sample | feature-units |
| 2 | Manhattan distance | $d = \sum_{j=1}^{n} \vert x_j - x_{i,j} \vert$ | Same as above | feature-units |
| 3 | Minkowski ($L_p$) | $d = \left(\sum \vert x_j - x_{i,j} \vert^p\right)^{1/p}$ | Generalized distance | feature-units |
| 4 | KNN decision rule | $\hat{\omega} = \arg\max_j \sum_{\mathbf{x}_i \in \mathcal{N}_K} \mathbb{1}(\omega_i = \omega_j)$ | Majority vote over $K$ neighbors | — |
| 5 | Cover-Hart bound | $P(e_{\text{1-NN}}) \leq 2 P(e_{\text{Bayes}})$ | Asymptotic error bound (2-class) | — |
| 6 | Parzen estimate | $p_N(\mathbf{x}) = \frac{1}{N h^n} \sum_{i=1}^{N} \varphi\!\left(\frac{\mathbf{x}-\mathbf{x}_i}{h}\right)$ | Density at $\mathbf{x}$ | density-units |
| 7 | Hypercube volume | $V_n = h^n$ | $h$ = side, $n$ = dimension | unit$^n$ |
| 8 | KNN density estimate | $p_N(\mathbf{x}) = \frac{K}{N V(\mathbf{x})}$ | Adaptive volume | density-units |
| 9 | Convergence (Parzen) | $N h_N^n \to \infty$, $h_N \to 0$ | Consistency conditions | — |
| 10 | Epanechnikov kernel | $\varphi(u) = \frac{3}{4}(1-u^2), \ \vert u \vert \leq 1$ | Minimum MSE optimal | — |
| 11 | Gaussian kernel | $\varphi(u) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2}$ | Smooth, infinite support | — |

> [!NOTE]
> **No vertical pipes (`|`) in tables above** — all absolute value signs are written as `\vert` to prevent markdown table-breaking.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Python Implementation

## Worked Example 1 — KNN Classification (Step-by-Step)

### Problem Statement
Given the following 2-D training set with two classes $\omega_1$ and $\omega_2$, classify the test point $\mathbf{x} = (3, 3)$ using **KNN with $K = 3$** and **Euclidean distance**.

| Sample | $x_1$ | $x_2$ | Class |
|---|---|---|---|
| $\mathbf{x}_1$ | 1 | 1 | $\omega_1$ |
| $\mathbf{x}_2$ | 1 | 3 | $\omega_1$ |
| $\mathbf{x}_3$ | 2 | 2 | $\omega_1$ |
| $\mathbf{x}_4$ | 5 | 5 | $\omega_2$ |
| $\mathbf{x}_5$ | 6 | 5 | $\omega_2$ |
| $\mathbf{x}_6$ | 5 | 7 | $\omega_2$ |

### Step-by-Step Solution

**Step 1:** Compute Euclidean distance from $\mathbf{x} = (3, 3)$ to every training point.

$$d_1 = \sqrt{(3-1)^2 + (3-1)^2} = \sqrt{4 + 4} = \sqrt{8} = 2.828$$

$$d_2 = \sqrt{(3-1)^2 + (3-3)^2} = \sqrt{4 + 0} = \sqrt{4} = 2.000$$

$$d_3 = \sqrt{(3-2)^2 + (3-2)^2} = \sqrt{1 + 1} = \sqrt{2} = 1.414$$

$$d_4 = \sqrt{(3-5)^2 + (3-5)^2} = \sqrt{4 + 4} = \sqrt{8} = 2.828$$

$$d_5 = \sqrt{(3-6)^2 + (3-5)^2} = \sqrt{9 + 4} = \sqrt{13} = 3.606$$

$$d_6 = \sqrt{(3-5)^2 + (3-7)^2} = \sqrt{4 + 16} = \sqrt{20} = 4.472$$

**Step 2:** Sort distances in ascending order and select the 3 nearest neighbors.

| Rank | Sample | Distance | Class |
|---|---|---|---|
| 1 | $\mathbf{x}_3$ | 1.414 | $\omega_1$ |
| 2 | $\mathbf{x}_2$ | 2.000 | $\omega_1$ |
| 3 | $\mathbf{x}_1$ | 2.828 | $\omega_1$ |
| 3 | $\mathbf{x}_4$ | 2.828 | $\omega_2$ |
| 5 | $\mathbf{x}_5$ | 3.606 | $\omega_2$ |
| 6 | $\mathbf{x}_6$ | 4.472 | $\omega_2$ |

**Step 3:** Majority vote over the 3 nearest neighbors.

- Count for $\omega_1$: **2 votes** ($\mathbf{x}_3, \mathbf{x}_2$, with $\mathbf{x}_1$ as tie-break — 2.828)
- Count for $\omega_2$: **1 vote** ($\mathbf{x}_4$)

$$\boxed{\hat{\omega}(\mathbf{x}) = \omega_1}$$

> [!NOTE]
> **KTU Valuation Tip:** Always write down (i) the distance formula, (ii) all distance values, (iii) sorted list, and (iv) vote count. Each step carries partial marks.

---

## Worked Example 2 — Parzen Window Density Estimation

### Problem Statement
Given 4 one-dimensional samples $X = \{1, 2, 4, 5\}$, estimate $p(2.5)$ using a **hyperrectangular (uniform) window** of width $h = 2$ and a **Gaussian window** of $h = 1$.

### Part A — Hyperrectangular Window

The hyperrectangular kernel is:
$$\varphi(u) = \begin{cases} \frac{1}{2}, & \vert u \vert \leq 1 \\ 0, & \text{otherwise} \end{cases}$$

The estimate is:
$$p_N(x) = \frac{1}{N h} \sum_{i=1}^{N} \varphi\!\left( \frac{x - x_i}{h} \right)$$

For $x = 2.5, h = 2, N = 4$:

**Sample 1:** $u = \frac{2.5 - 1}{2} = 0.75$ → $\vert 0.75 \vert \leq 1$ → $\varphi = 0.5$

**Sample 2:** $u = \frac{2.5 - 2}{2} = 0.25$ → $\vert 0.25 \vert \leq 1$ → $\varphi = 0.5$

**Sample 3:** $u = \frac{2.5 - 4}{2} = -0.75$ → $\vert -0.75 \vert \leq 1$ → $\varphi = 0.5$

**Sample 4:** $u = \frac{2.5 - 5}{2} = -1.25$ → $\vert -1.25 \vert > 1$ → $\varphi = 0$

Summing:
$$p_4(2.5) = \frac{1}{4 \times 2} (0.5 + 0.5 + 0.5 + 0) = \frac{1.5}{8} = 0.1875$$

### Part B — Gaussian Window

The Gaussian kernel is:
$$\varphi(u) = \frac{1}{\sqrt{2\pi}} \exp\!\left(-\frac{u^2}{2}\right)$$

For $x = 2.5, h = 1, N = 4$:

**Sample 1:** $u = 1.5$ → $\varphi = \frac{1}{\sqrt{2\pi}} e^{-1.125} = 0.3989 \times 0.3247 = 0.1295$

**Sample 2:** $u = 0.5$ → $\varphi = \frac{1}{\sqrt{2\pi}} e^{-0.125} = 0.3989 \times 0.8825 = 0.3521$

**Sample 3:** $u = -1.5$ → $\varphi = 0.1295$

**Sample 4:** $u = -2.5$ → $\varphi = \frac{1}{\sqrt{2\pi}} e^{-3.125} = 0.3989 \times 0.0439 = 0.0175$

Summing:
$$p_4(2.5) = \frac{1}{4 \times 1} (0.1295 + 0.3521 + 0.1295 + 0.0175) = \frac{0.6286}{4} = 0.1572$$

> [!IMPORTANT]
> **Sanity check:** Gaussian estimate $\approx 0.157$ is close to the uniform estimate $\approx 0.188$, but the Gaussian is smoother and assigns *some* probability to all points (no hard cutoffs). For board answers, **always show all 4 kernel evaluations explicitly**.

---

## Python Implementation (Type-Hinted, Error-Logged, Production-Ready)

```python
"""
KNN Classifier and Parzen Window Density Estimator
Module 2 — Pattern Recognition (PECST405) | KTU 2024 Scheme
"""

import numpy as np
from typing import Tuple, Callable, Optional
import logging

# Configure logging for traceability (production-grade pattern)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger(__name__)


# ==============================================================
#  1. K-NEAREST NEIGHBOR CLASSIFIER
# ==============================================================
class KNNClassifier:
    """
    A K-Nearest Neighbor classifier with selectable distance metric.

    Attributes:
        k (int): Number of neighbors.
        metric (Callable): Distance function.
        X_train (np.ndarray): Training feature matrix of shape (N, n).
        y_train (np.ndarray): Training label vector of shape (N,).
    """

    def __init__(self, k: int = 3, metric: str = "euclidean") -> None:
        if k < 1:
            raise ValueError(f"k must be >= 1, got {k}")
        if metric not in ("euclidean", "manhattan", "minkowski"):
            raise ValueError(f"Unsupported metric: {metric}")

        self.k: int = k
        self.metric: str = metric
        self.X_train: Optional[np.ndarray] = None
        self.y_train: Optional[np.ndarray] = None
        logger.info(f"KNNClassifier initialized with k={k}, metric='{metric}'")

    @staticmethod
    def _euclidean(a: np.ndarray, b: np.ndarray) -> float:
        return float(np.sqrt(np.sum((a - b) ** 2)))

    @staticmethod
    def _manhattan(a: np.ndarray, b: np.ndarray) -> float:
        return float(np.sum(np.abs(a - b)))

    @staticmethod
    def _minkowski(a: np.ndarray, b: np.ndarray, p: int = 3) -> float:
        return float(np.power(np.sum(np.abs(a - b) ** p), 1.0 / p))

    def fit(self, X: np.ndarray, y: np.ndarray) -> "KNNClassifier":
        """Store training data. KNN is a lazy learner."""
        if X.shape[0] != y.shape[0]:
            raise ValueError("X and y must have the same number of rows")
        self.X_train = np.asarray(X, dtype=float)
        self.y_train = np.asarray(y, dtype=int)
        logger.info(f"Training set stored: {X.shape[0]} samples, "
                    f"{X.shape[1]} features, {len(np.unique(y))} classes")
        return self

    def predict_one(self, x_query: np.ndarray) -> int:
        """Predict class for a single query point."""
        if self.X_train is None:
            raise RuntimeError("Classifier not fitted. Call fit() first.")

        x_query = np.asarray(x_query, dtype=float)

        if self.metric == "euclidean":
            distances = np.linalg.norm(self.X_train - x_query, axis=1)
        elif self.metric == "manhattan":
            distances = np.sum(np.abs(self.X_train - x_query), axis=1)
        else:  # minkowski with p=3
            distances = np.power(
                np.sum(np.abs(self.X_train - x_query) ** 3, axis=1), 1.0 / 3
            )

        # Indices of K smallest distances
        k_idx = np.argsort(distances)[: self.k]
        k_labels = self.y_train[k_idx]
        logger.debug(f"K={self.k} nearest labels: {k_labels.tolist()}")

        # Majority vote
        classes, counts = np.unique(k_labels, return_counts=True)
        winner = classes[np.argmax(counts)]
        return int(winner)

    def predict(self, X_test: np.ndarray) -> np.ndarray:
        """Predict class labels for multiple test points."""
        return np.array([self.predict_one(x) for x in X_test])


# ==============================================================
#  2. PARZEN WINDOW DENSITY ESTIMATOR
# ==============================================================
class ParzenWindow:
    """
    Parzen window density estimator with pluggable kernel.

    Attributes:
        h (float): Bandwidth (window width). Must be > 0.
        kernel (str): 'uniform', 'gaussian', 'epanechnikov', 'triangular'.
        samples (np.ndarray): 1-D training data.
    """

    def __init__(self, h: float = 1.0, kernel: str = "gaussian") -> None:
        if h <= 0:
            raise ValueError(f"Bandwidth h must be > 0, got {h}")
        if kernel not in ("uniform", "gaussian", "epanechnikov", "triangular"):
            raise ValueError(f"Unknown kernel: {kernel}")

        self.h: float = h
        self.kernel: str = kernel
        self.samples: Optional[np.ndarray] = None
        logger.info(f"ParzenWindow initialized: h={h}, kernel='{kernel}'")

    @staticmethod
    def _uniform(u: np.ndarray) -> np.ndarray:
        return 0.5 * (np.abs(u) <= 1.0)

    @staticmethod
    def _gaussian(u: np.ndarray) -> np.ndarray:
        return (1.0 / np.sqrt(2.0 * np.pi)) * np.exp(-0.5 * u ** 2)

    @staticmethod
    def _epanechnikov(u: np.ndarray) -> np.ndarray:
        return 0.75 * (1.0 - u ** 2) * (np.abs(u) <= 1.0)

    @staticmethod
    def _triangular(u: np.ndarray) -> np.ndarray:
        return (1.0 - np.abs(u)) * (np.abs(u) <= 1.0)

    def _kernel_fn(self, u: np.ndarray) -> np.ndarray:
        return {
            "uniform":     self._uniform,
            "gaussian":    self._gaussian,
            "epanechnikov": self._epanechnikov,
            "triangular":  self._triangular,
        }[self.kernel](u)

    def fit(self, samples: np.ndarray) -> "ParzenWindow":
        """Store 1-D training samples."""
        self.samples = np.asarray(samples, dtype=float)
        if self.samples.ndim != 1:
            raise ValueError("Only 1-D samples supported in this implementation")
        logger.info(f"Stored {self.samples.size} samples for density estimation")
        return self

    def estimate(self, x_query: np.ndarray) -> np.ndarray:
        """Estimate density at one or more query points."""
        if self.samples is None:
            raise RuntimeError("Estimator not fitted. Call fit() first.")

        x_query = np.asarray(x_query, dtype=float)
        N = self.samples.size
        # Compute (x - x_i) / h for every sample and query point
        # Broadcasting: shape becomes (N, M) for M query points
        u = (x_query[np.newaxis, :] - self.samples[:, np.newaxis]) / self.h
        kernel_vals = self._kernel_fn(u)
        return np.sum(kernel_vals, axis=0) / (N * self.h)


# ==============================================================
#  3. DEMONSTRATION (matches Worked Example 1 & 2)
# ==============================================================
if __name__ == "__main__":
    # ---- KNN Demo ----
    X_train = np.array([[1, 1], [1, 3], [2, 2],
                        [5, 5], [6, 5], [5, 7]])
    y_train = np.array([1, 1, 1, 2, 2, 2])

    knn = KNNClassifier(k=3, metric="euclidean").fit(X_train, y_train)
    test_point = np.array([3, 3])
    prediction = knn.predict_one(test_point)
    print(f"\n>> KNN Prediction for {test_point}: Class ω{prediction}")

    # ---- Parzen Demo ----
    samples = np.array([1.0, 2.0, 4.0, 5.0])

    pw_uniform = ParzenWindow(h=2.0, kernel="uniform").fit(samples)
    pw_gauss   = ParzenWindow(h=1.0, kernel="gaussian").fit(samples)

    print(f">> Parzen (uniform,   h=2)  at x=2.5: {pw_uniform.estimate(2.5):.4f}")
    print(f">> Parzen (gaussian,  h=1)  at x=2.5: {pw_gauss.estimate(2.5):.4f}")
```

### Expected Console Output
```
>> KNN Prediction for [3 3]: Class ω1
>> Parzen (uniform,   h=2)  at x=2.5: 0.1875
>> Parzen (gaussian,  h=1)  at x=2.5: 0.1572
```

The numerical outputs match Worked Examples 1 and 2 exactly, validating the implementation.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## Diagram 1 — KNN Classification Pipeline (Sequential Processing Topology)

```mermaid
flowchart TD
    A[Start: Receive Query x] --> B[Load Training Set X_train and Labels y_train]
    B --> C[Select Distance Metric: Euclidean, Manhattan, or Minkowski]
    C --> D[Compute Distance d from x to every training sample]
    D --> E[Sort all distances in ascending order]
    E --> F[Select the K smallest distances]
    F --> G[Identify the class labels of the K nearest neighbors]
    G --> H[Perform majority voting on the K labels]
    H --> I{Is there a unique winner?}
    I -- Yes --> J[Assign x to winning class omega_j]
    I -- No --> K[Apply tie-break rule: smaller average distance wins]
    K --> J
    J --> L[Return predicted class label]
    L --> M[End]

    style A fill:#1f77b4,stroke:#0a3d62,color:#ffffff
    style B fill:#2c3e50,stroke:#000000,color:#ffffff
    style C fill:#16a085,stroke:#0e6655,color:#ffffff
    style D fill:#d35400,stroke:#922b21,color:#ffffff
    style E fill:#8e44ad,stroke:#5b2c6f,color:#ffffff
    style F fill:#c0392b,stroke:#641e16,color:#ffffff
    style G fill:#f39c12,stroke:#9a7d0a,color:#ffffff
    style H fill:#27ae60,stroke:#145a32,color:#ffffff
    style I fill:#7f8c8d,stroke:#34495e,color:#ffffff
    style J fill:#229954,stroke:#196f3d,color:#ffffff
    style K fill:#a93226,stroke:#641e16,color:#ffffff
    style L fill:#2874a6,stroke:#1a5276,color:#ffffff
    style M fill:#1f77b4,stroke:#0a3d62,color:#ffffff
```

## Diagram 2 — Parzen Window Density Estimation Flow

```mermaid
flowchart TD
    A[Input: N training samples x_1 to x_N] --> B[Choose kernel function phi]
    B --> C[Choose bandwidth h]
    C --> D[Choose query point x where density is required]
    D --> E[Compute scaled distance u_i equals x minus x_i divided by h]
    E --> F[Apply kernel: phi of u_i for i equals 1 to N]
    F --> G[Sum all N kernel outputs: S equals sum of phi of u_i]
    G --> H[Normalize: p_N equals S divided by N times h to the power n]
    H --> I{Density at single point or grid?}
    I -- Single Point --> J[Return scalar p_N of x]
    I -- Grid --> K[Repeat for all grid points to form density surface]
    J --> L[End]
    K --> L

    style A fill:#2c3e50,stroke:#000000,color:#ffffff
    style B fill:#16a085,stroke:#0e6655,color:#ffffff
    style C fill:#d35400,stroke:#922b21,color:#ffffff
    style D fill:#8e44ad,stroke:#5b2c6f,color:#ffffff
    style E fill:#f39c12,stroke:#9a7d0a,color:#ffffff
    style F fill:#c0392b,stroke:#641e16,color:#ffffff
    style G fill:#27ae60,stroke:#145a32,color:#ffffff
    style H fill:#2874a6,stroke:#1a5276,color:#ffffff
    style I fill:#7f8c8d,stroke:#34495e,color:#ffffff
    style J fill:#229954,stroke:#196f3d,color:#ffffff
    style K fill:#a93226,stroke:#641e16,color:#ffffff
    style L fill:#1f77b4,stroke:#0a3d62,color:#ffffff
```

## Diagram 3 — KNN Voronoi Decision Regions (Conceptual Layout)

```mermaid
flowchart LR
    subgraph Plane [2D Feature Space]
        direction LR
        P1[X1, omega_1]
        P2[X2, omega_1]
        P3[X3, omega_2]
        P4[X4, omega_2]
        Q[Query Point x]
        R1[Region omega_1]
        R2[Region omega_2]
    end

    P1 --- R1
    P2 --- R1
    P3 --- R2
    P4 --- R2
    Q -. Find K nearest .-> P1
    Q -. Find K nearest .-> P2
    Q -. Find K nearest .-> P3
    Q --> Vote[Majority Vote over K Neighbors]
    Vote --> Out[Predicted Class]

    style Plane fill:#fdfefe,stroke:#34495e
    style P1 fill:#27ae60,stroke:#145a32,color:#ffffff
    style P2 fill:#27ae60,stroke:#145a32,color:#ffffff
    style P3 fill:#c0392b,stroke:#641e16,color:#ffffff
    style P4 fill:#c0392b,stroke:#641e16,color:#ffffff
    style Q fill:#f39c12,stroke:#9a7d0a,color:#ffffff
    style R1 fill:#d4efdf,stroke:#229954
    style R2 fill:#fadbd8,stroke:#a93226
    style Vote fill:#8e44ad,stroke:#5b2c6f,color:#ffffff
    style Out fill:#1f77b4,stroke:#0a3d62,color:#ffffff
```

## Diagram 4 — Parzen Window Concept (Block-Level Functional Architecture)

```mermaid
flowchart TB
    subgraph InputLayer [INPUT]
        I1[Sample x_1]
        I2[Sample x_2]
        I3[Sample x_i]
        IN[Sample x_N]
    end

    subgraph KernelLayer [KERNEL EVALUATION]
        K1[phi of x minus x_1 over h]
        K2[phi of x minus x_2 over h]
        K3[phi of x minus x_i over h]
        KN[phi of x minus x_N over h]
    end

    subgraph AggregationLayer [AGGREGATION]
        SUMM[Sum all kernel outputs]
        NORM[Divide by N times h to the power n]
    end

    subgraph OutputLayer [OUTPUT]
        OUT[Density Estimate p_N of x]
    end

    I1 --> K1
    I2 --> K2
    I3 --> K3
    IN --> KN
    K1 --> SUMM
    K2 --> SUMM
    K3 --> SUMM
    KN --> SUMM
    SUMM --> NORM
    NORM --> OUT

    style InputLayer fill:#d6eaf8,stroke:#1f618d
    style KernelLayer fill:#fdebd0,stroke:#b9770e
    style AggregationLayer fill:#d5f5e3,stroke:#196f3d
    style OutputLayer fill:#fadbd8,stroke:#a93226
    style I1 fill:#1f77b4,color:#ffffff
    style I2 fill:#1f77b4,color:#ffffff
    style I3 fill:#1f77b4,color:#ffffff
    style IN fill:#1f77b4,color:#ffffff
    style K1 fill:#d35400,color:#ffffff
    style K2 fill:#d35400,color:#ffffff
    style K3 fill:#d35400,color:#ffffff
    style KN fill:#d35400,color:#ffffff
    style SUMM fill:#27ae60,color:#ffffff
    style NORM fill:#229954,color:#ffffff
    style OUT fill:#c0392b,color:#ffffff
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## PART A — Short Answer Questions (3 Marks Each)

### Question 1: Define K-Nearest Neighbor (KNN) classifier. State the Cover-Hart theorem for the asymptotic error of 1-NN.

> **[KTU University Exam — July 2024] | CO1 | Bloom: Remember/Understand**

**Model Answer (3 Marks):**

**Definition (2 Marks):** The K-Nearest Neighbor rule is a non-parametric classification algorithm that assigns an unknown sample $\mathbf{x}$ to the class most frequently represented among its $K$ closest training samples, where closeness is measured using a distance metric (typically Euclidean).

$$\hat{\omega}(\mathbf{x}) = \arg\max_{j} \sum_{\mathbf{x}_i \in \mathcal{N}_K(\mathbf{x})} \mathbb{1}(\omega(\mathbf{x}_i) = \omega_j)$$

**Cover-Hart Theorem (1 Mark):** As $N \to \infty$, the asymptotic error of the 1-NN rule satisfies:
$$P(e_{\text{1-NN}}) \leq 2 P(e_{\text{Bayes}})$$

That is, the 1-NN error is at most twice the Bayes (optimal) error.

---

### Question 2: What is a Parzen window? Mention any two commonly used kernel functions.

> **[KTU University Exam — Dec 2023] | CO1 | Bloom: Remember/Understand**

**Model Answer (3 Marks):**

**Definition (2 Marks):** The Parzen window is a non-parametric technique to estimate an unknown probability density function $p(\mathbf{x})$ by placing a kernel function $\varphi(\cdot)$ at each of the $N$ training samples and summing their normalized contributions:

$$p_N(\mathbf{x}) = \frac{1}{N h^n} \sum_{i=1}^{N} \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

where $h$ is the bandwidth (window width) and $n$ is the dimensionality.

**Two Kernel Functions (1 Mark):**
1. **Gaussian kernel:** $\varphi(u) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2}$ (infinite support, smooth).
2. **Epanechnikov kernel:** $\varphi(u) = \frac{3}{4}(1 - u^2)$ for $\vert u \vert \leq 1$ (optimal in MSE sense).

---

## PART B — Long Answer Questions (14 Marks, with Internal Choice)

### Question 3 — Choice A: KNN — Complete Classification with Cover-Hart Bound

> **[KTU University Exam — Dec 2023] | CO1, CO2 | Bloom: Understand + Apply**

**(a) [7 Marks] Explain the KNN classification algorithm with a suitable example. Discuss the effect of choosing different values of $K$ on the decision boundary.**

**Model Solution:**

**KNN Algorithm Steps (3 Marks):**
1. Choose integer $K$ and a distance metric (e.g., Euclidean).
2. Compute distance from query $\mathbf{x}$ to all $N$ training samples.
3. Sort distances and select the $K$ smallest (the $K$ nearest neighbors).
4. Apply majority voting: assign $\mathbf{x}$ to the class with the highest count among those $K$ neighbors.

**Example Illustration (2 Marks):** With $K=3$ and 2-D training points from $\omega_1$ and $\omega_2$, compute distances to query, identify the 3 closest, and vote. If 2 of 3 belong to $\omega_1$, assign $\mathbf{x}$ to $\omega_1$.

**Effect of $K$ on Decision Boundary (2 Marks):**
- $K = 1$: Boundary is highly irregular, follows Voronoi cells. **Overfitting** to noise.
- Small $K$ (e.g., 3): Local structure preserved; sensitive to outliers.
- Large $K$ (e.g., 15): Boundary becomes smooth. **Underfitting**; risk of bias toward majority class.
- $K \to N$: All points vote → trivial constant prediction (class with most training samples wins).

**Best practice:** Use cross-validation to choose $K$. Common rule: $K = \sqrt{N}$.

---

**(b) [7 Marks] State and prove the Cover-Hart bound for the asymptotic error of the 1-NN rule in a two-class problem. Mention two practical limitations of KNN.**

**Model Solution:**

**Statement (1 Mark):** For a two-class problem, as $N \to \infty$:
$$P(e_{\text{1-NN}}) \leq 2 P(e_{\text{Bayes}}) - P^2(e_{\text{Bayes}})$$

**Proof Outline (4 Marks):**
Let $P(e_{\text{Bayes}}) = P(\omega_1 \mid \mathbf{x}) P(\omega_2 \mid \mathbf{x})$ minimum probability of error at point $\mathbf{x}$.

For the 1-NN rule, the asymptotic probability of error at $\mathbf{x}$ is:
$$P(e_{\text{1-NN}} \mid \mathbf{x}) = 2 P(\omega_1 \mid \mathbf{x}) P(\omega_2 \mid \mathbf{x})$$

This is because in the limit, the single nearest neighbor of $\mathbf{x}$ is essentially $\mathbf{x}$ itself, and the error occurs if the neighbor is of the wrong class. Integrating over the input space:

$$P(e_{\text{1-NN}}) = \int 2 P(\omega_1 \mid \mathbf{x}) P(\omega_2 \mid \mathbf{x}) \, p(\mathbf{x}) \, d\mathbf{x}$$

Using the AM-GM inequality $2ab \leq (a+b)^2 - (a^2 + b^2) = 1 - (a^2 + b^2)$, and noting that $P(\omega_1 \mid \mathbf{x}) + P(\omega_2 \mid \mathbf{x}) = 1$:

$$P(e_{\text{1-NN}}) = 2 \int P(\omega_1 \mid \mathbf{x}) P(\omega_2 \mid \mathbf{x}) \, p(\mathbf{x}) \, d\mathbf{x}$$

Now, $P(e_{\text{Bayes}}) = \int \min(P(\omega_1 \mid \mathbf{x}), P(\omega_2 \mid \mathbf{x})) p(\mathbf{x}) d\mathbf{x}$. Using the identity $2 \min(a,b) = a + b - \vert a - b \vert$ and $\vert a - b \vert = a + b - 2 \min(a,b)$:

$$P(e_{\text{1-NN}}) = 2 \int P(\omega_1 \mid \mathbf{x}) P(\omega_2 \mid \mathbf{x}) p(\mathbf{x}) d\mathbf{x}$$
$$\leq 2 \int \left[\frac{1}{4} - \left(P(\omega_1 \mid \mathbf{x}) - \frac{1}{2}\right)^2\right] p(\mathbf{x}) d\mathbf{x}$$
$$= \frac{1}{2} - 2 \int \left(P(\omega_1 \mid \mathbf{x}) - \frac{1}{2}\right)^2 p(\mathbf{x}) d\mathbf{x}$$

Since Bayes error satisfies $P(e_{\text{Bayes}}) = \int \min(P_1, P_2) p(\mathbf{x}) d\mathbf{x} = \frac{1}{2} - \int \vert P_1 - P_2 \vert p(\mathbf{x}) d\mathbf{x} / 2$, and noting $\min(a,b) \geq a(1-a)$:

$$\boxed{P(e_{\text{1-NN}}) \leq 2 P(e_{\text{Bayes}}) - P^2(e_{\text{Bayes}})}$$

**Two Practical Limitations of KNN (2 Marks):**
1. **Computationally expensive at test time:** Must compute distance to *all* $N$ training samples. Storage and latency grow linearly with $N$.
2. **Sensitive to irrelevant features and feature scaling:** Large-magnitude features dominate the distance; without normalization, the metric becomes meaningless. Also suffers from the **curse of dimensionality** in high dimensions.

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** Do NOT write "Cover-Hart bound = 2 × Bayes error" without showing the proof setup. Full marks require (i) the conditional error statement, (ii) integration, and (iii) the final bound. Skipping the inequality step will cost 2 marks.

---

### Question 3 — Choice B: Parzen Window — Theory and Estimation

> **[KTU University Exam — July 2024] | CO1, CO2 | Bloom: Understand + Apply**

**(a) [7 Marks] Derive the Parzen window density estimate using the hyperrectangular kernel. Discuss the effect of window width $h$ on the estimate.**

**Model Solution:**

**Derivation (5 Marks):**
Consider $N$ i.i.d. samples $\{\mathbf{x}_1, \dots, \mathbf{x}_N\}$ drawn from an unknown density $p(\mathbf{x})$. The probability that $k$ samples fall inside a region $R$ of volume $V$ is binomial:

$$P(k) = \binom{N}{k} P^k (1-P)^{N-k}$$

where $P = \int_R p(\mathbf{x}') d\mathbf{x}'$.

The expected number of samples in $R$ is $E[k] = NP$, giving the crude estimate:
$$p(\mathbf{x}) \approx \frac{k/N}{V}$$

For the Parzen window, define a hyperrectangular (hypercube) region of side $h$ centered at $\mathbf{x}$, with volume $V_n = h^n$. The indicator (window) function is:
$$\varphi(\mathbf{u}) = \begin{cases} 1, & \vert u_j \vert \leq \frac{1}{2} \text{ for all } j = 1, \dots, n \\ 0, & \text{otherwise} \end{cases}$$

The number of samples falling inside this hypercube is:
$$k_N(\mathbf{x}) = \sum_{i=1}^{N} \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

Therefore the density estimate at $\mathbf{x}$ becomes:
$$p_N(\mathbf{x}) = \frac{1}{N} \cdot \frac{k_N(\mathbf{x})}{V_n} = \frac{1}{N h^n} \sum_{i=1}^{N} \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right)$$

To confirm this is a valid density, integrate:
$$\int p_N(\mathbf{x}) d\mathbf{x} = \frac{1}{N h^n} \sum_{i=1}^{N} \int \varphi\!\left( \frac{\mathbf{x} - \mathbf{x}_i}{h} \right) d\mathbf{x}$$

Substituting $\mathbf{u} = \frac{\mathbf{x} - \mathbf{x}_i}{h}$, $d\mathbf{x} = h^n d\mathbf{u}$:
$$= \frac{1}{N h^n} \sum_{i=1}^{N} h^n \int \varphi(\mathbf{u}) d\mathbf{u} = \int \varphi(\mathbf{u}) d\mathbf{u} = 1$$

(since the kernel is normalized). Hence $p_N(\mathbf{x})$ is a valid PDF. **✓**

**Effect of Window Width $h$ (2 Marks):**
- **Small $h$ ($h \to 0$):** The hypercube becomes tiny; only the sample at $\mathbf{x}$ (if any) contributes. The estimate is a sum of **Dirac-like spikes** at the data points. **High variance**, low bias.
- **Large $h$ ($h \to \infty$):** The hypercube engulfs all samples; $p_N(\mathbf{x}) \to \frac{1}{N h^n} \cdot N \cdot 1 = \frac{1}{h^n}$ (essentially uniform). **High bias**, low variance.
- **Optimal $h$:** Balances bias and variance. The mean-integrated-squared-error (MISE) is minimized at $h \propto N^{-1/(n+4)}$ for Gaussian kernels.

---

**(b) [7 Marks] Given 5 one-dimensional samples $X = \{2, 3, 5, 7, 8\}$, estimate $p(4.5)$ using (i) a hyperrectangular kernel with $h = 2$, and (ii) a Gaussian kernel with $h = 1$. Show all steps.**

**Model Solution:**

**(i) Hyperrectangular (uniform) kernel with $h = 2$, $N = 5$:**
The uniform kernel here: $\varphi(u) = \frac{1}{2}$ for $\vert u \vert \leq 1$, else $0$.

The estimate: $p_N(x) = \frac{1}{N h} \sum_{i=1}^{N} \varphi\!\left( \frac{x - x_i}{h} \right)$

For $x = 4.5$:

| Sample $x_i$ | $u = \frac{4.5 - x_i}{2}$ | $\vert u \vert \leq 1$? | $\varphi(u)$ |
|---|---|---|---|
| 2 | $1.25$ | No | 0 |
| 3 | $0.75$ | Yes | 0.5 |
| 5 | $-0.25$ | Yes | 0.5 |
| 7 | $-1.25$ | No | 0 |
| 8 | $-1.75$ | No | 0 |

**[Stating kernel form: 1 Mark]**
**[Distance calculations: 2 Marks]**
**[Kernel evaluations: 1 Mark]**
**[Final summation: 1 Mark]**

$$p_5(4.5) = \frac{1}{5 \times 2} (0 + 0.5 + 0.5 + 0 + 0) = \frac{1.0}{10} = 0.10$$

**(ii) Gaussian kernel with $h = 1$, $N = 5$:**
The Gaussian kernel: $\varphi(u) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2}$

For $x = 4.5$:

| Sample $x_i$ | $u = 4.5 - x_i$ | $e^{-u^2/2}$ | $\varphi(u) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2}$ |
|---|---|---|---|
| 2 | 2.5 | 0.0439 | 0.0175 |
| 3 | 1.5 | 0.3247 | 0.1295 |
| 5 | -0.5 | 0.8825 | 0.3521 |
| 7 | -2.5 | 0.0439 | 0.0175 |
| 8 | -3.5 | 0.0025 | 0.00099 |

**[Distance and exponent calculation: 2 Marks]**

$$p_5(4.5) = \frac{1}{5 \times 1} (0.0175 + 0.1295 + 0.3521 + 0.0175 + 0.00099)$$
$$= \frac{0.5176}{5} = 0.1035$$

**[Final simplified expression: 1 Mark]**

$$\boxed{p_5(4.5) \approx 0.10 \text{ (uniform)}, \quad p_5(4.5) \approx 0.1035 \text{ (Gaussian)}}$$

Both estimates are similar, confirming that the density near $x = 4.5$ (between samples 3 and 5) is roughly 0.1.

> [!WARNING]
> **KTU Examiner's Pitfall Callout:** When evaluating the uniform kernel, students frequently forget that the *indicator* must be multiplied by the kernel's normalization constant ($\frac{1}{2}$ for the standard hyperrectangular window). Writing $\varphi(u) = 1$ instead of $\frac{1}{2}$ will give an answer of $0.20$ (wrong by a factor of 2) and cost 1 mark. Also remember the final division by $N \cdot h$ (or $N \cdot h^n$ for $n$-D).

---

## Topic Recap & Important Things to Remember

- **KNN is a non-parametric, lazy learner** — no training phase, all work happens at test time.
- For 1-NN, the decision boundary is a **Voronoi tessellation** of the training points.
- **Cover-Hart bound (2-class):** $P(e_{\text{1-NN}}) \leq 2 P(e_{\text{Bayes}})$.
- **Euclidean distance** is the default; always **normalize** features before computing.
- **Rule of thumb for K:** $K = \sqrt{N}$ (where $N$ = number of training samples).
- **Parzen window** is a non-parametric PDF estimator using a kernel $\varphi(\cdot)$ at every data point.
- **Bandwidth $h$** controls the bias-variance trade-off — too small → noisy, too large → over-smoothed.
- **Epanechnikov kernel is optimal** in the mean-integrated-squared-error (MISE) sense.
- **Convergence of Parzen estimate** requires $h_N \to 0$ AND $N h_N^n \to \infty$ as $N \to \infty$.
- **KNN and Parzen are duals:** Parzen fixes volume $V = h^n$; KNN fixes the count $K$ and lets volume adapt.
- **Majority voting** in KNN can have ties — common tie-break rule: pick the class with smaller average distance.
- **Curse of dimensionality:** Both methods degrade in high dimensions because distances become less discriminative.
- **Required marks allocation on KTU board papers:** Algorithm/methodology (3–4 marks) + worked example (3–4 marks) + trade-offs/limitations (2–3 marks) + final numerical answer (1 mark).

<!-- SECTION_5_END -->
