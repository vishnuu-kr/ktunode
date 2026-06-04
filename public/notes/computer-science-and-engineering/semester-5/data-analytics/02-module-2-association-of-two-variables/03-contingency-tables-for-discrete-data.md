---
title: "Contingency Tables for Discrete Data"
subject: "DATA ANALYTICS"
module: "Module 2: Association of Two Variables:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b70c"
status: "completed"
scrapedAt: "2026-05-20T16:43:49.860Z"
---
# DATA ANALYTICS - Module 2: Association of Two Variables - Contingency Tables for Discrete Data

## Introduction

This module explores the association between two discrete variables using contingency tables. Contingency tables are powerful tools for summarizing and analyzing categorical data. Understanding how to construct and interpret them is fundamental to data analysis.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  **Construct a contingency table from a given dataset of two discrete variables.**
2.  **Calculate marginal, joint, and conditional probabilities from a contingency table.**
3.  **Compute expected frequencies under the assumption of independence.**
4.  **Perform a chi-square test of independence to determine if two discrete variables are statistically independent.**
5.  **Interpret the results of the chi-square test and draw conclusions about the association between the variables.**
6.  **Understand limitations of chi-square test.**

## 1. Constructing a Contingency Table

### 1.1 Key Concepts and Definitions

*   **Discrete Variable (Categorical Variable):** A variable whose values can only take on a finite or countable number of values. Examples include gender, opinion (agree, disagree, neutral), and education level.
*   **Contingency Table (Cross-Tabulation):** A table that summarizes the relationship between two or more discrete variables. It shows the frequency distribution of one variable in rows and another variable in columns. The cells of the table contain the counts of observations that fall into each category combination.
*   **Rows:** Represent the categories of one discrete variable.
*   **Columns:** Represent the categories of the other discrete variable.
*   **Cells:** The intersection of a row and a column, containing the number of observations that fall into both categories.

### 1.2 Steps to Constructing a Contingency Table

1.  **Identify the two discrete variables:** Determine which variables you want to analyze for association.
2.  **List the categories for each variable:**  Create a list of all possible categories for each variable.
3.  **Create the table structure:**  Draw a table with the categories of one variable as rows and the categories of the other variable as columns.
4.  **Tally the frequencies:**  Go through your dataset, and for each observation, count the number of times each category combination occurs and place the count in the corresponding cell.
5.  **Calculate row and column totals:** Sum the frequencies in each row to get the row totals (marginal frequencies for the row variable). Sum the frequencies in each column to get the column totals (marginal frequencies for the column variable).
6.  **Calculate the grand total:** Sum all the frequencies in the table. This should be equal to the total number of observations in your dataset.

### 1.3 Example

Suppose we have data on 100 students, classified by their Gender (Male, Female) and whether they like Online Learning (Yes, No).  Here's a simplified dataset:

| Student ID | Gender | Online Learning |
|------------|--------|-----------------|
| 1          | Male   | Yes             |
| 2          | Female | No              |
| 3          | Male   | No              |
| ...        | ...    | ...             |
| 100        | Female | Yes             |

After counting the frequencies, we can construct the following contingency table:

|             | Online Learning - Yes | Online Learning - No | Row Total |
|-------------|-----------------------|----------------------|-----------|
| Gender - Male  | 30                    | 20                   | 50        |
| Gender - Female| 25                    | 25                   | 50        |
| Column Total  | 55                    | 45                   | 100       |

## 2. Calculating Probabilities from a Contingency Table

### 2.1 Key Concepts and Definitions

*   **Marginal Probability:** The probability of a single event occurring, regardless of the other variable.  It's calculated by dividing the row or column total by the grand total.
*   **Joint Probability:** The probability of two events occurring together. It's calculated by dividing the cell frequency by the grand total.
*   **Conditional Probability:** The probability of one event occurring, given that another event has already occurred.  It's calculated by dividing the joint probability by the marginal probability of the given event.

### 2.2 Formulas

*   **P(A):** Marginal probability of event A (Row Total / Grand Total)
*   **P(B):** Marginal probability of event B (Column Total / Grand Total)
*   **P(A and B):** Joint probability of A and B (Cell Frequency / Grand Total)
*   **P(A | B):** Conditional probability of A given B (P(A and B) / P(B))
*   **P(B | A):** Conditional probability of B given A (P(A and B) / P(A))

### 2.3 Example (Using the Table from Section 1.3)

|             | Online Learning - Yes | Online Learning - No | Row Total |
|-------------|-----------------------|----------------------|-----------|
| Gender - Male  | 30                    | 20                   | 50        |
| Gender - Female| 25                    | 25                   | 50        |
| Column Total  | 55                    | 45                   | 100       |

*   **P(Male):** 50/100 = 0.5
*   **P(Female):** 50/100 = 0.5
*   **P(Yes):** 55/100 = 0.55
*   **P(No):** 45/100 = 0.45
*   **P(Male and Yes):** 30/100 = 0.3
*   **P(Male and No):** 20/100 = 0.2
*   **P(Female and Yes):** 25/100 = 0.25
*   **P(Female and No):** 25/100 = 0.25
*   **P(Yes | Male):** (30/100) / (50/100) = 0.3 / 0.5 = 0.6
    *   This means 60% of males like Online Learning.
*   **P(No | Female):** (25/100) / (50/100) = 0.25 / 0.5 = 0.5
    *   This means 50% of females don't like Online Learning.

## 3. Expected Frequencies Under Independence

### 3.1 Key Concepts and Definitions

*   **Independence:** Two variables are independent if the occurrence of one does not affect the probability of the other.
*   **Expected Frequency:** The frequency that would be expected in each cell of the contingency table *if* the two variables were independent.

### 3.2 Formula

The expected frequency for a cell is calculated as:

*   E<sub>ij</sub> = (Row Total<sub>i</sub> * Column Total<sub>j</sub>) / Grand Total

Where:

*   E<sub>ij</sub> is the expected frequency for the cell in row *i* and column *j*.
*   Row Total<sub>i</sub> is the total number of observations in row *i*.
*   Column Total<sub>j</sub> is the total number of observations in column *j*.
*   Grand Total is the total number of observations.

### 3.3 Example (Using the Table from Section 1.3)

|             | Online Learning - Yes | Online Learning - No | Row Total |
|-------------|-----------------------|----------------------|-----------|
| Gender - Male  | 30                    | 20                   | 50        |
| Gender - Female| 25                    | 25                   | 50        |
| Column Total  | 55                    | 45                   | 100       |

Let's calculate the expected frequencies:

*   **E(Male, Yes):** (50 * 55) / 100 = 27.5
*   **E(Male, No):** (50 * 45) / 100 = 22.5
*   **E(Female, Yes):** (50 * 55) / 100 = 27.5
*   **E(Female, No):** (50 * 45) / 100 = 22.5

This means, if Gender and Online Learning preference were independent, we would expect to see 27.5 males who like online learning, 22.5 males who don't, 27.5 females who like online learning, and 22.5 females who don't.

## 4. Chi-Square Test of Independence

### 4.1 Key Concepts and Definitions

*   **Chi-Square Test of Independence:** A statistical test used to determine whether there is a significant association between two categorical variables.  It compares the observed frequencies in a contingency table to the expected frequencies under the assumption of independence.
*   **Null Hypothesis (H0):** The two variables are independent.
*   **Alternative Hypothesis (H1):** The two variables are associated (dependent).
*   **Observed Frequency (O):** The actual frequency observed in each cell of the contingency table.
*   **Expected Frequency (E):** The frequency we would expect in each cell if the two variables were independent (calculated in Section 3).
*   **Chi-Square Statistic (χ²):** A measure of the discrepancy between the observed and expected frequencies.
*   **Degrees of Freedom (df):** The number of independent pieces of information used to calculate the chi-square statistic. For a contingency table, df = (number of rows - 1) * (number of columns - 1).
*   **P-value:** The probability of observing a chi-square statistic as large as or larger than the one calculated, assuming the null hypothesis is true.
*   **Significance Level (α):** A pre-determined threshold (e.g., 0.05) used to determine whether to reject the null hypothesis.  If the p-value is less than α, we reject the null hypothesis.

### 4.2 Formula

The chi-square statistic is calculated as:

*   χ² = Σ [(O<sub>ij</sub> - E<sub>ij</sub>)² / E<sub>ij</sub>]

Where:

*   O<sub>ij</sub> is the observed frequency for the cell in row *i* and column *j*.
*   E<sub>ij</sub> is the expected frequency for the cell in row *i* and column *j*.
*   Σ means "sum over all cells in the table."

### 4.3 Steps to Perform the Chi-Square Test

1.  **State the null and alternative hypotheses:**
    *   H0: The two variables are independent.
    *   H1: The two variables are associated.
2.  **Construct the contingency table:** (as shown in Section 1).
3.  **Calculate the expected frequencies:** (as shown in Section 3).
4.  **Calculate the chi-square statistic:** Use the formula above.
5.  **Determine the degrees of freedom:** df = (number of rows - 1) * (number of columns - 1).
6.  **Find the p-value:** Use a chi-square distribution table or statistical software (e.g., R, Python) to find the p-value corresponding to the calculated chi-square statistic and degrees of freedom.
7.  **Compare the p-value to the significance level (α):**
    *   If p-value ≤ α, reject the null hypothesis.  There is evidence of an association between the variables.
    *   If p-value > α, fail to reject the null hypothesis.  There is not enough evidence to conclude that there is an association between the variables.

### 4.4 Example (Using the Table from Section 1.3)

|             | Online Learning - Yes | Online Learning - No | Row Total |
|-------------|-----------------------|----------------------|-----------|
| Gender - Male  | 30                    | 20                   | 50        |
| Gender - Female| 25                    | 25                   | 50        |
| Column Total  | 55                    | 45                   | 100       |

*   **Observed Frequencies (O):** Given in the table.
*   **Expected Frequencies (E):** Calculated in Section 3: E(Male, Yes) = 27.5, E(Male, No) = 22.5, E(Female, Yes) = 27.5, E(Female, No) = 22.5
*   **Chi-Square Statistic (χ²):**

    χ² = [(30 - 27.5)² / 27.5] + [(20 - 22.5)² / 22.5] + [(25 - 27.5)² / 27.5] + [(25 - 22.5)² / 22.5]
    χ² = (6.25 / 27.5) + (6.25 / 22.5) + (6.25 / 27.5) + (6.25 / 22.5)
    χ² = 0.227 + 0.278 + 0.227 + 0.278
    χ² = 1.01

*   **Degrees of Freedom (df):** (2 - 1) * (2 - 1) = 1
*   **P-value:** Using a chi-square distribution table or statistical software with χ² = 1.01 and df = 1, the p-value ≈ 0.315.
*   **Significance Level (α):**  Let's assume α = 0.05.

Since the p-value (0.315) > α (0.05), we **fail to reject the null hypothesis.**

**Conclusion:** There is not enough statistical evidence to conclude that there is a significant association between Gender and Online Learning preference in this sample.

## 5. Interpretation of Results

*   **Reject H0:** There is a statistically significant association between the two variables.  This doesn't necessarily imply causation, but it suggests that the variables are related.  Further analysis may be needed to understand the nature of the relationship.
*   **Fail to Reject H0:** There is not enough statistical evidence to conclude that there is an association between the two variables. This *doesn't* mean that the variables are definitely independent; it simply means that the observed data do not provide strong enough evidence to reject the possibility of independence.  It's possible that a larger sample size might reveal a significant association.

## 6. Limitations of the Chi-Square Test

*   **Expected Frequencies:** The chi-square test is not reliable if the expected frequencies are too small (typically, less than 5 in at least one cell).  In such cases, consider combining categories or using Fisher's exact test.
*   **Association vs. Causation:** The chi-square test can only determine if there is an association between variables, not if one variable causes the other.
*   **Sample Size:** A small sample size may not have enough power to detect a significant association, even if one exists.  A large sample size may lead to statistically significant results even if the association is weak or practically unimportant.
*   **Only for Categorical Data:** This test is designed for categorical data and is not appropriate for continuous variables.

## Important Points to Remember

*   Contingency tables provide a clear way to summarize the relationship between two categorical variables.
*   Calculating marginal, joint, and conditional probabilities helps to understand the distribution of the data and the relationships between variables.
*   The chi-square test is a powerful tool for testing the independence of two categorical variables, but it's important to be aware of its limitations.
*   The chi-square test statistic (χ²) measures the difference between the observed and expected values, with higher values indicating greater dependence.
*   Always interpret the results of the chi-square test in context, considering the sample size, the strength of the association, and any potential confounding variables.

## Practice Questions/Exercises with Answers

**Question 1:**

A survey was conducted to see if there is a relationship between smoking habits and developing lung disease. The results are summarized below:

|                | Lung Disease | No Lung Disease | Total |
|----------------|-------------|------------------|-------|
| Smoker        | 60          | 40                | 100   |
| Non-Smoker    | 20          | 80                | 100   |
| Total          | 80          | 120               | 200   |

a) Calculate the probability that someone has lung disease.
b) Calculate the probability that someone is a smoker and has lung disease.
c) Calculate the probability that someone has lung disease given that they are a smoker.
d) Calculate the expected frequency for smokers with lung disease under the assumption of independence.
e) Conduct a chi-square test of independence to determine if there is a relationship between smoking habits and lung disease. Use α = 0.05.

**Answer 1:**

a) P(Lung Disease) = 80/200 = 0.4

b) P(Smoker and Lung Disease) = 60/200 = 0.3

c) P(Lung Disease | Smoker) = (60/200) / (100/200) = 0.3 / 0.5 = 0.6

d) E(Smoker, Lung Disease) = (100 * 80) / 200 = 40

e)

1.  **Hypotheses:**
    *   H0: Smoking habits and lung disease are independent.
    *   H1: Smoking habits and lung disease are associated.
2.  **Observed Frequencies (O):** Given in the table.
3.  **Expected Frequencies (E):**
    *   E(Smoker, Lung Disease) = (100 * 80) / 200 = 40
    *   E(Smoker, No Lung Disease) = (100 * 120) / 200 = 60
    *   E(Non-Smoker, Lung Disease) = (100 * 80) / 200 = 40
    *   E(Non-Smoker, No Lung Disease) = (100 * 120) / 200 = 60
4.  **Chi-Square Statistic (χ²):**
    χ² = [(60 - 40)² / 40] + [(40 - 60)² / 60] + [(20 - 40)² / 40] + [(80 - 60)² / 60]
    χ² = (400 / 40) + (400 / 60) + (400 / 40) + (400 / 60)
    χ² = 10 + 6.67 + 10 + 6.67 = 33.34
5.  **Degrees of Freedom (df):** (2 - 1) * (2 - 1) = 1
6.  **P-value:** Using a chi-square distribution table or statistical software with χ² = 33.34 and df = 1, the p-value is extremely small (p < 0.001).
7.  **Conclusion:** Since the p-value (p < 0.001) < α (0.05), we **reject the null hypothesis.**  There is a statistically significant association between smoking habits and lung disease.

**Question 2:**

In a survey of 250 people, it was found that 140 preferred Brand A, and 110 preferred Brand B. The results are broken down by gender:

|           | Brand A | Brand B |
|-----------|---------|---------|
| Male      | 80      | 40      |
| Female    | 60      | 70      |

Is there a significant association between gender and brand preference? Use a chi-square test of independence with a significance level of α = 0.05.

**Solution:**

First, create the complete contingency table including totals:

|           | Brand A | Brand B | Total |
|-----------|---------|---------|-------|
| Male      | 80      | 40      | 120   |
| Female    | 60      | 70      | 130   |
| Total     | 140     | 110     | 250   |

Now, calculate expected frequencies:

* E(Male, Brand A) = (120 * 140) / 250 = 67.2
* E(Male, Brand B) = (120 * 110) / 250 = 52.8
* E(Female, Brand A) = (130 * 140) / 250 = 72.8
* E(Female, Brand B) = (130 * 110) / 250 = 57.2

Calculate the Chi-Square statistic:

χ² =  [(80 - 67.2)² / 67.2] + [(40 - 52.8)² / 52.8] + [(60 - 72.8)² / 72.8] + [(70 - 57.2)² / 57.2]
χ² =  [163.84 / 67.2] + [163.84 / 52.8] + [163.84 / 72.8] + [163.84 / 57.2]
χ² =  2.438 + 3.103 + 2.250 + 2.864
χ² = 10.655

Degrees of Freedom (df) = (2-1) * (2-1) = 1

Looking up a Chi-Square distribution table (or using statistical software), with df = 1 and χ² = 10.655, the p-value is approximately 0.0011.

Since p-value (0.0011) < alpha (0.05), we reject the null hypothesis. There *is* a statistically significant association between gender and brand preference.

These detailed notes provide a thorough understanding of contingency tables for discrete data and the chi-square test of independence.  Remember to practice with different datasets to solidify your understanding of these concepts.
