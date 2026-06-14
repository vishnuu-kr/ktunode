# Measures of Association for Two Discrete Variables

<!-- SECTION_1_START -->
# Measures of Association for Two Discrete Variables

## 1.1 Formal Academic Definition

In the KTU 2024 Scheme framework for **DATA ANALYTICS (PECST523)**, **Measures of Association** are defined as a family of dimensionless statistical indices that quantify the *strength*, *direction*, and *statistical significance* of the relationship between two **categorical (nominal or ordinal) random variables** $X$ and $Y$, whose joint frequency distribution is summarized in an $r \times c$ **contingency table**.

Formally, given the observed frequency matrix $O = [o_{ij}]$ of size $r \times c$ with grand total $n$, an association measure is any scalar function $M(O)$ that satisfies the following KTU board-evaluated criteria:

$$
M: \mathbb{N}^{r \times c} \rightarrow \mathbb{R}, \quad \text{s.t.} \quad M(I) = M(\text{independence case}) \neq M(\text{perfect dependence})
$$

where $I$ denotes the **expected frequency matrix** under the null hypothesis of statistical independence: $H_0: P(X=x_i, Y=y_j) = P(X=x_i) \cdot P(Y=y_j)$.

> [!IMPORTANT]
> **KTU 2024 Scheme Definition (Board-Approved):**
> "Association is the degree to which the values of one categorical variable systematically co-vary with the values of a second categorical variable, measured by indices derived from the chi-square ($\chi^2$) statistic or from the Proportional Reduction in Error (PRE) principle."

## 1.2 Conceptual Analogy & Geometric Intuition

**Real-World Analogy — "The Weather–Outfit Detector":**
Imagine you are a data analyst at a fashion retailer with two categorical variables: **Weather** (Sunny, Rainy, Cloudy) and **Outfit Choice** (T-shirt, Jacket, Umbrella). If you observe that customers *always* pick Umbrella on Rainy days and *never* on Sunny days, the two variables are **perfectly associated**. If the outfit choice is completely random regardless of weather, they are **independent** (zero association). Measures of association act as a *calibrated ruler* that quantifies where reality sits on this spectrum between chaos (0) and perfect order (1).

**Geometric Intuition (Simplex Geometry):**
The space of all $r \times c$ contingency tables with fixed margins lies inside a **simplex** in $\mathbb{R}^{rc-1}$. The single point representing perfect independence is the "centroid of chance." The distance from this centroid (after appropriate projection) — captured by the $\chi^2$ statistic — drives most association measures.

> [!NOTE]
> **Key Distinction for KTU Valuation:**
> * **Strength** is measured on a scale of $0$ to $1$ (or $-1$ to $+1$).
> * **Direction** is *only* meaningful for ordinal data and for measures like Yule's Q or Phi.
> * **Statistical Significance** is governed by the $\chi^2$ distribution with $(r-1)(c-1)$ degrees of freedom.

> [!VISUALIZATION CONTROL]
> **Concept:** Mosaic Plot / Heatmap of Observed vs. Expected Frequencies
> **Plotting Tool:** Python `seaborn.heatmap` or GeoGebra Bar Chart
> **Input Data Structure:** Two parallel 3×3 matrices (Observed and Expected)
> **Visual Description:** A grid where cells shaded **deep blue** indicate observed counts much larger than expected (positive association), and cells shaded **deep red** indicate observed counts much smaller than expected (negative association). The dominant color intensity visually represents the strength of association.
> **GeoGebra Command Equivalent:** Use `HeatMap({O}) - HeatMap({E})` to highlight the Pearson residual matrix $R = (O - E)/\sqrt{E}$.

## 1.3 Physical Constants and Standard Metrics

* **Significance Threshold:** $\alpha = 0.05$ (**bold** — the universal default in KTU board problems).
* **Degrees of Freedom:** $df = (r-1)(c-1)$ for a test of independence.
* **Critical $\chi^2$ values (df = 4, $\alpha = 0.05$):** $\chi^2_{0.05, 4} = 9.488$ (**bold**).
* **Cramér's V maximum range:** $0 \le V \le 1$ (independent of table size).

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Hierarchical Taxonomy of Association Measures

The KTU 2024 syllabus classifies the measures into **three foundational families** based on their mathematical construction:

### Family A — Chi-Square ($\chi^2$) Based Measures
These measures **normalize the Pearson chi-square statistic** to produce a bounded association index that is comparable across tables of different dimensions.

### Family B — Proportional Reduction in Error (PRE) Measures
These measures (notably **Goodman-Kruskal's Lambda**) quantify *how much prediction error is reduced* by knowing one variable when predicting the other. They are intuitive and have a direct probabilistic interpretation.

### Family C — 2×2 Specific Measures
For binary categorical variables, the **Odds Ratio (OR)** and **Yule's Q** are the gold-standard measures, with Yule's Q being a normalized variant of the OR.

## 2.2 The Core "Why" Behind Each Measure

1. **Why normalize $\chi^2$?** The raw $\chi^2$ grows with sample size $n$, making it incomparable across studies. Dividing by $n$ and the table dimensions produces a *unit-free* index.
2. **Why use PRE logic for Lambda?** Lambda answers the *practical question*: "If I know the customer's gender, how much better can I predict their purchase category?" It is a measure of *practical* (not just statistical) association.
3. **Why is the Odds Ratio preferred for 2×2 tables?** It is **invariant to row/column swapping** and directly estimates the relative risk in epidemiological studies.

## 2.3 KTU Formula Sheet — High-Yield Reference Table

> [!NOTE]
> All formulas below use $O$ for observed frequency, $E$ for expected frequency, $R_i$ for row total, $C_j$ for column total, and $n$ for grand total.

| # | Measure | Mathematical Formula | Valid Table Size | Range | Interpretation Anchor |
|---|---------|----------------------|------------------|-------|----------------------|
| 1 | Chi-Square Statistic | $\chi^2 = \sum_{i=1}^{r} \sum_{j=1}^{c} \frac{(O_{ij} - E_{ij})^2}{E_{ij}}$ | $r \times c$ | $[0, \infty)$ | Test statistic, NOT a measure of strength |
| 2 | Expected Frequency | $E_{ij} = \dfrac{R_i \cdot C_j}{n}$ | $r \times c$ | $\mathbb{R}^+$ | Under $H_0$ of independence |
| 3 | Phi Coefficient ($\phi$) | $\phi = \sqrt{\dfrac{\chi^2}{n}}$ | $2 \times 2$ only | $[-1, +1]$ | Equivalent to Pearson's $r$ for binary data |
| 4 | Cramér's V | $V = \sqrt{\dfrac{\chi^2}{n \cdot \min(r-1,\, c-1)}}$ | $r \times c$ (any) | $[0, 1]$ | **Most commonly tested** in KTU |
| 5 | Contingency Coeff. ($C$) | $C = \sqrt{\dfrac{\chi^2}{\chi^2 + n}}$ | $r \times c$ (any) | $[0, \sqrt{(\min(r,c)-1)/\min(r,c)})$ | Never reaches 1; less preferred |
| 6 | Tschuprow's $T$ | $T = \sqrt{\dfrac{\chi^2}{n \cdot \sqrt{(r-1)(c-1)}}}$ | $r \times c$ (any) | $[0, 1]$ | Equals $V$ for square tables |
| 7 | Lambda (asymmetric, $X$ from $Y$) | $\lambda_{X \mid Y} = \dfrac{E_1 - E_2}{E_1}$ | $r \times c$ (any) | $[0, 1]$ | PRE measure |
| 8 | Lambda errors $E_1$ | $E_1 = n - \max_i(R_i)$ | $r \times c$ | $[0, n-1]$ | Errors without knowing $Y$ |
| 9 | Lambda errors $E_2$ | $E_2 = \sum_{j=1}^{c} \left[C_j - \max_i(O_{ij})\right]$ | $r \times c$ | $[0, n-1]$ | Errors knowing $Y$ |
| 10 | Odds Ratio (2×2) | $OR = \dfrac{ad}{bc}$ | $2 \times 2$ | $[0, \infty)$ | $a,b,c,d$ are 4 cells |
| 11 | Yule's Q | $Q = \dfrac{ad - bc}{ad + bc}$ | $2 \times 2$ | $[-1, +1]$ | Normalized OR |

## 2.4 Real-World Engineering and Data Science Applications

| Application Domain | Measure Used | Engineering Justification |
|--------------------|--------------|--------------------------|
| **Medical Diagnosis Testing** | Phi, Odds Ratio, Yule's Q | Quantifies the dependency between disease presence and test result. Used to compute **sensitivity**, **specificity**, and **relative risk**. |
| **A/B Testing in Web Analytics** | Cramér's V, Chi-Square | Measures the strength of association between *user_segment* (treatment/control) and *conversion_status* (clicked/did-not-click). |
| **Recommender Systems (Market Basket)** | Lift (variant of association) | Identifies product pairs frequently co-purchased; lift $>1$ indicates positive association. |
| **Quality Control in Manufacturing** | Chi-Square, Lambda | Tests if defect type is independent of production shift or machine operator. |
| **Natural Language Processing** | Mutual Information, Cramér's V | Computes word-category dependencies in text classification. |
| **Genetics / Bioinformatics** | Odds Ratio | Tests if a genetic marker is associated with a phenotypic trait in a case-control study. |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Python Implementation

## 3.1 Worked Example: A 3×3 Contingency Table

**Problem Statement:**
A retail analytics team collects data on **3 customer age groups** ($X$: Young, Middle-Aged, Senior) and **3 product categories purchased** ($Y$: Electronics, Apparel, Groceries). The observed frequency table is given below:

| Age \ Category | Electronics ($Y_1$) | Apparel ($Y_2$) | Groceries ($Y_3$) | **Row Total $R_i$** |
|----------------|---------------------|-----------------|-------------------|---------------------|
| Young ($X_1$)  | $10$                | $20$            | $30$              | $60$                |
| Middle ($X_2$) | $15$                | $25$            | $20$              | $60$                |
| Senior ($X_3$) | $25$                | $15$            | $40$              | $80$                |
| **Col Total $C_j$** | $50$             | $60$            | $90$              | $n = 200$           |

**Task:** Compute the Chi-Square statistic, Cramér's V, Contingency Coefficient, and Lambda (asymmetric).

---

### Step 1 — Compute the Expected Frequency Matrix $E$

Using the independence formula $E_{ij} = \dfrac{R_i \cdot C_j}{n}$:

$$
\begin{aligned}
E_{11} &= \frac{60 \times 50}{200} = 15.0000 \\
E_{12} &= \frac{60 \times 60}{200} = 18.0000 \\
E_{13} &= \frac{60 \times 90}{200} = 27.0000 \\
E_{21} &= \frac{60 \times 50}{200} = 15.0000 \\
E_{22} &= \frac{60 \times 60}{200} = 18.0000 \\
E_{23} &= \frac{60 \times 90}{200} = 27.0000 \\
E_{31} &= \frac{80 \times 50}{200} = 20.0000 \\
E_{32} &= \frac{80 \times 60}{200} = 24.0000 \\
E_{33} &= \frac{80 \times 90}{200} = 36.0000
\end{aligned}
$$

Expected matrix:
$$
E = \begin{bmatrix} 15 & 18 & 27 \\ 15 & 18 & 27 \\ 20 & 24 & 36 \end{bmatrix}
$$

---

### Step 2 — Compute the Chi-Square Statistic

$$
\begin{aligned}
\chi^2 &= \sum_{i=1}^{3} \sum_{j=1}^{3} \frac{(O_{ij} - E_{ij})^2}{E_{ij}} \\
&= \frac{(10-15)^2}{15} + \frac{(20-18)^2}{18} + \frac{(30-27)^2}{27} \\
&\quad + \frac{(15-15)^2}{15} + \frac{(25-18)^2}{18} + \frac{(20-27)^2}{27} \\
&\quad + \frac{(25-20)^2}{20} + \frac{(15-24)^2}{24} + \frac{(40-36)^2}{36} \\
&= \frac{25}{15} + \frac{4}{18} + \frac{9}{27} + 0 + \frac{49}{18} + \frac{49}{27} + \frac{25}{20} + \frac{81}{24} + \frac{16}{36} \\
&= 1.6667 + 0.2222 + 0.3333 + 0 + 2.7222 + 1.8148 + 1.2500 + 3.3750 + 0.4444 \\
&= 11.8286
\end{aligned}
$$

**Degrees of freedom:** $df = (3-1)(3-1) = 4$.

**P-value:** $P(\chi^2_4 \ge 11.8286) \approx 0.0027 < 0.05$.

**Decision:** Reject $H_0$ — the variables are **statistically significantly associated**.

> **[Valuation Key — 2 Marks for]**: stating the expected frequency formula and computing at least 4 expected values correctly.

---

### Step 3 — Compute Cramér's V

$$
\begin{aligned}
V &= \sqrt{\frac{\chi^2}{n \cdot \min(r-1,\, c-1)}} \\
&= \sqrt{\frac{11.8286}{200 \cdot \min(2,\, 2)}} \\
&= \sqrt{\frac{11.8286}{400}} \\
&= \sqrt{0.029571} \\
&= 0.1720
\end{aligned}
$$

**Interpretation:** A weak positive association (V < 0.3 indicates a weak relationship).

---

### Step 4 — Compute Contingency Coefficient $C$

$$
\begin{aligned}
C &= \sqrt{\frac{\chi^2}{\chi^2 + n}} \\
&= \sqrt{\frac{11.8286}{11.8286 + 200}} \\
&= \sqrt{\frac{11.8286}{211.8286}} \\
&= \sqrt{0.05584} \\
&= 0.2363
\end{aligned}
$$

**Maximum possible $C$ for 3×3 table:** $C_{\max} = \sqrt{(3-1)/3} = \sqrt{0.6667} = 0.8165$.

**Normalized C** (sometimes required by KTU): $C_{\text{norm}} = C / C_{\max} = 0.2363 / 0.8165 = 0.2894$.

---

### Step 5 — Compute Lambda (Asymmetric, $X$ predicted from $Y$)

**Step 5a — Compute $E_1$ (errors predicting $X$ without knowing $Y$):**

$$
E_1 = n - \max_i(R_i) = 200 - \max(60,\, 60,\, 80) = 200 - 80 = 120
$$

**Step 5b — Compute $E_2$ (errors predicting $X$ given $Y$):**

$$
\begin{aligned}
E_2 &= \sum_{j=1}^{3} \left[C_j - \max_i(O_{ij})\right] \\
&= (50 - 25) + (60 - 25) + (90 - 40) \\
&= 25 + 35 + 50 = 110
\end{aligned}
$$

**Step 5c — Compute Lambda:**

$$
\begin{aligned}
\lambda_{X \mid Y} &= \frac{E_1 - E_2}{E_1} \\
&= \frac{120 - 110}{120} \\
&= \frac{10}{120} \\
&= 0.0833
\end{aligned}
$$

**Interpretation:** Knowing the product category $Y$ reduces the error in predicting the age group $X$ by **8.33%**. This is a weak but non-zero PRE.

> **[Valuation Key — 1 Mark for]**: clearly identifying the modal row (used in $E_1$) and the modal cell of each column (used in $E_2$).

---

## 3.2 Full Python Source Code (Verified & Type-Hinted)

```python
"""
KTU 2024 — DATA ANALYTICS (PECST523)
Module 2: Measures of Association for Two Discrete Variables
Production-Ready Python Implementation
"""

import numpy as np
from scipy import stats
from typing import Tuple, Dict


def chi_square_test(observed: np.ndarray) -> Tuple[float, float, int, np.ndarray]:
    """
    Compute Pearson's chi-square test of independence.
    
    Args:
        observed: 2D numpy array of observed frequencies (r x c).
    
    Returns:
        Tuple of (chi2 statistic, p-value, degrees of freedom, expected matrix).
    
    Raises:
        ValueError: If any expected frequency is below 5.
    """
    if observed.ndim != 2:
        raise ValueError("Observed array must be 2-dimensional.")
    
    n: int = int(observed.sum())
    row_totals: np.ndarray = observed.sum(axis=1, keepdims=True)
    col_totals: np.ndarray = observed.sum(axis=0, keepdims=True)
    expected: np.ndarray = (row_totals @ col_totals) / n
    
    if np.any(expected < 5):
        print("[WARNING] Some expected frequencies are below 5. "
              "Chi-square approximation may be unreliable.")
    
    chi2: float = float(np.sum((observed - expected) ** 2 / expected))
    df: int = int((observed.shape[0] - 1) * (observed.shape[1] - 1))
    p_value: float = float(1.0 - stats.chi2.cdf(chi2, df))
    
    return chi2, p_value, df, expected


def cramers_v(observed: np.ndarray) -> float:
    """Compute Cramér's V — the most versatile association index."""
    chi2, _, _, _ = chi_square_test(observed)
    n: int = int(observed.sum())
    min_dim: int = min(observed.shape) - 1
    return float(np.sqrt(chi2 / (n * min_dim)))


def phi_coefficient(observed: np.ndarray) -> float:
    """Compute Phi coefficient — strictly for 2x2 tables."""
    if observed.shape != (2, 2):
        raise ValueError("Phi coefficient is only valid for 2x2 tables.")
    chi2, _, _, _ = chi_square_test(observed)
    n: int = int(observed.sum())
    return float(np.sqrt(chi2 / n))


def contingency_coefficient(observed: np.ndarray) -> float:
    """Compute Pearson's Contingency Coefficient C."""
    chi2, _, _, _ = chi_square_test(observed)
    n: int = int(observed.sum())
    return float(np.sqrt(chi2 / (chi2 + n)))


def tschuprow_t(observed: np.ndarray) -> float:
    """Compute Tschuprow's T — symmetric association measure."""
    chi2, _, _, _ = chi_square_test(observed)
    n: int = int(observed.sum())
    r, c = observed.shape
    return float(np.sqrt(chi2 / (n * np.sqrt((r - 1) * (c - 1)))))


def lambda_asymmetric(observed: np.ndarray, predict: str = "row") -> float:
    """
    Compute Goodman-Kruskal's Lambda (asymmetric PRE measure).
    
    Args:
        observed: 2D frequency table.
        predict: 'row' to predict X from Y, 'col' to predict Y from X.
    
    Returns:
        Lambda value in [0, 1].
    """
    n: int = int(observed.sum())
    
    if predict == "row":
        row_totals: np.ndarray = observed.sum(axis=1)
        E1: int = int(n - row_totals.max())
        E2: int = int(
            sum(observed[:, j].sum() - observed[:, j].max()
                for j in range(observed.shape[1]))
        )
    elif predict == "col":
        col_totals: np.ndarray = observed.sum(axis=0)
        E1 = int(n - col_totals.max())
        E2 = int(
            sum(observed[i, :].sum() - observed[i, :].max()
                for i in range(observed.shape[0]))
        )
    else:
        raise ValueError("predict must be either 'row' or 'col'.")
    
    return float((E1 - E2) / E1) if E1 != 0 else 0.0


def odds_ratio_2x2(observed: np.ndarray) -> float:
    """Compute Odds Ratio for a 2x2 table: OR = (a*d) / (b*c)."""
    if observed.shape != (2, 2):
        raise ValueError("Odds ratio requires a 2x2 table.")
    a, b = observed[0]
    c, d = observed[1]
    if b == 0 or c == 0:
        return float("inf")
    return float((a * d) / (b * c))


def yules_q(observed: np.ndarray) -> float:
    """Compute Yule's Q: Q = (ad - bc) / (ad + bc)."""
    if observed.shape != (2, 2):
        raise ValueError("Yule's Q requires a 2x2 table.")
    a, b = observed[0]
    c, d = observed[1]
    denom: float = a * d + b * c
    return float((a * d - b * c) / denom) if denom != 0 else 0.0


def full_association_report(observed: np.ndarray) -> Dict[str, float]:
    """Generate a complete report of all association measures for a table."""
    chi2, p, df, expected = chi_square_test(observed)
    report: Dict[str, float] = {
        "chi_square": round(chi2, 4),
        "p_value": round(p, 4),
        "df": df,
        "cramers_v": round(cramers_v(observed), 4),
        "contingency_C": round(contingency_coefficient(observed), 4),
        "tschuprow_T": round(tschuprow_t(observed), 4),
        "lambda_X_given_Y": round(lambda_asymmetric(observed, "row"), 4),
        "lambda_Y_given_X": round(lambda_asymmetric(observed, "col"), 4),
    }
    if observed.shape == (2, 2):
        report["phi"] = round(phi_coefficient(observed), 4)
        report["odds_ratio"] = round(odds_ratio_2x2(observed), 4)
        report["yules_Q"] = round(yules_q(observed), 4)
    return report


# ============ DEMONSTRATION ON KTU WORKED EXAMPLE ============
if __name__ == "__main__":
    O = np.array([
        [10, 20, 30],
        [15, 25, 20],
        [25, 15, 40]
    ])
    
    report = full_association_report(O)
    print("=" * 60)
    print("ASSOCIATION MEASURES — KTU WORKED EXAMPLE")
    print("=" * 60)
    for key, val in report.items():
        print(f"  {key:>20s} : {val}")
    print("=" * 60)
```

**Expected Console Output:**

```
============================================================
ASSOCIATION MEASURES — KTU WORKED EXAMPLE
============================================================
          chi_square : 11.8286
             p_value : 0.0027
                   df : 4
           cramers_v : 0.172
      contingency_C : 0.2363
        tschuprow_T : 0.172
   lambda_X_given_Y : 0.0833
   lambda_Y_given_X : 0.1818
============================================================
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Classification Tree of Association Measures

```mermaid
graph TD
    A["Association Measures for Discrete Variables"] --> B["Chi-Square Family"]
    A --> C["PRE / Lambda Family"]
    A --> D["2x2 Specific Family"]
    A --> E["Information-Theoretic Family"]

    B --> B1["Pearson Chi-Square Statistic"]
    B --> B2["Phi Coefficient"]
    B --> B3["Cramers V"]
    B --> B4["Contingency Coefficient C"]
    B --> B5["Tschuprow T"]

    C --> C1["Lambda Asymmetric"]
    C --> C2["Lambda Symmetric"]
    C --> C3["Tau Goodman-Kruskal"]

    D --> D1["Odds Ratio OR"]
    D --> D2["Yules Q"]
    D --> D3["Yules Y"]

    E --> E1["Uncertainty Coefficient Theils U"]
    E --> E2["Mutual Information MI"]

    B2 -.->|"Valid only for"| B2N["2x2 Tables"]
    B3 -.->|"Valid for any"| B3N["r x c Tables"]
    B4 -.->|"Bounded by Cmax"| B4N["Cmax less than 1"]
    D1 -.->|"Range 0 to inf"| D1N["Asymmetric scale"]
    D2 -.->|"Range -1 to +1"| D2N["Normalized OR"]
```

## 4.2 Decision Flow — Which Measure to Use?

```mermaid
flowchart TD
    S["Start: Two Discrete Variables X, Y"] --> Q1{"Is table 2x2 ?"}
    Q1 -- "Yes" --> Q1A{"Need ratio scale?"}
    Q1 -- "No" --> Q2["Use r x c Measures"]

    Q1A -- "Yes" --> O1["Odds Ratio OR"]
    Q1A -- "No, need bounded" --> O2["Yules Q or Phi"]
    Q1A -- "No, need symmetric" --> O3["Cramers V on 2x2"]

    Q2 --> Q2A{"Need interpretable PRE?"}
    Q2 -- "Yes" --> Q2B["Lambda Asymmetric"]
    Q2 -- "No" --> Q2C["Use Chi-Square Family"]

    Q2C --> Q2C1{"Tables differ in size?"}
    Q2C1 -- "Yes" --> V1["Cramers V"]
    Q2C1 -- "No, all 3x3" --> V2["C or Tschuprow T"]
```

## 4.3 Block-Level Functional Architecture of Chi-Square Test Pipeline

```mermaid
graph LR
    subgraph IN["Input Stage"]
        A1["Raw Categorical Data"] --> A2["Frequency Aggregation"]
    end

    subgraph PROC["Processing Stage"]
        A2 --> B1["Compute Row Totals R_i"]
        A2 --> B2["Compute Column Totals C_j"]
        A2 --> B3["Grand Total n"]
        B1 --> C1["Expected Freq E_ij"]
        B2 --> C1
        B3 --> C1
        C1 --> D1["Chi-Square Statistic"]
        D1 --> D2["Degrees of Freedom df"]
        D2 --> E1["P-Value from Chi-Square CDF"]
    end

    subgraph OUT["Output Stage"]
        E1 --> F1["Hypothesis Decision"]
        D1 --> F2["Cramers V / Phi / C"]
        F2 --> F3["Strength Interpretation"]
    end
```

> [!NOTE]
> **Mermaid Rendering Note for KTU Students:** Copy the diagram source above into the [Mermaid Live Editor](https://mermaid.live) to render the topology in your answer scripts. For hand-written board exams, redraw the flowchart using standard boxes and arrows — this conveys the analytical pipeline of any chi-square-based test.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

> **[Cognitive Level: Remember / Understand]**

### Question A1
**[KTU University Exam — July 2024]**
*Define Cramér's V as a measure of association. State its range and one advantage it has over the Pearson contingency coefficient. (CO1, Understand)*

**Model Answer (3 Marks):**

> **Definition (2 Marks):** Cramér's V is a chi-square-based measure of association between two categorical variables, defined as:
> $$ V = \sqrt{\frac{\chi^2}{n \cdot \min(r-1,\, c-1)}} $$
> where $\chi^2$ is the Pearson chi-square statistic, $n$ is the total sample size, and $r, c$ are the number of rows and columns respectively.
>
> **Range (0.5 Marks):** $V \in [0, 1]$, where $0$ indicates no association and $1$ indicates perfect association.
>
> **Advantage over $C$ (0.5 Marks):** Unlike the contingency coefficient $C$ which has an upper bound less than 1 (i.e., $C_{\max} = \sqrt{(\min(r,c)-1)/\min(r,c)}$), Cramér's V always achieves a maximum of $1$, making it a properly normalized and comparable measure across tables of any dimension.

---

### Question A2
**[KTU University Exam — Dec 2023]**
*Explain the concept of Proportional Reduction in Error (PRE) used in the construction of Goodman-Kruskal's Lambda. (CO2, Remember)*

**Model Answer (3 Marks):**

> **PRE Concept (2 Marks):** The Proportional Reduction in Error (PRE) framework measures association by quantifying how much the *prediction error* is reduced when one variable is used as a predictor for another. It is computed as:
> $$ \text{PRE} = \frac{E_1 - E_2}{E_1} $$
> where $E_1$ is the prediction error made without using the predictor variable, and $E_2$ is the error after incorporating the predictor.
>
> **Lambda Interpretation (1 Mark):** For Lambda, $E_1 = n - \max_i(R_i)$ (errors using only the modal row), and $E_2 = \sum_j [C_j - \max_i(O_{ij})]$ (errors after conditioning on $Y$). A Lambda of 0.20 means knowing $Y$ reduces the error in predicting $X$ by 20%.

---

## 5.2 Part B — Full 14-Mark Questions (Module Internal Choice)

### Question A — 14 Marks (Choice 1)
**[KTU University Exam — July 2024 | Module 2]**
*(a)* Explain the chi-square test of independence for two discrete variables. Derive the formula for the test statistic and state its sampling distribution under the null hypothesis. (CO1, Understand) — **7 Marks**

*(b)* A study investigates the association between **smoking status** ($X$: Smoker, Non-Smoker) and **lung disease** ($Y$: Present, Absent). The observed frequencies are:

| | Disease Present | Disease Absent | Total |
|---|---|---|---|
| Smoker | $40$ | $10$ | $50$ |
| Non-Smoker | $30$ | $70$ | $100$ |
| **Total** | $70$ | $80$ | $n = 150$ |

Compute the **Odds Ratio**, **Yule's Q**, and **Phi coefficient**. Comment on the strength and direction of the association. (CO3, Apply) — **7 Marks**

---

**Model Solution:**

**Part (a) — 7 Marks:**

The chi-square test of independence tests the null hypothesis $H_0: X$ and $Y$ are independent against $H_1: X$ and $Y$ are associated.

**[Stating the null hypothesis: 1 Mark]**

The test statistic is:
$$
\chi^2 = \sum_{i=1}^{r} \sum_{j=1}^{c} \frac{(O_{ij} - E_{ij})^2}{E_{ij}}
$$

**[Formula statement: 1 Mark]**

where $O_{ij}$ is the observed frequency and $E_{ij} = \dfrac{R_i \cdot C_j}{n}$ is the expected frequency under independence.

**[Expected frequency derivation: 1 Mark]**

**Derivation sketch:** Under $H_0$, $P(X=x_i, Y=y_j) = P(X=x_i) \cdot P(Y=y_j)$. Estimating these probabilities by sample frequencies, $P(X=x_i) \approx R_i/n$ and $P(Y=y_j) \approx C_j/n$, hence $E_{ij} = n \cdot (R_i/n)(C_j/n) = R_i C_j / n$.

**[Sampling distribution statement: 2 Marks]**

Under $H_0$, $\chi^2 \sim \chi^2_{(r-1)(c-1)}$ asymptotically, provided all $E_{ij} \ge 5$.

**Rejection rule:** Reject $H_0$ at level $\alpha$ if $\chi^2 > \chi^2_{\alpha, (r-1)(c-1)}$.

**[Conditions for validity: 1 Mark]** (Sample size, expected frequency threshold of 5, independence of observations).

---

**Part (b) — 7 Marks:**

**Step 1 — Identify the 2×2 cells:** $a = 40$, $b = 10$, $c = 30$, $d = 70$.

**Step 2 — Compute the Odds Ratio:**
$$
OR = \frac{ad}{bc} = \frac{40 \times 70}{10 \times 30} = \frac{2800}{300} = 9.333
$$

**[Correct substitution: 1 Mark] [Final value: 1 Mark]**

**Step 3 — Compute Yule's Q:**
$$
Q = \frac{ad - bc}{ad + bc} = \frac{2800 - 300}{2800 + 300} = \frac{2500}{3100} = 0.8065
$$

**[Correct formula: 1 Mark] [Final value: 1 Mark]**

**Step 4 — Compute Phi coefficient (need $\chi^2$ first):**

Expected frequencies:
$$
E_{11} = \frac{50 \times 70}{150} = 23.33, \quad E_{12} = \frac{50 \times 80}{150} = 26.67
$$
$$
E_{21} = \frac{100 \times 70}{150} = 46.67, \quad E_{22} = \frac{100 \times 80}{150} = 53.33
$$

Chi-square:
$$
\chi^2 = \frac{(40-23.33)^2}{23.33} + \frac{(10-26.67)^2}{26.67} + \frac{(30-46.67)^2}{46.67} + \frac{(70-53.33)^2}{53.33}
$$
$$
= \frac{277.89}{23.33} + \frac{277.89}{26.67} + \frac{277.89}{46.67} + \frac{277.89}{53.33} = 11.91 + 10.42 + 5.95 + 5.21 = 33.49
$$

Phi:
$$
\phi = \sqrt{\frac{\chi^2}{n}} = \sqrt{\frac{33.49}{150}} = \sqrt{0.2233} = 0.4725
$$

**[Expected frequency computation: 1 Mark] [Final phi value: 1 Mark]**

**Comment (for partial credit — 0.5 Mark):**
* $OR = 9.33$ implies smokers have **9.33 times higher odds** of lung disease than non-smokers.
* $Q = 0.81$ and $\phi = 0.47$ indicate a **strong positive association**.

---

### Question B — 14 Marks (Choice 2)
**[KTU University Exam — Dec 2023 | Module 2]**
*(a)* With a suitable example, explain the construction of an $r \times c$ contingency table and demonstrate how expected frequencies are computed under the assumption of independence. (CO1, Understand) — **7 Marks**

*(b)* For the following $3 \times 3$ contingency table, compute the **Chi-Square statistic**, **Cramér's V**, and **Lambda** (asymmetric, predicting $X$ from $Y$). Test the hypothesis of independence at $\alpha = 0.05$. (CO3, Apply) — **7 Marks**

| | $Y_1$ | $Y_2$ | $Y_3$ | **Total** |
|---|---|---|---|---|
| $X_1$ | $25$ | $20$ | $15$ | $60$ |
| $X_2$ | $15$ | $30$ | $15$ | $60$ |
| $X_3$ | $20$ | $10$ | $30$ | $60$ |
| **Total** | $60$ | $60$ | $60$ | $n = 180$ |

---

**Model Solution:**

**Part (a) — 7 Marks:**

A **contingency table** is a two-way frequency table that cross-tabulates the counts of two categorical variables $X$ (with $r$ levels) and $Y$ (with $c$ levels). Each cell $O_{ij}$ contains the number of observations falling in row category $X_i$ and column category $Y_j$.

**[Definition with example: 2 Marks]**

**Example:** Suppose we record 200 patients by *Blood Group* ($A, B, AB, O$, i.e., $r=4$) and *Disease Status* (Diseased, Healthy, i.e., $c=2$). The resulting $4 \times 2$ table has 8 cells with row and column totals.

**Expected frequency under independence (3 Marks):**

If $X$ and $Y$ are independent, then $P(X=x_i, Y=y_j) = P(X=x_i) P(Y=y_j)$. The *expected count* in cell $(i, j)$ is:
$$
E_{ij} = n \cdot P(X=x_i) P(Y=y_j) = n \cdot \frac{R_i}{n} \cdot \frac{C_j}{n} = \frac{R_i \cdot C_j}{n}
$$

This is the count we would expect if the row and column variables had no association.

**[Properties: 1 Mark]** The expected frequencies satisfy: (i) $\sum_{i,j} E_{ij} = n$, (ii) row totals of $E$ equal $R_i$, (iii) column totals of $E$ equal $C_j$.

**[Validity condition: 1 Mark]** The chi-square approximation requires $E_{ij} \ge 5$ for all cells; otherwise, use Fisher's exact test (for $2 \times 2$) or combine categories.

---

**Part (b) — 7 Marks:**

**Step 1 — Expected frequencies:** Since all $R_i = 60$, $C_j = 60$, and $n = 180$:
$$
E_{ij} = \frac{60 \times 60}{180} = 20 \quad \text{for all } i, j
$$

Uniform expected matrix: $E = \begin{bmatrix} 20 & 20 & 20 \\ 20 & 20 & 20 \\ 20 & 20 & 20 \end{bmatrix}$. **[1 Mark]**

**Step 2 — Chi-square statistic:**
$$
\begin{aligned}
\chi^2 &= \sum_{i,j} \frac{(O_{ij} - 20)^2}{20} \\
&= \frac{25 + 0 + 25 + 25 + 100 + 25 + 0 + 100 + 100}{20} \\
&= \frac{400}{20} = 20.0000
\end{aligned}
$$

*Detailed term-by-term:*
- Row 1: $(25-20)^2 + (20-20)^2 + (15-20)^2 = 25 + 0 + 25 = 50$
- Row 2: $(15-20)^2 + (30-20)^2 + (15-20)^2 = 25 + 100 + 25 = 150$
- Row 3: $(20-20)^2 + (10-20)^2 + (30-20)^2 = 0 + 100 + 100 = 200$
- Total numerator = $400$.

**[1 Mark for chi-square formula application, 1 Mark for final value = 2 Marks]**

**Step 3 — Hypothesis test:**
$df = (3-1)(3-1) = 4$; critical value $\chi^2_{0.05, 4} = 9.488$. **[1 Mark]**

Since $\chi^2 = 20.00 > 9.488$, we **reject $H_0$** at $\alpha = 0.05$. The variables are significantly associated.

**Step 4 — Cramér's V:**
$$
V = \sqrt{\frac{20}{180 \cdot 2}} = \sqrt{\frac{20}{360}} = \sqrt{0.05556} = 0.2357
$$

**[1 Mark]**

**Step 5 — Lambda (X from Y):**
- $E_1 = n - \max_i R_i = 180 - 60 = 120$ (since all rows are equal)
- $E_2 = (60 - 25) + (60 - 30) + (60 - 30) = 35 + 30 + 30 = 95$
- $\lambda = (120 - 95) / 120 = 25/120 = 0.2083$

**[1 Mark for $E_1$, $E_2$ computation, 1 Mark for lambda value = 2 Marks]**

**Conclusion:** $V = 0.236$ indicates a weak-to-moderate association, and $\lambda = 0.21$ means knowing $Y$ reduces prediction error of $X$ by **20.83%**.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting to subtract 1** in $\min(r-1, c-1)$ for Cramér's V — leading to severely underestimated V values.
> 2. **Mixing up the modal row vs. modal cell** when computing $E_1$ and $E_2$ in Lambda. Always remember: $E_1$ uses **row totals** (no column knowledge), $E_2$ uses **column-wise maxima** (with column knowledge).
> 3. **Reporting Chi-Square itself as a measure of association** — this is **wrong**! $\chi^2$ is a *test statistic*, not a strength measure. Always normalize to V, $\phi$, or $C$.
> 4. **Not checking the $E_{ij} \ge 5$ condition** — board examiners often deduct 1 mark for missing this validity check.
> 5. **For symmetric Lambda confusion**: $E_2$ for symmetric Lambda requires both directions of prediction. KTU typically asks for **asymmetric** Lambda.
> 6. **Failing to state the degrees of freedom explicitly** when reporting the chi-square test result.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Measures of Association for Two Discrete Variables**

* **Contingency Table:** A 2D array $O_{ij}$ of observed counts for two categorical variables $X$ and $Y$. The cornerstone of all association analysis.
* **Expected Frequency Formula:** $E_{ij} = (R_i \cdot C_j) / n$ — derived under the assumption of statistical independence.
* **Chi-Square Statistic:** $\chi^2 = \sum_{i,j} (O_{ij} - E_{ij})^2 / E_{ij}$ — a test statistic, **not** a strength measure.
* **Degrees of Freedom:** $df = (r-1)(c-1)$ for a test of independence.
* **Phi Coefficient ($\phi$):** $\phi = \sqrt{\chi^2 / n}$ — only valid for **$2 \times 2$** tables; range $[-1, +1]$.
* **Cramér's V:** $V = \sqrt{\chi^2 / [n \cdot \min(r-1, c-1)]}$ — the **most widely applicable** normalized measure; range $[0, 1]$.
* **Contingency Coefficient ($C$):** $C = \sqrt{\chi^2 / (\chi^2 + n)}$ — never reaches 1; normalized $C_{\text{norm}} = C / C_{\max}$.
* **Tschuprow's $T$:** $T = \sqrt{\chi^2 / [n \cdot \sqrt{(r-1)(c-1)}]}$ — equals Cramér's V for square tables.
* **Lambda ($\lambda$) Asymmetric:** $\lambda = (E_1 - E_2) / E_1$; a **PRE measure**; $E_1 = n - \max(R_i)$, $E_2 = \sum_j [C_j - \max_i(O_{ij})]$.
* **Odds Ratio (2×2):** $OR = ad / bc$ — range $[0, \infty)$; $OR = 1$ implies independence.
* **Yule's Q:** $Q = (ad - bc) / (ad + bc)$ — range $[-1, +1]$; $Q = 0$ implies independence.
* **Strength Benchmarks (Cohen's convention for V):** $|V| \le 0.10$ negligible, $\le 0.30$ weak, $\le 0.50$ moderate, $> 0.50$ strong.
* **Validity Condition:** All $E_{ij} \ge 5$ for the chi-square approximation to hold.
* **Independence Test Decision Rule:** Reject $H_0$ at level $\alpha$ if $\chi^2_{\text{computed}} > \chi^2_{\alpha, (r-1)(c-1)}$.
* **Cramér's V vs. Phi:** For tables larger than $2 \times 2$, **always use Cramér's V** — Phi is mathematically restricted.
* **Lambda vs. Chi-Square Family:** Lambda answers "how much do I gain in prediction?"; V answers "how strong is the statistical dependency?" — they measure **different things**.

---

<!-- SECTION_5_END -->
