---
title: "Mean of Grouped Data"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a07"
status: "completed"
scrapedAt: "2026-05-20T18:05:26.891Z"
---
# Module 2: Data: Definition and its Importance - Mean of Grouped Data

## Introduction to Business Analytics

This module delves into the foundational concepts of data, its definition, and its paramount importance in driving informed decision-making within organizations. Understanding data is the bedrock of business analytics, enabling us to extract meaningful insights and gain a competitive edge.

## Topic: Mean of Grouped Data

### 1. Learning Outcomes Covered in this Topic:

*   **Understand the concept of measures of central tendency for grouped data.** (Implicitly covers understanding descriptive analytics, CO3)
*   **Learn how to calculate the mean for grouped data.** (Directly supports CO3)

### 2. Key Concepts and Definitions

#### 2.1. What is Grouped Data?

Grouped data is data that has been organized into classes or intervals. Instead of individual data points, we have a summary of how many observations fall within each range. This is often done to simplify large datasets, make them easier to interpret, and facilitate calculations.

*   **Classes/Intervals:** These are the ranges into which the data is divided (e.g., 10-20, 20-30).
*   **Frequency:** The number of observations that fall within a particular class (e.g., how many students scored between 70-80).
*   **Class Limits:** The lower and upper values of a class (e.g., in the class 10-20, 10 is the lower limit and 20 is the upper limit).
*   **Class Boundaries:** These are the actual limits of the classes, adjusted to avoid gaps between consecutive classes. For continuous data, we often use class boundaries. If a class is 10-20 and the next is 21-30, the boundary would be 10-20.5 and 20.5-30.5. The adjustment is typically 0.5 of the smallest unit of measurement.
*   **Class Midpoint (or Class Mark):** The average of the lower and upper limits (or boundaries) of a class. This is a representative value for all data points within that class.

    *   **Formula for Class Midpoint (xm):**
        $x_m = \frac{\text{Lower Limit} + \text{Upper Limit}}{2}$

#### 2.2. Why is the Mean of Grouped Data Important?

The mean is a measure of central tendency that indicates the average value of a dataset. For grouped data, calculating the mean of individual data points would be impossible without the original raw data. Therefore, we use the class midpoints and frequencies to estimate the mean. This estimated mean provides a single value that summarizes the typical value within the entire dataset, which is crucial for:

*   **Descriptive Analytics (CO3):** Understanding the central tendency of a distribution. For example, what is the average salary of employees in different departments?
*   **Data-Driven Decision Making (CO2):** Making informed decisions based on average performance, average customer spending, or average product lifespan.
*   **Summarizing Large Datasets:** Making complex data more manageable and understandable for reporting and analysis.

### 3. Calculation of the Mean of Grouped Data

The formula for calculating the mean of grouped data is a weighted average, where each class midpoint is weighted by its frequency.

*   **Formula for Mean ($\bar{x}$):**
    $\bar{x} = \frac{\sum (x_m \cdot f)}{\sum f}$

    Where:
    *   $\bar{x}$ = Mean of the grouped data
    *   $x_m$ = Midpoint of each class
    *   $f$ = Frequency of each class
    *   $\sum$ = Summation symbol (meaning "sum of")

**Steps to Calculate the Mean of Grouped Data:**

1.  **Identify or Calculate Class Midpoints ($x_m$)** for each class interval.
2.  **Multiply each Class Midpoint ($x_m$) by its corresponding Frequency ($f$).** This gives you the product $(x_m \cdot f)$.
3.  **Sum up all the products ($x_m \cdot f$)** obtained in step 2. This is your numerator, $\sum (x_m \cdot f)$.
4.  **Sum up all the frequencies ($f$).** This is your denominator, $\sum f$ (which is also the total number of observations, N).
5.  **Divide the sum of products by the sum of frequencies** to get the mean.

### 4. Examples

Let's consider an example of student scores in a Business Analytics exam, grouped into classes.

**Example Data:**

| Score Interval | Number of Students (Frequency, $f$) |
| :------------- | :---------------------------------- |
| 0-10           | 5                                   |
| 10-20          | 8                                   |
| 20-30          | 15                                  |
| 30-40          | 20                                  |
| 40-50          | 12                                  |
| 50-60          | 10                                  |
| **Total**      | **70**                              |

**Calculation:**

| Score Interval | Midpoint ($x_m$) | Frequency ($f$) | $x_m \cdot f$ |
| :------------- | :--------------- | :-------------- | :------------ |
| 0-10           | 5                | 5               | 25            |
| 10-20          | 15               | 8               | 120           |
| 20-30          | 25               | 15              | 375           |
| 30-40          | 35               | 20              | 700           |
| 40-50          | 45               | 12              | 540           |
| 50-60          | 55               | 10              | 550           |
| **Total**      |                  | **70**          | **2310**      |

Now, applying the formula:

$\bar{x} = \frac{\sum (x_m \cdot f)}{\sum f} = \frac{2310}{70}$

$\bar{x} = 33$

**Interpretation:** The average score of students in this exam is 33.

### 5. Practice Questions and Exercises

**Question 1:** A company analyzed the daily sales in dollars for its products and summarized the data as follows:

| Daily Sales ($) | Number of Days (Frequency) |
| :-------------- | :------------------------- |
| 0 - 100         | 7                          |
| 100 - 200       | 12                         |
| 200 - 300       | 25                         |
| 300 - 400       | 18                         |
| 400 - 500       | 8                          |

Calculate the mean daily sales.

**Solution 1:**

First, calculate the midpoints for each interval:
*   0-100: (0+100)/2 = 50
*   100-200: (100+200)/2 = 150
*   200-300: (200+300)/2 = 250
*   300-400: (300+400)/2 = 350
*   400-500: (400+500)/2 = 450

Now, create a table to calculate $x_m \cdot f$:

| Daily Sales ($) | Midpoint ($x_m$) | Frequency ($f$) | $x_m \cdot f$ |
| :-------------- | :--------------- | :-------------- | :------------ |
| 0 - 100         | 50               | 7               | 350           |
| 100 - 200       | 150              | 12              | 1800          |
| 200 - 300       | 250              | 25              | 6250          |
| 300 - 400       | 350              | 18              | 6300          |
| 400 - 500       | 450              | 8               | 3600          |
| **Total**       |                  | **70**          | **18300**     |

Calculate the mean:
$\bar{x} = \frac{\sum (x_m \cdot f)}{\sum f} = \frac{18300}{70} \approx 261.43$

The mean daily sales are approximately $261.43.

**Question 2:** The ages of employees in a department are grouped as follows. Find the mean age.

| Age Group | Number of Employees (Frequency) |
| :-------- | :------------------------------ |
| 20-25     | 4                               |
| 25-30     | 9                               |
| 30-35     | 15                              |
| 35-40     | 12                              |
| 40-45     | 6                               |

**Solution 2:**

| Age Group | Midpoint ($x_m$) | Frequency ($f$) | $x_m \cdot f$ |
| :-------- | :--------------- | :-------------- | :------------ |
| 20-25     | 22.5             | 4               | 90            |
| 25-30     | 27.5             | 9               | 247.5         |
| 30-35     | 32.5             | 15              | 487.5         |
| 35-40     | 37.5             | 12              | 450           |
| 40-45     | 42.5             | 6               | 255           |
| **Total** |                  | **46**          | **1530**      |

Calculate the mean:
$\bar{x} = \frac{\sum (x_m \cdot f)}{\sum f} = \frac{1530}{46} \approx 33.26$

The mean age of the employees is approximately 33.26 years.

### 6. Important Points to Remember

*   The mean of grouped data is an **estimate** based on the class midpoints. It is not the exact mean of the original data points.
*   Ensure that the class intervals are **mutually exclusive** (no overlap) and **collectively exhaustive** (cover all the data).
*   The **class midpoint** is the representative value for all observations within that class.
*   The formula for the mean of grouped data is a **weighted average**.
*   Understanding the mean of grouped data is a fundamental step in **descriptive analytics** (CO3) and helps in making **data-driven decisions** (CO2).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References and Content Incorporation

This topic is foundational in descriptive statistics, a key component of business analytics.

*   **U Dinesh Kumar, "Business Analytics-The Science of Data Driven Decision Making":** This textbook likely covers descriptive statistics, including measures of central tendency for both raw and grouped data, as a fundamental building block for more advanced analytics. It would emphasize how these measures help in understanding business performance.
*   **R. N. Prasad & Seema Acharya, "Fundamentals of Business Analytics":** Similar to Kumar, this book would introduce these concepts early on, likely linking them to the importance of data summarization and initial data exploration in the analytics process.
*   **R. Sharda, D. Delen & E. Turban, "Business Intelligence. Analytics and Data Science: A Managerial Perspective":** This text would probably frame the calculation of the mean of grouped data within the context of business intelligence, showing how managers can use these simple statistics to get a quick understanding of operational data, sales figures, or customer demographics.
*   **Data Analytics by A. Maheshwari:** This reference would offer a practical approach to calculating descriptive statistics, emphasizing their role in making sense of data for business insights.
*   **Business Analytics for Managers: Taking Business Intelligence Beyond Reporting by Gert H. N. Laursen & Jesper Thorlund:** This book would likely focus on the managerial application of such statistics, explaining how to interpret the mean of grouped data to guide strategic decisions.
*   **Business Analytics by J. R. Evans:** Evans's work would provide a solid statistical foundation, ensuring that the calculation and interpretation of the mean of grouped data are presented clearly and accurately within the broader context of business analytics.

### 8. Alignment with Course Outcomes (COs)

*   **CO1: Understand the fundamentals of business analytics and how it is becoming competitive strategy for many organisations. (Knowledge Level: K2)**
    *   Understanding how to calculate the mean of grouped data is a fundamental skill that underpins the ability to analyze and interpret business data, thus contributing to the overall competitive strategy.
*   **CO2: Understand the Importance of analytics in decision making and problem solving. (Knowledge Level: K2)**
    *   The mean of grouped data provides a summarized view of data, enabling quicker and more informed decision-making by giving a central point of reference for understanding a dataset.
*   **CO3: Understand the application of descriptive analytics in decision making. (Knowledge Level: K2)**
    *   Calculating the mean of grouped data is a direct application of descriptive analytics, used to summarize and describe key characteristics of a dataset. This helps in understanding current business situations.
*   **CO4: Learn data visualization and various types of visual charts.** (Implicitly related)
    *   While this topic focuses on calculation, the resulting mean can be visualized (e.g., in a histogram where the mean can be marked), linking it to data visualization.
*   **CO5: Apply simple linear regression model in predictive analytics problems.** (Not directly covered)
    *   This topic is foundational and precedes predictive modeling.
*   **CO6: Understand the basic concepts in prescriptive analytics.** (Not directly covered)
    *   This topic is foundational and precedes prescriptive analytics.
*   **C07: Understand the essence of business performance management and analytics in business support functions. (Knowledge Level: K2)**
    *   The mean of grouped data can be used to track and manage performance in various business functions by providing average metrics (e.g., average call handling time, average customer satisfaction score).

### 9. Conclusion

The calculation of the mean for grouped data is a fundamental skill in business analytics. It allows us to summarize and understand the central tendency of data that has been organized into classes. This simple yet powerful technique is a cornerstone of descriptive analytics and plays a crucial role in supporting informed business decisions. By mastering this concept, we lay the groundwork for more complex data analysis techniques.