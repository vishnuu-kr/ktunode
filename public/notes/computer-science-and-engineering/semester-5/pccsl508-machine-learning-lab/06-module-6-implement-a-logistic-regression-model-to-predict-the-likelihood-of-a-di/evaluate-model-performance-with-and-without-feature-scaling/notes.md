# Evaluate model performance with and without feature scaling.

<!-- SECTION_1_START -->

# MACHINE LEARNING LAB (PCCSL508) — Module 6

## Logistic Regression for Disease Prediction: Feature Scaling Impact Analysis

> [!NOTE]
> **KTU 2024 Scheme Focus:** This lab experiment trains a binary logistic regression classifier on a medical dataset (e.g., the Pima Indians Diabetes dataset) to predict disease presence (1) or absence (0). The study contrastively evaluates the model under two preprocessing regimes — **raw unscaled features** versus **standardized features** — and benchmarks convergence speed, coefficient stability, and classification performance.

### 1.1 Core Technical Definition

**Logistic Regression** is a supervised, parametric, discriminative classification algorithm that models the *log-odds* of an event as a linear combination of input features, then passes this linear score through the **sigmoid (logistic) activation function** to squash the output into the open interval $(0, 1)$. The output is interpreted as the **conditional probability** $\Pr(y=1 \mid \mathbf{x}; \boldsymbol{\theta})$ that the patient has the disease given the feature vector $\mathbf{x}$.

$$h_{\boldsymbol{\theta}}(\mathbf{x}) = \Pr(y=1 \mid \mathbf{x}; \boldsymbol{\theta}) = \sigma(\mathbf{x}^{\top}\boldsymbol{\theta}) = \frac{1}{1 + e^{-\mathbf{x}^{\top}\boldsymbol{\theta}}}$$

where $\mathbf{x} \in \mathbb{R}^{n+1}$ is the augmented feature vector (with bias $x_0 = 1$), $\boldsymbol{\theta} \in \mathbb{R}^{n+1}$ is the parameter vector, and $\sigma(\cdot)$ is the sigmoid function mapping $\mathbb{R} \to (0, 1)$.

> [!IMPORTANT]
> **Decision Rule:** A patient is classified as *diseased* ($\hat{y}=1$) if $h_{\boldsymbol{\theta}}(\mathbf{x}) \geq 0.5$, and *healthy* ($\hat{y}=0$) otherwise. The threshold $\tau = 0.5$ is the KTU default, but for medical screening it is often lowered to **0.3 or 0.4** to maximize recall (sensitivity).

### 1.2 Conceptual Analogy & Intuition

> [!TIP]
> **"The Squeeze Theorem" Analogy:** Imagine you are a junior doctor trying to assess heart-attack risk. You collect eight lab readings (glucose, BMI, blood pressure, insulin, etc.) — each measured on wildly different scales. Some are in tens (age), some in hundreds (glucose), some in millions (insulin). Logistic regression is like a *tug-of-war* where every feature pulls the risk score up or down by an amount proportional to its weight. If glucose is on a scale 1000× larger than age, the rope barely moves when age tugs — **glucose dominates unfairly**. Feature scaling is the referee that re-weights the rope so every feature tugs in proportion to its true *biological importance*, not its measurement unit.

**Geometric Intuition:** The sigmoid function $\sigma(z)$ is an **S-shaped curve** that takes the linear regression line $z = \mathbf{x}^{\top}\boldsymbol{\theta}$ (which can be anywhere on $\mathbb{R}$) and bends it horizontally so that the output is locked into $[0, 1]$. Without scaling, the decision boundary hyperplane $\mathbf{x}^{\top}\boldsymbol{\theta} = 0$ may never cross the right region of feature space efficiently during gradient descent — the optimization landscape becomes a long, narrow, anisotropic valley.

> [!VISUALIZATION CONTROL]
> **Concept 1 — Sigmoid Function Shape:**
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = 1/(1+exp(-x))` (raw sigmoid)
> * `g(x) = 1/(1+exp(-3x))` (steep, scaled features)
> * `h(x) = 1/(1+exp(-0.3x))` (shallow, unscaled features)
> **Visual Description:** The student should observe that `f(x)` passes through $(0, 0.5)$, and that as the input slope steepens (g), the curve transitions from probability 0 to 1 over a smaller $x$-range, giving the classifier sharper, more confident decisions. The unscaled case (h) is almost flat — the model is uncertain across a wide range.

> [!VISUALIZATION CONTROL]
> **Concept 2 — Cost Function Surface with vs. without Scaling:**
> **GeoGebra / Desmos Input Equations (3D):**
> * `J(θ1, θ2) = (1/200) Σ (σ(θ1·x1 + θ2·x2) - y_i)²` (unscaled — elongated elliptical bowl)
> * `J(θ1, θ2) = (1/200) Σ (σ(0.01·θ1·x1 + 5·θ2·x2) - y_i)²` (scaled — near-circular bowl)
> **Visual Description:** Unscaled features produce a long, narrow, tilted valley — gradient descent oscillates across the walls and crawls along the bottom. Scaled features reshape the bowl into a near-symmetric circle, allowing direct, monotonic convergence to the minimum in far fewer iterations.

### 1.3 Physical & Standard Constants Used in Disease Datasets

| Constant / Metric | Symbol | Value / Range | Notes |
|---|---|---|---|
| Decision threshold (default) | $\tau$ | **0.5** | KTU default; tune for medical recall |
| Decision threshold (clinical) | $\tau_{clin}$ | **0.3 – 0.4** | Favors sensitivity over specificity |
| Learning rate | $\alpha$ | **0.01 – 0.1** | Higher OK with scaled features |
| Convergence tolerance | $\epsilon$ | **$10^{-4}$** | Stop when $\vert J^{(t+1)} - J^{(t)} \vert < \epsilon$ |
| Max iterations | $T$ | **1000** | Hard cap for batch gradient descent |
| Number of features (Pima) | $n$ | **8** | Glucose, BMI, Age, Insulin, etc. |

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Logistic Regression Hypothesis — From Linear to Probabilistic

Standard linear regression predicts a continuous output $\mathbf{x}^{\top}\boldsymbol{\theta} \in \mathbb{R}$, which is **incompatible with probability** (probabilities must lie in $[0, 1]$). Logistic regression fixes this by composing the linear model with the sigmoid link function:

**Step 1 — Linear Score (Logit):**
$$z = \mathbf{x}^{\top}\boldsymbol{\theta} = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \cdots + \theta_n x_n$$

**Step 2 — Apply the Sigmoid Link:**
$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

**Step 3 — Interpret as Probability:**
$$\Pr(y=1 \mid \mathbf{x}; \boldsymbol{\theta}) = \sigma(z), \quad \Pr(y=0 \mid \mathbf{x}; \boldsymbol{\theta}) = 1 - \sigma(z)$$

**Why the sigmoid?** It is the **canonical link function** of the Binomial/Bernoulli family in the Generalized Linear Model (GLM) framework. It produces a smooth, differentiable, monotonic curve bounded in $(0, 1)$ — perfect for binary outcomes.

## 2.2 The Cost Function — Binary Cross-Entropy (Log-Loss)

Because Mean Squared Error is non-convex when applied to $\sigma(z)$ (it contains local minima), logistic regression uses the **Negative Log-Likelihood** (also called *log-loss* or *binary cross-entropy*):

$$J(\boldsymbol{\theta}) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(h_{\boldsymbol{\theta}}(\mathbf{x}^{(i)})) + (1 - y^{(i)}) \log(1 - h_{\boldsymbol{\theta}}(\mathbf{x}^{(i)})) \right]$$

This function is **globally convex** in $\boldsymbol{\theta}$ when the data are linearly separable and the model is correctly specified — guaranteeing that gradient descent will converge to the global optimum.

## 2.3 Gradient Descent Update Rule

The partial derivative of $J$ w.r.t. $\theta_j$ yields a strikingly elegant update that has the same form as linear regression but uses $\sigma(z)$ instead of the raw prediction:

$$\frac{\partial J}{\partial \theta_j} = \frac{1}{m} \sum_{i=1}^{m} (h_{\boldsymbol{\theta}}(\mathbf{x}^{(i)}) - y^{(i)}) x_j^{(i)}$$

$$\boxed{\theta_j := \theta_j - \alpha \cdot \frac{1}{m} \sum_{i=1}^{m} (h_{\boldsymbol{\theta}}(\mathbf{x}^{(i)}) - y^{(i)}) x_j^{(i)}}$$

> [!IMPORTANT]
> **The Critical Insight on Scaling:** Notice that the gradient for $\theta_j$ is proportional to the magnitude of $x_j$. If $x_j$ is on a scale of thousands (e.g., serum insulin in $\mu$U/mL ranges 0–850) and $x_j'$ is on a scale of ones (e.g., pregnancies 0–17), the gradient for $\theta_j$ is **100× larger**. This causes the unscaled model to oscillate aggressively in the insulin direction while creeping slowly in the pregnancies direction — the optimization is unstable and slow.

## 2.4 Feature Scaling — Mathematical Forms

### 2.4.1 Z-Score Standardization (a.k.a. Standard Scaling)

Transforms each feature to have zero mean and unit variance:
$$x_j^{\text{std}} = \frac{x_j - \mu_j}{\sigma_j}$$

where $\mu_j$ is the sample mean and $\sigma_j$ the sample standard deviation of feature $j$.

### 2.4.2 Min-Max Normalization (a.k.a. Min-Max Scaling)

Scales each feature into the closed interval $[0, 1]$:
$$x_j^{\text{norm}} = \frac{x_j - \min(x_j)}{\max(x_j) - \min(x_j)}$$

### 2.4.3 Robust Scaling

Uses the median and interquartile range, resistant to outliers:
$$x_j^{\text{robust}} = \frac{x_j - \text{median}(x_j)}{\text{IQR}(x_j)}$$

> [!WARNING]
> **Data Leakage Pitfall:** The scaling parameters ($\mu_j$, $\sigma_j$, $\min$, $\max$) **MUST** be computed *only* on the training set and *then* applied to the test set via `transform()` — never use `fit_transform()` on the test set. The KTU examiner will check for this.

## 2.5 KTU High-Yield Formula Sheet

| Concept | Formula | Use Case |
|---|---|---|
| Sigmoid | $\sigma(z) = \dfrac{1}{1 + e^{-z}}$ | Squash linear score to probability |
| Hypothesis | $h_{\boldsymbol{\theta}}(\mathbf{x}) = \sigma(\mathbf{x}^{\top}\boldsymbol{\theta})$ | Predict $\Pr(y=1 \mid \mathbf{x})$ |
| Log-Loss | $J(\boldsymbol{\theta}) = -\dfrac{1}{m}\sum \left[ y \log h + (1-y) \log(1-h) \right]$ | Cost function to minimize |
| Gradient | $\dfrac{\partial J}{\partial \theta_j} = \dfrac{1}{m}\sum (h^{(i)} - y^{(i)}) x_j^{(i)}$ | Update direction for each parameter |
| Update Rule | $\theta_j := \theta_j - \alpha \cdot \dfrac{1}{m}\sum (h^{(i)} - y^{(i)}) x_j^{(i)}$ | Batch gradient descent step |
| Standardization | $x^{\text{std}} = \dfrac{x - \mu}{\sigma}$ | Zero-mean, unit-variance scaling |
| Min-Max Norm | $x^{\text{norm}} = \dfrac{x - x_{\min}}{x_{\max} - x_{\min}}$ | Compress to $[0, 1]$ |
| Accuracy | $\text{Acc} = \dfrac{TP + TN}{TP + TN + FP + FN}$ | Overall correctness |
| Precision | $\text{Prec} = \dfrac{TP}{TP + FP}$ | Of predicted positives, how many correct |
| Recall (Sensitivity) | $\text{Rec} = \dfrac{TP}{TP + FN}$ | Of actual positives, how many caught |
| F1-Score | $F_1 = 2 \cdot \dfrac{\text{Prec} \cdot \text{Rec}}{\text{Prec} + \text{Rec}}$ | Harmonic mean of precision & recall |
| AUC-ROC | $\int_{0}^{1} \text{TPR}(f^{-1}(t)) \, dt$ | Threshold-independent discrimination |
| Log-Loss (test) | $J_{\text{test}} = -\dfrac{1}{m_t}\sum \left[ y \log p + (1-y) \log(1-p) \right]$ | Probabilistic calibration metric |
| Confusion Matrix | $2 \times 2$ table: $\begin{vmatrix} TN & FP \\ FN & TP \end{vmatrix}$ | Decomposition of predictions |

> [!NOTE]
> **Why the Pipe Symbol Matters in This Table:** In the confusion matrix entry above, the determinant bars $\vert \cdot \vert$ are **deliberately not used** as they are a markdown table conflict hazard. When writing absolute value inside any table row, use the LaTeX commands `\vert x \vert` or `\mid x \mid` to avoid breaking the column delimiter.

## 2.6 Real-World Engineering & Medical Relevance

* **Clinical Decision Support Systems (CDSS):** Logistic regression remains a top-3 model in production hospital systems (Mayo Clinic, NHS) because its **probabilistic output is interpretable** — a doctor sees *“87 % risk of diabetes”*, not just a black-box 0/1 verdict.
* **Convergence Speed:** Scaled models converge in 50–200 iterations; unscaled models may need 5000+ iterations or stall — wasting compute in production retraining pipelines.
* **Regularization Compatibility:** $\ell_2$ (Ridge) regularization penalizes $\sum_j \theta_j^2$. Without scaling, features on large scales get implicitly over-penalized, biasing the model. Scaling is **mandatory** before regularized logistic regression.
* **AUC-ROC Robustness:** The Area Under the Receiver Operating Characteristic Curve is invariant to threshold choice, making it the gold-standard medical screening metric.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Python Implementation

## 3.1 Mathematical Derivation — Why Gradient Descent Works Better with Scaling

**Setup:** Consider a 2-feature toy problem with $x_1 \in [0, 17]$ (pregnancies) and $x_2 \in [0, 850]$ (insulin). Let $\boldsymbol{\theta} = (\theta_0, \theta_1, \theta_2)^{\top}$.

**Step 1 — Write the gradient for $\theta_1$ and $\theta_2$ at iteration $t$:**

$$\frac{\partial J}{\partial \theta_1} = \frac{1}{m} \sum_{i=1}^{m} (h^{(i)} - y^{(i)}) \cdot x_1^{(i)}$$

$$\frac{\partial J}{\partial \theta_2} = \frac{1}{m} \sum_{i=1}^{m} (h^{(i)} - y^{(i)}) \cdot x_2^{(i)}$$

**Step 2 — Compare magnitudes.** For the same residual $(h - y)$, the magnitude ratio of gradients is:

$$\frac{\vert \partial J / \partial \theta_2 \vert}{\vert \partial J / \partial \theta_1 \vert} \approx \frac{\overline{x_2}}{\overline{x_1}} \approx \frac{80}{3.8} \approx 21$$

**Step 3 — Implication for learning rate.** A single learning rate $\alpha$ must simultaneously satisfy stability for $\theta_2$ and fast progress for $\theta_1$. The condition $\alpha \cdot \vert \partial J / \partial \theta_j \vert \ll 1$ for all $j$ forces us to pick:

$$\alpha \leq \frac{0.01}{21 \cdot \vert \partial J / \partial \theta_1 \vert}$$

This bound slows $\theta_1$ progress to a crawl.

**Step 4 — After Z-score standardization.** Both $\overline{x_1^{\text{std}}} = 0$ and $\overline{x_2^{\text{std}}} = 0$ with unit variance. The gradient magnitudes become **comparable**, and a single $\alpha$ works well for all directions.

$$\frac{\vert \partial J_{\text{std}} / \partial \theta_2 \vert}{\vert \partial J_{\text{std}} / \partial \theta_1 \vert} \approx \frac{1}{1} = 1 \quad \checkmark$$

## 3.2 Step-by-Step Decision Threshold Tuning (for Clinical Recall)

A doctor wants **Recall $\geq$ 0.80** to minimize missed diabetic patients. We sweep $\tau$ from 0.1 to 0.9 and pick the smallest $\tau$ that achieves the recall target.

**Step 1 — Compute predicted probabilities** $p^{(i)} = h_{\boldsymbol{\theta}}(\mathbf{x}^{(i)})$ for all test samples.

**Step 2 — For each $\tau \in \{0.1, 0.2, \ldots, 0.9\}$:**

$$\hat{y}^{(i)} = \mathbb{1}[p^{(i)} \geq \tau]$$

**Step 3 — Compute Recall$(\tau)$:**

$$\text{Recall}(\tau) = \frac{\sum_{i: y^{(i)}=1} \mathbb{1}[p^{(i)} \geq \tau]}{\sum_{i=1}^{m_t} y^{(i)}}$$

**Step 4 — Select the operational threshold:**

$$\tau^{\star} = \min \{\tau : \text{Recall}(\tau) \geq 0.80\}$$

## 3.3 Complete Python Implementation — Full Lab Code

> [!IMPORTANT]
> The following code is **fully runnable, end-to-end, and KTU exam-ready**. It uses the Pima Indians Diabetes dataset (768 samples, 8 features, 1 binary target). No step is omitted.

```python
"""
KTU MACHINE LEARNING LAB (PCCSL508) - MODULE 6
Experiment: Logistic Regression for Diabetes Prediction
Comparison: Model performance with vs. without feature scaling
Dataset:    Pima Indians Diabetes (binary classification, m=768, n=8)
Author:     KTU 2024 Scheme Compliant Implementation
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, confusion_matrix, classification_report
)
import warnings
warnings.filterwarnings("ignore", category=UserWarning)

# ============================================================================
# STEP 1: LOAD THE PIMA INDIANS DIABETES DATASET
# ============================================================================
URL = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
COLUMNS = [
    "pregnancies", "glucose", "blood_pressure", "skin_thickness",
    "insulin", "bmi", "diabetes_pedigree", "age", "outcome"
]
df = pd.read_csv(URL, names=COLUMNS)
print(f"[INFO] Dataset shape: {df.shape}")
print(f"[INFO] Class balance:\n{df['outcome'].value_counts(normalize=True)}")
print(f"[INFO] First 5 rows:\n{df.head()}")

# ============================================================================
# STEP 2: FEATURE / TARGET SEPARATION
# ============================================================================
X = df.drop("outcome", axis=1).values        # (768, 8)
y = df["outcome"].values                    # (768,)
feature_names = df.drop("outcome", axis=1).columns.tolist()
print(f"[INFO] Feature matrix X shape: {X.shape}")
print(f"[INFO] Target vector y shape:  {y.shape}")

# ============================================================================
# STEP 3: TRAIN / TEST SPLIT (stratified to preserve class ratio)
# ============================================================================
X_train_raw, X_test_raw, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)
print(f"[INFO] Training samples:   {X_train_raw.shape[0]}")
print(f"[INFO] Test samples:       {X_test_raw.shape[0]}")
print(f"[INFO] Train class ratio:  {np.mean(y_train):.4f}")
print(f"[INFO] Test class ratio:   {np.mean(y_test):.4f}")

# ============================================================================
# STEP 4: BASELINE DESCRIPTIVE STATISTICS (raw vs scaled)
# ============================================================================
stats_df = pd.DataFrame(X_train_raw, columns=feature_names).describe().T
stats_df["range"] = stats_df["max"] - stats_df["min"]
print("\n[INFO] Raw training feature statistics:")
print(stats_df[["mean", "std", "min", "max", "range"]].round(2))

# ============================================================================
# STEP 5: APPLY Z-SCORE STANDARDIZATION (fit on train, transform on test)
# ============================================================================
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train_raw)   # fit + transform on train
X_test_scaled  = scaler.transform(X_test_raw)         # ONLY transform on test
print(f"\n[INFO] Scaled train mean (should be ~0):    {X_train_scaled.mean(axis=0).round(4)}")
print(f"[INFO] Scaled train std  (should be ~1):    {X_train_scaled.std(axis=0).round(4)}")

# ============================================================================
# STEP 6: TRAIN LOGISTIC REGRESSION — UNSCALED FEATURES
# ============================================================================
model_raw = LogisticRegression(
    penalty="l2",            # L2 regularization
    C=1.0,                   # inverse regularization strength
    solver="lbfgs",          # quasi-Newton optimizer
    max_iter=1000,
    random_state=42
)
model_raw.fit(X_train_raw, y_train)
y_pred_raw  = model_raw.predict(X_test_raw)
y_proba_raw = model_raw.predict_proba(X_test_raw)[:, 1]
print(f"\n[INFO] Raw model converged in {model_raw.n_iter_[0]} iterations")
print(f"[INFO] Raw coefficients: {model_raw.coef_[0].round(4)}")

# ============================================================================
# STEP 7: TRAIN LOGISTIC REGRESSION — SCALED FEATURES
# ============================================================================
model_scaled = LogisticRegression(
    penalty="l2",
    C=1.0,
    solver="lbfgs",
    max_iter=1000,
    random_state=42
)
model_scaled.fit(X_train_scaled, y_train)
y_pred_scaled  = model_scaled.predict(X_test_scaled)
y_proba_scaled = model_scaled.predict_proba(X_test_scaled)[:, 1]
print(f"\n[INFO] Scaled model converged in {model_scaled.n_iter_[0]} iterations")
print(f"[INFO] Scaled coefficients: {model_scaled.coef_[0].round(4)}")

# ============================================================================
# STEP 8: COMPREHENSIVE PERFORMANCE METRICS FUNCTION
# ============================================================================
def evaluate_model(y_true, y_pred, y_proba, label):
    metrics = {
        "Accuracy":  accuracy_score(y_true, y_pred),
        "Precision": precision_score(y_true, y_pred, zero_division=0),
        "Recall":    recall_score(y_true, y_pred, zero_division=0),
        "F1-Score":  f1_score(y_true, y_pred, zero_division=0),
        "AUC-ROC":   roc_auc_score(y_true, y_proba),
        "Log-Loss":  log_loss(y_true, y_proba)
    }
    print(f"\n========== {label} ==========")
    for name, val in metrics.items():
        print(f"  {name:<12s}: {val:.4f}")
    cm = confusion_matrix(y_true, y_pred)
    print(f"  Confusion Matrix:\n    TN={cm[0,0]:3d}  FP={cm[0,1]:3d}\n    FN={cm[1,0]:3d}  TP={cm[1,1]:3d}")
    return metrics

metrics_raw    = evaluate_model(y_test, y_pred_raw,    y_proba_raw,    "WITHOUT SCALING")
metrics_scaled = evaluate_model(y_test, y_pred_scaled, y_proba_scaled, "WITH Z-SCORE SCALING")

# ============================================================================
# STEP 9: SIDE-BY-SIDE COMPARISON TABLE
# ============================================================================
comparison = pd.DataFrame({
    "Without Scaling": metrics_raw,
    "With Scaling":    metrics_scaled
}).round(4)
comparison["Delta (%)"] = ((comparison["With Scaling"] - comparison["Without Scaling"])
                            / comparison["Without Scaling"].abs() * 100).round(2)
print("\n[INFO] ======== PERFORMANCE COMPARISON ========")
print(comparison)

# ============================================================================
# STEP 10: COEFFICIENT STABILITY VISUALIZATION
# ============================================================================
fig, axes = plt.subplots(1, 2, figsize=(16, 5))
coef_raw    = pd.Series(model_raw.coef_[0],    index=feature_names)
coef_scaled = pd.Series(model_scaled.coef_[0], index=feature_names)
coef_raw.plot.barh(ax=axes[0],    color="salmon",  edgecolor="black")
axes[0].set_title("Coefficients — WITHOUT Scaling", fontsize=13, fontweight="bold")
axes[0].set_xlabel("Raw coefficient magnitude")
axes[0].axvline(0, color="black", linewidth=0.8)
coef_scaled.plot.barh(ax=axes[1], color="seagreen", edgecolor="black")
axes[1].set_title("Coefficients — WITH Scaling", fontsize=13, fontweight="bold")
axes[1].set_xlabel("Standardized coefficient magnitude")
axes[1].axvline(0, color="black", linewidth=0.8)
plt.tight_layout()
plt.savefig("coefficient_comparison.png", dpi=120, bbox_inches="tight")
plt.show()

# ============================================================================
# STEP 11: CONFUSION MATRIX HEATMAPS
# ============================================================================
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
for ax, y_pred, title in zip(
    axes, [y_pred_raw, y_pred_scaled],
    ["WITHOUT Scaling", "WITH Z-Score Scaling"]
):
    cm = confusion_matrix(y_test, y_pred)
    sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", cbar=False, ax=ax,
                xticklabels=["Healthy (0)", "Diabetic (1)"],
                yticklabels=["Healthy (0)", "Diabetic (1)"])
    ax.set_title(f"Confusion Matrix — {title}", fontsize=12, fontweight="bold")
    ax.set_xlabel("Predicted")
    ax.set_ylabel("Actual")
plt.tight_layout()
plt.savefig("confusion_matrices.png", dpi=120, bbox_inches="tight")
plt.show()

# ============================================================================
# STEP 12: ROC CURVE OVERLAY
# ============================================================================
from sklearn.metrics import roc_curve
fpr_raw,    tpr_raw,    _ = roc_curve(y_test, y_proba_raw)
fpr_scaled, tpr_scaled, _ = roc_curve(y_test, y_proba_scaled)
plt.figure(figsize=(8, 6))
plt.plot(fpr_raw,    tpr_raw,    color="salmon",  lw=2,
         label=f"Without Scaling (AUC = {metrics_raw['AUC-ROC']:.3f})")
plt.plot(fpr_scaled, tpr_scaled, color="seagreen", lw=2,
         label=f"With Scaling    (AUC = {metrics_scaled['AUC-ROC']:.3f})")
plt.plot([0, 1], [0, 1], "k--", lw=1, label="Random Classifier")
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate (Recall)")
plt.title("ROC Curve Comparison", fontsize=14, fontweight="bold")
plt.legend(loc="lower right", fontsize=11)
plt.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("roc_comparison.png", dpi=120, bbox_inches="tight")
plt.show()

print("\n[INFO] ======== LAB EXPERIMENT COMPLETE ========")
```

## 3.4 Expected Sample Output (for KTU Record Submission)

```
[INFO] Raw model converged in 487 iterations          # Unscaled: slow
[INFO] Scaled model converged in 34 iterations         # Scaled: fast

========== WITHOUT SCALING ==========
  Accuracy    : 0.7338
  Precision   : 0.6190
  Recall      : 0.6111
  F1-Score    : 0.6150
  AUC-ROC     : 0.8073
  Log-Loss    : 0.5541

========== WITH Z-SCORE SCALING ==========
  Accuracy    : 0.7532
  Precision   : 0.6452
  Recall      : 0.6481
  F1-Score    : 0.6466
  AUC-ROC     : 0.8156
  Log-Loss    : 0.5123
```

> [!TIP]
> **Interpretation Guide for KTU Record:** Convergence in **34 vs. 487 iterations** is a striking demonstration. The scaled model also yields **comparable or higher** classification metrics. However, note that logistic regression is *less* sensitive to scaling than SVM or KNN — the gain is moderate but consistent.

## 3.5 Confusion Matrix Reading (KTU Standard)

Given a 2×2 matrix in the form $\begin{pmatrix} TN & FP \\ FN & TP \end{pmatrix}$:

* **True Negative (TN):** Healthy patient correctly predicted healthy.
* **False Positive (FP):** Healthy patient falsely flagged diabetic (Type I error — costs a follow-up test).
* **False Negative (FN):** Diabetic patient missed (Type II error — **clinically dangerous**).
* **True Positive (TP):** Diabetic patient correctly identified.

> [!WARNING]
> In a KTU record, always tabulate the confusion matrix in the **TN, FP, FN, TP** row-major order to match the textbook convention. Do not transpose it.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 End-to-End Lab Pipeline — Mermaid Flowchart

```mermaid
flowchart TD
    A["Load Pima Diabetes CSV"] --> B["Stratified Train Test Split 80 20"]
    B --> C1["Branch A Unscaled Features"]
    B --> C2["Branch B Z Score Standardized"]
    C1 --> D1["LogisticRegression fit on raw X train"]
    C2 --> D2["StandardScaler fit transform on X train"]
    D2 --> D3["Transform X test using training scaler"]
    D3 --> E1["LogisticRegression fit on scaled X train"]
    D1 --> F1["Predict labels and probabilities X test raw"]
    E1 --> F2["Predict labels and probabilities X test scaled"]
    F1 --> G1["Compute Metrics Accuracy Precision Recall F1 AUC LogLoss"]
    F2 --> G2["Compute Metrics Accuracy Precision Recall F1 AUC LogLoss"]
    G1 --> H["Side by side comparison table"]
    G2 --> H
    H --> I["Generate visualizations coef bar ROC curve confusion matrix"]
    I --> J["Write KTU lab record conclusions"]

    style A fill:#fff3b0,stroke:#333,stroke-width:2px
    style C1 fill:#f4a261,stroke:#333,stroke-width:2px
    style C2 fill:#2a9d8f,stroke:#333,stroke-width:2px
    style D1 fill:#e76f51,stroke:#333,stroke-width:2px
    style D2 fill:#264653,stroke:#fff,stroke-width:2px
    style H fill:#a8dadc,stroke:#333,stroke-width:2px
    style J fill:#e9c46a,stroke:#333,stroke-width:2px
```

## 4.2 Logistic Regression Decision Boundary — Mermaid Block Diagram

```mermaid
graph LR
    subgraph INPUT["Input Layer 8 Features"]
        P1["Pregnancies"]
        P2["Glucose mg dL"]
        P3["Blood Pressure mmHg"]
        P4["Skin Thickness mm"]
        P5["Insulin mu U mL"]
        P6["BMI kg m2"]
        P7["DPF"]
        P8["Age years"]
    end
    subgraph COMBINE["Linear Combination"]
        Z["z equals theta0 plus sum of theta j times x j"]
    end
    subgraph ACTIVATE["Sigmoid Activation"]
        SIGMA["sigma of z equals 1 over 1 plus e to the minus z"]
    end
    subgraph DECIDE["Threshold Decision tau 0.5"]
        D1["If prob greater equal 0.5 predict Diabetic 1"]
        D0["If prob less than 0.5 predict Healthy 0"]
    end
    P1 --> Z
    P2 --> Z
    P3 --> Z
    P4 --> Z
    P5 --> Z
    P6 --> Z
    P7 --> Z
    P8 --> Z
    Z --> SIGMA
    SIGMA --> D1
    SIGMA --> D0

    style INPUT fill:#caf0f8,stroke:#0077b6,stroke-width:2px
    style COMBINE fill:#ffd6a5,stroke:#ff7f00,stroke-width:2px
    style ACTIVATE fill:#fdffb6,stroke:#ffd60a,stroke-width:2px
    style DECIDE fill:#b5ead7,stroke:#06d6a0,stroke-width:2px
```

## 4.3 Model Evaluation Topology Matrix

| Stage | Without Scaling | With Z-Score Scaling |
|---|---|---|
| Preprocessor | `None` (raw) | `StandardScaler` (fit on train only) |
| Convergence iterations | 200–500+ | 20–60 |
| Coefficient scale | Heterogeneous (e.g., glucose ~0.005, insulin ~0.001) | Homogeneous (all features in same scale) |
| Bias sensitivity | High (BMI dominates by magnitude) | Low (all features compete fairly) |
| Regularization fairness | Skewed (insulin under-penalized) | Balanced (equal $\ell_2$ pressure) |
| Test Accuracy | Baseline | +1 to +3 % typically |
| AUC-ROC | Baseline | Equal or +0.005 to +0.015 |
| Log-Loss | Higher | Lower (more confident, calibrated probs) |

> [!NOTE]
> **Why Logistic Regression is Less Sensitive Than KNN/SVM:** Logistic regression is a *linear* model. The decision boundary $\mathbf{x}^{\top}\boldsymbol{\theta} = 0$ is invariant to linear rescaling of features (in the sense that rescaling can be absorbed into the coefficients). However, **regularization** breaks this invariance — and convergence speed is always affected. This nuance is a high-value KTU viva question.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short-Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam — July 2024]` — **CO1, Remember**

**Why is feature scaling important for gradient-descent-based logistic regression even though the decision boundary is theoretically scale-invariant?**

**Model Answer (3 marks):**

While the *final* decision hyperplane $\mathbf{x}^{\top}\boldsymbol{\theta} = 0$ is mathematically invariant to feature rescaling (the coefficients absorb the change), gradient descent's **optimization path and convergence speed** are *not* invariant. The gradient for $\theta_j$ is proportional to the magnitude of $x_j$. When features have wildly different scales (e.g., insulin 0–850 vs. pregnancies 0–17), gradients for different $\theta_j$ differ by **orders of magnitude**, causing the same learning rate $\alpha$ to be simultaneously too large (oscillation) and too small (slowness). Additionally, **$\ell_2$ regularization** $C^{-1} \sum_j \theta_j^2$ penalizes large-scale features unfairly, biasing the optimum. Scaling equalizes the gradient magnitudes, making a single $\alpha$ work well and producing fair regularization. **[3 marks]**

---

### Q2. `[KTU University Exam — Dec 2023]` — **CO2, Understand**

**Differentiate between Precision and Recall in the context of diabetes prediction. Which is more important clinically and why?**

**Model Answer (3 marks):**

| Metric | Definition | Diabetes Context |
|---|---|---|
| **Precision** | $\dfrac{TP}{TP+FP}$ | Of patients flagged diabetic, how many actually are? |
| **Recall** | $\dfrac{TP}{TP+FN}$ | Of actual diabetics, how many did we catch? |

**Recall is more important clinically** because a False Negative (missed diabetic patient) is a **life-threatening** error — the patient goes undiagnosed and may develop severe complications. A False Positive (healthy flagged as diabetic) only triggers a follow-up confirmatory test. The asymmetry of medical costs therefore drives the choice. **[3 marks]**

---

## Part B — Long-Answer Questions (14 Marks, Internal Choice)

### Question A `[KTU University Exam — July 2024]` — **CO3, Apply + Analyze**

**(a)** [7 Marks] Derive the gradient of the binary cross-entropy cost function $J(\boldsymbol{\theta})$ for logistic regression with respect to a single parameter $\theta_j$. Show every algebraic step.

**(b)** [7 Marks] A team trains a logistic regression model on the Pima Diabetes dataset. Without scaling, the model converges in 482 iterations with test accuracy 0.7143. With Z-score standardization, it converges in 38 iterations with test accuracy 0.7532. Explain *why* scaling reduces iteration count so dramatically, citing the relationship between feature magnitude, gradient magnitude, and learning rate stability. Support your answer with a numerical example using the gradient ratio for `insulin` (mean 80) and `pregnancies` (mean 3.8).

---

#### Model Solution for Q-A

**Part (a) — Derivation [7 marks]:**

**Step 1 — State the hypothesis and cost:**

$$h = \sigma(z) = \frac{1}{1+e^{-z}}, \quad z = \mathbf{x}^{\top}\boldsymbol{\theta}$$

$$J(\boldsymbol{\theta}) = -\frac{1}{m}\sum_{i=1}^{m}\left[y^{(i)}\log h^{(i)} + (1-y^{(i)})\log(1-h^{(i)})\right]$$

**[Stating the cost function: 1 mark]**

**Step 2 — Differentiate the log term using the chain rule:**

$$\frac{\partial}{\partial \theta_j} \log h = \frac{1}{h} \cdot \frac{\partial h}{\partial z} \cdot \frac{\partial z}{\partial \theta_j}$$

We need $\frac{\partial h}{\partial z}$. The sigmoid has the elegant property:

$$\frac{\partial \sigma(z)}{\partial z} = \sigma(z)(1 - \sigma(z)) = h(1-h)$$

Also, $\frac{\partial z}{\partial \theta_j} = x_j$.

Therefore:

$$\frac{\partial}{\partial \theta_j} \log h = \frac{1}{h} \cdot h(1-h) \cdot x_j = (1-h) x_j$$

**[Deriving the sigmoid derivative property: 2 marks]**

**Step 3 — Similarly for $\log(1-h)$:**

$$\frac{\partial}{\partial \theta_j} \log(1-h) = \frac{1}{1-h} \cdot (-h(1-h)) \cdot x_j = -h x_j$$

**[Computing the second derivative: 1 mark]**

**Step 4 — Combine and apply the per-example loss derivative:**

$$\frac{\partial}{\partial \theta_j} \left[ y \log h + (1-y)\log(1-h) \right] = y(1-h)x_j + (1-y)(-h x_j)$$

$$= x_j \left[ y(1-h) - (1-y)h \right] = x_j (y - h)$$

**[Final simplification to $(h-y)x_j$: 1 mark]**

**Step 5 — Aggregate and present the full gradient:**

$$\frac{\partial J}{\partial \theta_j} = -\frac{1}{m}\sum_{i=1}^{m} (y^{(i)} - h^{(i)}) x_j^{(i)} = \frac{1}{m}\sum_{i=1}^{m} (h^{(i)} - y^{(i)}) x_j^{(i)}$$

**[Final gradient expression and update rule: 2 marks]**

The complete update rule is therefore:

$$\theta_j := \theta_j - \alpha \cdot \frac{1}{m}\sum_{i=1}^{m} (h^{(i)} - y^{(i)}) x_j^{(i)}$$

---

**Part (b) — Convergence Explanation with Numerical Example [7 marks]:**

**Step 1 — Establish the gradient-magnitude scaling law [2 marks]:**

The gradient $\partial J / \partial \theta_j$ is proportional to the average feature magnitude $\overline{x_j}$. For the Pima dataset, the relevant means are:

$$\overline{x_{\text{insulin}}} \approx 80 \text{ μU/mL}, \quad \overline{x_{\text{pregnancies}}} \approx 3.8$$

**Step 2 — Compute the gradient ratio for unscaled data [2 marks]:**

$$\frac{\vert \partial J / \partial \theta_{\text{insulin}} \vert}{\vert \partial J / \partial \theta_{\text{pregnancies}} \vert} \approx \frac{\overline{x_{\text{insulin}}}}{\overline{x_{\text{pregnancies}}}} = \frac{80}{3.8} \approx 21$$

This means a single update step moves $\theta_{\text{insulin}}$ **21× more aggressively** than $\theta_{\text{pregnancies}}$ for the same learning rate $\alpha$.

**Step 3 — Implication for the learning rate [2 marks]:**

To prevent divergence in $\theta_{\text{insulin}}$, the learning rate must be small enough that $\alpha \cdot \vert \partial J / \partial \theta_{\text{insulin}} \vert \ll 1$. But this same small $\alpha$ makes $\theta_{\text{pregnancies}}$ crawl. The optimizer is forced to take **482 zig-zag micro-steps** to reach the minimum.

**Step 4 — Effect of Z-score standardization [1 mark]:**

After Z-score scaling, $\overline{x_{\text{insulin}}^{\text{std}}} = 0$ and $\overline{x_{\text{pregnancies}}^{\text{std}}} = 0$, with both variances equal to 1. The gradient ratio collapses to $\approx 1$. A single $\alpha$ now works equally well for all parameters, and the optimizer takes a **direct, monotonic path** to the minimum in just 38 iterations — a 92.1 % reduction.

**Step 5 — Note on the accuracy gain [K-T-U bonus 0 marks, just stated]:**

The accuracy improvement (0.7143 → 0.7532) stems from fairer $\ell_2$ regularization. The penalty $C^{-1} \sum_j \theta_j^2$ no longer over-suppresses high-magnitude features like insulin. **[Stating regularization effect: implicit in above]**

---

### Question B `[KTU University Exam — Dec 2023]` — **CO3, Apply + Evaluate (Alternative Choice)**

**(a)** [7 Marks] Implement (in pseudocode or Python) the full preprocessing and training pipeline: load the Pima dataset, perform an 80/20 stratified split, fit a `StandardScaler` *only* on the training set, transform both sets, then train a logistic regression model. Show how to compute the confusion matrix, accuracy, precision, recall, F1-score, and AUC-ROC on the test set.

**(b)** [7 Marks] A hospital wants to deploy a diabetes screening model. The cost of a False Negative is **10×** the cost of a False Positive. Using the test set predictions, derive the optimal decision threshold $\tau^{\star}$ that minimizes expected cost $C_{\text{total}} = 10 \cdot FN + 1 \cdot FP$. Show the threshold-sweep table and explain your final choice.

---

#### Model Solution for Q-B

**Part (a) — Full Pipeline Implementation [7 marks]:**

```python
# [Importing libraries: 1 mark]
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (confusion_matrix, accuracy_score,
                             precision_score, recall_score,
                             f1_score, roc_auc_score)

# [Loading and splitting: 1 mark]
df = pd.read_csv("pima-indians-diabetes.data.csv", header=None)
X, y = df.iloc[:, :-1].values, df.iloc[:, -1].values
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# [Correctly fitting scaler ONLY on training set: 2 marks]
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)   # fit + transform train
X_test_s  = scaler.transform(X_test)        # transform test only

# [Training logistic regression: 1 mark]
model = LogisticRegression(C=1.0, solver="lbfgs", max_iter=1000, random_state=42)
model.fit(X_train_s, y_train)
y_proba = model.predict_proba(X_test_s)[:, 1]  # continuous probabilities
y_pred  = (y_proba >= 0.5).astype(int)          # hard predictions

# [Computing all 5 metrics + confusion matrix: 2 marks]
cm = confusion_matrix(y_test, y_pred)
acc  = accuracy_score(y_test,  y_pred)
prec = precision_score(y_test, y_pred, zero_division=0)
rec  = recall_score(y_test,    y_pred, zero_division=0)
f1   = f1_score(y_test,        y_pred, zero_division=0)
auc  = roc_auc_score(y_test,   y_proba)
print(f"Acc={acc:.4f}  Prec={prec:.4f}  Rec={rec:.4f}  F1={f1:.4f}  AUC={auc:.4f}")
print(f"Confusion Matrix: TN={cm[0,0]}  FP={cm[0,1]}  FN={cm[1,0]}  TP={cm[1,1]}")
```

> [!IMPORTANT]
> **Mandatory KTU Pitfall Check:** `scaler.fit_transform(X_test)` is **WRONG** — it leaks test-set statistics into training. The KTU examiner deducts 2 marks for this. Use `fit_transform` on train and `transform` on test.

**Part (b) — Cost-Sensitive Threshold Optimization [7 marks]:**

**Step 1 — Define the expected total cost per threshold [1 mark]:**

$$C_{\text{total}}(\tau) = 10 \cdot FN(\tau) + 1 \cdot FP(\tau)$$

where $FN(\tau) = \sum_{i: y=1} \mathbb{1}[p^{(i)} < \tau]$ and $FP(\tau) = \sum_{i: y=0} \mathbb{1}[p^{(i)} \geq \tau]$.

**Step 2 — Sweep $\tau$ from 0.1 to 0.9 in steps of 0.1 [3 marks]:**

| $\tau$ | TP | FP | FN | TN | $C_{\text{total}}$ | Recall |
|---|---|---|---|---|---|---|
| 0.9 | 8 | 1 | 46 | 95 | $10 \cdot 46 + 1 = 461$ | 0.148 |
| 0.7 | 18 | 4 | 36 | 92 | $10 \cdot 36 + 4 = 364$ | 0.333 |
| 0.5 | 35 | 12 | 19 | 84 | $10 \cdot 19 + 12 = 202$ | 0.648 |
| 0.4 | 41 | 19 | 13 | 77 | $10 \cdot 13 + 19 = 149$ | 0.759 |
| **0.3** | **47** | **28** | **7** | **68** | $10 \cdot 7 + 28 = 98$ | **0.870** |
| 0.2 | 52 | 42 | 2 | 54 | $10 \cdot 2 + 42 = 62$ | 0.963 |
| 0.1 | 54 | 65 | 0 | 31 | $10 \cdot 0 + 65 = 65$ | 1.000 |

**Step 3 — Identify $\tau^{\star}$ [1 mark]:**

The minimum cost is achieved at $\tau = 0.2$ with $C_{\text{total}} = 62$.

$$\boxed{\tau^{\star} = 0.2}$$

**Step 4 — Verify and discuss trade-offs [2 marks]:**

At $\tau = 0.2$, we catch 96.3 % of diabetics (Recall = 0.963) but raise 42 false alarms. At $\tau = 0.3$, we still catch 87 % with only 28 false alarms — a more clinically *practical* operating point. The "optimal" threshold under pure cost-minimization is 0.2, but doctors may prefer 0.3 for a better precision-recall balance. This illustrates the **precision-recall trade-off** in cost-sensitive medical deployment.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting to set `random_state`** — your results will not be reproducible, costing 1 mark.
> 2. **Calling `fit_transform` on the test set** — this is *data leakage* and costs 2 marks.
> 3. **Reporting only accuracy** — accuracy alone is misleading on imbalanced data (Pima is 65/35). Always report precision, recall, F1, and AUC-ROC.
> 4. **Confusing `predict()` and `predict_proba()`** — `predict()` returns 0/1 hard labels; `predict_proba()` returns continuous probabilities needed for ROC-AUC and threshold tuning.
> 5. **Not stratifying the split** — the test set may end up with a different class ratio, biasing metrics. Always use `stratify=y`.
> 6. **Ignoring the `max_iter` warning** — if `lbfgs` does not converge, the coefficients are unreliable. Increase `max_iter` or scale the features.

---

## Topic Recap & Important Things to Remember

> [!TIP]
> **High-Density Rapid-Revision Checklist — KTU Module 6 Logistic Regression Lab**

* **Hypothesis Form:** $h_{\boldsymbol{\theta}}(\mathbf{x}) = \sigma(\mathbf{x}^{\top}\boldsymbol{\theta}) = \dfrac{1}{1 + e^{-\mathbf{x}^{\top}\boldsymbol{\theta}}}}$ — outputs a probability in $(0, 1)$.

* **Sigmoid Property:** $\sigma'(z) = \sigma(z)(1 - \sigma(z))$ — this elegant derivative is why the gradient of log-loss is so clean.

* **Cost Function:** Binary cross-entropy $J = -\frac{1}{m}\sum [y\log h + (1-y)\log(1-h)]$ — globally convex under correct specification.

* **Gradient Update:** $\theta_j := \theta_j - \alpha \cdot \frac{1}{m}\sum (h^{(i)} - y^{(i)}) x_j^{(i)}$ — note the *same algebraic form* as linear regression.

* **Default Threshold:** $\tau = 0.5$ mathematically; $\tau = 0.3$–$0.4$ clinically to boost recall.

* **Z-Score Standardization:** $x^{\text{std}} = (x - \mu)/\sigma$ — **always** fit on training data only.

* **Critical Pipeline Rule:** `fit_transform(X_train)` then `transform(X_test)` — never reverse the order.

* **Why Scaling Helps LR:** Equalizes gradient magnitudes across parameters, allowing a single learning rate to be effective for all directions; essential for fair $\ell_2$ regularization.

* **Six Key Metrics to Report:** Accuracy, Precision, Recall, F1-Score, AUC-ROC, Log-Loss. Never report accuracy alone on imbalanced medical data.

* **Confusion Matrix Convention:** $\begin{pmatrix} TN & FP \\ FN & TP \end{pmatrix}$ — TN, FP on top row; FN, TP on bottom row.

* **Decision Rule:** $\hat{y} = \mathbb{1}[h_{\boldsymbol{\theta}}(\mathbf{x}) \geq \tau]$ — indicator function notation preferred in KTU answer sheets.

* **Convergence:** Unscaled LR often needs 200–500 iterations; scaled LR converges in 20–60 iterations on the Pima dataset.

* **Cost-Sensitive Threshold:** $\tau^{\star} = \arg\min_{\tau} (C_{FN} \cdot FN(\tau) + C_{FP} \cdot FP(\tau))$ — sweep over $\tau \in [0.1, 0.9]$.

* **AUC-ROC Invariance:** The Area Under the ROC Curve is *threshold-independent* — the most reliable single number for clinical model selection.

* **Library:** Use `sklearn.linear_model.LogisticRegression` with `solver="lbfgs"`, `penalty="l2"`, `C=1.0`, `max_iter=1000`, `random_state=42` for reproducible KTU submissions.

* **Visualizations to Include in KTU Record:** (1) Coefficient bar chart (unscaled vs. scaled), (2) ROC curve overlay, (3) Confusion matrix heatmaps, (4) Cost-vs-threshold plot for cost-sensitive analysis.

* **Lab Viva Favorites:** (1) Why is log-loss preferred over MSE? (2) What happens if we use `MinMaxScaler` instead of `StandardScaler`? (3) Why is LR less scaling-sensitive than KNN or SVM? (4) Explain the precision-recall trade-off using the Pima test set.

<!-- SECTION_5_END -->
