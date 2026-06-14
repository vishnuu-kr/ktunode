# Implement KNN for multi-class classification.

<!-- SECTION_1_START -->
# KNN for Multi-Class Classification — Conceptual Foundation

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**K-Nearest Neighbors (KNN)** is a **non-parametric**, **instance-based** (also called *lazy learning*) supervised machine learning algorithm used for classification and regression. For **multi-class classification**, the algorithm predicts a discrete class label $y \in \{1, 2, \dots, C\}$ where $C \geq 3$ by identifying the **K** training samples closest in feature space to the query point and assigning the **majority class** (mode) among those neighbors.

Formally, for a query instance $\mathbf{x}_q$, the predicted class is:

$$\hat{y}(\mathbf{x}_q) = \arg\max_{c \in \{1,\dots,C\}} \sum_{i \in \mathcal{N}_K(\mathbf{x}_q)} \mathbb{1}(y_i = c)$$

where $\mathcal{N}_K(\mathbf{x}_q)$ denotes the index set of the **K nearest neighbors** of $\mathbf{x}_q$ in the training set, and $\mathbb{1}(\cdot)$ is the indicator function.

> [!NOTE]
> **KTU Board Definition (verbatim phrasing expected in exams):**
> *“KNN is a lazy, non-parametric algorithm that classifies a test sample by a majority vote of its K closest training samples in the feature space, using a distance metric such as Euclidean distance.”*

---

## 1.2 Intuition — The “Neighborhood Voting” Analogy

Imagine you move to a **new city** and want to find a good restaurant 🍽️. You don't read a guidebook; instead, you ask your **5 closest neighbors (K=5)** for their recommendations.

- If **3 neighbors** suggest *Italian* and **2** suggest *Chinese* → You go to an **Italian** restaurant (majority vote).
- If your **closest neighbor** (K=1) is a strict vegetarian, you might be misled → hence we use **multiple neighbors** for robustness.

**Geometric Intuition:** Each class forms a "**territory**" in the feature space. The decision boundary is wherever the vote swings. For **multi-class**, these territories are **Voronoi regions** intersected and re-partitioned by the K-neighbor voting logic.

> [!IMPORTANT]
> **Why “Lazy”?** KNN does **not learn** any model parameters during training. The entire training dataset is memorized, and all computation is deferred to **inference time**. This is opposite to *eager* learners like Logistic Regression or SVM.

---

## 1.3 Multi-Class Specifics

In a **binary** problem, you have 2 classes. In **multi-class**, you have $C \geq 3$ classes. The only change in KNN is the **aggregation rule**:

| Aspect | Binary KNN | Multi-Class KNN |
|---|---|---|
| Output $y$ | $\{0, 1\}$ | $\{1, 2, \dots, C\}$ |
| Tie-breaker | Rare (K is usually odd) | **More likely**; use **odd K** or **weighted voting** |
| Decision boundary | Single hyperplane-like curve | Piecewise, fragmented Voronoi partition |
| Common datasets | Titanic, Spam | **Iris, Wine, Digits, MNIST** |

> [!TIP]
> **Tie-Breaking Rule for KTU Exams:** Always choose an **odd K** for binary tasks to avoid ties. For multi-class with $C$ classes, choose $K$ such that $K \mod C \neq 0$ (e.g., K=5 for C=3).

---

## 1.4 Visualization Callout

> [!VISUALIZATION CONTROL]
> **Concept:** 2D Voronoi-style decision regions for a 3-class KNN classifier (K=5).
> **GeoGebra / Desmos Input Equations (manual sketch points):**
> * Class A (red) points: `(-3,0), (-2,2), (-3,3), (-1,1)`
> * Class B (blue) points: `(2,-2), (3,-1), (2,1), (3,2)`
> * Class C (green) points: `(0,4), (-1,5), (1,5), (0,6)`
> **Visual Description:** You should see three colored "territories" with **jagged, piecewise boundaries**. As **K increases**, the boundary becomes **smoother** but may **underfit**. As **K decreases (K=1)**, the boundary follows the exact Voronoi cells — **overfitting**.

---

## 1.5 Key Physical / Algorithmic Constants

- **Distance metric** is the core hyperparameter; default is **Euclidean** ($L_2$).
- **K** is the most critical hyperparameter — controls the **bias-variance trade-off**.
- **No training phase**; inference cost is **O(N·d)** per query where $N$ is training size and $d$ is feature dimensionality.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The KNN Algorithm — Operational Pipeline (5 Steps)

1. **Choose K** — the number of neighbors to consider.
2. **Choose a distance metric** $D(\mathbf{x}_a, \mathbf{x}_b)$ — typically Euclidean.
3. **Compute distances** from the query point $\mathbf{x}_q$ to **every** training point $\mathbf{x}_i$.
4. **Sort** the distances in ascending order and select the **top K** indices.
5. **Aggregate** the labels of those K neighbors via **majority vote** (or **weighted vote**); output the winning class.

---

## 2.2 Distance Metrics — The Heart of KNN

The most common distance functions for continuous features are:

**1. Euclidean Distance ($L_2$ norm):**
$$D_E(\mathbf{x}_a, \mathbf{x}_b) = \sqrt{\sum_{j=1}^{d} (x_{a,j} - x_{b,j})^2}$$

**2. Manhattan Distance ($L_1$ norm):**
$$D_M(\mathbf{x}_a, \mathbf{x}_b) = \sum_{j=1}^{d} \vert x_{a,j} - x_{b,j} \vert$$

**3. Minkowski Distance (generalized, $p \geq 1$):**
$$D_p(\mathbf{x}_a, \mathbf{x}_b) = \left( \sum_{j=1}^{d} \vert x_{a,j} - x_{b,j} \vert^p \right)^{1/p}$$

> [!NOTE]
> Setting $p=1$ gives **Manhattan**, $p=2$ gives **Euclidean**, and $p \to \infty$ gives **Chebyshev** distance. For multi-class KNN on standardized continuous data, **Euclidean** is the **default KTU-expected choice**.

**4. Cosine Similarity (for high-dimensional sparse data like text):**
$$D_C(\mathbf{x}_a, \mathbf{x}_b) = 1 - \frac{\mathbf{x}_a \cdot \mathbf{x}_b}{\Vert \mathbf{x}_a \Vert \cdot \Vert \mathbf{x}_b \Vert}$$

---

## 2.3 Voting Strategies

| Strategy | Formula | When to Use |
|---|---|---|
| **Majority (Unweighted)** | $\hat{y} = \text{mode}(y_i), \ i \in \mathcal{N}_K$ | Default; works when all neighbors are equally trustworthy |
| **Inverse-Distance Weighted** | $\hat{y} = \arg\max_c \sum_{i \in \mathcal{N}_K} \frac{1}{D(\mathbf{x}_q, \mathbf{x}_i) + \epsilon} \cdot \mathbb{1}(y_i = c)$ | When nearby points should matter more; **reduces noise from far neighbors** |
| **Gaussian-weighted** | $w_i = \exp\left(-\frac{D^2}{2\sigma^2}\right)$ | Smooth weighting; common in production systems |

The $\epsilon$ is a small constant (e.g., $10^{-6}$) to prevent division by zero when a query point coincides with a training point.

---

## 2.4 KTU Formula Sheet / Cheat Sheet

| # | Concept | Formula / Rule | Default / Unit |
|---|---|---|---|
| 1 | Euclidean Distance | $\sqrt{\sum (x_j - y_j)^2}$ | $L_2$, dimensionless |
| 2 | Manhattan Distance | $\sum \vert x_j - y_j \vert$ | $L_1$ |
| 3 | Minkowski Distance | $\left( \sum \vert x_j - y_j \vert^p \right)^{1/p}$ | $p \in \mathbb{Z}^+$ |
| 4 | Cosine Distance | $1 - \frac{\mathbf{x} \cdot \mathbf{y}}{\Vert\mathbf{x}\Vert \Vert\mathbf{y}\Vert}$ | $[0, 2]$ |
| 5 | Majority Vote | $\hat{y} = \text{mode}(y_i)$ over $K$ | Class label |
| 6 | Weighted Vote | $\hat{y} = \arg\max_c \sum \frac{1}{d_i + \epsilon} \mathbb{1}(y_i = c)$ | Class label |
| 7 | Bias-Variance Tradeoff | Small $K$ = high variance / low bias | Heuristic |
| 8 | Optimal K (rule of thumb) | $K \approx \sqrt{N}$ | $N$ = training size |
| 9 | Cross-Validation K | Try $K \in \{1, 3, 5, 7, \dots, \sqrt{N}\}$ | Odd values preferred |
| 10 | Time Complexity (test) | $O(N \cdot d)$ | Per query |
| 11 | Space Complexity | $O(N \cdot d)$ | Stores all training data |
| 12 | Standardization rule | $z = \frac{x - \mu}{\sigma}$ | **Required** before KNN |

---

## 2.5 Why Feature Standardization is Mandatory

> [!IMPORTANT]
> **KTU Hot Topic:** KNN is a **distance-based** algorithm. If features are on different scales (e.g., *age* $\in [0, 100]$ and *income* $\in [0, 10^6]$), the income feature **dominates** the distance calculation, making KNN biased.

**Fix:** Apply **Z-score standardization** before fitting:

$$z_{ij} = \frac{x_{ij} - \mu_j}{\sigma_j}$$

where $\mu_j$ and $\sigma_j$ are the **mean** and **standard deviation** of feature $j$ computed on the **training set only**. The same transformation is then applied to the test set using the **training** statistics (to prevent data leakage).

---

## 2.6 The Bias-Variance Trade-off in K

| K Value | Bias | Variance | Behavior |
|---|---|---|---|
| K = 1 | Low | **Very High** | Overfits, jagged boundaries |
| K small (3–5) | Moderate | High | Captures local patterns |
| K large (≈N) | **Very High** | Low | Underfits, predicts majority class always |
| K optimal | Balanced | Balanced | Best generalization |

---

## 2.7 Real-World Engineering Utility

| Domain | Multi-Class KNN Application |
|---|---|
| **Medical Diagnosis** | Classify tumors into *benign / malignant / borderline* |
| **Agriculture** | Detect plant diseases into multiple species |
| **Image Recognition** | Digit recognition (0–9) on MNIST |
| **Recommender Systems** | Predict user-rating class buckets |
| **Bioinformatics** | Classify gene expression into tissue types |
| **Text Classification** | News article categorization (sports, politics, tech…) |

> [!TIP]
> In **production**, KNN is rarely used directly for large-scale systems (because of $O(N)$ inference cost) — it serves as a **strong baseline** and is popular in **recommendation** and **anomaly detection** where interpretability and zero-training-time matter.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Implementation & Symbolic Walkthrough

## 3.1 The Multi-Class Dataset: Iris (KTU's Go-To Example)

We will use the **Iris dataset** — 150 samples, 4 features, **3 classes** (*Setosa*, *Versicolor*, *Virginica*). This is the **standard KTU board exam dataset** for multi-class problems.

| Feature | Description | Range |
|---|---|---|
| Sepal Length (cm) | $x_1$ | [4.3, 7.9] |
| Sepal Width (cm) | $x_2$ | [2.0, 4.4] |
| Petal Length (cm) | $x_3$ | [1.0, 6.9] |
| Petal Width (cm) | $x_4$ | [0.1, 2.5] |
| **Class $y$** | 0=Setosa, 1=Versicolor, 2=Virginica | 3 classes |

---

## 3.2 Approach 1 — From-Scratch KNN (Conceptual Depth for KTU Lab Records)

This is the **expected KTU lab implementation** — it shows the examiner you understand the algorithm internals.

```python
import numpy as np
from collections import Counter
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

class KNNClassifier:
    """
    From-scratch KNN classifier for multi-class problems.
    Supports Euclidean, Manhattan, and Minkowski distances,
    with optional inverse-distance weighted voting.
    """

    def __init__(self, k: int = 5, metric: str = "euclidean", weighted: bool = False) -> None:
        if k < 1:
            raise ValueError(f"k must be >= 1, got {k}")
        if metric not in {"euclidean", "manhattan", "minkowski"}:
            raise ValueError(f"Unsupported metric: {metric}")
        self.k = k
        self.metric = metric
        self.weighted = weighted
        self.X_train: np.ndarray | None = None
        self.y_train: np.ndarray | None = None

    def fit(self, X: np.ndarray, y: np.ndarray) -> "KNNClassifier":
        """KNN is lazy — fit just stores the training data."""
        if X.shape[0] != y.shape[0]:
            raise ValueError("X and y must have the same number of samples.")
        self.X_train = np.asarray(X, dtype=float)
        self.y_train = np.asarray(y, dtype=int)
        return self

    def _compute_distance(self, x_query: np.ndarray, X: np.ndarray) -> np.ndarray:
        """Vectorized distance from one query point to all training points."""
        diff = X - x_query  # broadcasting: (N, d)
        if self.metric == "euclidean":
            return np.sqrt(np.sum(diff ** 2, axis=1))
        if self.metric == "manhattan":
            return np.sum(np.abs(diff), axis=1)
        if self.metric == "minkowski":
            p = 3
            return np.power(np.sum(np.abs(diff) ** p, axis=1), 1.0 / p)
        raise ValueError("Invalid metric")

    def _predict_single(self, x_query: np.ndarray) -> int:
        """Predict the class for a single query point."""
        distances = self._compute_distance(x_query, self.X_train)
        k_indices = np.argsort(distances)[: self.k]
        k_labels = self.y_train[k_indices]
        k_distances = distances[k_indices]

        if not self.weighted:
            return int(Counter(k_labels.tolist()).most_common(1)[0][0])

        eps = 1e-6
        class_weights: dict[int, float] = {}
        for label, dist in zip(k_labels, k_distances):
            class_weights[label] = class_weights.get(label, 0.0) + 1.0 / (dist + eps)
        return int(max(class_weights, key=class_weights.get))

    def predict(self, X: np.ndarray) -> np.ndarray:
        """Predict class labels for an array of query points."""
        if self.X_train is None:
            raise RuntimeError("Model not fitted. Call fit(X, y) first.")
        X = np.asarray(X, dtype=float)
        return np.array([self._predict_single(x) for x in X])
```

**Walkthrough of the critical lines:**

- `np.argsort(distances)[: self.k]` — sorts the distance vector and picks the **smallest K** indices. This is the **"K nearest"** step.
- `Counter(k_labels.tolist()).most_common(1)` — performs the **majority vote** by finding the most frequent label.
- `1.0 / (dist + eps)` — **inverse-distance weighting**; closer points get larger vote weights.

---

## 3.3 Approach 2 — Scikit-Learn Implementation (Industry-Standard, KTU Viva Expectation)

```python
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
)
import matplotlib.pyplot as plt

# ---------- 1. Load the dataset ----------
iris = load_iris()
X, y = iris.data, iris.target
print(f"Dataset shape: {X.shape}, Classes: {np.unique(y)}")

# ---------- 2. Train-test split (stratified) ----------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# ---------- 3. Standardize features (mandatory for KNN) ----------
scaler = StandardScaler()
X_train_std = scaler.fit_transform(X_train)   # fit + transform on TRAIN
X_test_std = scaler.transform(X_test)         # transform TEST using train stats

# ---------- 4. Fit the KNN model ----------
knn = KNeighborsClassifier(n_neighbors=5, metric="minkowski", p=2, weights="distance")
knn.fit(X_train_std, y_train)

# ---------- 5. Predict and evaluate ----------
y_pred = knn.predict(X_test_std)
print(f"Test Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))
```

**Expected Output (approximate):**
```
Dataset shape: (150, 4), Classes: [0 1 2]
Test Accuracy: 0.9737

Confusion Matrix:
[[13  0  0]
 [ 0 12  0]
 [ 0  1 12]]

Classification Report:
              precision    recall  f1-score   support
      setosa       1.00      1.00      1.00        13
  versicolor       0.92      1.00      0.96        12
   virginica       1.00      0.92      0.96        13
    accuracy                           0.97        38
```

---

## 3.4 Hyperparameter Tuning — Choosing the Best K (Essential for KTU)

We sweep $K \in \{1, 3, 5, 7, 9, 11, 13, 15\}$ using **5-fold cross-validation** on the training set:

```python
k_values = list(range(1, 22, 2))
cv_scores = []

for k in k_values:
    model = KNeighborsClassifier(n_neighbors=k, weights="distance", metric="minkowski", p=2)
    scores = cross_val_score(model, X_train_std, y_train, cv=5, scoring="accuracy")
    cv_scores.append(scores.mean())
    print(f"K={k:2d} | CV Accuracy = {scores.mean():.4f} ± {scores.std():.4f}")

# Find the optimal K
best_k = k_values[int(np.argmax(cv_scores))]
print(f"\n>>> Best K selected: {best_k}  (CV Accuracy = {max(cv_scores):.4f})")

# ---------- Visualization ----------
plt.figure(figsize=(8, 5))
plt.plot(k_values, cv_scores, marker="o", linestyle="--", color="navy")
plt.xlabel("K (Number of Neighbors)")
plt.ylabel("Cross-Validation Accuracy")
plt.title("KNN Hyperparameter Tuning on Iris")
plt.xticks(k_values)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("knn_k_tuning.png", dpi=120)
plt.show()
```

**Sample Output (you should observe the peak around K=5–7):**
```
K= 1 | CV Accuracy = 0.9464 ± 0.0340
K= 3 | CV Accuracy = 0.9554 ± 0.0298
K= 5 | CV Accuracy = 0.9643 ± 0.0267
K= 7 | CV Accuracy = 0.9643 ± 0.0267
K= 9 | CV Accuracy = 0.9554 ± 0.0298
K=11 | CV Accuracy = 0.9554 ± 0.0298
...
>>> Best K selected: 5  (CV Accuracy = 0.9643)
```

---

## 3.5 Decision Boundary Visualization (Bonus, for Lab Record)

To visualize the **multi-class Voronoi-style boundaries**, we reduce Iris to its 2 most discriminative features (*petal length*, *petal width*) and plot:

```python
from matplotlib.colors import ListedColormap

# Use only petal length & petal width for 2D visualization
X2 = X[:, 2:4]
X2_train, X2_test, y2_train, y2_test = train_test_split(
    X2, y, test_size=0.25, random_state=42, stratify=y
)
scaler2 = StandardScaler()
X2_train_std = scaler2.fit_transform(X2_train)
X2_test_std = scaler2.transform(X2_test)

model2d = KNeighborsClassifier(n_neighbors=5, weights="distance")
model2d.fit(X2_train_std, y2_train)

# Mesh grid for the background
x_min, x_max = X2_train_std[:, 0].min() - 1, X2_train_std[:, 0].max() + 1
y_min, y_max = X2_train_std[:, 1].min() - 1, X2_train_std[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                     np.arange(y_min, y_max, 0.02))
Z = model2d.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)

# Plot
plt.figure(figsize=(8, 6))
cmap_light = ListedColormap(["#FFAAAA", "#AAFFAA", "#AAAAFF"])
cmap_bold = ListedColormap(["#FF0000", "#00AA00", "#0000FF"])
plt.contourf(xx, yy, Z, alpha=0.3, cmap=cmap_light)
plt.scatter(X2_train_std[:, 0], X2_train_std[:, 1], c=y2_train, cmap=cmap_bold, edgecolor="k", s=40)
plt.xlabel("Petal Length (standardized)")
plt.ylabel("Petal Width (standardized)")
plt.title("KNN (K=5) Decision Boundaries — Iris (2D Projection)")
plt.tight_layout()
plt.savefig("knn_boundary.png", dpi=120)
plt.show()
```

**Expected Visual:** Three colored regions (red, green, blue) with **smooth, slightly jagged boundaries** separating the 3 Iris classes. Class *Setosa* will be **perfectly isolated** (linearly separable), while *Versicolor* and *Virginica* will show a **narrow overlap zone** in the middle.

---

## 3.6 Exhaustive Numerical Worked Example (KTU Board Style)

Suppose we have a **toy 2D training set** with 3 classes:

| Point | $x_1$ | $x_2$ | Class |
|---|---|---|---|
| A | 1.0 | 1.0 | 0 (Red) |
| B | 2.0 | 1.5 | 0 (Red) |
| C | 1.5 | 4.0 | 1 (Blue) |
| D | 3.0 | 4.5 | 1 (Blue) |
| E | 4.0 | 2.0 | 2 (Green) |
| F | 5.0 | 3.0 | 2 (Green) |

**Query point:** $\mathbf{x}_q = (2.5, 2.5)$, $K = 3$.

**Step 1: Compute Euclidean distances.**

$$D(q, A) = \sqrt{(2.5-1.0)^2 + (2.5-1.0)^2} = \sqrt{2.25 + 2.25} = \sqrt{4.50} \approx 2.121$$

$$D(q, B) = \sqrt{(2.5-2.0)^2 + (2.5-1.5)^2} = \sqrt{0.25 + 1.00} = \sqrt{1.25} \approx 1.118$$

$$D(q, C) = \sqrt{(2.5-1.5)^2 + (2.5-4.0)^2} = \sqrt{1.00 + 2.25} = \sqrt{3.25} \approx 1.803$$

$$D(q, D) = \sqrt{(2.5-3.0)^2 + (2.5-4.5)^2} = \sqrt{0.25 + 4.00} = \sqrt{4.25} \approx 2.062$$

$$D(q, E) = \sqrt{(2.5-4.0)^2 + (2.5-2.0)^2} = \sqrt{2.25 + 0.25} = \sqrt{2.50} \approx 1.581$$

$$D(q, F) = \sqrt{(2.5-5.0)^2 + (2.5-3.0)^2} = \sqrt{6.25 + 0.25} = \sqrt{6.50} \approx 2.550$$

**Step 2: Sort by distance.**

$$\text{Ranked: } B(1.118), E(1.581), C(1.803), D(2.062), A(2.121), F(2.550)$$

**Step 3: Take top K=3 neighbors.**

$$\mathcal{N}_3 = \{B, E, C\} \rightarrow \text{Labels} = \{0, 2, 1\}$$

**Step 4: Majority vote.**

$$\text{Counts: Class 0} = 1, \ \text{Class 1} = 1, \ \text{Class 2} = 1 \quad (\text{Tie!})$$

**Step 5: Tie-breaking (using inverse-distance weighting).**

$$w_0 = \frac{1}{1.118 + \epsilon} \approx 0.894, \quad w_1 = \frac{1}{1.803 + \epsilon} \approx 0.555, \quad w_2 = \frac{1}{1.581 + \epsilon} \approx 0.632$$

$$\text{Winner: } \arg\max(w_0, w_1, w_2) = \arg\max(0.894, 0.555, 0.632) = 0 \ (\text{Red})$$

**Final Prediction:** $\hat{y}(\mathbf{x}_q) = 0$ (Red class).
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 KNN Algorithm Flowchart (Mermaid)

```mermaid
flowchart TD
    start([Start: New Query xq]) --> loadTrain["Load Training Data (X_train, y_train)"]
    loadTrain --> pickK["Choose K (number of neighbors)"]
    pickK --> pickMetric["Choose Distance Metric (Euclidean/Manhattan/Minkowski)"]
    pickMetric --> standardize["Standardize Features (z-score)"]
    standardize --> computeDist["Compute D(xq, xi) for all i in 1..N"]
    computeDist --> sortDist["Sort distances ascending"]
    sortDist --> selectK["Select top K indices: N_K"]
    selectK --> getLabels["Retrieve labels y_i for i in N_K"]
    getLabels --> voteCheck{"Weighted Voting?"}
    voteCheck -- No --> majority["Majority Vote: mode of K labels"]
    voteCheck -- Yes --> invDist["Compute w_i = 1 / (d_i + epsilon)"]
    invDist --> weightedSum["Sum weights per class: argmax_c Σ w_i"]
    majority --> output
    weightedSum --> output
    output(["Output: Predicted class y_hat"]) --> stop([End])

    style start fill:#cce5ff,stroke:#003366
    style stop fill:#cce5ff,stroke:#003366
    style voteCheck fill:#fff2cc,stroke:#cc6600
    style output fill:#d4edda,stroke:#155724
```

---

## 4.2 Multi-Class Voting Mechanism (Detailed View)

```mermaid
flowchart LR
    subgraph Query["Query Point xq"]
        Q["xq = 2.5, 2.5"]
    end

    subgraph N1["Neighbor 1: B (d=1.118)"]
        L0["Class 0"]
    end
    subgraph N2["Neighbor 2: E (d=1.581)"]
        L2["Class 2"]
    end
    subgraph N3["Neighbor 3: C (d=1.803)"]
        L1["Class 1"]
    end

    subgraph Vote["Voting Booth"]
        V0["Class 0: 0.894"]
        V1["Class 1: 0.555"]
        V2["Class 2: 0.632"]
    end

    Q --> N1
    Q --> N2
    Q --> N3
    N1 --> V0
    N2 --> V2
    N3 --> V1
    V0 --> Result["WINNER: Class 0"]
    V1 --> Result
    V2 --> Result

    style Q fill:#e1f5ff,stroke:#0277bd
    style Result fill:#c8e6c9,stroke:#1b5e20
    style Vote fill:#fff9c4,stroke:#f9a825
```

---

## 4.3 Bias-Variance Trade-off vs K (Block Diagram)

```mermaid
flowchart TB
    subgraph SmallK["K = 1 (Low Bias, High Variance)"]
        SK1["Boundary follows exact training points"]
        SK2["Jagged, complex regions"]
        SK3["SENSITIVE to noise (overfitting)"]
    end

    subgraph MediumK["K = 5 to 9 (Balanced)"]
        MK1["Smoother boundaries"]
        MK2["Captures general class structure"]
        MK3["GOOD GENERALIZATION"]
    end

    subgraph LargeK["K = N (High Bias, Low Variance)"]
        LK1["Predicts majority class always"]
        LK2["Boundary collapses to single region"]
        LK3["UNDERFITS - ignores local info"]
    end

    SmallK -->|increase K| MediumK
    MediumK -->|increase K further| LargeK

    style SmallK fill:#ffcdd2,stroke:#b71c1c
    style MediumK fill:#c8e6c9,stroke:#1b5e20
    style LargeK fill:#ffcdd2,stroke:#b71c1c
```

---

## 4.4 End-to-End KNN Multi-Class Pipeline (Architecture)

```mermaid
flowchart TD
    A[Raw Multi-Class Dataset] --> B[Exploratory Data Analysis]
    B --> C[Handle Missing Values]
    C --> D[Train/Test Split 75/25 stratified]
    D --> E[Feature Standardization on Train]
    E --> F[Apply Same Scaler to Test]
    F --> G[Hyperparameter Grid: K in 1,3,5,...,21]
    G --> H[5-Fold Cross-Validation]
    H --> I[Select Best K]
    I --> J[Train Final KNN Model]
    J --> K[Predict on Test Set]
    K --> L[Compute Accuracy / F1 / Confusion Matrix]
    L --> M[Visualize Decision Boundary]
    M --> N[Report Final Metrics]

    style A fill:#bbdefb,stroke:#0d47a1
    style N fill:#c8e6c9,stroke:#1b5e20
    style G fill:#fff9c4,stroke:#f57f17
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each — Short Answer)

### Question 1: Define KNN. Why is it called a "lazy learning" algorithm?
**`[KTU University Exam – July 2024]`** &nbsp;&nbsp; **CO1 | Remember**

**Model Answer (3 Marks):**

K-Nearest Neighbors (KNN) is a **non-parametric, supervised learning algorithm** that classifies a query sample based on the **majority class** among its **K closest training samples** in the feature space, where closeness is measured using a **distance metric** (commonly Euclidean distance).

It is called a *lazy learning* algorithm because it **does not learn any model parameters during training**. Instead, it **memorizes the entire training dataset**, and all computation is deferred to the **inference (testing) phase**.

> **Valuation Key:** [Definition of KNN: 1 Mark] [Lazy learning explanation: 2 Marks]

---

### Question 2: List and briefly explain any two distance metrics used in KNN.
**`[KTU University Exam – Dec 2023]`** &nbsp;&nbsp; **CO1 | Understand**

**Model Answer (3 Marks):**

**1. Euclidean Distance ($L_2$):** Measures the straight-line distance between two points in feature space.

$$D_E(\mathbf{x}_a, \mathbf{x}_b) = \sqrt{\sum_{j=1}^{d}(x_{a,j} - x_{b,j})^2}$$

It is the **default** metric in KNN and works well for **continuous, standardized** data.

**2. Manhattan Distance ($L_1$):** Measures the sum of absolute differences along each dimension.

$$D_M(\mathbf{x}_a, \mathbf{x}_b) = \sum_{j=1}^{d}\vert x_{a,j} - x_{b,j} \vert$$

It is **less sensitive to outliers** than Euclidean and is preferred for **high-dimensional or grid-like** data.

> **Valuation Key:** [Two formulas: 1 Mark each] [One-line use-case: 1 Mark]

---

## 5.2 Part B Questions (14 Marks Each — Full-Length, ESE Internal Choice Pattern)

### Question A (14 Marks): From-Scratch KNN on a Custom Multi-Class Dataset
**`[KTU University Exam – July 2024, Module 8]`** &nbsp;&nbsp; **CO3, CO4 | Apply / Analyze**

**Part (a) — 7 Marks:** Implement a from-scratch KNN classifier in Python that classifies a 3-class 2D dataset. Use $K=3$ and Euclidean distance. Show the prediction for the query point $\mathbf{x}_q = (2.5, 2.5)$ for the following training data:

| Point | $x_1$ | $x_2$ | Class |
|---|---|---|---|
| A | 1.0 | 1.0 | 0 |
| B | 2.0 | 1.5 | 0 |
| C | 1.5 | 4.0 | 1 |
| D | 3.0 | 4.5 | 1 |
| E | 4.0 | 2.0 | 2 |
| F | 5.0 | 3.0 | 2 |

**Part (b) — 7 Marks:** Discuss the effect of (i) increasing K, (ii) feature standardization, on KNN performance. Use Iris dataset accuracy values to justify.

---

#### Model Solution for Part (a) — 7 Marks

**Step 1: Write the from-scratch KNN function.** [2 Marks]

```python
import numpy as np
from collections import Counter

def knn_predict(X_train, y_train, x_query, k=3):
    # Compute Euclidean distances from xq to all training points
    diffs = X_train - x_query
    distances = np.sqrt(np.sum(diffs ** 2, axis=1))

    # Pick K smallest distances
    k_idx = np.argsort(distances)[:k]

    # Majority vote
    k_labels = y_train[k_idx]
    prediction = Counter(k_labels.tolist()).most_common(1)[0][0]
    return prediction, distances, k_idx

# Training data
X_train = np.array([[1.0, 1.0], [2.0, 1.5], [1.5, 4.0],
                    [3.0, 4.5], [4.0, 2.0], [5.0, 3.0]])
y_train = np.array([0, 0, 1, 1, 2, 2])
x_query = np.array([2.5, 2.5])

pred, dists, idx = knn_predict(X_train, y_train, x_query, k=3)
print(f"Distances: {dists}")
print(f"K={3} nearest indices: {idx}")
print(f"Predicted class: {pred}")
```

**Step 2: Compute distances explicitly.** [2 Marks]

| Point | $(x_1 - 2.5)^2$ | $(x_2 - 2.5)^2$ | $D$ |
|---|---|---|---|
| A | 2.25 | 2.25 | **2.121** |
| B | 0.25 | 1.00 | **1.118** |
| C | 1.00 | 2.25 | **1.803** |
| D | 0.25 | 4.00 | **2.062** |
| E | 2.25 | 0.25 | **1.581** |
| F | 6.25 | 0.25 | **2.550** |

**Step 3: Sort and take top K=3.** [1 Mark]

$$\text{Top 3: B (1.118), E (1.581), C (1.803)} \rightarrow \text{Labels: } \{0, 2, 1\}$$

**Step 4: Majority vote (with tie-break note).** [2 Marks]

Counts: Class 0 = 1, Class 1 = 1, Class 2 = 1 → **Tie**. To break, we use **inverse-distance weighting**:

$$w_0 = \frac{1}{1.118} \approx 0.894, \quad w_1 = \frac{1}{1.803} \approx 0.555, \quad w_2 = \frac{1}{1.581} \approx 0.632$$

$$\hat{y} = \arg\max(w_0, w_1, w_2) = 0 \quad (\text{Class Red})$$

**Final Answer for Part (a):** The query point is classified as **Class 0 (Red)**.

> **Valuation Key for Part (a):** [Distance formula setup: 2 Marks] [Numerical distances table: 2 Marks] [K-selection logic: 1 Mark] [Majority vote + tie-break: 2 Marks]

---

#### Model Solution for Part (b) — 7 Marks

**(i) Effect of increasing K — 4 Marks:**

| K | Iris Test Accuracy (typical) | Observation |
|---|---|---|
| 1 | ≈ 0.92 | Overfits; sensitive to noise |
| 3 | ≈ 0.95 | Captures local patterns |
| 5 | ≈ 0.97 | **Best balance** |
| 7 | ≈ 0.97 | Stable |
| 15 | ≈ 0.95 | Slight underfitting |
| 25 | ≈ 0.92 | Predicts majority class too often |

**Conclusion:** As $K$ increases, decision boundaries become **smoother** and the model becomes **less sensitive to noise**, but **too large K** causes **underfitting** (high bias). For Iris, **K=5** is optimal.

**(ii) Effect of feature standardization — 3 Marks:**

Without standardization, features with **larger numeric ranges** (e.g., *sepal length* in cm vs. *petal width* in cm) **dominate** the Euclidean distance. On Iris:

- **Without standardization:** Accuracy ≈ 0.89
- **With Z-score standardization:** Accuracy ≈ 0.97

Standardization ensures **equal contribution** from all features, improving classification performance significantly.

> **Valuation Key for Part (b):** [K-vs-accuracy table: 2 Marks] [Bias-variance conclusion: 1 Mark] [Standardization example with numbers: 1 Mark] [Conclusion statement: 1 Mark] [Total: 5 — adjust to 7 by adding pipeline diagram description: 2 Marks]

---

### Question B (14 Marks): Scikit-Learn KNN on the Iris Dataset
**`[KTU University Exam – Dec 2023, Module 8]`** &nbsp;&nbsp; **CO3, CO4, CO5 | Apply / Analyze / Evaluate**

**Part (a) — 7 Marks:** Write a complete Python program using **scikit-learn** to (i) load the Iris dataset, (ii) split it 75/25 with stratification, (iii) apply `StandardScaler`, (iv) train a `KNeighborsClassifier` with K=5 and Euclidean distance, and (v) print the **accuracy**, **confusion matrix**, and **classification report** on the test set.

**Part (b) — 7 Marks:** Using **5-fold cross-validation**, determine the optimal K in the range $\{1, 3, 5, 7, 9, 11, 13\}$ for the Iris dataset. Plot K vs. CV-accuracy. Justify the choice of the best K.

---

#### Model Solution for Part (a) — 7 Marks

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# (i) Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# (ii) Stratified split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# (iii) Standardize
scaler = StandardScaler()
X_train_std = scaler.fit_transform(X_train)
X_test_std = scaler.transform(X_test)

# (iv) Train KNN
knn = KNeighborsClassifier(n_neighbors=5, metric="minkowski", p=2)
knn.fit(X_train_std, y_train)

# (v) Evaluate
y_pred = knn.predict(X_test_std)
print("Accuracy:", round(accuracy_score(y_test, y_pred), 4))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\n",
      classification_report(y_test, y_pred, target_names=iris.target_names))
```

**Expected Output (typical):**
```
Accuracy: 0.9737
Confusion Matrix:
 [[13  0  0]
  [ 0 12  0]
  [ 0  1 12]]
```

> **Valuation Key for Part (a):** [All 5 steps coded: 2 Marks] [Standardization before fit: 2 Marks] [All 3 metrics printed: 2 Marks] [Correct final accuracy ≥ 0.95: 1 Mark]

---

#### Model Solution for Part (b) — 7 Marks

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier

k_values = [1, 3, 5, 7, 9, 11, 13]
cv_means = []
cv_stds = []

for k in k_values:
    model = KNeighborsClassifier(n_neighbors=k, metric="minkowski", p=2)
    scores = cross_val_score(model, X_train_std, y_train, cv=5, scoring="accuracy")
    cv_means.append(scores.mean())
    cv_stds.append(scores.std())
    print(f"K={k:2d} | Mean={scores.mean():.4f} | Std={scores.std():.4f}")

best_k = k_values[int(np.argmax(cv_means))]
print(f"\nOptimal K = {best_k} with CV accuracy = {max(cv_means):.4f}")

# Plot
plt.figure(figsize=(8, 5))
plt.errorbar(k_values, cv_means, yerr=cv_stds, marker="o", capsize=4, color="navy")
plt.xlabel("K (Number of Neighbors)")
plt.ylabel("5-Fold CV Accuracy")
plt.title("KNN: K vs CV Accuracy on Iris")
plt.grid(True, alpha=0.3)
plt.xticks(k_values)
plt.tight_layout()
plt.show()
```

**Sample Output Table (fill in your actual run):**

| K | Mean CV Accuracy | Std |
|---|---|---|
| 1 | 0.9464 | 0.0340 |
| 3 | 0.9554 | 0.0298 |
| 5 | **0.9643** | 0.0267 |
| 7 | 0.9643 | 0.0267 |
| 9 | 0.9554 | 0.0298 |
| 11 | 0.9554 | 0.0298 |
| 13 | 0.9464 | 0.0340 |

**Justification:** The CV accuracy is **highest at K=5 (and K=7)** ≈ 0.9643. Beyond K=7, the accuracy **plateaus or decreases** because the model begins to **average over too many neighbors**, blurring class boundaries. Hence **K=5** is selected as the optimal hyperparameter, providing the best bias-variance trade-off.

> **Valuation Key for Part (b):** [Cross-validation loop: 2 Marks] [Plot with axes labeled: 1 Mark] [Optimal K identification: 1 Mark] [Justification with bias-variance: 2 Marks] [Numerical values present: 1 Mark]

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes that Cost Marks:**
>
> 1. **Forgetting to standardize features** before applying KNN — leads to **−2 Marks** deduction in KTU lab records. Always apply `StandardScaler.fit_transform()` on **train** and `.transform()` on **test**.
>
> 2. **Not specifying K value** in code or answer — examiner expects an explicit `n_neighbors=5` (or your chosen value). Mentioning only "we use KNN" is **insufficient**.
>
> 3. **Confusing training and testing data transformation** — applying `fit_transform()` on test data causes **data leakage** and is a serious error.
>
> 4. **Not discussing the bias-variance trade-off** when asked "why this K?" — always tie the answer to **overfitting (K too small)** vs **underfitting (K too large)**.
>
> 5. **Skipping the tie-breaking rule** in majority voting — for multi-class with $C \geq 3$, ties are common. State that you use **inverse-distance weighting** or **odd K** to break ties.
>
> 6. **Reporting only accuracy** for multi-class — KTU examiners expect a **confusion matrix** and **per-class precision/recall/F1** (use `classification_report`).
>
> 7. **Drawing the decision boundary incorrectly** — Setosa class is **linearly separable**; the overlap is **only between Versicolor and Virginica**. Drawing straight-line boundaries will lose marks.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **🔑 High-Yield Revision Checklist for KTU Module 8 — KNN Multi-Class Classification**

- **Algorithm Type:** KNN is a **non-parametric, instance-based (lazy)** supervised learning algorithm.
- **Core Idea:** Classify a query point by the **majority class** of its **K nearest training samples** in feature space.
- **Multi-Class Output:** $\hat{y} \in \{1, 2, \dots, C\}$ where $C \geq 3$; aggregation is by **majority vote** or **inverse-distance weighted vote**.
- **Distance Metrics (must memorize):**
  * Euclidean: $D = \sqrt{\sum (x_j - y_j)^2}$
  * Manhattan: $D = \sum \vert x_j - y_j \vert$
  * Minkowski: $D = \left(\sum \vert x_j - y_j \vert^p\right)^{1/p}$
- **Mandatory Preprocessing:** **Z-score standardization** is required because KNN is distance-based; unscaled features bias the result.
- **K-Selection Rules:**
  * Use **odd K** to avoid ties in binary; use **K not divisible by C** for multi-class.
  * Use **5-fold or 10-fold cross-validation** to pick the optimal K.
  * Heuristic: $K \approx \sqrt{N}$ where $N$ is training size.
- **Bias-Variance Trade-off:**
  * $K = 1$ → high variance, low bias (overfits)
  * $K \to N$ → high bias, low variance (underfits)
  * $K \in \{3, 5, 7, 9\}$ → balanced (sweet spot)
- **Voting Variants:**
  * **Unweighted (majority):** All K votes are equal.
  * **Inverse-distance weighted:** Closer neighbors have higher vote weight: $w_i = 1/(d_i + \epsilon)$.
- **Algorithmic Complexity:**
  * **Training:** $O(1)$ (just stores data — lazy!)
  * **Inference (per query):** $O(N \cdot d)$ where $N$ = training size, $d$ = feature dimensions.
  * **Space:** $O(N \cdot d)$ to store the training set.
- **Strengths:** Simple, no training phase, naturally handles multi-class, non-linear boundaries, no assumptions on data distribution.
- **Weaknesses:** Slow at inference for large $N$, sensitive to **irrelevant features** and **feature scaling**, suffers from the **curse of dimensionality**.
- **Decision Boundary:** Forms **Voronoi-like piecewise regions**; smoothness controlled by K.
- **Standard Datasets for KTU:** **Iris** (3-class), **Wine** (3-class), **Digits** (10-class).
- **Key sklearn Classes:**
  * `sklearn.neighbors.KNeighborsClassifier` — for classification
  * `sklearn.preprocessing.StandardScaler` — for standardization
  * `sklearn.model_selection.cross_val_score` — for K-selection
  * `sklearn.metrics.classification_report` — for multi-class evaluation
- **Evaluation Metrics for Multi-Class (must use all 3 in lab record):**
  * **Accuracy:** Overall fraction of correct predictions.
  * **Confusion Matrix:** $C \times C$ matrix showing per-class true vs predicted counts.
  * **Precision, Recall, F1-score** (per class and macro/micro averages).
- **Viva Question Pattern:** *"Why does KNN require feature standardization?"* → Because it is a **distance-based** algorithm; features with larger scales dominate the distance calculation.
- **Viva Question Pattern:** *"What happens when K=1?"* → The model **overfits** the training data; decision boundary follows every training point exactly (Voronoi tessellation); **zero training error** but **high test error**.
- **Viva Question Pattern:** *"How do you choose K in practice?"* → Try odd K values in $\{1, 3, 5, 7, \dots, \sqrt{N}\}$, use **cross-validation**, and pick the K with the **highest validation accuracy** (balanced bias-variance).
<!-- SECTION_5_END -->
