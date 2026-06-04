---
title: "Median of Grouped Data"
subject: "INTRODUCTION TO BUSINESS ANALYTICS"
module: "Module 2: Data: Definition and its Importance"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463a09"
status: "completed"
scrapedAt: "2026-05-20T18:05:28.323Z"
---
# INTRODUCTION TO BUSINESS ANALYTICS

## Module 2: Data: Definition and its Importance

### Topic: Median of Grouped Data

---

### 1. Introduction to Median and its Importance in Business Analytics

**Learning Outcomes Covered:**
*   Understanding the importance of data in decision making and problem solving.
*   Understanding the application of descriptive analytics in decision making.

**Course Outcomes Alignment:**
*   **CO1 (K2):** While not directly about competitive strategy, understanding central tendency measures like the median is a foundational step in data analysis, which underpins competitive strategies.
*   **CO2 (K2):** The median is a crucial statistical measure for understanding data distributions and making informed decisions, especially when dealing with skewed data where the mean can be misleading.
*   **CO3 (K2):** Calculating and interpreting the median of grouped data is a core application of descriptive analytics.

**Key Concepts:**

*   **Median:** The middle value in a dataset when the data is arranged in ascending or descending order. It divides the dataset into two equal halves.
*   **Grouped Data:** Data that has been organized into a frequency distribution table, where values are presented in intervals (classes).
*   **Descriptive Analytics:** The use of data to understand what happened in the past. Calculating the median is a primary descriptive statistic.

**Importance in Business Analytics:**

*   **Robustness to Outliers:** Unlike the mean, the median is not affected by extreme values (outliers). This makes it a more reliable measure of central tendency in datasets that may contain unusual or extreme data points, common in business scenarios (e.g., income, sales figures).
*   **Understanding Skewed Distributions:** In business, many datasets are not symmetrically distributed. For example, income distribution is often positively skewed (a few high earners pull the mean up). The median provides a better representation of the "typical" value in such cases.
*   **Decision Making:** The median can help in making informed decisions related to pricing, inventory management, performance evaluation, and understanding customer behavior. For instance, if the median sales per customer is $50, it indicates that half of your customers spend less than $50 and half spend more.

**Textbook/Reference Mentions:**

*   **U Dinesh Kumar (2017):** Likely emphasizes the practical application of descriptive statistics for understanding business data.
*   **Prasad & Acharya (2016):** Would cover the mathematical underpinnings of statistical measures for business contexts.
*   **Sharda, Delen & Turban (2018):** Might highlight how central tendency measures contribute to business intelligence and performance analysis.
*   **Maheshwari (2017):** Will likely provide a clear explanation of statistical concepts with business examples.
*   **Laursen & Thorlund (2017):** Focuses on practical business intelligence, where understanding data through measures like the median is key.
*   **Evans (2019):** Will likely integrate statistical methods into broader business analytics frameworks.

---

### 2. Calculating the Median of Grouped Data

**Learning Outcomes Covered:**
*   Understanding the application of descriptive analytics in decision making.

**Course Outcomes Alignment:**
*   **CO3 (K2):** This section directly addresses the application of descriptive analytics by detailing how to calculate the median for grouped data.

**Key Concepts and Formula:**

To find the median of grouped data, we first need to identify the **median class** and then use the following formula:

**Median = L + [((n/2) - CF) / f] * w**

Where:
*   **L:** The lower boundary of the median class.
*   **n:** The total number of observations (sum of frequencies).
*   **CF:** The cumulative frequency of the class *preceding* the median class.
*   **f:** The frequency of the median class.
*   **w:** The width of the median class.

**Steps to Calculate the Median:**

1.  **Calculate Cumulative Frequencies (CF):** For each class interval, add the frequency of that class to the cumulative frequencies of all preceding classes. This helps determine which class interval contains the median.
2.  **Determine the Median Class:** The median is the value that corresponds to the (n/2)th observation. Find the class interval where the cumulative frequency first exceeds or equals n/2. This is your median class.
3.  **Identify L, CF, f, and w:**
    *   **L:** The lower boundary of the median class. If the class intervals are, for example, 10-20, 20-30, then the lower boundary of the class 20-30 is 20. If the intervals are 10-19, 20-29, then the lower boundary of the class 20-29 is 20. It's crucial to check how the class boundaries are defined. Often, it's the lower limit of the class.
    *   **n:** The total sum of frequencies.
    *   **CF:** The cumulative frequency of the class *immediately before* the median class.
    *   **f:** The frequency of the median class itself.
    *   **w:** The width of the median class interval (upper boundary - lower boundary).
4.  **Apply the Formula:** Substitute the values into the median formula and calculate.

**Example:**

Let's consider the following frequency distribution of marks obtained by 100 students:

| Marks        | Number of Students (f) | Cumulative Frequency (CF) |
| :----------- | :--------------------- | :------------------------ |
| 0-10         | 5                      | 5                         |
| 10-20        | 10                     | 15                        |
| 20-30        | 25                     | 40                        |
| 30-40        | 30                     | 70                        |
| 40-50        | 15                     | 85                        |
| 50-60        | 10                     | 95                        |
| 60-70        | 5                      | 100                       |
| **Total (n)** | **100**                |                           |

**Calculation:**

1.  **n = 100**
2.  **n/2 = 100 / 2 = 50**
3.  **Median Class:** We look for the class where CF first exceeds or equals 50.
    *   CF for 20-30 is 40 (less than 50).
    *   CF for 30-40 is 70 (greater than 50).
    Therefore, the **median class is 30-40**.

4.  **Identify values:**
    *   **L = 30** (lower boundary of the median class 30-40)
    *   **CF = 40** (cumulative frequency of the class preceding the median class, which is 20-30)
    *   **f = 30** (frequency of the median class 30-40)
    *   **w = 10** (width of the median class, e.g., 40 - 30)

5.  **Apply the formula:**
    Median = 30 + [((50) - 40) / 30] * 10
    Median = 30 + [10 / 30] * 10
    Median = 30 + (1/3) * 10
    Median = 30 + 3.33 (approximately)
    **Median = 33.33**

**Interpretation:** The median marks obtained by the students are approximately 33.33. This means that 50% of the students scored 33.33 or below, and 50% scored 33.33 or above.

**Textbook/Reference Mentions:**

*   **U Dinesh Kumar (2017):** Likely uses practical business examples like sales figures or customer satisfaction scores to illustrate median calculations.
*   **Prasad & Acharya (2016):** Would provide detailed mathematical derivations and proofs for the formula.
*   **Sharda, Delen & Turban (2018):** Might show how the median can be used in performance dashboards.
*   **Maheshwari (2017):** Offers a straightforward explanation and examples relevant to business scenarios.
*   **Laursen & Thorlund (2017):** Connects statistical measures to business performance insights.
*   **Evans (2019):** Integrates this calculation within broader data analysis workflows for business problems.

---

### 3. Practical Applications and Interpretation in Business

**Learning Outcomes Covered:**
*   Understanding the importance of data in decision making and problem solving.
*   Understanding the application of descriptive analytics in decision making.

**Course Outcomes Alignment:**
*   **CO1 (K2):** Understanding data properties (like median) is fundamental to using analytics for competitive advantage.
*   **CO2 (K2):** The median's robustness to outliers makes it a vital tool for accurate decision-making in many business contexts.
*   **CO3 (K2):** This section focuses on how to interpret the calculated median within business scenarios.

**Key Applications:**

*   **Income/Salary Analysis:** In HR or marketing, the median salary of employees or customers provides a better understanding of typical earnings than the mean, especially if there are very high earners.
*   **Sales Performance:** The median sales value per transaction or per salesperson can indicate the typical sales performance, unaffected by a few exceptionally large deals.
*   **Customer Spending:** The median amount spent by customers helps in understanding the typical customer's spending habits for marketing campaigns or loyalty programs.
*   **Website Traffic/Engagement:** The median time spent on a webpage or the median number of page views per session can provide insights into user engagement.
*   **Inventory Management:** The median demand for a product over a period can help in setting optimal stock levels, especially if demand fluctuates significantly.

**Interpretation Guidance:**

*   **"Half the data lies below, half above":** Always remember the core meaning of the median.
*   **Compare with Mean:** If the median is significantly lower than the mean, it suggests a positively skewed distribution (e.g., higher incomes are pulling the mean up). If the median is higher than the mean, it suggests a negatively skewed distribution. This comparison is crucial for a deeper understanding of the data.
*   **Context is Key:** The interpretation of the median must always be linked back to the specific business context. A median salary of $50,000 has different implications than a median transaction value of $50,000.

**Example Scenario:**

A retail company analyzes the transaction values for a promotional sale.

| Transaction Value ($) | Number of Transactions (f) | CF  |
| :-------------------- | :------------------------- | :-- |
| 0-50                  | 150                        | 150 |
| 50-100                | 200                        | 350 |
| 100-150               | 180                        | 530 |
| 150-200               | 100                        | 630 |
| 200-250               | 50                         | 680 |
| **Total (n)**         | **680**                    |     |

*   **n = 680**
*   **n/2 = 340**
*   **Median Class:** The cumulative frequency first exceeds 340 in the 100-150 class (CF=530).
*   **L = 100**
*   **CF = 350** (CF of the preceding class 50-100)
*   **f = 180** (frequency of the median class 100-150)
*   **w = 50** (150 - 100)

Median = 100 + [((340) - 350) / 180] * 50
Median = 100 + [-10 / 180] * 50
Median = 100 - (1/18) * 50
Median = 100 - 2.78 (approx.)
**Median = 97.22**

**Business Insight:** The median transaction value during the promotion was approximately $97.22. This indicates that half of the transactions were for $97.22 or less, and half were for $97.22 or more. This figure is more representative of the typical customer spending than the mean if there were a few very large purchases that skewed the average. The company might use this to evaluate the effectiveness of different pricing tiers or promotional offers.

**Textbook/Reference Mentions:**

*   **U Dinesh Kumar (2017):** Provides real-world business case studies where median analysis is applied.
*   **Laursen & Thorlund (2017):** Focuses on deriving actionable business intelligence from data, where understanding measures like the median is critical.
*   **Evans (2019):** Integrates statistical insights into managerial decision-making frameworks.

---

### 4. Important Points to Remember

*   **Median vs. Mean:** Always consider the distribution of your data. Use the median for skewed data or data with outliers. Use the mean for symmetrical distributions.
*   **Grouped Data Formula:** Memorize and understand the components of the median formula for grouped data: **Median = L + [((n/2) - CF) / f] * w**.
*   **Cumulative Frequency:** Accurate calculation of cumulative frequencies is essential for identifying the median class.
*   **Class Boundaries:** Pay close attention to how class boundaries are defined (e.g., inclusive vs. exclusive, continuous vs. discrete intervals) as this affects the 'L' value.
*   **Interpretation:** Don't just calculate the median; interpret its meaning within the business context to derive meaningful insights.
*   **Descriptive Analytics Core:** The median is a fundamental descriptive statistic that helps summarize and understand the central point of a dataset.

---

### 5. Practice Questions and Exercises

**Question 1:**
A dataset of customer ages is grouped into the following frequency distribution. Calculate the median age.

| Age Group | Number of Customers (f) |
| :-------- | :---------------------- |
| 18-25     | 20                      |
| 25-32     | 35                      |
| 32-39     | 50                      |
| 39-46     | 40                      |
| 46-53     | 25                      |
| **Total** | **170**                 |

**Question 2:**
A company analyzes the monthly salaries of its employees (in thousands of dollars) and presents them in a grouped frequency distribution.

| Monthly Salary (K$) | Number of Employees (f) |
| :------------------ | :---------------------- |
| 30-40               | 15                      |
| 40-50               | 30                      |
| 50-60               | 45                      |
| 60-70               | 35                      |
| 70-80               | 20                      |
| **Total**           | **145**                 |

a) Calculate the median monthly salary.
b) Interpret the median salary in the context of the company's workforce.

**Question 3:**
Consider the following data on the number of defective items produced per day.

| Number of Defects | Number of Days (f) |
| :---------------- | :----------------- |
| 0-5               | 8                  |
| 5-10              | 15                 |
| 10-15             | 22                 |
| 15-20             | 18                 |
| 20-25             | 7                  |
| **Total**         | **70**             |

Calculate the median number of defects per day.

---

### 6. Answers to Practice Questions

**Answer to Question 1:**

1.  **Calculate Cumulative Frequencies (CF):**
    *   18-25: 20
    *   25-32: 20 + 35 = 55
    *   32-39: 55 + 50 = 105
    *   39-46: 105 + 40 = 145
    *   46-53: 145 + 25 = 170

2.  **Determine Median Class:**
    *   n = 170
    *   n/2 = 170 / 2 = 85
    *   The median class is **32-39** because its CF (105) is the first to exceed 85.

3.  **Identify values:**
    *   L = 32
    *   CF = 55 (CF of the class preceding 32-39)
    *   f = 50 (frequency of the median class 32-39)
    *   w = 7 (39 - 32)

4.  **Apply the formula:**
    Median = 32 + [((85) - 55) / 50] * 7
    Median = 32 + [30 / 50] * 7
    Median = 32 + (0.6) * 7
    Median = 32 + 4.2
    **Median = 36.2 years**

---

**Answer to Question 2:**

a) **Calculate the median monthly salary:**

1.  **Calculate Cumulative Frequencies (CF):**
    *   30-40: 15
    *   40-50: 15 + 30 = 45
    *   50-60: 45 + 45 = 90
    *   60-70: 90 + 35 = 125
    *   70-80: 125 + 20 = 145

2.  **Determine Median Class:**
    *   n = 145
    *   n/2 = 145 / 2 = 72.5
    *   The median class is **50-60** because its CF (90) is the first to exceed 72.5.

3.  **Identify values:**
    *   L = 50
    *   CF = 45 (CF of the class preceding 50-60)
    *   f = 45 (frequency of the median class 50-60)
    *   w = 10 (60 - 50)

4.  **Apply the formula:**
    Median = 50 + [((72.5) - 45) / 45] * 10
    Median = 50 + [27.5 / 45] * 10
    Median = 50 + (0.6111) * 10 (approx.)
    Median = 50 + 6.111
    **Median = 56.111 K$ (or $56,111)**

b) **Interpretation:** The median monthly salary of the company's employees is approximately $56,111. This means that half of the employees earn $56,111 or less per month, and the other half earn $56,111 or more. This figure provides a good indication of the typical salary within the company, especially if there are a few very high earners that might skew the average (mean) salary upwards.

---

**Answer to Question 3:**

1.  **Calculate Cumulative Frequencies (CF):**
    *   0-5: 8
    *   5-10: 8 + 15 = 23
    *   10-15: 23 + 22 = 45
    *   15-20: 45 + 18 = 63
    *   20-25: 63 + 7 = 70

2.  **Determine Median Class:**
    *   n = 70
    *   n/2 = 70 / 2 = 35
    *   The median class is **10-15** because its CF (45) is the first to exceed 35.

3.  **Identify values:**
    *   L = 10
    *   CF = 23 (CF of the class preceding 10-15)
    *   f = 22 (frequency of the median class 10-15)
    *   w = 5 (15 - 10)

4.  **Apply the formula:**
    Median = 10 + [((35) - 23) / 22] * 5
    Median = 10 + [12 / 22] * 5
    Median = 10 + (0.54545) * 5 (approx.)
    Median = 10 + 2.72725
    **Median = 12.73 defects** (approx.)

---

This comprehensive set of notes covers the definition and calculation of the median for grouped data, emphasizing its importance and application in business analytics, drawing upon the provided learning outcomes and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
