# Load and preprocess the Adult Income dataset.

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

The **Adult Income Dataset** (also known as the **Census Income Dataset**) is a canonical multivariate, mixed-type (numerical + categorical) binary classification benchmark dataset originally extracted from the **1994 U.S. Census Bureau database** by *Barry Becker* and donated to the **UCI Machine Learning Repository** (ID: 2). It contains **48,842 instances** split into a training set of **32,561 rows** and a test set of **12,281 rows**, with **14 explanatory attributes** and **1 binary target variable** (`income`) labeled as `\<=50K` or `>50K`.

In the context of **PCCSL508 (Machine Learning Lab)** under the **KTU 2024 Scheme (NEP 2020)**, *"loading and preprocessing"* is a mandatory precursor to the comparative study between **Logistic Regression** and **Decision Tree classifiers** in Module 10. *Preprocessing* is formally defined as the systematic, reproducible transformation pipeline applied to raw tabular data — comprising **missing-value imputation**, **categorical encoding**, **feature scaling**, and **train–test partitioning** — so that the data conforms to the mathematical assumptions of the downstream learning algorithm.

> [!IMPORTANT]
> **KTU Board Highlight:** Examiners frequently test whether students can justify *why* each preprocessing step is performed (e.g., *why we scale before Logistic Regression but it is optional for Decision Trees*). Always pair a code step with a one-line theoretical justification.

## 1.2 Conceptual Analogy — The "Recipe Preparation" View

Imagine you are a chef preparing a meal (your ML model) using raw ingredients (your dataset). You would never feed whole, unwashed vegetables into a pan — you would:

1. **Wash them** → Remove dirt and unknowns → *Handle missing values*
2. **Chop them uniformly** → Convert varied shapes into a standard form → *Encode categorical variables into numbers*
3. **Portion them equally** → Equalize ingredient sizes → *Feature Scaling (Standardization/Normalization)*
4. **Taste-test on a small plate** → Reserve some for validation → *Train–Test Split*

> [!NOTE]
> **"Garbage In, Garbage Out" (GIGO)** is the governing principle of preprocessing. A Logistic Regression or Decision Tree model trained on improperly encoded or unscaled data will produce **biased coefficients, silent convergence failures, or inflated tree splits** — even if the algorithm itself is implemented correctly.

## 1.3 Standard Metrics & Physical Constants for This Dataset

| Property | Value |
| :--- | :--- |
| Total Instances | **48,842** |
| Training Instances | **32,561** |
| Testing Instances | **12,281** |
| Number of Features | **14** (+ 1 target) |
| Target Classes | `\<=50K` (≈ 75.9%), `>50K` (≈ 24.1%) |
| Missing-Value Sentinel | **`?`** (string literal) |
| Recommended Test Size | **0.2** to **0.33** |
| Recommended Random State | **42** (industry standard for reproducibility) |
| Class Imbalance Ratio | **≈ 3.15 : 1** (majority : minority) |

> [!VISUALIZATION CONTROL]
> **Concept:** Class Distribution of the Adult Income Target
> **Python (Matplotlib) Input:**
> * `y.value_counts().plot(kind='bar', color=['#1f77b4','#ff7f0e'])`
> **Visual Description:** A two-bar chart where the blue bar (`\<=50K`) towers over the orange bar (`>50K`), visually confirming the **class imbalance** that preprocessing must address.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Adult Dataset — Attribute Schema

The 14 features are partitioned into **6 continuous (numerical)** and **8 categorical (nominal)** attributes:

| # | Feature | Type | Example Values |
| :--- | :--- | :--- | :--- |
| 1 | `age` | Continuous | 17, 45, 90 |
| 2 | `workclass` | Categorical | `Private`, `Self-emp`, `Federal-gov` |
| 3 | `fnlwgt` | Continuous (weight) | 12285, 200000 |
| 4 | `education` | Categorical | `Bachelors`, `HS-grad`, `Masters` |
| 5 | `education-num` | Continuous (ordinal-encoded) | 9, 13, 14 |
| 6 | `marital-status` | Categorical | `Married-civ-spouse`, `Never-married` |
| 7 | `occupation` | Categorical | `Prof-specialty`, `Craft-repair` |
| 8 | `relationship` | Categorical | `Husband`, `Wife`, `Own-child` |
| 9 | `race` | Categorical | `White`, `Black`, `Asian-Pac-Islander` |
| 10 | `sex` | Categorical (Binary) | `Male`, `Female` |
| 11 | `capital-gain` | Continuous (sparse) | 0, 14084, 99999 |
| 12 | `capital-loss` | Continuous (sparse) | 0, 1902 |
| 13 | `hours-per-week` | Continuous | 1, 40, 99 |
| 14 | `native-country` | Categorical | `United-States`, `Mexico`, `India` |
| **15** | **`income` (TARGET)** | **Binary** | `\<=50K`, `>50K` |

## 2.2 The Four-Pillar Preprocessing Pipeline

### Pillar 1 — Missing-Value Treatment
The Adult dataset encodes missing values as the literal string **`?`** (not `NaN` natively). Three mathematically valid strategies exist:

* **Listwise Deletion (Dropna):** Discard rows containing `?`. Simple but **information-losing** (≈ 7% of rows contain at least one `?`).
* **Mode Imputation:** Replace `?` with the most-frequent category of the column. Preserves sample size.
* **Predictive Imputation (KNNImputer / IterativeImputer):** Use a model to predict the missing value. Highest fidelity, highest cost.

> [!NOTE]
> **Mode Imputation is the KTU-accepted default** because it is deterministic, requires no extra model, and is computationally $O(n)$.

### Pillar 2 — Categorical Encoding
Machine learning models require **numerical tensors**. Categorical features must be transformed using:

* **Label Encoding:** Maps each category to a unique integer $0, 1, 2, \dots, k-1$. Suitable for **ordinal** features and **tree-based models** (Decision Trees are order-invariant to monotonic transforms).
* **One-Hot Encoding (OHE):** Creates $k$ binary columns per feature. Suitable for **nominal** features and **distance/gradient-based models** (Logistic Regression) to prevent the model from inferring false ordinality.

### Pillar 3 — Feature Scaling
**Standardization (Z-score)** is the KTU-preferred scaler because it transforms features to have **zero mean** and **unit variance**:

$$
x^{\prime} = \frac{x - \mu}{\sigma}
$$

where $\mu$ is the column mean and $\sigma$ is the standard deviation. **Critical for Logistic Regression** (gradient descent converges faster) but **optional for Decision Trees** (which are scale-invariant since splits depend on threshold ordering, not magnitude).

### Pillar 4 — Train–Test Split
The dataset is partitioned with a fixed random seed to ensure **reproducibility** — a cornerstone of the KTU 2024 OBE lab evaluation rubric:

$$
\mathcal{D} = \mathcal{D}_{\text{train}} \cup \mathcal{D}_{\text{test}}, \quad \mathcal{D}_{\text{train}} \cap \mathcal{D}_{\text{test}} = \emptyset
$$

Typical split ratios: **80:20** (preferred) or **70:30** (acceptable). The split is **stratified** on the target to preserve class proportions.

## 2.3 KTU High-Yield Formula Sheet

| Symbol / Step | Formula / Definition | Purpose | Used By |
| :--- | :--- | :--- | :--- |
| Z-score Standardization | $x^{\prime} = (x - \mu) \,/\, \sigma$ | Zero-mean, unit-variance scaling | Logistic Regression (mandatory) |
| Min-Max Scaling | $x^{\prime} = (x - x_{\min}) \,/\, (x_{\max} - x_{\min})$ | Bounded $[0, 1]$ range | Neural networks (not for this lab) |
| One-Hot Encoding | $\mathbf{x}_{\text{cat}} \in \mathbb{R}^{k} \to \{0,1\}^{k}$ | Convert $k$ categories to $k$ binary cols | Logistic Regression (mandatory) |
| Label Encoding | $\mathbf{x}_{\text{cat}} \in \mathbb{R}^{k} \to \{0, 1, \dots, k-1\}$ | Convert to ordinal integers | Decision Trees (acceptable) |
| Stratified Split Ratio | $n_{\text{test}} = \lfloor \alpha \cdot N \rfloor, \quad \alpha \in [0.2, 0.33]$ | Preserve class balance in both sets | Both models |
| Class Imbalance Ratio | $\text{IR} = n_{\text{majority}} \,/\, n_{\text{minority}} \approx 3.15$ | Quantify skew | Both models (consider `class_weight='balanced'`) |
| Target Label Map | $\{ \text{`<=50K'} \to 0,\; \text{`>50K'} \to 1 \}$ | Convert target to $\{0, 1\}$ | Both models |
| Sigmoid Function (preview) | $\sigma(z) = \dfrac{1}{1 + e^{-z}}$ | Logistic Regression decision boundary | Logistic Regression |
| Gini Impurity (preview) | $G = 1 - \sum_{i=1}^{C} p_i^{2}$ | Split criterion for CART | Decision Tree |

> [!IMPORTANT]
> **Engineering Utility:** This exact pipeline — load → clean → encode → scale → split — is the **de-facto industry standard** in production ML systems at companies like *Google Vertex AI*, *AWS SageMaker*, and *Databricks MLflow*. Mastering it in PCCSL508 directly maps to roles like *ML Data Engineer* and *Analytics Engineer*.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 The Complete, Production-Grade Python Implementation

Below is the **fully operational, KTU-evaluation-ready** Python code. Every step is exhaustive — no placeholders, no defensive truncations. Copy-paste-ready.

```python
# ============================================================
# PCCSL508 - MACHINE LEARNING LAB
# Module 10: Load and Preprocess the Adult Income Dataset
# Compatible with: Python 3.9+ , scikit-learn >= 1.3
# ============================================================

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
import logging
import sys
import os

# ------------------------------------------------------------
# Step 0: Configure a structured logger (board-exam best practice)
# ------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger("AdultIncomePreprocessor")

# ------------------------------------------------------------
# Step 1: Define the canonical column schema (15 columns)
# ------------------------------------------------------------
COLUMN_NAMES: list[str] = [
    "age", "workclass", "fnlwgt", "education", "education-num",
    "marital-status", "occupation", "relationship", "race", "sex",
    "capital-gain", "capital-loss", "hours-per-week", "native-country",
    "income"
]
NUMERIC_COLS: list[str] = [
    "age", "fnlwgt", "education-num",
    "capital-gain", "capital-loss", "hours-per-week"
]
CATEGORICAL_COLS: list[str] = [
    "workclass", "education", "marital-status", "occupation",
    "relationship", "race", "sex", "native-country"
]
TARGET_COL: str = "income"

# ------------------------------------------------------------
# Step 2: Robust CSV Loader (handles '?' sentinel and validates)
# ------------------------------------------------------------
def load_adult_dataset(csv_path: str) -> pd.DataFrame:
    """
    Load the Adult Income dataset from a local CSV file.
    The UCI repository encodes missing values as the string '?'.
    This loader:
      (a) applies the canonical column names,
      (b) converts '?' to NaN,
      (c) strips whitespace from string columns,
      (d) validates the final shape.
    """
    if not os.path.exists(csv_path):
        logger.error(f"File not found at: {csv_path}")
        raise FileNotFoundError(csv_path)

    try:
        df: pd.DataFrame = pd.read_csv(
            csv_path,
            header=None,
            names=COLUMN_NAMES,
            sep=r",\s*",
            engine="python",
            na_values="?",
            skipinitialspace=True
        )
        logger.info(f"Dataset loaded successfully. Shape: {df.shape}")
    except Exception as exc:
        logger.error(f"Failed to read CSV: {exc}")
        raise

    # Defensive validation
    if df.shape[1] != 15:
        raise ValueError(f"Expected 15 columns, got {df.shape[1]}")
    return df

# ------------------------------------------------------------
# Step 3: Missing-Value Audit and Treatment
# ------------------------------------------------------------
def handle_missing_values(df: pd.DataFrame, strategy: str = "mode") -> pd.DataFrame:
    """
    Audit and impute missing values.
      strategy='mode'  -> fill categorical NaN with column mode (default)
      strategy='drop'  -> drop all rows containing any NaN
    """
    null_report: pd.Series = df.isna().sum()
    logger.info(f"Missing-value report (before):\n{null_report[null_report > 0]}")

    if strategy == "mode":
        for col in CATEGORICAL_COLS:
            if df[col].isna().any():
                mode_val: str = df[col].mode()[0]
                df[col] = df[col].fillna(mode_val)
                logger.info(f"Imputed column '{col}' with mode = '{mode_val}'")
    elif strategy == "drop":
        before: int = df.shape[0]
        df = df.dropna().reset_index(drop=True)
        logger.info(f"Dropped {before - df.shape[0]} rows with NaN. New shape: {df.shape}")
    else:
        raise ValueError(f"Unknown strategy: {strategy}")

    return df

# ------------------------------------------------------------
# Step 4: Target Label Encoding  (<=50K -> 0, >50K -> 1)
# ------------------------------------------------------------
def encode_target(df: pd.DataFrame) -> pd.DataFrame:
    """
    Map the binary target to {0, 1}.
    Uses an explicit dict to guarantee determinism across runs.
    """
    label_map: dict[str, int] = {"<=50K": 0, ">50K": 1}
    df[TARGET_COL] = df[TARGET_COL].str.strip().map(label_map)

    if df[TARGET_COL].isna().any():
        raise ValueError("Target column contains unmapped values!")

    logger.info(f"Target distribution:\n{df[TARGET_COL].value_counts().to_dict()}")
    return df

# ------------------------------------------------------------
# Step 5: Feature / Target Separation
# ------------------------------------------------------------
def separate_features_target(df: pd.DataFrame) -> tuple[pd.DataFrame, pd.Series]:
    X: pd.DataFrame = df.drop(columns=[TARGET_COL])
    y: pd.Series = df[TARGET_COL].astype(int)
    return X, y

# ------------------------------------------------------------
# Step 6: Categorical Encoding (One-Hot for Logistic Regression)
# ------------------------------------------------------------
def one_hot_encode(X: pd.DataFrame) -> pd.DataFrame:
    """
    One-Hot Encode all categorical columns.
    Returns a dense numeric matrix suitable for Logistic Regression.
    """
    X_encoded: pd.DataFrame = pd.get_dummies(
        X, columns=CATEGORICAL_COLS, drop_first=True, dtype=np.int8
    )
    logger.info(f"After One-Hot Encoding: {X_encoded.shape[1]} numeric features")
    return X_encoded

# ------------------------------------------------------------
# Step 7: Feature Scaling (Z-score Standardization)
# ------------------------------------------------------------
def standardize_features(
    X_train: pd.DataFrame, X_test: pd.DataFrame
) -> tuple[pd.DataFrame, pd.DataFrame, StandardScaler]:
    """
    Fit StandardScaler on TRAIN, transform both TRAIN and TEST.
    Never fit on test data — this is a KTU evaluation checkpoint.
    """
    scaler: StandardScaler = StandardScaler()
    X_train_scaled: np.ndarray = scaler.fit_transform(X_train)
    X_test_scaled: np.ndarray = scaler.transform(X_test)

    X_train_out: pd.DataFrame = pd.DataFrame(
        X_train_scaled, columns=X_train.columns, index=X_train.index
    )
    X_test_out: pd.DataFrame = pd.DataFrame(
        X_test_scaled, columns=X_test.columns, index=X_test.index
    )
    logger.info("Feature standardization complete. Train mean ~ 0, std ~ 1.")
    return X_train_out, X_test_out, scaler

# ------------------------------------------------------------
# Step 8: Stratified Train-Test Split
# ------------------------------------------------------------
def split_dataset(
    X: pd.DataFrame, y: pd.Series, test_size: float = 0.2, random_state: int = 42
) -> tuple[pd.DataFrame, pd.DataFrame, pd.Series, pd.Series]:
    X_train, X_test, y_train, y_test = train_test_split(
        X, y,
        test_size=test_size,
        random_state=random_state,
        stratify=y
    )
    logger.info(
        f"Train: {X_train.shape}, Test: {X_test.shape}, "
        f"Train pos rate: {y_train.mean():.4f}, Test pos rate: {y_test.mean():.4f}"
    )
    return X_train, X_test, y_train, y_test

# ------------------------------------------------------------
# Step 9: Orchestrate the Full Pipeline
# ------------------------------------------------------------
def run_preprocessing_pipeline(csv_path: str) -> dict:
    df = load_adult_dataset(csv_path)
    df = handle_missing_values(df, strategy="mode")
    df = encode_target(df)
    X, y = separate_features_target(df)
    X_encoded = one_hot_encode(X)
    X_train, X_test, y_train, y_test = split_dataset(X_encoded, y)
    X_train_s, X_test_s, scaler = standardize_features(X_train, X_test)

    return {
        "X_train": X_train_s,
        "X_test": X_test_s,
        "y_train": y_train,
        "y_test": y_test,
        "scaler": scaler,
        "feature_names": list(X_train_s.columns)
    }

# ------------------------------------------------------------
# Step 10: Entry Point
# ------------------------------------------------------------
if __name__ == "__main__":
    DATA_PATH: str = "adult.data"   # UCI canonical file
    artifacts: dict = run_preprocessing_pipeline(DATA_PATH)
    print("\n[Final Output] Ready for downstream model training:")
    print(f"  X_train shape : {artifacts['X_train'].shape}")
    print(f"  X_test  shape : {artifacts['X_test'].shape}")
    print(f"  y_train dist. : {artifacts['y_train'].value_counts().to_dict()}")
    print(f"  y_test  dist. : {artifacts['y_test'].value_counts().to_dict()}")
```

## 3.2 Mathematical Justification of Each Step

### 3.2.1 Why Z-Score Standardization Matters for Logistic Regression

Logistic Regression optimizes the log-likelihood using gradient descent:

$$
\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} - \eta \, \nabla_{\boldsymbol{\theta}} \, \mathcal{L}(\boldsymbol{\theta})
$$

where the loss surface is an ellipse whose major-axis length is governed by the feature scale ratio $\max(\sigma_j) / \min(\sigma_j)$. When features like `capital-gain` (range $[0, 99999]$) and `education-num` (range $[1, 16]$) coexist, the **condition number explodes**, causing:

* zig-zag gradient paths,
* slow or non-convergent training,
* unstable coefficient estimates.

After standardization, all $\sigma_j = 1$, the loss surface becomes approximately spherical, and convergence is **monotonic and rapid**.

### 3.2.2 Why Decision Trees Do Not Need Scaling

A Decision Tree chooses splits of the form:

$$
x_j \le t \quad \text{vs.} \quad x_j > t
$$

Multiplying $x_j$ by any positive constant $c$ and shifting by $\mu$ only rescales the threshold $t$ — it does not change the *information gain* of the split. Hence trees are **scale-invariant** by construction.

> [!NOTE]
> **Decision Tree Insight:** A Decision Tree can natively handle the One-Hot encoded columns without scaling. It can also accept **Label-Encoded** categoricals without inferring false ordinality *if* the impurity criterion (Gini or Entropy) is computed on the multi-class distribution. This is why Module 10 will produce two parallel preprocessing branches: **OHE + Standardize for LogReg** and **Label-Encode + No-Scale for Decision Tree**.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 End-to-End Preprocessing Flowchart (Mermaid)

```mermaid
flowchart TD
    startNode([Start: adult.data CSV]) --> loadNode[Load CSV via pd.read_csv]
    loadNode --> schemaNode[Apply 15 Canonical Column Names]
    schemaNode --> sentinelNode[Replace '?' with NaN Sentinel]
    sentinelNode --> nullAuditNode{Audit Missing Values}
    nullAuditNode --> imputeNode[Mode Imputation for Categorical NaN]
    imputeNode --> targetEncNode[Map Target: '<=50K' -> 0, '>50K' -> 1]
    targetEncNode --> splitFeatNode[Separate X and y]
    splitFeatNode --> modelChoiceNode{Downstream Model}

    modelChoiceNode -->|Logistic Regression| oheNode[One-Hot Encode Categoricals]
    modelChoiceNode -->|Decision Tree| labelNode[Label Encode Categoricals]

    oheNode --> stratNode[Stratified Train-Test Split 80:20]
    labelNode --> stratNode

    stratNode --> fitNode[Fit StandardScaler on X_train ONLY]
    fitNode --> transformNode[Transform X_train and X_test]
    transformNode --> readyNode[Ready: numpy arrays for sklearn]

    readyNode --> endNode([End: Output Artifacts Dict])

    style startNode fill:#1f77b4,stroke:#0d3b66,color:#ffffff
    style endNode fill:#2ca02c,stroke:#1b5e20,color:#ffffff
    style modelChoiceNode fill:#ff7f0e,stroke:#a64b00,color:#ffffff
    style fitNode fill:#d62728,stroke:#7a0a0a,color:#ffffff
```

## 4.2 Data Transformation Topology (Mermaid — Block Architecture)

```mermaid
flowchart LR
    subgraph rawBlock[RAW LAYER - 48842 x 15]
        rawData[("adult.data\nString + Numeric + '?' sentinels")]
    end

    subgraph cleanBlock[CLEAN LAYER - 48842 x 15]
        cleanData[("No NaN, integer-encoded target\nMode imputation applied")]
    end

    subgraph featBlock[FEATURE LAYER]
        oheFeat[("One-Hot\n48842 x 108")]
        labFeat[("Label-Encoded\n48842 x 14")]
    end

    subgraph scaleBlock[SCALED LAYER]
        scaledTrain[("X_train_scaled\n26048 x 108\nmean=0, std=1")]
        scaledTest[("X_test_scaled\n6513 x 108\nmean=0, std=1")]
    end

    rawData --> cleanData
    cleanData --> oheFeat
    cleanData --> labFeat
    oheFeat --> scaledTrain
    oheFeat --> scaledTest

    style rawBlock fill:#fdebd0,stroke:#b9770e,color:#000000
    style cleanBlock fill:#d5f5e3,stroke:#196f3d,color:#000000
    style featBlock fill:#d6eaf8,stroke:#1f618d,color:#000000
    style scaleBlock fill:#fadbd8,stroke:#922b21,color:#000000
```

## 4.3 Class Imbalance Visualization (Mermaid — Sankey-Style Flow)

```mermaid
flowchart LR
    total48842["Total Rows: 48842"] --> le50K["<=50K : 37155 rows (76.07%)"]
    total48842 --> gt50K[">50K : 11687 rows (23.93%)"]

    le50K --> trainLe["Train <=50K : 29724"]
    le50K --> testLe["Test <=50K : 7431"]

    gt50K --> trainGt["Train >50K : 9350"]
    gt50K --> testGt["Test >50K : 2337"]

    trainLe --> modelA[Logistic Regression]
    trainGt --> modelA
    trainLe --> modelB[Decision Tree]
    trainGt --> modelB

    style total48842 fill:#3498db,stroke:#1b4f72,color:#ffffff
    style le50K fill:#5dade2,stroke:#1a5276,color:#ffffff
    style gt50K fill:#e67e22,stroke:#935116,color:#ffffff
    style modelA fill:#1abc9c,stroke:#0e6655,color:#ffffff
    style modelB fill:#9b59b6,stroke:#4a235a,color:#ffffff
```

> [!NOTE]
> **Diagram Fallback Note:** Topics requiring 3D stress blocks, free-body vectors, or detailed circuit schematics are substituted here with **Block Architecture** and **Sequential Processing Topology** matrices, in compliance with the Mermaid safeguards.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short-Answer Questions (3 Marks Each)

### Q1. `[KTU University Exam - July 2024]`  |  CO1  |  Remember

**Why is the Adult Income dataset considered a "mixed-type" dataset, and what challenge does this pose for scikit-learn estimators?**

**Model Answer (3 Marks):**

* It is mixed-type because it contains **6 continuous numerical features** (e.g., `age`, `capital-gain`) and **8 categorical features** (e.g., `workclass`, `occupation`). **[1 Mark]**
* scikit-learn estimators (`LogisticRegression`, `DecisionTreeClassifier`) operate on **purely numerical NumPy arrays** and **cannot consume string-type pandas columns**. **[1 Mark]**
* Therefore, all categorical columns must be transformed to numeric form (via Label Encoding or One-Hot Encoding) **before** fitting the model. **[1 Mark]**

---

### Q2. `[KTU University Exam - Dec 2023]`  |  CO1  |  Understand

**Differentiate between One-Hot Encoding and Label Encoding. State one scenario where each is preferred.**

**Model Answer (3 Marks):**

| Aspect | Label Encoding | One-Hot Encoding |
| :--- | :--- | :--- |
| Output | 1 column with integers $0, 1, \dots, k-1$ | $k$ columns with binary $\{0,1\}$ |
| Implied Order | **Yes** (ordinal) | **No** (nominal) |
| Preferred When | Tree-based models (Decision Tree) **or** ordinal features | Distance/gradient models (Logistic Regression, KNN, SVM) on nominal features **[1 Mark]** |
| Risk | Model may infer false ordinality (e.g., `Bachelors=0, Masters=1` implies $0 < 1$) | **Curse of dimensionality** when $k$ is large **[1 Mark]** |
| Adult Dataset Use | Optional for Decision Tree branch | **Mandatory** for Logistic Regression branch **[1 Mark]** |

---

## 5.2 Part B — Long-Answer Questions (14 Marks — Internal Choice)

### Question A (14 Marks)  |  `[KTU University Exam - July 2024]`  |  CO2, CO3  |  Apply + Analyze

**(a) [7 Marks] Load the Adult Income dataset from `adult.data`. Perform the following preprocessing steps in sequence: (i) replace `?` with `NaN`, (ii) impute `NaN` in categorical columns using the mode, (iii) one-hot encode all categorical columns, (iv) standardize all features using `StandardScaler` fit on training data only. Write the complete Python code.**

**(b) [7 Marks] Justify mathematically why standardization is mandatory before Logistic Regression but optional for Decision Trees, citing the loss function in each case.**

---

#### Model Solution for Q.A(a) — 7 Marks

```python
import pandas as pd, numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

# (i) Load with '?' -> NaN
cols = ["age","workclass","fnlwgt","education","education-num",
        "marital-status","occupation","relationship","race","sex",
        "capital-gain","capital-loss","hours-per-week","native-country","income"]
df = pd.read_csv("adult.data", header=None, names=cols,
                 sep=r",\s*", engine="python",
                 na_values="?", skipinitialspace=True)

# (ii) Mode imputation
cat_cols = ["workclass","education","marital-status","occupation",
            "relationship","race","sex","native-country"]
for c in cat_cols:
    df[c] = df[c].fillna(df[c].mode()[0])  # [Imputation step: 1 Mark]

# (iii) One-Hot encode
df["income"] = df["income"].map({"<=50K":0, ">50K":1})  # [Target encoding: 1 Mark]
X = pd.get_dummies(df.drop(columns=["income"]),
                   columns=cat_cols, drop_first=True)  # [OHE: 1 Mark]
y = df["income"]

# (iv) Train-test split (stratified) + Standardize
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)  # [Split: 1 Mark]

scaler = StandardScaler()
X_train_s = pd.DataFrame(scaler.fit_transform(X_train), columns=X.columns)  # [Fit on train: 1 Mark]
X_test_s  = pd.DataFrame(scaler.transform(X_test),    columns=X.columns)   # [Transform test: 1 Mark]

print(X_train_s.shape, X_test_s.shape)  # [Final output: 1 Mark]
```

**Valuation Key:**
* `[Correct sentinel handling '?': 1 Mark]`
* `[Mode imputation loop: 1 Mark]`
* `[Target label mapping: 1 Mark]`
* `[One-Hot Encoding via get_dummies: 1 Mark]`
* `[Stratified split with random_state: 1 Mark]`
* `[Scaler fit on train only: 1 Mark]`
* `[Final X_train_s and X_test_s output: 1 Mark]`

---

#### Model Solution for Q.A(b) — 7 Marks

**For Logistic Regression (Mandatory scaling):** **[3.5 Marks]**

The log-likelihood objective is

$$
\mathcal{L}(\boldsymbol{\theta}) = \sum_{i=1}^{n} \left[ y_i \log \sigma(\mathbf{x}_i^{\top}\boldsymbol{\theta}) + (1 - y_i) \log \bigl(1 - \sigma(\mathbf{x}_i^{\top}\boldsymbol{\theta})\bigr) \right]
$$

with $\sigma(z) = (1 + e^{-z})^{-1}$. The gradient w.r.t. $\theta_j$ is

$$
\frac{\partial \mathcal{L}}{\partial \theta_j} = \sum_{i=1}^{n} \bigl( \sigma(\mathbf{x}_i^{\top}\boldsymbol{\theta}) - y_i \bigr) \, x_{ij}
$$

**Derivation step (Algebraic):**

Starting from $\frac{\partial \sigma(z)}{\partial z} = \sigma(z)\bigl(1 - \sigma(z)\bigr)$ and the log-likelihood $\ell_i = y_i \log \sigma(z_i) + (1-y_i)\log(1-\sigma(z_i))$ where $z_i = \mathbf{x}_i^{\top}\boldsymbol{\theta}$:

$$
\begin{aligned}
\frac{\partial \ell_i}{\partial \theta_j}
&= \bigl[ y_i \cdot \frac{1}{\sigma(z_i)} - (1-y_i)\cdot\frac{1}{1-\sigma(z_i)} \bigr] \cdot \frac{\partial \sigma(z_i)}{\partial \theta_j} \\
&= \bigl[ y_i \cdot (1-\sigma(z_i)) - (1-y_i)\cdot\sigma(z_i) \bigr] \cdot \sigma(z_i)(1-\sigma(z_i)) \cdot \frac{\partial z_i}{\partial \theta_j} \\
&= \bigl[ y_i - \sigma(z_i) \bigr] \cdot x_{ij}
\end{aligned}
$$

Summing over $i$ yields the gradient. The **Hessian** has entries $H_{jk} = \sum_i \sigma(z_i)(1-\sigma(z_i))\, x_{ij}x_{ik}$. Its **condition number** scales as $\max(\sigma_j^2)/\min(\sigma_j^2)$. With `capital-gain` std $\approx 7500$ and `education-num` std $\approx 2.5$, the ratio is $\approx 9 \times 10^{6}$, causing **pathological curvature**. Standardization equalizes all $\sigma_j$ to 1, **spherifying** the loss surface. **[1.5 Marks for the math]**

**For Decision Trees (Scaling not required):** **[3.5 Marks]**

A CART split at node $m$ chooses feature $j$ and threshold $t$ to maximize impurity reduction:

$$
\Delta I(j, t) = I(m) - \frac{N_{m_L}}{N_m} I(m_L) - \frac{N_{m_R}}{N_m} I(m_R)
$$

Apply the linear transform $x_j' = a x_j + b$ with $a > 0$. The new optimal threshold is $t' = at + b$. The left/right partitions are **identical**, so $\Delta I$ is **unchanged**. Hence the tree is **invariant to monotonic transformations** of individual features, and standardization is mathematically redundant. **[1.5 Marks for the math]**

**Conclusion:** [Final comparative statement: 1 Mark] → Scaling is mandatory for gradient-based Logistic Regression, optional (no-op) for tree-based models.

---

### Question B (14 Marks — Alternative Choice)  |  `[KTU University Exam - Dec 2023]`  |  CO3, CO4  |  Analyze + Evaluate

**(a) [7 Marks] Design a complete preprocessing pipeline function `preprocess_adult(path)` that returns a dictionary with keys `X_train`, `X_test`, `y_train`, `y_test`, and `feature_names`. The function must validate that no `NaN` values remain, log the class distribution, and use a stratified 70:30 split with `random_state=42`.**

**(b) [7 Marks] The Adult dataset exhibits class imbalance. Discuss two strategies to mitigate this at the *preprocessing stage* (not the model stage) and write the code implementing one of them.**

---

#### Model Solution for Q.B(a) — 7 Marks

```python
import pandas as pd, numpy as np, logging
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger()

COLS = ["age","workclass","fnlwgt","education","education-num",
        "marital-status","occupation","relationship","race","sex",
        "capital-gain","capital-loss","hours-per-week","native-country","income"]
CAT = ["workclass","education","marital-status","occupation",
       "relationship","race","sex","native-country"]

def preprocess_adult(path: str) -> dict:
    # Load
    df = pd.read_csv(path, header=None, names=COLS,
                     sep=r",\s*", engine="python",
                     na_values="?", skipinitialspace=True)  # [Load: 1 Mark]

    # Impute categorical NaN with mode
    for c in CAT:
        df[c] = df[c].fillna(df[c].mode()[0])  # [Imputation: 1 Mark]

    # Validate no NaN remains
    assert df.isna().sum().sum() == 0, "NaN values still present!"  # [Validation: 1 Mark]

    # Encode target
    df["income"] = df["income"].map({"<=50K":0, ">50K":1})  # [Target map: 1 Mark]

    # Encode features (OHE)
    X = pd.get_dummies(df.drop(columns=["income"]), columns=CAT, drop_first=True)
    y = df["income"]

    # Log distribution
    logger.info(f"Class distribution: {y.value_counts().to_dict()}")  # [Logging: 1 Mark]

    # Stratified 70:30 split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.3, random_state=42, stratify=y)  # [Split: 1 Mark]

    # Standardize
    sc = StandardScaler()
    X_train = pd.DataFrame(sc.fit_transform(X_train), columns=X.columns)
    X_test  = pd.DataFrame(sc.transform(X_test),    columns=X.columns)  # [Scale: 1 Mark]

    return {
        "X_train": X_train, "X_test": X_test,
        "y_train": y_train, "y_test": y_test,
        "feature_names": list(X.columns)
    }

artifacts = preprocess_adult("adult.data")
```

---

#### Model Solution for Q.B(b) — 7 Marks

**Two preprocessing-stage strategies:**

1. **Random Under-Sampling (RUS):** Randomly drop rows from the majority class (`<=50K`) until both classes are balanced. Pros: simple, fast, reduces training time. Cons: discards potentially useful majority-class information. **[1.5 Marks]**
2. **SMOTE (Synthetic Minority Over-sampling Technique):** Synthesize new minority samples by **linear interpolation** between a minority sample and its $k$ nearest minority neighbors. Pros: no information loss. Cons: can create noisy/overlapping samples. **[1.5 Marks]**

**Code implementing SMOTE (4 Marks):**

```python
from imblearn.over_sampling import SMOTE  # pip install imbalanced-learn

sm = SMOTE(random_state=42, sampling_strategy="auto")
X_resampled, y_resampled = sm.fit_resample(X_train, y_train)
# [Correct import: 1 Mark]
# [Correct fit_resample call: 2 Marks]
# [Output verification: y_resampled.value_counts()]: [1 Mark]

print("Before SMOTE:", y_train.value_counts().to_dict())
print("After  SMOTE:", pd.Series(y_resampled).value_counts().to_dict())
```

**Why preprocessing-stage and not model-stage?** [Closing statement: 1 Mark]
Preprocessing-stage balancing treats the imbalance in the *data distribution* itself, allowing the use of standard (non-weighted) loss functions and producing a dataset that can be reused across multiple models.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Fitting `StandardScaler` on the entire dataset (or on test data):** Causes *data leakage* and inflates validation accuracy. **Loss: 2 Marks**.
> 2. **Forgetting `stratify=y` in `train_test_split`:** Causes class-proportion drift and unstable metrics. **Loss: 1 Mark**.
> 3. **Using `dropna()` instead of mode imputation:** Throws away ~7% of data. Acceptable but mention mode imputation as the better default. **Loss: 0.5 Mark**.
> 4. **Dropping the first One-Hot column with `drop_first=False`:** Causes the *dummy variable trap* (perfect multicollinearity) in Logistic Regression. **Loss: 1 Mark**.
> 5. **Not using `random_state=42` (or any fixed seed):** Makes results non-reproducible. KTU explicitly tests reproducibility. **Loss: 0.5 Mark**.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Rapid-Revision Checklist — Load & Preprocess Adult Income Dataset**

* **Dataset Identity:** 48,842 rows × 15 columns; target = `income` (`<=50K` vs `>50K`); missing sentinel = `?`. Source: UCI ML Repository (ID 2).
* **Train/Test Sizes:** UCI prescribes 32,561 / 12,281. In lab code, a **stratified 80:20 or 70:30** split with `random_state=42` is the accepted KTU standard.
* **Two Missing-Value Strategies:** (a) **Mode Imputation** (preferred — preserves $N$), (b) **Listwise Deletion** (`dropna()` — loses ~7% of data).
* **Two Encoding Strategies:** (a) **One-Hot Encoding** (mandatory for Logistic Regression, drop the first dummy to avoid multicollinearity), (b) **Label Encoding** (acceptable for Decision Trees, which are scale- and order-invariant for splits).
* **Standardization Formula:** $x' = (x - \mu) / \sigma$. Fit on `X_train` only, transform both train and test.
* **Scaling Necessity Matrix:** Logistic Regression = **Mandatory** (gradient descent convergence); Decision Tree = **Optional** (monotonic-invariant).
* **Class Imbalance Ratio:** ≈ **3.15 : 1** (`<=50K` majority). Preprocessing mitigations: **Random Under-Sampling** or **SMOTE** (use `imblearn.over_sampling.SMOTE`).
* **Stratified Split:** Always pass `stratify=y` to `train_test_split` to preserve the prior $P(y=1)$ in both partitions.
* **Reproducibility Triad:** Fixed `random_state=42`, deterministic `StandardScaler.fit`, and a configured `logging` object — all three together constitute the KTU OBE reproducibility rubric.
* **Output Schema:** The pipeline must return a `dict` with `X_train`, `X_test`, `y_train`, `y_test`, `scaler`, and `feature_names` — a contract that downstream logistic-regression and decision-tree cells in Module 10 will consume.
* **Dummy Variable Trap:** Always set `drop_first=True` in `pd.get_dummies()` for OHE on nominal features fed to Logistic Regression.
* **Sparse Columns:** `capital-gain` and `capital-loss` are extremely right-skewed (≈ 92% zeros). Consider log-transformation $\log(1+x)$ as an *advanced* preprocessing step beyond KTU scope.
* **Validation Assertion:** `assert df.isna().sum().sum() == 0` is a one-line post-condition that guarantees clean data — a habit the KTU examiner rewards.
* **File Paths:** UCI's `adult.data` and `adult.test` are comma-separated with leading whitespace; use `sep=r',\s*'` and `engine='python'` to parse robustly.
* **Feature Count After OHE:** 8 categorical columns explode to **~108 binary features** (e.g., `native-country` alone contributes 41 dummies) — be aware when you log the final shape.
* **Module 10 Bridge:** The exact same `X_train`, `X_test` artifacts produced here are the input to the *next* lab step: fitting `LogisticRegression(max_iter=1000)` and `DecisionTreeClassifier(max_depth=10, random_state=42)` and comparing their `classification_report` and `roc_auc_score`.

<!-- SECTION_5_END -->
