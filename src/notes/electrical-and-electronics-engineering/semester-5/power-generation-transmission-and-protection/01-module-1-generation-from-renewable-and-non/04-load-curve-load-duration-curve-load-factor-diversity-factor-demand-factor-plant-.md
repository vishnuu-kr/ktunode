---
title: "Load curve – Load duration curve, Load factor, diversity factor, demand factor, Plant capacity factor, plant use factor - Numerical Problems"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 1: Generation from renewable and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36183"
status: "completed"
scrapedAt: "2026-05-23T16:23:26.003Z"
---
# Module 1: Generation from Renewable and Non-Renewable Sources - Load Characteristics and Factors

## Introduction to Load Characteristics in Power Systems

Understanding how electricity demand varies over time is crucial for efficient power generation, transmission, and distribution. This module introduces fundamental concepts related to load characteristics, which are essential for economic and reliable operation of the power system. This knowledge directly supports **CO1: Learn different types of power generating systems and schedule generation appropriate for a given area.**

### 1. Load Curve

The **Load Curve** is a graphical representation of the power demand of a system (or a part of it) plotted against time. It shows how the load varies throughout a day, week, or year.

*   **Definition:** A plot of instantaneous power demand against time.
*   **Key Features:**
    *   **Peak Load:** The maximum power demand during the period considered.
    *   **Average Load:** The average power demand over the period.
    *   **Minimum Load (Off-peak Load):** The minimum power demand during the period.
*   **Significance:**
    *   Helps in determining the **peak load**, which dictates the required generating capacity.
    *   Provides insights into the load variation patterns, aiding in **generation scheduling** (CO1).
    *   Facilitates the calculation of various important factors like load factor and diversity factor.
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1, "Introduction to Power Systems and Load Curves." Mehta & Mehta, "Principles of Power System," Chapter 1, "General Concepts."

**Example:** A daily load curve might show low demand during the night, increasing in the morning as people wake up and start using appliances, peaking in the evening due to residential and commercial activity, and then decreasing again overnight.

### 2. Load Duration Curve

The **Load Duration Curve** is obtained by plotting the load in descending order of magnitude against time. It shows how long certain load levels persist.

*   **Definition:** A graph of load magnitude plotted in descending order against time.
*   **Key Features:**
    *   The area under the curve represents the **total energy consumed** during the period.
    *   The height of any point on the curve represents the load magnitude at that time.
    *   The width of any section of the curve represents the duration for which that load level (or higher) was maintained.
*   **Significance:**
    *   Useful for **base load, intermediate, and peak load power plant sizing and scheduling** (CO1).
    *   Helps in determining the economics of power generation by identifying the duration of high and low loads, which can be met by different types of power plants (e.g., base load by thermal or nuclear, peak load by hydro or gas turbines).
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** If a load duration curve shows a load of 500 MW for 10 hours and 200 MW for 14 hours, it means the system operated at 500 MW or more for 10 hours and at 200 MW or more for 24 hours.

### 3. Load Factor

The **Load Factor** is the ratio of the average load to the maximum load over a specific period. It is a measure of how effectively the generating capacity is utilized.

*   **Definition:** Load Factor = (Average Load) / (Maximum Load)
*   **Calculation:**
    *   Average Load = Total Energy Consumed / Time Period
    *   Time Period = Number of hours in the period (e.g., 24 for a day, 24 * 30 for a month, 24 * 365 for a year).
*   **Significance:**
    *   A **higher load factor indicates better utilization of generating equipment** and lower per-unit cost of electricity.
    *   It influences the economic dispatch of power and the selection of power plants (CO1).
    *   Utilities aim to improve load factor through demand-side management techniques.
*   **Value:** Always less than or equal to 1 (or 100%).
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** If a power station has a maximum demand of 100 MW and the total energy consumed in a day is 1200 MWh, then:
Average Load = 1200 MWh / 24 h = 50 MW
Load Factor = 50 MW / 100 MW = 0.5 or 50%

### 4. Diversity Factor

The **Diversity Factor** is the ratio of the sum of individual maximum demands of various subdivisions of a system to the maximum demand of the whole system. It accounts for the fact that not all consumers reach their maximum demand simultaneously.

*   **Definition:** Diversity Factor = (Sum of Individual Maximum Demands) / (Maximum Demand of the System)
*   **Significance:**
    *   A diversity factor greater than 1 indicates that the sum of individual maximum demands is greater than the system's overall maximum demand.
    *   It allows power systems to be designed with less installed capacity than the sum of all individual peak demands, leading to **cost savings in generation, transmission, and distribution** (CO1, CO5).
    *   A higher diversity factor implies better utilization of the capacity.
*   **Value:** Always greater than or equal to 1.
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** Consider a small distribution network serving 10 houses. If each house has a maximum demand of 10 kW, the sum of individual maximum demands is 10 * 10 kW = 100 kW. However, due to diversity, the maximum demand of the entire network might be only 60 kW.
Diversity Factor = 100 kW / 60 kW = 1.67. This means the distribution transformer and feeders need to be sized for 60 kW, not 100 kW.

### 5. Demand Factor

The **Demand Factor** is the ratio of the maximum demand of a system or part of a system to the total connected load that comprises the system or part of the system.

*   **Definition:** Demand Factor = (Maximum Demand) / (Total Connected Load)
*   **Significance:**
    *   It indicates the extent to which the connected load is expected to be simultaneously active.
    *   Used in **designing and sizing electrical installations** (e.g., transformers, feeders) for industrial, commercial, and residential loads (CO5).
*   **Value:** Always less than or equal to 1.
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** A factory has a total connected load of 500 kW. The maximum demand observed during a day is 200 kW.
Demand Factor = 200 kW / 500 kW = 0.4 or 40%. This suggests that, on average, 40% of the connected load is in use at the time of maximum demand.

### 6. Plant Capacity Factor

The **Plant Capacity Factor** is the ratio of the actual energy generated by a power plant over a period to the maximum possible energy that could have been generated if the plant operated at its full rated capacity throughout the period.

*   **Definition:** Plant Capacity Factor = (Actual Energy Generated) / (Maximum Possible Energy Generation)
*   **Calculation:**
    *   Maximum Possible Energy Generation = Rated Capacity of Plant * Time Period
    *   Time Period in hours.
*   **Significance:**
    *   Measures the **utilization of the installed generating capacity** over a period.
    *   A low capacity factor might indicate poor maintenance, fuel shortages, or lack of demand.
    *   Essential for evaluating the performance and economics of a power plant (CO1).
*   **Value:** Always less than or equal to 1.
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** A power plant with a rated capacity of 200 MW generates 350,400 MWh in a year (365 days).
Maximum Possible Energy Generation = 200 MW * 24 h/day * 365 days = 1,752,000 MWh
Plant Capacity Factor = 350,400 MWh / 1,752,000 MWh = 0.2 or 20%

### 7. Plant Use Factor

The **Plant Use Factor** is the ratio of the actual energy generated by a power plant over a period to the total potential energy generation based on its maximum demand over that period. It reflects how often the plant was actually used to generate power.

*   **Definition:** Plant Use Factor = (Actual Energy Generated) / (Maximum Demand * Time Period)
*   **Calculation:**
    *   Maximum Demand is usually the peak demand the plant was designed to meet over the period.
*   **Significance:**
    *   It measures how much the plant was used relative to its peak capability during the period.
    *   Can be higher than the capacity factor if the plant's maximum demand is less than its rated capacity.
*   **Value:** Always less than or equal to 1.
*   **Textbook Reference:** Wadhwa C. L., "Electrical Power Systems," Chapter 1. Mehta & Mehta, "Principles of Power System," Chapter 1.

**Example:** A power plant with a rated capacity of 200 MW and a maximum demand of 150 MW during a year generates 350,400 MWh.
Time period = 365 days * 24 hours = 8760 hours
Plant Use Factor = 350,400 MWh / (150 MW * 8760 h) = 350,400 MWh / 1,314,000 MWh = 0.2666 or 26.66%

**Note on Plant Capacity Factor vs. Plant Use Factor:**
The **Capacity Factor** compares actual generation to the *maximum possible generation* (rated capacity * time).
The **Use Factor** compares actual generation to the energy that *could have been generated if operating at its maximum demand* for the entire period.

---

## Numerical Problems and Solutions

Let's work through some numerical problems to solidify our understanding.

**Problem 1:**
A power station has the following daily load data:
Time (hours) | Load (MW)
-----------------|-----------
00-04 | 40
04-08 | 60
08-12 | 120
12-16 | 100
16-20 | 150
20-24 | 80

Calculate:
a) Maximum Load
b) Average Load
c) Energy generated in 24 hours
d) Load Factor

**Solution:**

a) **Maximum Load:** From the table, the maximum load is **150 MW**.

b) **Average Load:**
First, calculate the energy generated in each period:
- 00-04: 40 MW * 4 h = 160 MWh
- 04-08: 60 MW * 4 h = 240 MWh
- 08-12: 120 MW * 4 h = 480 MWh
- 12-16: 100 MW * 4 h = 400 MWh
- 16-20: 150 MW * 4 h = 600 MWh
- 20-24: 80 MW * 4 h = 320 MWh

Total Energy Generated = 160 + 240 + 480 + 400 + 600 + 320 = 2200 MWh
Average Load = Total Energy Generated / Total Time = 2200 MWh / 24 h = **91.67 MW**

c) **Energy generated in 24 hours:** This is the sum calculated above: **2200 MWh**.

d) **Load Factor:**
Load Factor = Average Load / Maximum Load
Load Factor = 91.67 MW / 150 MW = 0.6111 or **61.11%**

---

**Problem 2:**
A generating station has a connected load of 300 MW and a maximum demand of 100 MW. The total units generated are 2400 MWh in a day. Calculate:
a) Demand Factor
b) Load Factor

**Solution:**

a) **Demand Factor:**
Demand Factor = Maximum Demand / Total Connected Load
Demand Factor = 100 MW / 300 MW = **0.333 or 33.3%**

b) **Load Factor:**
First, calculate the average load:
Average Load = Total Units Generated / Time Period = 2400 MWh / 24 h = 100 MW
Load Factor = Average Load / Maximum Demand
Load Factor = 100 MW / 100 MW = **1.0 or 100%**

*Observation:* In this specific case, the average load happens to be equal to the maximum demand. This implies the load was consistently at its peak for the entire day, which is highly unusual in practice.

---

**Problem 3:**
A system has a maximum demand of 50 MW. The station is supplied by three power plants with the following capacities and peak demands:
Plant A: Capacity = 20 MW, Peak Demand = 15 MW
Plant B: Capacity = 30 MW, Peak Demand = 25 MW
Plant C: Capacity = 40 MW, Peak Demand = 30 MW

Calculate:
a) Sum of individual maximum demands
b) Diversity Factor
c) Demand Factor for the system

**Solution:**

a) **Sum of individual maximum demands:**
Sum = Peak Demand of A + Peak Demand of B + Peak Demand of C
Sum = 15 MW + 25 MW + 30 MW = **70 MW**

b) **Diversity Factor:**
Diversity Factor = (Sum of Individual Maximum Demands) / (Maximum Demand of the System)
Diversity Factor = 70 MW / 50 MW = **1.4**

c) **Demand Factor for the system:**
Demand Factor = Maximum Demand of the System / Total Connected Load of the System
*We are not given the total connected load for the system. However, we can infer that the system's maximum demand is 50 MW. If we assume the total connected load is the sum of individual connected loads (which might not be explicitly given but implied by the components), we still need the connected load for each plant. Assuming the peak demand is representative of the connected load for simplicity in this context (which is a simplification), the connected load would be 20+30+40 = 90 MW.*
Let's re-read the definition of Demand Factor: "ratio of the maximum demand of a system or part of a system to the **total connected load** that comprises the system or part of the system."

*If the problem meant the connected loads of the plants are their rated capacities:*
Total Connected Load = Capacity of A + Capacity of B + Capacity of C = 20 MW + 30 MW + 40 MW = 90 MW
Demand Factor = 50 MW / 90 MW = **0.556 or 55.6%**

*If the problem meant the sum of individual maximum demands is the basis for "connected load" for the system's demand factor calculation (this interpretation is less standard but might be implied):*
Demand Factor = 50 MW / 70 MW = **0.714 or 71.4%**

**Most standard interpretation:** Demand Factor is calculated against the *total connected load* of the system's consumers, not the sum of peak demands of supplying plants. Assuming the *total connected load* of the consumers served by this system is 90 MW (sum of plant capacities, which is a common simplification if individual consumer loads aren't given).

Therefore, the most likely intended answer is:
Demand Factor = 50 MW / 90 MW = **0.556 or 55.6%**

---

**Problem 4:**
A thermal power plant has a maximum capacity of 500 MW. It operates for 330 days in a year and generates 4,500,000 MWh of energy. Calculate:
a) Plant Capacity Factor
b) Plant Use Factor (assume the plant's maximum demand during the year was 400 MW)

**Solution:**

a) **Plant Capacity Factor:**
Rated Capacity = 500 MW
Time Period = 330 days * 24 hours/day = 7920 hours
Actual Energy Generated = 4,500,000 MWh

Maximum Possible Energy Generation = Rated Capacity * Time Period
Maximum Possible Energy Generation = 500 MW * 7920 h = 3,960,000 MWh

*Correction:* There seems to be a misunderstanding in the problem statement or calculation. If the plant operates for 330 days, its maximum possible energy generation should be at least equal to or greater than the actual energy generated. Let's re-calculate the time period. The problem states it *operates* for 330 days, but the capacity factor is over a period. Let's assume the period is the entire year (365 days).

Let's assume the period is 365 days:
Time Period = 365 days * 24 hours/day = 8760 hours
Maximum Possible Energy Generation = 500 MW * 8760 h = 4,380,000 MWh

Plant Capacity Factor = Actual Energy Generated / Maximum Possible Energy Generation
Plant Capacity Factor = 4,500,000 MWh / 4,380,000 MWh = **1.027**

This result (greater than 1) indicates an error in the problem statement or my interpretation. A capacity factor cannot be greater than 1.
*Common error in problem phrasing:* Sometimes, "operates for 330 days" implies the plant was available and used during those days, but the capacity factor calculation is often for the entire year. Let's assume the energy generated is correct and try to find the missing piece.

Let's assume the problem meant the plant *produced* energy for 330 days, and the *total energy generated* is 4,500,000 MWh over the entire year.

If the plant was available for the whole year (8760 hours) and generated 4,500,000 MWh:
Plant Capacity Factor = 4,500,000 MWh / (500 MW * 8760 h) = 4,500,000 MWh / 4,380,000 MWh = 1.027 (Still > 1).

Let's try assuming the period is 330 days of operation for the capacity factor calculation:
Time Period = 330 days * 24 hours/day = 7920 hours
Maximum Possible Energy Generation during operation = 500 MW * 7920 h = 3,960,000 MWh.
Still less than 4,500,000 MWh. This is problematic.

Let's assume the energy generated is correct (4,500,000 MWh) and the rated capacity is correct (500 MW). Then the period for which the capacity factor is calculated must be such that the maximum possible generation is greater than or equal to the actual generation.
Maximum Possible Energy Generation = Plant Capacity Factor * Rated Capacity * Time Period
Let's assume Plant Capacity Factor is to be calculated for a full year (8760 hours).
Maximum Possible Energy Generation = 500 MW * 8760 h = 4,380,000 MWh.

**Revised Approach - Assuming a typo in the energy generated or capacity:**
If we assume the capacity factor should be reasonable (e.g., less than 1), let's consider the numbers:
If Plant Capacity Factor = 0.8 (80%), then Energy Generated = 0.8 * 500 MW * 8760 h = 3,504,000 MWh.
If the generated energy was 3,504,000 MWh instead of 4,500,000 MWh, then:
Plant Capacity Factor = 3,504,000 MWh / 4,380,000 MWh = 0.8 or 80%.

Let's stick to the given numbers and point out the anomaly. **If the question implies the plant was *available* for 365 days, and generated 4,500,000 MWh, then the numbers are inconsistent, as the maximum possible generation at 500 MW capacity over 365 days is 4,380,000 MWh.**

**However, if "operates for 330 days" means it was only available and *considered* for those 330 days for energy generation calculations:**
Time Period = 330 days * 24 hours/day = 7920 hours
Maximum Possible Energy Generation (during operation) = 500 MW * 7920 h = 3,960,000 MWh.
Again, the generated energy (4,500,000 MWh) is higher. This strongly suggests an error in the problem statement.

**Let's proceed with the standard definition, assuming the period is 365 days and the generated energy is as given, highlighting the inconsistency.**

a) **Plant Capacity Factor (Assuming period is 365 days):**
Maximum Possible Energy Generation = 500 MW * 365 days * 24 h/day = 4,380,000 MWh
Plant Capacity Factor = 4,500,000 MWh / 4,380,000 MWh = **1.027 (Inconsistent result, likely due to problem statement error)**.

If we *must* use the 330 days as the basis for operation AND the energy generated:
Let's assume the plant *was* capable of producing 4,500,000 MWh in 330 days.
Then the average output was 4,500,000 MWh / (330 days * 24 h) = 450.45 MW.
The capacity factor during these 330 days would be:
Plant Capacity Factor = Average Output / Rated Capacity = 450.45 MW / 500 MW = **0.9009 or 90.09%**
This interpretation assumes "operates for 330 days" means the period of evaluation, not just availability.

**Let's use this latter interpretation as it yields a plausible result.**
**a) Plant Capacity Factor:**
Time Period = 330 days
Actual Energy Generated = 4,500,000 MWh
Plant Capacity Factor = (Actual Energy Generated) / (Rated Capacity * Time Period in hours)
Plant Capacity Factor = 4,500,000 MWh / (500 MW * 330 days * 24 h/day)
Plant Capacity Factor = 4,500,000 MWh / (500 MW * 7920 h)
Plant Capacity Factor = 4,500,000 MWh / 3,960,000 MWh = **1.136 (Still inconsistent!)**

**Final Attempt at Problem 4, assuming the 330 days is when it was ON, and the energy is generated during that time:**
Let's assume the problem meant: "A thermal power plant has a maximum capacity of 500 MW. During a period of 330 days, it generated 4,500,000 MWh." The Capacity Factor is usually calculated over a full year unless specified. If the period is 330 days:
Max Possible Generation = 500 MW * 330 * 24 h = 3,960,000 MWh.
The given energy 4,500,000 MWh is still higher.

**Conclusion for Problem 4:** The problem statement as written contains inconsistent figures for capacity factor calculation.

Let's adjust the energy generated to be plausible: Suppose energy generated is 3,500,000 MWh in a year (365 days).
a) **Plant Capacity Factor:**
Maximum Possible Energy Generation = 500 MW * 365 days * 24 h/day = 4,380,000 MWh
Plant Capacity Factor = 3,500,000 MWh / 4,380,000 MWh = **0.799 or 79.9%**

b) **Plant Use Factor:**
Maximum Demand during the year = 400 MW
Time Period = 365 days * 24 h/day = 8760 hours
Actual Energy Generated = 3,500,000 MWh

Plant Use Factor = Actual Energy Generated / (Maximum Demand * Time Period)
Plant Use Factor = 3,500,000 MWh / (400 MW * 8760 h)
Plant Use Factor = 3,500,000 MWh / 3,504,000 MWh = **0.9988 or 99.88%**

---

**Problem 5:**
A town has a total connected load of 150 MW. The maximum demand of the town is 75 MW. The diversity factor is 1.5.
Calculate:
a) Demand Factor
b) The sum of the maximum demands of all consumers in the town.

**Solution:**

a) **Demand Factor:**
Demand Factor = Maximum Demand / Total Connected Load
Demand Factor = 75 MW / 150 MW = **0.5 or 50%**

b) **Sum of the maximum demands of all consumers:**
Diversity Factor = (Sum of individual maximum demands) / (Maximum Demand of the System)
1.5 = (Sum of individual maximum demands) / 75 MW
Sum of individual maximum demands = 1.5 * 75 MW = **112.5 MW**

---

## Practice Questions

1.  A power station has a maximum demand of 60 MW and a daily energy consumption of 720 MWh. Calculate the load factor.
2.  The total connected load in a residential area is 100 MW. The maximum demand recorded is 40 MW. Calculate the demand factor.
3.  A power plant has a rated capacity of 200 MW. It generated 438,000 MWh in a year. Calculate its plant capacity factor.
4.  A factory has several departments. The maximum demands of the departments are 10 kW, 15 kW, 8 kW, and 12 kW, respectively. The maximum demand of the factory as a whole is 30 kW. Calculate the diversity factor.
5.  A power system has a maximum demand of 200 MW. The total connected load is 300 MW. The average load over a day is 150 MW.
    a) Calculate the demand factor.
    b) Calculate the load factor.
    c) Calculate the diversity factor (assuming the 300 MW is the sum of individual maximum demands of connected loads).

---

## Answers to Practice Questions

1.  **Load Factor:**
    Average Load = 720 MWh / 24 h = 30 MW
    Load Factor = 30 MW / 60 MW = **0.5 or 50%**

2.  **Demand Factor:**
    Demand Factor = 40 MW / 100 MW = **0.4 or 40%**

3.  **Plant Capacity Factor:**
    Maximum Possible Energy Generation = 200 MW * 365 days * 24 h/day = 1,752,000 MWh
    Plant Capacity Factor = 438,000 MWh / 1,752,000 MWh = **0.25 or 25%**

4.  **Diversity Factor:**
    Sum of individual maximum demands = 10 kW + 15 kW + 8 kW + 12 kW = 45 kW
    Diversity Factor = 45 kW / 30 kW = **1.5**

5.  **For the power system:**
    a) **Demand Factor:**
       Demand Factor = Maximum Demand / Total Connected Load = 200 MW / 300 MW = **0.667 or 66.7%**
    b) **Load Factor:**
       Average Load = 150 MW
       Load Factor = Average Load / Maximum Demand = 150 MW / 200 MW = **0.75 or 75%**
    c) **Diversity Factor:**
       Assuming "total connected load" (300 MW) implies the sum of individual maximum demands:
       Diversity Factor = Sum of individual maximum demands / Maximum Demand of the System
       Diversity Factor = 300 MW / 200 MW = **1.5**

---

## Important Points to Remember

*   **Load Curve:** Visualizes demand vs. time.
*   **Load Duration Curve:** Visualizes load magnitude vs. duration.
*   **Load Factor:** Measures utilization of capacity over time. Higher is better.
*   **Diversity Factor:** Accounts for non-simultaneous peaks. Greater than 1. Essential for efficient sizing.
*   **Demand Factor:** Compares maximum demand to connected load. Less than or equal to 1.
*   **Capacity Factor:** Compares actual generation to maximum possible generation.
*   **Use Factor:** Compares actual generation to generation at maximum demand.
*   These factors are crucial for economic **generation scheduling (CO1)**, system planning, and **design of distribution systems (CO5)**.
*   Inconsistent data in problems often requires careful interpretation or identifying the issue in the problem statement itself.

---

This module provides the foundational understanding of how electricity demand behaves, which is essential for making informed decisions in power generation, transmission, and distribution planning. The concepts covered directly support the learning outcomes related to understanding power generation and system design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
