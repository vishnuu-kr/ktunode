---
title: "and Interquartile Range."
subject: "DATA ANALYTICS"
module: "Module 3: Statistical Description of data "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b719"
status: "completed"
scrapedAt: "2026-05-20T16:43:58.208Z"
---
# DATA ANALYTICS - Module 3: Statistical Description of Data - Topic: Quartiles and Interquartile Range (IQR)

## Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define quartiles and their significance in data analysis.
*   Calculate quartiles (Q1, Q2, Q3) for a given dataset.
*   Define the interquartile range (IQR) and its use as a measure of spread.
*   Calculate the IQR for a given dataset.
*   Understand the relationship between quartiles, IQR, and outliers.
*   Interpret quartiles and IQR in the context of data analysis problems.

## 1. Understanding Quartiles

### 1.1. Definition

*   **Quartiles:** Quartiles are values that divide a dataset into four equal parts when the data is sorted in ascending order. They are positional measures, indicating the position of data values relative to the rest of the dataset.

*   There are three quartiles:
    *   **Q1 (First Quartile or Lower Quartile):** The value that separates the lowest 25% of the data from the rest. It is the median of the lower half of the dataset.
    *   **Q2 (Second Quartile):**  This is the median of the entire dataset. It separates the lowest 50% of the data from the highest 50%.
    *   **Q3 (Third Quartile or Upper Quartile):** The value that separates the lowest 75% of the data from the highest 25%. It is the median of the upper half of the dataset.

### 1.2. Significance in Data Analysis

*   **Understanding Data Distribution:** Quartiles provide insights into how data is distributed. They show where the "middle" 50% of the data lies (between Q1 and Q3) and how spread out the data is around the median (Q2).
*   **Identifying Skewness:**  Comparing the distances between quartiles (e.g., Q2-Q1 vs. Q3-Q2) can indicate whether the data is skewed left or right.
*   **Outlier Detection:**  Quartiles are crucial in calculating the Interquartile Range (IQR), which is used to identify potential outliers.

## 2. Calculating Quartiles

### 2.1. Steps

1.  **Sort the data:** Arrange the data in ascending order.
2.  **Find the Median (Q2):**  Determine the median of the entire dataset.
    *   If the number of data points (n) is odd, the median is the middle value.
    *   If the number of data points (n) is even, the median is the average of the two middle values.
3.  **Find Q1:**  Determine the median of the data values *below* Q2.  If Q2 is a data point in the set, *do not* include Q2 in the lower half calculation.
4.  **Find Q3:**  Determine the median of the data values *above* Q2.  If Q2 is a data point in the set, *do not* include Q2 in the upper half calculation.

### 2.2. Example

**Dataset:** 5, 8, 10, 12, 15, 18, 20, 22, 25

1.  **Sorted Data:** 5, 8, 10, 12, 15, 18, 20, 22, 25
2.  **Q2 (Median):**  n = 9 (odd), so the median is the (9+1)/2 = 5th value, which is 15.  Q2 = 15
3.  **Q1:** Lower half: 5, 8, 10, 12. The median of this lower half is (8+10)/2 = 9. Q1 = 9
4.  **Q3:** Upper half: 18, 20, 22, 25. The median of this upper half is (20+22)/2 = 21. Q3 = 21

**Dataset:** 2, 4, 6, 8, 10, 12

1.  **Sorted Data:** 2, 4, 6, 8, 10, 12
2.  **Q2 (Median):** n = 6 (even), so the median is (6+8)/2 = 7.  Q2 = 7
3.  **Q1:** Lower half: 2, 4, 6. The median of this lower half is 4. Q1 = 4
4.  **Q3:** Upper half: 8, 10, 12. The median of this upper half is 10. Q3 = 10

## 3. Interquartile Range (IQR)

### 3.1. Definition

*   **Interquartile Range (IQR):** The IQR is a measure of statistical dispersion, representing the range covered by the middle 50% of the data. It is calculated as the difference between the third quartile (Q3) and the first quartile (Q1).

    **IQR = Q3 - Q1**

### 3.2. Use as a Measure of Spread

*   **Robustness:** The IQR is less sensitive to extreme values (outliers) than the range or standard deviation. It focuses on the central portion of the data, providing a more stable measure of spread.
*   **Understanding Data Variability:** A larger IQR indicates greater variability in the middle 50% of the data, while a smaller IQR indicates less variability.

### 3.3. Example

Using the first dataset from the previous example:

*   Q1 = 9
*   Q3 = 21
*   IQR = 21 - 9 = 12

Using the second dataset from the previous example:

*   Q1 = 4
*   Q3 = 10
*   IQR = 10 - 4 = 6

## 4. Quartiles, IQR, and Outliers

### 4.1. Outlier Detection using IQR

*   **Outlier:** An outlier is a data point that lies significantly far from the other data points in a dataset.
*   **IQR Rule:**  The IQR can be used to identify potential outliers using the following rule:
    *   **Lower Bound:** Q1 - 1.5 * IQR
    *   **Upper Bound:** Q3 + 1.5 * IQR
    *   Any data point that falls below the lower bound or above the upper bound is considered a potential outlier.

### 4.2. Example

Using the first dataset from the previous examples (5, 8, 10, 12, 15, 18, 20, 22, 25) and assuming that the dataset was actually:

**Dataset:** 5, 8, 10, 12, 15, 18, 20, 22, **50** (Note the outlier)

1.  **Calculate Q1, Q3, and IQR:**  Following the same steps as before:
    *   Q1 = 9
    *   Q2 = 15
    *   Q3 = 21
    *   IQR = 21 - 9 = 12

2.  **Calculate the outlier bounds:**
    *   Lower Bound = Q1 - 1.5 * IQR = 9 - 1.5 * 12 = 9 - 18 = -9
    *   Upper Bound = Q3 + 1.5 * IQR = 21 + 1.5 * 12 = 21 + 18 = 39

3.  **Identify Outliers:**
    *   The value 50 is greater than the upper bound of 39. Therefore, 50 is identified as a potential outlier.

## 5. Interpreting Quartiles and IQR

### 5.1. Example Scenario

Consider a dataset representing the test scores of students in a class:

**Test Scores:** 60, 65, 70, 75, 80, 85, 90, 95, 100

After calculating the quartiles, we find:

*   Q1 = 67.5
*   Q2 = 80
*   Q3 = 92.5
*   IQR = 92.5 - 67.5 = 25

### 5.2. Interpretation

*   **Q1 = 67.5:** 25% of the students scored 67.5 or below.
*   **Q2 = 80:** The median score is 80, meaning half of the students scored below 80 and half scored above 80.
*   **Q3 = 92.5:** 75% of the students scored 92.5 or below.
*   **IQR = 25:** The middle 50% of the students' scores are within a range of 25 points. This indicates the spread of scores for the average performers.

### 5.3. Implications

*   The instructor can use this information to assess the overall performance of the class.
*   The IQR can indicate the consistency of the performance. A smaller IQR might suggest that the students are relatively similar in their understanding, while a larger IQR might suggest greater variation.
*   If outliers are present (very low or very high scores), the instructor can investigate the reasons for those extreme scores.

## 6. Practice Questions

1.  **Dataset:** 12, 15, 18, 20, 22, 25, 28, 30, 35, 40.  Calculate Q1, Q2, Q3, and IQR.
2.  **Dataset:** 5, 10, 12, 15, 20, 25, 30, 35, 40, 80. Calculate Q1, Q2, Q3, and IQR. Are there any outliers according to the IQR rule?
3.  Explain in your own words the meaning of Q1, Q3 and IQR. Why is IQR preferred over range as a measure of spread when outliers are suspected in the data?
4.  The following are the ages of participants in a study: 22, 25, 28, 30, 35, 40, 45, 50. Calculate the quartiles and IQR. Interpret the results in the context of the participants' ages.

## 7. Answers to Practice Questions

1.  *   Q1 = (18+20)/2 = 19
    *   Q2 = (22+25)/2 = 23.5
    *   Q3 = (30+35)/2 = 32.5
    *   IQR = 32.5 - 19 = 13.5

2.  *   Q1 = (12+15)/2 = 13.5
    *   Q2 = (20+25)/2 = 22.5
    *   Q3 = (30+35)/2 = 32.5
    *   IQR = 32.5 - 13.5 = 19
    *   Lower bound = 13.5 - 1.5 * 19 = -15
    *   Upper bound = 32.5 + 1.5 * 19 = 61
    *   Outlier: 80 is above the upper bound, so it is a potential outlier.

3.  *   Q1 (First Quartile): The value that separates the bottom 25% of the data from the top 75%.
    *   Q3 (Third Quartile): The value that separates the bottom 75% of the data from the top 25%.
    *   IQR (Interquartile Range): The range of the middle 50% of the data (Q3 - Q1).
    *   IQR is preferred over the range because it is more robust to outliers. The range is simply the maximum value minus the minimum value, making it highly sensitive to extreme values. The IQR focuses on the middle portion of the data, which is less affected by outliers, providing a more stable measure of spread.

4.  *   Q1 = (25+28)/2 = 26.5
    *   Q2 = (30+35)/2 = 32.5
    *   Q3 = (40+45)/2 = 42.5
    *   IQR = 42.5 - 26.5 = 16
    *   Interpretation: 25% of the participants are 26.5 years old or younger, the median age is 32.5 years, 75% of the participants are 42.5 years old or younger, and the middle 50% of the participants' ages span a range of 16 years.

## 8. Important Points to Remember

*   **Sorting is crucial:** Always sort the data before calculating quartiles.
*   **Different methods for calculation:** Different statistical software packages may use slightly different algorithms for calculating quartiles, leading to minor variations in the results.
*   **IQR for comparison:** The IQR is useful for comparing the variability of different datasets, especially when outliers are present.
*   **Context is key:** Always interpret the quartiles and IQR within the context of the specific data being analyzed.
