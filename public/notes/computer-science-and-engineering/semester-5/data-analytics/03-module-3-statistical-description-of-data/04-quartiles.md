---
title: "Quartiles"
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b716"
status: "completed"
scrapedAt: "2026-05-20T16:43:56.105Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data - Quartiles

**Learning Outcomes:**

*   Understand the concept of quartiles and their importance in data analysis.
*   Learn how to calculate quartiles (Q1, Q2, Q3) for both ungrouped (raw) and grouped data.
*   Interpret the meaning of quartiles and their relationship to the data distribution.
*   Calculate and interpret the Interquartile Range (IQR).
*   Use quartiles to identify potential outliers in a dataset.

## 1. Introduction to Quartiles

*   **Definition:** Quartiles are values that divide a dataset into four equal parts when the data is ordered from least to greatest. Each part contains approximately 25% of the data.
*   **Importance:**
    *   They provide a measure of spread or dispersion of data.
    *   They help understand the distribution of data and identify skewness.
    *   They are used to identify outliers.
    *   They are less sensitive to extreme values than measures like the mean.
*   **Key Quartiles:**
    *   **Q1 (First Quartile/Lower Quartile/25th Percentile):** The value below which 25% of the data falls.
    *   **Q2 (Second Quartile/Median/50th Percentile):** The middle value of the dataset. 50% of the data falls below this value.
    *   **Q3 (Third Quartile/Upper Quartile/75th Percentile):** The value below which 75% of the data falls.

## 2. Calculating Quartiles for Ungrouped Data (Raw Data)

*   **Steps:**
    1.  **Order the data:** Arrange the dataset in ascending order (from smallest to largest).
    2.  **Find Q2 (Median):** This is the middle value.
        *   If the number of data points (n) is odd, Q2 is the (n+1)/2 th value.
        *   If the number of data points (n) is even, Q2 is the average of the n/2 th and (n/2 + 1) th values.
    3.  **Find Q1:**  The median of the lower half of the data (excluding Q2 if n is odd).
    4.  **Find Q3:** The median of the upper half of the data (excluding Q2 if n is odd).

*   **Example:**

    Consider the dataset: 12, 5, 8, 15, 20, 7, 10, 18, 22

    1.  **Ordered data:** 5, 7, 8, 10, 12, 15, 18, 20, 22 (n=9)
    2.  **Q2 (Median):** (9+1)/2 = 5th value = 12
    3.  **Lower half:** 5, 7, 8, 10
    4.  **Q1:** Median of lower half = (7+8)/2 = 7.5
    5.  **Upper half:** 15, 18, 20, 22
    6.  **Q3:** Median of upper half = (18+20)/2 = 19

*   **Important Note:**  There are different methods to calculate quartiles, and software packages might use slightly different formulas, leading to minor variations in the results.  The method outlined above is a common and widely accepted approach.

## 3. Calculating Quartiles for Grouped Data (Frequency Distribution)

*   **Concept:** With grouped data, we have data organized into intervals or classes with corresponding frequencies.  We use formulas to approximate the quartile values since we don't know the exact individual data points.
*   **Formulas:**

    *   **Q1:**  L1 + [(n/4 - cf)/f1] * h
    *   **Q2 (Median):** L2 + [(n/2 - cf)/f2] * h
    *   **Q3:** L3 + [(3n/4 - cf)/f3] * h

    Where:
    *   L = Lower boundary of the quartile class (the class containing the quartile)
    *   n = Total frequency (total number of data points)
    *   cf = Cumulative frequency of the class *preceding* the quartile class
    *   f = Frequency of the quartile class
    *   h = Class width (interval size)
*   **Steps:**

    1.  **Calculate Cumulative Frequencies:** Add a cumulative frequency column to your frequency distribution table.
    2.  **Identify Quartile Class:**
        *   Q1 Class: The class containing the (n/4)th value.
        *   Q2 Class (Median Class): The class containing the (n/2)th value.
        *   Q3 Class: The class containing the (3n/4)th value.
    3.  **Apply the Formulas:**  Substitute the values into the appropriate quartile formula.

*   **Example:**

    | Class Interval | Frequency (f) | Cumulative Frequency (cf) |
    |----------------|----------------|---------------------------|
    | 10-20          | 5              | 5                         |
    | 20-30          | 8              | 13                        |
    | 30-40          | 12             | 25                        |
    | 40-50          | 7              | 32                        |
    | 50-60          | 3              | 35                        |

    n = 35

    1. **Q1:** n/4 = 35/4 = 8.75.  The Q1 class is 20-30 (since the cumulative frequency reaches 13, exceeding 8.75).
       *   L1 = 20
       *   cf = 5
       *   f1 = 8
       *   h = 10
       *   Q1 = 20 + [(35/4 - 5)/8] * 10 = 20 + (3.75/8) * 10 = 20 + 4.6875 = 24.6875

    2. **Q2 (Median):** n/2 = 35/2 = 17.5. The Q2 class is 30-40 (cumulative frequency exceeds 17.5).
       *   L2 = 30
       *   cf = 13
       *   f2 = 12
       *   h = 10
       *   Q2 = 30 + [(35/2 - 13)/12] * 10 = 30 + (4.5/12) * 10 = 30 + 3.75 = 33.75

    3. **Q3:** 3n/4 = (3*35)/4 = 26.25. The Q3 class is 40-50 (cumulative frequency exceeds 26.25).
       *   L3 = 40
       *   cf = 25
       *   f3 = 7
       *   h = 10
       *   Q3 = 40 + [(3*35/4 - 25)/7] * 10 = 40 + (1.25/7) * 10 = 40 + 1.7857 = 41.7857

## 4. Interquartile Range (IQR)

*   **Definition:** The IQR is the difference between the third quartile (Q3) and the first quartile (Q1).
*   **Formula:** IQR = Q3 - Q1
*   **Interpretation:**  The IQR represents the range within which the middle 50% of the data lies. It is a measure of statistical dispersion and is less sensitive to outliers than the range (max - min).
*   **Example:**  Using the ungrouped data example above: Q1 = 7.5, Q3 = 19.  Therefore, IQR = 19 - 7.5 = 11.5

## 5. Using Quartiles to Identify Outliers

*   **Outlier:**  A data point that lies significantly far from the other data points in a dataset.
*   **IQR Method:** A common method to identify outliers based on quartiles.  It defines outlier boundaries using the IQR.
*   **Outlier Boundaries:**
    *   **Lower Bound:** Q1 - 1.5 * IQR
    *   **Upper Bound:** Q3 + 1.5 * IQR
*   **Identifying Outliers:** Any data point that falls below the lower bound or above the upper bound is considered a potential outlier.
*   **Example:**  Using the ungrouped data example above: Q1 = 7.5, Q3 = 19, IQR = 11.5
    *   Lower Bound: 7.5 - 1.5 * 11.5 = 7.5 - 17.25 = -9.75
    *   Upper Bound: 19 + 1.5 * 11.5 = 19 + 17.25 = 36.25
    *   In our data set (5, 7, 8, 10, 12, 15, 18, 20, 22), there are no outliers based on these bounds. If we had a value of 50, it would be an outlier.
*   **Important Note:**  Outliers may not always be errors. They could represent genuinely unusual observations that are important to consider.  Context and domain knowledge are crucial when deciding how to handle outliers.

## 6. Practice Questions/Exercises

1.  **Dataset 1 (Ungrouped):**  2, 4, 6, 8, 10, 12, 14, 16, 18, 20.  Calculate Q1, Q2, Q3, and IQR.  Identify potential outliers.

2.  **Dataset 2 (Ungrouped):** 15, 22, 18, 25, 30, 10, 28, 35, 20, 40, 12. Calculate Q1, Q2, Q3, and IQR. Identify potential outliers.

3.  **Dataset 3 (Grouped):**

    | Class Interval | Frequency |
    |----------------|-----------|
    | 0-10           | 8         |
    | 10-20          | 15        |
    | 20-30          | 22        |
    | 30-40          | 10        |
    | 40-50          | 5         |

    Calculate Q1, Q2, and Q3.

## 7. Answers to Practice Questions

1.  **Dataset 1:**
    *   Ordered Data: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    *   Q2: (10+12)/2 = 11
    *   Q1: (4+6)/2 = 5
    *   Q3: (16+18)/2 = 17
    *   IQR: 17 - 5 = 12
    *   Lower Bound: 5 - 1.5 * 12 = -13
    *   Upper Bound: 17 + 1.5 * 12 = 35
    *   No outliers.

2.  **Dataset 2:**

    *   Ordered Data: 10, 12, 15, 18, 20, 22, 25, 28, 30, 35, 40
    *   Q2: 22
    *   Q1: 15
    *   Q3: 30
    *   IQR: 30 - 15 = 15
    *   Lower Bound: 15 - 1.5 * 15 = -7.5
    *   Upper Bound: 30 + 1.5 * 15 = 52.5
    *   No outliers

3.  **Dataset 3:**

    *   Total Frequency (n) = 60

    *   **Q1:** n/4 = 60/4 = 15.  Q1 Class: 10-20.
        *   L1 = 10
        *   cf = 8
        *   f1 = 15
        *   h = 10
        *   Q1 = 10 + [(60/4 - 8)/15] * 10 = 10 + (7/15) * 10 = 10 + 4.67 = 14.67

    *   **Q2:** n/2 = 60/2 = 30. Q2 Class: 20-30.
        *   L2 = 20
        *   cf = 8+15 = 23
        *   f2 = 22
        *   h = 10
        *   Q2 = 20 + [(60/2 - 23)/22] * 10 = 20 + (7/22) * 10 = 20 + 3.18 = 23.18

    *   **Q3:** 3n/4 = (3*60)/4 = 45. Q3 Class: 30-40.
        *   L3 = 30
        *   cf = 8+15+22=45
        *   f3 = 10
        *   h = 10
        *   Q3 = 30 + [(3*60/4 - 45)/10] * 10 = 30 + (0/10) * 10 = 30 + 0 = 30

## 8. Important Points to Remember

*   Quartiles divide the *ordered* data into four equal parts.
*   The median (Q2) is also the 50th percentile.
*   The IQR is a robust measure of spread and is less affected by outliers than the range.
*   The IQR method is just one way to identify outliers.  Other methods and domain knowledge should also be considered.
*   The choice of formula for calculating quartiles might vary slightly between different statistical software packages. Be aware of the method used by the tool you are using.
*   Understanding quartiles helps you analyze data distribution, compare different datasets, and identify unusual values.
