---
title: "Standard Deviation"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b718"
status: "completed"
scrapedAt: "2026-05-20T16:43:57.503Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data - Standard Deviation

## Learning Outcomes:

*   Understand the concept of standard deviation and its significance in data analysis.
*   Calculate standard deviation for both population and sample data.
*   Interpret standard deviation in the context of data variability and distribution.
*   Distinguish between standard deviation and variance.
*   Apply standard deviation to compare different datasets.

## 1. Key Concepts and Definitions

*   **Standard Deviation:**  A measure of the amount of variation or dispersion of a set of values. A low standard deviation indicates that the values tend to be close to the mean (average) of the set, while a high standard deviation indicates that the values are spread out over a wider range.  It is the square root of the variance.

*   **Variance:** The average of the squared differences from the mean.  It is a measure of how spread out a set of numbers is. Squaring the differences ensures all values are positive, preventing negative and positive differences from cancelling each other out.

*   **Population:** The entire group that you want to draw conclusions about.

*   **Sample:** A subset of the population.

*   **Population Standard Deviation (σ):**  Measures the spread of data within the entire population.

*   **Sample Standard Deviation (s):**  Estimates the spread of data within a sample, which is then used to infer the spread of the entire population. It uses `n-1` in the denominator of the variance calculation (Bessel's correction) to provide an unbiased estimate of the population standard deviation.

*   **Mean (μ for population, x̄ for sample):**  The average of a set of values.  Calculated by summing all the values and dividing by the number of values.

*   **Degrees of Freedom (n-1):**  The number of independent pieces of information available for estimating a parameter.  Used in the sample standard deviation formula to account for the fact that the sample mean is used to estimate the population mean.  Using `n-1` provides a more accurate estimate of population variance.

## 2. Formulae

### 2.1 Population Standard Deviation (σ)

*   **Formula:**
    σ = √[ Σ(xᵢ - μ)² / N ]

    Where:
    *   σ = Population standard deviation
    *   xᵢ = Each individual value in the population
    *   μ = Population mean
    *   N = Number of values in the population
    *   Σ = Summation (add up all the values)

    **Steps:**
    1.  Calculate the population mean (μ).
    2.  For each value (xᵢ), subtract the mean (μ) and square the result: (xᵢ - μ)².
    3.  Sum up all the squared differences: Σ(xᵢ - μ)².
    4.  Divide the sum by the number of values in the population (N).  This gives you the variance.
    5.  Take the square root of the variance to get the standard deviation (σ).

### 2.2 Sample Standard Deviation (s)

*   **Formula:**
    s = √[ Σ(xᵢ - x̄)² / (n - 1) ]

    Where:
    *   s = Sample standard deviation
    *   xᵢ = Each individual value in the sample
    *   x̄ = Sample mean
    *   n = Number of values in the sample
    *   Σ = Summation (add up all the values)

    **Steps:**
    1.  Calculate the sample mean (x̄).
    2.  For each value (xᵢ), subtract the mean (x̄) and square the result: (xᵢ - x̄)².
    3.  Sum up all the squared differences: Σ(xᵢ - x̄)².
    4.  Divide the sum by (n - 1). This gives you the *sample* variance, which is a *better estimate* of the population variance.
    5.  Take the square root of the variance to get the sample standard deviation (s).

## 3. Examples

### 3.1 Population Standard Deviation Example

Let's say we have the exam scores of all 5 students in a small class (our *entire population*): 70, 80, 90, 85, 75

1.  **Calculate the mean (μ):**
    μ = (70 + 80 + 90 + 85 + 75) / 5 = 80

2.  **Calculate the squared differences from the mean:**
    *   (70 - 80)² = 100
    *   (80 - 80)² = 0
    *   (90 - 80)² = 100
    *   (85 - 80)² = 25
    *   (75 - 80)² = 25

3.  **Sum the squared differences:**
    Σ(xᵢ - μ)² = 100 + 0 + 100 + 25 + 25 = 250

4.  **Divide by N (population size):**
    Variance = 250 / 5 = 50

5.  **Take the square root:**
    σ = √50 ≈ 7.07

    Therefore, the population standard deviation is approximately 7.07.

### 3.2 Sample Standard Deviation Example

Now, let's say we only sampled 3 scores from a larger class: 70, 80, 90

1.  **Calculate the mean (x̄):**
    x̄ = (70 + 80 + 90) / 3 = 80

2.  **Calculate the squared differences from the mean:**
    *   (70 - 80)² = 100
    *   (80 - 80)² = 0
    *   (90 - 80)² = 100

3.  **Sum the squared differences:**
    Σ(xᵢ - x̄)² = 100 + 0 + 100 = 200

4.  **Divide by (n - 1) (sample size - 1):**
    Variance = 200 / (3 - 1) = 200 / 2 = 100

5.  **Take the square root:**
    s = √100 = 10

    Therefore, the sample standard deviation is 10.  Notice it's slightly larger than the population standard deviation calculated earlier. This is because we're estimating the population standard deviation from a smaller sample.

## 4. Interpretation of Standard Deviation

*   **Low Standard Deviation:** Indicates data points are clustered closely around the mean. This suggests more consistency and less variability in the data.

*   **High Standard Deviation:** Indicates data points are spread out over a wider range around the mean. This suggests more variability and less consistency in the data.

*   **Comparison:**  When comparing two datasets, the dataset with the higher standard deviation has more variability than the dataset with the lower standard deviation. For example, if the daily temperatures in City A have a standard deviation of 5 degrees and the daily temperatures in City B have a standard deviation of 15 degrees, the temperatures in City B are more variable.

## 5. Standard Deviation vs. Variance

| Feature        | Standard Deviation                | Variance                          |
| -------------- | ---------------------------------- | --------------------------------- |
| Definition     | Measure of data spread around mean | Average of squared differences from mean |
| Units          | Same units as the data           | Squared units of the data          |
| Calculation    | Square root of variance           | Sum of squared differences / N or n-1|
| Interpretation | How much values deviate from mean | Spread of data, but less intuitive  |
| Use            | Easier to interpret practically   | Used in more advanced statistical calculations |

**Key takeaway:** Standard deviation is more intuitive for understanding data spread because it's in the same units as the original data.  Variance is often used in further statistical calculations like ANOVA.

## 6. Applications of Standard Deviation

*   **Quality Control:** Monitoring the consistency of a manufacturing process. A high standard deviation in product dimensions indicates inconsistencies and potential quality issues.

*   **Finance:** Assessing the risk associated with investments. A stock with a higher standard deviation in its returns is considered riskier than a stock with a lower standard deviation.

*   **Education:** Evaluating student performance. Standard deviation can show the spread of scores on an exam, highlighting whether the class is relatively homogeneous or has a wide range of abilities.

*   **Healthcare:** Analyzing patient data.  For example, the standard deviation of blood pressure readings can indicate how stable a patient's condition is.

## 7. Practice Questions

**Question 1:**

Calculate the sample standard deviation for the following dataset:  10, 12, 15, 18, 20

**Answer:**

1.  **Calculate the mean (x̄):**
    x̄ = (10 + 12 + 15 + 18 + 20) / 5 = 15

2.  **Calculate the squared differences from the mean:**
    *   (10 - 15)² = 25
    *   (12 - 15)² = 9
    *   (15 - 15)² = 0
    *   (18 - 15)² = 9
    *   (20 - 15)² = 25

3.  **Sum the squared differences:**
    Σ(xᵢ - x̄)² = 25 + 9 + 0 + 9 + 25 = 68

4.  **Divide by (n - 1) (sample size - 1):**
    Variance = 68 / (5 - 1) = 68 / 4 = 17

5.  **Take the square root:**
    s = √17 ≈ 4.12

    Therefore, the sample standard deviation is approximately 4.12.

**Question 2:**

Two classes took the same test. Class A had a mean score of 75 with a standard deviation of 5. Class B had a mean score of 75 with a standard deviation of 10. What can you conclude about the two classes?

**Answer:**

Both classes had the same average score (75). However, Class B had a higher standard deviation (10) than Class A (5). This indicates that the scores in Class B were more spread out and variable than the scores in Class A.  Class A's scores were more clustered around the mean.

**Question 3:**

True or False: A negative standard deviation is possible.

**Answer:**

False. Standard deviation is always non-negative because it is the square root of the variance, and variance is calculated using squared differences.

## 8. Important Points to Remember

*   Standard deviation provides a measure of data variability around the mean.
*   Population standard deviation is calculated using the entire population data, while sample standard deviation is calculated using a subset of the population and used to estimate the population standard deviation.
*   Sample standard deviation uses (n-1) in the denominator to provide an unbiased estimate of the population standard deviation (Bessel's correction).
*   A low standard deviation indicates data points are clustered around the mean, while a high standard deviation indicates data points are more spread out.
*   Standard deviation is used in various fields, including quality control, finance, education, and healthcare, to analyze data and make informed decisions.
