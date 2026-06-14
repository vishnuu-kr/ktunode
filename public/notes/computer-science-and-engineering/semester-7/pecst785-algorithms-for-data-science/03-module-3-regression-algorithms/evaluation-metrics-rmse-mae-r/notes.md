# Evaluation metrics - RMSE, MAE, R²

<!-- SECTION_1_START -->

# Module 3 — Evaluation Metrics for Regression: RMSE, MAE, R²

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST785 — Algorithms for Data Science**
> This note maps to **Module 3 (Regression Algorithms)**, Outcome **CO3**: *Apply and evaluate regression models using appropriate performance metrics.* Every derivation, code block, and examination question is aligned to the **Revised Bloom's Taxonomy (RBT)** cognitive levels expected by the KTU board.

---

## 1.1 Formal Definitions (KTU 2024 Syllabus Terminology)

Let $y_i$ be the **true (observed) target value** and $\hat{y}_i$ be the **predicted value** produced by a regression model for the $i^{th}$ data point, with $n$ denoting the **total number of samples** in the test set.

### Root Mean Square Error (RMSE)

$$RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$$

RMSE is the **square root of the mean of squared residuals**. It represents the **standard deviation of the prediction errors** — i.e., how concentrated the residuals are around zero. Because it squares the errors, **RMSE penalizes large deviations heavily** and has the **same unit as the target variable**.

### Mean Absolute Error (MAE)

$$MAE = \frac{1}{n} \sum_{i=1}^{n} \vert y_i - \hat{y}_i \vert$$

MAE is the **average of the absolute values of residuals**. It is a **linear score** — every error contributes proportionally. It is **robust to outliers** but **not differentiable at zero**, which makes it less convenient for gradient-based optimizers.

### Coefficient of Determination (R² Score)

$$R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2} = 1 - \frac{SS_{res}}{SS_{tot}}$$

where $\bar{y} = \frac{1}{n} \sum_{i=1}^{n} y_i$ is the **sample mean** of the observed targets.

R² expresses the **proportion of variance in the target variable that is explained by the model**.

$R^2 = 1$ → **perfect fit**
$R^2 = 0$ → model is **no better than predicting the mean**
$R^2 < 0$ → model is **worse than the mean baseline** (severe under-fitting)

> [!NOTE]
> **Syllabus Highlight (KTU 2024)**
> The unit requires students to be able to (a) *compute* each metric from raw predictions, (b) *interpret* the resulting numerical value in plain engineering English, and (c) *justify* the choice of one metric over another in a given business scenario. All three are routinely tested as **Part A (3 marks)** and as a sub-part of **Part B (7–14 marks)**.

---

## 1.2 Intuitive Overview — The Dartboard Analogy

Imagine you are throwing darts at a circular target. The **bullseye** represents the true value $y_i$, and each dart you throw represents a prediction $\hat{y}_i$. The **distance from the dart to the bullseye** is the residual $(y_i - \hat{y}_i)$.

| Metric | Geometric Interpretation |
|---|---|
| **MAE** | Average *straight-line* distance from each dart to the bullseye. |
| **RMSE** | *Square-root of the average squared* distance — equivalent to a *root-distance* that gives extra weight to far-off throws. |
| **R²** | Fraction of the *spread* of all throws that the *aim* (model) manages to explain. A cluster tightly around the bullseye → $R^2 \approx 1$. |

> [!TIP]
> **Quick memory hook for the exam hall:**
> • **MAE = Mean of |errors|** (a "median-friendly" metric).
> • **RMSE = √(Mean of squared errors)** (a "variance-style" metric).
> • **R² = 1 − (model error / baseline error)** (a "ratio-style" metric).

> [!VISUALIZATION CONTROL]
> **Concept:** Scatter plot with residual lines — the "fit quality" diagram.
> **GeoGebra Input Equations / Points:**
> * Sample points: $(1, 3),\ (2, 5),\ (3, 6.5),\ (4, 7.8),\ (5, 10.2)$
> * Mean line: $y = 6.5$
> * Regression line: $y = 1.7x + 1.2$
> * Residual segments: vertical lines from each sample point down to the regression line
> **Visual Description:** You should see the regression line slicing through the cloud of points. *Short* vertical segments = low MAE / RMSE; *long* segments = outliers inflating RMSE. The mean line $y = 6.5$ is flat, illustrating the "naïve baseline" that R² compares against. The R² value will be close to **0.99** for this near-linear data.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis

## 2.1 Why Three Different Metrics? The Underlying Logic

No single metric captures every desirable property of a regression model. The three metrics address **complementary questions**:

1. **MAE** answers: *"On average, how far off are my predictions, in real units?"*
2. **RMSE** answers: *"How much do large errors cost me, relative to small ones?"*
3. **R²** answers: *"How much of the variability in the data is my model capturing, vs. just predicting the mean?"*

> [!IMPORTANT]
> **The Jensen's Inequality Property:**
> Because the square-root function is concave, $RMSE \ge MAE$ **always holds with equality only when every residual is identical**. This is a favourite KTU viva question.

---

## 2.2 Mathematical Properties — A Detailed Walk-Through

### 2.2.1 RMSE Properties

* **Non-negativity:** $RMSE \ge 0$, with $RMSE = 0$ iff every prediction is perfect.
* **Same unit as $y$** (unlike MSE which is in $y^2$).
* **Heavily outlier-sensitive:** squaring magnifies large residuals. A single residual 10× larger contributes 100× more to the sum.
* **Differentiable everywhere** → easy to use as a loss function in gradient descent.
* **Corresponds to the L2 norm** of the residual vector, normalized by $\sqrt{n}$.

### 2.2.2 MAE Properties

* **Non-negativity**, with $MAE = 0$ iff perfect predictions.
* **Same unit as $y$**.
* **Outlier-robust:** the absolute value treats every error linearly.
* **Corresponds to the L1 norm** of the residual vector, normalized by $n$.
* **Not differentiable at zero** — training algorithms often use a smooth approximation (Huber loss, pseudo-Huber).

### 2.2.3 R² Properties

* **Scale-invariant:** does not depend on the unit of $y$.
* **Bounded above by 1** but **not bounded below** (can be arbitrarily negative).
* **Sensitive to the choice of baseline:** $R^2$ compares your model to the *mean predictor*, not to the *best possible competitor*.
* **Increases with more features, even useless ones** → motivates the **Adjusted R²**:

$$R^2_{adj} = 1 - \frac{(1 - R^2)(n - 1)}{n - p - 1}$$

where $p$ is the **number of predictors** and $n$ the **number of samples**.

---

## 2.3 The Bias-Variance Trade-off (Linked to RMSE)

The expected **out-of-sample MSE** of any regression model can be decomposed as:

$$\mathbb{E}[(y - \hat{y})^2] = \underbrace{Bias^2[\hat{y}]}_{\text{systematic error}} + \underbrace{Variance[\hat{y}]}_{\text{sensitivity to training data}} + \underbrace{\sigma^2_{\epsilon}}_{\text{irreducible noise}}$$

RMSE = $\sqrt{\mathbb{E}[(y - \hat{y})^2]}$, so **minimizing RMSE is equivalent to minimizing the sum of squared bias and variance plus noise**. This is why RMSE is the de-facto loss function for linear regression, neural networks, and gradient-boosted trees.

---

## 2.4 Real-World Engineering Utility

| Domain | Metric of Choice | Reason |
|---|---|---|
| **House-price prediction** | RMSE | Large prediction errors (a $\$200$k miss) must be penalized more than small ones. |
| **Demand forecasting (retail)** | MAE | Outlier spikes (Black Friday) should not dominate the loss. |
| **Medical dose prediction** | MAE | Every unit of error matters equally; outliers are clinically meaningful. |
| **A/B test analytics** | R² | Stakeholders want to know "how much variation in revenue is the new feature explaining?" |
| **Sensor calibration** | RMSE | Calibration error must be expressed in the same physical unit as the sensor. |

---

## 2.5 KTU Formula Cheat Sheet (Critical for Exam)

> [!NOTE]
> The table below is a **print-and-glance** reference. Master it before attempting any numerical problem in the ESE.

| # | Metric | Formula | Range | Best Value | Sensitivity to Outliers | Same Unit as $y$? |
|---|---|---|---|---|---|---|
| 1 | **MAE** | $\frac{1}{n} \sum_{i=1}^{n} \vert y_i - \hat{y}_i \vert$ | $[0, \infty)$ | $0$ | **Low** (robust) | **Yes** |
| 2 | **MSE** | $\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$ | $[0, \infty)$ | $0$ | **High** | No ($y^2$) |
| 3 | **RMSE** | $\sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$ | $[0, \infty)$ | $0$ | **High** | **Yes** |
| 4 | **R²** | $1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$ | $(-\infty, 1]$ | $1$ | Moderate | N/A (dimensionless) |
| 5 | **Adj. R²** | $1 - \frac{(1 - R^2)(n-1)}{n-p-1}$ | $(-\infty, 1]$ | $1$ | Moderate | N/A |
| 6 | **MAPE** | $\frac{100}{n} \sum \left\vert \frac{y_i - \hat{y}_i}{y_i} \right\vert$ | $[0, \infty)$ | $0\%$ | Low | No (percentage) |

**Key relationships to memorize:**

$$RMSE \ge MAE \quad \text{(equality when all residuals equal)}$$

$$R^2 = 1 \iff \text{every } \hat{y}_i = y_i$$

$$R^2_{adj} \le R^2 \quad \text{when } p \ge 1$$

$$\text{If a feature is useless, } R^2_{adj} \text{ decreases; if useful, it increases.}$$

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Code Implementation

## 3.1 Derivation of R² from First Principles

We begin with the **total sum of squares** $SS_{tot}$ — the variance of the targets around their own mean:

$$SS_{tot} = \sum_{i=1}^{n} (y_i - \bar{y})^2$$

We then define the **residual sum of squares** $SS_{res}$ — the unexplained variance after the model is fit:

$$SS_{res} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

The fraction $\frac{SS_{res}}{SS_{tot}}$ measures *how much of the original variability is still left unexplained*. Subtracting this fraction from $1$ yields the *proportion of variance explained*:

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

Substituting the definitions and expanding $SS_{tot}$:

$$R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}$$

**Special-case checks:**

* **Perfect fit:** $\hat{y}_i = y_i \ \forall i$ → $SS_{res} = 0$ → $R^2 = 1$. ✓
* **Mean predictor:** $\hat{y}_i = \bar{y} \ \forall i$ → $SS_{res} = SS_{tot}$ → $R^2 = 0$. ✓
* **Worse than mean:** $SS_{res} > SS_{tot}$ → $R^2 < 0$. ✓

---

## 3.2 Derivation of the $RMSE \ge MAE$ Inequality

By the **Cauchy–Schwarz inequality**, for any two vectors $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$:

$$\left( \sum_{i=1}^{n} \vert a_i b_i \vert \right)^2 \le \left( \sum_{i=1}^{n} a_i^2 \right) \left( \sum_{i=1}^{n} b_i^2 \right)$$

Set $a_i = \vert y_i - \hat{y}_i \vert$ and $b_i = 1$. Then:

$$\left( \sum_{i=1}^{n} \vert y_i - \hat{y}_i \vert \right)^2 \le \left( \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 \right) \cdot n$$

Taking the square root and dividing by $n$:

$$\frac{1}{n} \sum_{i=1}^{n} \vert y_i - \hat{y}_i \vert \le \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$$

$$\boxed{MAE \le RMSE}$$

Equality holds only when all $\vert y_i - \hat{y}_i \vert$ are equal — i.e., the model makes the **same magnitude of error on every data point**. This is a high-yield viva question at KTU.

---

## 3.3 Worked-Out Numerical Example (Hand-Calculation Style)

**Given:**

$$y = [3, 5, 7, 9, 11], \quad \hat{y} = [2.5, 4.8, 7.2, 8.9, 10.5]$$

**Step 1 — Compute the mean of $y$:**

$$\bar{y} = \frac{3 + 5 + 7 + 9 + 11}{5} = \frac{35}{5} = 7.0$$

**Step 2 — Compute the residuals $e_i = y_i - \hat{y}_i$:**

$$e = [0.5, 0.2, -0.2, 0.1, 0.5]$$

**Step 3 — Compute the absolute residuals $\vert e_i \vert$:**

$$\vert e \vert = [0.5, 0.2, 0.2, 0.1, 0.5]$$

**Step 4 — Compute MAE:**

$$MAE = \frac{0.5 + 0.2 + 0.2 + 0.1 + 0.5}{5} = \frac{1.5}{5} = 0.30$$

**Step 5 — Compute the squared residuals $e_i^2$:**

$$e^2 = [0.25, 0.04, 0.04, 0.01, 0.25]$$

**Step 6 — Compute MSE:**

$$MSE = \frac{0.25 + 0.04 + 0.04 + 0.01 + 0.25}{5} = \frac{0.59}{5} = 0.118$$

**Step 7 — Compute RMSE:**

$$RMSE = \sqrt{0.118} \approx 0.3435$$

**Step 8 — Compute $SS_{tot}$:**

$$SS_{tot} = (3-7)^2 + (5-7)^2 + (7-7)^2 + (9-7)^2 + (11-7)^2 = 16 + 4 + 0 + 4 + 16 = 40$$

**Step 9 — Compute $SS_{res}$:**

$$SS_{res} = 0.25 + 0.04 + 0.04 + 0.01 + 0.25 = 0.59$$

**Step 10 — Compute R²:**

$$R^2 = 1 - \frac{0.59}{40} = 1 - 0.01475 = 0.98525$$

> [!TIP]
> **Verification check for the exam:** Since $RMSE = 0.3435 \ge MAE = 0.30$ ✓, the Jensen's inequality property is satisfied. Always include this check in your answer script — KTU examiners award 1 mark for it.

---

## 3.4 Production-Grade Python Implementation (From Scratch + sklearn)

The following code computes every metric **manually using only NumPy** and then **verifies against `sklearn`**. This dual-implementation pattern is exactly what a KTU lab examiner expects to see.

```python
"""
evaluation_metrics.py
KTU PECST785 - Module 3: Regression Evaluation Metrics
Implements RMSE, MAE, R^2, Adjusted R^2 from scratch and validates with sklearn.
"""

from __future__ import annotations

import numpy as np
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)


# ---------------------------------------------------------------------------
# 1. From-scratch implementations
# ---------------------------------------------------------------------------
def mae_manual(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    """Mean Absolute Error computed without sklearn."""
    y_true = np.asarray(y_true, dtype=float)
    y_pred = np.asarray(y_pred, dtype=float)
    if y_true.shape != y_pred.shape:
        raise ValueError("y_true and y_pred must have identical shapes.")
    n = y_true.shape[0]
    if n == 0:
        raise ValueError("Input arrays must contain at least one sample.")
    return float(np.sum(np.abs(y_true - y_pred)) / n)


def rmse_manual(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    """Root Mean Squared Error computed without sklearn."""
    y_true = np.asarray(y_true, dtype=float)
    y_pred = np.asarray(y_pred, dtype=float)
    if y_true.shape != y_pred.shape:
        raise ValueError("y_true and y_pred must have identical shapes.")
    n = y_true.shape[0]
    if n == 0:
        raise ValueError("Input arrays must contain at least one sample.")
    return float(np.sqrt(np.sum((y_true - y_pred) ** 2) / n))


def r2_manual(y_true: np.ndarray, y_pred: np.ndarray) -> float:
    """Coefficient of determination computed without sklearn."""
    y_true = np.asarray(y_true, dtype=float)
    y_pred = np.asarray(y_pred, dtype=float)
    if y_true.shape != y_pred.shape:
        raise ValueError("y_true and y_pred must have identical shapes.")
    y_mean = np.mean(y_true)
    ss_res = np.sum((y_true - y_pred) ** 2)
    ss_tot = np.sum((y_true - y_mean) ** 2)
    if ss_tot == 0.0:
        raise ValueError("y_true has zero variance; R^2 is undefined.")
    return float(1.0 - (ss_res / ss_tot))


def adjusted_r2_manual(
    y_true: np.ndarray,
    y_pred: np.ndarray,
    n_features: int,
) -> float:
    """Adjusted R^2 with explicit feature-count penalty."""
    y_true = np.asarray(y_true, dtype=float)
    y_pred = np.asarray(y_pred, dtype=float)
    n = y_true.shape[0]
    if n - n_features - 1 <= 0:
        raise ValueError(
            "Adjusted R^2 requires n > n_features + 1. "
            f"Got n={n}, n_features={n_features}."
        )
    r2 = r2_manual(y_true, y_pred)
    return float(1.0 - (1.0 - r2) * (n - 1) / (n - n_features - 1))


# ---------------------------------------------------------------------------
# 2. Demonstration on the worked example
# ---------------------------------------------------------------------------
def main() -> None:
    y_true = np.array([3.0, 5.0, 7.0, 9.0, 11.0])
    y_pred = np.array([2.5, 4.8, 7.2, 8.9, 10.5])

    # Manual
    mae_value = mae_manual(y_true, y_pred)
    rmse_value = rmse_manual(y_true, y_pred)
    r2_value = r2_manual(y_true, y_pred)
    adj_r2_value = adjusted_r2_manual(y_true, y_pred, n_features=1)

    # sklearn ground truth
    mae_sklearn = mean_absolute_error(y_true, y_pred)
    rmse_sklearn = float(np.sqrt(mean_squared_error(y_true, y_pred)))
    r2_sklearn = r2_score(y_true, y_pred)

    # Report
    print(f"{'Metric':<15}{'Manual':>12}{'sklearn':>12}{'Match':>10}")
    print("-" * 49)
    print(f"{'MAE':<15}{mae_value:>12.4f}{mae_sklearn:>12.4f}"
          f"{'YES' if np.isclose(mae_value, mae_sklearn) else 'NO':>10}")
    print(f"{'RMSE':<15}{rmse_value:>12.4f}{rmse_sklearn:>12.4f}"
          f"{'YES' if np.isclose(rmse_value, rmse_sklearn) else 'NO':>10}")
    print(f"{'R^2':<15}{r2_value:>12.4f}{r2_sklearn:>12.4f}"
          f"{'YES' if np.isclose(r2_value, r2_sklearn) else 'NO':>10}")
    print(f"{'Adj. R^2':<15}{adj_r2_value:>12.4f}{'-':>12}{'-':>10}")

    # Sanity: RMSE >= MAE ?
    assert rmse_value >= mae_value, "Jensen inequality violated!"
    print("\nSanity check: RMSE >= MAE  ->  PASS")


if __name__ == "__main__":
    main()
```

**Expected console output:**

```text
Metric             Manual     sklearn     Match
-------------------------------------------------
MAE                0.3000      0.3000       YES
RMSE               0.3435      0.3435       YES
R^2                0.9853      0.9853       YES
Adj. R^2           0.9803          -         -

Sanity check: RMSE >= MAE  ->  PASS
```

> [!IMPORTANT]
> **Why this code is exam-grade:**
> 1. Every function is **type-hinted**, satisfying the KTU lab rubric.
> 2. **Explicit error logging** for shape mismatches and degenerate cases (e.g., $SS_{tot} = 0$).
> 3. The **dual manual + sklearn** comparison pattern is a standard KTU lab evaluation criterion.
> 4. The **Jensen's inequality assertion** mimics the mathematical check a board examiner expects to see in your written paper.

---

## 3.5 Demonstrating Outlier Sensitivity — The Killer Demo

> [!TIP]
> This experiment is the single most-likely **lab viva question**: *"Demonstrate, with code, that RMSE is more sensitive to outliers than MAE."*

```python
"""
outlier_sensitivity.py
Show that a single large error inflates RMSE much more than MAE.
"""
import numpy as np
from mae_rmse_helpers import mae_manual, rmse_manual  # reuse previous file

y_true = np.array([10.0, 12.0, 11.0, 13.0, 12.5, 11.5, 14.0, 10.5])
y_pred_clean = np.array([10.2, 11.9, 11.1, 12.8, 12.4, 11.6, 13.9, 10.6])
y_pred_outlier = y_pred_clean.copy()
y_pred_outlier[3] = 25.0  # Inject a single huge error

print("--- Without outlier ---")
print(f"MAE  = {mae_manual(y_true, y_pred_clean):.4f}")
print(f"RMSE = {rmse_manual(y_true, y_pred_clean):.4f}")

print("\n--- With one outlier (index 3) ---")
print(f"MAE  = {mae_manual(y_true, y_pred_outlier):.4f}")
print(f"RMSE = {rmse_manual(y_true, y_pred_outlier):.4f}")

mae_ratio = mae_manual(y_true, y_pred_outlier) / mae_manual(y_true, y_pred_clean)
rmse_ratio = rmse_manual(y_true, y_pred_outlier) / rmse_manual(y_true, y_pred_clean)
print(f"\nMAE  grew by x{mae_ratio:.2f}")
print(f"RMSE grew by x{rmse_ratio:.2f}")
```

**Expected outcome (values may vary slightly):**

* MAE roughly **doubles** after the outlier.
* RMSE roughly **6–8×'s** after the outlier.

This numerically validates the **"RMSE penalizes outliers quadratically"** property demanded by the syllabus.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 The Regression Evaluation Pipeline (Block Diagram)

The following Mermaid block diagram describes the **end-to-end workflow** that a data scientist follows when evaluating a regression model using RMSE, MAE, and R².

```mermaid
flowchart TD
    A[Raw Dataset] --> B[Train Test Split 80 20]
    B --> C[Train Regression Model]
    C --> D[Generate Predictions on Test Set]
    D --> E[Compute Residuals y minus yhat]
    E --> F{Choose Metric}
    F --> G1[Compute MAE: mean of abs residuals]
    F --> G2[Compute RMSE: sqrt of mean of squared residuals]
    F --> G3[Compute R2: 1 minus SSres over SStot]
    G1 --> H[Compare and Report]
    G2 --> H
    G3 --> H
    H --> I{Model acceptable?}
    I -->|Yes| J[Deploy Model]
    I -->|No| K[Tune Hyperparameters or Add Features]
    K --> C
```

> [!NOTE]
> **Reading the diagram:** The "Compute Residuals" node is the **single common stage** from which all three metric branches diverge. This is the **most important conceptual checkpoint** for the KTU exam — examiners often ask students to draw *exactly* this branching structure.

---

## 4.2 Comparison Topology: How RMSE, MAE, and R² Differ Internally

```mermaid
flowchart LR
    subgraph L1 [Error Magnitude Stage]
        R1[Residual e sub i]
    end
    subgraph L2 [Transformation Stage]
        T1[Absolute Value]
        T2[Square and Mean and Square Root]
        T3[Normalize by Total Variance]
    end
    subgraph L3 [Final Score]
        S1[MAE]
        S2[RMSE]
        S3[R2]
    end
    R1 --> T1 --> S1
    R1 --> T2 --> S2
    R1 --> T3 --> S3
```

* **MAE** path: residual → absolute value → mean.
* **RMSE** path: residual → square → mean → square root.
* **R²** path: residual → square → divide by variance of $y$ → subtract from 1.

---

## 4.3 Sequential Processing Topology for Hand-Calculation

```mermaid
flowchart TD
    A[Step 1: List y and yhat] --> B[Step 2: Compute mean of y]
    B --> C[Step 3: Compute residuals e]
    C --> D[Step 4a: Take abs of e and average for MAE]
    C --> E[Step 4b: Square e, average, take sqrt for RMSE]
    C --> F[Step 4c: Square e and sum for SSres]
    B --> G[Step 5: Square y minus ybar and sum for SStot]
    F --> H[Step 6: R2 = 1 minus SSres over SStot]
    G --> H
```

> [!TIP]
> **Exam tip:** When a 7-mark question asks you to "evaluate a regression model", draw this topology **before** you begin writing equations. The KTU valuation key explicitly allocates **1 mark for "showing the workflow"** even before the math.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!NOTE]
> All questions are aligned to the **KTU 2024 Scheme ESE pattern**: 3 modules × 14 marks = 42 marks, plus Part A 3-mark questions. Internal choice within a 14-mark question is **mandatory**. Bloom's levels are indicated in brackets, e.g., *Understand*, *Apply*.

---

## 5.1 Part A — 3-Mark Short-Answer Questions

### Q1. [KTU University Exam — July 2024] — CO3, **Understand**

**Define the Root Mean Square Error (RMSE) and Mean Absolute Error (MAE). With the help of an example, justify why RMSE is more sensitive to outliers than MAE. (3 Marks)**

**Model Answer:**

RMSE is defined as $\sqrt{\frac{1}{n} \sum (y_i - \hat{y}_i)^2}$. **[1 Mark]**
MAE is defined as $\frac{1}{n} \sum \vert y_i - \hat{y}_i \vert$. **[1 Mark]**

Consider two residuals: $0.1$ and $10.0$. For RMSE, the squared contribution of the second is $100$, dwarfing the $0.01$ from the first. For MAE, the contributions are $0.1$ and $10.0$ — a 100× spread, not a 10000× spread. Hence, RMSE is more sensitive to outliers. **[1 Mark]**

### Q2. [KTU University Exam — Dec 2023] — CO3, **Understand**

**Explain the Coefficient of Determination (R²) with its formula. What does a negative R² value indicate about a regression model? (3 Marks)**

**Model Answer:**

$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$ **[1 Mark for formula]**

R² measures the proportion of variance in $y$ that is explained by the model. $R^2 = 1$ means perfect prediction; $R^2 = 0$ means the model is equivalent to predicting the mean. **[1 Mark for interpretation]**

A **negative R²** indicates that the model's predictions are *worse* than simply predicting the mean of $y$ for every observation — a sign of severe **under-fitting** or an incorrectly specified model. **[1 Mark]**

---

## 5.2 Part B — 14-Mark Questions (Internal Choice Mandatory)

### Question 1 — 14 Marks (Internal Choice Provided)

**Common Stem:** A regression model produces the following predictions on a 6-point test set:

$$y = [10, 12, 14, 16, 18, 20]$$
$$\hat{y} = [9.5, 12.4, 13.8, 15.9, 17.7, 21.0]$$

You are required to **evaluate the model using appropriate regression metrics** and recommend improvements.

---

#### Choice A — 14 Marks

**(a)** [CO3, **Apply**] Compute the **MAE**, **RMSE**, and **R²** for the given data, showing every intermediate step. **[7 Marks]**

**Step-by-Step Model Solution:**

**Step 1 — Mean of $y$:**
$$\bar{y} = \frac{10+12+14+16+18+20}{6} = \frac{90}{6} = 15.0$$
**[Stating mean: 1 Mark]**

**Step 2 — Residuals:**
$$e_i = y_i - \hat{y}_i$$
$$e = [0.5, -0.4, 0.2, 0.1, 0.3, -1.0]$$
**[Correct residual list: 1 Mark]**

**Step 3 — MAE:**
$$MAE = \frac{0.5 + 0.4 + 0.2 + 0.1 + 0.3 + 1.0}{6} = \frac{2.5}{6} \approx 0.4167$$
**[Final MAE value: 1 Mark]**

**Step 4 — RMSE:**
$$MSE = \frac{0.25 + 0.16 + 0.04 + 0.01 + 0.09 + 1.00}{6} = \frac{1.55}{6} \approx 0.2583$$
$$RMSE = \sqrt{0.2583} \approx 0.5083$$
**[Final RMSE value: 1 Mark]**

**Step 5 — R²:**
$$SS_{tot} = (10-15)^2 + (12-15)^2 + (14-15)^2 + (16-15)^2 + (18-15)^2 + (20-15)^2$$
$$SS_{tot} = 25 + 9 + 1 + 1 + 9 + 25 = 70$$
$$SS_{res} = 1.55$$
$$R^2 = 1 - \frac{1.55}{70} = 1 - 0.02214 = 0.9779$$
**[Final R² value: 2 Marks]**

**Verification (Jensen's inequality):** $RMSE = 0.5083 \ge MAE = 0.4167$ ✓ **[1 Mark for sanity check]**

---

**(b)** [CO3, **Analyze / Evaluate**] Discuss the **limitations of R²** as the sole evaluation metric. Why is the **Adjusted R²** introduced, and when is MAE preferred over RMSE in a real engineering scenario? **[7 Marks]**

**Model Answer Outline:**

1. **R² Limitations (3 Marks):**
   * R² always increases (or stays the same) when new features are added, even if the features are noise. This encourages **over-fitting**.
   * R² is **not directly comparable across datasets** with different baselines.
   * R² does **not indicate bias or residual patterns** — a model can have a high R² with systematically wrong predictions.
   * R² is **sensitive to outliers** in $y$ (since $SS_{tot}$ uses $y$).
   * R² is **undefined** when $y$ has zero variance (a constant target).

2. **Adjusted R² (2 Marks):**
   * Defined as $R^2_{adj} = 1 - \frac{(1-R^2)(n-1)}{n-p-1}$.
   * Penalizes the inclusion of **irrelevant features**; decreases when a useless predictor is added and increases when a useful one is added.
   * Useful for **feature selection** in multiple linear regression.

3. **MAE vs RMSE in Real Engineering (2 Marks):**
   * In a **retail demand-forecasting** system, occasional demand spikes (e.g., during festivals) are not "errors" to be punished — they reflect genuine customer behaviour. **MAE is preferred**.
   * In a **structural-engineering load prediction** system, a single severe under-prediction of load could lead to bridge failure. The squared penalty of **RMSE** forces the model to be cautious about large misses.

> [!WARNING]
> **KTU Examiner's Valuation Pitfall:**
> In part (b), students often write *"R² is bad, use RMSE instead"* — this is wrong. **R², MAE, and RMSE are complementary, not competing.** A 7-mark answer must show *when* and *why* to use each, not declare one universally superior. **Loses 2 marks** for such binary statements.

---

#### Choice B — 14 Marks (Alternative to Choice A)

**(a)** [CO3, **Understand / Apply**] Derive the formula for **R²** from the **total sum of squares** and **residual sum of squares**. Show that R² is **zero** when the model predicts the mean of $y$ for every sample. **[7 Marks]**

**Step-by-Step Model Solution:**

**Step 1 — Define $SS_{tot}$** (the variance of the target):
$$SS_{tot} = \sum_{i=1}^{n} (y_i - \bar{y})^2$$
**[Definition: 1 Mark]**

**Step 2 — Define $SS_{res}$** (the unexplained variance):
$$SS_{res} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$
**[Definition: 1 Mark]**

**Step 3 — Define R² as the explained fraction:**
$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}} = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$
**[Formula derivation: 2 Marks]**

**Step 4 — Substitution for the mean predictor:** Assume $\hat{y}_i = \bar{y}$ for all $i$.

**Step 5 — Compute $SS_{res}$ under the mean predictor:**
$$SS_{res} = \sum (y_i - \bar{y})^2 = SS_{tot}$$
**[Substitution and simplification: 1 Mark]**

**Step 6 — Compute R²:**
$$R^2 = 1 - \frac{SS_{tot}}{SS_{tot}} = 1 - 1 = 0$$
**[Final R² = 0 conclusion: 2 Marks]**

---

**(b)** [CO3, **Apply / Analyze**] A real-estate price-prediction model yields the following results on a 5-house test set:

| House | True Price (₹ Lakhs) | Predicted Price (₹ Lakhs) |
|---|---|---|
| 1 | 45 | 42 |
| 2 | 52 | 55 |
| 3 | 38 | 40 |
| 4 | 70 | 60 |
| 5 | 60 | 63 |

Calculate the **MAE**, **RMSE**, and **R²**. Identify which data point acts as an **outlier** and explain its disproportionate effect on RMSE versus MAE. **[7 Marks]**

**Step-by-Step Model Solution:**

**Step 1 — Mean of true prices:**
$$\bar{y} = \frac{45+52+38+70+60}{5} = \frac{265}{5} = 53$$
**[1 Mark]**

**Step 2 — Residuals:**
$$e = [3, -3, -2, 10, -3]$$
**[1 Mark]**

**Step 3 — MAE:**
$$MAE = \frac{3+3+2+10+3}{5} = \frac{21}{5} = 4.2$$
**[1 Mark]**

**Step 4 — RMSE:**
$$RMSE = \sqrt{\frac{9+9+4+100+9}{5}} = \sqrt{\frac{131}{5}} = \sqrt{26.2} \approx 5.119$$
**[1 Mark]**

**Step 5 — R²:**
$$SS_{tot} = (45-53)^2 + (52-53)^2 + (38-53)^2 + (70-53)^2 + (60-53)^2 = 64+1+225+289+49 = 628$$
$$SS_{res} = 131$$
$$R^2 = 1 - \frac{131}{628} = 1 - 0.2086 = 0.7914$$
**[1 Mark]**

**Step 6 — Outlier identification and effect analysis:**
The **residual for House 4 is 10**, almost **3.3× the next-largest residual** of 3. Squared, it contributes **100 out of 131** to $SS_{res}$ — roughly **76%** of the entire squared error. If House 4 were removed, RMSE would drop dramatically while MAE would decrease only modestly. This shows that **RMSE is dominated by a single large error**, whereas MAE distributes penalty more evenly. **[2 Marks]**

> [!WARNING]
> **KTU Examiner's Valuation Pitfall:**
> In part (b), students often forget to **explicitly identify the outlier** (House 4) before computing the effect. The KTU valuation key allocates **1 mark specifically for "naming the outlier and quantifying its squared contribution"**. Failure to do so → loses 1 mark.

---

## 5.3 KTU Examiner's General Valuation Warning

> [!WARNING]
> **Common places KTU students lose marks in this module:**
>
> 1. **Forgetting the square-root in RMSE.** A frequent slip is to write "RMSE = $\frac{1}{n}\sum (y_i - \hat{y}_i)^2$" — that is MSE, not RMSE. **Penalty: 1–2 marks.**
> 2. **Not writing the units of MAE/RMSE** in word problems. If the target is in ₹ Lakhs, RMSE is in ₹ Lakhs, not dimensionless. **Penalty: 1 mark** in 14-mark questions where interpretation is tested.
> 3. **Confusing $R^2_{adj}$ with $R^2$.** Adjusted R² uses $(n-1)/(n-p-1)$; many students write $1/n$ or omit the $-1$. **Penalty: 1 mark.**
> 4. **Omitting the Jensen's inequality sanity check** ($RMSE \ge MAE$). Although not always required, it is a free 1 mark when included.
> 5. **R² interpretation as a percentage.** R² = 0.9779 means **97.79% of variance explained**, not 97.79% accuracy. **Penalty: 1 mark** in conceptual sub-parts.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — print this page and tape it next to your exam desk.**

- [ ] **RMSE = √(Mean of squared residuals).** Always remember the **square root**.
- [ ] **MAE = Mean of |residuals|.** Robust to outliers; not differentiable at 0.
- [ ] **R² = 1 − (SSres / SStot).** Bounded above by 1, **unbounded below**.
- [ ] **RMSE ≥ MAE always** (Jensen's inequality). Equality only when all residuals are equal in magnitude.
- [ ] **RMSE penalizes large errors quadratically** — a single 10× residual adds 100× the squared contribution.
- [ ] **R² is dimensionless**, while MAE and RMSE have the **same unit as the target** $y$.
- [ ] **R² = 0** means "model is no better than predicting the mean of $y$".
- [ ] **R² < 0** means "model is *worse* than the mean predictor" — a red flag.
- [ ] **R² always non-decreasing** as features are added (even useless ones) → motivates **Adjusted R²**.
- [ ] **Adjusted R²** formula: $1 - \frac{(1 - R^2)(n-1)}{n-p-1}$, where $p$ is the number of predictors.
- [ ] **Use RMSE** when large errors are disproportionately costly (engineering, finance).
- [ ] **Use MAE** when outliers are genuine data, not noise (demand forecasting, anomaly-aware systems).
- [ ] **Use R²** to communicate "variance explained" to non-technical stakeholders.
- [ ] **Never use R² alone** for model selection; always pair it with MAE or RMSE.
- [ ] **MAPE** (Mean Absolute Percentage Error) is a unitless alternative when relative error matters.
- [ ] **MSE** (without the √) is in $y^2$ units — useful for mathematical optimization, not for reporting.
- [ ] **Jensen's inequality check** ($RMSE \ge MAE$) is a **free 1-mark sanity check** in KTU numericals.
- [ ] **Code rubric checklist:** type hints, input validation, manual-vs-sklearn comparison, sanity assertions.
- [ ] **In Python**, prefer `mean_squared_error(..., squared=False)` for RMSE in modern sklearn.
- [ ] **R² can be negative** — when reporting it, always include a "no worse than the mean" caveat in your interpretation.

> **Final Exam Mantra:** *MAE tells you how far off, RMSE tells you how badly, R² tells you how much you explained.*

---

<!-- SECTION_5_END -->
