---
title: "Association of two variables - Discrete variables, Ordinal and Continuous variable"
subject: "INTRODUCTION TO MACHINE LEARNING"
module: "Module 1: Mathematics for Machine Learning."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36426"
status: "completed"
scrapedAt: "2026-05-23T16:22:16.434Z"
---
# Module 1: Mathematics for Machine Learning - Association of Two Variables

## Topic: Association of Two Variables - Discrete, Ordinal, and Continuous Variables

**Course Outcome Alignment:** This topic directly addresses **CO1**, focusing on understanding relationships between different variable types using statistical measures.

**Knowledge Level:** K2 (Understand)

---

### 1. Introduction to Variables and Association

*   **Variables:** In machine learning, variables are the characteristics or attributes of the data we are analyzing. They can be broadly categorized based on their measurement scale.
*   **Association:** Association refers to the statistical relationship between two variables. It indicates whether changes in one variable tend to correspond with changes in another. Understanding association is crucial for feature selection, model building, and interpreting results.

---

### 2. Types of Variables and Their Association

We will explore how to assess association for different types of variables. The methods used vary depending on the nature of the variables involved.

#### 2.1. Association between Two Discrete Variables

*   **Definition:** Discrete variables can only take specific, distinct values, often integers. These values are typically counted.
    *   **Examples:** Number of children, number of cars owned, category of product (e.g., 'Apple', 'Banana', 'Orange').
*   **Measuring Association:**
    *   **Contingency Tables (Cross-Tabulation):** A table that displays the frequency distribution of two or more variables. It shows the relationship between categorical variables.
        *   **Structure:** Rows represent categories of one variable, columns represent categories of the other. Cells contain the counts of observations falling into that specific combination of categories.
        *   **Example:**
            |             | Product A | Product B | Total |
            | :---------- | :-------- | :-------- | :---- |
            | **Purchase** | 150       | 100       | 250   |
            | **No Purchase** | 50        | 100       | 150   |
            | **Total**   | 200       | 200       | 400   |
            This table shows the association between 'Product Type' and 'Purchase Decision'.
    *   **Chi-Squared Test (χ² Test):** A statistical test used to determine if there is a significant association between two categorical variables.
        *   **Null Hypothesis (H₀):** The two variables are independent (no association).
        *   **Alternative Hypothesis (H₁):** The two variables are dependent (there is an association).
        *   **Mechanism:** Compares observed frequencies in the contingency table to expected frequencies (assuming independence). A large χ² statistic suggests a significant association.
        *   **Key Concept:** The test statistic is calculated as:
            $$ \chi^2 = \sum_{i=1}^r \sum_{j=1}^c \frac{(O_{ij} - E_{ij})^2}{E_{ij}} $$
            Where:
            *   $O_{ij}$ is the observed frequency in cell (i, j).
            *   $E_{ij}$ is the expected frequency in cell (i, j) under the null hypothesis.
            *   $r$ is the number of rows, $c$ is the number of columns.
        *   **Interpretation:** A p-value less than a chosen significance level (e.g., 0.05) leads to rejecting the null hypothesis, indicating an association.
        *   **Textbook Reference:** Deisenroth et al. (2020) likely discusses contingency tables and chi-squared tests in the context of statistical inference for categorical data. Bishop (2006) might cover these in chapters related to probabilistic modeling of discrete data.
    *   **Measures of Association (for categorical data):**
        *   **Cramér's V:** A measure of association between two nominal variables based on the chi-squared statistic. It ranges from 0 (no association) to 1 (perfect association).
            $$ V = \sqrt{\frac{\chi^2}{n \min(k-1, r-1)}} $$
            Where:
            *   $n$ is the total number of observations.
            *   $k$ is the number of columns, $r$ is the number of rows.
        *   **Phi Coefficient (φ):** Specifically for 2x2 contingency tables, it's equivalent to Pearson's correlation coefficient for binary variables.

#### 2.2. Association between Two Ordinal Variables

*   **Definition:** Ordinal variables have categories that have a natural ordering or ranking, but the differences between the categories are not necessarily equal or quantifiable.
    *   **Examples:** Likert scale responses (e.g., 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'), satisfaction levels (e.g., 'Poor', 'Fair', 'Good', 'Excellent').
*   **Measuring Association:**
    *   **Rank Correlation Coefficients:** These coefficients measure the strength and direction of association between two ranked variables.
        *   **Spearman's Rank Correlation Coefficient (ρ or r_s):** Measures the strength and direction of association between two ranked variables. It assesses how well the relationship between two variables can be described using a monotonic function.
            *   **Mechanism:** It calculates the Pearson correlation coefficient on the ranks of the data.
            *   **Range:** -1 (perfect negative monotonic association) to +1 (perfect positive monotonic association), with 0 indicating no monotonic association.
            *   **Formula (simplified):** If there are no tied ranks, it's calculated as:
                $$ \rho = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)} $$
                Where:
                *   $d_i$ is the difference between the ranks of the $i$-th observation for the two variables.
                *   $n$ is the number of observations.
            *   **Textbook Reference:** Deisenroth et al. (2020) and Bishop (2006) might discuss non-parametric methods including rank correlation.
        *   **Kendall's Rank Correlation Coefficient (τ):** Another measure of rank correlation, often preferred for smaller datasets or when ties are present. It counts concordant and discordant pairs of observations.
            *   **Concordant Pair:** A pair of observations $(x_i, y_i)$ and $(x_j, y_j)$ is concordant if $(x_i - x_j)$ and $(y_i - y_j)$ have the same sign.
            *   **Discordant Pair:** A pair of observations $(x_i, y_i)$ and $(x_j, y_j)$ is discordant if $(x_i - x_j)$ and $(y_i - y_j)$ have opposite signs.
            *   **Formula:**
                $$ \tau = \frac{N_c - N_d}{\frac{1}{2} n (n-1)} $$
                Where:
                *   $N_c$ is the number of concordant pairs.
                *   $N_d$ is the number of discordant pairs.
                *   $n$ is the number of observations.
            *   **Interpretation:** Similar to Spearman's ρ, ranges from -1 to +1.
            *   **Textbook Reference:** These non-parametric methods are common in statistical learning texts like Hastie et al. (2009) and Deisenroth et al. (2020).

#### 2.3. Association between Two Continuous Variables

*   **Definition:** Continuous variables can take any value within a given range, often measured quantities.
    *   **Examples:** Height, weight, temperature, age, stock prices.
*   **Measuring Association:**
    *   **Scatter Plots:** A graphical representation of the relationship between two continuous variables. It helps visualize the pattern, direction, and strength of the association.
        *   **Interpretation:**
            *   **Linear Trend:** Points clustered around a straight line.
            *   **Non-linear Trend:** Points clustered around a curve.
            *   **No Trend:** Points are randomly scattered.
            *   **Strength:** How tightly the points are clustered.
            *   **Direction:** Positive (upward trend) or negative (downward trend).
        *   **Textbook Reference:** Vander Plas (2016) and Müller & Guido (2016) extensively cover data visualization, including scatter plots, using Python libraries like Matplotlib and Seaborn.
    *   **Pearson Correlation Coefficient (r):** Measures the strength and direction of a *linear* association between two continuous variables.
        *   **Assumptions:** Assumes variables are approximately normally distributed and the relationship is linear.
        *   **Range:** -1 (perfect negative linear association) to +1 (perfect positive linear association), with 0 indicating no linear association.
        *   **Formula:**
            $$ r = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^n (x_i - \bar{x})^2 \sum_{i=1}^n (y_i - \bar{y})^2}} $$
            Where:
            *   $x_i, y_i$ are individual data points.
            *   $\bar{x}, \bar{y}$ are the means of $x$ and $y$.
            *   $n$ is the number of observations.
        *   **Interpretation:**
            *   $|r| \approx 0.1$: Weak association
            *   $|r| \approx 0.3$: Moderate association
            *   $|r| \approx 0.5$: Strong association
            *   $|r| \approx 0.7$: Very strong association
            *   $|r| = 1$: Perfect linear association
        *   **Textbook Reference:** Deisenroth et al. (2020), Bishop (2006), Hastie et al. (2009) will cover Pearson correlation in detail, often linking it to linear regression.
    *   **Covariance:** Measures the degree to which two variables change together.
        *   **Formula:**
            $$ \text{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] $$
        *   **Interpretation:** A positive covariance indicates that as one variable increases, the other tends to increase. A negative covariance indicates that as one variable increases, the other tends to decrease. The magnitude is sensitive to the scale of the variables.
        *   **Relationship to Correlation:** Correlation is a standardized version of covariance, making it scale-invariant. $r = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}$.

#### 2.4. Association between Discrete and Continuous Variables

*   **Definition:** One variable is discrete (often categorical), and the other is continuous.
    *   **Examples:** Height and Gender (discrete: Male/Female), Exam Score and Study Hours (discrete: <1 hour, 1-3 hours, >3 hours), Product Category and Price.
*   **Measuring Association:**
    *   **Visualization:** Box plots or violin plots are excellent for visualizing the distribution of a continuous variable across different categories of a discrete variable.
        *   **Box Plot:** Shows the median, quartiles, and potential outliers of the continuous variable for each category. Differences in box plot positions and spread indicate association.
        *   **Violin Plot:** Similar to box plots but also shows the probability density of the data at different values.
        *   **Textbook Reference:** Vander Plas (2016) and Müller & Guido (2016) are excellent resources for learning how to create these plots in Python.
    *   **Statistical Tests:**
        *   **Independent Samples t-test:** Used to compare the means of a continuous variable between *two* groups (categories) of a discrete variable.
            *   **Null Hypothesis (H₀):** The means of the continuous variable are equal in the two groups.
            *   **Alternative Hypothesis (H₁):** The means are not equal.
        *   **Analysis of Variance (ANOVA) F-test:** Used to compare the means of a continuous variable across *three or more* groups (categories) of a discrete variable.
            *   **Null Hypothesis (H₀):** The means of the continuous variable are equal across all groups.
            *   **Alternative Hypothesis (H₁):** At least one group mean is different.
        *   **General Linear Model (GLM) / Regression:** The discrete variable can be encoded (e.g., using one-hot encoding) and used as a predictor in a regression model. The coefficients of the encoded variables indicate the association with the continuous outcome.
        *   **Textbook Reference:** Deisenroth et al. (2020) and Hastie et al. (2009) will cover hypothesis testing (t-tests, ANOVA) and regression models for analyzing relationships between different variable types.

---

### 3. Important Points to Remember

*   **Variable Type Dictates Method:** The choice of statistical method to assess association is critically dependent on the types of variables involved.
*   **Correlation vs. Causation:** Correlation (or association) does not imply causation. Just because two variables are associated doesn't mean one causes the other. There might be a lurking variable.
*   **Linearity Assumption:** Pearson correlation (r) specifically measures *linear* association. If the relationship is non-linear, 'r' might be close to zero even if there's a strong non-linear association.
*   **Data Visualization is Key:** Always visualize your data (scatter plots, box plots) before applying statistical tests. This helps understand the nature of the relationship and identify potential issues (outliers, non-linearity).
*   **Assumptions of Tests:** Be aware of the assumptions behind statistical tests (e.g., normality for t-tests and Pearson correlation) and consider non-parametric alternatives if assumptions are violated.
*   **Interpreting p-values:** A low p-value (typically < 0.05) suggests that the observed association is unlikely to have occurred by random chance alone, supporting the existence of a real association.

---

### 4. Practice Questions and Exercises

**Question 1 (Discrete x Discrete):**
A survey asked 100 people about their preferred mode of transport (Car, Bus, Train) and their satisfaction level with public transport (High, Medium, Low). The results are summarized in a contingency table.
*   What statistical test would be most appropriate to determine if there is an association between the preferred mode of transport and satisfaction with public transport?
*   If the chi-squared test yields a p-value of 0.02, what conclusion can you draw at a significance level of 0.05?

**Answer 1:**
*   The **Chi-Squared Test (χ² Test)** is the most appropriate test for two categorical (discrete) variables.
*   Since the p-value (0.02) is less than the significance level (0.05), we reject the null hypothesis. This means there is a statistically significant association between the preferred mode of transport and satisfaction with public transport.

**Question 2 (Continuous x Continuous):**
You have data on the number of hours studied per week and the corresponding exam scores for 50 students.
*   What is the primary visualization tool to explore the relationship between hours studied and exam scores?
*   What statistical measure quantifies the strength and direction of the *linear* relationship?

**Answer 2:**
*   A **Scatter Plot** is the primary visualization tool.
*   The **Pearson Correlation Coefficient (r)** quantifies the strength and direction of the linear relationship.

**Question 3 (Ordinal x Ordinal):**
A researcher collects data on customer ratings for a product (Ordinal: Poor, Fair, Good, Excellent) and their likelihood to recommend the product (Ordinal: Unlikely, Neutral, Likely).
*   Which type of correlation coefficient would be suitable for measuring the association between these two ordinal variables?

**Answer 3:**
*   Either **Spearman's Rank Correlation Coefficient (ρ or r_s)** or **Kendall's Rank Correlation Coefficient (τ)** would be suitable for measuring the association between two ordinal variables.

**Question 4 (Discrete x Continuous):**
You want to investigate if there's a difference in the salaries (continuous) of employees based on their department (discrete: Sales, Engineering, Marketing).
*   If there are only two departments, what test compares the mean salaries?
*   If there are three or more departments, what test compares the mean salaries?
*   What visualization can show the distribution of salaries for each department?

**Answer 4:**
*   If there are only two departments, an **Independent Samples t-test** can be used.
*   If there are three or more departments, **Analysis of Variance (ANOVA) F-test** is appropriate.
*   **Box Plots** or **Violin Plots** can show the distribution of salaries for each department.

---
