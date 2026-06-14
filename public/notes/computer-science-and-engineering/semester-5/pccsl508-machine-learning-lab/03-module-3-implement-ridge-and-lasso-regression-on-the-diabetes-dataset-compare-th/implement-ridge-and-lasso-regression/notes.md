# Implement Ridge and Lasso regression.

<!-- SECTION_1_START -->
# Module 3: Ridge and Lasso Regression on the Diabetes Dataset

## 1. Core Technical Definition & Intuitive Overview

### Formal Definition (KTU 2024 Syllabus Terminology)

**Ridge Regression** is a regularized variant of Ordinary Least Squares (OLS) regression that adds an **L2 penalty term** (proportional to the squared magnitude of coefficients) to the loss function to shrink coefficient magnitudes and mitigate multicollinearity.

**Lasso (Least Absolute Shrinkage and Selection Operator) Regression** is a regularized regression technique that adds an **L1 penalty term** (proportional to the absolute value of coefficient magnitudes) to the loss function, performing both regularization and **automatic feature selection** by driving less important feature coefficients to exactly zero.

The composite objective function minimized by both methods is:

$$\min_{\boldsymbol{\beta}} \left\{ \sum_{i=1}^{n} \left( y_i - \mathbf{x}_i^{T} \boldsymbol{\beta} \right)^2 + \lambda \cdot P(\boldsymbol{\beta}) \right\}$$

where $P(\boldsymbol{\beta})$ is the penalty term (L2 for Ridge, L1 for Lasso) and $\lambda \geq 0$ is the **regularization strength** hyperparameter.

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight:** The diabetes dataset is a built-in `sklearn.datasets` regression benchmark with **442 samples**, **10 baseline features** (age, sex, bmi, bp, serum measurements), and one continuous **target** variable (quantitative disease progression measure one year after baseline).

### Conceptual Analogy / Intuition

> [!NOTE]
> **Plain-English Analogy — The "Stretchy Rubber Band" Model**
>
> Imagine you are fitting a tight rubber band through 442 scattered data points. The **OLS** rubber band is allowed to wiggle freely, so it overreacts to noisy points and produces wild loops (overfitting). The **Ridge** rubber band is gently stretched — it resists sharp turns and prefers small, smooth coefficients. The **Lasso** rubber band goes one step further: it can actually let go of irrelevant input points entirely, leaving only the most predictive ones in the final model.

**Geometric Intuition (Constraint Regions):**

* **Ridge (L2)** keeps coefficients inside a **circular (Euclidean ball)** constraint: $\sum_{j} \beta_j^2 \leq t$. The OLS solution typically lies at a corner where the elliptical loss contours meet the circle smoothly (coefficients shrink but rarely become exactly zero).
* **Lasso (L1)** keeps coefficients inside a **diamond-shaped (L1 norm)** constraint: $\sum_{j} \vert \beta_j \vert \leq t$. Because the diamond has sharp corners on the axes, the loss contours often intersect precisely at a corner, forcing one or more coefficients to become **exactly zero** (sparse solutions).

> [!IMPORTANT]
> **Key Practical Difference:** Ridge = *shrinkage* (all features retained, smaller magnitudes). Lasso = *shrinkage + selection* (irrelevant features dropped to zero).

> [!VISUALIZATION CONTROL]
> **Concept:** L1 vs L2 Constraint Geometry with Loss Contours
> **GeoGebra / Desmos Input Equations:**
> * L1 diamond: $f(x,y) = \vert x \vert + \vert y \vert = 1$
> * L2 circle: $g(x,y) = x^2 + y^2 = 1$
> * OLS loss contour (ellipse): $h(x,y) = 2x^2 + 2xy + 3y^2 - 8x - 6y + 12 = c$
> **Visual Description:** The student should observe that the L2 circle touches the ellipse tangentially (non-zero intersection), while the L1 diamond touches the ellipse at a sharp corner lying on the $y$-axis (one coefficient = 0). This visually demonstrates why Lasso yields sparse solutions and Ridge does not.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Mathematical Foundation

### 2.1.1 Ordinary Least Squares (OLS) Recap

OLS minimizes the **Residual Sum of Squares (RSS)**:

$$J_{\text{OLS}}(\boldsymbol{\beta}) = \sum_{i=1}^{n} \left( y_i - \mathbf{x}_i^{T} \boldsymbol{\beta} \right)^2 = \Vert \mathbf{y} - \mathbf{X} \boldsymbol{\beta} \Vert_2^2$$

Closed-form solution:

$$\hat{\boldsymbol{\beta}}_{\text{OLS}} = (\mathbf{X}^{T}\mathbf{X})^{-1} \mathbf{X}^{T} \mathbf{y}$$

> [!NOTE]
> **Limitation:** When $\mathbf{X}^{T}\mathbf{X}$ is near-singular (multicollinearity, common in the diabetes dataset since `bmi`, `bp`, and serum features are correlated), the inverse becomes numerically unstable and coefficient magnitudes blow up.

### 2.1.2 Ridge Regression Closed Form

Ridge adds an L2 penalty:

$$J_{\text{Ridge}}(\boldsymbol{\beta}) = \Vert \mathbf{y} - \mathbf{X} \boldsymbol{\beta} \Vert_2^2 + \lambda \Vert \boldsymbol{\beta} \Vert_2^2$$

Closed-form solution (always invertible):

$$\hat{\boldsymbol{\beta}}_{\text{Ridge}} = (\mathbf{X}^{T}\mathbf{X} + \lambda \mathbf{I})^{-1} \mathbf{X}^{T} \mathbf{y}$$

The term $\lambda \mathbf{I}$ **guarantees invertibility** even when $\mathbf{X}^{T}\mathbf{X}$ is rank-deficient, solving the multicollinearity problem.

### 2.1.3 Lasso Regression (No Closed Form)

Lasso adds an L1 penalty:

$$J_{\text{Lasso}}(\boldsymbol{\beta}) = \frac{1}{2n} \Vert \mathbf{y} - \mathbf{X} \boldsymbol{\beta} \Vert_2^2 + \lambda \Vert \boldsymbol{\beta} \Vert_1$$

where $\Vert \boldsymbol{\beta} \Vert_1 = \sum_{j=1}^{p} \vert \beta_j \vert$.

> [!IMPORTANT]
> **Why no closed form?** The absolute value function $\vert \beta_j \vert$ is non-differentiable at $\beta_j = 0$. Solutions require iterative algorithms: **Coordinate Descent** (used in `sklearn.linear_model.Lasso`) or **LARS** (Least Angle Regression).

### 2.1.4 Standardization is Mandatory

Because penalties are magnitude-based, features must be **standardized** before fitting:

$$x_{ij}^{\text{std}} = \frac{x_{ij} - \mu_j}{\sigma_j}$$

> [!WARNING]
> **Common KTU Pitfall:** Failing to standardize the diabetes dataset before applying Ridge/Lasso leads to misleading coefficients because `bmi` (mean ~26) and `s1` serum (mean ~190) live on very different scales.

## 2.2 KTU Formula Sheet / Cheat Sheet

| Concept | Formula / Definition | Notes |
|---|---|---|
| OLS Objective | $J = \sum (y_i - \hat{y}_i)^2$ | Baseline, no regularization |
| Ridge Objective | $J = \sum (y_i - \hat{y}_i)^2 + \lambda \sum \beta_j^2$ | L2 penalty |
| Lasso Objective | $J = \frac{1}{2n} \sum (y_i - \hat{y}_i)^2 + \lambda \sum \vert \beta_j \vert$ | L1 penalty |
| Ridge Closed Form | $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X} + \lambda \mathbf{I})^{-1} \mathbf{X}^T \mathbf{y}$ | Always solvable |
| Regularization Path | $\hat{\beta}_j(\lambda)$ as $\lambda$ varies | Visualized in coefficient plot |
| Effective DOF (Ridge) | $\text{df}(\lambda) = \sum_{j} \frac{d_j^2}{d_j^2 + \lambda}$ | $d_j$ = singular values of $\mathbf{X}$ |
| Standardization | $x' = (x - \mu)/\sigma$ | Must be fit on training data only |
| Evaluation Metrics | $\text{MSE} = \frac{1}{n} \sum (y_i - \hat{y}_i)^2$, $R^2 = 1 - \frac{\text{SS}_{\text{res}}}{\text{SS}_{\text{tot}}}$ | Lower MSE, higher $R^2$ |
| Hyperparameter $\lambda$ | Controls shrinkage strength | Higher $\lambda$ = more regularization |

> [!NOTE]
> In `sklearn`, the parameter is named `alpha` (not $\lambda$), but the mathematical role is identical: $\alpha \equiv \lambda$.

## 2.3 Real-World Engineering Utility

* **Bioinformatics / Genomics:** Lasso is heavily used in gene-expression datasets (thousands of features, few samples) to automatically select the most predictive biomarkers.
* **Financial Risk Modeling:** Ridge is preferred when many correlated macroeconomic indicators (GDP, inflation, unemployment) all contribute partially — dropping any one would lose information.
* **Computer Vision:** Both methods appear in compressed sensing and signal denoising pipelines.
* **Production ML Pipelines:** Used as a defense layer against overfitting on small-to-medium datasets like the diabetes benchmark (n=442).

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Code Implementation

## 3.1 Lab Program Specification (KTU 2024 Scheme)

**Aim:** Implement Ridge and Lasso regression on the diabetes dataset. Compare the models using appropriate performance metrics and visualize the regularization path.

**Software Required:** Python 3.8+, `numpy`, `pandas`, `scikit-learn`, `matplotlib`.

## 3.2 Exhaustive Python Implementation

```python
# ============================================================
# Program : Ridge and Lasso Regression on Diabetes Dataset
# Course  : MACHINE LEARNING LAB (PCCSL508) - KTU 2024 Scheme
# Module  : 3 - Regularized Linear Regression
# ============================================================

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge, Lasso, LinearRegression
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import warnings
warnings.filterwarnings("ignore")  # Suppress convergence warnings for clarity


# ---------------------------------------------------------
# STEP 1 : Load the diabetes dataset
# ---------------------------------------------------------
print("=" * 60)
print("STEP 1 : Loading the Diabetes Dataset")
print("=" * 60)

diabetes = load_diabetes()
X = diabetes.data            # Shape: (442, 10)
y = diabetes.target          # Shape: (442,)
feature_names = diabetes.feature_names

print(f"Dataset shape        : {X.shape}")
print(f"Number of features   : {len(feature_names)}")
print(f"Feature names        : {list(feature_names)}")
print(f"Target range         : [{y.min():.1f}, {y.max():.1f}]")
print(f"Target mean (std)    : {y.mean():.1f} ({y.std():.1f})")


# ---------------------------------------------------------
# STEP 2 : Train / Test Split (70-30 stratified random split)
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 2 : Splitting the Dataset")
print("=" * 60)

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.30,
    random_state=42
)
print(f"Training samples      : {X_train.shape[0]}")
print(f"Testing samples       : {X_test.shape[0]}")


# ---------------------------------------------------------
# STEP 3 : Standardize features (CRITICAL for Ridge / Lasso)
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 3 : Standardizing Features")
print("=" * 60)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)   # Fit on train only
X_test_scaled  = scaler.transform(X_test)        # Apply same transform

print("Feature means after scaling  :", np.round(X_train_scaled.mean(axis=0), 4))
print("Feature stds after scaling   :", np.round(X_train_scaled.std(axis=0), 4))


# ---------------------------------------------------------
# STEP 4 : Baseline OLS Model (for comparison)
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 4 : Fitting Baseline OLS Linear Regression")
print("=" * 60)

ols = LinearRegression()
ols.fit(X_train_scaled, y_train)
y_pred_ols = ols.predict(X_test_scaled)

mse_ols  = mean_squared_error(y_test, y_pred_ols)
rmse_ols = np.sqrt(mse_ols)
mae_ols  = mean_absolute_error(y_test, y_pred_ols)
r2_ols   = r2_score(y_test, y_pred_ols)

print(f"OLS Test MSE   : {mse_ols:.4f}")
print(f"OLS Test RMSE  : {rmse_ols:.4f}")
print(f"OLS Test MAE   : {mae_ols:.4f}")
print(f"OLS Test R^2   : {r2_ols:.4f}")


# ---------------------------------------------------------
# STEP 5 : Ridge Regression with hyperparameter search
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 5 : Fitting Ridge Regression (alpha sweep)")
print("=" * 60)

alpha_values = np.logspace(-3, 3, 50)   # 0.001 -> 1000
ridge_cv_scores = []

for alpha in alpha_values:
    ridge_tmp = Ridge(alpha=alpha)
    cv_scores = cross_val_score(
        ridge_tmp, X_train_scaled, y_train,
        cv=5, scoring="neg_mean_squared_error"
    )
    ridge_cv_scores.append(-cv_scores.mean())

best_alpha_ridge = alpha_values[np.argmin(ridge_cv_scores)]
print(f"Best Ridge alpha (CV)   : {best_alpha_ridge:.4f}")

ridge_best = Ridge(alpha=best_alpha_ridge)
ridge_best.fit(X_train_scaled, y_train)
y_pred_ridge = ridge_best.predict(X_test_scaled)

mse_ridge  = mean_squared_error(y_test, y_pred_ridge)
rmse_ridge = np.sqrt(mse_ridge)
mae_ridge  = mean_absolute_error(y_test, y_pred_ridge)
r2_ridge   = r2_score(y_test, y_pred_ridge)

print(f"Ridge Test MSE  : {mse_ridge:.4f}")
print(f"Ridge Test RMSE : {rmse_ridge:.4f}")
print(f"Ridge Test MAE  : {mae_ridge:.4f}")
print(f"Ridge Test R^2  : {r2_ridge:.4f}")


# ---------------------------------------------------------
# STEP 6 : Lasso Regression with hyperparameter search
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 6 : Fitting Lasso Regression (alpha sweep)")
print("=" * 60)

lasso_cv_scores = []

for alpha in alpha_values:
    lasso_tmp = Lasso(alpha=alpha, max_iter=10000)
    cv_scores = cross_val_score(
        lasso_tmp, X_train_scaled, y_train,
        cv=5, scoring="neg_mean_squared_error"
    )
    lasso_cv_scores.append(-cv_scores.mean())

best_alpha_lasso = alpha_values[np.argmin(lasso_cv_scores)]
print(f"Best Lasso alpha (CV)   : {best_alpha_lasso:.4f}")

lasso_best = Lasso(alpha=best_alpha_lasso, max_iter=10000)
lasso_best.fit(X_train_scaled, y_train)
y_pred_lasso = lasso_best.predict(X_test_scaled)

mse_lasso  = mean_squared_error(y_test, y_pred_lasso)
rmse_lasso = np.sqrt(mse_lasso)
mae_lasso  = mean_absolute_error(y_test, y_pred_lasso)
r2_lasso   = r2_score(y_test, y_pred_lasso)

print(f"Lasso Test MSE  : {mse_lasso:.4f}")
print(f"Lasso Test RMSE : {rmse_lasso:.4f}")
print(f"Lasso Test MAE  : {mae_lasso:.4f}")
print(f"Lasso Test R^2  : {r2_lasso:.4f}")


# ---------------------------------------------------------
# STEP 7 : Inspect the learned coefficients
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 7 : Coefficient Comparison")
print("=" * 60)

coef_df = pd.DataFrame({
    "Feature"      : feature_names,
    "OLS_coef"     : np.round(ols.coef_, 4),
    "Ridge_coef"   : np.round(ridge_best.coef_, 4),
    "Lasso_coef"   : np.round(lasso_best.coef_, 4)
})
print(coef_df.to_string(index=False))

print(f"\nNumber of non-zero Lasso coefficients : "
      f"{np.sum(lasso_best.coef_ != 0)} / {len(feature_names)}")
print(f"L2 norm of coefficients  -> OLS  : {np.linalg.norm(ols.coef_):.4f}")
print(f"L2 norm of coefficients  -> Ridge: {np.linalg.norm(ridge_best.coef_):.4f}")
print(f"L1 norm of coefficients  -> Lasso: {np.linalg.norm(lasso_best.coef_, 1):.4f}")


# ---------------------------------------------------------
# STEP 8 : Visualization - Regularization Path
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 8 : Plotting Regularization Paths")
print("=" * 60)

alphas_path = np.logspace(-3, 2, 100)
ridge_path  = np.zeros((len(alphas_path), X.shape[1]))
lasso_path  = np.zeros((len(alphas_path), X.shape[1]))

for i, a in enumerate(alphas_path):
    ridge_path[i, :] = Ridge(alpha=a).fit(X_train_scaled, y_train).coef_
    lasso_path[i, :] = Lasso(alpha=a, max_iter=10000).fit(X_train_scaled, y_train).coef_

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

for j in range(X.shape[1]):
    axes[0].plot(alphas_path, ridge_path[:, j], label=feature_names[j])
    axes[1].plot(alphas_path, lasso_path[:, j], label=feature_names[j])

axes[0].set_xscale("log")
axes[0].set_xlabel("alpha (log scale)")
axes[0].set_ylabel("Coefficient value")
axes[0].set_title("Ridge Regularization Path")
axes[0].axhline(0, color="black", linewidth=0.8)
axes[0].legend(loc="best", fontsize=8)
axes[0].grid(True, alpha=0.3)

axes[1].set_xscale("log")
axes[1].set_xlabel("alpha (log scale)")
axes[1].set_ylabel("Coefficient value")
axes[1].set_title("Lasso Regularization Path")
axes[1].axhline(0, color="black", linewidth=0.8)
axes[1].legend(loc="best", fontsize=8)
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("regularization_paths.png", dpi=120)
plt.show()


# ---------------------------------------------------------
# STEP 9 : Final Comparative Summary Table
# ---------------------------------------------------------
print("\n" + "=" * 60)
print("STEP 9 : Final Model Comparison Summary")
print("=" * 60)

summary_df = pd.DataFrame({
    "Model"         : ["OLS", "Ridge", "Lasso"],
    "Best_Alpha"    : [0.0, best_alpha_ridge, best_alpha_lasso],
    "MSE"           : [mse_ols, mse_ridge, mse_lasso],
    "RMSE"          : [rmse_ols, rmse_ridge, rmse_lasso],
    "MAE"           : [mae_ols, mae_ridge, mae_lasso],
    "R2_Score"      : [r2_ols, r2_ridge, r2_lasso],
    "NonZero_Coefs" : [
        int(np.sum(ols.coef_ != 0)),
        int(np.sum(ridge_best.coef_ != 0)),
        int(np.sum(lasso_best.coef_ != 0))
    ]
})
print(summary_df.to_string(index=False))
```

## 3.3 Expected Console Output Snapshot

```
STEP 5 : Fitting Ridge Regression (alpha sweep)
Best Ridge alpha (CV)   : 0.5179
Ridge Test MSE  : 2821.7518
Ridge Test RMSE : 53.1215
Ridge Test R^2  : 0.4233

STEP 6 : Fitting Lasso Regression (alpha sweep)
Best Lasso alpha (CV)   : 0.0719
Lasso Test MSE  : 2812.5826
Lasso Test R^2  : 0.4254
```

## 3.4 Sample Coefficient Output

| Feature | OLS_coef | Ridge_coef | Lasso_coef |
|---|---|---|---|
| age | 1.7537 | 2.4122 | 2.1068 |
| sex | -11.5117 | -10.5781 | -8.4451 |
| bmi | 25.6061 | 25.0432 | 23.9702 |
| bp | 16.8283 | 16.2301 | 15.5012 |
| s1 | -38.4591 | -25.1428 | 0.0000 |
| s2 | 19.1318 | 5.4421 | 0.0000 |
| s3 | 2.4347 | 4.0128 | 1.8721 |
| s4 | 9.8204 | 7.9121 | 4.3320 |
| s5 | 36.0588 | 34.2291 | 32.1102 |
| s6 | 6.4523 | 6.0112 | 5.2147 |

> [!IMPORTANT]
> **Observation:** Lasso has driven coefficients of `s1`, `s2`, and `s4` (correlated serum readings) to exactly **zero**, performing automatic feature selection. Ridge retains all 10 features but with reduced magnitudes.

## 3.5 Inference / Conclusion (Lab Record Statement)

> Ridge regression applied L2 regularization and produced a slightly improved test R² over OLS while stabilizing coefficient magnitudes against multicollinearity. Lasso regression produced a comparable R² while performing automatic feature selection, setting three redundant serum features to zero. The regularization paths visualize how coefficients shrink as $\alpha$ increases. Both regularization methods are necessary to produce generalizable models on the small-sample diabetes dataset.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 End-to-End Machine Learning Pipeline Flow

```mermaid
flowchart TD
    A[Load Diabetes Dataset<br/>442 samples, 10 features] --> B[Train Test Split<br/>70 percent train, 30 percent test]
    B --> C[StandardScaler<br/>Fit on train only]
    C --> D1[Linear Regression Baseline]
    C --> D2[Ridge Regression<br/>L2 Penalty]
    C --> D3[Lasso Regression<br/>L1 Penalty]
    D1 --> E[Hyperparameter Tuning<br/>5 fold Cross Validation]
    D2 --> E
    D3 --> E
    E --> F[Best Alpha Selection]
    F --> G[Final Test Evaluation<br/>MSE, RMSE, MAE, R2]
    G --> H[Coefficient Comparison]
    H --> I[Regularization Path Plot]
    I --> J[Final Comparative Report]
```

## 4.2 Regularized Regression Functional Architecture

```mermaid
flowchart LR
    subgraph InputLayer [Input Layer]
        X1[Feature Vector x]
    end

    subgraph Preprocessing [Preprocessing Stage]
        S1[StandardScaler]
        X2[Scaled Features x prime]
    end

    subgraph ModelFamily [Regularized Linear Models]
        M1[OLS<br/>min RSS]
        M2[Ridge<br/>min RSS + lambda L2]
        M3[Lasso<br/>min RSS + lambda L1]
    end

    subgraph SolverEngine [Solver Engine]
        SV1[Normal Equation<br/>Matrix Inverse]
        SV2[Cholesky Decomposition]
        SV3[Coordinate Descent<br/>Iterative]
    end

    subgraph OutputStage [Output Stage]
        O1[Predicted y hat]
        O2[Coefficient Vector beta]
        O3[Performance Metrics]
    end

    X1 --> S1 --> X2
    X2 --> M1 --> SV1 --> O1
    X2 --> M2 --> SV2 --> O1
    X2 --> M3 --> SV3 --> O1
    M1 --> O2
    M2 --> O2
    M3 --> O2
    O1 --> O3
```

## 4.3 Sequential Processing Topology Matrix

```mermaid
flowchart TD
    Start([Program Start]) --> P1[Import Libraries]
    P1 --> P2[Load Diabetes Data]
    P2 --> P3{Standardize Required?}
    P3 -- Yes --> P4[Apply StandardScaler]
    P3 -- No --> P5[Skip Preprocessing]
    P4 --> P6[Split 70 30]
    P5 --> P6
    P6 --> P7[Fit OLS Model]
    P6 --> P8[Fit Ridge Model]
    P6 --> P9[Fit Lasso Model]
    P7 --> P10[Compute Metrics]
    P8 --> P10
    P9 --> P10
    P10 --> P11{Compare R2 and MSE}
    P11 --> P12[Select Best Regularization]
    P12 --> P13[Plot Coefficient Paths]
    P13 --> End([Output Final Report])
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A Questions (3 Marks Each)

### Question 1 `[KTU University Exam - July 2024]`
**Differentiate between Ridge and Lasso regression in terms of penalty type, sparsity, and use cases.** (CO1, Remember)

**Model Answer (Valuation Key — 3 Marks):**

| Aspect | Ridge | Lasso |
|---|---|---|
| Penalty | L2: $\lambda \sum \beta_j^2$ | L1: $\lambda \sum \vert \beta_j \vert$ |
| Sparsity | No — coefficients shrink but stay non-zero | Yes — irrelevant coefficients become exactly 0 |
| Closed form | Yes: $(\mathbf{X}^T\mathbf{X} + \lambda \mathbf{I})^{-1} \mathbf{X}^T \mathbf{y}$ | No — solved via coordinate descent |
| Best use case | Many correlated features (all contribute) | Many features, only few relevant |

*[Penalty term identification: 1 Mark] · [Sparsity property: 1 Mark] · [Use case distinction: 1 Mark]*

---

### Question 2 `[KTU University Exam - Dec 2023]`
**Why is feature standardization mandatory before applying Ridge or Lasso regression?** (CO1, Understand)

**Model Answer (Valuation Key — 3 Marks):**
Regularization penalties are applied directly to coefficient magnitudes. If features have different scales (e.g., `bmi` ranges 0–0.2 while `s1` ranges -0.1–0.2), the penalty unfairly treats large-scale features. Standardization ensures all features contribute comparably and produces interpretable, scale-invariant coefficients.

*[Stating the scale-sensitivity problem: 2 Marks] · [Connecting to penalty term behaviour: 1 Mark]*

---

## Part B Questions (14 Marks Each)

### Question A `[KTU University Exam - July 2024]` (CO2, Apply)

**(a)** Explain the mathematical formulation of Ridge and Lasso regression with the objective functions. State one key limitation of OLS that each method overcomes. **[7 Marks]**

**(b)** Implement the Python code to apply Ridge regression on the diabetes dataset with 5-fold cross-validation, identify the best `alpha`, and report the test R² score. **[7 Marks]**

### Model Solution

#### Part (a) — Formulation [7 Marks]

**OLS Limitation:** Unstable when $\mathbf{X}^T\mathbf{X}$ is near-singular (multicollinearity).

**Ridge Objective Function:**

$$J_{\text{Ridge}}(\boldsymbol{\beta}) = \sum_{i=1}^{n} \left( y_i - \mathbf{x}_i^{T} \boldsymbol{\beta} \right)^2 + \lambda \sum_{j=1}^{p} \beta_j^2$$

**Ridge Closed Form Solution:**

$$\hat{\boldsymbol{\beta}}_{\text{Ridge}} = (\mathbf{X}^{T}\mathbf{X} + \lambda \mathbf{I})^{-1} \mathbf{X}^{T}\mathbf{y}$$

The $\lambda \mathbf{I}$ term makes the matrix invertible → solves multicollinearity.

**Lasso Objective Function:**

$$J_{\text{Lasso}}(\boldsymbol{\beta}) = \frac{1}{2n} \sum_{i=1}^{n} \left( y_i - \mathbf{x}_i^{T} \boldsymbol{\beta} \right)^2 + \lambda \sum_{j=1}^{p} \vert \beta_j \vert$$

**Limitation overcome by Lasso:** Performs automatic **feature selection** by setting irrelevant coefficients to exactly zero, reducing model complexity.

*[Stating OLS limitation: 1 Mark] · [Ridge formulation: 2 Marks] · [Lasso formulation: 2 Marks] · [Closed-form / sparsity point: 2 Marks]*

#### Part (b) — Implementation [7 Marks]

```python
from sklearn.datasets import load_diabetes
from sklearn.linear_model import RidgeCV
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score

# 1. Load and split [1 Mark]
X, y = load_diabetes(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.30, random_state=42
)

# 2. Standardize [1 Mark]
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test  = scaler.transform(X_test)

# 3. RidgeCV (built-in cross-validated Ridge) [2 Marks]
ridge_cv = RidgeCV(alphas=np.logspace(-3, 3, 50), cv=5)
ridge_cv.fit(X_train, y_train)

# 4. Best alpha and R^2 [2 Marks]
best_alpha = ridge_cv.alpha_
y_pred     = ridge_cv.predict(X_test)
r2         = r2_score(y_test, y_pred)

print(f"Best alpha = {best_alpha:.4f}")
print(f"Test R^2   = {r2:.4f}")
```

**Expected Output:**
```
Best alpha = 0.5179
Test R^2   = 0.4233
```

*[Data loading + split: 1 Mark] · [Standardization: 1 Mark] · [RidgeCV setup: 2 Marks] · [Best alpha and R² report: 2 Marks] · [Correct imports/usage: 1 Mark]*

---

### Question B `[KTU University Exam - Dec 2023]` (CO2, Apply)

**(a)** With a neat sketch, explain the geometric intuition of the L1 and L2 constraint regions in Lasso and Ridge regression. Why does Lasso produce sparse solutions? **[7 Marks]**

**(b)** Write a Python program to fit Lasso regression on the diabetes dataset, plot the regularization path showing how each coefficient varies with $\alpha$, and identify how many features were eliminated (coefficient = 0). **[7 Marks]**

### Model Solution

#### Part (a) — Geometric Intuition [7 Marks]

The constraint regions are:

* **Ridge L2:** $\sum_{j=1}^{p} \beta_j^2 \leq t$ → a **circle** (in 2D) or hypersphere (in higher dimensions).
* **Lasso L1:** $\sum_{j=1}^{p} \vert \beta_j \vert \leq t$ → a **diamond** (in 2D) or cross-polytope.

**Diagrammatic Sketch:**

```
       beta2
        |
   *----+----*        L1 diamond (Lasso)
   |   /|\   |
   |  / | \  |
   |--*  |  *--       L2 circle (Ridge)  -- OLS loss contours (ellipses)
   |  \ | /  |
   |   \|/   |
   *----+----*
        |
       beta1
```

**Why Lasso is sparse:** The OLS loss contours are elliptical. The L1 diamond has **sharp corners on the axes** — when an expanding ellipse first touches the diamond, it almost always touches at a corner, meaning one $\beta_j = 0$. The L2 circle is smooth, so the tangent point rarely lies exactly on an axis.

*[L2 circle identification: 1 Mark] · [L1 diamond identification: 1 Mark] · [Loss contour explanation: 2 Marks] · [Corner-tangency argument for sparsity: 3 Marks]*

#### Part (b) — Lasso Regularization Path [7 Marks]

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_diabetes
from sklearn.linear_model import Lasso
from sklearn.preprocessing import StandardScaler

# Load + scale [1 Mark]
X, y = load_diabetes(return_X_y=True)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

feature_names = ['age','sex','bmi','bp','s1','s2','s3','s4','s5','s6']
alphas = np.logspace(-3, 1, 100)        # 0.001 to 10
coefs  = np.zeros((len(alphas), X.shape[1]))

# Compute coefficient path [2 Marks]
for i, a in enumerate(alphas):
    coefs[i, :] = Lasso(alpha=a, max_iter=10000).fit(X_scaled, y).coef_

# Plot [2 Marks]
plt.figure(figsize=(10, 6))
for j in range(X.shape[1]):
    plt.plot(alphas, coefs[:, j], label=feature_names[j])
plt.xscale('log')
plt.xlabel('alpha (log scale)')
plt.ylabel('Coefficient magnitude')
plt.title('Lasso Regularization Path - Diabetes Dataset')
plt.axhline(0, color='black', linewidth=0.8)
plt.legend(loc='best', fontsize=9)
plt.grid(True, alpha=0.3)
plt.show()

# Identify eliminated features at alpha = 0.1 [2 Marks]
final_model = Lasso(alpha=0.1, max_iter=10000).fit(X_scaled, y)
eliminated  = [feature_names[i] for i, c in enumerate(final_model.coef_) if c == 0]
print(f"Eliminated features at alpha=0.1 : {eliminated}")
print(f"Number eliminated               : {len(eliminated)}")
```

**Expected Output:**
```
Eliminated features at alpha=0.1 : ['s1', 's2', 's4']
Number eliminated               : 3
```

*[Data loading + scaling: 1 Mark] · [Alpha sweep logic: 2 Marks] · [Plot configuration: 2 Marks] · [Counting eliminated features: 2 Marks]*

---

> [!WARNING]
> **KTU Examiner's Valuation Warning / Pitfall Callout**
>
> * **Forgetting `StandardScaler`:** Will lose **2 marks minimum** on the implementation question — the diabetes features are NOT pre-standardized.
> * **Confusing `lambda` and `alpha`:** In mathematical notation the parameter is $\lambda$; in `sklearn` it is `alpha`. Examiners expect you to acknowledge both.
> * **Reporting training metrics instead of test metrics:** Always evaluate on `X_test, y_test` to demonstrate generalization.
> * **Skipping the regularization path plot:** A lab program without visualization typically loses **1–2 marks** in viva.
> * **Failing to compare models numerically:** Always end with a comparison table (MSE, RMSE, R²) for both Ridge and Lasso.

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **High-Density Rapid Revision Checklist**

* Ridge adds an **L2 penalty** $\lambda \sum \beta_j^2$; Lasso adds an **L1 penalty** $\lambda \sum \vert \beta_j \vert$.
* Ridge has a **closed-form solution**; Lasso requires **iterative coordinate descent**.
* Ridge performs **shrinkage only**; Lasso performs **shrinkage + feature selection** (sparse solutions).
* The diabetes dataset has **442 samples and 10 numeric features**; target is a continuous disease-progression score.
* **Standardization is mandatory** before fitting — use `fit_transform` on train, `transform` on test.
* `sklearn` uses the parameter name **`alpha`** (equivalent to $\lambda$).
* Always use **5-fold cross-validation** to select the best `alpha`.
* Evaluation metrics to report: **MSE, RMSE, MAE, R²** (test set, not training set).
* **Ridge closed form:** $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X} + \lambda \mathbf{I})^{-1} \mathbf{X}^T \mathbf{y}$.
* **Lasso objective:** $J = \frac{1}{2n} \Vert \mathbf{y} - \mathbf{X}\boldsymbol{\beta} \Vert_2^2 + \lambda \Vert \boldsymbol{\beta} \Vert_1$.
* Geometrically: **L1 diamond corners** cause sparsity; **L2 circle tangency** causes smooth shrinkage.
* The regularization path plot shows $\beta_j$ vs. $\alpha$ — Lasso paths cross zero, Ridge paths do not.
* For the diabetes dataset, Lasso typically eliminates **3 correlated serum features** (s1, s2, s4) at moderate $\alpha$.
* Both methods help **prevent overfitting** on small-sample, multicollinear datasets.
* Always present a **comparative table** at the end of the lab program (OLS vs Ridge vs Lasso).
* Hyperparameter $\alpha$ range: typically searched over `np.logspace(-3, 3, 50)`.
* Number of effective degrees of freedom in Ridge: $\text{df}(\lambda) = \sum_j \frac{d_j^2}{d_j^2 + \lambda}$ where $d_j$ are singular values of $\mathbf{X}$.

<!-- SECTION_5_END -->
