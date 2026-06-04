---
title: "Association of two variables - Discrete variables"
subject: "DATA ANALYTICS"
module: "Module 1: Introduction to Data Analytics:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b702"
status: "completed"
scrapedAt: "2026-05-20T16:43:40.278Z"
---
## DATA ANALYTICS - Module 1: Introduction to Data Analytics - Association of Two Variables - Discrete Variables

**Learning Outcomes:**

*   Understand the concept of association between two discrete variables.
*   Calculate and interpret the Chi-Square statistic.
*   Apply the Chi-Square test of independence to determine if two discrete variables are associated.
*   Interpret results of the Chi-Square test and draw meaningful conclusions.
*   Understand the limitations of the Chi-Square test.
*   Understand alternative association measures like Cramer's V.

---

### 1. Introduction to Association of Two Variables

*   **Concept:** Association between two variables means that the values of one variable are related to, or influence, the values of another variable. This does *not* necessarily imply causation.

*   **Discrete Variables:** Variables that can only take on a finite number of values or countably infinite number of values.  Examples include:
    *   Gender (Male, Female, Other)
    *   Marital Status (Single, Married, Divorced, Widowed)
    *   Education Level (High School, Bachelor's, Master's, Doctorate)
    *   Customer Satisfaction (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied)

*   **Goal:** To determine if an association exists between two discrete variables and quantify the strength of that association.

### 2. Contingency Tables

*   **Definition:** A contingency table (also called a cross-tabulation or cross-tab) is a table that summarizes the joint distribution of two or more categorical (discrete) variables.  It displays the frequency distribution of each variable across the categories of the other.

*   **Structure:**
    *   Rows represent the categories of one variable.
    *   Columns represent the categories of the other variable.
    *   Cells contain the number of observations (frequency) that fall into the corresponding categories of both variables.

*   **Example:**  Analyzing the relationship between Gender and Preferred Learning Style (Visual, Auditory, Kinesthetic):

    | Gender   | Visual | Auditory | Kinesthetic | Total |
    | -------- | ------ | -------- | ----------- | ----- |
    | Male     | 30     | 20       | 10          | 60    |
    | Female   | 40     | 15       | 5           | 60    |
    | **Total** | **70** | **35**   | **15**      | **120** |

### 3. Chi-Square Statistic (χ²)

*   **Purpose:** The Chi-Square statistic measures the difference between the observed frequencies in a contingency table and the frequencies we would expect if the two variables were independent (i.e., no association).

*   **Formula:**

    χ² = Σ [ (Oᵢ,ⱼ - Eᵢ,ⱼ)² / Eᵢ,ⱼ ]

    Where:
    *   Oᵢ,ⱼ = Observed frequency in cell (i, j)
    *   Eᵢ,ⱼ = Expected frequency in cell (i, j)

*   **Calculating Expected Frequencies:**

    Eᵢ,ⱼ = (Row Total for row i * Column Total for column j) / Grand Total

    *   For the example above, the expected frequency for Male and Visual learners would be:
        (60 * 70) / 120 = 35

*   **Interpretation:**
    *   A small Chi-Square value suggests that the observed frequencies are close to the expected frequencies, indicating weak or no association.
    *   A large Chi-Square value suggests a significant difference between observed and expected frequencies, indicating a strong association.

### 4. Chi-Square Test of Independence

*   **Purpose:** A statistical test used to determine if there is a statistically significant association between two discrete variables.

*   **Steps:**

    1.  **State the Hypotheses:**
        *   Null Hypothesis (H₀): The two variables are independent (no association).
        *   Alternative Hypothesis (H₁): The two variables are dependent (there is an association).

    2.  **Calculate the Chi-Square Statistic:**  Use the formula mentioned above.

    3.  **Determine the Degrees of Freedom (df):**

        df = (Number of Rows - 1) * (Number of Columns - 1)

        *   In our example, df = (2 - 1) * (3 - 1) = 2

    4.  **Determine the P-value:**  The p-value is the probability of observing a Chi-Square statistic as extreme as, or more extreme than, the one calculated, assuming the null hypothesis is true.  This is done using a Chi-Square distribution table or statistical software.

    5.  **Compare the P-value to the Significance Level (α):**
        *   If p-value ≤ α: Reject the null hypothesis. There is statistically significant evidence of an association between the two variables.
        *   If p-value > α: Fail to reject the null hypothesis. There is not enough statistically significant evidence to conclude that there is an association between the two variables.

    *   **Common Significance Levels:** α = 0.05 (5%) is a common choice.

*   **Example:** Using our example table above, let's perform a Chi-Square test (assuming we calculated χ² = 8.57 and df = 2):

    1.  H₀: Gender and Preferred Learning Style are independent.
    2.  H₁: Gender and Preferred Learning Style are dependent.
    3.  χ² = 8.57
    4.  df = 2
    5.  Using a Chi-Square distribution table (or statistical software), with df = 2 and χ² = 8.57, the p-value is approximately 0.0138.
    6.  Since 0.0138 ≤ 0.05 (assuming α = 0.05), we reject the null hypothesis.

    **Conclusion:**  There is statistically significant evidence to suggest that Gender and Preferred Learning Style are associated.

### 5. Interpreting Results and Drawing Conclusions

*   **Statistical Significance vs. Practical Significance:**  Rejecting the null hypothesis (finding a statistically significant association) doesn't necessarily mean the association is *practically* important. The effect size might be small.

*   **Effect Size:** Measures the strength of the association.  Chi-Square only indicates *if* an association exists, not *how strong* it is.

*   **Interpretation Example:** In the Gender and Learning Style example, rejecting the null hypothesis suggests that gender might influence a person's preferred learning style.  However, without further analysis, we don't know *how much* it influences it, or *which* learning style is more common for which gender.

### 6. Limitations of the Chi-Square Test

*   **Assumes Expected Frequencies are Large Enough:**  The Chi-Square test is unreliable if expected frequencies are too small. A common rule of thumb is that all expected cell counts should be at least 5. If this is not met, consider collapsing categories or using Fisher's exact test (for 2x2 tables).

*   **Sensitive to Sample Size:** With a large enough sample size, even a small association can become statistically significant.

*   **Does Not Indicate Causation:** Association does not equal causation. A significant Chi-Square result does not prove that one variable *causes* the other. There could be other confounding variables influencing the relationship.

*   **Only for Discrete Variables:** The Chi-Square test is designed specifically for discrete (categorical) variables. It cannot be used for continuous variables.

### 7. Alternative Association Measures (Beyond Chi-Square)

*   **Cramer's V:**

    *   A measure of association between two nominal (categorical) variables.
    *   Ranges from 0 to 1, where 0 indicates no association and 1 indicates a perfect association.
    *   Formula: V = √(χ² / (n * min(k-1, r-1))), where:
        *   χ² is the Chi-Square statistic.
        *   n is the total sample size.
        *   k is the number of columns.
        *   r is the number of rows.
    *   Interpretation:
        *   V ≈ 0.1: Small effect size
        *   V ≈ 0.3: Medium effect size
        *   V ≈ 0.5: Large effect size

*   **Phi Coefficient (φ):**
    *   A special case of Cramer's V for 2x2 contingency tables.
    *   Formula: φ = √(χ²/n)

*   **Other Measures:** Lambda, Goodman and Kruskal's Gamma (for ordinal variables)

### Important Points to Remember

*   The Chi-Square test checks for *independence* between variables. Rejecting the null hypothesis means they are *dependent* (associated).
*   Association does not equal causation.
*   Check the expected frequencies before relying on the Chi-Square test.
*   Consider effect size measures (like Cramer's V) to assess the *strength* of the association.
*   The choice of association measure depends on the type of variables being analyzed.

### Practice Questions/Exercises

1.  **Scenario:** A survey asks people about their favorite color (Red, Blue, Green) and their gender (Male, Female).  The following contingency table is created:

    | Gender   | Red | Blue | Green | Total |
    | -------- | --- | ---- | ----- | ----- |
    | Male     | 25  | 30   | 15    | 70    |
    | Female   | 35  | 10   | 25    | 70    |
    | **Total** | 60  | 40   | 40    | 140   |

    a)  State the null and alternative hypotheses for a Chi-Square test of independence.
    b)  Calculate the expected frequency for the cell: Female and Red.
    c)  Assuming the Chi-Square statistic is 15.83, and α = 0.05, what is the conclusion of the Chi-Square test? (Hint: df = 2; critical value for α = 0.05 and df = 2 is 5.991)
    d)  Calculate Cramer's V and interpret the effect size.

2.  **Question:**  Why is it important to check the expected frequencies before conducting a Chi-Square test?  What can you do if the expected frequencies are too low?

3.  **Question:** Explain the difference between statistical significance and practical significance in the context of a Chi-Square test.

**Answers:**

1.  a)
    *   H₀: Gender and Favorite Color are independent.
    *   H₁: Gender and Favorite Color are dependent.
    b)  (70 * 60) / 140 = 30
    c)  Since 15.83 > 5.991, we reject the null hypothesis.  There is statistically significant evidence to suggest that Gender and Favorite Color are associated.
    d)  V = √(15.83 / (140 * min(2-1, 3-1))) = √(15.83 / (140 * 1)) = √0.113 = 0.336. The effect size is medium (around 0.3).

2.  It's important because the Chi-Square test is unreliable if the expected frequencies are too low. The test relies on the assumption that the observed and expected values are approximately normally distributed.  Low expected frequencies can violate this assumption.  If expected frequencies are too low, you can consider collapsing categories or using Fisher's exact test (for 2x2 tables).

3.  Statistical significance means that the result of the Chi-Square test (rejecting the null hypothesis) is unlikely to have occurred by chance.  Practical significance means that the observed association is meaningful or important in the real world. A Chi-Square test can show statistical significance with a large sample size, even when the actual relationship between the variables is weak (low practical significance). Therefore, considering effect size measures like Cramer's V is essential to understand the practical importance of the association.
