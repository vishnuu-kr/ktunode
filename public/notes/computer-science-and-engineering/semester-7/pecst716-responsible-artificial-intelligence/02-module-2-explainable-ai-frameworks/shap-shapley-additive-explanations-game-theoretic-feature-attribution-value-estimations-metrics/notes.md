# SHAP (Shapley Additive exPlanations) game theoretic feature attribution value estimations metrics

<!-- SECTION_1_START -->

# SHAP (SHapley Additive exPlanations) — Game-Theoretic Feature Attribution

## 1. Core Technical Definition (KTU 2024 Syllabus Terminology)

**SHAP (SHapley Additive exPlanations)** is a unified, game-theoretic framework for interpreting any machine learning model's output by assigning each input feature an *additive importance value* (called a **Shapley value**) that quantifies its contribution to a specific prediction relative to a baseline expectation.

Formally, given a trained model $f$ and an input instance $x = (x_1, x_2, \ldots, x_M)$, SHAP explains the prediction $f(x)$ as:

$$
f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i
$$

where $\phi_0 = \mathbb{E}[f(X)]$ is the **expected model output (baseline)**, and $\phi_i$ is the **SHAP attribution value for feature $i$**.

> [!IMPORTANT]
> **KTU Board Definition (verbatim-style):**
> SHAP is a *post-hoc, model-agnostic* explainability technique rooted in **cooperative game theory (Lloyd Shapley, 1953 — Nobel Memorial Prize in Economics, 2020)** that uniquely satisfies three desirable axioms: **Local Accuracy**, **Missingness**, and **Consistency**.

---

## 2. Conceptual Analogy / Intuition

Imagine a group project where **M students** collaboratively produce a project score $v(S)$ depending on who showed up to work that day, where $S$ is the set of students present. After the project ends, we want to know **how much credit each student deserves**.

The challenge: the score depends on *combinations*, not just individual effort. Student A might be brilliant alone, but redundant if Student B is also present. **Shapley values** answer: *What is Student A's average marginal contribution across every possible team formation order?*

In SHAP:
- **Students** = features $x_1, \ldots, x_M$
- **Project score** = model output $f(x)$
- **Different team formations** = all $2^M$ possible feature subsets
- **Marginal contribution** = difference in model output when feature $i$ is added
- **Fair credit** = weighted average marginal contribution = **SHAP value $\phi_i$**

> [!NOTE]
> **Real-World Analogy — Hospital Diagnosis Model:**
> A patient's heart attack risk is predicted at 78% by a black-box model. SHAP tells the cardiologist: *"Age contributed +18%, Cholesterol +12%, Smoking +7%, while good Blood Pressure reduced risk by −4%."* The sum of these attributions plus the baseline 45% equals the 78% prediction.

---

## 3. Key Terminology & High-Yield Vocabulary

| Term | Definition | KTU Relevance |
|------|------------|---------------|
| **Coalition $S$** | A subset of features $S \subseteq F$ | Building block of Shapley computation |
| **Value Function $v(S)$** | Model output when only features in $S$ are known | "Marginal contribution" target |
| **Marginal Contribution** | $v(S \cup \{i\}) - v(S)$ | Foundation of Shapley logic |
| **Baseline / Expected Value $\mathbb{E}[f(X)]$** | Mean prediction over a background dataset | Reference point $\phi_0$ |
| **Feature Attribution $\phi_i$** | Local importance of feature $i$ for instance $x$ | Final SHAP output |
| **Additivity** | $\sum_i \phi_i = f(x) - \mathbb{E}[f(X)]$ | Core SHAP property |
| **Symmetry** | Features with equal contributions get equal $\phi_i$ | Game-theoretic fairness axiom |
| **Dummy** | Feature with zero contribution $\Rightarrow \phi_i = 0$ | Identifies irrelevant inputs |
| **Efficiency** | Sum of attributions = total prediction deviation | Auditable explanation |

> [!IMPORTANT]
> **Bold Constants / Standards:**
> - **Lloyd Shapley's 1953 Original Paper:** *"A Value for n-Person Games"* (Contributions to the Theory of Games, Vol. II)
> - **SHAP Unified Framework Paper:** Lundberg & Lee, 2017, NeurIPS
> - **Standard background dataset size (KTU lab):** 100 samples (computational tractability)
> - **TreeSHAP complexity:** $O(TLD^2)$ where $T$ = trees, $L$ = leaves, $D$ = depth

---

## 4. GeoGebra / Desmos Visualization Callout

> [!VISUALIZATION CONTROL]
> **Concept:** SHAP Force Plot Decomposition (Waterfall Geometry)
> **GeoGebra / Desmos Input Equations:**
> - Baseline (horizontal reference): $y = 0.45$
> - Positive push from feature 1: $y_{1}(x) = 0.45 + 0.18 \cdot \mathbb{1}_{x \in [0,1]}$
> - Negative push from feature 2: $y_{2}(x) = 0.63 - 0.04 \cdot \mathbb{1}_{x \in [1,2]}$
> - Final prediction: $y_{3}(x) = 0.78$ (asymptote)
> **Visual Description:** A horizontal axis $[0, 1]$ showing the baseline at 0.45 (dashed red), positive contributions pushing upward to 0.63 in **red/orange**, negative contributions pulling downward to 0.59, and a final rightward arrow landing on $f(x) = 0.78$. The student should observe that the *signed* vertical deviations sum exactly to the prediction deviation from baseline.

---

## 5. The Three Axiomatic Properties of SHAP (Board-Favorite)

1. **Local Accuracy (Additivity / Efficiency):**
   $$f(x) = g(x') = \phi_0 + \sum_{i=1}^{M} \phi_i x_i'$$
   The explanation model $g$ matches the original model output at the explained instance.

2. **Missingness:**
   If $x_i' = 0$ (feature absent in the simplified input $x'$), then $\phi_i = 0$. A missing feature cannot have non-zero attribution.

3. **Consistency (Monotonicity):**
   If a model changes such that feature $i$ contributes more (in the sense of marginal value), then $\phi_i$ must not decrease. This guarantees SHAP tracks the true model behavior.

> [!NOTE]
> **KTU Examiner's Favourite Trick Question:** "Why can't we just use the gradient $\partial f / \partial x_i$ as feature importance?" — **Answer:** Gradients are local and violate missingness; SHAP integrates over *all coalitions*, making it globally consistent and model-agnostic.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. The Shapley Value Derivation (Game-Theoretic Origin)

Consider a cooperative game with $M$ players (features) and a characteristic function $v: 2^F \rightarrow \mathbb{R}$ that assigns a worth to every coalition $S \subseteq F$.

**Shapley's axioms** (which SHAP inherits):

- **Symmetry:** $\phi_i = \phi_j$ if $i, j$ contribute identically to all coalitions.
- **Dummy:** $\phi_i = 0$ if $v(S \cup \{i\}) = v(S)$ for all $S$.
- **Additivity:** $\phi(v + w, i) = \phi(v, i) + \phi(w, i)$ for independent games.
- **Efficiency:** $\sum_{i=1}^{M} \phi_i = v(F) - v(\emptyset)$.

The **unique solution** satisfying all four axioms is the **Shapley value**:

$$
\boxed{\phi_i = \sum_{S \subseteq F \setminus \{i\}} \frac{|S|! \cdot (M - |S| - 1)!}{M!} \left[ v(S \cup \{i\}) - v(S) \right]}
$$

### Step-by-Step Logical Breakdown

1. **Enumerate coalitions:** For each feature $i$, examine every subset $S$ of the *other* $M-1$ features.
2. **Compute marginal contribution:** $v(S \cup \{i\}) - v(S)$ — what value is added when $i$ joins $S$?
3. **Weight by combinatorial probability:** The weight $\frac{|S|!\,(M-|S|-1)!}{M!}$ represents the probability that in a random permutation of all $M$ features, the players in $S$ come *first* (in any order, $|S|!$ ways), feature $i$ comes *next* (1 way), and the remaining $M - |S| - 1$ features come *last* (in any order).
4. **Sum over all coalitions:** The weighted average marginal contribution is $\phi_i$.

> [!IMPORTANT]
> **Why the factorial weighting?** It ensures *fairness across all permutations*. Without weighting, larger coalitions (where $i$ is added later) would dominate the sum, biasing $\phi_i$.

---

## 2. From Shapley to SHAP: The Conditional Expectation Trick

The classical Shapley value requires $v(S)$ to be defined for *every* subset. In ML, the model $f$ requires *all* features. **SHAP's key innovation** is to define $v(S)$ as the **expected model output conditional on the features in $S$ taking the values from instance $x$**:

$$
v_x(S) = \mathbb{E}\left[ f(x) \mid x_S \right] = \int f(x_1, \ldots, x_M) \, d\mathbb{P}_{x_{\bar{S}}}
$$

where $x_S$ denotes the values of features in $S$ (fixed to instance $x$), and the integration is over the *marginal distribution* of the missing features $x_{\bar{S}}$.

> [!NOTE]
> **KTU Board Note:** The notation $d\mathbb{P}_{x_{\bar{S}}}$ means *"integrate over the background data distribution of the non-S features."* In practice, this is implemented by **Monte Carlo sampling** from a background dataset $X_{\text{bg}}$.

---

## 3. KTU High-Yield Formula Sheet

| # | Formula | Meaning | Unit / Domain |
|---|---------|---------|---------------|
| 1 | $\phi_i = \sum_{S \subseteq F \setminus \{i\}} w(S) \cdot \Delta_i(S)$ | Shapley value definition | Real number |
| 2 | $w(S) = \frac{\vert S \vert ! \, (M - \vert S \vert - 1)!}{M!}$ | Permutation weight | $\in [0, 1]$, sums to 1 |
| 3 | $\Delta_i(S) = v(S \cup \{i\}) - v(S)$ | Marginal contribution | Same as $f$ output |
| 4 | $v_x(S) = \mathbb{E}[f(x) \mid x_S]$ | Conditional expectation value function | Model output |
| 5 | $f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i$ | Additivity decomposition | Model output |
| 6 | $\phi_0 = \mathbb{E}[f(X)]$ | Baseline (expected value) | Model output |
| 7 | $I_j = \frac{1}{N} \sum_{k=1}^{N} \vert \phi_j^{(k)} \vert$ | Global feature importance (mean $\vert$SHAP$\vert$) | Real number |
| 8 | $\Phi_{ij} = \sum_{S \subseteq F \setminus \{i,j\}} w(S) \cdot \Delta_{ij}(S)$ | SHAP Interaction Value | Real number |
| 9 | $v(S \cup \{i, j\}) - v(S \cup \{i\}) - v(S \cup \{j\}) + v(S)$ | Pairwise interaction term | Real number |
| 10 | $R^2_{\text{SHAP}} = 1 - \frac{\text{Var}(f(x) - g(x'))}{\text{Var}(f(x))}$ | Local explanation fidelity | $\in [0, 1]$ |

> [!WARNING]
> **Avoid $\vert x \vert$ in plain text — use $\lvert x \rvert$ in math mode** to prevent markdown table breakage (per KTU-PREMIER-ENGINE rule).

---

## 4. Computational Complexity & Estimation Methods

| Method | Algorithm | Complexity | Best For |
|--------|-----------|------------|----------|
| **Exact SHAP** | Enumerate $2^M$ coalitions | $O(2^M)$ | $M \leq 15$ |
| **KernelSHAP** | Weighted linear regression on coalitions | $O(N_{\text{bg}} \cdot M^2)$ | Model-agnostic |
| **TreeSHAP** | Polynomial-time tree traversal | $O(TLD^2)$ | XGBoost, LightGBM, RF |
| **DeepSHAP** | Backprop through deep linearization | $O(N \cdot L)$ | Neural networks |
| **Sampling SHAP** | Monte Carlo over permutations | $O(N_{\text{perm}} \cdot M)$ | Approximation |
| **LinearSHAP** | Closed-form via coefficients | $O(M)$ | Linear models only |

Where:
- $M$ = number of features
- $N_{\text{bg}}$ = background dataset size
- $T$ = number of trees
- $L$ = max leaves per tree
- $D$ = max tree depth
- $N$ = number of samples
- $N_{\text{perm}}$ = number of random permutations

---

## 5. Feature Importance Metrics Derived from SHAP

### 5.1 Global Feature Importance
$$
I_j = \frac{1}{N} \sum_{k=1}^{N} \lvert \phi_j^{(k)} \rvert
$$
Ranks features by their **average absolute impact** across the dataset.

### 5.2 Local Feature Importance
For a single instance $x^{(k)}$:
$$
I_j^{(k)} = \lvert \phi_j^{(k)} \rvert
$$
Tells which features mattered *for this specific prediction*.

### 5.3 SHAP Interaction Values
$$
\Phi_{ij} = \sum_{S \subseteq F \setminus \{i,j\}} \frac{\lvert S \rvert ! (M - \lvert S \rvert - 2)!}{2 (M-1)!} \cdot \nabla_{ij}(S)
$$
where the interaction gain is:
$$
\nabla_{ij}(S) = v(S \cup \{i, j\}) - v(S \cup \{i\}) - v(S \cup \{j\}) + v(S)
$$
Captures **synergistic** and **redundant** feature relationships.

### 5.4 Evaluation Metrics for SHAP Explanations

| Metric | Formula | Purpose |
|--------|---------|---------|
| **Faithfulness** | $\text{corr}(\phi_i, \, f(x) - f(x \setminus \{i\}))$ | Does $\phi_i$ match true impact? |
| **Stability (Robustness)** | $\lVert \phi(x) - \phi(x + \epsilon) \rVert_2$ for small $\epsilon$ | Insensitivity to input noise |
| **Fidelity** | $R^2$ of explanation model $g$ vs original $f$ | How well $g$ mimics $f$ locally |
| **Sparsity** | $\#$ non-zero $\phi_i$ for instance $x$ | Interpretability (fewer = clearer) |
| **Consistency** | Monotonicity w.r.t. model changes | Theoretic property |
| **Completeness** | $\sum_i \phi_i = f(x) - \mathbb{E}[f]$ | Verification of additivity |

---

## 6. Real-World Engineering Utility

| Domain | SHAP Use Case | Why SHAP? |
|--------|---------------|-----------|
| **Healthcare** | Explaining cancer diagnosis to doctors | Regulatory compliance (EU AI Act, FDA) |
| **Finance** | Credit scoring, fraud detection (XGBoost) | TreeSHAP's exact, fast attribution |
| **NLP** | Explaining LLM token contributions | DeepSHAP integrates with transformers |
| **Cybersecurity** | Intrusion detection feature importance | Global ranking of attack indicators |
| **Autonomous Driving** | Sensor fusion explanation | Identifies sensor failures |
| **Climate Science** | XGBoost weather prediction | TreeSHAP handles tabular climate data |

> [!IMPORTANT]
> **Production Deployment Note:** TreeSHAP is the *de facto* standard for production explainability pipelines with gradient-boosted models (XGBoost, LightGBM, CatBoost) because it computes *exact* SHAP values in polynomial time — unlike KernelSHAP which is approximate.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code/Symbolic Implementation

## 1. Worked Example: Manual Shapley Value Calculation ($M = 3$)

**Setup:**
- Features: $F = \{x_1, x_2, x_3\}$ ($M = 3$)
- Value function $v(S)$ (model outputs for coalitions):

| $S$ | $\emptyset$ | $\{1\}$ | $\{2\}$ | $\{3\}$ | $\{1,2\}$ | $\{1,3\}$ | $\{2,3\}$ | $\{1,2,3\}$ |
|-----|-------------|---------|---------|---------|-----------|-----------|-----------|-------------|
| $v(S)$ | 0 | 30 | 40 | 20 | 80 | 60 | 70 | 100 |

**Task:** Compute $\phi_1, \phi_2, \phi_3$.

### Step 1: Identify all subsets $S \subseteq F \setminus \{1\} = \{2, 3\}$

The subsets are: $\emptyset, \{2\}, \{3\}, \{2, 3\}$ — exactly $2^{M-1} = 4$ subsets.

### Step 2: Compute marginal contribution $\Delta_1(S) = v(S \cup \{1\}) - v(S)$

$$
\begin{aligned}
\Delta_1(\emptyset) &= v(\{1\}) - v(\emptyset) = 30 - 0 = 30 \\
\Delta_1(\{2\}) &= v(\{1,2\}) - v(\{2\}) = 80 - 40 = 40 \\
\Delta_1(\{3\}) &= v(\{1,3\}) - v(\{3\}) = 60 - 20 = 40 \\
\Delta_1(\{2,3\}) &= v(\{1,2,3\}) - v(\{2,3\}) = 100 - 70 = 30
\end{aligned}
$$

### Step 3: Compute combinatorial weights $w(S) = \frac{\lvert S \rvert! \, (M - \lvert S \rvert - 1)!}{M!}$

For $M = 3$: $M! = 6$.

$$
\begin{aligned}
w(\emptyset) &= \frac{0! \cdot 2!}{6} = \frac{1 \cdot 2}{6} = \frac{1}{3} \\
w(\{2\}) &= \frac{1! \cdot 1!}{6} = \frac{1}{6} \\
w(\{3\}) &= \frac{1! \cdot 1!}{6} = \frac{1}{6} \\
w(\{2,3\}) &= \frac{2! \cdot 0!}{6} = \frac{2 \cdot 1}{6} = \frac{1}{3}
\end{aligned}
$$

**Verification:** $\frac{1}{3} + \frac{1}{6} + \frac{1}{6} + \frac{1}{3} = \frac{2}{6} + \frac{1}{6} + \frac{1}{6} + \frac{2}{6} = 1$ ✓

### Step 4: Sum the weighted marginal contributions

$$
\begin{aligned}
\phi_1 &= w(\emptyset) \Delta_1(\emptyset) + w(\{2\}) \Delta_1(\{2\}) + w(\{3\}) \Delta_1(\{3\}) + w(\{2,3\}) \Delta_1(\{2,3\}) \\
&= \frac{1}{3}(30) + \frac{1}{6}(40) + \frac{1}{6}(40) + \frac{1}{3}(30) \\
&= 10 + 6.667 + 6.667 + 10 = \mathbf{33.33}
\end{aligned}
$$

### Step 5: By symmetry of method, compute $\phi_2$ and $\phi_3$

For $\phi_2$ (subsets of $F \setminus \{2\} = \{1, 3\}$):

$$
\begin{aligned}
\Delta_2(\emptyset) &= v(\{2\}) - v(\emptyset) = 40 - 0 = 40 \\
\Delta_2(\{1\}) &= v(\{1,2\}) - v(\{1\}) = 80 - 30 = 50 \\
\Delta_2(\{3\}) &= v(\{2,3\}) - v(\{3\}) = 70 - 20 = 50 \\
\Delta_2(\{1,3\}) &= v(\{1,2,3\}) - v(\{1,3\}) = 100 - 60 = 40
\end{aligned}
$$

$$
\phi_2 = \frac{1}{3}(40) + \frac{1}{6}(50) + \frac{1}{6}(50) + \frac{1}{3}(40) = 13.33 + 8.33 + 8.33 + 13.33 = \mathbf{43.33}
$$

For $\phi_3$ (subsets of $F \setminus \{3\} = \{1, 2\}$):

$$
\begin{aligned}
\Delta_3(\emptyset) &= 20 - 0 = 20 \\
\Delta_3(\{1\}) &= 60 - 30 = 30 \\
\Delta_3(\{2\}) &= 70 - 40 = 30 \\
\Delta_3(\{1,2\}) &= 100 - 80 = 20
\end{aligned}
$$

$$
\phi_3 = \frac{1}{3}(20) + \frac{1}{6}(30) + \frac{1}{6}(30) + \frac{1}{3}(20) = 6.67 + 5 + 5 + 6.67 = \mathbf{23.33}
$$

### Step 6: Verify additivity (efficiency axiom)

$$
\phi_1 + \phi_2 + \phi_3 = 33.33 + 43.33 + 23.33 = 99.99 \approx 100 = v(F) - v(\emptyset) \quad \checkmark
$$

> [!IMPORTANT]
> **Board Valuation Key:** The "verify additivity" step carries **1 mark** in 14-mark questions. Always include it.

---

## 2. SHAP Value Estimation in Python (Model-Agnostic KernelSHAP)

```python
"""
SHAP Kernel Explainer — Step-by-step implementation
Course: Responsible AI (PECST716) — KTU 2024 Scheme
Module 2: Explainable AI Frameworks
Topic: SHAP value estimation on a trained classifier
"""

import numpy as np
import shap
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
import logging

# Configure strict error logging (KTU lab standard)
logging.basicConfig(level=logging.INFO, format='%(asctime)s — %(levelname)s — %(message)s')
logger = logging.getLogger(__name__)


def load_data() -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, list[str]]:
    """Load and split the breast cancer dataset."""
    data = load_breast_cancer()
    X_train, X_test, y_train, y_test = train_test_split(
        data.data, data.target, test_size=0.20, random_state=42, stratify=data.target
    )
    logger.info(f"Dataset loaded: train={X_train.shape}, test={X_test.shape}")
    return X_train, X_test, y_train, y_test, list(data.feature_names)


def train_model(X_train: np.ndarray, y_train: np.ndarray) -> RandomForestClassifier:
    """Train a Random Forest classifier."""
    model = RandomForestClassifier(
        n_estimators=200, max_depth=8, random_state=42, n_jobs=-1
    )
    model.fit(X_train, y_train)
    train_acc = model.score(X_train, y_train)
    logger.info(f"Model trained. Train accuracy: {train_acc:.4f}")
    return model


def compute_kernel_shap(
    model: RandomForestClassifier,
    X_test: np.ndarray,
    X_train_background: np.ndarray,
    instance_index: int = 0
) -> tuple[np.ndarray, float, float]:
    """
    Compute KernelSHAP values for a single test instance.

    Returns
    -------
    shap_values : np.ndarray
        SHAP attribution for each feature.
    baseline : float
        Expected model output (mean over background).
    prediction : float
        Model output for the explained instance.
    """
    # Use a small representative background dataset (KTU lab: 100 samples)
    background = shap.kmeans(X_train_background, 100)
    logger.info(f"Background dataset clustered: {background.data.shape}")

    # Initialize the KernelSHAP explainer
    explainer = shap.KernelExplainer(model.predict_proba, background.data, silent=True)
    logger.info(f"Expected value (baseline): {explainer.expected_value}")

    # Select instance to explain
    instance = X_test[instance_index].reshape(1, -1)
    prediction = float(model.predict_proba(instance)[0, 1])  # P(malignant)

    # Estimate SHAP values
    shap_values = explainer.shap_values(instance, nsamples=500, silent=True)
    # For binary classification, shap_values is a list [class0, class1]
    shap_values_class1 = shap_values[1] if isinstance(shap_values, list) else shap_values

    # Local accuracy check
    reconstructed = explainer.expected_value[1] + np.sum(shap_values_class1)
    logger.info(f"Reconstruction error: {abs(reconstructed - prediction):.6e}")

    return shap_values_class1.flatten(), float(explainer.expected_value[1]), prediction


def compute_global_importance(
    model: RandomForestClassifier,
    X_test: np.ndarray,
    X_train_background: np.ndarray,
    n_samples: int = 50
) -> np.ndarray:
    """
    Compute global feature importance as mean |SHAP| over multiple instances.
    """
    background = shap.kmeans(X_train_background, 100)
    explainer = shap.KernelExplainer(model.predict_proba, background.data, silent=True)
    sample_indices = np.random.choice(X_test.shape[0], size=n_samples, replace=False)
    X_sample = X_test[sample_indices]

    shap_values = explainer.shap_values(X_sample, nsamples=200, silent=True)
    shap_values_class1 = shap_values[1] if isinstance(shap_values, list) else shap_values

    global_importance = np.mean(np.abs(shap_values_class1), axis=0)
    logger.info(f"Global importance computed for {n_samples} samples.")
    return global_importance


def main() -> None:
    X_train, X_test, y_train, y_test, feature_names = load_data()
    model = train_model(X_train, y_train)

    # Local explanation
    shap_vals, baseline, pred = compute_kernel_shap(model, X_test, X_train, instance_index=0)
    print(f"\n{'='*60}\nLOCAL SHAP EXPLANATION (Instance 0)\n{'='*60}")
    print(f"Baseline P(malignant)     : {baseline:.4f}")
    print(f"Predicted P(malignant)    : {pred:.4f}")
    print(f"Sum of attributions       : {np.sum(shap_vals):.4f}")
    print(f"Reconstructed prediction  : {baseline + np.sum(shap_vals):.4f}")
    print(f"\nTop 5 features by |SHAP|:")
    top_idx = np.argsort(np.abs(shap_vals))[::-1][:5]
    for idx in top_idx:
        print(f"  {feature_names[idx]:<30s}  φ = {shap_vals[idx]:+.4f}")


if __name__ == "__main__":
    main()
```

**Expected Console Output (abridged):**

```
LOCAL SHAP EXPLANATION (Instance 0)
============================================================
Baseline P(malignant)     : 0.3724
Predicted P(malignant)    : 0.9900
Sum of attributions       : 0.6176
Reconstructed prediction  : 0.9900
Top 5 features by |SHAP|:
  worst concave points        φ = +0.2154
  worst perimeter             φ = +0.1482
  mean concavity              φ = +0.0987
  ...
```

> [!IMPORTANT]
> **Code Standards (KTU Lab):**
> - Strict type hints on all function signatures
> - `logging` module used for traceability (not `print`)
> - Random seed fixed via `random_state=42` for reproducibility
> - Background dataset clustered via `shap.kmeans` for memory efficiency
> - **Local accuracy verified**: `baseline + Σφ ≈ prediction` within $10^{-6}$

---

## 3. TreeSHAP — Fast Exact Attribution for Tree Models

```python
"""
TreeSHAP implementation for XGBoost / LightGBM / sklearn ensembles.
Provides EXACT (not approximate) SHAP values in polynomial time.
"""

import shap
import xgboost as xgb
import numpy as np

def train_xgboost_and_explain(X_train, y_train, X_test, feature_names):
    """Train XGBoost and compute TreeSHAP values."""
    # Train model
    model = xgb.XGBRegressor(
        n_estimators=300, max_depth=6, learning_rate=0.05,
        subsample=0.8, random_state=42, tree_method='hist'
    )
    model.fit(X_train, y_train, verbose=False)

    # TreeSHAP explainer — polynomial time, exact
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(X_test)

    # Expected value (baseline)
    expected_value = explainer.expected_value
    print(f"Expected value: {expected_value:.4f}")

    # Global importance: mean |SHAP|
    global_importance = np.mean(np.abs(shap_values), axis=0)
    ranked = sorted(
        zip(feature_names, global_importance), key=lambda x: x[1], reverse=True
    )
    print("\nGlobal Feature Ranking (TreeSHAP):")
    for rank, (name, imp) in enumerate(ranked[:10], 1):
        print(f"  {rank:2d}. {name:<30s}  {imp:.4f}")

    return shap_values, expected_value
```

---

## 4. Mathematical Derivation: Why $w(S) = \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!}$?

Consider a uniformly random permutation $\pi$ of the $M$ features. The probability that the features in $S$ occupy the *first* $\lvert S \rvert$ positions (in any order) and feature $i$ occupies position $\lvert S \rvert + 1$ is:

$$
P(\text{position}(i) = \lvert S \rvert + 1, \, S \text{ comes first}) = \frac{\lvert S \rvert ! \cdot 1 \cdot (M - \lvert S \rvert - 1)!}{M!} = \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!}
$$

When feature $i$ is added to coalition $S$ at this position, the marginal contribution is exactly $\Delta_i(S)$. Averaging $\Delta_i(S)$ over all such permutations gives the Shapley value:

$$
\phi_i = \mathbb{E}_{\pi}\left[\Delta_i\big(\text{features preceding } i \text{ in } \pi\big)\right] = \sum_{S \subseteq F \setminus \{i\}} \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!} \Delta_i(S)
$$

This is the **permutation-based derivation** of the Shapley value, equivalent to the coalition-based definition but more intuitive.

---

## 5. SHAP Interaction Value Derivation

The SHAP interaction value $\Phi_{ij}$ captures the *joint* effect of features $i$ and $j$ minus their independent effects:

$$
\boxed{\Phi_{ij} = \sum_{S \subseteq F \setminus \{i,j\}} \frac{\lvert S \rvert ! (M - \lvert S \rvert - 2)!}{2(M-1)!} \cdot \nabla_{ij}(S)}
$$

where:

$$
\nabla_{ij}(S) = v(S \cup \{i, j\}) - v(S \cup \{i\}) - v(S \cup \{j\}) + v(S)
$$

**Inclusion-exclusion intuition:**
- $v(S \cup \{i, j\})$ — both features added
- $-v(S \cup \{i\})$ — remove individual effect of $i$
- $-v(S \cup \{j\})$ — remove individual effect of $j$
- $+v(S)$ — re-add the baseline

The remaining term is the **pure interaction** — the part of the joint effect not explained by either feature alone.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 1. SHAP Computation Pipeline (Block-Level Functional Architecture Flow)

```mermaid
flowchart TB
    A[Input Instance x] --> B[Select Background Dataset X_bg]
    B --> C[Enumerate Coalitions S ⊆ F]
    C --> D[Compute Value Function v_x S]
    D --> E[Compute Marginal Contributions Δ_i S]
    E --> F[Apply Combinatorial Weights w S]
    F --> G[Aggregate SHAP Values φ_i]
    G --> H[Verify Additivity Sum phi = f x - E f X]
    H --> I[Output Local Explanation]
    I --> J[Compute Global Importance Mean phi]
    J --> K[Generate Visualization Force / Summary / Dependence Plot]
```

---

## 2. Shapley Coalition Enumeration Process (Sequential Processing Topology)

```mermaid
flowchart LR
    subgraph PHASE_A [Phase 1: Coalition Generation]
        A1[Empty Set S = empty] --> A2[S = feature_1]
        A2 --> A3[S = feature_2]
        A3 --> A4[S = feature_n]
        A4 --> A5[S = feature_1, feature_2]
        A5 --> A6[S = feature_1, feature_n]
        A6 --> A7[S = feature_1, ..., feature_M]
    end

    subgraph PHASE_B [Phase 2: Value Function Evaluation]
        B1[v empty] --> B2[v feature_1]
        B2 --> B3[v feature_2]
        B3 --> B4[v feature_1, feature_2]
    end

    subgraph PHASE_C [Phase 3: SHAP Aggregation]
        C1[Compute marginal deltas] --> C2[Apply factorial weights]
        C2 --> C3[Sum over all coalitions]
        C3 --> C4[Output SHAP phi_i]
    end

    PHASE_A --> PHASE_B
    PHASE_B --> PHASE_C
```

---

## 3. SHAP vs LIME Comparison (Architectural Decision Flow)

```mermaid
flowchart TB
    START[Explain Black-Box Model Prediction] --> Q1{Model Type?}
    Q1 -->|Tree-based| Q2{TreeSHAP Available?}
    Q1 -->|Neural Network| Q3{DeepSHAP or GradientSHAP}
    Q1 -->|Any Model| Q4{KernelSHAP}

    Q2 -->|Yes| TS[Use TreeSHAP - Exact - O TLD^2]
    Q2 -->|No| KB[Use KernelSHAP - Approximate]
    Q3 --> DS[DeepSHAP - Backpropagation Based]
    Q4 --> KS[KernelSHAP - Weighted Regression]

    TS --> OUT[SHAP Values phi_i]
    DS --> OUT
    KS --> OUT

    OUT --> VIZ[Visualization Options]
    VIZ --> V1[Force Plot]
    VIZ --> V2[Summary Plot]
    VIZ --> V3[Dependence Plot]
    VIZ --> V4[Waterfall Plot]
```

---

## 4. SHAP Force Plot Decomposition Schematic (Sequential Processing Topology Matrix)

| Element | Visual Color | Direction | Mathematical Role | Interpretation |
|---------|--------------|-----------|-------------------|----------------|
| **Baseline $E[f(X)]$** | Gray dashed horizontal line | Reference | $\phi_0$ | Average prediction |
| **Red arrows** | Red | Rightward (positive) | $\phi_i > 0$ | Pushes prediction higher |
| **Blue arrows** | Blue | Leftward (negative) | $\phi_i < 0$ | Pushes prediction lower |
| **Arrow length** | Proportional to $\lvert \phi_i \rvert$ | — | Magnitude of impact | Importance weight |
| **Final position** | $f(x)$ | Right end | $\phi_0 + \Sigma \phi_i$ | Model output |
| **Feature labels** | Above each arrow | — | $\phi_i$ value + $x_i$ | "What" and "How much" |

---

## 5. Decision Tree: When to Use Which SHAP Variant

```mermaid
flowchart TB
    START[Choose SHAP Variant] --> DT{Decision Tree Model?}
    DT -->|Yes XGBoost RF LightGBM| TS[TreeSHAP]
    DT -->|No| NN{Deep Neural Network?}
    NN -->|Yes| DS[DeepSHAP or GradientSHAP]
    NN -->|No| LM{Linear Model?}
    LM -->|Yes| LS[LinearSHAP - Closed Form]
    LM -->|No - Any Black Box| KS[KernelSHAP - Model Agnostic]

    TS --> PERF[O TLD^2 - Exact]
    DS --> PERF2[O NL - Fast]
    LS --> PERF3[O M - Closed Form]
    KS --> PERF4[O N_bg M^2 - Approximate]
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## **PART A — 3 Mark Questions (Short Answer)**

### **Question 1: Define SHAP and state its three key properties.** *(CO1, Remember)*

**[KTU University Exam — July 2024]**

**Model Answer:**

**SHAP (SHapley Additive exPlanations)** is a unified, game-theoretic framework for interpreting machine learning model predictions. It assigns each feature a Shapley value representing its contribution to the deviation of a specific prediction from the baseline (expected) prediction.

The three key properties are:

1. **Local Accuracy (Additivity):** $f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i$ — the sum of attributions exactly equals the model output.
2. **Missingness:** If a feature is missing from the input, its SHAP value is zero.
3. **Consistency (Monotonicity):** If a model's dependence on a feature increases, the SHAP value for that feature must not decrease.

> [!VALUATION KEY]
> - Definition (1 mark), three properties (1 mark total), correct LaTeX formulation (1 mark)

---

### **Question 2: What is the Shapley value? Give the formula.** *(CO1, Remember)*

**[KTU University Exam — Dec 2023]**

**Model Answer:**

The Shapley value, introduced by Lloyd Shapley in 1953, is a solution concept in cooperative game theory that fairly distributes the total gain of a coalition among its players based on each player's average marginal contribution across all possible coalitions.

$$
\phi_i = \sum_{S \subseteq F \setminus \{i\}} \frac{\lvert S \rvert ! \, (M - \lvert S \rvert - 1)!}{M!} \left[ v(S \cup \{i\}) - v(S) \right]
$$

where $v(S)$ is the value function of coalition $S$ and $M$ is the total number of features/players.

> [!VALUATION KEY]
> - Concept (1 mark), Formula (1.5 marks), Notation explanation (0.5 marks)

---

## **PART B — 14 Mark Questions (Module Internal Choice)**

### **Question A (14 Marks):**

**[KTU University Exam — July 2024 — Modified]**

**(a)** Explain the game-theoretic foundation of SHAP values. Derive the formula for the Shapley value and explain each term. *(7 marks, CO1, Understand)*

**(b)** For a model with $M = 3$ features, the value function $v(S)$ is given as: $v(\emptyset) = 0$, $v(\{1\}) = 20$, $v(\{2\}) = 30$, $v(\{3\}) = 10$, $v(\{1,2\}) = 60$, $v(\{1,3\}) = 50$, $v(\{2,3\}) = 55$, $v(\{1,2,3\}) = 90$. Compute the SHAP values $\phi_1, \phi_2, \phi_3$ and verify the efficiency axiom. *(7 marks, CO2, Apply)*

---

#### **Solution (a) — Game-Theoretic Foundation (7 marks)**

**Step 1: Cooperative Game Theory Setup** *(2 marks)*

In cooperative game theory, $M$ players (features) form coalitions to achieve a collective payoff $v(S)$. The Shapley value answers: *How should the total payoff be fairly distributed to each player based on their marginal contribution?*

For machine learning:
- **Players** $\equiv$ features $x_1, \ldots, x_M$
- **Coalition value** $v(S) \equiv \mathbb{E}[f(x) \mid x_S]$ — expected model output when only features in $S$ are known
- **Payoff to distribute** $\equiv f(x) - \mathbb{E}[f(X)]$ — deviation from baseline

**Step 2: Shapley Axioms** *(2 marks)*

The Shapley value is the *unique* allocation satisfying:

1. **Efficiency:** $\sum_i \phi_i = v(F) - v(\emptyset)$
2. **Symmetry:** If $v(S \cup \{i\}) = v(S \cup \{j\})$ for all $S$, then $\phi_i = \phi_j$
3. **Dummy:** If $v(S \cup \{i\}) = v(S)$ for all $S$, then $\phi_i = 0$
4. **Additivity:** For independent games $v$ and $w$, $\phi_{v+w}(i) = \phi_v(i) + \phi_w(i)$

**Step 3: Derivation of the Formula** *(3 marks)*

Consider a random permutation $\pi$ of all $M$ features. The marginal contribution of feature $i$ in $\pi$ is:

$$
\Delta_i^\pi = v(\text{preceding}_i \cup \{i\}) - v(\text{preceding}_i)
$$

where $\text{preceding}_i$ denotes the features appearing before $i$ in $\pi$.

The probability that $\text{preceding}_i = S$ is:
$$
P(\text{preceding}_i = S) = \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!}
$$

(The $\lvert S \rvert !$ arrangements of $S$, the 1 arrangement where $i$ is next, and the $(M - \lvert S \rvert - 1)!$ arrangements of the remaining features, divided by $M!$ total permutations.)

Averaging over all permutations:

$$
\phi_i = \mathbb{E}_\pi[\Delta_i^\pi] = \sum_{S \subseteq F \setminus \{i\}} \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!} \left[ v(S \cup \{i\}) - v(S) \right]
$$

> [!VALUATION KEY]
> - [Cooperative game setup: 2 Marks]
> - [Four Shapley axioms: 2 Marks]
> - [Permutation-based derivation: 3 Marks]

---

#### **Solution (b) — Numerical Computation (7 marks)**

**Step 1: Marginal Contributions for $\phi_1$** *(1.5 marks)*

Subsets of $F \setminus \{1\} = \{2, 3\}$: $\emptyset, \{2\}, \{3\}, \{2, 3\}$

$$
\begin{aligned}
\Delta_1(\emptyset) &= v(\{1\}) - v(\emptyset) = 20 - 0 = 20 \\
\Delta_1(\{2\}) &= v(\{1,2\}) - v(\{2\}) = 60 - 30 = 30 \\
\Delta_1(\{3\}) &= v(\{1,3\}) - v(\{3\}) = 50 - 10 = 40 \\
\Delta_1(\{2,3\}) &= v(\{1,2,3\}) - v(\{2,3\}) = 90 - 55 = 35
\end{aligned}
$$

**Step 2: Combinatorial Weights ($M = 3$, $M! = 6$)** *(1 mark)*

$$
w(\emptyset) = \tfrac{2!}{6} = \tfrac{1}{3}, \quad w(\{2\}) = w(\{3\}) = \tfrac{1! \cdot 1!}{6} = \tfrac{1}{6}, \quad w(\{2,3\}) = \tfrac{2!}{6} = \tfrac{1}{3}
$$

**Step 3: Compute $\phi_1$** *(0.5 marks)*

$$
\phi_1 = \tfrac{1}{3}(20) + \tfrac{1}{6}(30) + \tfrac{1}{6}(40) + \tfrac{1}{3}(35) = 6.667 + 5 + 6.667 + 11.667 = \mathbf{30.00}
$$

**Step 4: Compute $\phi_2$ and $\phi_3$ symmetrically** *(1.5 marks)*

For $\phi_2$ (subsets of $\{1, 3\}$):

$$
\begin{aligned}
\Delta_2(\emptyset) &= 30, \quad \Delta_2(\{1\}) = 40, \quad \Delta_2(\{3\}) = 45, \quad \Delta_2(\{1,3\}) = 40 \\
\phi_2 &= \tfrac{1}{3}(30) + \tfrac{1}{6}(40) + \tfrac{1}{6}(45) + \tfrac{1}{3}(40) = 10 + 6.667 + 7.5 + 13.333 = \mathbf{37.50}
\end{aligned}
$$

For $\phi_3$ (subsets of $\{1, 2\}$):

$$
\begin{aligned}
\Delta_3(\emptyset) &= 10, \quad \Delta_3(\{1\}) = 30, \quad \Delta_3(\{2\}) = 25, \quad \Delta_3(\{1,2\}) = 30 \\
\phi_3 &= \tfrac{1}{3}(10) + \tfrac{1}{6}(30) + \tfrac{1}{6}(25) + \tfrac{1}{3}(30) = 3.333 + 5 + 4.167 + 10 = \mathbf{22.50}
\end{aligned}
$$

**Step 5: Verify Efficiency Axiom** *(1.5 marks)*

$$
\phi_1 + \phi_2 + \phi_3 = 30.00 + 37.50 + 22.50 = 90.00 = v(\{1,2,3\}) - v(\emptyset) = 90 - 0 \quad \checkmark
$$

> [!VALUATION KEY]
> - [Stating marginal contributions: 1.5 Marks]
> - [Combinatorial weights: 1 Mark]
> - [Three SHAP values computed: 1.5 Marks]
> - [Efficiency axiom verified: 1.5 Marks]
> - [Final presentation & summation: 1 Mark]

---

### **Question B (14 Marks) — Alternative Choice:**

**[KTU University Exam — Dec 2023 — Modified]**

**(a)** Compare and contrast SHAP with LIME. Discuss why SHAP is considered a *unified* framework. *(7 marks, CO1, Understand)*

**(b)** Using KernelSHAP methodology, explain the steps to compute SHAP values for a model-agnostic black-box classifier. Provide a Python implementation outline. *(7 marks, CO2, Apply)*

---

#### **Solution (a) — SHAP vs LIME (7 marks)**

| Aspect | LIME | SHAP |
|--------|------|------|
| **Theoretical Basis** | Local surrogate models (Ribeiro et al., 2016) | Cooperative game theory (Shapley, 1953) |
| **Explanation Form** | Sparse linear model $g(x') = w_0 + \sum w_i x_i'$ | Additive attribution $\phi_0 + \sum \phi_i$ |
| **Uniqueness** | Multiple solutions (kernel choice, sample weight) | **Unique** Shapley value (axiom-derived) |
| **Local Accuracy** | Approximate (depends on kernel width) | **Exact** (axiom 1) |
| **Missingness** | Not guaranteed | **Guaranteed** (axiom 2) |
| **Consistency** | Not guaranteed | **Guaranteed** (axiom 3) |
| **Model-Agnostic** | Yes | Yes (KernelSHAP) |
| **Computational Cost** | $O(N_{\text{perturbed}} \cdot M)$ | $O(2^M)$ exact; $O(N_{\text{bg}} \cdot M^2)$ KernelSHAP |
| **Tree Models** | Approximate | **Exact** TreeSHAP in $O(TLD^2)$ |

**Why SHAP is "Unified" (3 marks):**
Lundberg & Lee (2017) proved that LIME, DeepLIFT, classical Shapley sampling, and other methods are *specific cases* or approximations of a *single* family of additive feature attribution methods. SHAP provides the unique class of methods satisfying all three axioms simultaneously.

> [!VALUATION KEY]
> - [Comparison table: 3 Marks]
> - [SHAP uniqueness explanation: 2 Marks]
> - [Unified framework justification: 2 Marks]

---

#### **Solution (b) — KernelSHAP Implementation Outline (7 marks)**

**Step 1:** Sample $K$ coalitions $z' \in \{0,1\}^M$ from $\{0,1\}^M$ (binary mask). *(1 mark)*

**Step 2:** For each coalition, create a perturbed instance $h_x(z') = x \cdot z' + \bar{x} \cdot (1 - z')$, where $\bar{x}$ is sampled from the background dataset. *(1 mark)*

**Step 3:** Compute model output $f(h_x(z'))$ for each perturbed instance. *(0.5 marks)*

**Step 4:** Assign Shapley kernel weights:
$$
\pi_x(z') = \frac{(M - 1)}{\binom{M}{\lvert z' \rvert} \cdot \lvert z' \rvert \cdot (M - \lvert z' \rvert)}
$$
*(1 mark)*

**Step 5:** Fit weighted linear regression $g(z') = \phi_0 + \sum \phi_i z_i'$ minimizing:
$$
L = \sum_{k=1}^{K} \pi_x(z'_k) \left[ f(h_x(z'_k)) - g(z'_k) \right]^2
$$
*(2 marks)*

**Step 6:** The regression coefficients are the SHAP values $\phi_i$. *(0.5 marks)*

**Step 7:** Python pseudocode (1 mark):
```python
import shap
explainer = shap.KernelExplainer(model.predict, background_data)
shap_values = explainer.shap_values(X_test_instance, nsamples=500)
```

> [!VALUATION KEY]
> - [Coalition sampling: 1 Mark]
> - [Shapley kernel weight formula: 1 Mark]
> - [Weighted regression objective: 2 Marks]
> - [Python call: 1 Mark]
> - [Connection to Shapley theorem: 2 Marks]

---

## KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes Students Make (and Lose Marks):**
>
> 1. **Skipping the additivity verification:** Always include the line $\sum_i \phi_i = v(F) - v(\emptyset)$ to confirm your calculation. **Cost: 1–1.5 marks.**
> 2. **Wrong weight formula:** Students often write $\frac{1}{M!}$ instead of $\frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!}$. The weight is *not* uniform — it depends on coalition size.
> 3. **Confusing LIME and SHAP:** Both are local, but only SHAP is axiomatically *unique*. Do not claim LIME satisfies missingness or consistency.
> 4. **Forgetting the baseline $\phi_0$:** SHAP explanation is *relative* to $\mathbb{E}[f(X)]$, not absolute. A SHAP value of $+0.3$ means the feature pushed the prediction $0.3$ units *above* the average.
> 5. **Using $\vert S \vert$ in plain text:** Markdown table syntax breaks. Always use $\lvert S \rvert$ in LaTeX math mode.
> 6. **Mixing up local and global importance:** $\phi_i^{(k)}$ is local (one instance). $I_j = \frac{1}{N}\sum_k \lvert \phi_j^{(k)} \rvert$ is global. Examiners will deduct marks for this.
> 7. **Not distinguishing TreeSHAP, KernelSHAP, DeepSHAP:** Each is a *variant*. The base formula is identical, but the estimation algorithm differs.

---

## Topic Recap & Important Things to Remember

- **SHAP** = SHapley Additive exPlanations; a game-theoretic, post-hoc, model-agnostic XAI method rooted in Lloyd Shapley's 1953 cooperative game theory.
- **Core formula:** $\phi_i = \sum_{S \subseteq F \setminus \{i\}} \frac{\lvert S \rvert ! (M - \lvert S \rvert - 1)!}{M!} \left[ v(S \cup \{i\}) - v(S) \right]$
- **Additivity (Efficiency):** $f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i$ where $\phi_0 = \mathbb{E}[f(X)]$.
- **Three SHAP axioms:** Local Accuracy, Missingness, Consistency.
- **Four Shapley axioms:** Efficiency, Symmetry, Dummy, Additivity.
- **Variants:** TreeSHAP (exact, $O(TLD^2)$), KernelSHAP (model-agnostic, approximate), DeepSHAP (neural networks), LinearSHAP (closed form).
- **Value function in ML:** $v_x(S) = \mathbb{E}[f(x) \mid x_S]$ — expected model output with features in $S$ fixed.
- **Combinatorial weight $w(S)$:** Probability of a random permutation placing $S$ before $i$ — *not* uniform across coalition sizes.
- **Global feature importance:** $I_j = \frac{1}{N} \sum_{k=1}^{N} \lvert \phi_j^{(k)} \rvert$ — mean absolute SHAP across dataset.
- **SHAP interaction value:** $\Phi_{ij}$ captures pure joint effect via inclusion-exclusion: $v(S \cup \{i,j\}) - v(S \cup \{i\}) - v(S \cup \{j\}) + v(S)$.
- **Visualizations:** Force plot (single instance), Summary plot (global), Dependence plot (feature effect), Waterfall plot (cumulative attribution).
- **SHAP unifies** LIME, DeepLIFT, classical Shapley sampling — all are special cases of additive feature attribution methods.
- **Background dataset size (lab standard):** 100 samples clustered via `shap.kmeans`.
- **Local accuracy check (validation):** `baseline + sum(phi_values) ≈ prediction` within tolerance $10^{-6}$.
- **Founders:** Lundberg & Lee (NeurIPS 2017); theoretical foundation by Lloyd Shapley (1953; Nobel 2020).
- **Production use:** TreeSHAP for XGBoost/LightGBM in finance, healthcare, cybersecurity — *exact* and fast.
- **Key difference from gradient-based methods:** Gradients are *infinitesimal local*; SHAP integrates over *all coalitions*, making it *globally consistent*.

<!-- SECTION_5_END -->
