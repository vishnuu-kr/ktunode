---
title: "Association Between Ordinal and Continuous Variables"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b710"
status: "completed"
scrapedAt: "2026-05-20T16:43:52.662Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables
## Topic: Association Between Ordinal and Continuous Variables

**Learning Outcomes:**

*   Understand the challenges in assessing association between ordinal and continuous variables.
*   Learn about rank-based correlation measures (Spearman's rho, Kendall's tau) and their application.
*   Be able to calculate and interpret Spearman's rho and Kendall's tau.
*   Understand the limitations of using Pearson's correlation for ordinal data.
*   Be able to choose an appropriate measure of association given the data type.
*   Understand how to interpret the results in the context of the data.
*   Recognize the difference between correlation and causation.

---

**1. Introduction: The Challenge**

*   When one variable is ordinal (ordered categories) and the other is continuous (numeric values), traditional methods like Pearson's correlation can be problematic.

*   **Why Pearson's Correlation is Problematic:** Pearson's correlation assumes linearity and interval scaling. Ordinal data lacks interval scaling (the difference between categories isn't necessarily equal). Treating ordinal data as interval can lead to misleading results.

*   **Example:**  Consider rating customer satisfaction (ordinal: Very Dissatisfied, Dissatisfied, Neutral, Satisfied, Very Satisfied) against purchase amount (continuous: $ amount).  Assigning numerical values (1, 2, 3, 4, 5) to the satisfaction levels and then calculating Pearson's correlation may not accurately reflect the relationship, as the "distance" between "Dissatisfied" and "Neutral" may not be the same as the "distance" between "Satisfied" and "Very Satisfied."

---

**2. Rank-Based Correlation Measures**

*   **Key Concept:** Rank-based methods rely on converting both the ordinal and continuous variables into ranks. This avoids the issue of assuming interval scaling for the ordinal variable.

*   **Types of Rank-Based Correlations:**
    *   **Spearman's Rho (ρ or r<sub>s</sub>):** Measures the strength and direction of the *monotonic* relationship between two variables.  A monotonic relationship means that as one variable increases, the other tends to either increase or decrease consistently, but not necessarily at a constant rate.
    *   **Kendall's Tau (τ):**  Measures the degree of similarity in the rankings of two variables. It is based on counting the number of concordant and discordant pairs.

---

**3. Spearman's Rho (ρ or r<sub>s</sub>)**

*   **Definition:** Spearman's rho is Pearson's correlation calculated on the *ranks* of the data.  It assesses how well the relationship between two variables can be described using a monotonic function.

*   **Calculation Steps:**
    1.  **Rank both variables:** Assign ranks to each variable separately.  Handle ties by assigning the average rank.
    2.  **Calculate the difference in ranks (d<sub>i</sub>):**  For each pair of observations, subtract the rank of variable Y from the rank of variable X (d<sub>i</sub> = rank(X<sub>i</sub>) - rank(Y<sub>i</sub>)).
    3.  **Square the differences (d<sub>i</sub><sup>2</sup>):** Square each of the rank differences.
    4.  **Sum the squared differences (Σd<sub>i</sub><sup>2</sup>):**  Add up all the squared differences.
    5.  **Calculate Spearman's Rho:**
        ```
        ρ = 1 - (6 * Σd<sub>i</sub><sup>2</sup>) / (n * (n<sup>2</sup> - 1))
        ```
        Where:
        *   n = number of observations (pairs of data)
        *   Σd<sub>i</sub><sup>2</sup> = sum of squared differences in ranks

*   **Interpretation:**
    *   ρ ranges from -1 to +1.
    *   ρ = +1: Perfect positive monotonic relationship (as one variable increases, the other always increases).
    *   ρ = -1: Perfect negative monotonic relationship (as one variable increases, the other always decreases).
    *   ρ = 0: No monotonic relationship.
    *   Values closer to +1 or -1 indicate a stronger monotonic relationship.

*   **Example:**

    | Customer ID | Satisfaction (Ordinal) | Purchase Amount ($) |
    |-------------|-------------------------|----------------------|
    | 1           | Dissatisfied            | 50                   |
    | 2           | Neutral               | 75                   |
    | 3           | Very Satisfied        | 150                  |
    | 4           | Satisfied             | 100                  |
    | 5           | Dissatisfied            | 60                   |

    **Solution:**

    1.  **Assign Ranks:** (Assuming Satisfaction is converted to numeric 1-5 for ranking purposes where Dissatisfied=1, Neutral=2, Satisfied=3, Very Satisfied=4)

    | Customer ID | Satisfaction Rank | Purchase Amount Rank |
    |-------------|---------------------|------------------------|
    | 1           | 1.5                 | 1                      |
    | 2           | 3                   | 2                      |
    | 3           | 5                 | 5                      |
    | 4           | 4                 | 4                      |
    | 5           | 1.5                 | 3                      |

    2.  **Calculate Differences, Square, and Sum:**

    | Customer ID | Satisfaction Rank | Purchase Amount Rank | d<sub>i</sub> | d<sub>i</sub><sup>2</sup> |
    |-------------|---------------------|------------------------|-----------|----------------|
    | 1           | 1.5                 | 1                      | 0.5       | 0.25           |
    | 2           | 3                   | 2                      | 1         | 1              |
    | 3           | 5                 | 5                      | 0        | 0            |
    | 4           | 4                 | 4                      | 0         | 0              |
    | 5           | 1.5                 | 3                      | -1.5       | 2.25           |
    | **Totals**  |                     |                        |           | **3.5**          |

    3.  **Calculate Spearman's Rho:**

    ρ = 1 - (6 * 3.5) / (5 * (5<sup>2</sup> - 1))
    ρ = 1 - (21) / (5 * 24)
    ρ = 1 - (21 / 120)
    ρ = 1 - 0.175
    ρ = 0.825

    **Interpretation:**  Spearman's rho is 0.825, suggesting a strong positive monotonic relationship between customer satisfaction and purchase amount.  As satisfaction increases, purchase amount tends to increase as well.

---

**4. Kendall's Tau (τ)**

*   **Definition:** Kendall's tau measures the degree of similarity between two rankings by counting concordant and discordant pairs.

*   **Key Concepts:**
    *   **Concordant Pair:** A pair of observations where the ranks of both variables are in the same order.  If observation A has a higher rank in both variables than observation B, then A and B are a concordant pair.
    *   **Discordant Pair:** A pair of observations where the ranks of the variables are in opposite orders.  If observation A has a higher rank in variable X but a lower rank in variable Y than observation B, then A and B are a discordant pair.

*   **Calculation Steps:**
    1.  **Rank both variables:** Assign ranks to each variable separately. Handle ties by assigning average ranks.
    2.  **Count Concordant (C) and Discordant (D) Pairs:**  Compare each pair of observations.
    3.  **Calculate Kendall's Tau:**
        ```
        τ = (C - D) / (n * (n - 1) / 2)
        ```
        Where:
        *   C = number of concordant pairs
        *   D = number of discordant pairs
        *   n = number of observations

*   **Interpretation:**
    *   τ ranges from -1 to +1.
    *   τ = +1: Perfect agreement in rankings.
    *   τ = -1: Perfect disagreement in rankings.
    *   τ = 0: No association between rankings.

*   **Example (Using the same data as before):**

    | Customer ID | Satisfaction (Ordinal) | Purchase Amount ($) |
    |-------------|-------------------------|----------------------|
    | 1           | Dissatisfied            | 50                   |
    | 2           | Neutral               | 75                   |
    | 3           | Very Satisfied        | 150                  |
    | 4           | Satisfied             | 100                  |
    | 5           | Dissatisfied            | 60                   |

    **Solution:**

    1.  **Rank both variables:**  (Same rankings as before)

    | Customer ID | Satisfaction Rank | Purchase Amount Rank |
    |-------------|---------------------|------------------------|
    | 1           | 1.5                 | 1                      |
    | 2           | 3                   | 2                      |
    | 3           | 5                 | 5                      |
    | 4           | 4                 | 4                      |
    | 5           | 1.5                 | 3                      |

    2.  **Count Concordant and Discordant Pairs:** (Remember, we are comparing *pairs* of customers.)

    *   **Comparing Customer 1 to others:**
        *   1 vs 2: (1.5, 1) vs (3, 2) - Concordant
        *   1 vs 3: (1.5, 1) vs (5, 5) - Concordant
        *   1 vs 4: (1.5, 1) vs (4, 4) - Concordant
        *   1 vs 5: (1.5, 1) vs (1.5, 3) - Discordant
    *   **Comparing Customer 2 to others (excluding Customer 1, already compared):**
        *   2 vs 3: (3, 2) vs (5, 5) - Concordant
        *   2 vs 4: (3, 2) vs (4, 4) - Concordant
        *   2 vs 5: (3, 2) vs (1.5, 3) - Discordant
    *   **Comparing Customer 3 to others (excluding Customers 1 & 2):**
        *   3 vs 4: (5, 5) vs (4, 4) - Discordant
        *   3 vs 5: (5, 5) vs (1.5, 3) - Discordant
    *   **Comparing Customer 4 to Customer 5:**
        *   4 vs 5: (4, 4) vs (1.5, 3) - Discordant

    C = 6 (Concordant Pairs)
    D = 4 (Discordant Pairs)

    3.  **Calculate Kendall's Tau:**

    τ = (6 - 4) / (5 * (5 - 1) / 2)
    τ = 2 / (5 * 4 / 2)
    τ = 2 / 10
    τ = 0.2

    **Interpretation:** Kendall's tau is 0.2, suggesting a positive association between customer satisfaction and purchase amount.  While positive, the strength of the association is weaker than suggested by Spearman's rho.

---

**5. Choosing Between Spearman's Rho and Kendall's Tau**

*   **Spearman's Rho:** More sensitive to monotonic relationships, especially when the relationship is close to linear. More commonly used.

*   **Kendall's Tau:**  More robust to outliers. Better reflects the proportion of concordant and discordant pairs.  Some statisticians prefer Tau because it can be generalized to partial correlation which controls for the effects of other variables.

*   **In general, both will give similar results, but Kendall's Tau is often preferred when dealing with outliers or heavy-tailed distributions.**

---

**6. Important Considerations**

*   **Correlation vs. Causation:**  A correlation between two variables does not imply that one causes the other.  There may be a third, unobserved variable influencing both.  Consider lurking variables and potential confounding factors.
*   **Sample Size:**  Larger sample sizes provide more reliable estimates of the correlation.
*   **Assumptions:** Rank-based correlations are less restrictive than Pearson's correlation, but they still assume that the data is ordered.
*   **Visualizations:** Always plot your data! A scatter plot (or a variation suitable for ordinal data, like a heatmap) can help you visualize the relationship and identify potential issues like non-monotonicity or outliers.

---

**7. Practice Questions & Exercises**

**Question 1:**

A company is analyzing the relationship between employee performance rating (Poor, Fair, Good, Excellent) and years of experience. The following data is collected:

| Employee ID | Performance Rating | Years of Experience |
|-------------|--------------------|---------------------|
| 1           | Poor               | 2                   |
| 2           | Fair               | 5                   |
| 3           | Good               | 8                   |
| 4           | Excellent          | 12                  |
| 5           | Fair               | 3                   |
| 6           | Good               | 7                   |

Calculate Spearman's Rho and interpret the result.

**Answer:**

1.  **Assign ranks:** (Poor=1, Fair=2, Good=3, Excellent=4)

    | Employee ID | Performance Rank | Experience Rank |
    |-------------|------------------|-----------------|
    | 1           | 1                | 1               |
    | 2           | 2.5              | 3               |
    | 3           | 3.5              | 5               |
    | 4           | 4                | 6               |
    | 5           | 2.5              | 2               |
    | 6           | 3.5              | 4               |

2.  **Calculate d<sub>i</sub> and d<sub>i</sub><sup>2</sup>:**

    | Employee ID | Performance Rank | Experience Rank | d<sub>i</sub> | d<sub>i</sub><sup>2</sup> |
    |-------------|------------------|-----------------|-----------|----------------|
    | 1           | 1                | 1               | 0         | 0              |
    | 2           | 2.5              | 3               | -0.5      | 0.25           |
    | 3           | 3.5              | 5               | -1.5      | 2.25           |
    | 4           | 4                | 6               | -2        | 4              |
    | 5           | 2.5              | 2               | 0.5       | 0.25           |
    | 6           | 3.5              | 4               | -0.5      | 0.25           |
    | **Totals**  |                  |                 |           | **7**            |

3.  **Calculate Spearman's Rho:**

    ρ = 1 - (6 * 7) / (6 * (6<sup>2</sup> - 1))
    ρ = 1 - (42) / (6 * 35)
    ρ = 1 - (42 / 210)
    ρ = 1 - 0.2
    ρ = 0.8

**Interpretation:** Spearman's rho is 0.8, suggesting a strong positive monotonic relationship between employee performance rating and years of experience.  More experienced employees tend to have higher performance ratings.

**Question 2:**

Explain why Pearson's correlation is generally not appropriate for measuring the association between an ordinal variable and a continuous variable.

**Answer:**

Pearson's correlation assumes that both variables have interval scaling and that the relationship between them is linear. Ordinal variables do not have interval scaling; the difference between consecutive categories may not be equal or meaningful.  Treating an ordinal variable as if it has interval scaling can lead to misleading or inaccurate results when calculating Pearson's correlation. Rank-based methods like Spearman's rho and Kendall's tau are more appropriate because they focus on the *order* of the data rather than assuming specific distances between categories.

---

**8. Important Points to Remember:**

*   When dealing with ordinal and continuous variables, Pearson's correlation can be misleading.
*   Rank-based methods (Spearman's rho, Kendall's tau) are more appropriate.
*   Spearman's rho measures the strength of the monotonic relationship.
*   Kendall's tau measures the similarity in rankings based on concordant and discordant pairs.
*   Correlation does not equal causation!
*   Always visualize your data to gain a better understanding of the relationship.

This comprehensive study guide covers the learning outcomes, key concepts, definitions, examples, and practice questions for understanding the association between ordinal and continuous variables. Remember to practice and apply these concepts to solidify your understanding. Good luck!
