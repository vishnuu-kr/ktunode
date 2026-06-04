---
title: "Statistical Description of data - Central tendency"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b713"
status: "completed"
scrapedAt: "2026-05-20T16:43:54.072Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data - Central Tendency

## Introduction

This module focuses on understanding and describing data using statistical measures. This topic, Central Tendency, is a fundamental aspect of descriptive statistics, allowing us to identify the typical or average value in a dataset.

## Learning Outcomes

By the end of this section, you should be able to:

*   Define and calculate the mean, median, and mode for a given dataset.
*   Explain the properties of the mean, median, and mode.
*   Identify the advantages and disadvantages of using each measure of central tendency.
*   Choose the appropriate measure of central tendency based on the data's distribution and the presence of outliers.
*   Understand the concept of weighted mean and calculate it.
*   Interpret the meaning of central tendency in the context of data analysis.

## 1. Key Concepts and Definitions

*   **Central Tendency:** A single value that attempts to describe a set of data by identifying the central position within that set of data.  It is often referred to as an "average."
*   **Mean (Arithmetic Mean):**  The sum of all values in a dataset divided by the number of values.  It is the most common measure of central tendency.
    *   **Formula (Population Mean - µ):**  µ = Σx<sub>i</sub> / N  where N is the population size and x<sub>i</sub> are the data values.
    *   **Formula (Sample Mean - x̄):**  x̄ = Σx<sub>i</sub> / n  where n is the sample size and x<sub>i</sub> are the data values.
*   **Median:** The middle value in a dataset when the data is arranged in ascending or descending order.
    *   **Odd Number of Values:** The median is the middle value.
    *   **Even Number of Values:** The median is the average of the two middle values.
*   **Mode:** The value that appears most frequently in a dataset.  A dataset can have no mode (if all values appear only once), one mode (unimodal), two modes (bimodal), or more than two modes (multimodal).
*   **Outlier:** An observation point that is distant from other observations.  Outliers can significantly influence the mean.
*   **Weighted Mean:** An average where some values contribute more than others. Each data value is multiplied by its corresponding weight, and the sum of these products is divided by the sum of the weights.
    *   **Formula:** x̄<sub>w</sub> = Σ(w<sub>i</sub> * x<sub>i</sub>) / Σw<sub>i</sub>, where w<sub>i</sub> are the weights and x<sub>i</sub> are the data values.
*   **Skewness:** A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean.
    *   **Symmetric Distribution:** Mean ≈ Median ≈ Mode
    *   **Right-Skewed (Positively Skewed) Distribution:**  Mean > Median > Mode (Tail extends to the right)
    *   **Left-Skewed (Negatively Skewed) Distribution:** Mean < Median < Mode (Tail extends to the left)

## 2. Properties of Mean, Median, and Mode

| Measure | Properties                                                                      |
|---------|---------------------------------------------------------------------------------|
| Mean    | *   Uses all values in the dataset.                                             |
|         | *   Sensitive to outliers (extreme values).                                      |
|         | *   Uniquely defined (there is only one mean for a given dataset).             |
|         | *   The sum of deviations from the mean is always zero (Σ(x<sub>i</sub> - x̄) = 0). |
| Median  | *   Not affected by extreme values (outliers).                                 |
|         | *   May not be unique (especially with even-sized datasets containing repeated values).|
|         | *   Easy to determine visually from a sorted dataset.                          |
| Mode    | *   Easy to determine.                                                           |
|         | *   Not always unique (can be bimodal or multimodal).                          |
|         | *   May not exist.                                                              |
|         | *   Useful for categorical data.                                               |

## 3. Advantages and Disadvantages

| Measure | Advantages                                                                                                                                                                 | Disadvantages                                                                                                                                                               |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mean    | *   Easy to calculate.                                                                                                                                                         | *   Sensitive to outliers.                                                                                                                                                        |
|         | *   Uses all values in the dataset, providing a comprehensive representation.                                                                                             | *   Can be misleading if the data is skewed.                                                                                                                                 |
|         | *   Widely understood and used.                                                                                                                                            | *   Only applicable to quantitative data (numerical data).                                                                                                                    |
| Median  | *   Not affected by extreme values.                                                                                                                                         | *   Does not use all the values in the dataset.                                                                                                                                 |
|         | *   Useful for skewed data.                                                                                                                                                  | *   Can be more difficult to calculate than the mean, especially with large datasets.                                                                                      |
|         | *   Easy to understand and interpret.                                                                                                                                      | *   Less stable than the mean when taking samples from the same population (the median of different samples can vary more than the mean of different samples).|
| Mode    | *   Easy to identify.                                                                                                                                                          | *   May not exist or may not be unique.                                                                                                                                       |
|         | *   Can be used for categorical data (e.g., finding the most popular color).                                                                                                | *   Not very stable; a small change in the data can drastically change the mode.                                                                                           |
|         | *   Can be useful for identifying common categories or values.                                                                                                              | *   Less mathematically useful than the mean or median.                                                                                                                      |

## 4. Choosing the Appropriate Measure of Central Tendency

*   **Symmetric Data (No Outliers):** Mean, median, and mode will be similar. Use the mean as it is the most commonly used and understood.
*   **Skewed Data (Outliers):** Median is the best choice because it is not affected by extreme values.
*   **Categorical Data:** Mode is the only appropriate measure.
*   **Data requiring weighing for importance:** Weighted mean is the ideal choice.

## 5. Weighted Mean

The weighted mean is useful when some data points are more important than others. It allows you to assign different weights to different values.

**Example:**

A student's final grade is calculated as follows:

*   Assignments: 20%
*   Midterm Exam: 30%
*   Final Exam: 50%

The student's scores are:

*   Assignments: 90
*   Midterm Exam: 80
*   Final Exam: 85

Calculate the weighted mean:

x̄<sub>w</sub> = (0.20 * 90) + (0.30 * 80) + (0.50 * 85) = 18 + 24 + 42.5 = 84.5

The student's final grade is 84.5.

## 6. Interpretation of Central Tendency

Central tendency provides a single value that summarizes the 'center' of a dataset. The interpretation of the mean, median, or mode depends on the context of the data.

**Examples:**

*   **Average Income (Mean):**  Represents the average income of a population. Can be skewed by very high earners.
*   **Typical House Price (Median):** Represents the middle house price. Less affected by extremely expensive or inexpensive houses.
*   **Most Popular Color (Mode):** Represents the color that is most frequently chosen.

## 7. Practice Questions/Exercises

**Question 1:**

Calculate the mean, median, and mode for the following dataset: 10, 12, 15, 12, 18, 20, 12

**Answer:**

*   **Mean:** (10 + 12 + 15 + 12 + 18 + 20 + 12) / 7 = 99 / 7 = 14.14
*   **Median:** First, sort the data: 10, 12, 12, **12**, 15, 18, 20. The median is 12.
*   **Mode:** 12 (appears 3 times)

**Question 2:**

Consider the dataset: 5, 7, 8, 10, 12, 15, 100. Which measure of central tendency is most appropriate? Explain why.

**Answer:**

The median is the most appropriate measure. The value 100 is a significant outlier. The mean would be heavily influenced by this outlier, making it a less representative measure of the 'center' of the data. The median, being resistant to outliers, provides a better representation.

**Question 3:**

A teacher calculates final grades as follows: Homework (20%), Quizzes (30%), Exam (50%). A student has the following scores: Homework = 85, Quizzes = 90, Exam = 75.  Calculate the weighted average.

**Answer:**

Weighted Average = (0.20 * 85) + (0.30 * 90) + (0.50 * 75) = 17 + 27 + 37.5 = 81.5

**Question 4:**

Explain why the median is preferred over the mean when dealing with income data.

**Answer:**

Income data is typically right-skewed, meaning there are a few individuals with very high incomes that pull the mean upward. This can make the mean a misleading representation of the "typical" income. The median, which is less sensitive to extreme values, provides a more accurate representation of the middle income.

## 8. Important Points to Remember

*   The choice of central tendency measure depends on the data's distribution and the presence of outliers.
*   The mean is sensitive to outliers, while the median is resistant.
*   The mode is useful for categorical data.
*   Understanding skewness helps in interpreting the relationship between the mean, median, and mode.
*   Always consider the context of the data when interpreting measures of central tendency.
*   The weighted mean considers the importance of each data point.
