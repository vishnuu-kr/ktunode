---
title: "linear correlation (direct problems only)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ba2"
status: "completed"
scrapedAt: "2026-05-23T16:14:13.728Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Linear Correlation (Direct Problems Only)

### Learning Outcomes

This topic aims to equip learners with the ability to:

*   Understand the concept of linear correlation between two variables.
*   Calculate and interpret measures of linear correlation.
*   Apply correlation concepts to analyze relationships in data relevant to AI and Data Science.

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.** This topic focuses on the correlation aspect, which is a fundamental statistical method for understanding relationships in data.
*   **CO4: Integrate statistical approaches and machine learning techniques to ensure practically feasible solutions in engineering contexts.** Understanding correlation is crucial for feature selection and understanding potential relationships between input features and target variables in machine learning models.

### Key Concepts and Definitions

#### 1. Correlation

**Definition:** Correlation is a statistical measure that describes the extent to which two variables change together. It indicates the strength and direction of a **linear** relationship between two quantitative variables.

**Important Note:** Correlation does **not** imply causation. Just because two variables are correlated does not mean that one causes the other. There might be a lurking variable or the relationship could be coincidental. (Referenced in *Statistics For Data Science* by Miller, and *Probability and Statistics for Data Science* by Fernandez-Granda).

#### 2. Types of Correlation

*   **Positive Linear Correlation:** As one variable increases, the other variable also tends to increase. The scatter plot of the data points generally slopes upwards from left to right.
*   **Negative Linear Correlation:** As one variable increases, the other variable tends to decrease. The scatter plot of the data points generally slopes downwards from left to right.
*   **No Linear Correlation:** There is no discernible linear relationship between the two variables. The scatter plot appears as a random cloud of points.

#### 3. Scatter Plot

A scatter plot is a graphical representation of the relationship between two quantitative variables. It is formed by plotting data points where the x-axis represents one variable and the y-axis represents the other. Scatter plots are invaluable for visually assessing the presence, direction, and strength of a linear relationship.

#### 4. Pearson Correlation Coefficient ($r$)

The Pearson correlation coefficient, denoted by $r$, is the most common measure of linear correlation. It quantifies the strength and direction of a linear relationship between two variables.

**Formula:**

For a sample of $n$ pairs of observations $(x_i, y_i)$:

$r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{n} (y_i - \bar{y})^2}}$

Where:
*   $x_i, y_i$ are individual data points.
*   $\bar{x}$ is the mean of the $x$ values.
*   $\bar{y}$ is the mean of the $y$ values.

An alternative (and often computationally easier) formula is:

$r = \frac{n(\sum xy) - (\sum x)(\sum y)}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$

**Range of $r$:** The value of $r$ always lies between -1 and +1, inclusive:
*   $r = +1$: Perfect positive linear correlation.
*   $r = -1$: Perfect negative linear correlation.
*   $r = 0$: No linear correlation.
*   $0 < r < 1$: Positive linear correlation (strength increases as $r$ approaches 1).
*   $-1 < r < 0$: Negative linear correlation (strength increases as $r$ approaches -1).

**Interpretation of Strength (General Guidelines):**

| Value of |r|     | Strength of Correlation |
| :------- | :---- | :---------------------- |
| 0.00 - 0.19 | Very Weak |
| 0.20 - 0.39 | Weak |
| 0.40 - 0.59 | Moderate |
| 0.60 - 0.79 | Strong |
| 0.80 - 1.00 | Very Strong |

**(Note:** These are general guidelines and the interpretation can depend on the context of the data. Refer to *Fundamentals of mathematical statistics* by Gupta and Kapoor for a detailed statistical treatment).

#### 5. Covariance

Covariance measures the joint variability of two random variables. While related to correlation, it is not standardized and its magnitude depends on the scales of the variables.

**Formula (for a sample):**

$Cov(X, Y) = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{n-1}$

**Relationship to Pearson Correlation:**

The Pearson correlation coefficient is essentially the covariance of the two variables standardized by the product of their standard deviations.

$r = \frac{Cov(X, Y)}{s_x s_y}$

Where:
*   $s_x$ is the standard deviation of $X$.
*   $s_y$ is the standard deviation of $Y$.

(Referenced in *Probability and Statistics - The Science of Uncertainty* by Evans and Rosenthal).

### Direct Problems and Examples

In direct problems related to linear correlation, you will typically be given a dataset or summary statistics and asked to calculate the correlation coefficient and interpret the strength and direction of the linear relationship.

---

#### Example 1: Calculating Pearson Correlation Coefficient

**Problem:** A data scientist is analyzing the relationship between hours spent studying and the score obtained in a test. They collect the following data for 5 students:

| Student | Hours Studied (X) | Test Score (Y) |
| :------ | :---------------- | :------------- |
| 1       | 2                 | 65             |
| 2       | 4                 | 75             |
| 3       | 5                 | 80             |
| 4       | 6                 | 85             |
| 5       | 8                 | 95             |

Calculate the Pearson correlation coefficient ($r$) for this data.

**Solution:**

First, let's calculate the necessary sums:

| X   | Y   | XY    | X^2  | Y^2    |
| :-- | :-- | :---- | :--- | :----- |
| 2   | 65  | 130   | 4    | 4225   |
| 4   | 75  | 300   | 16   | 5625   |
| 5   | 80  | 400   | 25   | 6400   |
| 6   | 85  | 510   | 36   | 7225   |
| 8   | 95  | 760   | 64   | 9025   |
| **ΣX=25** | **ΣY=400** | **ΣXY=2000** | **ΣX²=145** | **ΣY²=32500** |

Here, $n=5$.

Now, let's use the formula:
$r = \frac{n(\sum xy) - (\sum x)(\sum y)}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$

$r = \frac{5(2000) - (25)(400)}{\sqrt{[5(145) - (25)^2][5(32500) - (400)^2]}}$
$r = \frac{10000 - 10000}{\sqrt{[725 - 625][162500 - 160000]}}$
$r = \frac{0}{\sqrt{[100][2500]}}$
$r = \frac{0}{\sqrt{250000}}$
$r = \frac{0}{500}$
$r = 0$

**Interpretation:** The Pearson correlation coefficient is 0. This suggests that there is **no linear correlation** between the hours studied and the test scores for this particular dataset.

**(Self-Correction/Refinement):** Looking at the data, it seems intuitively like there should be a positive correlation. Let's recheck the calculations.
*   ΣX = 2+4+5+6+8 = 25 (Correct)
*   ΣY = 65+75+80+85+95 = 400 (Correct)
*   ΣXY = (2*65) + (4*75) + (5*80) + (6*85) + (8*95) = 130 + 300 + 400 + 510 + 760 = 2100.
    **Correction:** ΣXY = 2100, not 2000.

Let's recalculate with the correct ΣXY:

$r = \frac{5(2100) - (25)(400)}{\sqrt{[5(145) - (25)^2][5(32500) - (400)^2]}}$
$r = \frac{10500 - 10000}{\sqrt{[725 - 625][162500 - 160000]}}$
$r = \frac{500}{\sqrt{[100][2500]}}$
$r = \frac{500}{\sqrt{250000}}$
$r = \frac{500}{500}$
$r = 1$

**Revised Interpretation:** The Pearson correlation coefficient is 1. This indicates a **perfect positive linear correlation** between the hours studied and the test scores. As the hours studied increase, the test score increases perfectly linearly.

**Key Takeaway from Example 1:** Always double-check your calculations! A small error can drastically change the interpretation. Visualizing the data with a scatter plot before calculation can also be helpful.

---

#### Example 2: Interpreting Correlation Coefficients

**Problem:** A data scientist is examining several relationships in a dataset. They calculate the Pearson correlation coefficients for different pairs of features:

*   Feature A and Feature B: $r = 0.85$
*   Feature C and Feature D: $r = -0.60$
*   Feature E and Feature F: $r = 0.10$
*   Feature G and Feature H: $r = -0.95$

Describe the nature and strength of the linear relationship for each pair.

**Solution:**

*   **Feature A and Feature B ($r = 0.85$):**
    *   **Direction:** Positive (since $r$ is positive).
    *   **Strength:** Very Strong (since $|r|$ is close to 1).
    *   **Interpretation:** There is a very strong positive linear relationship between Feature A and Feature B. As Feature A increases, Feature B tends to increase substantially.

*   **Feature C and Feature D ($r = -0.60$):**
    *   **Direction:** Negative (since $r$ is negative).
    *   **Strength:** Strong (since $|r|$ is in the 0.60-0.79 range).
    *   **Interpretation:** There is a strong negative linear relationship between Feature C and Feature D. As Feature C increases, Feature D tends to decrease substantially.

*   **Feature E and Feature F ($r = 0.10$):**
    *   **Direction:** Positive (since $r$ is positive).
    *   **Strength:** Very Weak (since $|r|$ is close to 0).
    *   **Interpretation:** There is a very weak positive linear relationship between Feature E and Feature F. The relationship is barely discernible, and it's almost as if there's no linear correlation.

*   **Feature G and Feature H ($r = -0.95$):**
    *   **Direction:** Negative (since $r$ is negative).
    *   **Strength:** Very Strong (since $|r|$ is very close to 1).
    *   **Interpretation:** There is a very strong negative linear relationship between Feature G and Feature H. As Feature G increases, Feature H tends to decrease very rapidly and predictably.

**Key Takeaway from Example 2:** The sign of $r$ indicates the direction, and the absolute value of $r$ indicates the strength of the linear relationship.

---

#### Example 3: Using Summary Statistics

**Problem:** From a dataset of customer purchase history, the following summary statistics were computed for the number of website visits (V) and the total spending (S):

*   Number of customers ($n$): 100
*   Sum of website visits ($\sum V$): 5000
*   Sum of total spending ($\sum S$): 15000
*   Sum of squares of website visits ($\sum V^2$): 300000
*   Sum of squares of total spending ($\sum S^2$): 480000
*   Sum of the product of visits and spending ($\sum VS$): 160000

Calculate the Pearson correlation coefficient between website visits and total spending.

**Solution:**

Using the formula with summary statistics:
$r = \frac{n(\sum VS) - (\sum V)(\sum S)}{\sqrt{[n\sum V^2 - (\sum V)^2][n\sum S^2 - (\sum S)^2]}}$

$r = \frac{100(160000) - (5000)(15000)}{\sqrt{[100(300000) - (5000)^2][100(480000) - (15000)^2]}}$
$r = \frac{16000000 - 75000000}{\sqrt{[30000000 - 25000000][48000000 - 225000000]}}$

**Error Identification:** The numbers inside the square root are becoming negative, which is impossible for real-valued data. Let's re-examine the values provided, as they likely do not correspond to a valid dataset for calculating correlation.

Let's assume some corrected, plausible values for demonstration:
*   Number of customers ($n$): 100
*   Sum of website visits ($\sum V$): 5000
*   Sum of total spending ($\sum S$): 15000
*   Sum of squares of website visits ($\sum V^2$): **300000**
*   Sum of squares of total spending ($\sum S^2$): **4800000** (Corrected)
*   Sum of the product of visits and spending ($\sum VS$): **1600000** (Corrected)

Now, let's recalculate with the *corrected* values:

$r = \frac{100(1600000) - (5000)(15000)}{\sqrt{[100(300000) - (5000)^2][100(4800000) - (15000)^2]}}$
$r = \frac{160000000 - 75000000}{\sqrt{[30000000 - 25000000][480000000 - 225000000]}}$
$r = \frac{85000000}{\sqrt{[5000000][255000000]}}$
$r = \frac{85000000}{\sqrt{1.275 \times 10^{12}}}$
$r = \frac{85000000}{1129159.8}$
$r \approx 0.75$

**Interpretation:** With the corrected values, the Pearson correlation coefficient is approximately 0.75. This indicates a strong positive linear relationship between website visits and total customer spending.

**Important Point to Remember:** When working with summary statistics, ensure they are consistent and represent a valid dataset. Negative values under the square root often indicate an issue with the provided numbers. (This highlights the importance of data integrity, a key concept in Data Science, as discussed in *Introducing data science: big data, machine learning, and more, using Python tools* by Cielen et al.).

---

### Practice Questions/Exercises

1.  **Question:** Calculate the Pearson correlation coefficient for the following pairs of data points $(x, y)$: (1, 2), (2, 4), (3, 5), (4, 4), (5, 7).
    **Answer:**
    *   $\sum x = 15$, $\sum y = 22$, $\sum xy = 79$, $\sum x^2 = 55$, $\sum y^2 = 110$, $n=5$.
    *   $r = \frac{5(79) - (15)(22)}{\sqrt{[5(55) - (15)^2][5(110) - (22)^2]}}$
    *   $r = \frac{395 - 330}{\sqrt{[275 - 225][550 - 484]}}$
    *   $r = \frac{65}{\sqrt{[50][66]}}$
    *   $r = \frac{65}{\sqrt{3300}}$
    *   $r \approx \frac{65}{57.45}$
    *   $r \approx 1.13$ (This is impossible, indicating an error in my calculation or the hypothetical data. Let's recheck!)

    **Recalculation:**
    *   $\sum x = 1+2+3+4+5 = 15$
    *   $\sum y = 2+4+5+4+7 = 22$
    *   $\sum xy = (1*2) + (2*4) + (3*5) + (4*4) + (5*7) = 2 + 8 + 15 + 16 + 35 = 76$
    *   $\sum x^2 = 1^2+2^2+3^2+4^2+5^2 = 1+4+9+16+25 = 55$
    *   $\sum y^2 = 2^2+4^2+5^2+4^2+7^2 = 4+16+25+16+49 = 110$
    *   $n=5$

    $r = \frac{5(76) - (15)(22)}{\sqrt{[5(55) - (15)^2][5(110) - (22)^2]}}$
    $r = \frac{380 - 330}{\sqrt{[275 - 225][550 - 484]}}$
    $r = \frac{50}{\sqrt{[50][66]}}$
    $r = \frac{50}{\sqrt{3300}}$
    $r \approx \frac{50}{57.45}$
    $r \approx 0.87$

    **Final Answer for Q1:** $r \approx 0.87$. This indicates a strong positive linear correlation.

2.  **Question:** A researcher reports that the correlation between study time and exam performance is $r = -0.35$. What does this value tell you about the relationship between study time and exam performance?
    **Answer:** The Pearson correlation coefficient of $-0.35$ indicates a **weak negative linear correlation** between study time and exam performance. This means that as study time increases, exam performance tends to decrease slightly in a linear fashion, but the relationship is not very strong. It's possible that other factors significantly influence exam performance, or the linear relationship is not the dominant pattern.

3.  **Question:** Given the following summary statistics for two variables, X and Y:
    *   $n = 20$
    *   $\bar{x} = 10$, $\bar{y} = 25$
    *   $s_x = 3$, $s_y = 5$
    *   $Cov(X, Y) = 9$

    Calculate the Pearson correlation coefficient $r$.
    **Answer:**
    *   We know that $r = \frac{Cov(X, Y)}{s_x s_y}$.
    *   $r = \frac{9}{(3)(5)}$
    *   $r = \frac{9}{15}$
    *   $r = 0.60$
    *   **Interpretation:** This indicates a **moderate to strong positive linear correlation** between variables X and Y.

### Important Points to Remember

*   **Linearity:** Pearson correlation only measures **linear** relationships. Non-linear relationships (e.g., quadratic, exponential) will not be captured by this coefficient. Always visualize your data with a scatter plot.
*   **Range of $r$:** The Pearson correlation coefficient $r$ is always between -1 and +1.
*   **Causation vs. Correlation:** Correlation does not imply causation. A high correlation between two variables doesn't mean one causes the other.
*   **Outliers:** Correlation coefficients can be very sensitive to outliers. A single extreme data point can significantly skew the value of $r$.
*   **Data Type:** Pearson correlation is appropriate for **quantitative** (interval or ratio scale) data.
*   **Sample Size:** The interpretation of the strength of correlation can depend on the sample size. A correlation of 0.3 might be considered weak with a large sample but could be significant with a small sample.
*   **Context is Key:** The interpretation of "weak," "moderate," or "strong" correlation should always be considered within the context of the specific problem and domain knowledge.
