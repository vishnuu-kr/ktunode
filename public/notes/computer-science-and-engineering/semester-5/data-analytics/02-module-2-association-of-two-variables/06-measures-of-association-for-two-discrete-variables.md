---
title: "Measures of Association for Two Discrete Variables"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70f"
status: "completed"
scrapedAt: "2026-05-20T16:43:51.960Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables
## Topic: Measures of Association for Two Discrete Variables

**Learning Outcomes:**

*   Understand the concept of association between two discrete variables.
*   Calculate and interpret various measures of association for categorical data:
    *   Chi-Square Statistic
    *   Phi Coefficient (Φ)
    *   Cramer's V
    *   Odds Ratio
    *   Relative Risk (Risk Ratio)
*   Explain the limitations of each measure.
*   Determine the appropriate measure of association based on the nature of the data and research question.
*   Use software (e.g., Python libraries like SciPy and Statsmodels) to compute these measures.

---

### 1. Concept of Association Between Two Discrete Variables

*   **Definition:** Association between two discrete (categorical) variables refers to the relationship or dependence between them.  It implies that the values of one variable influence or are related to the values of the other variable.  Association does *not* necessarily imply causation.
*   **Independence:** Two variables are independent if the occurrence of one does not affect the probability of the occurrence of the other. In this case, there is no association.
*   **Contingency Table:**  A contingency table (also known as a cross-tabulation) is a table that summarizes the frequency distribution of two or more categorical variables. It's the starting point for calculating measures of association.

    *   Rows represent categories of one variable.
    *   Columns represent categories of the other variable.
    *   Cells contain the frequency (count) of observations falling into each combination of categories.
*   **Marginal Totals:** The sums of the rows and columns in a contingency table.

**Example:**

Consider the following contingency table showing the relationship between Smoking Status and Lung Cancer:

|                   | Lung Cancer | No Lung Cancer | Total |
|-------------------|-------------|----------------|-------|
| Smoker            | 60          | 40             | 100   |
| Non-Smoker        | 10          | 90             | 100   |
| **Total**        | 70          | 130            | 200   |

This table shows the frequencies of individuals with and without lung cancer, categorized by their smoking status. We want to determine if there's an association between smoking and lung cancer.

---

### 2. Measures of Association for Two Discrete Variables

#### 2.1 Chi-Square Statistic (χ²)

*   **Purpose:** Tests whether there is a statistically significant association between two categorical variables.  It assesses whether the observed frequencies in the contingency table differ significantly from the frequencies we would expect if the variables were independent.
*   **Hypotheses:**
    *   Null Hypothesis (H0): The two variables are independent.
    *   Alternative Hypothesis (H1): The two variables are associated.
*   **Formula:**  χ² = Σ [(Oᵢ - Eᵢ)² / Eᵢ]
    *   Oᵢ: Observed frequency in cell i.
    *   Eᵢ: Expected frequency in cell i under the assumption of independence.
    *   Expected Frequency Calculation:  Eᵢ = (Row Total * Column Total) / Grand Total
*   **Degrees of Freedom:** (number of rows - 1) * (number of columns - 1)
*   **Interpretation:**
    *   A large χ² value indicates a strong deviation from independence and suggests a statistically significant association.
    *   Compare the calculated χ² value to a critical value from a χ² distribution table (or use the p-value).  If the χ² value exceeds the critical value (or the p-value is less than the significance level α, typically 0.05), reject the null hypothesis and conclude that there is a statistically significant association.
*   **Limitations:**
    *   Sensitive to sample size.  A small association can be statistically significant with a large sample size.
    *   Does not indicate the strength or direction of the association. It only tells you if an association exists.
    *   Not appropriate for small expected frequencies (generally, expected frequencies should be at least 5 in each cell).
    *   Doesn't tell you anything about the *strength* of the association, only whether it's *statistically significant*.

**Example (Continuing from above):**

1.  **Calculate Expected Frequencies:**

    *   E(Smoker, Lung Cancer) = (100 * 70) / 200 = 35
    *   E(Smoker, No Lung Cancer) = (100 * 130) / 200 = 65
    *   E(Non-Smoker, Lung Cancer) = (100 * 70) / 200 = 35
    *   E(Non-Smoker, No Lung Cancer) = (100 * 130) / 200 = 65

2.  **Calculate Chi-Square Statistic:**

    χ² = [(60 - 35)² / 35] + [(40 - 65)² / 65] + [(10 - 35)² / 35] + [(90 - 65)² / 65]
    χ² = (625/35) + (625/65) + (625/35) + (625/65)
    χ² = 17.86 + 9.62 + 17.86 + 9.62 = 54.96

3.  **Degrees of Freedom:** (2 - 1) * (2 - 1) = 1

4.  **Interpretation:** Looking up the critical value for χ² with 1 degree of freedom at α = 0.05, we find it to be 3.841.  Since 54.96 > 3.841, we reject the null hypothesis.  There is a statistically significant association between smoking and lung cancer. We can also get a p-value (using a statistical calculator or software). If p < 0.05, we reject the null hypothesis.

#### 2.2 Phi Coefficient (Φ)

*   **Purpose:** Measures the strength and direction of association between *two binary* (2x2) categorical variables.
*   **Formula:**  Φ = (ad - bc) / √((a+b)(c+d)(a+c)(b+d))
    *   a, b, c, and d are the cell frequencies in the 2x2 contingency table:

        |       | Variable 2 = Yes | Variable 2 = No |
        |-------|-------------------|------------------|
        | Variable 1 = Yes | a                 | b                |
        | Variable 1 = No  | c                 | d                |
*   **Interpretation:**
    *   Values range from -1 to +1.
    *   Φ = 0 indicates no association.
    *   Φ = +1 indicates a perfect positive association.
    *   Φ = -1 indicates a perfect negative association.
    *   The sign indicates the direction of the association.
*   **Relationship to Chi-Square:** Φ = √(χ² / n), where n is the total sample size.
*   **Limitations:**
    *   Only applicable to 2x2 contingency tables (two binary variables).
    *   Sensitive to marginal distributions (the row and column totals). Maximum value is 1 or -1 only when marginal distributions are equal.

**Example (Continuing from above):**

|                   | Lung Cancer (Yes) | No Lung Cancer (No) | Total |
|-------------------|-------------------|---------------------|-------|
| Smoker (Yes)            | 60                | 40                  | 100   |
| Non-Smoker (No)        | 10                | 90                  | 100   |
| **Total**        | 70                | 130                 | 200   |

Φ = (60 * 90 - 40 * 10) / √((100)(100)(70)(130))
Φ = (5400 - 400) / √(91000000)
Φ = 5000 / 9539.39
Φ ≈ 0.524

Interpretation:  The Phi coefficient is approximately 0.524, indicating a moderate positive association between smoking and lung cancer.

#### 2.3 Cramer's V

*   **Purpose:** Measures the strength of association between *two categorical variables of any size* (i.e., not limited to 2x2 tables). It is a normalized version of the Chi-Square statistic, making it less sensitive to sample size and table dimensions.
*   **Formula:** V = √(χ² / (n * min(k-1, r-1)))
    *   χ² is the Chi-Square statistic.
    *   n is the total sample size.
    *   k is the number of columns.
    *   r is the number of rows.
    *   min(k-1, r-1) is the smaller of (number of columns - 1) and (number of rows - 1).
*   **Interpretation:**
    *   Values range from 0 to 1.
    *   V = 0 indicates no association.
    *   V = 1 indicates a perfect association.
    *   The closer V is to 1, the stronger the association.
*   **Limitations:**
    *   Does not indicate the direction of the association (only the strength).
    *   Can be difficult to interpret the magnitude of the association in real-world terms.

**Example (Continuing from above - although Cramer's V is really for tables larger than 2x2 to provide benefit):**

V = √(54.96 / (200 * min(2-1, 2-1)))
V = √(54.96 / (200 * 1))
V = √(0.2748)
V ≈ 0.524

Interpretation: Cramer's V is approximately 0.524, indicating a moderate association between smoking and lung cancer.  In this specific 2x2 case, Cramer's V is equal to the absolute value of Phi.

#### 2.4 Odds Ratio (OR)

*   **Purpose:**  Measures the odds of an event occurring in one group compared to the odds of it occurring in another group.  Primarily used for 2x2 contingency tables.
*   **Formula:** OR = (odds of event in group 1) / (odds of event in group 2) = (a/b) / (c/d) = ad/bc
    *   a, b, c, and d are the cell frequencies in the 2x2 contingency table (as defined in the Phi Coefficient section).
*   **Interpretation:**
    *   OR = 1: The event is equally likely in both groups (no association).
    *   OR > 1: The event is more likely in group 1 than in group 2.
    *   OR < 1: The event is less likely in group 1 than in group 2.
    *   An OR of 2 means the odds of the event are twice as high in group 1.
    *   An OR of 0.5 means the odds of the event are half as high in group 1 (or twice as low).
*   **Advantages:**
    *   Symmetrical:  The OR for A given B is the inverse of the OR for B given A.
    *   Useful in retrospective studies (case-control studies) where relative risk cannot be directly calculated.
*   **Limitations:**
    *   Can be misinterpreted as relative risk, especially when the event is common. OR approximates RR when the event is rare.

**Example (Continuing from above):**

OR = (60 * 90) / (40 * 10)
OR = 5400 / 400
OR = 13.5

Interpretation: The odds of having lung cancer are 13.5 times higher for smokers than for non-smokers.

#### 2.5 Relative Risk (RR) / Risk Ratio

*   **Purpose:**  Measures the ratio of the probability of an event occurring in an exposed group to the probability of the event occurring in an unexposed group. Useful in prospective studies (cohort studies).
*   **Formula:** RR = (probability of event in group 1) / (probability of event in group 2) = [a / (a+b)] / [c / (c+d)]
    *   a, b, c, and d are the cell frequencies in the 2x2 contingency table (as defined in the Phi Coefficient section).
*   **Interpretation:**
    *   RR = 1: The risk of the event is the same in both groups (no association).
    *   RR > 1: The risk of the event is higher in group 1 than in group 2.
    *   RR < 1: The risk of the event is lower in group 1 than in group 2.
    *   An RR of 2 means the risk of the event is twice as high in group 1.
    *   An RR of 0.5 means the risk of the event is half as high in group 1.
*   **Advantages:**
    *   More intuitive interpretation than the odds ratio, especially when the event is common.
*   **Limitations:**
    *   Cannot be directly calculated in retrospective studies (case-control studies) where the probability of exposure is not known.

**Example (Continuing from above):**

RR = [60 / (60 + 40)] / [10 / (10 + 90)]
RR = (60 / 100) / (10 / 100)
RR = 0.6 / 0.1
RR = 6

Interpretation: The risk of developing lung cancer is 6 times higher for smokers than for non-smokers.

---

### 3. Limitations of Each Measure

*   **Chi-Square:** Sensitive to sample size, doesn't indicate strength or direction, requires sufficient expected frequencies.
*   **Phi Coefficient:** Limited to 2x2 tables, sensitive to marginal distributions.
*   **Cramer's V:** Doesn't indicate direction, interpretation of magnitude can be challenging.
*   **Odds Ratio:** Can be misinterpreted as relative risk when the event is common.
*   **Relative Risk:** Cannot be directly calculated in retrospective studies.

---

### 4. Determining the Appropriate Measure of Association

*   **Nature of the Variables:** Are the variables binary or multi-categorical?
*   **Research Question:** Are you interested in testing for a general association (Chi-Square), the strength and direction of association (Phi, Cramer's V), the odds of an event (Odds Ratio), or the relative risk of an event (Relative Risk)?
*   **Study Design:** Is it a prospective (cohort) or retrospective (case-control) study?
*   **Table Size:** Is it a 2x2 table or a larger contingency table?
*   **Sample Size:**  Consider the impact of sample size on statistical significance.
*   **Expected Frequencies:** Ensure expected frequencies are sufficient for Chi-Square.

**Decision Table:**

| Feature                | Chi-Square | Phi Coefficient | Cramer's V | Odds Ratio | Relative Risk |
|-------------------------|------------|-----------------|------------|------------|---------------|
| Table Size             | Any        | 2x2             | Any        | 2x2        | 2x2           |
| Variable Type           | Categorical| Binary          | Categorical| Binary     | Binary        |
| Direction of Association | No         | Yes             | No         | N/A         | N/A           |
| Retrospective Study     | OK         | OK              | OK         | OK         | Not directly calculable |
| Strength of Association  | No         | Yes             | Yes        | Yes          | Yes             |

---

### 5. Using Software (Python)

```python
import numpy as np
from scipy.stats import chi2_contingency
from statsmodels.stats.contingency_tables import Table2x2

# Contingency table (from our smoking/lung cancer example)
observed = np.array([[60, 40], [10, 90]])

# Chi-Square test
chi2, p, dof, expected = chi2_contingency(observed)
print("Chi-Square Statistic:", chi2)
print("P-value:", p)
print("Degrees of Freedom:", dof)
print("Expected Frequencies:\n", expected)

# Phi Coefficient (using the chi-square value)
phi = np.sqrt(chi2 / observed.sum())
print("Phi Coefficient:", phi)

# Cramer's V
n = observed.sum()
min_dim = min(observed.shape[0] - 1, observed.shape[1] - 1)
cramers_v = np.sqrt(chi2 / (n * min_dim))
print("Cramer's V:", cramers_v)


# Odds Ratio and Relative Risk (using statsmodels)
table = Table2x2(observed)
print("Odds Ratio:", table.oddsratio)
print("Relative Risk:", table.riskratio) #this calculates both

```

---

### 6. Practice Questions/Exercises with Answers

1.  **Question:** A study examines the relationship between political affiliation (Democrat, Republican, Independent) and opinion on a specific policy (Support, Oppose, Neutral). The contingency table is as follows:

    |             | Support | Oppose | Neutral | Total |
    |-------------|---------|--------|---------|-------|
    | Democrat    | 80      | 20     | 10      | 110   |
    | Republican  | 30      | 70     | 10      | 110   |
    | Independent | 40      | 40     | 20      | 100   |
    | **Total**  | 150     | 130    | 40      | 320   |

    a)  Calculate the Chi-Square statistic.
    b)  Determine the degrees of freedom.
    c)  Calculate Cramer's V.
    d)  Interpret the results.

    **Answer:**

    a)  χ² ≈ 62.86
        *   (Detailed calculation omitted for brevity; use the formula and contingency table.)

    b)  Degrees of Freedom: (3 - 1) * (3 - 1) = 4

    c)  Cramer's V ≈ 0.313
        *   V = √(62.86 / (320 * min(2, 2))) = √(62.86 / 640) ≈ 0.313

    d)  Interpretation: The Chi-Square statistic is large, suggesting a statistically significant association between political affiliation and opinion on the policy. Cramer's V indicates a moderate association between the variables.

2.  **Question:** A researcher investigates the association between gender (Male, Female) and whether someone has ever been arrested (Yes, No). The following data is collected:

    |         | Arrested (Yes) | Arrested (No) | Total |
    |---------|----------------|---------------|-------|
    | Male    | 45             | 55            | 100   |
    | Female  | 20             | 80            | 100   |
    | **Total**| 65             | 135           | 200   |

    a) Calculate the Odds Ratio.
    b) Calculate the Relative Risk.
    c) Calculate the Phi Coefficient.
    d) Interpret the results.

    **Answer:**

    a) Odds Ratio: OR = (45 * 80) / (55 * 20) = 3600 / 1100 ≈ 3.27

    b) Relative Risk: RR = (45/100) / (20/100) = 0.45 / 0.20 = 2.25

    c) Phi Coefficient: Calculate Chi-Square first. χ² =  [(45-32.5)^2/32.5] + [(55-67.5)^2/67.5] + [(20-32.5)^2/32.5] + [(80-67.5)^2/67.5] = 4.808 + 2.315 + 4.808 + 2.315 = 14.246.  Then Φ = √(14.246/200) = 0.267

    d) Interpretation:
        *   Odds Ratio: The odds of being arrested are approximately 3.27 times higher for males than for females.
        *   Relative Risk: The risk of being arrested is 2.25 times higher for males than for females.
        *   Phi Coefficient:  The Phi coefficient is 0.267, indicating a weak positive association between being male and being arrested.

---

### 7. Important Points to Remember

*   Association does not equal causation.
*   Choose the appropriate measure based on the nature of the variables, research question, and study design.
*   Be aware of the limitations of each measure.
*   Consider the impact of sample size and expected frequencies on your results.
*   Interpret the measures in the context of your research question and data.
*   Always report confidence intervals for Odds Ratios and Relative Risks for a better understanding of the precision of the estimates.  Software packages such as R or Python readily compute these.
