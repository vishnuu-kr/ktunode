---
title: "Variance"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b717"
status: "completed"
scrapedAt: "2026-05-20T16:43:56.803Z"
---
## Data Analytics - Module 3: Statistical Description of Data - Variance

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define variance and explain its purpose.
*   Calculate the variance for both population and sample data.
*   Interpret the variance in the context of a given dataset.
*   Understand the relationship between variance and standard deviation.
*   Identify the advantages and disadvantages of using variance as a measure of dispersion.

### 1. Key Concepts and Definitions:

*   **Variance:** A measure of how spread out a set of numbers is. More specifically, it quantifies the average squared deviation of each data point from the mean of the dataset. A higher variance indicates greater variability or dispersion within the data, while a lower variance indicates the data points are clustered more closely around the mean.

*   **Dispersion (or Variability):** The extent to which data points are scattered or spread out from a central value (typically the mean). Variance is a key measure of dispersion.

*   **Deviation:** The difference between an individual data point and the mean of the dataset.  Deviation =  `Data Point - Mean`

*   **Population:** The entire group of individuals, objects, or events about which we want information.

*   **Sample:** A subset of the population that is used to make inferences about the entire population.

### 2. Formulae for Variance:

There are different formulas for calculating variance depending on whether you are working with population data or sample data.

*   **Population Variance (σ<sup>2</sup>):**

    *   Formula: σ<sup>2</sup> = Σ(x<sub>i</sub> - μ)<sup>2</sup> / N

        *   σ<sup>2</sup> represents the population variance.
        *   Σ (sigma) represents the summation.
        *   x<sub>i</sub> represents each individual data point in the population.
        *   μ (mu) represents the population mean.
        *   N represents the total number of data points in the population.

    *   Steps:
        1.  Calculate the population mean (μ).
        2.  For each data point (x<sub>i</sub>), calculate the deviation from the mean (x<sub>i</sub> - μ).
        3.  Square each deviation (x<sub>i</sub> - μ)<sup>2</sup>.
        4.  Sum up all the squared deviations (Σ(x<sub>i</sub> - μ)<sup>2</sup>).
        5.  Divide the sum of squared deviations by the total number of data points in the population (N).

*   **Sample Variance (s<sup>2</sup>):**

    *   Formula: s<sup>2</sup> = Σ(x<sub>i</sub> - x̄)<sup>2</sup> / (n - 1)

        *   s<sup>2</sup> represents the sample variance.
        *   Σ (sigma) represents the summation.
        *   x<sub>i</sub> represents each individual data point in the sample.
        *   x̄ (x-bar) represents the sample mean.
        *   n represents the total number of data points in the sample.
        *   (n - 1) is the degrees of freedom.

    *   Steps:
        1.  Calculate the sample mean (x̄).
        2.  For each data point (x<sub>i</sub>), calculate the deviation from the mean (x<sub>i</sub> - x̄).
        3.  Square each deviation (x<sub>i</sub> - x̄)<sup>2</sup>.
        4.  Sum up all the squared deviations (Σ(x<sub>i</sub> - x̄)<sup>2</sup>).
        5.  Divide the sum of squared deviations by (n - 1), where n is the sample size.

    *   **Why (n-1) in Sample Variance?**  Using (n-1) instead of 'n' provides an *unbiased* estimate of the population variance when using a sample. Dividing by 'n' tends to underestimate the population variance.  (n-1) is known as the "degrees of freedom".

### 3. Examples:

**Example 1: Population Variance**

Consider the following population data representing the ages of five employees in a small company: 25, 30, 35, 40, 45

1.  **Calculate the Population Mean (μ):**
    μ = (25 + 30 + 35 + 40 + 45) / 5 = 35

2.  **Calculate Deviations and Squared Deviations:**

    | Age (x<sub>i</sub>) | Deviation (x<sub>i</sub> - μ) | Squared Deviation (x<sub>i</sub> - μ)<sup>2</sup> |
    | :------------------ | :----------------------- | :--------------------------------------------- |
    | 25                 | -10                     | 100                                            |
    | 30                 | -5                      | 25                                             |
    | 35                 | 0                       | 0                                              |
    | 40                 | 5                       | 25                                             |
    | 45                 | 10                      | 100                                            |

3.  **Sum of Squared Deviations:**
    Σ(x<sub>i</sub> - μ)<sup>2</sup> = 100 + 25 + 0 + 25 + 100 = 250

4.  **Calculate Population Variance (σ<sup>2</sup>):**
    σ<sup>2</sup> = 250 / 5 = 50

    Therefore, the population variance of the ages is 50.

**Example 2: Sample Variance**

Consider the following sample data representing the heights (in inches) of four students selected from a larger class: 60, 62, 65, 68

1.  **Calculate the Sample Mean (x̄):**
    x̄ = (60 + 62 + 65 + 68) / 4 = 63.75

2.  **Calculate Deviations and Squared Deviations:**

    | Height (x<sub>i</sub>) | Deviation (x<sub>i</sub> - x̄) | Squared Deviation (x<sub>i</sub> - x̄)<sup>2</sup> |
    | :------------------ | :----------------------- | :--------------------------------------------- |
    | 60                 | -3.75                     | 14.0625                                          |
    | 62                 | -1.75                     | 3.0625                                           |
    | 65                 | 1.25                      | 1.5625                                           |
    | 68                 | 4.25                      | 18.0625                                          |

3.  **Sum of Squared Deviations:**
    Σ(x<sub>i</sub> - x̄)<sup>2</sup> = 14.0625 + 3.0625 + 1.5625 + 18.0625 = 36.75

4.  **Calculate Sample Variance (s<sup>2</sup>):**
    s<sup>2</sup> = 36.75 / (4 - 1) = 36.75 / 3 = 12.25

    Therefore, the sample variance of the heights is 12.25.

### 4. Interpretation of Variance:

*   A higher variance indicates that the data points are more spread out from the mean. The data exhibits more variability.
*   A lower variance indicates that the data points are clustered more closely around the mean.  The data exhibits less variability.
*   Variance is always a non-negative number (zero or positive) because it is calculated using squared deviations.
*   The unit of variance is the square of the unit of the original data.  For example, if the data is in inches, the variance is in square inches. This makes it sometimes difficult to interpret directly. That's why we often use standard deviation (the square root of variance).

### 5. Relationship between Variance and Standard Deviation:

*   **Standard Deviation:** The standard deviation is the square root of the variance. It is another measure of dispersion, but it is expressed in the same units as the original data.
    *   **Population Standard Deviation (σ):** σ = √σ<sup>2</sup>
    *   **Sample Standard Deviation (s):** s = √s<sup>2</sup>

*   Standard deviation is often preferred over variance because it is easier to interpret due to its units being the same as the original data.

### 6. Advantages and Disadvantages of Variance:

**Advantages:**

*   **Comprehensive measure of dispersion:**  Considers the deviation of every data point from the mean, providing a holistic view of data spread.
*   **Mathematical properties:**  Variance has good mathematical properties, making it useful for further statistical analysis, such as analysis of variance (ANOVA).
*   **Foundation for other statistics:**  Used in calculations of many other statistics, including standard deviation, confidence intervals, and hypothesis testing.

**Disadvantages:**

*   **Units of Measurement:** Variance is expressed in squared units of the original data, which makes it difficult to interpret intuitively.
*   **Sensitivity to Outliers:**  Because the deviations are squared, outliers (extreme values) have a disproportionately large impact on the variance.
*   **Difficult to compare directly:**  Comparing variances across different datasets with different scales can be challenging.

### 7. Practice Questions/Exercises:

**Question 1:**

Calculate the population variance for the following data set:  {2, 4, 6, 8, 10}

**Answer 1:**

1.  **Population Mean (μ):** μ = (2 + 4 + 6 + 8 + 10) / 5 = 6
2.  **Deviations and Squared Deviations:**

    | Data Point (x<sub>i</sub>) | Deviation (x<sub>i</sub> - μ) | Squared Deviation (x<sub>i</sub> - μ)<sup>2</sup> |
    | :------------------ | :----------------------- | :--------------------------------------------- |
    | 2                 | -4                      | 16                                            |
    | 4                 | -2                      | 4                                             |
    | 6                 | 0                       | 0                                              |
    | 8                 | 2                       | 4                                             |
    | 10                 | 4                       | 16                                            |

3.  **Sum of Squared Deviations:** Σ(x<sub>i</sub> - μ)<sup>2</sup> = 16 + 4 + 0 + 4 + 16 = 40
4.  **Population Variance (σ<sup>2</sup>):** σ<sup>2</sup> = 40 / 5 = 8

**Question 2:**

Calculate the sample variance for the following data set: {15, 18, 20, 22}

**Answer 2:**

1.  **Sample Mean (x̄):** x̄ = (15 + 18 + 20 + 22) / 4 = 18.75
2.  **Deviations and Squared Deviations:**

    | Data Point (x<sub>i</sub>) | Deviation (x<sub>i</sub> - x̄) | Squared Deviation (x<sub>i</sub> - x̄)<sup>2</sup> |
    | :------------------ | :----------------------- | :--------------------------------------------- |
    | 15                 | -3.75                     | 14.0625                                           |
    | 18                 | -0.75                     | 0.5625                                          |
    | 20                 | 1.25                      | 1.5625                                          |
    | 22                 | 3.25                      | 10.5625                                          |

3.  **Sum of Squared Deviations:** Σ(x<sub>i</sub> - x̄)<sup>2</sup> = 14.0625 + 0.5625 + 1.5625 + 10.5625 = 26.75
4.  **Sample Variance (s<sup>2</sup>):** s<sup>2</sup> = 26.75 / (4 - 1) = 26.75 / 3 = 8.9167 (approximately)

**Question 3:**

What does a high variance indicate about a dataset?

**Answer 3:**

A high variance indicates that the data points are more spread out or dispersed from the mean. This signifies a greater degree of variability within the data.

**Question 4:**

Why do we use (n-1) instead of 'n' when calculating sample variance?

**Answer 4:**

We use (n-1) instead of 'n' in the sample variance formula to provide an *unbiased* estimate of the population variance.  Dividing by 'n' would tend to underestimate the population variance. (n-1) represents the degrees of freedom.

### 8. Important Points to Remember:

*   Variance measures the spread of data around the mean.
*   Use the population variance formula when you have data for the entire population.
*   Use the sample variance formula when you have data from a sample of the population (and remember to use (n-1) in the denominator).
*   Variance is always non-negative.
*   Variance is expressed in squared units, making standard deviation (the square root of variance) easier to interpret.
*   Variance is sensitive to outliers.
*   A higher variance indicates greater variability in the data.
