---
title: "determination of storage capacity and yield by mass curve method"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 3: Irrigation– Necessity, Benefits and ill effects"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d9a"
status: "completed"
scrapedAt: "2026-05-20T18:49:24.138Z"
---
# HYDROLOGY AND WATER RESOURCES ENGINEERING

## Module 3: Irrigation – Necessity, Benefits, and Ill Effects

### Topic: Determination of Storage Capacity and Yield by Mass Curve Method

---

### 1. Introduction to Mass Curve Method

The mass curve method is a graphical technique used in hydrology to analyze historical streamflow data and determine the required storage capacity of a reservoir to meet a given demand, as well as to estimate the reliable yield from a river. It plots the cumulative discharge (mass curve) against time.

### 2. Key Concepts and Definitions

*   **Mass Curve:** A graphical representation of the cumulative discharge (or rainfall) of a river over a period of time. It is essentially the integral of the flow duration curve or rainfall intensity over time.
*   **Demand Curve:** A graphical representation of the required water supply from the reservoir over time. This is typically represented as a straight line with a slope equal to the average demand.
*   **Net Available Draft (Net Draft):** The actual amount of water that can be drawn from the reservoir after accounting for losses like evaporation, seepage, and operational requirements.
*   **Reservoir Capacity:** The volume of water that a reservoir can store.
*   **Reliable Yield:** The maximum draft that can be sustained from a reservoir over a long period of time, such that the reservoir does not run dry during any critical dry period in the historical record.
*   **Critical Period:** The period of lowest flow in a river's historical record, which is crucial for determining reservoir capacity and reliable yield.

### 3. Construction of a Mass Curve

The mass curve is constructed by plotting the cumulative discharge against time.

**Steps:**

1.  **Collect Historical Streamflow Data:** Obtain daily, monthly, or annual discharge data for the river.
2.  **Calculate Cumulative Discharge:** Sum up the discharge values sequentially over the time period.
3.  **Plot the Mass Curve:**
    *   The x-axis represents time (days, months, years).
    *   The y-axis represents cumulative discharge.
    *   Plot the cumulative discharge values against their corresponding time points.

### 4. Determination of Reservoir Storage Capacity (Rippl's Diagram)

The determination of reservoir storage capacity using the mass curve method is often referred to as **Rippl's Diagram**.

**Steps:**

1.  **Plot the Mass Curve:** As described above.
2.  **Plot the Demand Curve:**
    *   Draw a straight line representing the required draft. The slope of this line is equal to the average demand (total demand over a period divided by the period's duration).
    *   This demand line can be plotted from the origin or from any chosen starting point on the time axis.
3.  **Identify the Critical Period:** The critical period is the time interval between two consecutive peaks of the mass curve where the demand line falls below the mass curve. More specifically, it's the period between a peak of the mass curve and the subsequent lowest point on the mass curve, such that the difference between the demand line and the mass curve within this period is maximized.
4.  **Determine the Required Storage:**
    *   Draw horizontal lines from the peaks of the mass curve to intersect the demand curve.
    *   Draw horizontal lines from the lowest points of the mass curve (which follow the peaks) to intersect the demand curve.
    *   The vertical distance between the mass curve and the demand curve represents the deficit in supply at that point in time.
    *   The maximum vertical distance between the mass curve and the demand curve, measured parallel to the y-axis (discharge), represents the required storage capacity of the reservoir to satisfy the demand during the critical period.
    *   Alternatively, if you plot the demand line starting at the origin, the maximum vertical distance between the mass curve and the demand line is the required storage.

**Visualizing Storage:**

Imagine the demand line as a constant rate of withdrawal. The mass curve represents the incoming supply. When the mass curve is below the demand line, there is a deficit that needs to be met by storage. The largest deficit occurring over the critical period dictates the minimum storage required.

### 5. Determination of Reliable Yield

The reliable yield of a river from a reservoir can also be determined using the mass curve method. This involves finding the largest possible draft that the river can sustain from a reservoir of a given capacity or that can be met from the natural flow supplemented by the reservoir.

**Method 1: For a Fixed Reservoir Capacity**

1.  **Plot the Mass Curve:** As described above.
2.  **Draw the Demand Line:** Draw a demand line with an unknown slope (representing the unknown yield) that starts at the origin.
3.  **Draw Horizontal Lines from Peaks:** From each peak of the mass curve, draw a horizontal line.
4.  **Adjust the Demand Line:** Adjust the slope of the demand line such that it touches the lowest point of the mass curve that lies *below* a horizontal line drawn from the highest peak to the demand line. This is a bit complex to describe without a diagram, but conceptually, you are trying to fit the steepest possible demand line without exceeding the reservoir capacity (represented by the vertical distance between the highest peak and the lowest trough) and without falling below zero flow.
5.  **Calculate Yield:** The slope of this adjusted demand line represents the reliable yield.

**Method 2: Working Backwards (More Common for Yield Determination)**

1.  **Plot the Mass Curve:** As described above.
2.  **Assume a Draft (Yield):** Draw a demand line with a trial slope (representing a trial yield) from the origin.
3.  **Check for Deficits:** Identify any periods where the demand line goes above the mass curve. These represent deficits.
4.  **Calculate Required Storage:** For each deficit period, calculate the required storage to bridge that gap. The maximum of these required storages is the minimum reservoir capacity needed for that assumed yield.
5.  **Iterate:** Repeat steps 2-4 with different draft values until the calculated required storage is equal to the available reservoir capacity (or the most economical capacity). The corresponding draft is the reliable yield for that reservoir capacity.

**Alternative Approach for Yield:**

If a specific reservoir capacity is fixed, you can draw parallel demand lines with varying slopes starting from different points on the time axis. The highest possible slope of a demand line that can be drawn without falling below the mass curve *and* without requiring a storage greater than the available reservoir capacity is the reliable yield.

### 6. Illustrative Example (Conceptual)

Let's consider a scenario where you have monthly inflow data for a river for 12 months, and you need to supply a constant demand of 100 m³/s.

| Month   | Inflow (m³/s) | Cumulative Inflow (m³/s) | Demand (m³/s) | Cumulative Demand (m³/s) | Difference (Inflow - Demand) |
| :------ | :------------ | :----------------------- | :------------ | :----------------------- | :--------------------------- |
| Jan     | 120           | 120                      | 100           | 100                      | 20                           |
| Feb     | 150           | 270                      | 100           | 200                      | 70                           |
| Mar     | 180           | 450                      | 100           | 300                      | 150                          |
| Apr     | 200           | 650                      | 100           | 400                      | 250                          |
| May     | 100           | 750                      | 100           | 500                      | 250                          |
| Jun     | 80            | 830                      | 100           | 600                      | 230                          |
| Jul     | 60            | 890                      | 100           | 700                      | 190                          |
| Aug     | 50            | 940                      | 100           | 800                      | 140                          |
| Sep     | 40            | 980                      | 100           | 900                      | 80                           |
| Oct     | 50            | 1030                     | 100           | 1000                     | 30                           |
| Nov     | 70            | 1100                     | 100           | 1100                     | 0                            |
| Dec     | 90            | 1190                     | 100           | 1200                     | -10                          |

**To plot this:**

*   **Mass Curve:** Plot cumulative inflow against month (e.g., point (Jan, 120), (Feb, 270), etc.).
*   **Demand Curve:** Plot cumulative demand against month (e.g., point (Jan, 100), (Feb, 200), etc.).

**Finding Storage:**

By plotting these curves, you would look for the maximum vertical distance between the cumulative inflow curve and the cumulative demand curve. In this simplified example, if the demand were constant, the difference column would show the net inflow after meeting demand. Positive values indicate surplus (stored), negative values indicate deficit (drawn from storage).

Let's refine the example for storage determination:

**Example for Storage Determination:**

| Time (Months) | Cumulative Inflow (Million m³) | Constant Demand (Million m³/s) | Cumulative Demand (Million m³/s) | Difference (Cumulative Inflow - Cumulative Demand) |
| :------------ | :----------------------------- | :----------------------------- | :------------------------------- | :------------------------------------------------- |
| 0             | 0                              | 50                             | 0                                | 0                                                  |
| 1             | 100                            | 50                             | 50                               | 50                                                 |
| 2             | 220                            | 50                             | 100                              | 120                                                |
| 3             | 300                            | 50                             | 150                              | 150                                                |
| 4             | 320                            | 50                             | 200                              | 120                                                |
| 5             | 330                            | 50                             | 250                              | 80                                                 |
| 6             | 310                            | 50                             | 300                              | 10                                                 |
| 7             | 280                            | 50                             | 350                              | -70                                                |
| 8             | 250                            | 50                             | 400                              | -150                                               |
| 9             | 230                            | 50                             | 450                              | -220                                               |
| 10            | 240                            | 50                             | 500                              | -260                                               |
| 11            | 270                            | 50                             | 550                              | -280                                               |
| 12            | 350                            | 50                             | 600                              | -250                                               |

**Analysis:**

1.  **Mass Curve:** Plot cumulative inflow vs. time.
2.  **Demand Curve:** Plot cumulative demand vs. time (straight line from origin with slope 50).
3.  **Finding Storage:**
    *   Look for periods where cumulative demand exceeds cumulative inflow (negative difference).
    *   The period from Month 7 to Month 11 shows deficits. The cumulative deficit reaches a maximum of -280 million m³ at Month 11.
    *   The required storage capacity to meet this demand would be 280 million m³. This is the maximum deficit that needs to be bridged.

**To find reliable yield with a fixed storage of, say, 100 Million m³:**

1.  **Plot Mass Curve.**
2.  **Draw parallel lines representing demand (yield).** Start a trial demand line (e.g., slope 40 Million m³/month) from a point on the time axis.
3.  **Check Storage:** The difference between the demand line and the mass curve should not exceed 100 Million m³.
4.  **Iterate:** Find the steepest possible demand line (highest yield) that respects the 100 Million m³ storage constraint and the mass curve.

### 7. Practice Questions

**Question 1:**
What is the primary purpose of the mass curve method in water resources engineering?
a) To determine rainfall intensity.
b) To analyze flood routing.
c) To determine reservoir storage capacity and reliable yield.
d) To calculate evaporation rates.

**Question 2:**
If the cumulative inflow curve is consistently above the demand curve, what does this imply about the reservoir storage requirement?
a) High storage is required.
b) No storage is required.
c) Storage is required for peak demands.
d) Storage is required to mitigate losses.

**Question 3:**
The critical period in the mass curve method represents:
a) The period of highest river flow.
b) The period of greatest deficit between supply and demand.
c) The period of highest reservoir evaporation.
d) The period of maximum rainfall.

**Question 4:**
A reservoir with a capacity of 150 million m³ is to be designed. The mass curve analysis shows that to meet a constant demand of 40 million m³ per year, the maximum deficit encountered is 120 million m³. What is the remaining unused capacity of the reservoir for this demand?

**Question 5:**
Given the following cumulative inflow data for a river over four consecutive months: Month 1: 50 MCM, Month 2: 120 MCM, Month 3: 180 MCM, Month 4: 200 MCM. If a constant demand of 40 MCM per month is to be met, calculate the required storage capacity using the mass curve concept.

---

### 8. Answers to Practice Questions

**Answer 1:**
c) To determine reservoir storage capacity and reliable yield.

**Answer 2:**
b) No storage is required. (Assuming the demand is also met by the inflow without any deficit).

**Answer 3:**
b) The period of greatest deficit between supply and demand.

**Answer 4:**
Remaining capacity = Total capacity - Required capacity
Remaining capacity = 150 million m³ - 120 million m³ = 30 million m³

**Answer 5:**
Let's calculate cumulative demand:
*   Month 1: Demand = 40 MCM, Cumulative Demand = 40 MCM
*   Month 2: Demand = 40 MCM, Cumulative Demand = 80 MCM
*   Month 3: Demand = 40 MCM, Cumulative Demand = 120 MCM
*   Month 4: Demand = 40 MCM, Cumulative Demand = 160 MCM

Now let's look at the difference (Cumulative Inflow - Cumulative Demand):
*   Month 1: 50 - 40 = 10 MCM
*   Month 2: 120 - 80 = 40 MCM
*   Month 3: 180 - 120 = 60 MCM
*   Month 4: 200 - 160 = 40 MCM

In this specific example, the cumulative inflow is always greater than the cumulative demand. This implies that no storage is required to meet this particular demand from this inflow record. However, if there was a period where cumulative demand exceeded cumulative inflow, the maximum such deficit would be the required storage. For instance, if Month 4 cumulative inflow was 150 MCM:

*   Month 4 Difference: 150 - 160 = -10 MCM
In this modified scenario, a deficit of 10 MCM occurs. The required storage capacity would be 10 MCM.

*(Note: The provided data in Q5 doesn't create a deficit. A more typical problem would have inflow data that creates a deficit at some point.)*

---

### 9. Important Points to Remember

*   The mass curve is a plot of **cumulative** inflow versus time.
*   The demand curve is typically represented as a **straight line** with a slope equal to the average demand.
*   The **maximum vertical distance** between the mass curve and the demand curve (measured parallel to the y-axis) represents the required reservoir storage capacity.
*   The mass curve method is a **graphical** approach, and the accuracy depends on the quality of the historical data and the precision of the plotting.
*   When determining reliable yield, you are looking for the **maximum sustainable draft** that a given reservoir capacity can support.
*   Always consider **losses** (evaporation, seepage) when calculating net available draft, which can affect the required storage and reliable yield.
*   The **critical period** is crucial for determining the reservoir's performance.

---
