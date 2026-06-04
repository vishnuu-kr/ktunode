---
title: "representation of rainfall data-mass curve and hyetograph"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 1: Hydrologic cycle"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d81"
status: "completed"
scrapedAt: "2026-05-20T18:49:05.045Z"
---
# HYDROLOGY AND WATER RESOURCES ENGINEERING

## Module 1: Hydrologic Cycle

### Topic: Representation of Rainfall Data - Mass Curve and Hyetograph

---

### 1. Introduction to Rainfall Data Representation

Rainfall is a fundamental component of the hydrologic cycle, directly influencing surface runoff, groundwater recharge, and water availability. To effectively analyze and design water resources systems, it's crucial to represent rainfall data in a manner that highlights its temporal distribution and intensity. Two common graphical methods for this are the **Mass Curve** and the **Hyetograph**.

---

### 2. Mass Curve of Rainfall

**2.1 Definition:**
A mass curve of rainfall is a plot of the **cumulative rainfall** against **time**. It shows the total amount of rain that has fallen up to any given point in time during a storm event or over a period.

**2.2 Purpose:**
*   To visualize the total accumulation of rainfall over time.
*   To determine the duration of a storm.
*   To estimate the average rainfall intensity over any sub-period of the storm by calculating the slope of the mass curve between two points.
*   To identify periods of rapid or slow rainfall accumulation.
*   Useful in the analysis of storage requirements for water supply or flood control.

**2.3 Construction:**
*   The x-axis represents time (hours, days, months, etc.).
*   The y-axis represents the cumulative rainfall depth (e.g., mm, inches).
*   Data points are plotted at each time interval, showing the total rainfall accumulated up to that time.
*   The curve starts at zero rainfall at the beginning of the period and generally increases over time.

**2.4 Interpretation:**
*   **Slope of the Mass Curve:** The slope of the mass curve at any point represents the instantaneous rainfall intensity at that specific time. A steeper slope indicates higher intensity, while a flatter slope indicates lower intensity.
*   **Average Intensity:** The average rainfall intensity over a period between two points on the mass curve is given by the slope of the straight line connecting those two points.
    *   Average Intensity = (Cumulative Rainfall at Time $t_2$ - Cumulative Rainfall at Time $t_1$) / ($t_2$ - $t_1$)

**2.5 Example:**
Consider a storm with the following rainfall data:

| Time (hours) | Rainfall in preceding hour (mm) | Cumulative Rainfall (mm) |
| :----------- | :------------------------------ | :----------------------- |
| 0            | 0                               | 0                        |
| 1            | 5                               | 5                        |
| 2            | 10                              | 15                       |
| 3            | 2                               | 17                       |
| 4            | 8                               | 25                       |
| 5            | 0                               | 25                       |

*A mass curve would plot the cumulative rainfall (y-axis) against time (x-axis). The curve would rise steeply between hours 1 and 2, indicating high intensity, and be flat between hours 4 and 5, indicating no rainfall.*

**2.6 Practice Question:**
Using the data above, calculate the average rainfall intensity between hour 1 and hour 4.

**Answer:**
Average Intensity = (Cumulative Rainfall at 4 hours - Cumulative Rainfall at 1 hour) / (4 hours - 1 hour)
Average Intensity = (25 mm - 5 mm) / (3 hours)
Average Intensity = 20 mm / 3 hours
**Average Intensity = 6.67 mm/hour**

---

### 3. Hyetograph

**3.1 Definition:**
A hyetograph is a plot of **rainfall intensity** against **time** for a storm event. It graphically represents how the rate of rainfall varies over the duration of the storm.

**3.1.1 Key Concepts:**
*   **Rainfall Intensity (i):** The rate at which rain falls, typically expressed in units like mm/hour or inches/hour.
*   **Duration (t):** The length of time over which rainfall occurs.

**3.2 Purpose:**
*   To visualize the temporal variation of rainfall intensity.
*   To identify periods of high and low rainfall intensity within a storm.
*   Crucial for hydrological modeling, especially for calculating direct runoff and designing hydraulic structures (e.g., culverts, storm drains).
*   Helps in understanding the "bang" of the storm – how concentrated the rainfall is.

**3.3 Construction:**
*   The x-axis represents time (hours, minutes, etc.).
*   The y-axis represents rainfall intensity (e.g., mm/hour).
*   The hyetograph is typically represented as a series of bars (a histogram) where the width of each bar represents a time interval (e.g., 1 hour, 30 minutes) and the height of the bar represents the average rainfall intensity during that interval.
*   Alternatively, it can be a continuous line plot of instantaneous intensity.

**3.4 Interpretation:**
*   **Area under the Hyetograph:** The area under the hyetograph represents the **total rainfall depth** for the storm event.
    *   Total Rainfall Depth = $\Sigma$ (Intensity × Duration of interval)
    *   Mathematically, it's the integral of the intensity function over time: Total Rainfall = $\int i(t) dt$.

**3.5 Example:**
Using the same rainfall data as the mass curve example, we can construct a hyetograph:

| Time Interval (hours) | Rainfall in Interval (mm) | Duration of Interval (hours) | Average Intensity (mm/hour) |
| :-------------------- | :------------------------ | :--------------------------- | :-------------------------- |
| 0-1                   | 5                         | 1                            | 5                           |
| 1-2                   | 10                        | 1                            | 10                          |
| 2-3                   | 2                         | 1                            | 2                           |
| 3-4                   | 8                         | 1                            | 8                           |
| 4-5                   | 0                         | 1                            | 0                           |

*A hyetograph would show bars of height 5 mm/hr for the first hour, 10 mm/hr for the second hour, 2 mm/hr for the third hour, 8 mm/hr for the fourth hour, and 0 mm/hr for the fifth hour. The total area of these bars would sum up to 25 mm.*

**3.6 Practice Question:**
From the hyetograph data above, what is the total rainfall depth during the storm?

**Answer:**
Total Rainfall Depth = (5 mm/hr * 1 hr) + (10 mm/hr * 1 hr) + (2 mm/hr * 1 hr) + (8 mm/hr * 1 hr) + (0 mm/hr * 1 hr)
Total Rainfall Depth = 5 mm + 10 mm + 2 mm + 8 mm + 0 mm
**Total Rainfall Depth = 25 mm**

---

### 4. Relationship Between Mass Curve and Hyetograph

*   The **hyetograph** provides the instantaneous or average intensity over specific time intervals.
*   The **mass curve** is the graphical accumulation of the rainfall data presented in the hyetograph.
*   The **slope** of the mass curve at any point is equivalent to the **rainfall intensity** shown on the hyetograph at that time. If the mass curve is plotted with discrete intervals, the slope between two points corresponds to the average intensity of the hyetograph bar connecting those points.

---

### 5. Applications in Hydrology and Water Resources Engineering

*   **Runoff Calculation:** Hyetographs are fundamental inputs for calculating direct runoff using methods like the Curve Number method or the Unit Hydrograph theory. The intensity of rainfall is a key driver of runoff generation.
*   **Flood Routing and Forecasting:** Understanding the temporal distribution of rainfall (via hyetographs and mass curves) is essential for predicting flood peaks and volumes.
*   **Water Supply Reservoir Design:** Mass curves are used in water supply studies to determine the required storage capacity of reservoirs by analyzing inflow and demand patterns. The "double mass curve" technique can also be used to check the consistency of rainfall data.
*   **Stormwater Management:** Hyetographs are critical for designing urban drainage systems, culverts, and detention basins to handle peak flow rates.
*   **Drought Analysis:** While mass curves primarily show accumulation, changes in their slope over longer periods can indicate drought conditions (prolonged low accumulation rates).

---

### 6. Important Points to Remember

*   **Mass Curve:** Cumulative Rainfall vs. Time. Slope = Intensity. Useful for storage analysis.
*   **Hyetograph:** Rainfall Intensity vs. Time. Area = Total Rainfall. Crucial for runoff and system design.
*   The slope of the mass curve *is* the intensity represented by the hyetograph.
*   Hyetographs are often used as direct inputs for hydrological models.
*   Both representations are vital for a comprehensive understanding of a rainfall event.

---

### 7. Further Practice Questions

**Question 1:**
A hyetograph for a 3-hour storm shows the following intensities:
*   Hour 1: 15 mm/hr
*   Hour 2: 25 mm/hr
*   Hour 3: 10 mm/hr

a) Construct a simple hyetograph for this storm.
b) Calculate the total rainfall depth for the storm.
c) If the cumulative rainfall at the beginning of hour 2 was 15 mm, what is the cumulative rainfall at the end of hour 3?

**Answer 1:**
a) (Imagine bars of height 15, 25, and 10 mm/hr for hours 1, 2, and 3 respectively).
b) Total Rainfall = (15 mm/hr * 1 hr) + (25 mm/hr * 1 hr) + (10 mm/hr * 1 hr) = 15 + 25 + 10 = **50 mm**
c) Cumulative Rainfall at end of hour 3 = Cumulative Rainfall at beginning of hour 2 + Rainfall in hour 2 + Rainfall in hour 3
   Cumulative Rainfall at end of hour 3 = 15 mm + 25 mm + 10 mm = **50 mm**
   *(Alternatively, it's the total rainfall calculated in part b)*

**Question 2:**
A mass curve shows cumulative rainfall increasing from 20 mm at time $t_1$ to 50 mm at time $t_2$. If $t_2 - t_1$ = 2 hours, what was the average rainfall intensity during this 2-hour period?

**Answer 2:**
Average Intensity = (50 mm - 20 mm) / 2 hours = 30 mm / 2 hours = **15 mm/hr**

---
---
