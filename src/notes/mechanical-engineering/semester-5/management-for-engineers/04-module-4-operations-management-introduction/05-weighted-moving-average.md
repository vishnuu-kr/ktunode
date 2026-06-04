---
title: "weighted moving average"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 4: Operations management – Introduction"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633ef"
status: "completed"
scrapedAt: "2026-05-20T18:01:16.571Z"
---
# MANAGEMENT FOR ENGINEERS - Module 4: Operations Management – Introduction
## Topic: Weighted Moving Average

---

### 1. Introduction to Forecasting in Operations Management

**Course Outcome Alignment:** CO2 (Examine the broad functions of management), CO3 (Demonstrate ability in decision making and productivity analysis), CO5 (Understand the functional areas of management).
**Knowledge Level:** K2 (Understanding)

Forecasting is a crucial element of operations management, providing essential insights for planning and decision-making. It involves predicting future demand or other key operational variables. Accurate forecasts enable:

*   **Resource Allocation:** Planning for raw materials, labor, and equipment.
*   **Production Scheduling:** Determining what, when, and how much to produce.
*   **Inventory Management:** Balancing the costs of holding inventory against the risks of stockouts.
*   **Capacity Planning:** Ensuring the organization has the capacity to meet future demand.
*   **Financial Planning:** Budgeting and cash flow management.

**Key Concepts:**
*   **Time Series Data:** Data collected over a period of time, often at regular intervals (e.g., monthly sales, daily production).
*   **Demand Forecasting:** Predicting the quantity of a product or service that customers will purchase.
*   **Qualitative Forecasting:** Based on opinions, intuition, and subjective judgments (e.g., Delphi method, market research).
*   **Quantitative Forecasting:** Based on historical data and mathematical models.

**Textbook Reference:**
*   **Koontz, Weihrich, & Cannice (2020):** Discusses the role of planning and forecasting in the controlling function of management, essential for effective operations.
*   **Mahadevan (2018):** Provides a comprehensive overview of forecasting techniques within the context of operations management, emphasizing their impact on supply chain and production.
*   **Tripathi & Reddy (2017):** Covers forecasting as a planning tool, highlighting its importance in achieving organizational objectives.

---

### 2. Simple Moving Average (SMA) - A Prerequisite

**Course Outcome Alignment:** CO3 (Demonstrate ability in decision making and productivity analysis).
**Knowledge Level:** K2 (Understanding)

Before delving into weighted moving averages, it's important to understand the Simple Moving Average (SMA).

**Definition:** A technique that calculates the average of a fixed number of past periods to predict the demand for the next period.

**Formula:**
$$
SMA_n = \frac{\sum_{i=1}^{n} D_{t-i+1}}{n}
$$
Where:
*   $SMA_n$ = Simple Moving Average for the next period using 'n' periods.
*   $D_{t-i+1}$ = Demand in the period $t-i+1$.
*   $n$ = Number of periods in the average.

**Example:**
Suppose the monthly sales of a product are:
*   January: 100 units
*   February: 120 units
*   March: 110 units
*   April: 130 units

To forecast May's sales using a 3-month SMA:
$SMA_{3\_May} = \frac{100 (\text{Jan}) + 120 (\text{Feb}) + 110 (\text{Mar})}{3} = \frac{330}{3} = 110$ units.

**Limitations of SMA:**
*   **Lagging Indicator:** SMA tends to lag behind actual demand, especially during periods of significant trend changes.
*   **Equal Weighting:** All periods in the average are given equal importance, which might not be realistic as recent data is often more relevant.

---

### 3. Weighted Moving Average (WMA)

**Course Outcome Alignment:** CO3 (Demonstrate ability in decision making and productivity analysis).
**Knowledge Level:** K3 (Application)

The Weighted Moving Average (WMA) addresses the limitation of SMA by assigning different weights to each period's data. This allows more recent data to have a greater influence on the forecast.

**Definition:** A forecasting technique where each data point in the moving average is multiplied by a predetermined weight, and the sum of these weighted data points is used as the forecast.

**Purpose:** To give more importance to recent data, making the forecast more responsive to current trends.

**Formula:**
$$
WMA_n = \sum_{i=1}^{n} (W_i \times D_{t-i+1})
$$
Where:
*   $WMA_n$ = Weighted Moving Average for the next period using 'n' periods.
*   $W_i$ = Weight assigned to the $i^{th}$ period from the present. The sum of all weights must equal 1 ($ \sum_{i=1}^{n} W_i = 1 $).
*   $D_{t-i+1}$ = Demand in the period $t-i+1$.
*   $n$ = Number of periods in the average.

**Key Considerations for Weights:**
*   **Sum of Weights:** The weights must sum to 1.
*   **Recency:** Weights are typically assigned such that the most recent period has the highest weight, and weights decrease for older periods.
*   **Subjectivity:** The choice of weights can be subjective, based on the forecaster's judgment about the volatility and trends in the data.

**Textbook Reference:**
*   **Mahadevan (2018):** Explicitly details the WMA technique, providing formulas and discussing its application in demand forecasting for inventory and production planning.
*   **Koontz, Weihrich, & Cannice (2020):** While not specifically detailing WMA, they emphasize the need for accurate information and analysis in decision-making, which WMA contributes to.

---

### 4. How to Assign Weights

**Course Outcome Alignment:** CO3 (Demonstrate ability in decision making and productivity analysis), CO1 (Develop ability to critically analyse a variety of management practices).
**Knowledge Level:** K3 (Application), K4 (Analysis)

There are several approaches to assigning weights:

1.  **Intuitive/Subjective Weighting:** The forecaster assigns weights based on their understanding of the market and recent trends.
    *   **Example:** For a 3-period WMA, weights could be 0.5 (most recent), 0.3, and 0.2.

2.  **Patterned Weighting:** A systematic pattern is used, often giving exponentially decreasing weights to older data.
    *   **Example:** For a 3-period WMA, you might have weights of 0.5, 0.3, and 0.2, or a formula-based approach where weights are derived from a pattern.

3.  **Statistical Methods (More advanced):** Techniques like regression analysis can be used to determine optimal weights, though this goes beyond a basic introduction.

**Important Point to Remember:** The selection of weights is critical. Poorly chosen weights can lead to inaccurate forecasts. The goal is to make the forecast sensitive to recent changes without being overly influenced by random fluctuations.

---

### 5. Example Calculation of Weighted Moving Average

**Course Outcome Alignment:** CO3 (Demonstrate ability in decision making and productivity analysis).
**Knowledge Level:** K3 (Application)

Let's use the previous sales data and assign weights to calculate a forecast for May.

**Data:**
*   January: 100 units
*   February: 120 units
*   March: 110 units
*   April: 130 units

**Assigned Weights (3-period WMA):**
*   April (most recent): 0.5
*   March: 0.3
*   February: 0.2

**Calculation for May's Forecast:**
$WMA_{3\_May} = (0.5 \times D_{April}) + (0.3 \times D_{March}) + (0.2 \times D_{February})$
$WMA_{3\_May} = (0.5 \times 130) + (0.3 \times 110) + (0.2 \times 120)$
$WMA_{3\_May} = 65 + 33 + 24$
$WMA_{3\_May} = 122$ units.

**Comparison with SMA:**
The SMA forecast for May was 110 units. The WMA forecast is 122 units. Notice how the WMA gave more weight to April's higher sales (130 units), resulting in a higher forecast, reflecting the recent upward trend more accurately.

---

### 6. Advantages and Disadvantages of Weighted Moving Average

**Course Outcome Alignment:** CO1 (Develop ability to critically analyse a different management practices), CO3 (Demonstrate ability in decision making and productivity analysis).
**Knowledge Level:** K4 (Analysis)

**Advantages:**
*   **Responsiveness to Trends:** More responsive to recent changes in demand compared to SMA.
*   **Flexibility:** Allows forecasters to emphasize recent data, which is often more predictive of the future.
*   **Simplicity:** Relatively easy to understand and calculate compared to more complex statistical methods.

**Disadvantages:**
*   **Weight Selection:** The choice of weights is subjective and can significantly impact accuracy. There's no universally "correct" way to assign weights.
*   **Data Requirements:** Requires historical data for calculation.
*   **Lagging Indicator (Still):** While better than SMA, WMA can still lag behind significant turning points in demand.
*   **Doesn't Forecast Trends:** Like SMA, it assumes the future will be similar to the recent past and doesn't inherently predict new trends or seasonal patterns unless weights are adjusted.

**Reference Book Consideration:**
*   **Kotler, Keller, Chernev, & Sheth (2018) - Marketing Management:** While focused on marketing, their discussion on market forecasting and understanding consumer behavior implies the need for adaptable forecasting tools like WMA to capture evolving market dynamics.

---

### 7. Applications in Engineering Management

**Course Outcome Alignment:** CO4 (Apply project management techniques to manage projects), CO5 (Understand the functional areas of management).
**Knowledge Level:** K2 (Understanding), K3 (Application)

WMA is applicable in various engineering management contexts:

*   **Production Planning:** Forecasting demand for manufactured goods to schedule production runs and manage work-in-progress.
*   **Inventory Control:** Predicting future demand to set reorder points and determine optimal inventory levels for components and finished goods.
*   **Capacity Planning:** Estimating future labor or machine hour needs based on projected demand for services or products.
*   **Resource Management:** Forecasting the need for raw materials, energy, or other resources in a project or ongoing operation.
*   **Maintenance Forecasting:** Predicting future equipment failures or service needs based on historical data.

**Example Scenario:**
An automotive plant manager needs to forecast the demand for a specific car model for the next quarter. Using past sales data and applying a WMA allows them to give more weight to recent sales figures, which might reflect current market trends or the success of recent marketing campaigns. This forecast then informs decisions on the number of units to produce, the required raw materials (steel, plastic, etc.), and the staffing levels for the production line.

---

### 8. Practice Questions and Exercises

**Course Outcome Alignment:** CO3 (Demonstrate ability in decision making and productivity analysis).
**Knowledge Level:** K3 (Application)

**Question 1:**
A project manager is forecasting the demand for a specialized engineering component over the next month. The historical monthly demand is as follows:

*   October: 80 units
*   November: 95 units
*   December: 110 units
*   January: 125 units

Calculate the forecast for February using a 3-month Weighted Moving Average with weights assigned as follows: January (0.5), December (0.3), November (0.2).

**Answer 1:**
To forecast for February, we use the data from January, December, and November.
$WMA_{Feb} = (0.5 \times D_{Jan}) + (0.3 \times D_{Dec}) + (0.2 \times D_{Nov})$
$WMA_{Feb} = (0.5 \times 125) + (0.3 \times 110) + (0.2 \times 95)$
$WMA_{Feb} = 62.5 + 33 + 19$
$WMA_{Feb} = 114.5$ units.

**Question 2:**
Compare the WMA forecast from Question 1 (114.5 units) with the Simple Moving Average forecast for February using the same three months (January, December, November).
SMA$_{Feb} = \frac{125 (\text{Jan}) + 110 (\text{Dec}) + 95 (\text{Nov})}{3} = \frac{330}{3} = 110$ units.

Which forecast would be more appropriate if there is a clear upward trend in demand? Explain why.

**Answer 2:**
The WMA forecast (114.5 units) is higher than the SMA forecast (110 units). If there is a clear upward trend in demand, the WMA forecast would be more appropriate. This is because WMA assigns a higher weight to the most recent data point (January's demand of 125 units), which reflects the current upward movement in demand. SMA, by giving equal weight to all periods, is less sensitive to this recent upward trend and thus provides a lower, lagging forecast.

**Question 3:**
Consider a scenario where you are managing inventory for a critical spare part. The weekly demand has been:

| Week | Demand |
| :--- | :----- |
| 1    | 10     |
| 2    | 12     |
| 3    | 11     |
| 4    | 14     |
| 5    | 15     |

Forecast the demand for Week 6 using a 3-week WMA. Assign weights of 0.4, 0.3, and 0.3 to the most recent three weeks (Week 5, Week 4, Week 3 respectively).

**Answer 3:**
To forecast for Week 6, we use data from Weeks 5, 4, and 3.
$WMA_{Week 6} = (0.4 \times D_{Week 5}) + (0.3 \times D_{Week 4}) + (0.3 \times D_{Week 3})$
$WMA_{Week 6} = (0.4 \times 15) + (0.3 \times 14) + (0.3 \times 11)$
$WMA_{Week 6} = 6 + 4.2 + 3.3$
$WMA_{Week 6} = 13.5$ units.

---

### 9. Key Points to Remember

*   **Purpose of Forecasting:** To predict future demand and support operational planning and decision-making.
*   **SMA vs. WMA:** SMA gives equal weight to all periods; WMA gives more weight to recent periods.
*   **WMA Formula:** The sum of weights must equal 1, and weights are typically higher for more recent data.
*   **Benefits of WMA:** More responsive to current trends than SMA.
*   **Challenges of WMA:** Weight selection is subjective and critical for accuracy.
*   **Applications:** Production, inventory, capacity planning, resource management.
*   **Managerial Role:** Engineers must understand forecasting techniques to make informed operational decisions.

---

### 10. Further Exploration & Connections to Other Areas

**Course Outcome Alignment:** CO1 (Develop ability to critically analyse a variety of management practices), CO6 (Introduce the concept of market, marketing and marketing strategies).
**Knowledge Level:** K4 (Analysis)

*   **Exponential Smoothing:** A more sophisticated forecasting method that also weights recent data more heavily, but with an exponentially decreasing weighting scheme. (Mahadevan, 2018)
*   **Trend and Seasonality:** WMA alone does not account for long-term trends or seasonal patterns. More advanced techniques are needed for these. (Mahadevan, 2018)
*   **Marketing's Role:** Marketing strategies and promotional activities directly influence demand. Understanding these can help refine weight assignments in WMA. (Kotler et al., 2018)
*   **Productivity Analysis:** Accurate demand forecasts influence productivity by ensuring the right resources are available at the right time, minimizing idle time or overtime. (Mahadevan, 2018)

This concludes the study notes for the Weighted Moving Average in Operations Management. Remember that mastering these quantitative tools is vital for effective engineering management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
