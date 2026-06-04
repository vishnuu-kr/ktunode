---
title: "Spearman Rank Correlation."
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 3: Data Visualization : Histogram"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a1a"
status: "completed"
scrapedAt: "2026-05-20T18:05:39.345Z"
---
# Introduction to Business Analytics - Module 3: Data Visualization - Spearman Rank Correlation

This module explores the fundamentals of data visualization and the application of various visual charts. We will specifically focus on understanding and calculating the Spearman Rank Correlation, a non-parametric measure of statistical dependence between the rankings of two variables.

---

## 1. Introduction to Spearman Rank Correlation

**Key Concepts:**

*   **Correlation:** A statistical measure that describes the extent to which two variables change together. It indicates the direction and strength of a linear or monotonic relationship.
*   **Non-parametric test:** A statistical test that does not rely on assumptions about the distribution of the population from which the sample is drawn. This makes it useful when data is not normally distributed or when dealing with ordinal data.
*   **Rank Correlation:** A correlation measure that assesses the relationship between the ranks of two variables, rather than their actual values. This is particularly useful for ordinal data or when the relationship between variables is monotonic but not necessarily linear.

**Definition:**

Spearman Rank Correlation (often denoted by the Greek letter rho, $\rho$, or $r_s$) is a non-parametric test used to measure the strength and direction of association between two ranked variables. It assesses how well the relationship between two variables can be described using a monotonic function.

**When to Use Spearman Rank Correlation:**

*   When dealing with **ordinal data**: Data that can be ranked but the intervals between ranks are not necessarily equal (e.g., customer satisfaction ratings like "Poor," "Fair," "Good," "Excellent").
*   When the **relationship between variables is monotonic but not necessarily linear**: This means that as one variable increases, the other variable consistently increases or consistently decreases, but not necessarily at a constant rate.
*   When the **assumptions of Pearson correlation are violated**: Pearson correlation assumes a linear relationship and normally distributed data. If these assumptions are not met, Spearman's rank correlation is a suitable alternative.

**Relevance to Business Analytics (CO1, CO2, CO3, CO4):**

*   **Understanding Competitive Strategy (CO1):** Businesses can use Spearman correlation to understand the relationship between different performance metrics or the impact of strategic initiatives on customer behavior, even when the data is not perfectly linear or normally distributed. For example, how does employee training rank correlate with customer satisfaction rank?
*   **Importance in Decision Making (CO2):** By understanding relationships between variables, managers can make more informed decisions. For instance, if marketing spend rank correlates positively with sales rank, it suggests an investment in marketing might be beneficial.
*   **Application in Descriptive Analytics (CO3):** Spearman correlation is a descriptive statistical tool that helps summarize the relationship between two variables, providing insights into trends and patterns within the data.
*   **Data Visualization (CO4):** While not a visualization itself, Spearman correlation helps us understand the underlying relationship that could be visualized using scatter plots. The strength and direction of the correlation can be inferred from the pattern of points on a scatter plot.

---

## 2. Calculating Spearman Rank Correlation

The Spearman rank correlation coefficient is calculated using the following formula:

$$r_s = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}$$

Where:

*   $r_s$ = Spearman's rank correlation coefficient
*   $d_i$ = The difference between the ranks of corresponding data points for the two variables.
*   $n$ = The number of data points (pairs of observations).
*   $\sum d_i^2$ = The sum of the squared differences in ranks.

**Steps to Calculate Spearman Rank Correlation:**

1.  **Rank the data:** Assign ranks to each data point within each of the two variables independently. The lowest value gets rank 1, the next lowest gets rank 2, and so on.
2.  **Handle ties:** If there are tied values for a variable, assign the average of the ranks that the tied values would have occupied. For example, if two values are tied for ranks 3 and 4, both would be assigned a rank of (3+4)/2 = 3.5.
3.  **Calculate the difference in ranks ($d_i$):** For each pair of observations, find the difference between the rank of variable X and the rank of variable Y.
4.  **Square the differences ($d_i^2$):** Square each of the differences calculated in the previous step.
5.  **Sum the squared differences ($\sum d_i^2$):** Add up all the squared differences.
6.  **Apply the formula:** Plug the sum of squared differences and the number of data points ($n$) into the Spearman rank correlation formula.

**Interpretation of $r_s$ Values:**

*   $r_s = +1$: Perfect positive monotonic correlation. As one variable increases, the other consistently increases.
*   $r_s = -1$: Perfect negative monotonic correlation. As one variable increases, the other consistently decreases.
*   $r_s = 0$: No monotonic correlation. There is no consistent relationship between the ranks of the two variables.
*   Values between 0 and +1 indicate a positive monotonic correlation of varying strength.
*   Values between 0 and -1 indicate a negative monotonic correlation of varying strength.

**General guidelines for strength:**

*   **0.70 to 1.00 (or -0.70 to -1.00):** Strong correlation
*   **0.40 to 0.69 (or -0.40 to -0.69):** Moderate correlation
*   **0.00 to 0.39 (or -0.00 to -0.39):** Weak correlation

**Incorporating Textbooks:**

*   **U Dinesh Kumar (2017)** likely discusses correlation as a measure of association and might introduce non-parametric methods in later chapters on advanced analytics or hypothesis testing.
*   **R. N. Prasad & Seema Acharya (2016)** would cover correlation as part of descriptive statistics and might highlight non-parametric tests as alternatives to parametric tests.
*   **R. Sharda, D. Delen & E. Turban (2018)** would place correlation within the broader context of business intelligence and analytics, emphasizing its role in understanding relationships for decision-making.

---

## 3. Example: Spearman Rank Correlation in a Business Context

**Scenario:** A retail company wants to understand the relationship between the customer satisfaction score (on a scale of 1-5, where 5 is excellent) and the number of repeat purchases made by a customer. They have collected data for 8 customers.

| Customer | Customer Satisfaction Score (1-5) | Number of Repeat Purchases |
| :------- | :-------------------------------- | :------------------------- |
| A        | 4                                 | 3                          |
| B        | 5                                 | 5                          |
| C        | 2                                 | 1                          |
| D        | 3                                 | 2                          |
| E        | 5                                 | 4                          |
| F        | 4                                 | 2                          |
| G        | 3                                 | 3                          |
| H        | 1                                 | 0                          |

**Calculation Steps:**

1.  **Rank the variables:**

    *   **Customer Satisfaction Score:**
        *   1 (H) -> Rank 1
        *   2 (C) -> Rank 2
        *   3 (D, G) -> Tied, average of ranks 3 and 4 = 3.5
        *   4 (A, F) -> Tied, average of ranks 5 and 6 = 5.5
        *   5 (B, E) -> Tied, average of ranks 7 and 8 = 7.5

    *   **Number of Repeat Purchases:**
        *   0 (H) -> Rank 1
        *   1 (C) -> Rank 2
        *   2 (D, F) -> Tied, average of ranks 3 and 4 = 3.5
        *   3 (A, G) -> Tied, average of ranks 5 and 6 = 5.5
        *   4 (E) -> Rank 7
        *   5 (B) -> Rank 8

2.  **Create a table with ranks and differences:**

| Customer | Satisfaction Score (X) | Rank X | Repeat Purchases (Y) | Rank Y | $d_i = \text{Rank X} - \text{Rank Y}$ | $d_i^2$ |
| :------- | :--------------------- | :----- | :------------------- | :----- | :------------------------------------ | :------ |
| A        | 4                      | 5.5    | 3                    | 5.5    | 0                                     | 0       |
| B        | 5                      | 7.5    | 5                    | 8      | -0.5                                  | 0.25    |
| C        | 2                      | 2      | 1                    | 2      | 0                                     | 0       |
| D        | 3                      | 3.5    | 2                    | 3.5    | 0                                     | 0       |
| E        | 5                      | 7.5    | 4                    | 7      | 0.5                                   | 0.25    |
| F        | 4                      | 5.5    | 2                    | 3.5    | 2                                     | 4       |
| G        | 3                      | 3.5    | 3                    | 5.5    | -2                                    | 4       |
| H        | 1                      | 1      | 0                    | 1      | 0                                     | 0       |
| **Sum**  |                        |        |                      |        |                                       | **8.5** |

3.  **Apply the formula:**
    *   $n = 8$
    *   $\sum d_i^2 = 8.5$

    $$r_s = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}$$
    $$r_s = 1 - \frac{6 \times 8.5}{8(8^2 - 1)}$$
    $$r_s = 1 - \frac{51}{8(64 - 1)}$$
    $$r_s = 1 - \frac{51}{8(63)}$$
    $$r_s = 1 - \frac{51}{504}$$
    $$r_s = 1 - 0.10119$$
    $$r_s \approx 0.8988$$

**Interpretation:**

The Spearman rank correlation coefficient is approximately 0.90. This indicates a **very strong positive monotonic relationship** between customer satisfaction score and the number of repeat purchases. As customer satisfaction increases, the number of repeat purchases tends to increase consistently.

**Relevance to Business Analytics (CO2, CO3, CO4, CO5):**

*   **Decision Making (CO2):** This result strongly suggests that improving customer satisfaction is likely to lead to more repeat purchases, a key metric for customer loyalty and revenue growth.
*   **Descriptive Analytics (CO3):** The calculated $r_s$ provides a quantitative summary of the observed relationship in the data.
*   **Data Visualization (CO4):** This strong positive correlation would likely be visualized as a scatter plot with points trending upwards from left to right.
*   **Predictive Analytics (CO5):** While this module focuses on visualization, understanding this correlation lays the groundwork for simple linear regression. If we were to build a predictive model, we could potentially predict the number of repeat purchases based on customer satisfaction.

---

## 4. Practice Questions and Exercises

**Question 1:**

A marketing manager wants to assess the relationship between a product's advertising expenditure (in thousands of dollars) and its sales volume (in units) for 5 different product launches.

| Product Launch | Advertising Expenditure ($) | Sales Volume (Units) |
| :------------- | :-------------------------- | :------------------- |
| 1              | 10                          | 1200                 |
| 2              | 25                          | 2800                 |
| 3              | 15                          | 1800                 |
| 4              | 30                          | 3500                 |
| 5              | 20                          | 2500                 |

Calculate the Spearman Rank Correlation coefficient for this data.

**Answer 1:**

1.  **Rank the data:**
    *   **Advertising Expenditure:**
        *   10 -> Rank 1
        *   15 -> Rank 2
        *   20 -> Rank 3
        *   25 -> Rank 4
        *   30 -> Rank 5
    *   **Sales Volume:**
        *   1200 -> Rank 1
        *   1800 -> Rank 2
        *   2500 -> Rank 3
        *   2800 -> Rank 4
        *   3500 -> Rank 5

2.  **Table with differences and squared differences:**

    | Product Launch | Advertising Exp. (X) | Rank X | Sales Volume (Y) | Rank Y | $d_i = \text{Rank X} - \text{Rank Y}$ | $d_i^2$ |
    | :------------- | :------------------- | :----- | :--------------- | :----- | :------------------------------------ | :------ |
    | 1              | 10                   | 1      | 1200             | 1      | 0                                     | 0       |
    | 2              | 25                   | 4      | 2800             | 4      | 0                                     | 0       |
    | 3              | 15                   | 2      | 1800             | 2      | 0                                     | 0       |
    | 4              | 30                   | 5      | 3500             | 5      | 0                                     | 0       |
    | 5              | 20                   | 3      | 2500             | 3      | 0                                     | 0       |
    | **Sum**        |                      |        |                  |        |                                       | **0**   |

3.  **Apply the formula:**
    *   $n = 5$
    *   $\sum d_i^2 = 0$

    $$r_s = 1 - \frac{6 \times 0}{5(5^2 - 1)}$$
    $$r_s = 1 - 0$$
    $$r_s = 1$$

**Interpretation:** The Spearman rank correlation coefficient is 1. This indicates a perfect positive monotonic relationship between advertising expenditure and sales volume. As advertising expenditure increases, sales volume consistently increases at the same rank order.

---

**Question 2:**

Consider the following rankings of student performance on two different assessment methods. Calculate the Spearman Rank Correlation.

| Student | Rank on Exam 1 | Rank on Project |
| :------ | :------------- | :-------------- |
| A       | 3              | 2               |
| B       | 1              | 4               |
| C       | 4              | 5               |
| D       | 2              | 1               |
| E       | 5              | 3               |

**Answer 2:**

1.  **Data is already ranked.**

2.  **Table with differences and squared differences:**

    | Student | Rank Exam 1 (X) | Rank Project (Y) | $d_i = \text{Rank X} - \text{Rank Y}$ | $d_i^2$ |
    | :------ | :-------------- | :--------------- | :------------------------------------ | :------ |
    | A       | 3               | 2                | 1                                     | 1       |
    | B       | 1               | 4                | -3                                    | 9       |
    | C       | 4               | 5                | -1                                    | 1       |
    | D       | 2               | 1                | 1                                     | 1       |
    | E       | 5               | 3                | 2                                     | 4       |
    | **Sum** |                 |                  |                                       | **16**  |

3.  **Apply the formula:**
    *   $n = 5$
    *   $\sum d_i^2 = 16$

    $$r_s = 1 - \frac{6 \times 16}{5(5^2 - 1)}$$
    $$r_s = 1 - \frac{96}{5(24)}$$
    $$r_s = 1 - \frac{96}{120}$$
    $$r_s = 1 - 0.8$$
    $$r_s = 0.2$$

**Interpretation:** The Spearman rank correlation coefficient is 0.2. This indicates a **weak positive monotonic relationship** between performance on Exam 1 and the Project. The ranks are not strongly aligned, suggesting that while there might be a slight tendency for better performance on one to be associated with better performance on the other, the relationship is not very strong.

---

## 5. Important Points to Remember

*   **Monotonic vs. Linear:** Spearman correlation measures monotonic relationships (consistently increasing or decreasing), whereas Pearson correlation measures linear relationships.
*   **Ranked Data:** The calculation relies on the ranks of the data, making it robust to outliers and non-normal distributions.
*   **Ties:** Properly handling ties by assigning average ranks is crucial for accurate calculation.
*   **Interpretation Range:** The coefficient $r_s$ ranges from -1 to +1.
*   **Business Insight:** It helps uncover relationships in business data that might not be apparent with linear assumptions. It's a valuable tool for descriptive analytics and exploratory data analysis.
*   **Foundation for Prediction:** Understanding rank correlations can inform the choice and interpretation of predictive models.

---

## 6. Connection to Course Outcomes

*   **CO1 (Fundamentals & Competitive Strategy):** Spearman correlation provides a method to understand relationships between business metrics, informing strategic decisions by revealing how different aspects of the business are related, even with ordinal data.
*   **CO2 (Importance in Decision Making):** By quantifying the strength and direction of relationships, it aids decision-makers in understanding potential impacts of certain factors on outcomes (e.g., customer satisfaction on loyalty).
*   **CO3 (Descriptive Analytics):** It's a core descriptive statistic that summarizes the association between two ranked variables, providing insights into observed patterns.
*   **CO4 (Data Visualization):** Understanding the correlation helps interpret scatter plots and visualize the strength of monotonic relationships. The calculated coefficient quantifies what a visual inspection might suggest.
*   **CO5 (Simple Linear Regression):** While this module focuses on visualization and rank correlation, the concept of association between variables is fundamental. A strong Spearman correlation might suggest that a linear model (like simple linear regression) could also be effective, or it could guide feature selection for more complex predictive models.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
