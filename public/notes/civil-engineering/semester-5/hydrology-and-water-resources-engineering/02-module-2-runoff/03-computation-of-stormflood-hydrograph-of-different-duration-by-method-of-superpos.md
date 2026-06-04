---
title: "Computation of storm/flood hydrograph of different duration by method of superposition and by development of S– Hydrograph"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 2: Runoff"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d8b"
status: "completed"
scrapedAt: "2026-05-20T18:49:12.702Z"
---
# Hydrology and Water Resources Engineering: Module 2 - Runoff

## Topic: Computation of Storm/Flood Hydrograph of Different Duration by Method of Superposition and by Development of S-Hydrograph

---

### **Learning Outcomes:**

Upon successful completion of this topic, students will be able to:

*   Understand the concept of a unit hydrograph and its application.
*   Explain the principle of superposition for constructing hydrographs of different rainfall durations.
*   Derive and use an S-hydrograph to compute flood hydrographs for various rainfall durations.
*   Apply these methods to solve practical problems in rainfall-runoff analysis.

---

### **1. Introduction to Storm/Flood Hydrographs**

A **storm hydrograph** (or **flood hydrograph**) is a graphical representation of the discharge of a river or stream at a specific point over time in response to a rainfall event. It typically consists of:

*   **Lag time:** The time interval between the centroid of rainfall excess and the peak discharge.
*   **Rising limb:** The period of increasing discharge.
*   **Peak flow:** The maximum discharge.
*   **Recession limb:** The period of decreasing discharge after the peak.
*   **Baseflow:** The groundwater contribution to the streamflow, which is often present even before and after the direct storm runoff.

The **direct runoff hydrograph** represents only the flow directly attributable to the rainfall excess, excluding baseflow.

---

### **2. The Unit Hydrograph (UH)**

The **unit hydrograph** is a fundamental concept in rainfall-runoff analysis.

**Definition:** A unit hydrograph is the hydrograph of direct runoff from a rainfall excess of **uniform intensity** and **unit depth** (typically 1 cm or 1 inch) occurring over a **specified duration** and uniformly distributed over the **entire catchment area**.

**Key Assumptions of the Unit Hydrograph Theory:**

1.  **Linearity:** The direct runoff hydrograph is linearly related to the rainfall excess. This means that if the rainfall excess doubles, the direct runoff hydrograph will also double in magnitude, while its shape remains the same.
2.  **Time Invariance:** The shape of the unit hydrograph is constant over time. The response of the catchment to a rainfall excess of a given duration is independent of when the storm occurs.
3.  **Constant Basin Characteristics:** The catchment characteristics (e.g., slope, soil type, drainage network) remain constant during the storm and between different storms.
4.  **Uniform Rainfall Distribution:** The rainfall excess is uniformly distributed over the entire catchment area.
5.  **Instantaneous Rainfall Excess:** The rainfall excess is assumed to be concentrated over a very short duration, which is then used to derive a unit hydrograph for a specific duration.

**Why is the Unit Hydrograph Useful?**

*   It simplifies the complex process of rainfall-runoff transformation.
*   It allows us to predict the response of a catchment to a storm of any duration and magnitude, provided the linearity and time-invariance assumptions hold.

---

### **3. Computation of Storm/Flood Hydrograph of Different Duration by Method of Superposition**

This method utilizes the principle of superposition, which states that the response of a linear system to a complex input is the sum of its responses to individual components of the input. In the context of hydrograph computation, this means that a storm of longer duration can be thought of as a series of shorter duration storms.

**Procedure:**

Let's assume we have a unit hydrograph (UH) for a storm duration of **$T$ hours** (e.g., a 3-hour UH). We want to compute the direct runoff hydrograph for a storm with a duration of **$nT$ hours** (where $n$ is an integer).

1.  **Divide the storm into discrete segments:** A storm of duration $nT$ can be considered as $n$ successive storms, each of duration $T$.
2.  **Construct unit hydrographs for each segment:** Each of these $n$ successive storms of duration $T$ will produce a direct runoff hydrograph that is essentially a lagged version of the $T$-hour UH.
3.  **Apply superposition:** Sum the ordinates of these lagged $T$-hour UHs at each time step. The sum will represent the direct runoff hydrograph for the $nT$ duration storm.

**Example:** Constructing a 6-hour direct runoff hydrograph from a 3-hour unit hydrograph.

A 6-hour storm can be considered as two successive 3-hour storms.

*   **Storm 1:** Occurs from time $t = 0$ to $t = 3$ hours. Produces a 3-hour UH.
*   **Storm 2:** Occurs from time $t = 3$ to $t = 6$ hours. Produces another 3-hour UH, but it is delayed by 3 hours.

To get the combined 6-hour hydrograph, we overlay the first 3-hour UH and the delayed 3-hour UH (starting at $t=3$ hours) and sum their ordinates.

| Time (hr) | 3-hr UH Ordinates (Q1) | 3-hr UH Ordinates (Lagged by 3 hr, Q2) | 6-hr Direct Runoff (Q1 + Q2) |
| :-------- | :--------------------- | :--------------------------------------- | :--------------------------- |
| 0         | 0                      | 0                                        | 0                            |
| 1         | $Q_{0-3}(1)$           | 0                                        | $Q_{0-3}(1)$                 |
| 2         | $Q_{0-3}(2)$           | 0                                        | $Q_{0-3}(2)$                 |
| 3         | $Q_{0-3}(3)$           | $Q_{0-3}(1)$                             | $Q_{0-3}(3) + Q_{0-3}(1)$    |
| 4         | $Q_{0-3}(4)$           | $Q_{0-3}(2)$                             | $Q_{0-3}(4) + Q_{0-3}(2)$    |
| 5         | $Q_{0-3}(5)$           | $Q_{0-3}(3)$                             | $Q_{0-3}(5) + Q_{0-3}(3)$    |
| 6         | $Q_{0-3}(6)$           | $Q_{0-3}(4)$                             | $Q_{0-3}(6) + Q_{0-3}(4)$    |
| ...       | ...                    | ...                                      | ...                          |
| $T_{peak} + 3$ | $Q_{0-3}(T_{peak})$    | $Q_{0-3}(T_{peak}-3)$                    | $Q_{0-3}(T_{peak}) + Q_{0-3}(T_{peak}-3)$ |
| ...       | ...                    | ...                                      | ...                          |

**Generalization:**

For a storm of duration $D$ hours, which can be divided into $n = D/T$ segments of duration $T$, the direct runoff hydrograph ordinates are the sum of the ordinates of $n$ lagged $T$-hour UHs:

$Q_D(t) = UH_T(t) + UH_T(t-T) + UH_T(t-2T) + \dots + UH_T(t-(n-1)T)$

where:
*   $Q_D(t)$ is the direct runoff at time $t$ for the $D$-hour storm.
*   $UH_T(t)$ is the ordinate of the $T$-hour unit hydrograph at time $t$.
*   $UH_T(t-kT)$ is the ordinate of the $T$-hour unit hydrograph lagged by $kT$ hours.

---

### **4. Development of S-Hydrograph**

The S-hydrograph method is a more generalized and powerful approach to convert a unit hydrograph of a specific duration to a unit hydrograph of any desired duration. It is particularly useful for storms that do not fit neatly into multiples of a base unit hydrograph duration.

**Definition:** An **S-hydrograph** (or **S-curve**) is a hydrograph of direct runoff resulting from a **continuous rainfall of constant intensity** at a rate of **1 unit depth per unit time** (e.g., 1 cm/hr or 1 inch/hr) over an indefinitely long period, or practically, for a period equal to or longer than the time of concentration of the catchment.

**Key Characteristics of an S-hydrograph:**

*   It starts from zero discharge and gradually rises to a constant or near-constant discharge.
*   The constant discharge is reached when the runoff from the leading edge of the storm is balanced by the runoff from the trailing edge, and the catchment has reached a steady state of response.
*   The rate of rise of the S-hydrograph is related to the rainfall intensity.

**Development of an S-hydrograph from a Unit Hydrograph:**

Let's assume we have a $T$-hour unit hydrograph.

1.  **Concept:** An S-hydrograph can be visualized as the result of a series of successive $T$-hour unit storms, each starting 1 hour after the previous one, and continuing indefinitely (or for a long duration). This is essentially applying the superposition principle with a lag of 1 hour.
2.  **Procedure:**
    *   Take the $T$-hour UH.
    *   Lag this $T$-hour UH by 1 hour.
    *   Continue lagging the $T$-hour UH by 1-hour intervals indefinitely.
    *   Sum the ordinates of these lagged $T$-hour UHs at each time step.

**Mathematical Representation:**

Let $UH_T(t)$ be the ordinates of a $T$-hour unit hydrograph. The S-hydrograph, $S(t)$, can be approximated as:

$S(t) = UH_T(t) + UH_T(t-1) + UH_T(t-2) + \dots$

Theoretically, this summation continues to infinity. In practice, the $UH_T(t)$ values become zero after $T$ hours (or slightly longer, depending on the recession limb). So, the summation effectively stops after a certain time.

**Important Point:** The S-hydrograph represents the response to a rainfall *intensity* of 1 unit/hr. If the actual rainfall intensity is $I$ units/hr, the resulting direct runoff hydrograph will have ordinates $I$ times the ordinates of the S-hydrograph (assuming linearity).

**Using the S-hydrograph to Compute Hydrographs of Different Durations:**

Once an S-hydrograph is developed (representing a rainfall intensity of 1 unit/hr), we can use it to find the direct runoff hydrograph for a storm of any duration $D$ and any constant intensity $I$.

**Procedure:**

1.  **Develop the S-hydrograph:** Create an S-hydrograph from a known unit hydrograph (e.g., a 1-hour UH, or convert a multi-hour UH to an S-curve).
2.  **Choose the desired duration:** Select the duration $D$ of the new storm.
3.  **Lag the S-hydrograph:** Lag the S-hydrograph by the duration $D$ of the storm.
4.  **Apply Superposition:** Subtract the lagged S-hydrograph from the original S-hydrograph. This difference represents the direct runoff hydrograph from a rainfall excess of **1 unit depth** spread over duration $D$.

    $UH_D(t) = S(t) - S(t-D)$

5.  **Factor in Rainfall Intensity:** If the actual rainfall excess *intensity* is $I$ units/hr over duration $D$, the direct runoff hydrograph ordinates will be $I$ times the ordinates of the $UH_D(t)$ computed in the previous step.

    $Q_D(t) = I \times (S(t) - S(t-D))$

**How to develop an S-hydrograph from a known $T$-hour UH:**

If you have a $T$-hour UH, you can still develop an S-hydrograph. The concept is that the S-hydrograph is the cumulative sum of successive unit storms each lagged by 1 hour. However, the UH itself is for a $T$-hour duration.

A more direct way to think about it is that the S-hydrograph from a $T$-hour UH of duration $T$ results from a rainfall of constant intensity of 1/T units/hr.

**To create a true S-hydrograph (continuous rainfall at 1 unit/hr):**

*   **If you have a 1-hour UH:** This is already your S-hydrograph, as it represents 1 cm of rainfall excess over 1 hour, which is an intensity of 1 cm/hr.
*   **If you have a $T$-hour UH:** The S-hydrograph from this $T$-hour UH is formed by summing successive $T$-hour UHs lagged by 1 hour. However, this S-hydrograph will represent a rainfall intensity of $1/T$ units/hr. To convert it to an S-hydrograph for 1 unit/hr, you would need to scale it by $T$.

**A more practical approach for S-hydrograph development from a $T$-hour UH:**

1.  **Assume a $T$-hour UH:** Let $UH_T(t)$ be its ordinates.
2.  **Construct a series of lagged $T$-hour UHs:**
    *   $UH_T(t)$
    *   $UH_T(t-1)$
    *   $UH_T(t-2)$
    *   ...
3.  **Sum these ordinates:** This creates a curve, let's call it $S_{T-hour}(t)$. This curve represents the response to a continuous rainfall at an intensity of $1/T$ units/hr.
4.  **Scale to obtain the true S-hydrograph:** To get the S-hydrograph ($S(t)$) for an intensity of 1 unit/hr, multiply $S_{T-hour}(t)$ by $T$.
    $S(t) = T \times S_{T-hour}(t)$

**Then, to find the direct runoff hydrograph for a storm of duration $D$ and intensity $I$:**

$Q_D(t) = I \times [S(t) - S(t-D)]$

---

### **5. Example Calculations**

**Problem 1 (Method of Superposition):**

Given a 3-hour unit hydrograph with the following ordinates:

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 1         | 5                |
| 2         | 15               |
| 3         | 25               |
| 4         | 20               |
| 5         | 10               |
| 6         | 0                |

Compute the direct runoff hydrograph (in m³/s) for a 6-hour storm with a rainfall excess of 3 cm, assuming uniform distribution and intensity.

**Solution:**

First, we need a 3-hour unit hydrograph. The given hydrograph has a total volume of direct runoff.
Total volume = Sum of ordinates $\times$ time interval.
Let's assume the time interval is 1 hour.
Total volume = $(0+5+15+25+20+10+0) \times 1$ hour = 75 m³s * hr.

For a unit hydrograph, the total volume of direct runoff should be 1 cm over the catchment area. Let's assume the catchment area is $A$ km².
Volume = 1 cm $\times$ A km² = 0.01 m $\times$ A $\times$ 1000 m $\times$ 1000 m = $10000 \times A$ m³.

If the given hydrograph is a 3-hour unit hydrograph, its total volume should be 1 cm of excess rainfall.
Let's assume the given ordinates are already scaled for a unit hydrograph, meaning their total volume represents 1 unit depth (e.g., 1 cm) over the catchment area.

To compute a 6-hour direct runoff hydrograph from a 3-hour UH:
Consider the 6-hour storm as two successive 3-hour storms.

| Time (hr) | UH(3hr) (Q1) | UH(3hr) Lagged by 3hr (Q2) | Direct Runoff (6hr) = Q1 + Q2 |
| :-------- | :----------- | :------------------------- | :---------------------------- |
| 0         | 0            | 0                          | 0                             |
| 1         | 5            | 0                          | 5                             |
| 2         | 15           | 0                          | 15                            |
| 3         | 25           | 5                          | 30                            |
| 4         | 20           | 15                         | 35                            |
| 5         | 10           | 25                         | 35                            |
| 6         | 0            | 20                         | 20                            |
| 7         | 0            | 10                         | 10                            |
| 8         | 0            | 0                          | 0                             |

This is the direct runoff hydrograph for a rainfall excess of **1 cm** over 6 hours.

Now, if the rainfall excess is **3 cm**, we multiply these ordinates by 3:

| Time (hr) | 6-hr DR (cm) | 6-hr DR (3cm) |
| :-------- | :----------- | :------------ |
| 0         | 0            | 0             |
| 1         | 5            | 15            |
| 2         | 15           | 45            |
| 3         | 30           | 90            |
| 4         | 35           | 105           |
| 5         | 35           | 105           |
| 6         | 20           | 60            |
| 7         | 10           | 30            |
| 8         | 0            | 0             |

**Problem 2 (S-Hydrograph Method):**

Given the following 2-hour unit hydrograph ordinates:

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 1         | 10               |
| 2         | 20               |
| 3         | 15               |
| 4         | 5                |
| 5         | 0                |

Develop an S-hydrograph and then compute the direct runoff hydrograph (in m³/s) for a 4-hour storm with a rainfall excess of 2 cm.

**Solution:**

**Step 1: Develop the S-hydrograph from the 2-hour UH.**
This involves summing successive 2-hour UHs lagged by 1 hour. This results in an S-hydrograph representing a rainfall intensity of 1/2 = 0.5 units/hr.

| Time (hr) | UH(2hr) (Q1) | UH(2hr) Lagged by 1hr (Q2) | UH(2hr) Lagged by 2hr (Q3) | UH(2hr) Lagged by 3hr (Q4) | UH(2hr) Lagged by 4hr (Q5) | S-hydrograph @ 0.5 units/hr intensity (S_0.5) = Q1+Q2+Q3+Q4+Q5 |
| :-------- | :----------- | :------------------------- | :------------------------- | :------------------------- | :------------------------- | :-------------------------------------------------------- |
| 0         | 0            | 0                          | 0                          | 0                          | 0                          | 0                                                         |
| 1         | 10           | 0                          | 0                          | 0                          | 0                          | 10                                                        |
| 2         | 20           | 10                         | 0                          | 0                          | 0                          | 30                                                        |
| 3         | 15           | 20                         | 10                         | 0                          | 0                          | 45                                                        |
| 4         | 5            | 15                         | 20                         | 10                         | 0                          | 50                                                        |
| 5         | 0            | 5                          | 15                         | 20                         | 10                         | 50                                                        |
| 6         | 0            | 0                          | 5                          | 15                         | 20                         | 40                                                        |
| 7         | 0            | 0                          | 0                          | 5                          | 15                         | 20                                                        |
| 8         | 0            | 0                          | 0                          | 0                          | 5                          | 5                                                         |
| 9         | 0            | 0                          | 0                          | 0                          | 0                          | 0                                                         |

**Step 2: Scale to get the S-hydrograph for 1 unit/hr intensity.**
Multiply the $S_{0.5}$ ordinates by 2 (since 1 / 0.5 = 2).

| Time (hr) | S_0.5 (m³/s) | S (m³/s) = S_0.5 * 2 |
| :-------- | :----------- | :------------------- |
| 0         | 0            | 0                    |
| 1         | 10           | 20                   |
| 2         | 30           | 60                   |
| 3         | 45           | 90                   |
| 4         | 50           | 100                  |
| 5         | 50           | 100                  |
| 6         | 40           | 80                   |
| 7         | 20           | 40                   |
| 8         | 5            | 10                   |
| 9         | 0            | 0                    |

**Step 3: Compute the direct runoff hydrograph for a 4-hour storm with 2 cm excess rainfall.**
This means $D = 4$ hours and $I = 2$ units/hr.
We need to compute $UH_4(t) = S(t) - S(t-4)$ and then multiply by $I$.

| Time (hr) | S(t) | S(t-4) | UH_4(t) = S(t) - S(t-4) | DR (4hr, 2cm) = UH_4(t) * 2 |
| :-------- | :--- | :----- | :---------------------- | :-------------------------- |
| 0         | 0    | -      | -                       | 0                           |
| 1         | 20   | -      | -                       | 20                          |
| 2         | 60   | -      | -                       | 60                          |
| 3         | 90   | -      | -                       | 90                          |
| 4         | 100  | 0      | 100                     | 200                         |
| 5         | 100  | 20     | 80                      | 160                         |
| 6         | 80   | 60     | 20                      | 40                          |
| 7         | 40   | 90     | -50 (should be 0)       | 0                           |
| 8         | 10   | 100    | -90 (should be 0)       | 0                           |
| 9         | 0    | 100    | -100 (should be 0)      | 0                           |

**Correction for negative values:** When subtracting lagged S-curves, if $S(t-D)$ becomes larger than $S(t)$, it means the recession limb of the $D$-hour storm has been reached. The discharge should not become negative. Any negative values should be set to zero.

Corrected table:

| Time (hr) | S(t) | S(t-4) | UH_4(t) = S(t) - S(t-4) | DR (4hr, 2cm) = UH_4(t) * 2 |
| :-------- | :--- | :----- | :---------------------- | :-------------------------- |
| 0         | 0    | -      | -                       | 0                           |
| 1         | 20   | -      | -                       | 20                          |
| 2         | 60   | -      | -                       | 60                          |
| 3         | 90   | -      | -                       | 90                          |
| 4         | 100  | 0      | 100                     | 200                         |
| 5         | 100  | 20     | 80                      | 160                         |
| 6         | 80   | 60     | 20                      | 40                          |
| 7         | 40   | 90     | $\max(0, 40-90)=0$      | 0                           |
| 8         | 10   | 100    | $\max(0, 10-100)=0$     | 0                           |
| 9         | 0    | 100    | $\max(0, 0-100)=0$      | 0                           |

**Final Direct Runoff Hydrograph for a 4-hour storm with 2 cm excess rainfall:**

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 1         | 20               |
| 2         | 60               |
| 3         | 90               |
| 4         | 200              |
| 5         | 160              |
| 6         | 40               |
| 7         | 0                |
| 8         | 0                |
| 9         | 0                |

---

### **6. Practice Questions/Exercises**

**Question 1:**

You are given the following ordinates of a 6-hour unit hydrograph for a catchment:

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 6         | 10               |
| 12        | 30               |
| 18        | 40               |
| 24        | 35               |
| 30        | 20               |
| 36        | 5                |
| 42        | 0                |

Using the method of superposition, compute the direct runoff hydrograph (in m³/s) for a 12-hour storm with a rainfall excess of 4 cm.

**Answer 1:**

To compute the 12-hour DRH from a 6-hour UH, we overlay two 6-hour UHs, one starting at time 0 and the other at time 6 hours, and sum their ordinates.

| Time (hr) | UH(6hr) (Q1) | UH(6hr) Lagged by 6hr (Q2) | DR (12hr) = Q1 + Q2 |
| :-------- | :----------- | :------------------------- | :------------------ |
| 0         | 0            | 0                          | 0                   |
| 6         | 10           | 0                          | 10                  |
| 12        | 30           | 10                         | 40                  |
| 18        | 40           | 30                         | 70                  |
| 24        | 35           | 40                         | 75                  |
| 30        | 20           | 35                         | 55                  |
| 36        | 5            | 20                         | 25                  |
| 42        | 0            | 5                          | 5                   |
| 48        | 0            | 0                          | 0                   |

This is the DRH for a 12-hour storm with a rainfall excess of **1 cm**.
For a rainfall excess of **4 cm**, multiply these ordinates by 4:

| Time (hr) | 12-hr DR (1cm) | 12-hr DR (4cm) |
| :-------- | :------------- | :------------- |
| 0         | 0              | 0              |
| 6         | 10             | 40             |
| 12        | 40             | 160            |
| 18        | 70             | 280            |
| 24        | 75             | 300            |
| 30        | 55             | 220            |
| 36        | 25             | 100            |
| 42        | 5              | 20             |
| 48        | 0              | 0              |

---

**Question 2:**

Consider a catchment with a 1-hour unit hydrograph with the following ordinates:

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 1         | 50               |
| 2         | 100              |
| 3         | 50               |
| 4         | 0                |

Using the S-hydrograph method, calculate the direct runoff hydrograph (in m³/s) for a 2-hour storm with a rainfall excess of 3 cm.

**Answer 2:**

**Step 1: Develop the S-hydrograph from the 1-hour UH.**
A 1-hour UH represents a rainfall intensity of 1 cm/hr. Therefore, this 1-hour UH is the S-hydrograph for 1 unit/hr intensity.

| Time (hr) | S(t) = UH(1hr) (m³/s) |
| :-------- | :-------------------- |
| 0         | 0                     |
| 1         | 50                    |
| 2         | 100                   |
| 3         | 50                    |
| 4         | 0                     |

**Step 2: Compute the direct runoff hydrograph for a 2-hour storm with 3 cm excess rainfall.**
Here, $D = 2$ hours and $I = 3$ cm/hr.
We need to compute $UH_2(t) = S(t) - S(t-2)$ and then multiply by $I$.

| Time (hr) | S(t) | S(t-2) | UH_2(t) = S(t) - S(t-2) | DR (2hr, 3cm) = UH_2(t) * 3 |
| :-------- | :--- | :----- | :---------------------- | :-------------------------- |
| 0         | 0    | -      | -                       | 0                           |
| 1         | 50   | -      | -                       | 150                         |
| 2         | 100  | 0      | 100                     | 300                         |
| 3         | 50   | 50     | 0                       | 0                           |
| 4         | 0    | 100    | $\max(0, 0-100)=0$      | 0                           |
| 5         | 0    | 50     | $\max(0, 0-50)=0$       | 0                           |
| 6         | 0    | 0      | $\max(0, 0-0)=0$        | 0                           |

**Final Direct Runoff Hydrograph for a 2-hour storm with 3 cm excess rainfall:**

| Time (hr) | Discharge (m³/s) |
| :-------- | :--------------- |
| 0         | 0                |
| 1         | 150              |
| 2         | 300              |
| 3         | 0                |
| 4         | 0                |
| ...       | 0                |

---

### **7. Important Points to Remember:**

*   **Linearity and Time Invariance:** These are the cornerstones of unit hydrograph theory. Any deviation from these assumptions will lead to inaccuracies.
*   **Superposition:** Useful for storms that are multiples of the base UH duration. Requires careful lagging and summation.
*   **S-Hydrograph:** A more versatile tool for storms of any duration. Developed from a continuous rainfall of unit intensity.
*   **Conversion from $T$-hour UH to S-hydrograph:** Remember that a $T$-hour UH needs to be scaled by $T$ if you want to represent a continuous rainfall of 1 unit/hr, assuming the $T$-hour UH was derived from a rainfall of $1/T$ units/hr.
*   **Practical Applications:** These methods are crucial for flood forecasting, reservoir design, and water management.
*   **Rainfall Excess:** The computations are based on rainfall *excess*, which is the portion of rainfall that contributes to direct runoff after losses (interception, infiltration, etc.).
*   **Negative Discharges:** When subtracting lagged hydrographs, ensure that resulting discharges are non-negative. Set negative values to zero.

---
