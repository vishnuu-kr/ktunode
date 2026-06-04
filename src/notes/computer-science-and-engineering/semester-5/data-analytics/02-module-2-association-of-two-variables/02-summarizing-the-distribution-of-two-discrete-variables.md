---
title: "Summarizing the Distribution of Two Discrete Variables"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70b"
status: "completed"
scrapedAt: "2026-05-20T16:43:49.144Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables
## Topic: Summarizing the Distribution of Two Discrete Variables

**Learning Outcomes:**

*   Understand the concept of bivariate distributions for discrete variables.
*   Construct and interpret contingency tables (cross-tabulations).
*   Calculate and interpret joint, marginal, and conditional probabilities.
*   Assess the independence of two discrete variables.
*   Apply measures of association, such as chi-square, Cramer's V, and phi coefficient, to quantify the strength of association between two discrete variables.

---

### 1. Introduction to Bivariate Distributions for Discrete Variables

*   **Definition:** A bivariate distribution describes the probability of observing pairs of values for two discrete variables.  It shows how the values of one variable are related to the values of another.

*   **Purpose:**  Allows us to analyze the relationship or association between two categorical (discrete) variables.  Helps us understand if the values of one variable tend to occur more (or less) often with specific values of the other variable.

*   **Key Terms:**
    *   **Variable:** A characteristic that can take on different values.
    *   **Discrete Variable:** A variable whose value is obtained by counting (e.g., number of cars, gender, opinion scale).
    *   **Bivariate:** Involving two variables.
    *   **Distribution:**  A representation of the possible values of a variable and their associated frequencies or probabilities.

*   **Example:**  Consider two variables:
    *   `Smoking Status` (Yes/No)
    *   `Lung Cancer` (Yes/No)
    A bivariate distribution would show how many people fall into each of the four possible categories: (Yes, Yes), (Yes, No), (No, Yes), (No, No).

---

### 2. Contingency Tables (Cross-Tabulations)

*   **Definition:** A contingency table (also known as a cross-tabulation or cross-table) is a tabular way to summarize the joint frequencies of two discrete variables.  It displays the number of observations for each combination of categories of the two variables.

*   **Structure:**
    *   Rows: Represent categories of one variable (e.g., Smoking Status).
    *   Columns: Represent categories of the other variable (e.g., Lung Cancer).
    *   Cells: Contain the count or frequency of observations that fall into the corresponding row and column categories.

*   **Example:**  Contingency table for Smoking Status and Lung Cancer:

    |                  | Lung Cancer (Yes) | Lung Cancer (No) | Row Totals |
    |------------------|-------------------|--------------------|------------|
    | Smoking (Yes)   | 60                | 140                | 200        |
    | Smoking (No)    | 10                | 290                | 300        |
    | **Column Totals** | 70                | 430                | 500        |

*   **Interpretation:** This table shows that out of 500 people, 60 are smokers and have lung cancer, 140 are smokers but do not have lung cancer, 10 are non-smokers and have lung cancer, and 290 are non-smokers and do not have lung cancer.

---

### 3. Joint, Marginal, and Conditional Probabilities

*   **Joint Probability:** The probability that two events both occur.  It's the probability of a specific combination of categories from both variables.

    *   Formula:  `P(A and B) = Number of observations in both A and B / Total number of observations`

    *   Example (from the previous contingency table):  The joint probability of someone being a smoker AND having lung cancer is P(Smoking=Yes and Lung Cancer=Yes) = 60/500 = 0.12 or 12%.

*   **Marginal Probability:** The probability of a single event occurring, irrespective of the other variable.  It's the probability of a specific category from one variable.

    *   Formula: `P(A) = Number of observations in A / Total number of observations`

    *   Example: The marginal probability of someone being a smoker is P(Smoking=Yes) = 200/500 = 0.4 or 40%.  The marginal probability of someone having lung cancer is P(Lung Cancer=Yes) = 70/500 = 0.14 or 14%.

*   **Conditional Probability:** The probability of an event occurring given that another event has already occurred.

    *   Formula: `P(A|B) = P(A and B) / P(B)`  (Probability of A given B)

    *   Example: The conditional probability of someone having lung cancer GIVEN that they are a smoker is P(Lung Cancer=Yes | Smoking=Yes) = P(Lung Cancer=Yes and Smoking=Yes) / P(Smoking=Yes) = (60/500) / (200/500) = 60/200 = 0.3 or 30%.  This means 30% of smokers have lung cancer.

---

### 4. Independence of Two Discrete Variables

*   **Definition:** Two discrete variables are independent if the occurrence of one variable does not affect the probability of the other variable occurring.

*   **Independence Test:**

    *   **Method 1 (Conditional Probability):** If P(A|B) = P(A) for all categories of A and B, then A and B are independent.  In other words, knowing B doesn't change the probability of A.

    *   **Method 2 (Joint Probability):** If P(A and B) = P(A) * P(B) for all categories of A and B, then A and B are independent.

    *   **Method 3 (Expected Frequencies):**  Compare observed frequencies in the contingency table with expected frequencies under the assumption of independence.

*   **Expected Frequencies:** The frequencies that would be expected if the two variables were independent.

    *   Formula: `Expected Frequency = (Row Total * Column Total) / Grand Total`

    *   Example (Smoking & Lung Cancer):
        *   Expected frequency of (Smoking=Yes, Lung Cancer=Yes) = (200 * 70) / 500 = 28
        *   Observed frequency is 60.  Since 60 != 28, Smoking and Lung Cancer are likely NOT independent.

*   **If variables are independent, there is NO association between them.**

---

### 5. Measures of Association

These measures quantify the strength and direction of the association between two discrete variables.

*   **Chi-Square (χ²) Statistic:**

    *   **Purpose:**  Tests the null hypothesis that two categorical variables are independent.  A larger chi-square value indicates a stronger association.

    *   **Formula:**  χ² = Σ [(Observed Frequency - Expected Frequency)² / Expected Frequency]

    *   **Degrees of Freedom (df):** (Number of rows - 1) * (Number of columns - 1)

    *   **Interpretation:**  Compare the calculated chi-square value to a critical value from the chi-square distribution (or use a p-value).
        *   If χ² > critical value (or p-value < significance level), reject the null hypothesis of independence.
        *   If χ² < critical value (or p-value > significance level), fail to reject the null hypothesis of independence.
    *   **Limitation:** Chi-square is sensitive to sample size.  A small association can appear significant with a large sample. Chi-square doesn't give an idea of direction or strength of association.

*   **Cramer's V:**

    *   **Purpose:**  A normalized measure of association based on the chi-square statistic.  It ranges from 0 to 1, where 0 indicates no association and 1 indicates a strong association.  Useful for tables larger than 2x2.

    *   **Formula:** V = sqrt(χ² / (n * min(r-1, c-1)))
        *   n = total sample size
        *   r = number of rows
        *   c = number of columns

    *   **Interpretation:**
        *   0 - 0.1: Weak association
        *   0.1 - 0.3: Moderate association
        *   0.3 - 0.5: Relatively strong association
        *   > 0.5: Strong association

*   **Phi Coefficient (φ):**

    *   **Purpose:** A measure of association specifically for 2x2 contingency tables.  It's a special case of Cramer's V for 2x2 tables.

    *   **Formula:** φ = (ad - bc) / sqrt((a+b)(c+d)(a+c)(b+d))
        *   Where a, b, c, and d are the cell frequencies in the 2x2 table:

        |       | Col 1 | Col 2 |
        |-------|-------|-------|
        | Row 1 |  a    |  b    |
        | Row 2 |  c    |  d    |

    *   **Interpretation:**
        *   Ranges from -1 to +1.
        *   0 indicates no association.
        *   Positive values indicate a positive association (values of one variable tend to occur with higher values of the other).
        *   Negative values indicate a negative association (values of one variable tend to occur with lower values of the other).
        *   The closer to -1 or +1, the stronger the association.

---

### Important Points to Remember:

*   Contingency tables are crucial for summarizing bivariate discrete data.
*   Marginal, joint, and conditional probabilities provide insights into the relationships between variables.
*   Chi-square, Cramer's V, and Phi coefficient help quantify the strength of association.
*   Independence is a key concept; variables are independent if the occurrence of one does not affect the probability of the other.
*   Association does not imply causation.  Just because two variables are associated doesn't mean one causes the other.  There could be confounding variables at play.

---

### Practice Questions/Exercises:

**Scenario:** A survey was conducted to investigate the relationship between gender and preference for a particular brand of coffee (Brand A or Brand B).  The results are shown in the contingency table below:

|        | Brand A | Brand B | Row Totals |
|--------|---------|---------|------------|
| Male   | 80      | 40      | 120        |
| Female | 50      | 30      | 80         |
| **Column Totals**| 130     | 70      | 200        |

1.  **Calculate the joint probability of a randomly selected person being male and preferring Brand A.**
2.  **Calculate the marginal probability of a randomly selected person being female.**
3.  **Calculate the conditional probability of a randomly selected person preferring Brand B given that they are male.**
4.  **Calculate the expected frequency of females preferring Brand A under the assumption of independence.**
5.  **Calculate the Chi-Square statistic. (You don't need to look up critical values. Just calculate the statistic)**
6.  **Calculate Cramer's V.**

**Answers:**

1.  P(Male and Brand A) = 80/200 = 0.4
2.  P(Female) = 80/200 = 0.4
3.  P(Brand B | Male) = (40/200) / (120/200) = 40/120 = 0.333 (approximately)
4.  Expected Frequency (Female, Brand A) = (80 * 130) / 200 = 52
5.  Chi-Square statistic:
    * Expected Frequencies:
        * (Male, Brand A): (120 * 130) / 200 = 78
        * (Male, Brand B): (120 * 70) / 200 = 42
        * (Female, Brand A): (80 * 130) / 200 = 52
        * (Female, Brand B): (80 * 70) / 200 = 28

    *  χ² = Σ [(Observed Frequency - Expected Frequency)² / Expected Frequency]
       χ² = [(80-78)²/78] + [(40-42)²/42] + [(50-52)²/52] + [(30-28)²/28]
       χ² = [4/78] + [4/42] + [4/52] + [4/28]
       χ² = 0.0513 + 0.0952 + 0.0769 + 0.1429
       χ² = 0.3663

6.  Cramer's V:
    *   V = sqrt(χ² / (n * min(r-1, c-1)))
    *   V = sqrt(0.3663 / (200 * min(2-1, 2-1)))
    *   V = sqrt(0.3663 / 200)
    *   V = sqrt(0.0018315)
    *   V ≈ 0.043

---
