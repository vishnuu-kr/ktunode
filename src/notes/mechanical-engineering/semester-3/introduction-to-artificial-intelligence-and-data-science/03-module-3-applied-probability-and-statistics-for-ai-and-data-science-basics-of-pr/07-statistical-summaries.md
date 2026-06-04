---
title: "statistical summaries"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d98"
status: "completed"
scrapedAt: "2026-05-20T17:49:54.912Z"
---
## Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

### Topic: Statistical Summaries

This module focuses on the fundamental statistical concepts essential for understanding and applying Artificial Intelligence and Data Science techniques. We'll begin by exploring how to summarize and describe datasets using various statistical measures. This knowledge is crucial for **CO3: Analyze and interpret data using statistical methods including descriptive statistics, correlation, and regression analysis to derive meaningful insights and make informed decisions.**

---

### 1. Introduction to Statistical Summaries

Statistical summaries are numerical values that condense a dataset into a few representative numbers, providing a quick understanding of its characteristics. They are essential for:

*   **Data Exploration:** Quickly grasping the central tendency, spread, and shape of a dataset.
*   **Communication:** Effectively conveying key information about a dataset to others.
*   **Model Building:** Providing initial insights that inform the selection and application of AI/ML algorithms.

---

### 2. Measures of Central Tendency

These measures describe the "center" or typical value of a dataset.

#### 2.1. Mean (Average)

*   **Definition:** The sum of all values in a dataset divided by the number of values.
*   **Formula:**
    *   For a population: $\mu = \frac{\sum_{i=1}^{N} x_i}{N}$
    *   For a sample: $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$
    *   Where $x_i$ is the i-th value, $N$ is the population size, and $n$ is the sample size.
*   **Reference:** Gupta & Kapoor, Chapter 3, "Measures of Central Tendency".
*   **Example:** If a dataset contains the scores {70, 80, 90, 75, 85}, the mean is (70+80+90+75+85) / 5 = 80.
*   **AI/Data Science Relevance:** Often used as an initial estimate for unknown values, a baseline for comparisons, and a key component in many statistical tests and algorithms.

#### 2.2. Median

*   **Definition:** The middle value in a dataset that has been ordered from least to greatest.
*   **Calculation:**
    *   If the number of observations ($n$) is odd, the median is the $\frac{(n+1)}{2}$ th value.
    *   If $n$ is even, the median is the average of the $\frac{n}{2}$ th and $(\frac{n}{2} + 1)$ th values.
*   **Reference:** Gupta & Kapoor, Chapter 3, "Measures of Central Tendency".
*   **Example:** For scores {70, 75, 80, 85, 90}, the median is 80. For scores {70, 75, 80, 85, 90, 95}, the median is (80+85)/2 = 82.5.
*   **AI/Data Science Relevance:** Less sensitive to outliers than the mean, making it a robust measure of central tendency for skewed data. Used in algorithms like median filtering in image processing.

#### 2.3. Mode

*   **Definition:** The value that appears most frequently in a dataset.
*   **Calculation:** Count the occurrences of each value and identify the one with the highest count. A dataset can have no mode, one mode (unimodal), or multiple modes (bimodal, multimodal).
*   **Reference:** Gupta & Kapoor, Chapter 3, "Measures of Central Tendency".
*   **Example:** For scores {70, 80, 80, 90, 75, 80}, the mode is 80. For {70, 80, 90, 75, 85}, there is no mode. For {70, 70, 80, 80, 90}, both 70 and 80 are modes.
*   **AI/Data Science Relevance:** Useful for categorical data and identifying the most common category or observation.

---

### 3. Measures of Dispersion (Variability)

These measures describe how spread out or scattered the data points are.

#### 3.1. Range

*   **Definition:** The difference between the highest and lowest values in a dataset.
*   **Formula:** Range = Maximum Value - Minimum Value
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion".
*   **Example:** For scores {70, 75, 80, 85, 90}, the range is 90 - 70 = 20.
*   **AI/Data Science Relevance:** A simple but sensitive measure to outliers.

#### 3.2. Variance

*   **Definition:** The average of the squared differences from the mean. It measures how far each data point is from the mean.
*   **Formula:**
    *   For a population: $\sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}$
    *   For a sample: $s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}$ (using $n-1$ for unbiased estimation)
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion".
*   **AI/Data Science Relevance:** A fundamental concept in statistics, crucial for understanding data variability. It's used in algorithms like PCA (Principal Component Analysis) for dimensionality reduction and in statistical tests. **Relevant to CO2.**

#### 3.3. Standard Deviation

*   **Definition:** The square root of the variance. It provides a measure of the typical amount of variation or dispersion in the data.
*   **Formula:**
    *   For a population: $\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}}$
    *   For a sample: $s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion".
*   **Example:** If the variance of scores {70, 80, 90, 75, 85} is 60, the standard deviation is $\sqrt{60} \approx 7.75$.
*   **AI/Data Science Relevance:** The most commonly used measure of spread. It's essential for understanding the distribution of data, identifying outliers, and in hypothesis testing. It's a key component in understanding **CO3**.

#### 3.4. Interquartile Range (IQR)

*   **Definition:** The difference between the third quartile (Q3) and the first quartile (Q1). It measures the spread of the middle 50% of the data.
*   **Formula:** IQR = Q3 - Q1
*   **Calculation:**
    1.  Order the data.
    2.  Find the median (Q2).
    3.  Find the median of the lower half of the data (Q1).
    4.  Find the median of the upper half of the data (Q3).
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion".
*   **Example:** For scores {70, 75, 80, 85, 90, 95}, Q1 = 75, Q2 = 82.5, Q3 = 90. IQR = 90 - 75 = 15.
*   **AI/Data Science Relevance:** A robust measure of dispersion, unaffected by extreme outliers. Used in box plots and for outlier detection.

---

### 4. Measures of Shape

These measures describe the form or skewness of the data distribution.

#### 4.1. Skewness

*   **Definition:** A measure of the asymmetry of a probability distribution of a real-valued random variable about its mean.
    *   **Positive Skewness:** The tail on the right side of the distribution is longer or fatter than the left side. Mean > Median > Mode.
    *   **Negative Skewness:** The tail on the left side of the distribution is longer or fatter than the right side. Mode > Median > Mean.
    *   **Zero Skewness:** The distribution is perfectly symmetrical. Mean = Median = Mode.
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion". Also discussed in Deisenroth, Faisal, & Ong (2020) regarding data characteristics.
*   **AI/Data Science Relevance:** Understanding skewness helps in choosing appropriate models and transformations. For instance, models that assume normality might perform poorly on highly skewed data. This relates to **CO3**.

#### 4.2. Kurtosis

*   **Definition:** A measure of the "tailedness" of the probability distribution. It indicates whether the data are heavy-tailed or light-tailed relative to a normal distribution.
    *   **Leptokurtic (Positive Kurtosis):** Heavier tails and a sharper peak than the normal distribution.
    *   **Mesokurtic (Zero Kurtosis):** Similar peakedness and tails to the normal distribution.
    *   **Platykurtic (Negative Kurtosis):** Lighter tails and a flatter peak than the normal distribution.
*   **Reference:** Gupta & Kapoor, Chapter 4, "Measures of Dispersion".
*   **AI/Data Science Relevance:** Important for risk assessment and understanding the probability of extreme events. For example, in finance, high kurtosis can indicate a higher probability of market crashes.

---

### 5. Measures of Position

These measures describe the relative standing of a particular data point within a dataset.

#### 5.1. Percentiles

*   **Definition:** A value below which a certain percentage of observations fall. For example, the 75th percentile is the value below which 75% of the data falls.
*   **Reference:** Gupta & Kapoor, Chapter 3, "Measures of Central Tendency".
*   **Example:** If the 90th percentile of exam scores is 85, it means 90% of students scored 85 or below.
*   **AI/Data Science Relevance:** Used to understand data distribution, create confidence intervals, and in data normalization techniques.

#### 5.2. Quartiles

*   **Definition:** Specific percentiles that divide the data into four equal parts.
    *   **Q1 (First Quartile):** 25th percentile.
    *   **Q2 (Second Quartile):** 50th percentile (also the median).
    *   **Q3 (Third Quartile):** 75th percentile.
*   **Reference:** Gupta & Kapoor, Chapter 3, "Measures of Central Tendency".
*   **AI/Data Science Relevance:** Essential for understanding data spread (via IQR) and for creating box plots, which are powerful visualization tools for exploring data. **Relevant to CO3**.

---

### 6. Visualizing Statistical Summaries

Graphical representations are crucial for understanding statistical summaries.

#### 6.1. Histograms

*   **Definition:** A bar graph that displays the frequency distribution of a continuous dataset. The x-axis represents data intervals (bins), and the y-axis represents the frequency or count of data points within each interval.
*   **Reference:** Cielen, Meysman, & Meysman (2016), Chapter 3, "Data Wrangling and Exploration".
*   **AI/Data Science Relevance:** Helps visualize the shape of the distribution, identify central tendency, spread, and skewness.

#### 6.2. Box Plots (Box-and-Whisker Plots)

*   **Definition:** A standardized way of displaying the distribution of data based on the five-number summary: minimum, first quartile (Q1), median (Q2), third quartile (Q3), and maximum.
*   **Reference:** Cielen, Meysman, & Meysman (2016), Chapter 3, "Data Wrangling and Exploration".
*   **AI/Data Science Relevance:** Excellent for comparing distributions across different groups and for identifying outliers.

#### 6.3. Scatter Plots

*   **Definition:** A graphical representation of the relationship between two quantitative variables. Each point on the plot represents a pair of values.
*   **Reference:** Cielen, Meysman, & Meysman (2016), Chapter 3, "Data Wrangling and Exploration". Also relevant to **CO3** for understanding correlation.
*   **AI/Data Science Relevance:** Crucial for visualizing potential correlations between features, which is a precursor to regression analysis and understanding relationships in data.

---

### 7. Outliers

*   **Definition:** Data points that are significantly different from other observations in a dataset.
*   **Identification Methods:**
    *   **Visual Inspection:** Histograms, box plots.
    *   **Z-score:** A value that is more than 2 or 3 standard deviations away from the mean.
    *   **IQR Method:** Values below Q1 - 1.5\*IQR or above Q3 + 1.5\*IQR.
*   **Reference:** Evans & Rosenthal (2009), Chapter 11, "Outliers and Robust Statistics".
*   **AI/Data Science Relevance:** Outliers can heavily influence statistical summaries and model performance. It's important to either remove, transform, or use robust statistical methods when dealing with them. This is critical for building reliable AI models.

---

### 8. Practice Questions and Exercises

**Question 1:**
Given the dataset: {12, 15, 18, 15, 20, 22, 15, 25, 28}
Calculate:
a) The mean
b) The median
c) The mode
d) The range
e) The variance (sample variance)
f) The standard deviation (sample standard deviation)
g) The Interquartile Range (IQR)

**Answer 1:**
First, order the data: {12, 15, 15, 15, 18, 20, 22, 25, 28}
n = 9

a) **Mean:**
Sum = 12 + 15 + 15 + 15 + 18 + 20 + 22 + 25 + 28 = 170
Mean = 170 / 9 = **18.89** (approx.)

b) **Median:**
Since n is odd, the median is the (9+1)/2 = 5th value.
Median = **18**

c) **Mode:**
The value 15 appears 3 times, which is the most frequent.
Mode = **15**

d) **Range:**
Max Value = 28, Min Value = 12
Range = 28 - 12 = **16**

e) **Variance (sample variance):**
Calculate deviations from the mean ($\bar{x} \approx 18.89$):
(12-18.89)^2 = (-6.89)^2 = 47.47
(15-18.89)^2 = (-3.89)^2 = 15.13
(15-18.89)^2 = (-3.89)^2 = 15.13
(15-18.89)^2 = (-3.89)^2 = 15.13
(18-18.89)^2 = (-0.89)^2 = 0.79
(20-18.89)^2 = (1.11)^2 = 1.23
(22-18.89)^2 = (3.11)^2 = 9.67
(25-18.89)^2 = (6.11)^2 = 37.33
(28-18.89)^2 = (9.11)^2 = 82.99
Sum of squared deviations = 47.47 + 15.13 + 15.13 + 15.13 + 0.79 + 1.23 + 9.67 + 37.33 + 82.99 = 224.87
Variance ($s^2$) = 224.87 / (9-1) = 224.87 / 8 = **28.11** (approx.)

f) **Standard Deviation (sample standard deviation):**
$s = \sqrt{s^2} = \sqrt{28.11} \approx$ **5.30** (approx.)

g) **Interquartile Range (IQR):**
Ordered data: {12, 15, 15, 15, 18, 20, 22, 25, 28}
Median (Q2) = 18
Lower half: {12, 15, 15, 15}
Q1 (median of lower half) = (15 + 15) / 2 = 15
Upper half: {20, 22, 25, 28}
Q3 (median of upper half) = (22 + 25) / 2 = 23.5
IQR = Q3 - Q1 = 23.5 - 15 = **8.5**

---

**Question 2:**
Describe a scenario in AI/Data Science where using the median would be more appropriate than the mean.

**Answer 2:**
Consider a dataset of housing prices in a city. This data is often heavily skewed due to a few extremely expensive properties. If we are trying to understand the "typical" price of a house for a new resident, the mean might be inflated by these few outliers. The median, however, would represent the price at which half the houses are cheaper and half are more expensive, providing a more representative "typical" price in the presence of outliers.

---

### 9. Important Points to Remember

*   **Mean vs. Median:** Always consider the presence of outliers. The median is more robust to outliers.
*   **Standard Deviation:** A key indicator of data spread. A lower standard deviation means data points are closer to the mean; a higher one means they are more spread out.
*   **Variance:** The square of the standard deviation, useful in many statistical formulas but often less interpretable directly due to its units.
*   **IQR:** A robust measure of spread, representing the middle 50% of the data.
*   **Skewness and Kurtosis:** Provide insights into the shape of the data distribution, which is crucial for model selection and understanding potential risks or biases.
*   **Visualizations:** Histograms and box plots are invaluable tools for quickly understanding statistical summaries and identifying potential issues like outliers.
*   **Sample vs. Population:** Be mindful of whether you are working with a sample or an entire population, as the formulas for variance and standard deviation differ slightly. This is important for inferential statistics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. Textbook and Reference Connections

*   **Gupta & Kapoor (Fundamentals of mathematical statistics):** The primary source for definitions and calculations of measures of central tendency, dispersion, and shape. Their chapters on descriptive statistics are directly relevant.
*   **Cielen, Meysman, & Meysman (Introducing data science):** Provides practical context for data exploration and visualization techniques (histograms, box plots, scatter plots) that are used to represent statistical summaries.
*   **Deisenroth, Faisal, & Ong (Mathematics for machine learning):** While not focused solely on descriptive statistics, their discussions on data distributions and characteristics are foundational to understanding why these summaries are important for machine learning.
*   **Evans & Rosenthal (Probability and Statistics - The Science of Uncertainty):** Offers a deeper theoretical understanding of statistical concepts, including outliers and their impact.

This module's content directly supports **CO3** by equipping you with the tools to describe, summarize, and understand the characteristics of datasets, which is the first step in any data science or AI project. Understanding these summaries also lays the groundwork for more advanced topics like correlation and regression analysis, as well as for evaluating the performance of machine learning models.