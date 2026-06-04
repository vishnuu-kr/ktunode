---
title: "Data Summarization Techniques - Central tendency measures: mean, median, mode; Dispersion measures - variance, standard deviation, Interquartile range (IQR), Quantiles, percentiles, and outlier detection"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 2: Data Summarization Techniques "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c793"
status: "completed"
scrapedAt: "2026-05-20T17:00:27.424Z"
---
# ALGORITHMS FOR DATA SCIENCE: Module 2 - Data Summarization Techniques

---

## 2.1 Introduction to Data Summarization

Data summarization is a crucial step in data science. It involves condensing a large dataset into a smaller, more manageable representation while retaining its essential characteristics. This allows for easier understanding, analysis, and communication of data insights.

**Key Concepts:**

*   **Summarization:** Reducing the complexity of data by extracting key features or statistics.
*   **Insight:** Deriving meaningful information and understanding from data.
*   **Visualization:** Representing data graphically to aid understanding.

---

## 2.2 Central Tendency Measures

Central tendency measures describe the "center" or typical value of a dataset. They tell us where most of the data points tend to cluster.

### 2.2.1 Mean (Average)

The mean is the sum of all values in a dataset divided by the number of values.

**Definition:**
$$
\text{Mean} (\bar{x}) = \frac{\sum_{i=1}^{n} x_i}{n}
$$
Where:
*   $x_i$ represents each individual data point.
*   $n$ is the total number of data points.

**Characteristics:**
*   Sensitive to extreme values (outliers).
*   Used for numerical data.
*   Provides a good representation of the center when the data is symmetrically distributed.

**Example:**
Consider the dataset: {2, 4, 4, 5, 7, 9}
Sum of values = 2 + 4 + 4 + 5 + 7 + 9 = 31
Number of values = 6
Mean = 31 / 6 = 5.17 (approximately)

---

### 2.2.2 Median

The median is the middle value of a dataset that has been ordered from least to greatest.

**Definition:**
*   If the number of data points ($n$) is odd, the median is the middle value.
*   If the number of data points ($n$) is even, the median is the average of the two middle values.

**Characteristics:**
*   Less sensitive to extreme values (outliers) compared to the mean.
*   Used for numerical and ordinal data.
*   Provides a good representation of the center when the data is skewed.

**Example 1 (Odd number of values):**
Dataset: {2, 4, 4, 5, 7}
Ordered dataset: {2, 4, 4, 5, 7}
Median = 4

**Example 2 (Even number of values):**
Dataset: {2, 4, 4, 5, 7, 9}
Ordered dataset: {2, 4, 4, 5, 7, 9}
Middle values are 4 and 5.
Median = (4 + 5) / 2 = 4.5

---

### 2.2.3 Mode

The mode is the value that appears most frequently in a dataset.

**Definition:** The value(s) with the highest frequency.

**Characteristics:**
*   Can be used for any type of data (numerical, categorical).
*   A dataset can have one mode (unimodal), two modes (bimodal), or more than two modes (multimodal).
*   If all values appear with the same frequency, there is no mode.

**Example 1 (Unimodal):**
Dataset: {2, 4, 4, 5, 7, 9}
Mode = 4

**Example 2 (Bimodal):**
Dataset: {1, 2, 2, 3, 3, 4}
Modes = 2 and 3

**Example 3 (No mode):**
Dataset: {1, 2, 3, 4, 5}
No mode.

---

## 2.3 Dispersion Measures (Measures of Spread)

Dispersion measures describe how spread out or scattered the data points are. They tell us about the variability within the dataset.

### 2.3.1 Variance

Variance measures the average squared difference of each data point from the mean. It quantifies how much the data points deviate from the mean.

**Definition:**
*   **Population Variance ($\sigma^2$):**
    $$
    \sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}
    $$
    Where:
    *   $x_i$ is each individual data point.
    *   $\mu$ is the population mean.
    *   $N$ is the total number of data points in the population.

*   **Sample Variance ($s^2$):**
    $$
    s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}
    $$
    Where:
    *   $x_i$ is each individual data point.
    *   $\bar{x}$ is the sample mean.
    *   $n$ is the number of data points in the sample.
    *   $(n-1)$ is used in the denominator for sample variance to provide an unbiased estimate of the population variance (Bessel's correction).

**Characteristics:**
*   Always non-negative.
*   Units are squared (e.g., if data is in meters, variance is in meters squared), which can make interpretation difficult.
*   Sensitive to outliers.

**Example (Sample Variance):**
Dataset: {2, 4, 4, 5, 7, 9}
Sample Mean ($\bar{x}$) = 5.17

| Data Point ($x_i$) | $x_i - \bar{x}$ | $(x_i - \bar{x})^2$ |
| :----------------- | :-------------- | :------------------ |
| 2                  | -3.17           | 10.05               |
| 4                  | -1.17           | 1.37                |
| 4                  | -1.17           | 1.37                |
| 5                  | -0.17           | 0.03                |
| 7                  | 1.83            | 3.35                |
| 9                  | 3.83            | 14.67               |

Sum of squared differences = 10.05 + 1.37 + 1.37 + 0.03 + 3.35 + 14.67 = 30.84
Sample Variance ($s^2$) = 30.84 / (6 - 1) = 30.84 / 5 = 6.17 (approximately)

---

### 2.3.2 Standard Deviation

Standard deviation is the square root of the variance. It is a more interpretable measure of spread because it has the same units as the original data.

**Definition:**
*   **Population Standard Deviation ($\sigma$):**
    $$
    \sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}}
    $$

*   **Sample Standard Deviation ($s$):**
    $$
    s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}
    $$

**Characteristics:**
*   Always non-negative.
*   Has the same units as the original data.
*   A low standard deviation indicates that the data points tend to be close to the mean.
*   A high standard deviation indicates that the data points are spread out over a wider range of values.
*   Sensitive to outliers.

**Example (using the variance from the previous example):**
Sample Variance ($s^2$) = 6.17
Sample Standard Deviation ($s$) = $\sqrt{6.17} \approx 2.48$

---

### 2.3.3 Interquartile Range (IQR)

The Interquartile Range (IQR) is the difference between the third quartile (Q3) and the first quartile (Q1) of a dataset. It measures the spread of the middle 50% of the data.

**Definition:**
$$
\text{IQR} = Q3 - Q1
$$

**Characteristics:**
*   Robust to outliers (not affected by extreme values).
*   Used for numerical data.
*   Provides a measure of spread that is less sensitive to the tails of the distribution.

**How to calculate Q1 and Q3:**
1.  Order the dataset from least to greatest.
2.  Find the median of the dataset (this is Q2).
3.  Q1 is the median of the lower half of the data (excluding the median if the dataset size is odd).
4.  Q3 is the median of the upper half of the data (excluding the median if the dataset size is odd).

**Example:**
Dataset: {2, 4, 4, 5, 7, 9, 10, 11, 12, 15, 18}
Ordered dataset: {2, 4, 4, 5, 7, 9, 10, 11, 12, 15, 18}
$n = 11$

Median (Q2): The middle value is 9.

Lower half: {2, 4, 4, 5, 7}
Median of lower half (Q1) = 4

Upper half: {10, 11, 12, 15, 18}
Median of upper half (Q3) = 12

IQR = Q3 - Q1 = 12 - 4 = 8

---

### 2.3.4 Quantiles, Percentiles

Quantiles and percentiles are ways to divide a dataset into ordered parts.

#### Quantiles

Quantiles divide a dataset into equal-sized subsets.

*   **Quartiles:** Divide the data into 4 equal parts (Q1, Q2, Q3).
*   **Deciles:** Divide the data into 10 equal parts.
*   **Percentiles:** Divide the data into 100 equal parts.

#### Percentiles

A percentile is a value below which a given percentage of observations in a dataset fall.

**Definition:** The $k$-th percentile is the value below which $k\%$ of the data falls.

**Example:**
*   The 25th percentile is the same as the first quartile (Q1).
*   The 50th percentile is the same as the median (Q2).
*   The 75th percentile is the same as the third quartile (Q3).

**How to calculate the $k$-th percentile:**
1.  Order the dataset from least to greatest.
2.  Calculate the position (index) of the percentile: $P = \frac{k}{100} \times n$, where $n$ is the number of data points.
3.  If $P$ is an integer, the percentile is the average of the value at position $P$ and the value at position $P+1$.
4.  If $P$ is not an integer, round it up to the nearest whole number, and the percentile is the value at that position.

**Example:**
Dataset: {2, 4, 4, 5, 7, 9, 10, 11, 12, 15, 18} ($n=11$)

**Calculate the 50th percentile (Median):**
$P = \frac{50}{100} \times 11 = 0.5 \times 11 = 5.5$
Since 5.5 is not an integer, round up to 6.
The 6th value in the ordered dataset is 9.
50th percentile = 9 (which matches our median calculation).

**Calculate the 75th percentile (Q3):**
$P = \frac{75}{100} \times 11 = 0.75 \times 11 = 8.25$
Since 8.25 is not an integer, round up to 9.
The 9th value in the ordered dataset is 12.
75th percentile = 12 (which matches our Q3 calculation).

---

## 2.4 Outlier Detection

Outliers are data points that are significantly different from other observations in a dataset. They can arise from measurement errors, experimental errors, or represent genuinely unusual events.

**Why detect outliers?**
*   They can skew statistical analyses and models, leading to incorrect conclusions.
*   They can reveal important insights or anomalies in the data.

**Methods for Outlier Detection:**

### 2.4.1 Using IQR

The IQR method is a common and robust way to identify outliers.

**Rule:**
A data point is considered an outlier if it falls below $Q1 - 1.5 \times \text{IQR}$ or above $Q3 + 1.5 \times \text{IQR}$.

*   **Lower Bound:** $Q1 - 1.5 \times \text{IQR}$
*   **Upper Bound:** $Q3 + 1.5 \times \text{IQR}$

**Example (using the previous dataset and IQR):**
Dataset: {2, 4, 4, 5, 7, 9, 10, 11, 12, 15, 18}
Q1 = 4
Q3 = 12
IQR = 8

Lower Bound = $4 - 1.5 \times 8 = 4 - 12 = -8$
Upper Bound = $12 + 1.5 \times 8 = 12 + 12 = 24$

In this dataset, there are no values below -8 or above 24, so there are no outliers detected by this method.

**Let's consider a dataset with potential outliers:**
Dataset: {5, 8, 10, 12, 15, 17, 20, 22, 25, 50}
Ordered dataset: {5, 8, 10, 12, 15, 17, 20, 22, 25, 50}
$n = 10$

Median (Q2): (15 + 17) / 2 = 16

Lower half: {5, 8, 10, 12, 15}
Q1 = 10

Upper half: {17, 20, 22, 25, 50}
Q3 = 22

IQR = Q3 - Q1 = 22 - 10 = 12

Lower Bound = $10 - 1.5 \times 12 = 10 - 18 = -8$
Upper Bound = $22 + 1.5 \times 12 = 22 + 18 = 40$

**Outlier Detection:**
*   The value 50 is greater than the Upper Bound of 40.
*   Therefore, 50 is considered an outlier by the IQR method.

### 2.4.2 Using Standard Deviation (Z-score)

Another method to detect outliers is by using Z-scores. A Z-score measures how many standard deviations a data point is away from the mean.

**Definition of Z-score:**
$$
Z = \frac{x - \mu}{\sigma} \quad (\text{for population})
$$
$$
Z = \frac{x - \bar{x}}{s} \quad (\text{for sample})
$$

**Rule:**
A data point is typically considered an outlier if its absolute Z-score is greater than a certain threshold, commonly 2 or 3.

*   **Threshold of 2:** $|Z| > 2$
*   **Threshold of 3:** $|Z| > 3$

**Example (using the dataset with a potential outlier):**
Dataset: {5, 8, 10, 12, 15, 17, 20, 22, 25, 50}
Sample Mean ($\bar{x}$) = (5+8+10+12+15+17+20+22+25+50) / 10 = 184 / 10 = 18.4
Sample Standard Deviation ($s$) = ? (Let's calculate it)

| $x_i$ | $x_i - \bar{x}$ | $(x_i - \bar{x})^2$ |
| :---- | :-------------- | :------------------ |
| 5     | -13.4           | 179.56              |
| 8     | -10.4           | 108.16              |
| 10    | -8.4            | 70.56               |
| 12    | -6.4            | 40.96               |
| 15    | -3.4            | 11.56               |
| 17    | -1.4            | 1.96                |
| 20    | 1.6             | 2.56                |
| 22    | 3.6             | 12.96               |
| 25    | 6.6             | 43.56               |
| 50    | 31.6            | 998.56              |

Sum of squared differences = 179.56 + 108.16 + 70.56 + 40.96 + 11.56 + 1.96 + 2.56 + 12.96 + 43.56 + 998.56 = 1470.4
Sample Variance ($s^2$) = 1470.4 / (10 - 1) = 1470.4 / 9 = 163.38 (approximately)
Sample Standard Deviation ($s$) = $\sqrt{163.38} \approx 12.78$

Now, let's calculate Z-scores:

*   For x = 5: $Z = (5 - 18.4) / 12.78 \approx -1.05$
*   For x = 50: $Z = (50 - 18.4) / 12.78 = 31.6 / 12.78 \approx 2.47$

**Outlier Detection (using |Z| > 2 threshold):**
*   The Z-score for 50 is 2.47, which is greater than 2.
*   Therefore, 50 is considered an outlier by the Z-score method.

**Important Note:** The Z-score method is sensitive to outliers because the mean and standard deviation themselves are affected by extreme values. The IQR method is generally preferred for outlier detection when the data might be skewed or contain extreme values.

---

## 2.5 Important Points to Remember

*   **Central tendency measures (mean, median, mode)** describe the typical value of a dataset.
*   **Mean** is sensitive to outliers; **median** is robust.
*   **Mode** is useful for categorical data and identifying peaks in distributions.
*   **Dispersion measures (variance, standard deviation, IQR)** describe the spread or variability of a dataset.
*   **Standard deviation** is the square root of variance and is in the same units as the data.
*   **IQR** is robust to outliers and measures the spread of the middle 50% of data.
*   **Quantiles and percentiles** divide data into ordered segments, useful for understanding data distribution and identifying specific points.
*   **Outliers** are unusual data points that can distort analysis.
*   The **IQR method** is generally preferred for outlier detection due to its robustness.
*   The **Z-score method** can also detect outliers but is sensitive to the very outliers it's trying to find.

---

## 2.6 Practice Questions and Exercises

**Question 1:**
Given the dataset: {10, 12, 15, 15, 18, 20, 22, 25, 30}
a) Calculate the mean.
b) Calculate the median.
c) Identify the mode(s).
d) Calculate the sample variance.
e) Calculate the sample standard deviation.

**Answer 1:**
Dataset: {10, 12, 15, 15, 18, 20, 22, 25, 30} ($n=9$)
a) Mean = (10+12+15+15+18+20+22+25+30) / 9 = 167 / 9 = 18.56 (approx.)
b) Median = 18 (the middle value as $n=9$)
c) Mode = 15 (appears twice, more than any other value)
d) Variance calculation:
    $\bar{x} = 18.56$
    Sum of $(x_i - \bar{x})^2$: (10-18.56)^2 + (12-18.56)^2 + (15-18.56)^2 + (15-18.56)^2 + (18-18.56)^2 + (20-18.56)^2 + (22-18.56)^2 + (25-18.56)^2 + (30-18.56)^2
    = 73.27 + 43.03 + 12.67 + 12.67 + 0.31 + 2.07 + 11.83 + 41.51 + 130.67 = 328.03
    Sample Variance ($s^2$) = 328.03 / (9 - 1) = 328.03 / 8 = 41.00 (approx.)
e) Sample Standard Deviation ($s$) = $\sqrt{41.00} \approx 6.40$

**Question 2:**
Consider the dataset: {3, 5, 6, 8, 9, 10, 11, 12, 14, 30}
a) Calculate Q1, Q3, and the IQR.
b) Identify any outliers using the IQR method.

**Answer 2:**
Dataset: {3, 5, 6, 8, 9, 10, 11, 12, 14, 30} ($n=10$)
Ordered dataset: {3, 5, 6, 8, 9, 10, 11, 12, 14, 30}
Median (Q2) = (9 + 10) / 2 = 9.5

Lower half: {3, 5, 6, 8, 9}
Q1 = 6

Upper half: {10, 11, 12, 14, 30}
Q3 = 12

a) Q1 = 6, Q3 = 12, IQR = Q3 - Q1 = 12 - 6 = 6

b) Outlier detection using IQR:
Lower Bound = Q1 - 1.5 * IQR = 6 - 1.5 * 6 = 6 - 9 = -3
Upper Bound = Q3 + 1.5 * IQR = 12 + 1.5 * 6 = 12 + 9 = 21

The value 30 is greater than the Upper Bound of 21.
Therefore, 30 is an outlier.

**Question 3:**
Explain the difference between variance and standard deviation and why standard deviation is often preferred for interpretation.

**Answer 3:**
Variance measures the average squared difference of data points from the mean. Its units are the square of the original data units (e.g., meters squared if data is in meters). Standard deviation is the square root of the variance, bringing the measure back into the original units of the data (e.g., meters). This makes standard deviation more interpretable as it directly represents the typical deviation of data points from the mean in the same scale as the data itself.

---
