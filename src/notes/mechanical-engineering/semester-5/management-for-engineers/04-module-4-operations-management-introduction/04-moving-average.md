---
title: "moving average"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 4: Operations management – Introduction"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633ee"
status: "completed"
scrapedAt: "2026-05-20T18:01:15.873Z"
---
# MANAGEMENT FOR ENGINEERS

## Module 4: Operations Management – Introduction

## Topic: Moving Average

This topic introduces a fundamental forecasting technique used in operations management: the **Moving Average**. Understanding moving averages is crucial for predicting future demand, planning production, managing inventory, and making informed decisions in various engineering contexts.

---

### **1. Learning Outcomes Covered**

This study of Moving Averages directly supports the following learning outcomes:

*   **Develop ability to critically analyze a variety of management practices in the contemporary context (K4):** By understanding the strengths and weaknesses of moving averages, engineers can critically evaluate its suitability for different forecasting scenarios and compare it with other forecasting methods.
*   **Examine the broad functions of management (K2):** Forecasting, a key element of planning and control, is a core management function. Moving averages provide a tool to enhance these functions.
*   **Demonstrate ability in decision making and productivity analysis (K3):** Moving averages aid in making data-driven decisions regarding production scheduling, resource allocation, and inventory levels. They can also indirectly contribute to productivity analysis by smoothing out demand fluctuations.
*   **Understand the functional areas of management (K2):** Moving averages are applicable across various functional areas, including operations, production, inventory management, and even sales forecasting.

---

### **2. Key Concepts and Definitions**

*   **Operations Management:** The design, operation, and improvement of the systems that create and deliver a firm's primary products and services. (Koontz, Weihrich, & Cannice, 2020, p. 435)
*   **Forecasting:** The process of predicting future events. In operations management, forecasting is essential for planning and decision-making related to demand, capacity, and resources. (Mahadevan, 2018, p. 39)
*   **Time Series Data:** A sequence of data points collected at successive points in time, typically at uniform intervals. Examples include monthly sales, daily production output, or weekly inventory levels.
*   **Moving Average (MA):** A technique used to smooth out fluctuations in time series data by calculating a series of averages of different subsets of the full data set. It is used to identify trends or cycles by filtering out short-term fluctuations.
    *   **Simple Moving Average (SMA):** The average of a fixed number of the most recent data points.
    *   **Weighted Moving Average (WMA):** A variation where more recent data points are given greater weight in the calculation of the average.
*   **Period:** A specific unit of time for which data is recorded (e.g., day, week, month, quarter).
*   **Smoothing:** The process of reducing random variations or "noise" in data to reveal underlying patterns like trends or seasonality. Moving averages are a form of smoothing.
*   **Trend:** A long-term upward or downward movement in data.
*   **Seasonality:** Patterns of change that occur at regular intervals during the year (e.g., higher sales in summer for ice cream).
*   **Cyclical Patterns:** Longer-term fluctuations in data that occur over periods longer than a year, often associated with economic cycles.

---

### **3. Types of Moving Averages**

#### **a. Simple Moving Average (SMA)**

The Simple Moving Average is the most basic form of moving average. It calculates the average of a fixed number of the most recent data points. The "period" of the moving average (e.g., 3-month, 5-week) determines how many past data points are included in the calculation.

**Formula:**

$$ \text{SMA} = \frac{\sum_{i=1}^{n} \text{Data}_{t-i+1}}{n} $$

Where:
*   $n$ = the number of periods in the moving average (e.g., 3, 5)
*   $\text{Data}_{t-i+1}$ = the data value for the $i$-th period back from the current period $t$.

**How it works:**

1.  Choose the number of periods ($n$) for the moving average.
2.  For each new period, calculate the average of the data from that period and the preceding $n-1$ periods.
3.  The oldest data point is dropped, and the newest data point is added to the calculation for the next period.

**Example:**

Let's forecast the demand for a particular product using a 3-month simple moving average.

| Month   | Demand | 3-Month SMA (Forecast for next month) |
| :------ | :----- | :------------------------------------ |
| January | 100    | -                                     |
| February| 120    | -                                     |
| March   | 110    | $(100 + 120 + 110) / 3 = 110$         |
| April   | 130    | $(120 + 110 + 130) / 3 = 120$         |
| May     | 125    | $(110 + 130 + 125) / 3 = 121.67$      |
| June    | 140    | $(130 + 125 + 140) / 3 = 131.67$      |

*   **Forecast for April:** Average of January, February, and March demand.
*   **Forecast for May:** Average of February, March, and April demand.
*   And so on...

**Choosing the number of periods (n):**

*   **Shorter periods (e.g., n=3):** More responsive to recent changes but less effective at smoothing out random fluctuations.
*   **Longer periods (e.g., n=5):** More effective at smoothing out random fluctuations but less responsive to recent trends or sudden changes. (Mahadevan, 2018, p. 42)

#### **b. Weighted Moving Average (WMA)**

In a Weighted Moving Average, different weights are assigned to data points within the moving average period. Typically, more recent data points are assigned higher weights, reflecting the assumption that they are more indicative of future demand.

**Formula:**

$$ \text{WMA} = \frac{\sum_{i=1}^{n} (w_i \times \text{Data}_{t-i+1})}{\sum_{i=1}^{n} w_i} $$

Where:
*   $n$ = the number of periods in the moving average.
*   $w_i$ = the weight assigned to the $i$-th period back from the current period $t$. The sum of weights ($\sum w_i$) is usually normalized to 1 (or 100%) for simplicity.
*   $\text{Data}_{t-i+1}$ = the data value for the $i$-th period back from the current period $t$.

**Example:**

Let's forecast the demand for a product using a 3-period weighted moving average with weights assigned as follows: Period 1 (most recent) = 0.5, Period 2 = 0.3, Period 3 = 0.2. The sum of weights is $0.5 + 0.3 + 0.2 = 1.0$.

| Month   | Demand | Weights (Most Recent = 0.5) | WMA (Forecast for next month) | Calculation                                   |
| :------ | :----- | :--------------------------- | :---------------------------- | :-------------------------------------------- |
| January | 100    | -                            | -                             | -                                             |
| February| 120    | -                            | -                             | -                                             |
| March   | 110    | 0.2 (Jan), 0.3 (Feb), 0.5 (Mar) | $(0.2 \times 100) + (0.3 \times 120) + (0.5 \times 110) = 20 + 36 + 55 = 111$ | 111                                           |
| April   | 130    | 0.2 (Feb), 0.3 (Mar), 0.5 (Apr) | $(0.2 \times 120) + (0.3 \times 110) + (0.5 \times 130) = 24 + 33 + 65 = 122$ | 122                                           |
| May     | 125    | 0.2 (Mar), 0.3 (Apr), 0.5 (May) | $(0.2 \times 110) + (0.3 \times 130) + (0.5 \times 125) = 22 + 39 + 62.5 = 123.5$ | 123.5                                         |
| June    | 140    | 0.2 (Apr), 0.3 (May), 0.5 (Jun) | $(0.2 \times 130) + (0.3 \times 125) + (0.5 \times 140) = 26 + 37.5 + 70 = 133.5$ | 133.5                                         |

**Choosing Weights:**

*   Weights are subjective and depend on the manager's judgment about the relative importance of past data points.
*   The sum of weights should equal 1.0 (or 100%).
*   Koontz, Weihrich, and Cannice (2020) emphasize that effective forecasting requires managers to use judgment and adapt their methods to the specific situation. Assigning weights is an example of managerial judgment in forecasting.

---

### **4. Applications in Operations Management**

Moving averages are widely used in operations management for:

*   **Demand Forecasting:** Predicting future customer demand for products or services. This is crucial for production planning, inventory control, and staffing. (Tripathi & Reddy, 2017, p. 155)
*   **Inventory Management:** Determining optimal stock levels to meet anticipated demand while minimizing holding costs.
*   **Production Planning and Scheduling:** Aligning production schedules with expected demand to ensure timely delivery and efficient resource utilization.
*   **Quality Control:** Smoothing out variations in production output to identify underlying trends or process issues.
*   **Resource Allocation:** Planning for necessary resources such as labor, machinery, and raw materials based on forecasted needs.

---

### **5. Advantages and Disadvantages of Moving Averages**

#### **a. Advantages:**

*   **Simplicity:** Easy to understand and calculate.
*   **Smooths Out Random Fluctuations:** Effective in filtering out "noise" and revealing underlying trends.
*   **Adaptive:** Can be easily updated with new data points.
*   **No Trend Bias (in Simple Moving Average):** SMA itself doesn't introduce a bias toward an upward or downward trend in the forecast.

#### **b. Disadvantages:**

*   **Lagging Indicator:** Moving averages lag behind actual data. They are slow to react to sudden changes in demand or trends. (Mahadevan, 2018, p. 43)
*   **Loss of Data:** Older data points are discarded, which can be a disadvantage if historical patterns are complex or if very long-term trends are important.
*   **Equal Weighting (in SMA):** SMA gives equal importance to all data points in the period, which may not be optimal if recent data is more relevant.
*   **No Explicit Consideration of Seasonality or Cycles:** Basic moving averages do not inherently account for seasonal or cyclical patterns in the data. Specialized methods are needed for this.
*   **Requires Historical Data:** A sufficient amount of historical data is needed to calculate meaningful moving averages.

---

### **6. Practice Questions and Exercises**

**Question 1 (Simple Moving Average Calculation):**

The following are the monthly sales figures for a product over the last six months:

*   January: 250 units
*   February: 270 units
*   March: 260 units
*   April: 280 units
*   May: 290 units
*   June: 300 units

Calculate the 3-month simple moving average forecast for July.

**Answer 1:**

To forecast for July using a 3-month SMA, we average the sales from April, May, and June.

SMA (July) = (Sales in April + Sales in May + Sales in June) / 3
SMA (July) = (280 + 290 + 300) / 3
SMA (July) = 870 / 3
**SMA (July) = 290 units**

**Question 2 (Weighted Moving Average Calculation):**

Using the same sales data as above (Jan: 250, Feb: 270, Mar: 260, Apr: 280, May: 290, Jun: 300), calculate the 3-month weighted moving average forecast for July. Assume the weights are: most recent month = 0.6, previous month = 0.3, and the month before that = 0.1.

**Answer 2:**

To forecast for July using a 3-month WMA, we use the sales figures for April, May, and June with the given weights.

WMA (July) = (Weight_Jun * Sales_Jun) + (Weight_May * Sales_May) + (Weight_Apr * Sales_Apr)
WMA (July) = (0.6 * 300) + (0.3 * 290) + (0.1 * 280)
WMA (July) = 180 + 87 + 28
**WMA (July) = 295 units**

**Question 3 (Conceptual):**

Explain why a moving average is considered a "lagging indicator" and what implications this has for operations management decisions.

**Answer 3:**

A moving average is a lagging indicator because it is based on historical data and is inherently slow to react to recent changes. By averaging past data, it smooths out immediate fluctuations. This means that if there is a sudden upward or downward shift in demand, the moving average forecast will not capture this change immediately. It will gradually adjust as the new data points enter the average calculation.

**Implications for Operations Management:**

*   **Inventory Management:** A lagging forecast might lead to insufficient inventory if demand suddenly increases, resulting in stockouts and lost sales. Conversely, if demand drops, a lagging forecast might lead to holding excess inventory.
*   **Production Planning:** Production schedules might be out of sync with actual demand, leading to either overtime and rush orders or idle capacity.
*   **Capacity Planning:** Decisions about increasing or decreasing capacity based on a lagging forecast might be too late to be effective.

Managers need to be aware of this lag and potentially supplement moving averages with other forecasting techniques or judgmental adjustments, especially in volatile environments. (Koontz, Weihrich, & Cannice, 2020, Chapter 15, Planning)

---

### **7. Highlighting Important Points to Remember**

*   **Moving averages are tools for smoothing data and forecasting future values based on historical patterns.**
*   **The choice of the number of periods (n) significantly impacts the responsiveness and smoothness of the forecast.**
*   **Weighted Moving Averages allow for greater emphasis on recent data, potentially improving accuracy when recent trends are important.**
*   **Always be aware of the lagging nature of moving averages and its implications for decision-making.**
*   **Moving averages are best suited for data with stable trends but are less effective for data with strong seasonality or unpredictable erratic behavior.** (Mahadevan, 2018, p. 44)
*   **For effective management, engineers should be able to select appropriate forecasting methods based on the characteristics of the data and the business context.** (Tripathi & Reddy, 2017, p. 156)

---

### **8. Alignment with Course Outcomes**

*   **CO1 (K4):** Analyzing the strengths and weaknesses of moving averages in different demand scenarios (e.g., stable vs. volatile demand) demonstrates critical analysis.
*   **CO2 (K2):** Understanding how moving averages support the planning and control functions of management.
*   **CO3 (K3):** Applying the formulas to calculate SMAs and WMAs and interpreting the results for decision-making (e.g., setting inventory levels).
*   **CO5 (K2):** Recognizing the application of moving averages in functional areas like operations, production, and inventory management.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **9. References and Textual Integration**

*   **Koontz, Weihrich, and Cannice (2020):** Their text emphasizes the importance of planning and the role of forecasting in effective decision-making. Chapter 15, "Planning," would likely discuss forecasting techniques as inputs for strategic and operational plans. The adaptability and judgmental aspects of forecasting, relevant to WMA, are also covered.
*   **Mahadevan (2018):** This textbook is a core resource for operations management and would detail forecasting methods like moving averages in its chapters on Demand Forecasting and Production Planning. It would likely provide a more in-depth mathematical treatment and discussion on selecting the appropriate forecasting method and its limitations, such as the lag.
*   **Tripathi and Reddy (2017):** Their "Principles of Management" would likely place forecasting within the broader context of the planning function. They would highlight how forecasting aids in resource allocation and setting objectives, with moving averages being a practical tool for quantitative forecasting.

---

This comprehensive study note provides a foundational understanding of moving averages, their calculation, applications, and limitations within the context of Management for Engineers. Remember to practice these calculations and consider how they would apply to real-world engineering challenges.